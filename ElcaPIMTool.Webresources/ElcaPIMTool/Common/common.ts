export function formatDate(date: Date): string {
  const yyyy = (date.getFullYear() % 100).toString();

  let mm = date.getMonth(); // Months start at 0!
  let dd = date.getDate();
  let dds = date.getDate().toString();
  if (dd < 10) dds = "0" + dd.toString();
  
  let Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return dds + "-" + Months[mm] + "-" + yyyy;
}

export function getStatusValue(status: string): elca_projectstatus {
  // Convert the string to lowercase for case-insensitive comparison
  switch (status) {
    case "New":
      return elca_projectstatus.New;
    case "Planned":
      return elca_projectstatus.Planned;
    case "InProgress":
      return elca_projectstatus.InProgress;

    case "Finished":
      return elca_projectstatus.Finished;

    case "Closed":
      return elca_projectstatus.Closed;
    default:
      throw new Error(`Invalid project status: ${status}`);
  }
}

export function getStatusKey(status: elca_projectstatus): string {
  // Convert the string to lowercase for case-insensitive comparison
  switch (status) {
    case elca_projectstatus.New:
      return "New";
    case elca_projectstatus.Planned:
      return "Planned";
    case elca_projectstatus.InProgress:
      return "In Progress";

    case elca_projectstatus.Finished:
      return "Finished";

    case elca_projectstatus.Closed:
      return "Closed";
    default:
      throw new Error(`Invalid project status: ${status}`);
  }
}

export function getValueInFormContext(formContext: Form.elca_project.Main.Information, attribute: string) 
{
  //@ts-ignore
  return formContext.getAttribute(attribute).getValue();
}

export function getTextInFormContext(formContext: Form.elca_project.Main.Information, attribute: string) 
{
  //@ts-ignore
  return formContext.getAttribute(attribute).getText();
}

export function getFormContextId(formContext: Form.elca_project.Main.Information): string{
  return formContext.data.entity.getId().replace("{", "").replace("}", "");
}
