interface EnvironmentVariableDefinition_Base extends WebEntity {
  componentstate?: componentstate | null;
  connectionid?: string | null;
  createdon?: Date | null;
  datasourcetype?: string | null;
  defaultvalue?: string | null;
  description?: string | null;
  displayname?: string | null;
  environmentvariabledefinitionid?: string | null;
  environmentvariabledefinitionidunique?: string | null;
  hint?: string | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  isrequired?: boolean | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  schemaname?: string | null;
  solutionid?: string | null;
  statecode?: environmentvariabledefinition_statecode | null;
  statuscode?: environmentvariabledefinition_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  type?: environmentvariabledefinition_type | null;
  utcconversiontimezonecode?: number | null;
  valueschema?: string | null;
  versionnumber?: number | null;
}
interface EnvironmentVariableDefinition_Relationships {
  environmentvariabledefinition_AsyncOperations?: AsyncOperation_Result[] | null;
  environmentvariabledefinition_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  environmentvariabledefinition_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  environmentvariabledefinition_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  environmentvariabledefinition_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  environmentvariabledefinition_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  environmentvariabledefinition_ProcessSession?: ProcessSession_Result[] | null;
  environmentvariabledefinition_SyncErrors?: SyncError_Result[] | null;
  environmentvariabledefinition_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  environmentvariabledefinition_environmentvariablevalue?: EnvironmentVariableValue_Result[] | null;
}
interface EnvironmentVariableDefinition extends EnvironmentVariableDefinition_Base, EnvironmentVariableDefinition_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface EnvironmentVariableDefinition_Create extends EnvironmentVariableDefinition {
}
interface EnvironmentVariableDefinition_Update extends EnvironmentVariableDefinition {
}
interface EnvironmentVariableDefinition_Select {
  componentstate: WebAttribute<EnvironmentVariableDefinition_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  connectionid: WebAttribute<EnvironmentVariableDefinition_Select, { connectionid: string | null }, {  }>;
  connectionreferenceid_guid: WebAttribute<EnvironmentVariableDefinition_Select, { connectionreferenceid_guid: string | null }, { connectionreferenceid_formatted?: string }>;
  createdby_guid: WebAttribute<EnvironmentVariableDefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<EnvironmentVariableDefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<EnvironmentVariableDefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datasourcetype: WebAttribute<EnvironmentVariableDefinition_Select, { datasourcetype: string | null }, {  }>;
  defaultvalue: WebAttribute<EnvironmentVariableDefinition_Select, { defaultvalue: string | null }, {  }>;
  description: WebAttribute<EnvironmentVariableDefinition_Select, { description: string | null }, {  }>;
  displayname: WebAttribute<EnvironmentVariableDefinition_Select, { displayname: string | null }, {  }>;
  environmentvariabledefinitionid: WebAttribute<EnvironmentVariableDefinition_Select, { environmentvariabledefinitionid: string | null }, {  }>;
  environmentvariabledefinitionidunique: WebAttribute<EnvironmentVariableDefinition_Select, { environmentvariabledefinitionidunique: string | null }, {  }>;
  hint: WebAttribute<EnvironmentVariableDefinition_Select, { hint: string | null }, {  }>;
  importsequencenumber: WebAttribute<EnvironmentVariableDefinition_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<EnvironmentVariableDefinition_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<EnvironmentVariableDefinition_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<EnvironmentVariableDefinition_Select, { ismanaged: boolean | null }, {  }>;
  isrequired: WebAttribute<EnvironmentVariableDefinition_Select, { isrequired: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<EnvironmentVariableDefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<EnvironmentVariableDefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<EnvironmentVariableDefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<EnvironmentVariableDefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<EnvironmentVariableDefinition_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<EnvironmentVariableDefinition_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<EnvironmentVariableDefinition_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<EnvironmentVariableDefinition_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<EnvironmentVariableDefinition_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentdefinitionid_guid: WebAttribute<EnvironmentVariableDefinition_Select, { parentdefinitionid_guid: string | null }, { parentdefinitionid_formatted?: string }>;
  schemaname: WebAttribute<EnvironmentVariableDefinition_Select, { schemaname: string | null }, {  }>;
  solutionid: WebAttribute<EnvironmentVariableDefinition_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<EnvironmentVariableDefinition_Select, { statecode: environmentvariabledefinition_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<EnvironmentVariableDefinition_Select, { statuscode: environmentvariabledefinition_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<EnvironmentVariableDefinition_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<EnvironmentVariableDefinition_Select, { timezoneruleversionnumber: number | null }, {  }>;
  type: WebAttribute<EnvironmentVariableDefinition_Select, { type: environmentvariabledefinition_type | null }, { type_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<EnvironmentVariableDefinition_Select, { utcconversiontimezonecode: number | null }, {  }>;
  valueschema: WebAttribute<EnvironmentVariableDefinition_Select, { valueschema: string | null }, {  }>;
  versionnumber: WebAttribute<EnvironmentVariableDefinition_Select, { versionnumber: number | null }, {  }>;
}
interface EnvironmentVariableDefinition_Filter {
  componentstate: componentstate;
  connectionid: string;
  connectionreferenceid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datasourcetype: string;
  defaultvalue: string;
  description: string;
  displayname: string;
  environmentvariabledefinitionid: XQW.Guid;
  environmentvariabledefinitionidunique: XQW.Guid;
  hint: string;
  importsequencenumber: number;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  isrequired: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentdefinitionid_guid: XQW.Guid;
  schemaname: string;
  solutionid: XQW.Guid;
  statecode: environmentvariabledefinition_statecode;
  statuscode: environmentvariabledefinition_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  type: environmentvariabledefinition_type;
  utcconversiontimezonecode: number;
  valueschema: string;
  versionnumber: number;
}
interface EnvironmentVariableDefinition_Expand {
  createdby: WebExpand<EnvironmentVariableDefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<EnvironmentVariableDefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  environmentvariabledefinition_AsyncOperations: WebExpand<EnvironmentVariableDefinition_Expand, AsyncOperation_Select, AsyncOperation_Filter, { environmentvariabledefinition_AsyncOperations: AsyncOperation_Result[] }>;
  environmentvariabledefinition_BulkDeleteFailures: WebExpand<EnvironmentVariableDefinition_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { environmentvariabledefinition_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  environmentvariabledefinition_DuplicateBaseRecord: WebExpand<EnvironmentVariableDefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { environmentvariabledefinition_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  environmentvariabledefinition_DuplicateMatchingRecord: WebExpand<EnvironmentVariableDefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { environmentvariabledefinition_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  environmentvariabledefinition_MailboxTrackingFolders: WebExpand<EnvironmentVariableDefinition_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { environmentvariabledefinition_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  environmentvariabledefinition_PrincipalObjectAttributeAccesses: WebExpand<EnvironmentVariableDefinition_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { environmentvariabledefinition_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  environmentvariabledefinition_ProcessSession: WebExpand<EnvironmentVariableDefinition_Expand, ProcessSession_Select, ProcessSession_Filter, { environmentvariabledefinition_ProcessSession: ProcessSession_Result[] }>;
  environmentvariabledefinition_SyncErrors: WebExpand<EnvironmentVariableDefinition_Expand, SyncError_Select, SyncError_Filter, { environmentvariabledefinition_SyncErrors: SyncError_Result[] }>;
  environmentvariabledefinition_UserEntityInstanceDatas: WebExpand<EnvironmentVariableDefinition_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { environmentvariabledefinition_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  environmentvariabledefinition_environmentvariablevalue: WebExpand<EnvironmentVariableDefinition_Expand, EnvironmentVariableValue_Select, EnvironmentVariableValue_Filter, { environmentvariabledefinition_environmentvariablevalue: EnvironmentVariableValue_Result[] }>;
  modifiedby: WebExpand<EnvironmentVariableDefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<EnvironmentVariableDefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<EnvironmentVariableDefinition_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<EnvironmentVariableDefinition_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<EnvironmentVariableDefinition_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<EnvironmentVariableDefinition_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface EnvironmentVariableDefinition_FormattedResult {
  componentstate_formatted?: string;
  connectionreferenceid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentdefinitionid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  type_formatted?: string;
}
interface EnvironmentVariableDefinition_Result extends EnvironmentVariableDefinition_Base, EnvironmentVariableDefinition_Relationships {
  "@odata.etag": string;
  connectionreferenceid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentdefinitionid_guid: string | null;
}
interface EnvironmentVariableDefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface EnvironmentVariableDefinition_RelatedMany {
  environmentvariabledefinition_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  environmentvariabledefinition_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  environmentvariabledefinition_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  environmentvariabledefinition_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  environmentvariabledefinition_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  environmentvariabledefinition_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  environmentvariabledefinition_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  environmentvariabledefinition_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  environmentvariabledefinition_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  environmentvariabledefinition_environmentvariablevalue: WebMappingRetrieve<EnvironmentVariableValue_Select,EnvironmentVariableValue_Expand,EnvironmentVariableValue_Filter,EnvironmentVariableValue_Fixed,EnvironmentVariableValue_Result,EnvironmentVariableValue_FormattedResult>;
}
interface WebEntitiesRetrieve {
  environmentvariabledefinitions: WebMappingRetrieve<EnvironmentVariableDefinition_Select,EnvironmentVariableDefinition_Expand,EnvironmentVariableDefinition_Filter,EnvironmentVariableDefinition_Fixed,EnvironmentVariableDefinition_Result,EnvironmentVariableDefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  environmentvariabledefinitions: WebMappingRelated<EnvironmentVariableDefinition_RelatedOne,EnvironmentVariableDefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  environmentvariabledefinitions: WebMappingCUDA<EnvironmentVariableDefinition_Create,EnvironmentVariableDefinition_Update,EnvironmentVariableDefinition_Select>;
}
