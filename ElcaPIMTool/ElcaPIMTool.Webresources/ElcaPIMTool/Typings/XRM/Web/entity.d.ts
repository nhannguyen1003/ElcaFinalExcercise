interface Entity_Base extends WebEntity {
  addresstablename?: string | null;
  basetablename?: string | null;
  collectionname?: string | null;
  componentstate?: componentstate | null;
  entityid?: string | null;
  entitysetname?: string | null;
  extensiontablename?: string | null;
  externalcollectionname?: string | null;
  externalname?: string | null;
  logicalcollectionname?: string | null;
  logicalname?: string | null;
  name?: string | null;
  originallocalizedcollectionname?: string | null;
  originallocalizedname?: string | null;
  overwritetime?: Date | null;
  parentcontrollingattributename?: string | null;
  physicalname?: string | null;
  reportviewname?: string | null;
  solutionid?: string | null;
  versionnumber?: number | null;
}
interface Entity_Relationships {
  CatalogAssignments?: CatalogAssignment_Result[] | null;
  entity_entityanalyticsconfig?: EntityAnalyticsConfig_Result[] | null;
  entity_solutioncomponentconfiguration?: solutioncomponentconfiguration_Result[] | null;
}
interface Entity extends Entity_Base, Entity_Relationships {
}
interface Entity_Create extends Entity {
}
interface Entity_Update extends Entity {
}
interface Entity_Select {
  addresstablename: WebAttribute<Entity_Select, { addresstablename: string | null }, {  }>;
  basetablename: WebAttribute<Entity_Select, { basetablename: string | null }, {  }>;
  collectionname: WebAttribute<Entity_Select, { collectionname: string | null }, {  }>;
  componentstate: WebAttribute<Entity_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  entityid: WebAttribute<Entity_Select, { entityid: string | null }, {  }>;
  entitysetname: WebAttribute<Entity_Select, { entitysetname: string | null }, {  }>;
  extensiontablename: WebAttribute<Entity_Select, { extensiontablename: string | null }, {  }>;
  externalcollectionname: WebAttribute<Entity_Select, { externalcollectionname: string | null }, {  }>;
  externalname: WebAttribute<Entity_Select, { externalname: string | null }, {  }>;
  logicalcollectionname: WebAttribute<Entity_Select, { logicalcollectionname: string | null }, {  }>;
  logicalname: WebAttribute<Entity_Select, { logicalname: string | null }, {  }>;
  name: WebAttribute<Entity_Select, { name: string | null }, {  }>;
  originallocalizedcollectionname: WebAttribute<Entity_Select, { originallocalizedcollectionname: string | null }, {  }>;
  originallocalizedname: WebAttribute<Entity_Select, { originallocalizedname: string | null }, {  }>;
  overwritetime: WebAttribute<Entity_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parentcontrollingattributename: WebAttribute<Entity_Select, { parentcontrollingattributename: string | null }, {  }>;
  physicalname: WebAttribute<Entity_Select, { physicalname: string | null }, {  }>;
  reportviewname: WebAttribute<Entity_Select, { reportviewname: string | null }, {  }>;
  solutionid: WebAttribute<Entity_Select, { solutionid: string | null }, {  }>;
  versionnumber: WebAttribute<Entity_Select, { versionnumber: number | null }, {  }>;
}
interface Entity_Filter {
  addresstablename: string;
  basetablename: string;
  collectionname: string;
  componentstate: componentstate;
  entityid: XQW.Guid;
  entitysetname: string;
  extensiontablename: string;
  externalcollectionname: string;
  externalname: string;
  logicalcollectionname: string;
  logicalname: string;
  name: string;
  originallocalizedcollectionname: string;
  originallocalizedname: string;
  overwritetime: Date;
  parentcontrollingattributename: string;
  physicalname: string;
  reportviewname: string;
  solutionid: XQW.Guid;
  versionnumber: number;
}
interface Entity_Expand {
  CatalogAssignments: WebExpand<Entity_Expand, CatalogAssignment_Select, CatalogAssignment_Filter, { CatalogAssignments: CatalogAssignment_Result[] }>;
  entity_entityanalyticsconfig: WebExpand<Entity_Expand, EntityAnalyticsConfig_Select, EntityAnalyticsConfig_Filter, { entity_entityanalyticsconfig: EntityAnalyticsConfig_Result[] }>;
  entity_solutioncomponentconfiguration: WebExpand<Entity_Expand, solutioncomponentconfiguration_Select, solutioncomponentconfiguration_Filter, { entity_solutioncomponentconfiguration: solutioncomponentconfiguration_Result[] }>;
}
interface Entity_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface Entity_Result extends Entity_Base, Entity_Relationships {
  "@odata.etag": string;
}
interface Entity_RelatedOne {
}
interface Entity_RelatedMany {
  CatalogAssignments: WebMappingRetrieve<CatalogAssignment_Select,CatalogAssignment_Expand,CatalogAssignment_Filter,CatalogAssignment_Fixed,CatalogAssignment_Result,CatalogAssignment_FormattedResult>;
  entity_entityanalyticsconfig: WebMappingRetrieve<EntityAnalyticsConfig_Select,EntityAnalyticsConfig_Expand,EntityAnalyticsConfig_Filter,EntityAnalyticsConfig_Fixed,EntityAnalyticsConfig_Result,EntityAnalyticsConfig_FormattedResult>;
  entity_solutioncomponentconfiguration: WebMappingRetrieve<solutioncomponentconfiguration_Select,solutioncomponentconfiguration_Expand,solutioncomponentconfiguration_Filter,solutioncomponentconfiguration_Fixed,solutioncomponentconfiguration_Result,solutioncomponentconfiguration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entities: WebMappingRetrieve<Entity_Select,Entity_Expand,Entity_Filter,Entity_Fixed,Entity_Result,Entity_FormattedResult>;
}
interface WebEntitiesRelated {
  entities: WebMappingRelated<Entity_RelatedOne,Entity_RelatedMany>;
}
interface WebEntitiesCUDA {
  entities: WebMappingCUDA<Entity_Create,Entity_Update,Entity_Select>;
}
