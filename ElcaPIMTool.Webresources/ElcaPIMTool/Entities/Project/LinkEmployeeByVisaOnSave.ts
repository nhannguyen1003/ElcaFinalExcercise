// export class LinkEmployeeByVisaOnSave{
//     static execute(executionContext: Xrm.ExecutionContext<any, any>){
//         //get fromContext
//         var formContext = <Form.elca_project.Main.Information> executionContext.getFormContext();
//         // disable field change if Project number is created

//         // handle link members to project
//         var projectId:string = formContext.data.entity.getId().replace("{", "").replace("}", "")
//         var elcaLinkEmployeeToProjectRequest = function (){};
//         elcaLinkEmployeeToProjectRequest.prototype.entity = {
//             "entityType": "elca_project",
//             "id": projectId
//         };
//         elcaLinkEmployeeToProjectRequest.prototype.getMetadata = function(){
//             return{
//                 boundParameter: "entity",
//                 parameterTypes:{                 
//                     "entity": {
//                         "typeName": "mscrm.elca_project",
//                         "structuralProperty": 5
//                     }
//                 },
//                 operationType: 0,
//                 operationName: "elca_LinkEmployeeToProject"
//             };
//         }

//         var request = new elcaLinkEmployeeToProjectRequest();
//         Xrm.WebApi.online.execute(request).then(
//             async (response) => {
//                 if(response.ok)
//                 {
//                     formContext.data.refresh();
//                 }
//             }
//         ).catch((error) => {
//             console.log(error);
//         });




//     }
// }
