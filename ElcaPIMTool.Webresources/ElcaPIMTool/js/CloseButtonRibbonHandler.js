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
/*!******************************************************************!*\
  !*** ./ElcaPIMTool/Entities/Project/CloseButtonRibbonHandler.ts ***!
  \******************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CloseButtonRibbonHandler = void 0;
var common_1 = __webpack_require__(/*! ../../Common/common */ "./ElcaPIMTool/Common/common.ts");
var CloseButtonRibbonHandler = /** @class */ (function () {
    function CloseButtonRibbonHandler() {
    }
    CloseButtonRibbonHandler.execute = function (formContext) {
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
    CloseButtonRibbonHandler.enableRule = function (formContext) {
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
    return CloseButtonRibbonHandler;
}());
exports.CloseButtonRibbonHandler = CloseButtonRibbonHandler;

})();

ElcaPIMTool = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDLENBQUMsQ0FBQztZQUVuRSxJQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRTttQkFDL0MsUUFBTSxLQUFLLFFBQVEsRUFBQztnQkFDbkIsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxDQUFDLEVBQUU7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUM7QUE3Q1ksNERBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRWxjYVBJTVRvb2wvLi9FbGNhUElNVG9vbC9Db21tb24vY29tbW9uLnRzIiwid2VicGFjazovL0VsY2FQSU1Ub29sL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0VsY2FQSU1Ub29sLy4vRWxjYVBJTVRvb2wvRW50aXRpZXMvUHJvamVjdC9DbG9zZUJ1dHRvblJpYmJvbkhhbmRsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgeXl5eSA9IChkYXRlLmdldEZ1bGxZZWFyKCkgJSAxMDApLnRvU3RyaW5nKCk7XHJcblxyXG4gIGxldCBtbSA9IGRhdGUuZ2V0TW9udGgoKTsgLy8gTW9udGhzIHN0YXJ0IGF0IDAhXHJcbiAgbGV0IGRkID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgbGV0IGRkcyA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgaWYgKGRkIDwgMTApIGRkcyA9IFwiMFwiICsgZGQudG9TdHJpbmcoKTtcclxuICBcclxuICBsZXQgTW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG5cclxuICByZXR1cm4gZGRzICsgXCItXCIgKyBNb250aHNbbW1dICsgXCItXCIgKyB5eXl5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzVmFsdWUoc3RhdHVzOiBzdHJpbmcpOiBlbGNhX3Byb2plY3RzdGF0dXMge1xyXG4gIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0byBsb3dlcmNhc2UgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvblxyXG4gIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICBjYXNlIFwiTmV3XCI6XHJcbiAgICAgIHJldHVybiBlbGNhX3Byb2plY3RzdGF0dXMuTmV3O1xyXG4gICAgY2FzZSBcIlBsYW5uZWRcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5QbGFubmVkO1xyXG4gICAgY2FzZSBcIkluUHJvZ3Jlc3NcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5JblByb2dyZXNzO1xyXG5cclxuICAgIGNhc2UgXCJGaW5pc2hlZFwiOlxyXG4gICAgICByZXR1cm4gZWxjYV9wcm9qZWN0c3RhdHVzLkZpbmlzaGVkO1xyXG5cclxuICAgIGNhc2UgXCJDbG9zZWRcIjpcclxuICAgICAgcmV0dXJuIGVsY2FfcHJvamVjdHN0YXR1cy5DbG9zZWQ7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJvamVjdCBzdGF0dXM6ICR7c3RhdHVzfWApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1c0tleShzdGF0dXM6IGVsY2FfcHJvamVjdHN0YXR1cyk6IHN0cmluZyB7XHJcbiAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHRvIGxvd2VyY2FzZSBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBjb21wYXJpc29uXHJcbiAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLk5ldzpcclxuICAgICAgcmV0dXJuIFwiTmV3XCI7XHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5QbGFubmVkOlxyXG4gICAgICByZXR1cm4gXCJQbGFubmVkXCI7XHJcbiAgICBjYXNlIGVsY2FfcHJvamVjdHN0YXR1cy5JblByb2dyZXNzOlxyXG4gICAgICByZXR1cm4gXCJJbiBQcm9ncmVzc1wiO1xyXG5cclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLkZpbmlzaGVkOlxyXG4gICAgICByZXR1cm4gXCJGaW5pc2hlZFwiO1xyXG5cclxuICAgIGNhc2UgZWxjYV9wcm9qZWN0c3RhdHVzLkNsb3NlZDpcclxuICAgICAgcmV0dXJuIFwiQ2xvc2VkXCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJvamVjdCBzdGF0dXM6ICR7c3RhdHVzfWApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlSW5Gb3JtQ29udGV4dChmb3JtQ29udGV4dDogRm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbiwgYXR0cmlidXRlOiBzdHJpbmcpIFxyXG57XHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcmV0dXJuIGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpLmdldFZhbHVlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0SW5Gb3JtQ29udGV4dChmb3JtQ29udGV4dDogRm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbiwgYXR0cmlidXRlOiBzdHJpbmcpIFxyXG57XHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgcmV0dXJuIGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpLmdldFRleHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1Db250ZXh0SWQoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24pOiBzdHJpbmd7XHJcbiAgcmV0dXJuIGZvcm1Db250ZXh0LmRhdGEuZW50aXR5LmdldElkKCkucmVwbGFjZShcIntcIiwgXCJcIikucmVwbGFjZShcIn1cIiwgXCJcIik7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGdldEZvcm1Db250ZXh0SWQsIGdldFRleHRJbkZvcm1Db250ZXh0LCBnZXRWYWx1ZUluRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlQnV0dG9uUmliYm9uSGFuZGxlciB7XHJcbiAgICBzdGF0aWMgZXhlY3V0ZShmb3JtQ29udGV4dDogRm9ybS5lbGNhX3Byb2plY3QuTWFpbi5JbmZvcm1hdGlvbik6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHByb2plY3RJZCA9IGdldEZvcm1Db250ZXh0SWQoZm9ybUNvbnRleHQpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgdmFyIGNvbmZpcm1NZXNzYWdlOnN0cmluZyA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNsb3NlIHRoZSBwcm9qZWN0P1wiO1xyXG4gICAgICAgICAgICBpZihjb25maXJtKGNvbmZpcm1NZXNzYWdlKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdHVzY29kZVwiOiBlbGNhX3Byb2plY3Rfc3RhdHVzY29kZS5DbG9zZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZWNvZGVcIjogZWxjYV9wcm9qZWN0X3N0YXRlY29kZS5JbmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImVsY2FfcHJvamVjdHN0YXR1c1wiOiBlbGNhX3Byb2plY3RzdGF0dXMuQ2xvc2VkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgWHJtLldlYkFwaS51cGRhdGVSZWNvcmQoXCJlbGNhX3Byb2plY3RcIiwgcHJvamVjdElkLCB1cGRhdGVJbmZvKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRleHQuZGF0YS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVuYWJsZVJ1bGUoZm9ybUNvbnRleHQ6IEZvcm0uZWxjYV9wcm9qZWN0Lk1haW4uSW5mb3JtYXRpb24pOiBib29sZWFue1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgZW5kRGF0ZSA9IGdldFZhbHVlSW5Gb3JtQ29udGV4dChmb3JtQ29udGV4dCxcImVsY2FfZW5kZGF0ZVwiKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZ2V0VGV4dEluRm9ybUNvbnRleHQoZm9ybUNvbnRleHQsXCJlbGNhX3Byb2plY3RzdGF0dXNcIik7XHJcbiAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBwcmlvckRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpIC0gMzApKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGVuZERhdGUgJiYgZW5kRGF0ZS5nZXRUaW1lKCkgPD0gcHJpb3JEYXRlLmdldFRpbWUoKSBcclxuICAgICAgICAgICAgICAgICYmIHN0YXR1cyAhPT0gJ0Nsb3NlZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgXHJcblxyXG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==