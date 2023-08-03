"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateMemberVisa = void 0;
var common_1 = require("../../Common/common");
var ValidateMemberVisa = /** @class */ (function () {
    function ValidateMemberVisa() {
    }
    ValidateMemberVisa.OnChangeHandler = function (executionContext) {
        //get fromContext
        var formContext = (executionContext.getFormContext());
        // disable field change if Project number is created
        var projectMembersField = formContext.getAttribute("elca_members");
        var projectMembersFieldValue = common_1.getValueInFormContext(formContext, "elca_members");
        if (projectMembersFieldValue) {
            //get members visa list from members field
            var membersVisaList = projectMembersFieldValue
                .split(",")
                .map(function (visa) { return visa.trim(); });
            var condition = "";
            for (var i = 0; i < membersVisaList.length; i++) {
                condition += "<condition attribute=\"elca_visa\" operator=\"eq\" value=\"" + membersVisaList[i] + "\" />";
            }
            Xrm.WebApi.retrieveMultipleRecords("contact", "?fetchXml=<fetch>\n            <entity name=\"contact\">\n              <filter type=\"or\">\n                " + condition + "\n              </filter>\n            </entity>\n          </fetch>")
                .then(function (response) {
                return __awaiter(this, void 0, void 0, function () {
                    var validMembersVisaList, invalidMembersVisaList, projectMembersValue, errorMessage;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, response.entities.map(function (record) { return record.elca_visa; })];
                            case 1:
                                validMembersVisaList = _a.sent();
                                invalidMembersVisaList = membersVisaList.filter(function (visa) { return !validMembersVisaList.includes(visa.toUpperCase()); });
                                projectMembersValue = validMembersVisaList
                                    .map(function (visa) { return visa.toUpperCase(); })
                                    .join(", ");
                                if (invalidMembersVisaList.length > 0) {
                                    errorMessage = "Employee visa don't included in employee visa list: " +
                                        invalidMembersVisaList.join(", ");
                                    alert(errorMessage);
                                }
                                projectMembersField.setValue(projectMembersValue);
                                return [2 /*return*/];
                        }
                    });
                });
            })
                .catch(function (err) {
                alert("Something went wrong when change members field: " + err.message);
            });
        }
    };
    return ValidateMemberVisa;
}());
exports.ValidateMemberVisa = ValidateMemberVisa;
//# sourceMappingURL=ValidateMemberVisaOnChange.js.map