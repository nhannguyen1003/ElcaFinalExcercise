import { getValueInFormContext } from "../../Common/common";

export class ValidateMemberVisaOnChange{
    static execute(executionContext: Xrm.ExecutionContext<any, any>){
        //get fromContext
        var formContext = <Form.elca_project.Main.Information> executionContext.getFormContext();
        // disable field change if Project number is created
        var projectMembersField = formContext.getAttribute("elca_members");
        var projectMembersFieldValue = getValueInFormContext(formContext, "elca_members");
        
        if(projectMembersFieldValue)
        {
            //get members visa list from members field
            var membersVisaList: string[] = projectMembersFieldValue.split(",").map(visa=>visa.trim());
            var condition = "";
            for(let i = 0; i < membersVisaList.length; i++){
                condition += `<condition attribute="elca_visa" operator="eq" value="${membersVisaList[i]}" />`
            }

            Xrm.WebApi.retrieveMultipleRecords("contact",`?fetchXml=<fetch>
            <entity name="contact">
              <filter type="or">
                ${condition}
              </filter>
            </entity>
          </fetch>`)
            .then(async function (response) 
            {
                // handle display list of valid visa on form
                const validMembersVisaList: string[] = await response.entities.map((record: { elca_visa: any; })=> record.elca_visa);
                const invalidMembersVisaList: string[] = membersVisaList.filter(visa=>!validMembersVisaList.includes(visa.toUpperCase()));
                const projectMembersValue: string = validMembersVisaList.map((visa) => visa.toUpperCase()).join(", ");
                
                if(invalidMembersVisaList.length > 0)
                {
                    const errorMessage = "Employee visa don't included in employee visa list: " + invalidMembersVisaList.join(", ");
                    alert(errorMessage);
                }
                projectMembersField.setValue(projectMembersValue);   


            }).catch((err) =>{
                    console.log(err);
                });
        }
    }
}
