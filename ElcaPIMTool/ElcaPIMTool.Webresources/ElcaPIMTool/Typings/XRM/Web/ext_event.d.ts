interface ext_event_Base extends WebEntity {
  createdon?: Date | null;
  ext_eventid?: string | null;
  ext_name?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: ext_event_statecode | null;
  statuscode?: ext_event_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ext_event_Relationships {
  ext_event_AsyncOperations?: AsyncOperation_Result[] | null;
  ext_event_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ext_event_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  ext_event_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  ext_event_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  ext_event_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  ext_event_ProcessSession?: ProcessSession_Result[] | null;
  ext_event_SyncErrors?: SyncError_Result[] | null;
  ext_event_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface ext_event extends ext_event_Base, ext_event_Relationships {
}
interface ext_event_Create extends ext_event {
}
interface ext_event_Update extends ext_event {
}
interface ext_event_Select {
  createdby_guid: WebAttribute<ext_event_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ext_event_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ext_event_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  ext_eventid: WebAttribute<ext_event_Select, { ext_eventid: string | null }, {  }>;
  ext_name: WebAttribute<ext_event_Select, { ext_name: string | null }, {  }>;
  importsequencenumber: WebAttribute<ext_event_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ext_event_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ext_event_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ext_event_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<ext_event_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ext_event_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<ext_event_Select, { statecode: ext_event_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ext_event_Select, { statuscode: ext_event_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ext_event_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ext_event_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ext_event_Select, { versionnumber: number | null }, {  }>;
}
interface ext_event_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  ext_eventid: XQW.Guid;
  ext_name: string;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: ext_event_statecode;
  statuscode: ext_event_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ext_event_Expand {
  createdby: WebExpand<ext_event_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ext_event_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  ext_event_AsyncOperations: WebExpand<ext_event_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ext_event_AsyncOperations: AsyncOperation_Result[] }>;
  ext_event_BulkDeleteFailures: WebExpand<ext_event_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ext_event_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ext_event_DuplicateBaseRecord: WebExpand<ext_event_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { ext_event_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  ext_event_DuplicateMatchingRecord: WebExpand<ext_event_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { ext_event_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  ext_event_MailboxTrackingFolders: WebExpand<ext_event_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { ext_event_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  ext_event_PrincipalObjectAttributeAccesses: WebExpand<ext_event_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { ext_event_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  ext_event_ProcessSession: WebExpand<ext_event_Expand, ProcessSession_Select, ProcessSession_Filter, { ext_event_ProcessSession: ProcessSession_Result[] }>;
  ext_event_SyncErrors: WebExpand<ext_event_Expand, SyncError_Select, SyncError_Filter, { ext_event_SyncErrors: SyncError_Result[] }>;
  ext_event_UserEntityInstanceDatas: WebExpand<ext_event_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { ext_event_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<ext_event_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ext_event_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ext_event_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface ext_event_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ext_event_Result extends ext_event_Base, ext_event_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ext_event_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ext_event_RelatedMany {
  ext_event_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ext_event_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ext_event_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  ext_event_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  ext_event_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  ext_event_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  ext_event_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ext_event_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  ext_event_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ext_events: WebMappingRetrieve<ext_event_Select,ext_event_Expand,ext_event_Filter,ext_event_Fixed,ext_event_Result,ext_event_FormattedResult>;
}
interface WebEntitiesRelated {
  ext_events: WebMappingRelated<ext_event_RelatedOne,ext_event_RelatedMany>;
}
interface WebEntitiesCUDA {
  ext_events: WebMappingCUDA<ext_event_Create,ext_event_Update,ext_event_Select>;
}
