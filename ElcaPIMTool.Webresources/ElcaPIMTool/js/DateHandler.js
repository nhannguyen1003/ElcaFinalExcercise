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
/*!*****************************************************!*\
  !*** ./ElcaPIMTool/Entities/Project/DateHandler.ts ***!
  \*****************************************************/

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

})();

ElcaPIMTool = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTCwrQ0FBK0M7Z0JBQy9DLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUM1RDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFDSCxrQkFBQztBQUFELENBQUM7QUFsRFksa0NBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FbGNhUElNVG9vbC8uL0VsY2FQSU1Ub29sL0NvbW1vbi9jb21tb24udHMiLCJ3ZWJwYWNrOi8vRWxjYVBJTVRvb2wvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRWxjYVBJTVRvb2wvLi9FbGNhUElNVG9vbC9FbnRpdGllcy9Qcm9qZWN0L0RhdGVIYW5kbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gIGNvbnN0IHl5eXkgPSAoZGF0ZS5nZXRGdWxsWWVhcigpICUgMTAwKS50b1N0cmluZygpO1xyXG5cclxuICBsZXQgbW0gPSBkYXRlLmdldE1vbnRoKCk7IC8vIE1vbnRocyBzdGFydCBhdCAwIVxyXG4gIGxldCBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gIGxldCBkZHMgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xyXG4gIGlmIChkZCA8IDEwKSBkZHMgPSBcIjBcIiArIGRkLnRvU3RyaW5nKCk7XHJcbiAgXHJcbiAgbGV0IE1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuXHJcbiAgcmV0dXJuIGRkcyArIFwiLVwiICsgTW9udGhzW21tXSArIFwiLVwiICsgeXl5eTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1c1ZhbHVlKHN0YXR1czogc3RyaW5nKTogZWxjYV9wcm9qZWN0c3RhdHVzIHtcclxuICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlIGZvciBjYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb25cclxuICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgY2FzZSBcIk5ld1wiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLk5ldztcclxuICAgIGNhc2UgXCJQbGFubmVkXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuUGxhbm5lZDtcclxuICAgIGNhc2UgXCJJblByb2dyZXNzXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuSW5Qcm9ncmVzcztcclxuXHJcbiAgICBjYXNlIFwiRmluaXNoZWRcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5GaW5pc2hlZDtcclxuXHJcbiAgICBjYXNlIFwiQ2xvc2VkXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuQ2xvc2VkO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHByb2plY3Qgc3RhdHVzOiAke3N0YXR1c31gKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXNLZXkoc3RhdHVzOiBlbGNhX3Byb2plY3RzdGF0dXMpOiBzdHJpbmcge1xyXG4gIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0byBsb3dlcmNhc2UgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvblxyXG4gIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5OZXc6XHJcbiAgICAgIHJldHVybiBcIk5ld1wiO1xyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuUGxhbm5lZDpcclxuICAgICAgcmV0dXJuIFwiUGxhbm5lZFwiO1xyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuSW5Qcm9ncmVzczpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuXHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5GaW5pc2hlZDpcclxuICAgICAgcmV0dXJuIFwiRmluaXNoZWRcIjtcclxuXHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5DbG9zZWQ6XHJcbiAgICAgIHJldHVybiBcIkNsb3NlZFwiO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHByb2plY3Qgc3RhdHVzOiAke3N0YXR1c31gKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24sIGF0dHJpYnV0ZTogc3RyaW5nKSBcclxue1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHJldHVybiBmb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKS5nZXRWYWx1ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dEluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24sIGF0dHJpYnV0ZTogc3RyaW5nKSBcclxue1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHJldHVybiBmb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKS5nZXRUZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtQ29udGV4dElkKGZvcm1Db250ZXh0OiBGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uKTogc3RyaW5ne1xyXG4gIHJldHVybiBmb3JtQ29udGV4dC5kYXRhLmVudGl0eS5nZXRJZCgpLnJlcGxhY2UoXCJ7XCIsIFwiXCIpLnJlcGxhY2UoXCJ9XCIsIFwiXCIpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBnZXRWYWx1ZUluRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVIYW5kbGVyIHtcclxuICBzdGF0aWMgb25TYXZlRXhlY3V0ZShleGVjdXRpb25Db250ZXh0OiBYcm0uRXhlY3V0aW9uQ29udGV4dDxhbnksIGFueT4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZvcm1Db250ZXh0ID0gPEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24+KFxyXG4gICAgICAgIGV4ZWN1dGlvbkNvbnRleHQuZ2V0Rm9ybUNvbnRleHQoKVxyXG4gICAgICApO1xyXG4gICAgICB2YXIgc3RhcnREYXRlRmllbGRWYWx1ZSA9IGdldFZhbHVlSW5Gb3JtQ29udGV4dChcclxuICAgICAgICBmb3JtQ29udGV4dCxcclxuICAgICAgICBcImVsY2Ffc3RhcnRkYXRlXCJcclxuICAgICAgKTtcclxuICAgICAgdmFyIGVuZERhdGVGaWVsZFZhbHVlID0gZ2V0VmFsdWVJbkZvcm1Db250ZXh0KFxyXG4gICAgICAgIGZvcm1Db250ZXh0LFxyXG4gICAgICAgIFwiZWxjYV9lbmRkYXRlXCJcclxuICAgICAgKTtcclxuICAgICAgaWYgKHN0YXJ0RGF0ZUZpZWxkVmFsdWUuZ2V0VGltZSgpID4gZW5kRGF0ZUZpZWxkVmFsdWUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgWHJtLk5hdmlnYXRpb24ub3BlbkFsZXJ0RGlhbG9nKHtcclxuICAgICAgICAgIHRleHQ6IFwiRW5kIGRhdGUgbXVzdCBiZSBncmVhdGVyIHRoYW4gdGhlIGJlZ2luIGRhdGUuXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gUHJldmVudCB0aGUgcmVjb3JkIGZyb20gc2F2aW5nXHJcbiAgICAgICAgZXhlY3V0aW9uQ29udGV4dC5nZXRFdmVudEFyZ3MoKS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBvbkNoYW5nZUV4ZWN1dGUoZXhlY3V0aW9uQ29udGV4dDogWHJtLkV4ZWN1dGlvbkNvbnRleHQ8YW55LCBhbnk+KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmb3JtQ29udGV4dCA9IDxGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uPihcclxuICAgICAgICBleGVjdXRpb25Db250ZXh0LmdldEZvcm1Db250ZXh0KClcclxuICAgICAgKTtcclxuICAgICAgdmFyIHN0YXJ0RGF0ZUZpZWxkVmFsdWUgPSBnZXRWYWx1ZUluRm9ybUNvbnRleHQoXHJcbiAgICAgICAgZm9ybUNvbnRleHQsXHJcbiAgICAgICAgXCJlbGNhX3N0YXJ0ZGF0ZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIHZhciBlbmREYXRlRmllbGRWYWx1ZSA9IGdldFZhbHVlSW5Gb3JtQ29udGV4dChcclxuICAgICAgICBmb3JtQ29udGV4dCxcclxuICAgICAgICBcImVsY2FfZW5kZGF0ZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChzdGFydERhdGVGaWVsZFZhbHVlLmdldFRpbWUoKSA+IGVuZERhdGVGaWVsZFZhbHVlLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGZvcm1Db250ZXh0XHJcbiAgICAgICAgICAuZ2V0Q29udHJvbChcImVsY2FfZW5kZGF0ZVwiKVxyXG4gICAgICAgICAgLnNldE5vdGlmaWNhdGlvbihcIkVuZCBkYXRlIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBiZWdpbiBkYXRlLlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGZpZWxkIG5vdGlmaWNhdGlvbiBpZiB0aGUgIHBhc3Nlc1xyXG4gICAgICAgIGZvcm1Db250ZXh0LmdldENvbnRyb2woXCJlbGNhX2VuZGRhdGVcIikuY2xlYXJOb3RpZmljYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=