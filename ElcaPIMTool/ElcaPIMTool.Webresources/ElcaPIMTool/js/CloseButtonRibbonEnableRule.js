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
/*!*********************************************************************!*\
  !*** ./ElcaPIMTool/Entities/Project/CloseButtonRibbonEnableRule.ts ***!
  \*********************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CloseButtonRibbon = void 0;
var common_1 = __webpack_require__(/*! ../../Common/common */ "./ElcaPIMTool/Common/common.ts");
var CloseButtonRibbon = /** @class */ (function () {
    function CloseButtonRibbon() {
    }
    CloseButtonRibbon.EnableRule = function (formContext) {
        var endDate = (0, common_1.getValueInFormContext)(formContext, "elca_enddate");
        var status = (0, common_1.getTextInFormContext)(formContext, "elca_projectstatus");
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

})();

self.CloseButtonRibbonEnableRule = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ3RCQSxnR0FBa0Y7QUFFbEY7SUFBQTtJQWFBLENBQUM7SUFaVSw0QkFBVSxHQUFqQixVQUFrQixXQUErQztRQUM3RCxJQUFNLE9BQU8sR0FBRyxrQ0FBcUIsRUFBQyxXQUFXLEVBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEUsSUFBTSxNQUFNLEdBQUcsaUNBQW9CLEVBQUMsV0FBVyxFQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuRSxJQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRTtlQUMvQyxNQUFNLEtBQUssUUFBUSxFQUFDO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDdkI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDO0FBYlksOENBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicmVzb3VyY2UvLi9FbGNhUElNVG9vbC9Db21tb24vY29tbW9uLnRzIiwid2VicGFjazovL3dlYnJlc291cmNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnJlc291cmNlLy4vRWxjYVBJTVRvb2wvRW50aXRpZXMvUHJvamVjdC9DbG9zZUJ1dHRvblJpYmJvbkVuYWJsZVJ1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgeXl5eSA9IChkYXRlLmdldEZ1bGxZZWFyKCkgJSAxMDApLnRvU3RyaW5nKCk7XHJcblxyXG4gIGxldCBtbSA9IGRhdGUuZ2V0TW9udGgoKTsgLy8gTW9udGhzIHN0YXJ0IGF0IDAhXHJcbiAgbGV0IGRkID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgbGV0IGRkcyA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgaWYgKGRkIDwgMTApIGRkcyA9IFwiMFwiICsgZGQudG9TdHJpbmcoKTtcclxuICBcclxuICBsZXQgTW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG5cclxuICByZXR1cm4gZGRzICsgXCItXCIgKyBNb250aHNbbW1dICsgXCItXCIgKyB5eXl5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzVmFsdWUoc3RhdHVzOiBzdHJpbmcpOiBlbGNhX3Byb2plY3RzdGF0dXMge1xyXG4gIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0byBsb3dlcmNhc2UgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvblxyXG4gIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICBjYXNlIFwiTmV3XCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuTmV3O1xyXG4gICAgY2FzZSBcIlBsYW5uZWRcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5QbGFubmVkO1xyXG4gICAgY2FzZSBcIkluUHJvZ3Jlc3NcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5JblByb2dyZXNzO1xyXG5cclxuICAgIGNhc2UgXCJGaW5pc2hlZFwiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLkZpbmlzaGVkO1xyXG5cclxuICAgIGNhc2UgXCJDbG9zZWRcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5DbG9zZWQ7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJvamVjdCBzdGF0dXM6ICR7c3RhdHVzfWApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1c0tleShzdGF0dXM6IGVsY2FfcHJvamVjdHN0YXR1cyk6IHN0cmluZyB7XHJcbiAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHRvIGxvd2VyY2FzZSBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBjb21wYXJpc29uXHJcbiAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLk5ldzpcclxuICAgICAgcmV0dXJuIFwiTmV3XCI7XHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5QbGFubmVkOlxyXG4gICAgICByZXR1cm4gXCJQbGFubmVkXCI7XHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5JblByb2dyZXNzOlxyXG4gICAgICByZXR1cm4gXCJJbiBQcm9ncmVzc1wiO1xyXG5cclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLkZpbmlzaGVkOlxyXG4gICAgICByZXR1cm4gXCJGaW5pc2hlZFwiO1xyXG5cclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLkNsb3NlZDpcclxuICAgICAgcmV0dXJuIFwiQ2xvc2VkXCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJvamVjdCBzdGF0dXM6ICR7c3RhdHVzfWApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlSW5Gb3JtQ29udGV4dChmb3JtQ29udGV4dDogRm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbiwgYXR0cmlidXRlOiBzdHJpbmcpIFxyXG57XHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcmV0dXJuIGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpLmdldFZhbHVlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0SW5Gb3JtQ29udGV4dChmb3JtQ29udGV4dDogRm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbiwgYXR0cmlidXRlOiBzdHJpbmcpIFxyXG57XHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcmV0dXJuIGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpLmdldFRleHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1Db250ZXh0SWQoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24pOiBzdHJpbmd7XHJcbiAgcmV0dXJuIGZvcm1Db250ZXh0LmRhdGEuZW50aXR5LmdldElkKCkucmVwbGFjZShcIntcIiwgXCJcIikucmVwbGFjZShcIn1cIiwgXCJcIik7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGdldFRleHRJbkZvcm1Db250ZXh0LCBnZXRWYWx1ZUluRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlQnV0dG9uUmliYm9ue1xyXG4gICAgc3RhdGljIEVuYWJsZVJ1bGUoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24pOiBib29sZWFue1xyXG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBnZXRWYWx1ZUluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQsXCJlbGNhX2VuZGRhdGVcIik7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0VGV4dEluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQsXCJlbGNhX3Byb2plY3RzdGF0dXNcIik7XHJcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgcHJpb3JEYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDMwKSk7XHJcblxyXG4gICAgICAgIGlmKGVuZERhdGUgJiYgZW5kRGF0ZS5nZXRUaW1lKCkgPD0gcHJpb3JEYXRlLmdldFRpbWUoKSBcclxuICAgICAgICAgICAgJiYgc3RhdHVzICE9PSAnQ2xvc2VkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==