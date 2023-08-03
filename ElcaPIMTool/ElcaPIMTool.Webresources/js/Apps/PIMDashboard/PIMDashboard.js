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
var datatables_net_dt_1 = require("datatables.net-dt");
require("./PIMDashboard.scss");
var common_1 = require("../../Common/common");
//get data data
var projects;
var pageNumber = 1;
var keyword = "";
var statusCondition = 0;
var numberOfRecords = 10;
var DELETE_PROJECT_MESSAGE = "Are you sure you want to delete the project?";
var DELETE_MUL_PROJECT_MESSAGE = "Are you sure you want to delete the list of projects?";
var PAGE_LIMIT = 5;
function getProjects(pageNumber, keyword, statusCondition) {
    var fetchXmlWithoutCondition = "?fetchXml=<fetch count=\"" + PAGE_LIMIT + "\" page=\"" + pageNumber + "\" returntotalrecordcount=\"true\">\n        <entity name=\"elca_project\">\n          <attribute name=\"elca_projectid\" />\n          <attribute name=\"elca_projectnumber\" />\n          <attribute name=\"elca_name\" />\n          <attribute name=\"elca_customer\" />\n          <attribute name=\"elca_projectstatus\" />\n          <attribute name=\"elca_startdate\" />\n          <filter type=\"and\">\n          {0}\n          {1}\n          </filter>\n        </entity>\n        </fetch>";
    var fetchSearchCondition = "<filter type=\"or\">\n      <condition attribute=\"elca_name\" operator=\"like\" value=\"%" + keyword + "%\" />\n      <condition attribute=\"elca_customer\" operator=\"like\" value=\"%" + keyword + "%\" />\n      <condition attribute=\"elca_projectnumber\" operator=\"like\" value=\"%" + keyword + "%\" />\n    </filter>";
    var fetchstatusCondition = "<filter type=\"and\">\n      <condition attribute=\"elca_projectstatus\" operator=\"eq\" value=\"" + statusCondition + "\" />\n    </filter>";
    var fetchNumberRecord = "?fetchXml=<fetch count=\"5\" distinct=\"true\" aggregate=\"true\" page=\"1\">\n        <entity name=\"elca_project\">\n          <attribute name=\"elca_projectstatus\" alias=\"totalProjectCount\" aggregate=\"count\" />\n          <filter type=\"and\">\n          {0}\n          {1}\n          </filter>\n        </entity>\n      </fetch>";
    var fetch;
    if (keyword == "" && statusCondition == 0) {
        fetch = fetchXmlWithoutCondition.replace("{0}", "").replace("{1}", "");
        fetchNumberRecord = fetchNumberRecord.replace("{0}", "").replace("{1}", "");
    }
    else if (keyword != "" && statusCondition == 0) {
        fetch = fetchXmlWithoutCondition.replace("{0}", fetchSearchCondition).replace("{1}", "");
        fetchNumberRecord = fetchNumberRecord.replace("{0}", fetchSearchCondition).replace("{1}", "");
    }
    else if (keyword == "" && statusCondition) {
        fetch = fetchXmlWithoutCondition.replace("{0}", "").replace("{1}", fetchstatusCondition);
        fetchNumberRecord = fetchNumberRecord.replace("{0}", "").replace("{1}", fetchstatusCondition);
    }
    else {
        fetch = fetchXmlWithoutCondition.replace("{0}", fetchSearchCondition).replace("{1}", fetchstatusCondition);
        fetchNumberRecord = fetchNumberRecord.replace("{0}", fetchSearchCondition).replace("{1}", fetchstatusCondition);
    }
    //@ts-ignore
    var fetchRecordsPromise = window.parent.Xrm.WebApi.retrieveMultipleRecords("elca_project", fetch);
    //@ts-ignore
    var fetchCountPromise = window.parent.Xrm.WebApi.retrieveMultipleRecords("elca_project", fetchNumberRecord);
    return Promise.all([fetchRecordsPromise, fetchCountPromise]).then(function (_a) {
        var recordsResponse = _a[0], countResponse = _a[1];
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, countResponse.entities[0].totalProjectCount];
                    case 1:
                        numberOfRecords = _b.sent();
                        return [4 /*yield*/, recordsResponse.entities.map(function (entity) {
                                return {
                                    projectId: entity.elca_projectid,
                                    projectNumber: entity.elca_projectnumber,
                                    name: entity.elca_name,
                                    customer: entity.elca_customer,
                                    status: common_1.getStatusKey(entity.elca_projectstatus),
                                    startDate: common_1.formatDate(new Date(entity.elca_startdate)),
                                };
                            })];
                    case 2:
                        projects = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    })
        .catch(function (error) {
        console.log(error.message);
    });
}
function deleteProject(projectId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                //@ts-ignore
                return [4 /*yield*/, window.parent.Xrm.WebApi.deleteRecord("elca_project", projectId)
                        .then(function (result) {
                        console.log("Project was deleted");
                        refreshProjectTable();
                    })
                        .catch(function (error) {
                        if (error.message == "OrganizationServiceFault")
                            throw new Error("Project does not exist");
                        else
                            throw error;
                    })];
                case 1:
                    //@ts-ignore
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function refreshProjectTable() {
    getProjects(pageNumber, keyword, statusCondition).then(function () {
        $("#dataTable").DataTable().clear().rows.add(projects).draw();
        var api = $("#dataTable").dataTable().api();
        api.column(0).footer().style.display = "none";
    });
}
function createDatatable() {
    $("#dataTable").on("change", function () {
        var checkedValue = $(".row-checkbox:checked").length;
        var api = $("#dataTable").dataTable().api();
        if (checkedValue) {
            if (checkedValue === 1) {
                $(".checked-count").html("<p style=\"color:#2f85fa;\">" + checkedValue + " item selected</p>");
            }
            else {
                $(".checked-count").html("<p style=\"color:#2f85fa;\">" + checkedValue + " items selected</p>");
            }
            api.column(0).footer().style.display = "table-cell";
        }
        else {
            api.column(0).footer().style.display = "none";
        }
    });
    var dataTableConfig = {
        data: projects,
        columns: [
            {
                data: null,
                render: function (data, type, row, meta) {
                    if (type === "display" && row.status === "New") {
                        return "<input type=\"checkbox\" class=\"row-checkbox\" id=\"" + row.projectId + "\" value= \"" + row.projectNumber + "\"/>";
                    }
                    else {
                        return "<input type=\"checkbox\" class=\"row-checkbox\" id=\"" + row.projectId + "\" value= \"" + row.projectNumber + "\"/>";
                    }
                },
            },
            {
                data: "projectNumber",
                render: function (data, type, row, meta) {
                    if (type === "display") {
                        return "<a href=\"bcv-crm/Test/main.aspx?app=d365default&forceUCI=1&pagetype=entityrecord&etn=elca_project&id=" + row.projectId + "\" target=\"_blank\">" + data + "</a>";
                    }
                },
            },
            { data: "name" },
            { data: "status" },
            { data: "customer" },
            { data: "startDate" },
            {
                data: "projectId",
                render: function (data, type, row, meta) {
                    if (type === "display" && row.status === "New") {
                        return "<button onclick=\"deleteSingleProject('" + data + "')\" style=\"border: none;\">\n                      <img src=\"elca_DeleteIcon\" alt=\"deleteIcon\">\n                    </button>";
                    }
                    else {
                        return "";
                    }
                },
            },
        ],
        searching: false,
        ordering: false,
        info: false,
        lengthChange: false,
        serverSide: true,
        paging: true,
        pageLength: 5,
        ajax: function (data, callback, settings) {
            var pageNumber = data.start / data.length + 1;
            //console.log(pageNumber, data.start, data.length);
            getProjects(pageNumber, keyword, statusCondition).then(function () {
                callback({
                    draw: data.draw,
                    data: projects,
                    recordsTotal: numberOfRecords,
                    recordsFiltered: numberOfRecords,
                });
            });
        },
    };
    new datatables_net_dt_1.default("#dataTable", dataTableConfig);
}
//@ts-ignore
window.deleteSingleProject = function (projectId) {
    var confirmMessage = DELETE_PROJECT_MESSAGE;
    if (confirm(confirmMessage)) {
        deleteProject(projectId);
    }
};
//@ts-ignore
window.deleteMultiProject = function () {
    return __awaiter(this, void 0, void 0, function () {
        var checkedList, confirmMessage, errorMessage, errorInfo, errorList, i, projectId, projectName, err_1, contentOfMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkedList = $(".row-checkbox:checked");
                    if (checkedList.length == 1) {
                        confirmMessage = DELETE_PROJECT_MESSAGE;
                    }
                    else {
                        confirmMessage = DELETE_MUL_PROJECT_MESSAGE;
                    }
                    if (!confirm(confirmMessage)) return [3 /*break*/, 7];
                    errorMessage = [];
                    errorInfo = /** @class */ (function () {
                        function errorInfo(mes, relatedId, relatedName) {
                            this.relatedId = relatedId;
                            this.errorMessage = mes;
                            this.relatedName = relatedName;
                        }
                        return errorInfo;
                    }());
                    ;
                    errorList = [];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < checkedList.length)) return [3 /*break*/, 6];
                    projectId = checkedList[i].getAttribute("id");
                    projectName = checkedList[i].getAttribute("value");
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, deleteProject(projectId)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    if (!errorMessage.includes(err_1.message)) {
                        errorMessage.push(err_1.message);
                        errorList.push(new errorInfo(err_1.message, projectId, projectName));
                    }
                    else {
                        for (i = 0; i < errorList.length; i++) {
                            if (err_1.message === errorList[i].errorMessage) {
                                errorList[i].relatedName += ", " + projectName;
                            }
                        }
                    }
                    return [3 /*break*/, 5];
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6:
                    if (errorList.length) {
                        contentOfMessage = "";
                        for (i = 0; i < errorList.length; i++) {
                            contentOfMessage += "\"" + errorList[i].errorMessage + "\" in list of entity: " + errorList[i].relatedName + "\n";
                        }
                        alert("There was " + errorList.length + " error:\n " + contentOfMessage);
                    }
                    else {
                        alert("Delete successfully");
                    }
                    _a.label = 7;
                case 7:
                    refreshProjectTable();
                    return [2 /*return*/];
            }
        });
    });
};
//@ts-ignore
window.loadNewPage = function (index) {
    pageNumber = index;
    var api = $("#dataTable").dataTable().api();
    api.column(0).footer().style.display = "none";
    getProjects(pageNumber, keyword, statusCondition).then(function () {
        $("#dataTable").DataTable().clear().rows.add(projects).draw();
    });
};
function getOptionSet(name) {
    //@ts-ignore
    var requestUrl = window.parent.Xrm.Utility.getGlobalContext().getClientUrl() + ("/api/data/v9.1/GlobalOptionSetDefinitions(Name='" + name + "')");
    return fetch(requestUrl, {
        headers: {
            "OData-MaxVersion": "4.0",
            "OData-Version": "4.0",
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
            Prefer: 'odata.include-annotations="*"',
        },
    })
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Error retrieving option set values: " + response.statusText);
        }
    })
        .then(function (data) {
        var optionSetValues = data.Options;
        return optionSetValues;
    })
        .catch(function (error) {
        console.log(error);
        return null;
    });
}
function renderOptionSet() {
    var innerHTML = "<option value=\"\">Project status</option>";
    getOptionSet("elca_projectstatus").then(function (optionSetValues) {
        if (optionSetValues) {
            // Process the option set values
            optionSetValues.forEach(function (option) {
                innerHTML += "<option value=\"" + option.Value + "\">" + option.Label.UserLocalizedLabel.Label + "</option>";
            });
        }
        $("#selectInput").html(innerHTML);
    });
}
//display handle
$(document).ready(function () {
    //dynamic renndering
    renderOptionSet();
    //display default table
    getProjects(pageNumber, keyword, statusCondition).then(function () {
        createDatatable();
    });
    //reset search
    $("#resetButton").on("click", function () {
        // Reset the form
        var textInput = document.getElementById("searchInput");
        var selectInput = document.getElementById("selectInput");
        textInput.value = "";
        selectInput.value = "";
        keyword = "";
        statusCondition = 0;
        getProjects(pageNumber, keyword, statusCondition).then(function () {
            $("#dataTable").DataTable().clear().rows.add(projects).draw();
        });
    });
    //submmit search
    $("#submitButton").on("click", function () {
        // Reset the form
        // Get input values
        var textInput = document.getElementById("searchInput");
        var selectInput = document.getElementById("selectInput");
        keyword = textInput === null || textInput === void 0 ? void 0 : textInput.value;
        var selectInputValue = selectInput === null || selectInput === void 0 ? void 0 : selectInput.value;
        try {
            if (selectInputValue)
                statusCondition = Number(selectInputValue);
            else
                statusCondition = 0;
            getProjects(1, keyword, statusCondition).then(function () {
                $("#dataTable").DataTable().clear().rows.add(projects).draw();
            });
        }
        catch (e) {
            console.log(e);
        }
    });
});
//# sourceMappingURL=PIMDashboard.js.map