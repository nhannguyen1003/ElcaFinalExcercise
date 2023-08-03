import { getValueInFormContext } from "../../Common/common";

export class ValidateEndDate {
  static OnSaveHandler(executionContext: Xrm.ExecutionContext<any, any>) {
    try {
      const formContext = <Form.elca_project.Main.Information>(
        executionContext.getFormContext()
      );
      var startDateFieldValue = getValueInFormContext(
        formContext,
        "elca_startdate"
      );
      var endDateFieldValue = getValueInFormContext(
        formContext,
        "elca_enddate"
      );
      if (startDateFieldValue.getTime() > endDateFieldValue.getTime()) {
        Xrm.Navigation.openAlertDialog({
          text: "End date must be greater than the begin date.",
        });
        // Prevent the record from saving
        executionContext.getEventArgs().preventDefault();
      }
    } catch (e) {
      alert(`An error occurred: ${e.message}`);
    }
  }
}
