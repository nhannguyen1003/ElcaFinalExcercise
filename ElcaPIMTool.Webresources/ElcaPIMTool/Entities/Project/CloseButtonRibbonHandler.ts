import { getFormContextId, getTextInFormContext, getValueInFormContext } from "../../Common/common";

export class CloseButtonRibbonHandler {
    static execute(formContext: Form.elca_project.Main.Information): void 
    {
        let projectId = getFormContextId(formContext);
        try{
            var confirmMessage:string = "Are you sure you want to close the project?";
            if(confirm(confirmMessage)){
                const updateInfo = {
                    "statuscode": elca_project_statuscode.Closed,
                    "statecode": elca_project_statecode.Inactive,
                    "elca_projectstatus": elca_projectstatus.Closed,
                };
    
                Xrm.WebApi.updateRecord("elca_project", projectId, updateInfo)
                    .then(() => {
                        formContext.data.refresh();
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }
        catch (e) {
            console.log(e.message);
        }
    
    }

    static enableRule(formContext: Form.elca_project.Main.Information): boolean{
        try{
            const endDate = getValueInFormContext(formContext,"elca_enddate");
            const status = getTextInFormContext(formContext,"elca_projectstatus");
            var today = new Date();
            var priorDate = new Date(new Date().setDate(today.getDate() - 30));

            if(endDate && endDate.getTime() <= priorDate.getTime() 
                && status !== 'Closed'){
                    return true;
                }
            return false;
        }
        catch (e) {
            console.log(e.message);
        }
    }
}
  

  