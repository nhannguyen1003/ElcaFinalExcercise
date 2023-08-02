interface awc_venue_Base extends WebEntity {
  awc_name?: string | null;
  awc_venueid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: awc_venue_statecode | null;
  statuscode?: awc_venue_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface awc_venue_Relationships {
  awc_venue_AsyncOperations?: AsyncOperation_Result[] | null;
  awc_venue_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  awc_venue_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  awc_venue_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  awc_venue_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  awc_venue_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  awc_venue_ProcessSession?: ProcessSession_Result[] | null;
  awc_venue_SyncErrors?: SyncError_Result[] | null;
  awc_venue_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface awc_venue extends awc_venue_Base, awc_venue_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface awc_venue_Create extends awc_venue {
}
interface awc_venue_Update extends awc_venue {
}
interface awc_venue_Select {
  awc_name: WebAttribute<awc_venue_Select, { awc_name: string | null }, {  }>;
  awc_venueid: WebAttribute<awc_venue_Select, { awc_venueid: string | null }, {  }>;
  createdby_guid: WebAttribute<awc_venue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<awc_venue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<awc_venue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<awc_venue_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<awc_venue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<awc_venue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<awc_venue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<awc_venue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<awc_venue_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<awc_venue_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<awc_venue_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<awc_venue_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<awc_venue_Select, { statecode: awc_venue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<awc_venue_Select, { statuscode: awc_venue_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<awc_venue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<awc_venue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<awc_venue_Select, { versionnumber: number | null }, {  }>;
}
interface awc_venue_Filter {
  awc_name: string;
  awc_venueid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: awc_venue_statecode;
  statuscode: awc_venue_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface awc_venue_Expand {
  awc_venue_AsyncOperations: WebExpand<awc_venue_Expand, AsyncOperation_Select, AsyncOperation_Filter, { awc_venue_AsyncOperations: AsyncOperation_Result[] }>;
  awc_venue_BulkDeleteFailures: WebExpand<awc_venue_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { awc_venue_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  awc_venue_DuplicateBaseRecord: WebExpand<awc_venue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { awc_venue_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  awc_venue_DuplicateMatchingRecord: WebExpand<awc_venue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { awc_venue_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  awc_venue_MailboxTrackingFolders: WebExpand<awc_venue_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { awc_venue_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  awc_venue_PrincipalObjectAttributeAccesses: WebExpand<awc_venue_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { awc_venue_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  awc_venue_ProcessSession: WebExpand<awc_venue_Expand, ProcessSession_Select, ProcessSession_Filter, { awc_venue_ProcessSession: ProcessSession_Result[] }>;
  awc_venue_SyncErrors: WebExpand<awc_venue_Expand, SyncError_Select, SyncError_Filter, { awc_venue_SyncErrors: SyncError_Result[] }>;
  awc_venue_UserEntityInstanceDatas: WebExpand<awc_venue_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { awc_venue_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<awc_venue_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<awc_venue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<awc_venue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<awc_venue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<awc_venue_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<awc_venue_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<awc_venue_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<awc_venue_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface awc_venue_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface awc_venue_Result extends awc_venue_Base, awc_venue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface awc_venue_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface awc_venue_RelatedMany {
  awc_venue_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  awc_venue_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  awc_venue_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  awc_venue_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  awc_venue_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  awc_venue_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  awc_venue_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  awc_venue_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  awc_venue_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  awc_venues: WebMappingRetrieve<awc_venue_Select,awc_venue_Expand,awc_venue_Filter,awc_venue_Fixed,awc_venue_Result,awc_venue_FormattedResult>;
}
interface WebEntitiesRelated {
  awc_venues: WebMappingRelated<awc_venue_RelatedOne,awc_venue_RelatedMany>;
}
interface WebEntitiesCUDA {
  awc_venues: WebMappingCUDA<awc_venue_Create,awc_venue_Update,awc_venue_Select>;
}
