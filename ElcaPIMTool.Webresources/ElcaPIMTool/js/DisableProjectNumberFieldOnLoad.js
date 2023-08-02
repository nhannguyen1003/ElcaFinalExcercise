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
/*!*************************************************************************!*\
  !*** ./ElcaPIMTool/Entities/Project/DisableProjectNumberFieldOnLoad.ts ***!
  \*************************************************************************/

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

})();

ElcaPIMTool = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDdEJBLGdHQUE0RDtBQUU1RDtJQUFBO0lBVUEsQ0FBQztJQVRVLGdDQUFhLEdBQXBCLFVBQXFCLGdCQUFnRDtRQUNqRSxpQkFBaUI7UUFDakIsSUFBTSxXQUFXLEdBQXdDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNGLG9EQUFvRDtRQUNwRCxJQUFJLHVCQUF1QixHQUFHLGtDQUFxQixFQUFDLFdBQVcsRUFBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RGLElBQUksdUJBQXVCLElBQUksSUFBSSxFQUFFO1lBQ2pDLFdBQVcsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEU7SUFDTCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDO0FBVlksZ0RBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRWxjYVBJTVRvb2wvLi9FbGNhUElNVG9vbC9Db21tb24vY29tbW9uLnRzIiwid2VicGFjazovL0VsY2FQSU1Ub29sL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0VsY2FQSU1Ub29sLy4vRWxjYVBJTVRvb2wvRW50aXRpZXMvUHJvamVjdC9EaXNhYmxlUHJvamVjdE51bWJlckZpZWxkT25Mb2FkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gIGNvbnN0IHl5eXkgPSAoZGF0ZS5nZXRGdWxsWWVhcigpICUgMTAwKS50b1N0cmluZygpO1xyXG5cclxuICBsZXQgbW0gPSBkYXRlLmdldE1vbnRoKCk7IC8vIE1vbnRocyBzdGFydCBhdCAwIVxyXG4gIGxldCBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gIGxldCBkZHMgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xyXG4gIGlmIChkZCA8IDEwKSBkZHMgPSBcIjBcIiArIGRkLnRvU3RyaW5nKCk7XHJcbiAgXHJcbiAgbGV0IE1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuXHJcbiAgcmV0dXJuIGRkcyArIFwiLVwiICsgTW9udGhzW21tXSArIFwiLVwiICsgeXl5eTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1c1ZhbHVlKHN0YXR1czogc3RyaW5nKTogZWxjYV9wcm9qZWN0c3RhdHVzIHtcclxuICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdG8gbG93ZXJjYXNlIGZvciBjYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb25cclxuICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgY2FzZSBcIk5ld1wiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLk5ldztcclxuICAgIGNhc2UgXCJQbGFubmVkXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuUGxhbm5lZDtcclxuICAgIGNhc2UgXCJJblByb2dyZXNzXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuSW5Qcm9ncmVzcztcclxuXHJcbiAgICBjYXNlIFwiRmluaXNoZWRcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5GaW5pc2hlZDtcclxuXHJcbiAgICBjYXNlIFwiQ2xvc2VkXCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuQ2xvc2VkO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHByb2plY3Qgc3RhdHVzOiAke3N0YXR1c31gKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXNLZXkoc3RhdHVzOiBlbGNhX3Byb2plY3RzdGF0dXMpOiBzdHJpbmcge1xyXG4gIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0byBsb3dlcmNhc2UgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvblxyXG4gIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5OZXc6XHJcbiAgICAgIHJldHVybiBcIk5ld1wiO1xyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuUGxhbm5lZDpcclxuICAgICAgcmV0dXJuIFwiUGxhbm5lZFwiO1xyXG4gICAgY2FzZSBlbGNhX3Byb2plY3RzdGF0dXMuSW5Qcm9ncmVzczpcclxuICAgICAgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjtcclxuXHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5GaW5pc2hlZDpcclxuICAgICAgcmV0dXJuIFwiRmluaXNoZWRcIjtcclxuXHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5DbG9zZWQ6XHJcbiAgICAgIHJldHVybiBcIkNsb3NlZFwiO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHByb2plY3Qgc3RhdHVzOiAke3N0YXR1c31gKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24sIGF0dHJpYnV0ZTogc3RyaW5nKSBcclxue1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHJldHVybiBmb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKS5nZXRWYWx1ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dEluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24sIGF0dHJpYnV0ZTogc3RyaW5nKSBcclxue1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHJldHVybiBmb3JtQ29udGV4dC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKS5nZXRUZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtQ29udGV4dElkKGZvcm1Db250ZXh0OiBGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uKTogc3RyaW5ne1xyXG4gIHJldHVybiBmb3JtQ29udGV4dC5kYXRhLmVudGl0eS5nZXRJZCgpLnJlcGxhY2UoXCJ7XCIsIFwiXCIpLnJlcGxhY2UoXCJ9XCIsIFwiXCIpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBnZXRWYWx1ZUluRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3ROdW1iZXJGaWVsZHtcclxuICAgIHN0YXRpYyBvbkxvYWRIYW5kbGVyKGV4ZWN1dGlvbkNvbnRleHQ6IFhybS5FeGVjdXRpb25Db250ZXh0PGFueSwgYW55Pil7XHJcbiAgICAgICAgLy9nZXQgZnJvbUNvbnRleHRcclxuICAgICAgICBjb25zdCBmb3JtQ29udGV4dCA9IDxGb3JtLmVsY2FfcHJvamVjdC5NYWluLkluZm9ybWF0aW9uPiBleGVjdXRpb25Db250ZXh0LmdldEZvcm1Db250ZXh0KCk7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBmaWVsZCBjaGFuZ2UgaWYgUHJvamVjdCBudW1iZXIgaXMgY3JlYXRlZFxyXG4gICAgICAgIHZhciBwcm9qZWN0TnVtYmVyRmllbGRWYWx1ZSA9IGdldFZhbHVlSW5Gb3JtQ29udGV4dChmb3JtQ29udGV4dCxcImVsY2FfcHJvamVjdG51bWJlclwiKTtcclxuICAgICAgICBpZiAocHJvamVjdE51bWJlckZpZWxkVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3JtQ29udGV4dC5nZXRDb250cm9sKFwiZWxjYV9wcm9qZWN0bnVtYmVyXCIpLnNldERpc2FibGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=