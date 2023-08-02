import { getValueInFormContext } from "../../Common/common";

export class DateHandler {
  static onSaveExecute(executionContext: Xrm.ExecutionContext<any, any>) {
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
      console.log(e.message);
    }
  }
  static onChangeExecute(executionContext: Xrm.ExecutionContext<any, any>) {
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
        formContext
          .getControl("elca_enddate")
          .setNotification("End date must be greater than the begin date.");
      } else {
        // Remove the field notification if the  passes
        formContext.getControl("elca_enddate").clearNotification();
      }
    } catch (e) {
      console.log(e.message);
    }
  }
}
