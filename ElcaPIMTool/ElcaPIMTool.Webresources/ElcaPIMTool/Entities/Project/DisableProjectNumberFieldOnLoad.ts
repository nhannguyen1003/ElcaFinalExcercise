import { getValueInFormContext } from "../../Common/common";

export class DisableProjectNumberField {
  static OnLoadHandler(executionContext: Xrm.ExecutionContext<any, any>) {
    //get fromContext
    const formContext = <Form.elca_project.Main.Information>(
      executionContext.getFormContext()
    );
    // disable field change if Project number is created
    var projectNumberFieldValue = getValueInFormContext(
      formContext,
      "elca_projectnumber"
    );
    if (projectNumberFieldValue != null) {
      formContext.getControl("elca_projectnumber").setDisabled(true);
    }
  }
}
