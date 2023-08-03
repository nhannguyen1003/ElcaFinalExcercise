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
exports.ValidateMemberVisa = void 0;
var common_1 = __webpack_require__(/*! ../../Common/common */ "./ElcaPIMTool/Common/common.ts");
var ValidateMemberVisa = /** @class */ (function () {
    function ValidateMemberVisa() {
    }
    ValidateMemberVisa.OnChangeHandler = function (executionContext) {
        //get fromContext
        var formContext = (executionContext.getFormContext());
        // disable field change if Project number is created
        var projectMembersField = formContext.getAttribute("elca_members");
        var projectMembersFieldValue = (0, common_1.getValueInFormContext)(formContext, "elca_members");
        if (projectMembersFieldValue) {
            //get members visa list from members field
            var membersVisaList = projectMembersFieldValue
                .split(",")
                .map(function (visa) { return visa.trim(); });
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
/******/ 	self.ValidateMemberVisaOnChange = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CO3FDQUNyRCxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDO3FDQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBRWQsSUFBSSxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29DQUMvQixZQUFZLEdBQ2hCLHNEQUFzRDt3Q0FDdEQsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNwQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7aUNBQ3JCO2dDQUNELG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOzs7OzthQUNuRCxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1QsS0FBSyxDQUNILGtEQUFrRCxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQ2pFLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQztBQTVEWSxnREFBa0I7Ozs7Ozs7VUNGL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnJlc291cmNlLy4vRWxjYVBJTVRvb2wvQ29tbW9uL2NvbW1vbi50cyIsIndlYnBhY2s6Ly93ZWJyZXNvdXJjZS8uL0VsY2FQSU1Ub29sL0VudGl0aWVzL1Byb2plY3QvVmFsaWRhdGVNZW1iZXJWaXNhT25DaGFuZ2UudHMiLCJ3ZWJwYWNrOi8vd2VicmVzb3VyY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicmVzb3VyY2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJyZXNvdXJjZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicmVzb3VyY2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gIGNvbnN0IHl5eXkgPSAoZGF0ZS5nZXRGdWxsWWVhcigpICUgMTAwKS50b1N0cmluZygpO1xyXG5cclxuICBsZXQgbW0gPSBkYXRlLmdldE1vbnRoKCk7IC8vIE1vbnRocyBzdGFydCBhdCAwIVxyXG4gIGxldCBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gIGxldCBkZHMgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xyXG4gIGlmIChkZCA8IDEwKSBkZHMgPSBcIjBcIiArIGRkLnRvU3RyaW5nKCk7XHJcbiAgXHJcbiAgbGV0IE1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuXHJcbiAgcmV0dXJuIGRkcyArIFwiLVwiICsgTW9udGhzW21tXSArIFwiLVwiICsgeXl5eTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1c1ZhbHVlKHN0YXR1czogc3RyaW5nKTogZWxjYV9wcm9qZWN0c3RhdHVzIHtcclxuICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlIGZvciBjYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb25cclxuICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgY2FzZSBcIk5ld1wiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLk5ldztcclxuICAgIGNhc2UgXCJQbGFubmVkXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuUGxhbm5lZDtcclxuICAgIGNhc2UgXCJJblByb2dyZXNzXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuSW5Qcm9ncmVzcztcclxuXHJcbiAgICBjYXNlIFwiRmluaXNoZWRcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5GaW5pc2hlZDtcclxuXHJcbiAgICBjYXNlIFwiQ2xvc2VkXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuQ2xvc2VkO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHByb2plY3Qgc3RhdHVzOiAke3N0YXR1c31gKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXNLZXkoc3RhdHVzOiBlbGNhX3Byb2plY3RzdGF0dXMpOiBzdHJpbmcge1xyXG4gIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0byBsb3dlcmNhc2UgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvblxyXG4gIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5OZXc6XHJcbiAgICAgIHJldHVybiBcIk5ld1wiO1xyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuUGxhbm5lZDpcclxuICAgICAgcmV0dXJuIFwiUGxhbm5lZFwiO1xyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuSW5Qcm9ncmVzczpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuXHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5GaW5pc2hlZDpcclxuICAgICAgcmV0dXJuIFwiRmluaXNoZWRcIjtcclxuXHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5DbG9zZWQ6XHJcbiAgICAgIHJldHVybiBcIkNsb3NlZFwiO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHByb2plY3Qgc3RhdHVzOiAke3N0YXR1c31gKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24sIGF0dHJpYnV0ZTogc3RyaW5nKSBcclxue1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHJldHVybiBmb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKS5nZXRWYWx1ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dEluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24sIGF0dHJpYnV0ZTogc3RyaW5nKSBcclxue1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHJldHVybiBmb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKS5nZXRUZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtQ29udGV4dElkKGZvcm1Db250ZXh0OiBGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uKTogc3RyaW5ne1xyXG4gIHJldHVybiBmb3JtQ29udGV4dC5kYXRhLmVudGl0eS5nZXRJZCgpLnJlcGxhY2UoXCJ7XCIsIFwiXCIpLnJlcGxhY2UoXCJ9XCIsIFwiXCIpO1xyXG59XHJcbiIsImltcG9ydCB7IGdldFZhbHVlSW5Gb3JtQ29udGV4dCB9IGZyb20gXCIuLi8uLi9Db21tb24vY29tbW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGVNZW1iZXJWaXNhIHtcclxuICBzdGF0aWMgT25DaGFuZ2VIYW5kbGVyKGV4ZWN1dGlvbkNvbnRleHQ6IFhybS5FeGVjdXRpb25Db250ZXh0PGFueSwgYW55Pikge1xyXG4gICAgLy9nZXQgZnJvbUNvbnRleHRcclxuICAgIHZhciBmb3JtQ29udGV4dCA9IDxGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uPihcclxuICAgICAgZXhlY3V0aW9uQ29udGV4dC5nZXRGb3JtQ29udGV4dCgpXHJcbiAgICApO1xyXG4gICAgLy8gZGlzYWJsZSBmaWVsZCBjaGFuZ2UgaWYgUHJvamVjdCBudW1iZXIgaXMgY3JlYXRlZFxyXG4gICAgdmFyIHByb2plY3RNZW1iZXJzRmllbGQgPSBmb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoXCJlbGNhX21lbWJlcnNcIik7XHJcbiAgICB2YXIgcHJvamVjdE1lbWJlcnNGaWVsZFZhbHVlID0gZ2V0VmFsdWVJbkZvcm1Db250ZXh0KFxyXG4gICAgICBmb3JtQ29udGV4dCxcclxuICAgICAgXCJlbGNhX21lbWJlcnNcIlxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocHJvamVjdE1lbWJlcnNGaWVsZFZhbHVlKSB7XHJcbiAgICAgIC8vZ2V0IG1lbWJlcnMgdmlzYSBsaXN0IGZyb20gbWVtYmVycyBmaWVsZFxyXG4gICAgICB2YXIgbWVtYmVyc1Zpc2FMaXN0OiBzdHJpbmdbXSA9IHByb2plY3RNZW1iZXJzRmllbGRWYWx1ZVxyXG4gICAgICAgIC5zcGxpdChcIixcIilcclxuICAgICAgICAubWFwKCh2aXNhKSA9PiB2aXNhLnRyaW0oKSk7XHJcbiAgICAgIHZhciBjb25kaXRpb24gPSBcIlwiO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbWJlcnNWaXNhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbmRpdGlvbiArPSBgPGNvbmRpdGlvbiBhdHRyaWJ1dGU9XCJlbGNhX3Zpc2FcIiBvcGVyYXRvcj1cImVxXCIgdmFsdWU9XCIke21lbWJlcnNWaXNhTGlzdFtpXX1cIiAvPmA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFhybS5XZWJBcGkucmV0cmlldmVNdWx0aXBsZVJlY29yZHMoXHJcbiAgICAgICAgXCJjb250YWN0XCIsXHJcbiAgICAgICAgYD9mZXRjaFhtbD08ZmV0Y2g+XHJcbiAgICAgICAgICAgIDxlbnRpdHkgbmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICA8ZmlsdGVyIHR5cGU9XCJvclwiPlxyXG4gICAgICAgICAgICAgICAgJHtjb25kaXRpb259XHJcbiAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgIDwvZW50aXR5PlxyXG4gICAgICAgICAgPC9mZXRjaD5gXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbihhc3luYyBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIC8vIGhhbmRsZSBkaXNwbGF5IGxpc3Qgb2YgdmFsaWQgdmlzYSBvbiBmb3JtXHJcbiAgICAgICAgICBjb25zdCB2YWxpZE1lbWJlcnNWaXNhTGlzdDogc3RyaW5nW10gPSBhd2FpdCByZXNwb25zZS5lbnRpdGllcy5tYXAoXHJcbiAgICAgICAgICAgIChyZWNvcmQ6IHsgZWxjYV92aXNhOiBhbnkgfSkgPT4gcmVjb3JkLmVsY2FfdmlzYVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IGludmFsaWRNZW1iZXJzVmlzYUxpc3Q6IHN0cmluZ1tdID0gbWVtYmVyc1Zpc2FMaXN0LmZpbHRlcihcclxuICAgICAgICAgICAgKHZpc2EpID0+ICF2YWxpZE1lbWJlcnNWaXNhTGlzdC5pbmNsdWRlcyh2aXNhLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgcHJvamVjdE1lbWJlcnNWYWx1ZTogc3RyaW5nID0gdmFsaWRNZW1iZXJzVmlzYUxpc3RcclxuICAgICAgICAgICAgLm1hcCgodmlzYSkgPT4gdmlzYS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAgICAgICAuam9pbihcIiwgXCIpO1xyXG5cclxuICAgICAgICAgIGlmIChpbnZhbGlkTWVtYmVyc1Zpc2FMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID1cclxuICAgICAgICAgICAgICBcIkVtcGxveWVlIHZpc2EgZG9uJ3QgaW5jbHVkZWQgaW4gZW1wbG95ZWUgdmlzYSBsaXN0OiBcIiArXHJcbiAgICAgICAgICAgICAgaW52YWxpZE1lbWJlcnNWaXNhTGlzdC5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwcm9qZWN0TWVtYmVyc0ZpZWxkLnNldFZhbHVlKHByb2plY3RNZW1iZXJzVmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdoZW4gY2hhbmdlIG1lbWJlcnMgZmllbGQ6IFwiICsgZXJyLm1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL0VsY2FQSU1Ub29sL0VudGl0aWVzL1Byb2plY3QvVmFsaWRhdGVNZW1iZXJWaXNhT25DaGFuZ2UudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=