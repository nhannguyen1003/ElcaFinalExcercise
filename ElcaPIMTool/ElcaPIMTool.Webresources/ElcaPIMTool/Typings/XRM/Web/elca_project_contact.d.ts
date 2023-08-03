interface elca_project_contact_Base extends WebEntity {
  contactid?: string | null;
  elca_project_contactid?: string | null;
  elca_projectid?: string | null;
  versionnumber?: number | null;
}
interface elca_project_contact_Relationships {
  elca_project_contact?: Contact_Result[] | null;
}
interface elca_project_contact extends elca_project_contact_Base, elca_project_contact_Relationships {
}
interface elca_project_contact_Create extends elca_project_contact {
}
interface elca_project_contact_Update extends elca_project_contact {
}
interface elca_project_contact_Select {
  contactid: WebAttribute<elca_project_contact_Select, { contactid: string | null }, {  }>;
  elca_project_contactid: WebAttribute<elca_project_contact_Select, { elca_project_contactid: string | null }, {  }>;
  elca_projectid: WebAttribute<elca_project_contact_Select, { elca_projectid: string | null }, {  }>;
  versionnumber: WebAttribute<elca_project_contact_Select, { versionnumber: number | null }, {  }>;
}
interface elca_project_contact_Filter {
  contactid: XQW.Guid;
  elca_project_contactid: XQW.Guid;
  elca_projectid: XQW.Guid;
  versionnumber: number;
}
interface elca_project_contact_Expand {
  elca_project_contact: WebExpand<elca_project_contact_Expand, Contact_Select, Contact_Filter, { elca_project_contact: Contact_Result[] }>;
}
interface elca_project_contact_FormattedResult {
}
interface elca_project_contact_Result extends elca_project_contact_Base, elca_project_contact_Relationships {
  "@odata.etag": string;
}
interface elca_project_contact_RelatedOne {
}
interface elca_project_contact_RelatedMany {
  elca_project_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface WebEntitiesRetrieve {
  elca_project_contactset: WebMappingRetrieve<elca_project_contact_Select,elca_project_contact_Expand,elca_project_contact_Filter,elca_project_contact_Fixed,elca_project_contact_Result,elca_project_contact_FormattedResult>;
}
interface WebEntitiesRelated {
  elca_project_contactset: WebMappingRelated<elca_project_contact_RelatedOne,elca_project_contact_RelatedMany>;
}
interface WebEntitiesCUDA {
  elca_project_contactset: WebMappingCUDA<elca_project_contact_Create,elca_project_contact_Update,elca_project_contact_Select>;
}
