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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/*!*****************************************************************!*\
  !*** ./ElcaPIMTool/Entities/Project/ValidateEndDateOnChange.ts ***!
  \*****************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateEndDate = void 0;
var common_1 = __webpack_require__(/*! ../../Common/common */ "./ElcaPIMTool/Common/common.ts");
var ValidateEndDate = /** @class */ (function () {
    function ValidateEndDate() {
    }
    ValidateEndDate.OnChangeHandler = function (executionContext) {
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
            alert("An error occurred: ".concat(e.message));
        }
    };
    return ValidateEndDate;
}());
exports.ValidateEndDate = ValidateEndDate;

})();

self.ValidateEndDateOnChange = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEJBLGdHQUE0RDtBQUU1RDtJQUFBO0lBMEJBLENBQUM7SUF6QlEsK0JBQWUsR0FBdEIsVUFBdUIsZ0JBQWdEO1FBQ3JFLElBQUk7WUFDRixJQUFNLFdBQVcsR0FBdUMsQ0FDdEQsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQ2xDLENBQUM7WUFDRixJQUFJLG1CQUFtQixHQUFHLGtDQUFxQixFQUM3QyxXQUFXLEVBQ1gsZ0JBQWdCLENBQ2pCLENBQUM7WUFDRixJQUFJLGlCQUFpQixHQUFHLGtDQUFxQixFQUMzQyxXQUFXLEVBQ1gsY0FBYyxDQUNmLENBQUM7WUFDRixJQUFJLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxHQUFHLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUMvRCxXQUFXO3FCQUNSLFVBQVUsQ0FBQyxjQUFjLENBQUM7cUJBQzFCLGVBQWUsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNMLCtDQUErQztnQkFDL0MsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzVEO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLEtBQUssQ0FBQyw2QkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDO0FBMUJZLDBDQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicmVzb3VyY2UvLi9FbGNhUElNVG9vbC9Db21tb24vY29tbW9uLnRzIiwid2VicGFjazovL3dlYnJlc291cmNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnJlc291cmNlLy4vRWxjYVBJTVRvb2wvRW50aXRpZXMvUHJvamVjdC9WYWxpZGF0ZUVuZERhdGVPbkNoYW5nZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICBjb25zdCB5eXl5ID0gKGRhdGUuZ2V0RnVsbFllYXIoKSAlIDEwMCkudG9TdHJpbmcoKTtcclxuXHJcbiAgbGV0IG1tID0gZGF0ZS5nZXRNb250aCgpOyAvLyBNb250aHMgc3RhcnQgYXQgMCFcclxuICBsZXQgZGQgPSBkYXRlLmdldERhdGUoKTtcclxuICBsZXQgZGRzID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuICBpZiAoZGQgPCAxMCkgZGRzID0gXCIwXCIgKyBkZC50b1N0cmluZygpO1xyXG4gIFxyXG4gIGxldCBNb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XHJcblxyXG4gIHJldHVybiBkZHMgKyBcIi1cIiArIE1vbnRoc1ttbV0gKyBcIi1cIiArIHl5eXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXNWYWx1ZShzdGF0dXM6IHN0cmluZyk6IGVsY2FfcHJvamVjdHN0YXR1cyB7XHJcbiAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHRvIGxvd2VyY2FzZSBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBjb21wYXJpc29uXHJcbiAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgIGNhc2UgXCJOZXdcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5OZXc7XHJcbiAgICBjYXNlIFwiUGxhbm5lZFwiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLlBsYW5uZWQ7XHJcbiAgICBjYXNlIFwiSW5Qcm9ncmVzc1wiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLkluUHJvZ3Jlc3M7XHJcblxyXG4gICAgY2FzZSBcIkZpbmlzaGVkXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuRmluaXNoZWQ7XHJcblxyXG4gICAgY2FzZSBcIkNsb3NlZFwiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLkNsb3NlZDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwcm9qZWN0IHN0YXR1czogJHtzdGF0dXN9YCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzS2V5KHN0YXR1czogZWxjYV9wcm9qZWN0c3RhdHVzKTogc3RyaW5nIHtcclxuICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlIGZvciBjYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb25cclxuICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuTmV3OlxyXG4gICAgICByZXR1cm4gXCJOZXdcIjtcclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLlBsYW5uZWQ6XHJcbiAgICAgIHJldHVybiBcIlBsYW5uZWRcIjtcclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLkluUHJvZ3Jlc3M6XHJcbiAgICAgIHJldHVybiBcIkluIFByb2dyZXNzXCI7XHJcblxyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuRmluaXNoZWQ6XHJcbiAgICAgIHJldHVybiBcIkZpbmlzaGVkXCI7XHJcblxyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuQ2xvc2VkOlxyXG4gICAgICByZXR1cm4gXCJDbG9zZWRcIjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwcm9qZWN0IHN0YXR1czogJHtzdGF0dXN9YCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVJbkZvcm1Db250ZXh0KGZvcm1Db250ZXh0OiBGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uLCBhdHRyaWJ1dGU6IHN0cmluZykgXHJcbntcclxuICAvL0B0cy1pZ25vcmVcclxuICByZXR1cm4gZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkuZ2V0VmFsdWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRJbkZvcm1Db250ZXh0KGZvcm1Db250ZXh0OiBGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uLCBhdHRyaWJ1dGU6IHN0cmluZykgXHJcbntcclxuICAvL0B0cy1pZ25vcmVcclxuICByZXR1cm4gZm9ybUNvbnRleHQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkuZ2V0VGV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybUNvbnRleHRJZChmb3JtQ29udGV4dDogRm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbik6IHN0cmluZ3tcclxuICByZXR1cm4gZm9ybUNvbnRleHQuZGF0YS5lbnRpdHkuZ2V0SWQoKS5yZXBsYWNlKFwie1wiLCBcIlwiKS5yZXBsYWNlKFwifVwiLCBcIlwiKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgZ2V0VmFsdWVJbkZvcm1Db250ZXh0IH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0ZUVuZERhdGUge1xyXG4gIHN0YXRpYyBPbkNoYW5nZUhhbmRsZXIoZXhlY3V0aW9uQ29udGV4dDogWHJtLkV4ZWN1dGlvbkNvbnRleHQ8YW55LCBhbnk+KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmb3JtQ29udGV4dCA9IDxGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uPihcclxuICAgICAgICBleGVjdXRpb25Db250ZXh0LmdldEZvcm1Db250ZXh0KClcclxuICAgICAgKTtcclxuICAgICAgdmFyIHN0YXJ0RGF0ZUZpZWxkVmFsdWUgPSBnZXRWYWx1ZUluRm9ybUNvbnRleHQoXHJcbiAgICAgICAgZm9ybUNvbnRleHQsXHJcbiAgICAgICAgXCJlbGNhX3N0YXJ0ZGF0ZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIHZhciBlbmREYXRlRmllbGRWYWx1ZSA9IGdldFZhbHVlSW5Gb3JtQ29udGV4dChcclxuICAgICAgICBmb3JtQ29udGV4dCxcclxuICAgICAgICBcImVsY2FfZW5kZGF0ZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChzdGFydERhdGVGaWVsZFZhbHVlLmdldFRpbWUoKSA+IGVuZERhdGVGaWVsZFZhbHVlLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGZvcm1Db250ZXh0XHJcbiAgICAgICAgICAuZ2V0Q29udHJvbChcImVsY2FfZW5kZGF0ZVwiKVxyXG4gICAgICAgICAgLnNldE5vdGlmaWNhdGlvbihcIkVuZCBkYXRlIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBiZWdpbiBkYXRlLlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGZpZWxkIG5vdGlmaWNhdGlvbiBpZiB0aGUgIHBhc3Nlc1xyXG4gICAgICAgIGZvcm1Db250ZXh0LmdldENvbnRyb2woXCJlbGNhX2VuZGRhdGVcIikuY2xlYXJOb3RpZmljYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBhbGVydChgQW4gZXJyb3Igb2NjdXJyZWQ6ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=