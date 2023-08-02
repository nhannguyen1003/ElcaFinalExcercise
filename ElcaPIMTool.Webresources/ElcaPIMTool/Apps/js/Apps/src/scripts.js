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
require("./styles.scss");
var common_1 = require("../../Common/common");
//get data data
var projects;
var pageNumber = 1;
var keyword = "";
var statusCondition = 0;
function getProjects(pageNumber, keyword, statusCondition) {
    var fetchXmlWithoutCondition = "?fetchXml=<fetch count=\"5\" page=\"" + pageNumber + "\">\n        <entity name=\"elca_project\">\n          <attribute name=\"elca_projectid\" />\n          <attribute name=\"elca_projectnumber\" />\n          <attribute name=\"elca_name\" />\n          <attribute name=\"elca_customer\" />\n          <attribute name=\"elca_projectstatus\" />\n          <attribute name=\"elca_startdate\" />\n          <filter type=\"and\">\n          {0}\n          {1}\n          </filter>\n        </entity>\n        </fetch>";
    var fetchSearchCondition = "<filter type=\"or\">\n      <condition attribute=\"elca_projectnumber\" operator=\"eq\" value=\"" + keyword + "\" />\n      <condition attribute=\"elca_name\" operator=\"eq\" value=\"" + keyword + "\" />\n      <condition attribute=\"elca_customer\" operator=\"eq\" value=\"" + keyword + "\" />\n    </filter>";
    var fetchstatusCondition = "<filter type=\"and\">\n      <condition attribute=\"elca_projectstatus\" operator=\"eq\" value=\"" + statusCondition + "\" />\n    </filter>";
    var fetch;
    if (keyword == "" && statusCondition == 0) {
        fetch = fetchXmlWithoutCondition.replace("{0}", "").replace("{1}", "");
    }
    else if (keyword != "" && statusCondition == 0) {
        fetch = fetchXmlWithoutCondition
            .replace("{0}", fetchSearchCondition)
            .replace("{1}", "");
    }
    else if (keyword == "" && statusCondition) {
        fetch = fetchXmlWithoutCondition
            .replace("{0}", "")
            .replace("{1}", fetchstatusCondition);
    }
    else {
        fetch = fetchXmlWithoutCondition
            .replace("{0}", fetchSearchCondition)
            .replace("{1}", fetchstatusCondition);
    }
    //@ts-ignore
    return window.parent.Xrm.WebApi.retrieveMultipleRecords("elca_project", fetch)
        .then(function (response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // perform additional operations on retrieved records
                projects = response.entities.map(function (entity) {
                    return {
                        projectId: entity.elca_projectid,
                        projectNumber: entity.elca_projectnumber,
                        name: entity.elca_name,
                        customer: entity.elca_customer,
                        status: common_1.getStatusKey(entity.elca_projectstatus),
                        startDate: common_1.formatDate(new Date(entity.elca_startdate)),
                    };
                });
                return [2 /*return*/];
            });
        });
    })
        .catch(function (error) {
        console.log(error.message);
    });
}
function deleteProject(projectId) {
    //@ts-ignore
    window.parent.Xrm.WebApi.deleteRecord("elca_project", projectId)
        .then(function (result) {
        console.log("Project was deleted");
        refreshProjectTable();
    })
        .catch(function (error) {
        alert("Project does not exist");
        console.log(error.message);
    });
}
function refreshProjectTable() {
    getProjects(pageNumber, keyword, statusCondition).then(function () {
        $("#dataTable").DataTable().clear().rows.add(projects).draw();
        var api = $("#dataTable").dataTable().api();
        api.column(0).footer().style.display = 'none';
    });
}
function createDatatable() {
    $("#dataTable").on("change", function () {
        var checkedValue = $("#row-checkbox:checked").length;
        var api = $("#dataTable").dataTable().api();
        if (checkedValue) {
            api
                .column(0)
                .footer().innerHTML = "<div style=\"display: flex; justify-content: space-between; margin-right:20px\">\n        <div>\n          <p style=\"color:#2f85fa;\">" + checkedValue + " items selected</p>\n        </div>\n        <div style=\"color:red;\">\n          delete selected items\n          <a href=\"#\" onclick=\"deleteMultiProject()\">\n            <img\n              src=\"elca_DeleteIcon\"\n              alt=\"\"\n              width=\"15px\"\n              height=\"15px\"\n            />\n          </a>\n        </div>\n      </div>";
            api.column(0).footer().style.display = 'table-cell';
        }
        else {
            api.column(0).footer().style.display = 'none';
        }
    });
    var dataTableConfig = {
        data: projects,
        columns: [
            {
                data: null,
                render: function (data, type, row, meta) {
                    if (type === "display" && row.status === "New") {
                        return "<input type=\"checkbox\" id=\"row-checkbox\" value=\"" + row.projectId + "\"/>";
                    }
                    else {
                        return "<input type=\"checkbox\" id=\"row-checkbox\" value=\"\"/>";
                    }
                    return null;
                },
            },
            { data: "projectNumber" },
            { data: "name" },
            { data: "status" },
            { data: "customer" },
            { data: "startDate" },
            {
                data: "projectId",
                render: function (data, type, row, meta) {
                    if (type === "display" && row.status === "New") {
                        return "<button onclick=\"deleteSingleProject('" + data + "')\" style=\"border: none; background-color: white\";>\n                      <img src=\"http://bcv-crm/Test/WebResources/elca_DeleteIcon\" alt=\"deleteIcon\">\n                    </button>";
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
        paging: false,
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
    //TO DO
    var checkedList = $("#row-checkbox:checked");
    var confirmMessage;
    if (checkedList.length == 1) {
        confirmMessage = DELETE_PROJECT_MESSAGE;
    }
    else {
        confirmMessage = DELETE_MUL_PROJECT_MESSAGE;
    }
    if (confirm(confirmMessage)) {
        for (var i = 0; i < checkedList.length; i++) {
            var projectId = checkedList[i].getAttribute("value");
            if (projectId) {
                //@ts-ignore
                deleteProject(projectId);
            }
        }
        refreshProjectTable();
    }
};
//@ts-ignore
window.loadNewPage = function (index) {
    pageNumber = index;
    var api = $("#dataTable").dataTable().api();
    api.column(0).footer().style.display = 'none';
    getProjects(pageNumber, keyword, statusCondition).then(function () {
        $("#dataTable").DataTable().clear().rows.add(projects).draw();
    });
};
//display handle
$(document).ready(function () {
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
                statusCondition = common_1.getStatusValue(selectInputValue);
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
//# sourceMappingURL=scripts.js.map