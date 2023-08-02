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

/***/ "./ElcaPIMTool/Entities/Project/CloseButtonHandler.ts":
/*!************************************************************!*\
  !*** ./ElcaPIMTool/Entities/Project/CloseButtonHandler.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CloseButtonHandler = void 0;
var common_1 = __webpack_require__(/*! ../../Common/common */ "./ElcaPIMTool/Common/common.ts");
var CloseButtonHandler = /** @class */ (function () {
    function CloseButtonHandler() {
    }
    CloseButtonHandler.execute = function (formContext) {
        var projectId = (0, common_1.getFormContextId)(formContext);
        try {
            var confirmMessage = "Are you sure you want to close the project?";
            if (confirm(confirmMessage)) {
                var updateInfo = {
                    "statuscode": 283630000 /* elca_project_statuscode.Closed */,
                    "statecode": 1 /* elca_project_statecode.Inactive */,
                    "elca_projectstatus": 283630004 /* elca_projectstatus.Closed */,
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
            var endDate = (0, common_1.getValueInFormContext)(formContext, "elca_enddate");
            var status_1 = (0, common_1.getTextInFormContext)(formContext, "elca_projectstatus");
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


/***/ }),

/***/ "./ElcaPIMTool/Entities/Project/DateHandler.ts":
/*!*****************************************************!*\
  !*** ./ElcaPIMTool/Entities/Project/DateHandler.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateHandler = void 0;
var common_1 = __webpack_require__(/*! ../../Common/common */ "./ElcaPIMTool/Common/common.ts");
var DateHandler = /** @class */ (function () {
    function DateHandler() {
    }
    DateHandler.onSaveExecute = function (executionContext) {
        try {
            var formContext = (executionContext.getFormContext());
            var startDateFieldValue = (0, common_1.getValueInFormContext)(formContext, "elca_startdate");
            var endDateFieldValue = (0, common_1.getValueInFormContext)(formContext, "elca_enddate");
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
            var startDateFieldValue = (0, common_1.getValueInFormContext)(formContext, "elca_startdate");
            var endDateFieldValue = (0, common_1.getValueInFormContext)(formContext, "elca_enddate");
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


/***/ }),

/***/ "./ElcaPIMTool/Entities/Project/DisableProjectNumberFieldOnLoad.ts":
/*!*************************************************************************!*\
  !*** ./ElcaPIMTool/Entities/Project/DisableProjectNumberFieldOnLoad.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectNumberField = void 0;
var common_1 = __webpack_require__(/*! ../../Common/common */ "./ElcaPIMTool/Common/common.ts");
var ProjectNumberField = /** @class */ (function () {
    function ProjectNumberField() {
    }
    ProjectNumberField.onLoadHandler = function (executionContext) {
        //get fromContext
        var formContext = executionContext.getFormContext();
        // disable field change if Project number is created
        var projectNumberFieldValue = (0, common_1.getValueInFormContext)(formContext, "elca_projectnumber");
        if (projectNumberFieldValue != null) {
            formContext.getControl("elca_projectnumber").setDisabled(true);
        }
    };
    return ProjectNumberField;
}());
exports.ProjectNumberField = ProjectNumberField;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************************************************!*\
  !*** ./ElcaPIMTool/Entities/Project/PluginResources.ts ***!
  \*********************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateHandler = exports.CloseButtonHandler = exports.ValidateMemberVisaOnChange = exports.ProjectNumberField = void 0;
var DisableProjectNumberFieldOnLoad_1 = __webpack_require__(/*! ./DisableProjectNumberFieldOnLoad */ "./ElcaPIMTool/Entities/Project/DisableProjectNumberFieldOnLoad.ts");
Object.defineProperty(exports, "ProjectNumberField", ({ enumerable: true, get: function () { return DisableProjectNumberFieldOnLoad_1.ProjectNumberField; } }));
// import { LinkEmployeeByVisaOnSave } from './LinkEmployeeByVisaOnSave';
var ValidateMemberVisaOnChange_1 = __webpack_require__(/*! ./ValidateMemberVisaOnChange */ "./ElcaPIMTool/Entities/Project/ValidateMemberVisaOnChange.ts");
Object.defineProperty(exports, "ValidateMemberVisaOnChange", ({ enumerable: true, get: function () { return ValidateMemberVisaOnChange_1.ValidateMemberVisaOnChange; } }));
var CloseButtonHandler_1 = __webpack_require__(/*! ./CloseButtonHandler */ "./ElcaPIMTool/Entities/Project/CloseButtonHandler.ts");
Object.defineProperty(exports, "CloseButtonHandler", ({ enumerable: true, get: function () { return CloseButtonHandler_1.CloseButtonHandler; } }));
var DateHandler_1 = __webpack_require__(/*! ./DateHandler */ "./ElcaPIMTool/Entities/Project/DateHandler.ts");
Object.defineProperty(exports, "DateHandler", ({ enumerable: true, get: function () { return DateHandler_1.DateHandler; } }));

})();

ElcaPIMTool = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUV0RyxJQUFHLHNCQUFzQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3BDO29DQUNVLFlBQVksR0FBRyxzREFBc0QsR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ2hILEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztpQ0FDdkI7Z0NBQ0QsbUJBQW1CLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7O2FBR3JELENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7U0FDVjtJQUNMLENBQUM7SUFDTCxpQ0FBQztBQUFELENBQUM7QUE1Q1ksZ0VBQTBCOzs7Ozs7O1VDRnZDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkEsMEtBQXVFO0FBTTlELG9HQU5BLG9EQUFrQixRQU1BO0FBTDNCLHlFQUF5RTtBQUN6RSwySkFBMEU7QUFJZiw0R0FKbEQsdURBQTBCLFFBSWtEO0FBSHJGLG1JQUF5RDtBQUc4QixvR0FIL0UsdUNBQWtCLFFBRytFO0FBRnpHLDhHQUE0QztBQUUrRCw2RkFGbEcseUJBQVcsUUFFa0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbGNhUElNVG9vbC8uL0VsY2FQSU1Ub29sL0NvbW1vbi9jb21tb24udHMiLCJ3ZWJwYWNrOi8vRWxjYVBJTVRvb2wvLi9FbGNhUElNVG9vbC9FbnRpdGllcy9Qcm9qZWN0L0Nsb3NlQnV0dG9uSGFuZGxlci50cyIsIndlYnBhY2s6Ly9FbGNhUElNVG9vbC8uL0VsY2FQSU1Ub29sL0VudGl0aWVzL1Byb2plY3QvRGF0ZUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vRWxjYVBJTVRvb2wvLi9FbGNhUElNVG9vbC9FbnRpdGllcy9Qcm9qZWN0L0Rpc2FibGVQcm9qZWN0TnVtYmVyRmllbGRPbkxvYWQudHMiLCJ3ZWJwYWNrOi8vRWxjYVBJTVRvb2wvLi9FbGNhUElNVG9vbC9FbnRpdGllcy9Qcm9qZWN0L1ZhbGlkYXRlTWVtYmVyVmlzYU9uQ2hhbmdlLnRzIiwid2VicGFjazovL0VsY2FQSU1Ub29sL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0VsY2FQSU1Ub29sLy4vRWxjYVBJTVRvb2wvRW50aXRpZXMvUHJvamVjdC9QbHVnaW5SZXNvdXJjZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgeXl5eSA9IChkYXRlLmdldEZ1bGxZZWFyKCkgJSAxMDApLnRvU3RyaW5nKCk7XHJcblxyXG4gIGxldCBtbSA9IGRhdGUuZ2V0TW9udGgoKTsgLy8gTW9udGhzIHN0YXJ0IGF0IDAhXHJcbiAgbGV0IGRkID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgbGV0IGRkcyA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgaWYgKGRkIDwgMTApIGRkcyA9IFwiMFwiICsgZGQudG9TdHJpbmcoKTtcclxuICBcclxuICBsZXQgTW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG5cclxuICByZXR1cm4gZGRzICsgXCItXCIgKyBNb250aHNbbW1dICsgXCItXCIgKyB5eXl5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzVmFsdWUoc3RhdHVzOiBzdHJpbmcpOiBlbGNhX3Byb2plY3RzdGF0dXMge1xyXG4gIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0byBsb3dlcmNhc2UgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvblxyXG4gIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICBjYXNlIFwiTmV3XCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuTmV3O1xyXG4gICAgY2FzZSBcIlBsYW5uZWRcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5QbGFubmVkO1xyXG4gICAgY2FzZSBcIkluUHJvZ3Jlc3NcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5JblByb2dyZXNzO1xyXG5cclxuICAgIGNhc2UgXCJGaW5pc2hlZFwiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLkZpbmlzaGVkO1xyXG5cclxuICAgIGNhc2UgXCJDbG9zZWRcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5DbG9zZWQ7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJvamVjdCBzdGF0dXM6ICR7c3RhdHVzfWApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1c0tleShzdGF0dXM6IGVsY2FfcHJvamVjdHN0YXR1cyk6IHN0cmluZyB7XHJcbiAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHRvIGxvd2VyY2FzZSBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBjb21wYXJpc29uXHJcbiAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLk5ldzpcclxuICAgICAgcmV0dXJuIFwiTmV3XCI7XHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5QbGFubmVkOlxyXG4gICAgICByZXR1cm4gXCJQbGFubmVkXCI7XHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5JblByb2dyZXNzOlxyXG4gICAgICByZXR1cm4gXCJJbiBQcm9ncmVzc1wiO1xyXG5cclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLkZpbmlzaGVkOlxyXG4gICAgICByZXR1cm4gXCJGaW5pc2hlZFwiO1xyXG5cclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLkNsb3NlZDpcclxuICAgICAgcmV0dXJuIFwiQ2xvc2VkXCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJvamVjdCBzdGF0dXM6ICR7c3RhdHVzfWApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlSW5Gb3JtQ29udGV4dChmb3JtQ29udGV4dDogRm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbiwgYXR0cmlidXRlOiBzdHJpbmcpIFxyXG57XHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcmV0dXJuIGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpLmdldFZhbHVlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0SW5Gb3JtQ29udGV4dChmb3JtQ29udGV4dDogRm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbiwgYXR0cmlidXRlOiBzdHJpbmcpIFxyXG57XHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcmV0dXJuIGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpLmdldFRleHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1Db250ZXh0SWQoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24pOiBzdHJpbmd7XHJcbiAgcmV0dXJuIGZvcm1Db250ZXh0LmRhdGEuZW50aXR5LmdldElkKCkucmVwbGFjZShcIntcIiwgXCJcIikucmVwbGFjZShcIn1cIiwgXCJcIik7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0Rm9ybUNvbnRleHRJZCwgZ2V0VGV4dEluRm9ybUNvbnRleHQsIGdldFZhbHVlSW5Gb3JtQ29udGV4dCB9IGZyb20gXCIuLi8uLi9Db21tb24vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvc2VCdXR0b25IYW5kbGVyIHtcclxuICAgIHN0YXRpYyBleGVjdXRlKGZvcm1Db250ZXh0OiBGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uKTogdm9pZCBcclxuICAgIHtcclxuICAgICAgICBsZXQgcHJvamVjdElkID0gZ2V0Rm9ybUNvbnRleHRJZChmb3JtQ29udGV4dCk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICB2YXIgY29uZmlybU1lc3NhZ2U6c3RyaW5nID0gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2UgdGhlIHByb2plY3Q/XCI7XHJcbiAgICAgICAgICAgIGlmKGNvbmZpcm0oY29uZmlybU1lc3NhZ2UpKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNjb2RlXCI6IGVsY2FfcHJvamVjdF9zdGF0dXNjb2RlLkNsb3NlZCxcclxuICAgICAgICAgICAgICAgICAgICBcInN0YXRlY29kZVwiOiBlbGNhX3Byb2plY3Rfc3RhdGVjb2RlLkluYWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWxjYV9wcm9qZWN0c3RhdHVzXCI6IGVsY2FfcHJvamVjdHN0YXR1cy5DbG9zZWQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBYcm0uV2ViQXBpLnVwZGF0ZVJlY29yZChcImVsY2FfcHJvamVjdFwiLCBwcm9qZWN0SWQsIHVwZGF0ZUluZm8pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udGV4dC5kYXRhLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZW5hYmxlUnVsZShmb3JtQ29udGV4dDogRm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbik6IGJvb2xlYW57XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBlbmREYXRlID0gZ2V0VmFsdWVJbkZvcm1Db250ZXh0KGZvcm1Db250ZXh0LFwiZWxjYV9lbmRkYXRlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBnZXRUZXh0SW5Gb3JtQ29udGV4dChmb3JtQ29udGV4dCxcImVsY2FfcHJvamVjdHN0YXR1c1wiKTtcclxuICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdmFyIHByaW9yRGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSAzMCkpO1xyXG5cclxuICAgICAgICAgICAgaWYoZW5kRGF0ZSAmJiBlbmREYXRlLmdldFRpbWUoKSA8PSBwcmlvckRhdGUuZ2V0VGltZSgpIFxyXG4gICAgICAgICAgICAgICAgJiYgc3RhdHVzICE9PSAnQ2xvc2VkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuICBcclxuXHJcbiAgIiwiaW1wb3J0IHsgZ2V0VmFsdWVJbkZvcm1Db250ZXh0IH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlSGFuZGxlciB7XHJcbiAgc3RhdGljIG9uU2F2ZUV4ZWN1dGUoZXhlY3V0aW9uQ29udGV4dDogWHJtLkV4ZWN1dGlvbkNvbnRleHQ8YW55LCBhbnk+KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmb3JtQ29udGV4dCA9IDxGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uPihcclxuICAgICAgICBleGVjdXRpb25Db250ZXh0LmdldEZvcm1Db250ZXh0KClcclxuICAgICAgKTtcclxuICAgICAgdmFyIHN0YXJ0RGF0ZUZpZWxkVmFsdWUgPSBnZXRWYWx1ZUluRm9ybUNvbnRleHQoXHJcbiAgICAgICAgZm9ybUNvbnRleHQsXHJcbiAgICAgICAgXCJlbGNhX3N0YXJ0ZGF0ZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIHZhciBlbmREYXRlRmllbGRWYWx1ZSA9IGdldFZhbHVlSW5Gb3JtQ29udGV4dChcclxuICAgICAgICBmb3JtQ29udGV4dCxcclxuICAgICAgICBcImVsY2FfZW5kZGF0ZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChzdGFydERhdGVGaWVsZFZhbHVlLmdldFRpbWUoKSA+IGVuZERhdGVGaWVsZFZhbHVlLmdldFRpbWUoKSkge1xyXG4gICAgICAgIFhybS5OYXZpZ2F0aW9uLm9wZW5BbGVydERpYWxvZyh7XHJcbiAgICAgICAgICB0ZXh0OiBcIkVuZCBkYXRlIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBiZWdpbiBkYXRlLlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFByZXZlbnQgdGhlIHJlY29yZCBmcm9tIHNhdmluZ1xyXG4gICAgICAgIGV4ZWN1dGlvbkNvbnRleHQuZ2V0RXZlbnRBcmdzKCkucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgb25DaGFuZ2VFeGVjdXRlKGV4ZWN1dGlvbkNvbnRleHQ6IFhybS5FeGVjdXRpb25Db250ZXh0PGFueSwgYW55Pikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZm9ybUNvbnRleHQgPSA8Rm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbj4oXHJcbiAgICAgICAgZXhlY3V0aW9uQ29udGV4dC5nZXRGb3JtQ29udGV4dCgpXHJcbiAgICAgICk7XHJcbiAgICAgIHZhciBzdGFydERhdGVGaWVsZFZhbHVlID0gZ2V0VmFsdWVJbkZvcm1Db250ZXh0KFxyXG4gICAgICAgIGZvcm1Db250ZXh0LFxyXG4gICAgICAgIFwiZWxjYV9zdGFydGRhdGVcIlxyXG4gICAgICApO1xyXG4gICAgICB2YXIgZW5kRGF0ZUZpZWxkVmFsdWUgPSBnZXRWYWx1ZUluRm9ybUNvbnRleHQoXHJcbiAgICAgICAgZm9ybUNvbnRleHQsXHJcbiAgICAgICAgXCJlbGNhX2VuZGRhdGVcIlxyXG4gICAgICApO1xyXG4gICAgICBpZiAoc3RhcnREYXRlRmllbGRWYWx1ZS5nZXRUaW1lKCkgPiBlbmREYXRlRmllbGRWYWx1ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBmb3JtQ29udGV4dFxyXG4gICAgICAgICAgLmdldENvbnRyb2woXCJlbGNhX2VuZGRhdGVcIilcclxuICAgICAgICAgIC5zZXROb3RpZmljYXRpb24oXCJFbmQgZGF0ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgYmVnaW4gZGF0ZS5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaWVsZCBub3RpZmljYXRpb24gaWYgdGhlICBwYXNzZXNcclxuICAgICAgICBmb3JtQ29udGV4dC5nZXRDb250cm9sKFwiZWxjYV9lbmRkYXRlXCIpLmNsZWFyTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0VmFsdWVJbkZvcm1Db250ZXh0IH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TnVtYmVyRmllbGR7XHJcbiAgICBzdGF0aWMgb25Mb2FkSGFuZGxlcihleGVjdXRpb25Db250ZXh0OiBYcm0uRXhlY3V0aW9uQ29udGV4dDxhbnksIGFueT4pe1xyXG4gICAgICAgIC8vZ2V0IGZyb21Db250ZXh0XHJcbiAgICAgICAgY29uc3QgZm9ybUNvbnRleHQgPSA8Rm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbj4gZXhlY3V0aW9uQ29udGV4dC5nZXRGb3JtQ29udGV4dCgpO1xyXG4gICAgICAgIC8vIGRpc2FibGUgZmllbGQgY2hhbmdlIGlmIFByb2plY3QgbnVtYmVyIGlzIGNyZWF0ZWRcclxuICAgICAgICB2YXIgcHJvamVjdE51bWJlckZpZWxkVmFsdWUgPSBnZXRWYWx1ZUluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQsXCJlbGNhX3Byb2plY3RudW1iZXJcIik7XHJcbiAgICAgICAgaWYgKHByb2plY3ROdW1iZXJGaWVsZFZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9ybUNvbnRleHQuZ2V0Q29udHJvbChcImVsY2FfcHJvamVjdG51bWJlclwiKS5zZXREaXNhYmxlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0VmFsdWVJbkZvcm1Db250ZXh0IH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0ZU1lbWJlclZpc2FPbkNoYW5nZXtcclxuICAgIHN0YXRpYyBleGVjdXRlKGV4ZWN1dGlvbkNvbnRleHQ6IFhybS5FeGVjdXRpb25Db250ZXh0PGFueSwgYW55Pil7XHJcbiAgICAgICAgLy9nZXQgZnJvbUNvbnRleHRcclxuICAgICAgICB2YXIgZm9ybUNvbnRleHQgPSA8Rm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbj4gZXhlY3V0aW9uQ29udGV4dC5nZXRGb3JtQ29udGV4dCgpO1xyXG4gICAgICAgIC8vIGRpc2FibGUgZmllbGQgY2hhbmdlIGlmIFByb2plY3QgbnVtYmVyIGlzIGNyZWF0ZWRcclxuICAgICAgICB2YXIgcHJvamVjdE1lbWJlcnNGaWVsZCA9IGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShcImVsY2FfbWVtYmVyc1wiKTtcclxuICAgICAgICB2YXIgcHJvamVjdE1lbWJlcnNGaWVsZFZhbHVlID0gZ2V0VmFsdWVJbkZvcm1Db250ZXh0KGZvcm1Db250ZXh0LCBcImVsY2FfbWVtYmVyc1wiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihwcm9qZWN0TWVtYmVyc0ZpZWxkVmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2dldCBtZW1iZXJzIHZpc2EgbGlzdCBmcm9tIG1lbWJlcnMgZmllbGRcclxuICAgICAgICAgICAgdmFyIG1lbWJlcnNWaXNhTGlzdDogc3RyaW5nW10gPSBwcm9qZWN0TWVtYmVyc0ZpZWxkVmFsdWUuc3BsaXQoXCIsXCIpLm1hcCh2aXNhPT52aXNhLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHZhciBjb25kaXRpb24gPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWVtYmVyc1Zpc2FMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbiArPSBgPGNvbmRpdGlvbiBhdHRyaWJ1dGU9XCJlbGNhX3Zpc2FcIiBvcGVyYXRvcj1cImVxXCIgdmFsdWU9XCIke21lbWJlcnNWaXNhTGlzdFtpXX1cIiAvPmBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgWHJtLldlYkFwaS5yZXRyaWV2ZU11bHRpcGxlUmVjb3JkcyhcImNvbnRhY3RcIixgP2ZldGNoWG1sPTxmZXRjaD5cclxuICAgICAgICAgICAgPGVudGl0eSBuYW1lPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgIDxmaWx0ZXIgdHlwZT1cIm9yXCI+XHJcbiAgICAgICAgICAgICAgICAke2NvbmRpdGlvbn1cclxuICAgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgPC9lbnRpdHk+XHJcbiAgICAgICAgICA8L2ZldGNoPmApXHJcbiAgICAgICAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uIChyZXNwb25zZSkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBkaXNwbGF5IGxpc3Qgb2YgdmFsaWQgdmlzYSBvbiBmb3JtXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZE1lbWJlcnNWaXNhTGlzdDogc3RyaW5nW10gPSBhd2FpdCByZXNwb25zZS5lbnRpdGllcy5tYXAoKHJlY29yZDogeyBlbGNhX3Zpc2E6IGFueTsgfSk9PiByZWNvcmQuZWxjYV92aXNhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludmFsaWRNZW1iZXJzVmlzYUxpc3Q6IHN0cmluZ1tdID0gbWVtYmVyc1Zpc2FMaXN0LmZpbHRlcih2aXNhPT4hdmFsaWRNZW1iZXJzVmlzYUxpc3QuaW5jbHVkZXModmlzYS50b1VwcGVyQ2FzZSgpKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TWVtYmVyc1ZhbHVlOiBzdHJpbmcgPSB2YWxpZE1lbWJlcnNWaXNhTGlzdC5tYXAoKHZpc2EpID0+IHZpc2EudG9VcHBlckNhc2UoKSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpbnZhbGlkTWVtYmVyc1Zpc2FMaXN0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gXCJFbXBsb3llZSB2aXNhIGRvbid0IGluY2x1ZGVkIGluIGVtcGxveWVlIHZpc2EgbGlzdDogXCIgKyBpbnZhbGlkTWVtYmVyc1Zpc2FMaXN0LmpvaW4oXCIsIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvamVjdE1lbWJlcnNGaWVsZC5zZXRWYWx1ZShwcm9qZWN0TWVtYmVyc1ZhbHVlKTsgICBcclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBQcm9qZWN0TnVtYmVyRmllbGQgfSBmcm9tICcuL0Rpc2FibGVQcm9qZWN0TnVtYmVyRmllbGRPbkxvYWQnO1xyXG4vLyBpbXBvcnQgeyBMaW5rRW1wbG95ZWVCeVZpc2FPblNhdmUgfSBmcm9tICcuL0xpbmtFbXBsb3llZUJ5VmlzYU9uU2F2ZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRlTWVtYmVyVmlzYU9uQ2hhbmdlIH0gZnJvbSAnLi9WYWxpZGF0ZU1lbWJlclZpc2FPbkNoYW5nZSc7XHJcbmltcG9ydCB7Q2xvc2VCdXR0b25IYW5kbGVyIH0gZnJvbSAnLi9DbG9zZUJ1dHRvbkhhbmRsZXInO1xyXG5pbXBvcnQgeyBEYXRlSGFuZGxlciB9IGZyb20gJy4vRGF0ZUhhbmRsZXInO1xyXG5cclxuZXhwb3J0IHsgUHJvamVjdE51bWJlckZpZWxkLCAvKkxpbmtFbXBsb3llZUJ5VmlzYU9uU2F2ZSwqLyBWYWxpZGF0ZU1lbWJlclZpc2FPbkNoYW5nZSwgQ2xvc2VCdXR0b25IYW5kbGVyLCBEYXRlSGFuZGxlciB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==