"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateEndDate = void 0;
var common_1 = require("../../Common/common");
var ValidateEndDate = /** @class */ (function () {
    function ValidateEndDate() {
    }
    ValidateEndDate.OnChangeHandler = function (executionContext) {
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
            alert("An error occurred: " + e.message);
        }
    };
    return ValidateEndDate;
}());
exports.ValidateEndDate = ValidateEndDate;
//# sourceMappingURL=ValidateEndDateOnChange.js.map