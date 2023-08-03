import { getTextInFormContext, getValueInFormContext } from "../../Common/common";

export class CloseButtonRibbon{
    static EnableRule(formContext: Form.elca_project.Main.Information): boolean{
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
}