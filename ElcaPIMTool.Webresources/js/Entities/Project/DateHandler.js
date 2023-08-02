"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHandler = void 0;
var common_1 = require("../../Common/common");
var DateHandler = /** @class */ (function () {
    function DateHandler() {
    }
    DateHandler.onSaveExecute = function (executionContext) {
        try {
            var formContext = (executionContext.getFormContext());
            var startDateFieldValue = common_1.getValueInFormContext(formContext, "elca_startdate");
            var endDateFieldValue = common_1.getValueInFormContext(formContext, "elca_enddate");
            if (startDateFieldValue.getTime() > endDateFieldValue.getTime()) {
                Xrm.Navigation.openAlertDialog({
                    text: "End date must be greater than the begin date.",
                });
                // Prevent the record from saving
                executionContext.getEventArgs().preventDefault();
            }
        }
        catch (e) {
            console.log(e.message);
        }
    };
    DateHandler.onChangeExecute = function (executionContext) {
        try {
            var formContext = (executionContext.getFormContext());
            var startDateFieldValue = common_1.getValueInFormContext(formContext, "elca_startdate");
            var endDateFieldValue = common_1.getValueInFormContext(formContext, "elca_enddate");
            if (startDateFieldValue.getTime() > endDateFieldValue.getTime()) {
                formContext
                    .getControl("elca_enddate")
                    .setNotification("End date must be greater than the begin date.");
            }
            else {
                // Remove the field notification if the  passes
                formContext.getControl("elca_enddate").clearNotification();
            }
        }
        catch (e) {
            console.log(e.message);
        }
    };
    return DateHandler;
}());
exports.DateHandler = DateHandler;
//# sourceMappingURL=DateHandler.js.map