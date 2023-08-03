"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateEndDate = void 0;
var common_1 = require("../../Common/common");
var ValidateEndDate = /** @class */ (function () {
    function ValidateEndDate() {
    }
    ValidateEndDate.OnSaveHandler = function (executionContext) {
        try {
            var formContext = (executionContext.getFormContext());
            var startDateFieldValue = common_1.getValueInFormContext(formContext, "elca_startdate");
            var endDateFieldValue = common_1.getValueInFormContext(formContext, "elca_enddate");
            if (endDateFieldValue && startDateFieldValue.getTime() > endDateFieldValue.getTime()) {
                Xrm.Navigation.openAlertDialog({
                    text: "End date must be greater than the begin date.",
                });
                // Prevent the record from saving
                executionContext.getEventArgs().preventDefault();
            }
        }
        catch (e) {
            alert("An error occurred: " + e.message);
        }
    };
    return ValidateEndDate;
}());
exports.ValidateEndDate = ValidateEndDate;
//# sourceMappingURL=ValidateEndDateOnSave.js.map