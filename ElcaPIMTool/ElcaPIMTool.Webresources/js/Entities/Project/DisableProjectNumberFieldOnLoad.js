"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableProjectNumberField = void 0;
var common_1 = require("../../Common/common");
var DisableProjectNumberField = /** @class */ (function () {
    function DisableProjectNumberField() {
    }
    DisableProjectNumberField.OnLoadHandler = function (executionContext) {
        //get fromContext
        var formContext = (executionContext.getFormContext());
        // disable field change if Project number is created
        var projectNumberFieldValue = common_1.getValueInFormContext(formContext, "elca_projectnumber");
        if (projectNumberFieldValue != null) {
            formContext.getControl("elca_projectnumber").setDisabled(true);
        }
    };
    return DisableProjectNumberField;
}());
exports.DisableProjectNumberField = DisableProjectNumberField;
//# sourceMappingURL=DisableProjectNumberFieldOnLoad.js.map