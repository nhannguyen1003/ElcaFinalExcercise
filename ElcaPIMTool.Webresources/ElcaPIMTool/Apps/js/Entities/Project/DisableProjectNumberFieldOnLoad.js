"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectNumberField = void 0;
var common_1 = require("../../Common/common");
var ProjectNumberField = /** @class */ (function () {
    function ProjectNumberField() {
    }
    ProjectNumberField.onLoadHandler = function (executionContext) {
        //get fromContext
        var formContext = executionContext.getFormContext();
        // disable field change if Project number is created
        var projectNumberFieldValue = common_1.getValueInFormContext(formContext, "elca_projectnumber");
        if (projectNumberFieldValue != null) {
            formContext.getControl("elca_projectnumber").setDisabled(true);
        }
    };
    return ProjectNumberField;
}());
exports.ProjectNumberField = ProjectNumberField;
//# sourceMappingURL=DisableProjectNumberFieldOnLoad.js.map