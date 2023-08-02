interface msdyn_solutioncomponentdatasource_Base extends WebEntity {
  msdyn_name?: string | null;
  msdyn_solutioncomponentdatasourceid?: string | null;
}
interface msdyn_solutioncomponentdatasource_Relationships {
  msdyn_solutioncomponentdatasource_Annotations?: Annotation_Result[] | null;
}
interface msdyn_solutioncomponentdatasource extends msdyn_solutioncomponentdatasource_Base, msdyn_solutioncomponentdatasource_Relationships {
}
interface msdyn_solutioncomponentdatasource_Create extends msdyn_solutioncomponentdatasource {
}
interface msdyn_solutioncomponentdatasource_Update extends msdyn_solutioncomponentdatasource {
}
interface msdyn_solutioncomponentdatasource_Select {
  msdyn_name: WebAttribute<msdyn_solutioncomponentdatasource_Select, { msdyn_name: string | null }, {  }>;
  msdyn_solutioncomponentdatasourceid: WebAttribute<msdyn_solutioncomponentdatasource_Select, { msdyn_solutioncomponentdatasourceid: string | null }, {  }>;
}
interface msdyn_solutioncomponentdatasource_Filter {
  msdyn_name: string;
  msdyn_solutioncomponentdatasourceid: XQW.Guid;
}
interface msdyn_solutioncomponentdatasource_Expand {
  msdyn_solutioncomponentdatasource_Annotations: WebExpand<msdyn_solutioncomponentdatasource_Expand, Annotation_Select, Annotation_Filter, { msdyn_solutioncomponentdatasource_Annotations: Annotation_Result[] }>;
}
interface msdyn_solutioncomponentdatasource_FormattedResult {
}
interface msdyn_solutioncomponentdatasource_Result extends msdyn_solutioncomponentdatasource_Base, msdyn_solutioncomponentdatasource_Relationships {
  "@odata.etag": string;
}
interface msdyn_solutioncomponentdatasource_RelatedOne {
}
interface msdyn_solutioncomponentdatasource_RelatedMany {
  msdyn_solutioncomponentdatasource_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_solutioncomponentdatasources: WebMappingRetrieve<msdyn_solutioncomponentdatasource_Select,msdyn_solutioncomponentdatasource_Expand,msdyn_solutioncomponentdatasource_Filter,msdyn_solutioncomponentdatasource_Fixed,msdyn_solutioncomponentdatasource_Result,msdyn_solutioncomponentdatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_solutioncomponentdatasources: WebMappingRelated<msdyn_solutioncomponentdatasource_RelatedOne,msdyn_solutioncomponentdatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_solutioncomponentdatasources: WebMappingCUDA<msdyn_solutioncomponentdatasource_Create,msdyn_solutioncomponentdatasource_Update,msdyn_solutioncomponentdatasource_Select>;
}
