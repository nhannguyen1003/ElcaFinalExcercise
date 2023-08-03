"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseButtonRibbon = void 0;
var common_1 = require("../../Common/common");
var CloseButtonRibbon = /** @class */ (function () {
    function CloseButtonRibbon() {
    }
    CloseButtonRibbon.OnClickHandler = function (formContext) {
        var confirmMessage = "Are you sure you want to close the project?";
        var projectId = common_1.getFormContextId(formContext);
        if (confirm(confirmMessage)) {
            var updateInfo = {
                statuscode: 283630000 /* Closed */,
                statecode: 1 /* Inactive */,
                elca_projectstatus: 283630004 /* Closed */,
            };
            Xrm.WebApi.updateRecord("elca_project", projectId, updateInfo)
                .then(function () {
                formContext.data.refresh();
            })
                .catch(function (error) {
                alert("An error occurred when updating project: " + error.message);
            });
        }
    };
    return CloseButtonRibbon;
}());
exports.CloseButtonRibbon = CloseButtonRibbon;
//# sourceMappingURL=CloseButtonRibbonOnClick.js.map