var ElcaPIMTool;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ElcaPIMTool/Common/common.ts":
/*!**************************************!*\
  !*** ./ElcaPIMTool/Common/common.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFormContextId = exports.getTextInFormContext = exports.getValueInFormContext = exports.getStatusKey = exports.getStatusValue = exports.formatDate = void 0;
function formatDate(date) {
    var yyyy = (date.getFullYear() % 100).toString();
    var mm = date.getMonth(); // Months start at 0!
    var dd = date.getDate();
    var dds = date.getDate().toString();
    if (dd < 10)
        dds = "0" + dd.toString();
    var Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return dds + "-" + Months[mm] + "-" + yyyy;
}
exports.formatDate = formatDate;
function getStatusValue(status) {
    // Convert the string to lowercase for case-insensitive comparison
    switch (status) {
        case "New":
            return 283630000 /* elca_projectstatus.New */;
        case "Planned":
            return 283630001 /* elca_projectstatus.Planned */;
        case "InProgress":
            return 283630002 /* elca_projectstatus.InProgress */;
        case "Finished":
            return 283630003 /* elca_projectstatus.Finished */;
        case "Closed":
            return 283630004 /* elca_projectstatus.Closed */;
        default:
            throw new Error("Invalid project status: ".concat(status));
    }
}
exports.getStatusValue = getStatusValue;
function getStatusKey(status) {
    // Convert the string to lowercase for case-insensitive comparison
    switch (status) {
        case 283630000 /* elca_projectstatus.New */:
            return "New";
        case 283630001 /* elca_projectstatus.Planned */:
            return "Planned";
        case 283630002 /* elca_projectstatus.InProgress */:
            return "In Progress";
        case 283630003 /* elca_projectstatus.Finished */:
            return "Finished";
        case 283630004 /* elca_projectstatus.Closed */:
            return "Closed";
        default:
            throw new Error("Invalid project status: ".concat(status));
    }
}
exports.getStatusKey = getStatusKey;
function getValueInFormContext(formContext, attribute) {
    //@ts-ignore
    return formContext.getAttribute(attribute).getValue();
}
exports.getValueInFormContext = getValueInFormContext;
function getTextInFormContext(formContext, attribute) {
    //@ts-ignore
    return formContext.getAttribute(attribute).getText();
}
exports.getTextInFormContext = getTextInFormContext;
function getFormContextId(formContext) {
    return formContext.data.entity.getId().replace("{", "").replace("}", "");
}
exports.getFormContextId = getFormContextId;


/***/ }),

