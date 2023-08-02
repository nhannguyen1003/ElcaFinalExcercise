"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseButtonHandler = void 0;
var common_1 = require("../../Common/common");
var CloseButtonHandler = /** @class */ (function () {
    function CloseButtonHandler() {
    }
    CloseButtonHandler.execute = function (formContext) {
        var projectId = common_1.getFormContextId(formContext);
        try {
            var confirmMessage = "Are you sure you want to close the project?";
            if (confirm(confirmMessage)) {
                var updateInfo = {
                    "statuscode": 283630000 /* Closed */,
                    "statecode": 1 /* Inactive */,
                    "elca_projectstatus": 283630004 /* Closed */,
                };
                Xrm.WebApi.updateRecord("elca_project", projectId, updateInfo)
                    .then(function () {
                    formContext.data.refresh();
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }
        }
        catch (e) {
            console.log(e.message);
        }
    };
    CloseButtonHandler.enableRule = function (formContext) {
        try {
            var endDate = common_1.getValueInFormContext(formContext, "elca_enddate");
            var status_1 = common_1.getTextInFormContext(formContext, "elca_projectstatus");
            var today = new Date();
            var priorDate = new Date(new Date().setDate(today.getDate() - 30));
            if (endDate && endDate.getTime() <= priorDate.getTime()
                && status_1 !== 'Closed') {
                return true;
            }
            return false;
        }
        catch (e) {
            console.log(e.message);
        }
    };
    return CloseButtonHandler;
}());
exports.CloseButtonHandler = CloseButtonHandler;
//# sourceMappingURL=CloseButtonHandler.js.map