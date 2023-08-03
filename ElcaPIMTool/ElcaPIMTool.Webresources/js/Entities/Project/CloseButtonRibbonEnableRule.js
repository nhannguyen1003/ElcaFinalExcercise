"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseButtonRibbon = void 0;
var common_1 = require("../../Common/common");
var CloseButtonRibbon = /** @class */ (function () {
    function CloseButtonRibbon() {
    }
    CloseButtonRibbon.EnableRule = function (formContext) {
        var endDate = common_1.getValueInFormContext(formContext, "elca_enddate");
        var status = common_1.getTextInFormContext(formContext, "elca_projectstatus");
        var today = new Date();
        var priorDate = new Date(new Date().setDate(today.getDate() - 30));
        if (endDate && endDate.getTime() <= priorDate.getTime()
            && status !== 'Closed') {
            return true;
        }
        return false;
    };
    return CloseButtonRibbon;
}());
exports.CloseButtonRibbon = CloseButtonRibbon;
//# sourceMappingURL=CloseButtonRibbonEnableRule.js.map