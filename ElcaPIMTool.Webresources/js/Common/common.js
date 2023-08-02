"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            return 283630000 /* New */;
        case "Planned":
            return 283630001 /* Planned */;
        case "InProgress":
            return 283630002 /* InProgress */;
        case "Finished":
            return 283630003 /* Finished */;
        case "Closed":
            return 283630004 /* Closed */;
        default:
            throw new Error("Invalid project status: " + status);
    }
}
exports.getStatusValue = getStatusValue;
function getStatusKey(status) {
    // Convert the string to lowercase for case-insensitive comparison
    switch (status) {
        case 283630000 /* New */:
            return "New";
        case 283630001 /* Planned */:
            return "Planned";
        case 283630002 /* InProgress */:
            return "In Progress";
        case 283630003 /* Finished */:
            return "Finished";
        case 283630004 /* Closed */:
            return "Closed";
        default:
            throw new Error("Invalid project status: " + status);
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
//# sourceMappingURL=common.js.map