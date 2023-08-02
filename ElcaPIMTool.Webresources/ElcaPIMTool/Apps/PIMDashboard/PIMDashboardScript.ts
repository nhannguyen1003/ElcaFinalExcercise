import DataTable from "datatables.net-dt";
import "./styles.scss";
import { formatDate, getStatusValue, getStatusKey } from "../../Common/common";
import { Project } from "./Project";
import { error } from "jquery";

//get data data
var projects: Project[];
let pageNumber = 1;
let keyword = "";
let statusCondition = 0;
let numberOfRecords = 10;
const DELETE_PROJECT_MESSAGE = "Are you sure you want to delete the project?";
const DELETE_MUL_PROJECT_MESSAGE =
  "Are you sure you want to delete the list of projects?";
const PAGE_LIMIT = 5;

function getProjects(
  pageNumber: number,
  keyword: string,
  statusCondition: number
): Promise<void> {
  let fetchXmlWithoutCondition = `?fetchXml=<fetch count="${PAGE_LIMIT}" page="${pageNumber}" returntotalrecordcount="true">
        <entity name="elca_project">
          <attribute name="elca_projectid" />
          <attribute name="elca_projectnumber" />
          <attribute name="elca_name" />
          <attribute name="elca_customer" />
          <attribute name="elca_projectstatus" />
          <attribute name="elca_startdate" />
          <filter type="and">
          {0}
          {1}
          </filter>
        </entity>
        </fetch>`;

  let fetchSearchCondition = `<filter type="or">
      <condition attribute="elca_name" operator="like" value="%${keyword}%" />
      <condition attribute="elca_customer" operator="like" value="%${keyword}%" />
      <condition attribute="elca_projectnumber" operator="like" value="%${keyword}%" />
    </filter>`;
  let fetchstatusCondition = `<filter type="and">
      <condition attribute="elca_projectstatus" operator="eq" value="${statusCondition}" />
    </filter>`;

  var fetchNumberRecord = `?fetchXml=<fetch count="5" distinct="true" aggregate="true" page="1">
        <entity name="elca_project">
          <attribute name="elca_projectstatus" alias="totalProjectCount" aggregate="count" />
          <filter type="and">
          {0}
          {1}
          </filter>
        </entity>
      </fetch>`;
  var fetch: string;
  if (keyword == "" && statusCondition == 0) {
    fetch = fetchXmlWithoutCondition.replace("{0}", "").replace("{1}", "");
    fetchNumberRecord = fetchNumberRecord.replace("{0}", "").replace("{1}", "");
  } else if (keyword != "" && statusCondition == 0) {
    fetch = fetchXmlWithoutCondition.replace("{0}", fetchSearchCondition).replace("{1}", "");
    fetchNumberRecord = fetchNumberRecord.replace("{0}", fetchSearchCondition).replace("{1}", "");
  } else if (keyword == "" && statusCondition) {
    fetch = fetchXmlWithoutCondition.replace("{0}", "").replace("{1}", fetchstatusCondition);
    fetchNumberRecord = fetchNumberRecord.replace("{0}", "").replace("{1}", fetchstatusCondition);
  } else {
    fetch = fetchXmlWithoutCondition.replace("{0}", fetchSearchCondition).replace("{1}", fetchstatusCondition);
    fetchNumberRecord = fetchNumberRecord.replace("{0}", fetchSearchCondition).replace("{1}", fetchstatusCondition);
  }

  //@ts-ignore
  const fetchRecordsPromise =  window.parent.Xrm.WebApi.retrieveMultipleRecords("elca_project", fetch);

  //@ts-ignore
  const fetchCountPromise = window.parent.Xrm.WebApi.retrieveMultipleRecords("elca_project", fetchNumberRecord);
  return Promise.all([fetchRecordsPromise, fetchCountPromise]).then(async function([recordsResponse, countResponse]) {
        numberOfRecords = await countResponse.entities[0].totalProjectCount;
        projects = await recordsResponse.entities.map((entity) => {
        return {
          projectId: entity.elca_projectid,
          projectNumber: entity.elca_projectnumber,
          name: entity.elca_name,
          customer: entity.elca_customer,
          status: getStatusKey(entity.elca_projectstatus),
          startDate: formatDate(new Date(entity.elca_startdate)),
        };
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}

async function deleteProject(projectId: string) {
  //@ts-ignore
  await window.parent.Xrm.WebApi.deleteRecord("elca_project", projectId)
    .then((result) => {
      console.log("Project was deleted");
      refreshProjectTable();
    })
    .catch((error) => {
      if(error.message == "OrganizationServiceFault") throw new Error(`Project does not exist`);
      else throw error;
    });
}

function refreshProjectTable() {
  getProjects(pageNumber, keyword, statusCondition).then(() => {
    $("#dataTable").DataTable().clear().rows.add(projects).draw();
    let api = $("#dataTable").dataTable().api();
    api.column(0).footer().style.display = "none";
  });
}

function createDatatable() {
  $("#dataTable").on("change", () => {
    let checkedValue: number = $("#row-checkbox:checked").length;
    let api = $("#dataTable").dataTable().api();
    if (checkedValue) {
      if (checkedValue === 1) {
        $(".checked-count").html(
          `<p style="color:#2f85fa;">${checkedValue} item selected</p>`
        );
      } else {
        $(".checked-count").html(
          `<p style="color:#2f85fa;">${checkedValue} items selected</p>`
        );
      }
      api.column(0).footer().style.display = "table-cell";
    } else {
      api.column(0).footer().style.display = "none";
    }
  });

  const dataTableConfig = {
    data: projects,
    columns: [
      {
        data: null,
        render: function (data, type, row, meta) {
          if (type === "display" && row.status === "New") {
            return `<input type="checkbox" id="row-checkbox" value="${row.projectId}"/>`;
          } else {
            return `<input type="checkbox" id="row-checkbox" value="${row.projectId}"/>`;
          }
        },
      },
      {
        data: "projectNumber",
        render: function (data, type, row, meta) {
          if (type === "display") {
            return `<a href="http://bcv-crm/Test/main.aspx?app=d365default&forceUCI=1&pagetype=entityrecord&etn=elca_project&id=${row.projectId}" target="_blank">${data}</a>`;
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
            return `<button onclick="deleteSingleProject('${data}')" style="border: none; background-color: none";>
                      <img src="elca_DeleteIcon" alt="deleteIcon">
                    </button>`;
          } else {
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
      const pageNumber = data.start / data.length + 1;
      //console.log(pageNumber, data.start, data.length);
      getProjects(pageNumber, keyword, statusCondition).then(() => {
        callback({
          draw: data.draw,
          data: projects,
          recordsTotal: numberOfRecords,
          recordsFiltered: numberOfRecords,
        });
      });
    },
  };
  new DataTable("#dataTable", dataTableConfig);
}

//@ts-ignore
window.deleteSingleProject = function (projectId: string) {
  let confirmMessage: string = DELETE_PROJECT_MESSAGE;
  if (confirm(confirmMessage)) {
    deleteProject(projectId);
  }
};

//@ts-ignore
window.deleteMultiProject = async function () {
  //TO DO
  let checkedList = $("#row-checkbox:checked");
  let confirmMessage: string;
  if (checkedList.length == 1) {
    confirmMessage = DELETE_PROJECT_MESSAGE;
  } else {
    confirmMessage = DELETE_MUL_PROJECT_MESSAGE;
  }
  if (confirm(confirmMessage)) {
    var errorMessage: string[] = [];
    class errorInfo {
      errorMessage: String;
      relatedId: String;
      constructor(mes: String, relatedId: String) {
        this.relatedId = relatedId;
        this.errorMessage = mes;
      }
    };
    var errorList: errorInfo[] = [];

    for (var i = 0; i < checkedList.length; i++) {
      let projectIdEncode = checkedList[i].getAttribute("value");
        //@ts-ignore
        try{
          await deleteProject(projectIdEncode);
        }
        catch(err){
          if(!errorMessage.includes(err.message)){
            errorMessage.push(err.message);
            errorList.push(new errorInfo(err.message,projectIdEncode))
          }
          else{
            for(i = 0; i < errorList.length; i++){
              if(err.message === errorList[i].errorMessage)
              {
                errorList[i].relatedId += ", " + projectIdEncode;
              }
            }
          }
        }
      }

      if (errorList.length) {
        let contentOfMessage = "";
        for(i = 0; i < errorList.length; i++){
          contentOfMessage += `"${errorList[i].errorMessage}" in list entity: ${errorList[i].relatedId}\n`
        }
        alert(`There was an error:\n ${contentOfMessage}`);
      }
      else{
        alert(`Successfully deleted`);
      }
  }

  refreshProjectTable();
};

//@ts-ignore
window.loadNewPage = function (index: number) {
  pageNumber = index;
  let api = $("#dataTable").dataTable().api();
  api.column(0).footer().style.display = "none";
  getProjects(pageNumber, keyword, statusCondition).then(() => {
    $("#dataTable").DataTable().clear().rows.add(projects).draw();
  });
};

function getOptionSet(name: string) {
  //@ts-ignore
  var requestUrl = window.parent.Xrm.Utility.getGlobalContext().getClientUrl() + `/api/data/v9.1/GlobalOptionSetDefinitions(Name='${name}')`;
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
      } else {
        throw new Error(
          "Error retrieving option set values: " + response.statusText
        );
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
  let innerHTML = `<option value="">Project status</option>`;
  getOptionSet("elca_projectstatus").then(function (optionSetValues) {
    if (optionSetValues) {
      // Process the option set values

      optionSetValues.forEach(function (option) {
        innerHTML += `<option value="${option.Value}">${option.Label.UserLocalizedLabel.Label}</option>`;
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
  getProjects(pageNumber, keyword, statusCondition).then(() => {
    createDatatable();
  });
  //reset search
  $("#resetButton").on("click", () => {
    // Reset the form
    const textInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    const selectInput = document.getElementById(
      "selectInput"
    ) as HTMLSelectElement;
    textInput.value = "";
    selectInput.value = "";
    keyword = "";
    statusCondition = 0;
    getProjects(pageNumber, keyword, statusCondition).then(() => {
      $("#dataTable").DataTable().clear().rows.add(projects).draw();
    });
  });
  //submmit search
  $("#submitButton").on("click", () => {
    // Reset the form
    // Get input values
    const textInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;
    const selectInput = document.getElementById(
      "selectInput"
    ) as HTMLSelectElement;

    keyword = textInput?.value;
    const selectInputValue = selectInput?.value;
    try {
      if (selectInputValue) statusCondition = Number(selectInputValue);
      else statusCondition = 0;
      getProjects(1, keyword, statusCondition).then(() => {
        $("#dataTable").DataTable().clear().rows.add(projects).draw();
      });
    } catch (e) {
      console.log(e);
    }
  });
});