/***/ "./ElcaPIMTool/Entities/Project/ValidateMemberVisaOnChange.ts":
/*!********************************************************************!*\
  !*** ./ElcaPIMTool/Entities/Project/ValidateMemberVisaOnChange.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateMemberVisaOnChange = void 0;
var common_1 = __webpack_require__(/*! ../../Common/common */ "./ElcaPIMTool/Common/common.ts");
var ValidateMemberVisaOnChange = /** @class */ (function () {
    function ValidateMemberVisaOnChange() {
    }
    ValidateMemberVisaOnChange.execute = function (executionContext) {
        //get fromContext
        var formContext = executionContext.getFormContext();
        // disable field change if Project number is created
        var projectMembersField = formContext.getAttribute("elca_members");
        var projectMembersFieldValue = (0, common_1.getValueInFormContext)(formContext, "elca_members");
        if (projectMembersFieldValue) {
            //get members visa list from members field
            var membersVisaList = projectMembersFieldValue.split(",").map(function (visa) { return visa.trim(); });
            var condition = "";
            for (var i = 0; i < membersVisaList.length; i++) {
                condition += "<condition attribute=\"elca_visa\" operator=\"eq\" value=\"".concat(membersVisaList[i], "\" />");
            }
            Xrm.WebApi.retrieveMultipleRecords("contact", "?fetchXml=<fetch>\n            <entity name=\"contact\">\n              <filter type=\"or\">\n                ".concat(condition, "\n              </filter>\n            </entity>\n          </fetch>"))
                .then(function (response) {
                return __awaiter(this, void 0, void 0, function () {
                    var validMembersVisaList, invalidMembersVisaList, projectMembersValue, errorMessage;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, response.entities.map(function (record) { return record.elca_visa; })];
                            case 1:
                                validMembersVisaList = _a.sent();
                                invalidMembersVisaList = membersVisaList.filter(function (visa) { return !validMembersVisaList.includes(visa.toUpperCase()); });
                                projectMembersValue = validMembersVisaList.map(function (visa) { return visa.toUpperCase(); }).join(", ");
                                if (invalidMembersVisaList.length > 0) {
                                    errorMessage = "Employee visa don't included in employee visa list: " + invalidMembersVisaList.join(", ");
                                    alert(errorMessage);
                                }
                                projectMembersField.setValue(projectMembersValue);
                                return [2 /*return*/];
                        }
                    });
                });
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    return ValidateMemberVisaOnChange;
}());
exports.ValidateMemberVisaOnChange = ValidateMemberVisaOnChange;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./ElcaPIMTool/Entities/Project/ValidateMemberVisaOnChange.ts");
/******/ 	ElcaPIMTool = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUssV0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUV0RyxJQUFHLHNCQUFzQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BDO29DQUNVLFlBQVksR0FBRyxzREFBc0QsR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ2hILEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztpQ0FDdkI7Z0NBQ0QsbUJBQW1CLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7O2FBR3JELENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7U0FDVjtJQUNMLENBQUM7SUFDTCxpQ0FBQztBQUFELENBQUM7QUE1Q1ksZ0VBQTBCOzs7Ozs7O1VDRnZDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbGNhUElNVG9vbC8uL0VsY2FQSU1Ub29sL0NvbW1vbi9jb21tb24udHMiLCJ3ZWJwYWNrOi8vRWxjYVBJTVRvb2wvLi9FbGNhUElNVG9vbC9FbnRpdGllcy9Qcm9qZWN0L1ZhbGlkYXRlTWVtYmVyVmlzYU9uQ2hhbmdlLnRzIiwid2VicGFjazovL0VsY2FQSU1Ub29sL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0VsY2FQSU1Ub29sL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vRWxjYVBJTVRvb2wvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0VsY2FQSU1Ub29sL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICBjb25zdCB5eXl5ID0gKGRhdGUuZ2V0RnVsbFllYXIoKSAlIDEwMCkudG9TdHJpbmcoKTtcclxuXHJcbiAgbGV0IG1tID0gZGF0ZS5nZXRNb250aCgpOyAvLyBNb250aHMgc3RhcnQgYXQgMCFcclxuICBsZXQgZGQgPSBkYXRlLmdldERhdGUoKTtcclxuICBsZXQgZGRzID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuICBpZiAoZGQgPCAxMCkgZGRzID0gXCIwXCIgKyBkZC50b1N0cmluZygpO1xyXG4gIFxyXG4gIGxldCBNb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XHJcblxyXG4gIHJldHVybiBkZHMgKyBcIi1cIiArIE1vbnRoc1ttbV0gKyBcIi1cIiArIHl5eXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXNWYWx1ZShzdGF0dXM6IHN0cmluZyk6IGVsY2FfcHJvamVjdHN0YXR1cyB7XHJcbiAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHRvIGxvd2VyY2FzZSBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBjb21wYXJpc29uXHJcbiAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgIGNhc2UgXCJOZXdcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5OZXc7XHJcbiAgICBjYXNlIFwiUGxhbm5lZFwiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLlBsYW5uZWQ7XHJcbiAgICBjYXNlIFwiSW5Qcm9ncmVzc1wiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLkluUHJvZ3Jlc3M7XHJcblxyXG4gICAgY2FzZSBcIkZpbmlzaGVkXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuRmluaXNoZWQ7XHJcblxyXG4gICAgY2FzZSBcIkNsb3NlZFwiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLkNsb3NlZDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwcm9qZWN0IHN0YXR1czogJHtzdGF0dXN9YCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzS2V5KHN0YXR1czogZWxjYV9wcm9qZWN0c3RhdHVzKTogc3RyaW5nIHtcclxuICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlIGZvciBjYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb25cclxuICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuTmV3OlxyXG4gICAgICByZXR1cm4gXCJOZXdcIjtcclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLlBsYW5uZWQ6XHJcbiAgICAgIHJldHVybiBcIlBsYW5uZWRcIjtcclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLkluUHJvZ3Jlc3M6XHJcbiAgICAgIHJldHVybiBcIkluIFByb2dyZXNzXCI7XHJcblxyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuRmluaXNoZWQ6XHJcbiAgICAgIHJldHVybiBcIkZpbmlzaGVkXCI7XHJcblxyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuQ2xvc2VkOlxyXG4gICAgICByZXR1cm4gXCJDbG9zZWRcIjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwcm9qZWN0IHN0YXR1czogJHtzdGF0dXN9YCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVJbkZvcm1Db250ZXh0KGZvcm1Db250ZXh0OiBGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uLCBhdHRyaWJ1dGU6IHN0cmluZykgXHJcbntcclxuICAvL0B0cy1pZ25vcmVcclxuICByZXR1cm4gZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkuZ2V0VmFsdWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRJbkZvcm1Db250ZXh0KGZvcm1Db250ZXh0OiBGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uLCBhdHRyaWJ1dGU6IHN0cmluZykgXHJcbntcclxuICAvL0B0cy1pZ25vcmVcclxuICByZXR1cm4gZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkuZ2V0VGV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybUNvbnRleHRJZChmb3JtQ29udGV4dDogRm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbik6IHN0cmluZ3tcclxuICByZXR1cm4gZm9ybUNvbnRleHQuZGF0YS5lbnRpdHkuZ2V0SWQoKS5yZXBsYWNlKFwie1wiLCBcIlwiKS5yZXBsYWNlKFwifVwiLCBcIlwiKTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRWYWx1ZUluRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRlTWVtYmVyVmlzYU9uQ2hhbmdle1xyXG4gICAgc3RhdGljIGV4ZWN1dGUoZXhlY3V0aW9uQ29udGV4dDogWHJtLkV4ZWN1dGlvbkNvbnRleHQ8YW55LCBhbnk+KXtcclxuICAgICAgICAvL2dldCBmcm9tQ29udGV4dFxyXG4gICAgICAgIHZhciBmb3JtQ29udGV4dCA9IDxGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uPiBleGVjdXRpb25Db250ZXh0LmdldEZvcm1Db250ZXh0KCk7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBmaWVsZCBjaGFuZ2UgaWYgUHJvamVjdCBudW1iZXIgaXMgY3JlYXRlZFxyXG4gICAgICAgIHZhciBwcm9qZWN0TWVtYmVyc0ZpZWxkID0gZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKFwiZWxjYV9tZW1iZXJzXCIpO1xyXG4gICAgICAgIHZhciBwcm9qZWN0TWVtYmVyc0ZpZWxkVmFsdWUgPSBnZXRWYWx1ZUluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQsIFwiZWxjYV9tZW1iZXJzXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHByb2plY3RNZW1iZXJzRmllbGRWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZ2V0IG1lbWJlcnMgdmlzYSBsaXN0IGZyb20gbWVtYmVycyBmaWVsZFxyXG4gICAgICAgICAgICB2YXIgbWVtYmVyc1Zpc2FMaXN0OiBzdHJpbmdbXSA9IHByb2plY3RNZW1iZXJzRmllbGRWYWx1ZS5zcGxpdChcIixcIikubWFwKHZpc2E9PnZpc2EudHJpbSgpKTtcclxuICAgICAgICAgICAgdmFyIGNvbmRpdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtZW1iZXJzVmlzYUxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uICs9IGA8Y29uZGl0aW9uIGF0dHJpYnV0ZT1cImVsY2FfdmlzYVwiIG9wZXJhdG9yPVwiZXFcIiB2YWx1ZT1cIiR7bWVtYmVyc1Zpc2FMaXN0W2ldfVwiIC8+YFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBYcm0uV2ViQXBpLnJldHJpZXZlTXVsdGlwbGVSZWNvcmRzKFwiY29udGFjdFwiLGA/ZmV0Y2hYbWw9PGZldGNoPlxyXG4gICAgICAgICAgICA8ZW50aXR5IG5hbWU9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgPGZpbHRlciB0eXBlPVwib3JcIj5cclxuICAgICAgICAgICAgICAgICR7Y29uZGl0aW9ufVxyXG4gICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICA8L2VudGl0eT5cclxuICAgICAgICAgIDwvZmV0Y2g+YClcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24gKHJlc3BvbnNlKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGRpc3BsYXkgbGlzdCBvZiB2YWxpZCB2aXNhIG9uIGZvcm1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkTWVtYmVyc1Zpc2FMaXN0OiBzdHJpbmdbXSA9IGF3YWl0IHJlc3BvbnNlLmVudGl0aWVzLm1hcCgocmVjb3JkOiB7IGVsY2FfdmlzYTogYW55OyB9KT0+IHJlY29yZC5lbGNhX3Zpc2EpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW52YWxpZE1lbWJlcnNWaXNhTGlzdDogc3RyaW5nW10gPSBtZW1iZXJzVmlzYUxpc3QuZmlsdGVyKHZpc2E9PiF2YWxpZE1lbWJlcnNWaXNhTGlzdC5pbmNsdWRlcyh2aXNhLnRvVXBwZXJDYXNlKCkpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RNZW1iZXJzVmFsdWU6IHN0cmluZyA9IHZhbGlkTWVtYmVyc1Zpc2FMaXN0Lm1hcCgodmlzYSkgPT4gdmlzYS50b1VwcGVyQ2FzZSgpKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGludmFsaWRNZW1iZXJzVmlzYUxpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBcIkVtcGxveWVlIHZpc2EgZG9uJ3QgaW5jbHVkZWQgaW4gZW1wbG95ZWUgdmlzYSBsaXN0OiBcIiArIGludmFsaWRNZW1iZXJzVmlzYUxpc3Quam9pbihcIiwgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWVtYmVyc0ZpZWxkLnNldFZhbHVlKHByb2plY3RNZW1iZXJzVmFsdWUpOyAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vRWxjYVBJTVRvb2wvRW50aXRpZXMvUHJvamVjdC9WYWxpZGF0ZU1lbWJlclZpc2FPbkNoYW5nZS50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==