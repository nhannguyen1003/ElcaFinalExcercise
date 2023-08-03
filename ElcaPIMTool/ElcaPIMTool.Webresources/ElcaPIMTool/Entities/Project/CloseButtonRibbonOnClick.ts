import { getFormContextId } from "../../Common/common";

export class CloseButtonRibbon {
  static OnClickHandler(formContext: Form.elca_project.Main.Information): void {
    var confirmMessage: string = "Are you sure you want to close the project?";
    let projectId = getFormContextId(formContext);
    if (confirm(confirmMessage)) {
      const updateInfo = {
        statuscode: elca_project_statuscode.Closed,
        statecode: elca_project_statecode.Inactive,
        elca_projectstatus: elca_projectstatus.Closed,
      };

      Xrm.WebApi.updateRecord("elca_project", projectId, updateInfo)
        .then(() => {
          formContext.data.refresh();
        })
        .catch((error) => {
          alert(`An error occurred when updating project: ${error.message}`);
        });
    }
  }
}
