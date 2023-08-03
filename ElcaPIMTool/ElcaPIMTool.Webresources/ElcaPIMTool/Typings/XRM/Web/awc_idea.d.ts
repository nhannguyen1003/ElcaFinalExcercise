interface awc_idea_Base extends WebEntity {
  awc_ideaid?: string | null;
  awc_name?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: awc_idea_statecode | null;
  statuscode?: awc_idea_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface awc_idea_Relationships {
  awc_awc_idea_awc_prototype?: awc_prototype_Result[] | null;
  awc_awc_idea_competitor?: Competitor_Result[] | null;
  awc_idea_AsyncOperations?: AsyncOperation_Result[] | null;
  awc_idea_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  awc_idea_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  awc_idea_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  awc_idea_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  awc_idea_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  awc_idea_ProcessSession?: ProcessSession_Result[] | null;
  awc_idea_SyncErrors?: SyncError_Result[] | null;
  awc_idea_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface awc_idea extends awc_idea_Base, awc_idea_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface awc_idea_Create extends awc_idea {
}
interface awc_idea_Update extends awc_idea {
}
interface awc_idea_Select {
  awc_ideaid: WebAttribute<awc_idea_Select, { awc_ideaid: string | null }, {  }>;
  awc_name: WebAttribute<awc_idea_Select, { awc_name: string | null }, {  }>;
  createdby_guid: WebAttribute<awc_idea_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<awc_idea_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<awc_idea_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<awc_idea_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<awc_idea_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<awc_idea_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<awc_idea_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<awc_idea_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<awc_idea_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<awc_idea_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<awc_idea_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<awc_idea_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<awc_idea_Select, { statecode: awc_idea_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<awc_idea_Select, { statuscode: awc_idea_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<awc_idea_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<awc_idea_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<awc_idea_Select, { versionnumber: number | null }, {  }>;
}
interface awc_idea_Filter {
  awc_ideaid: XQW.Guid;
  awc_name: string;
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
  statecode: awc_idea_statecode;
  statuscode: awc_idea_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface awc_idea_Expand {
  awc_awc_idea_awc_prototype: WebExpand<awc_idea_Expand, awc_prototype_Select, awc_prototype_Filter, { awc_awc_idea_awc_prototype: awc_prototype_Result[] }>;
  awc_awc_idea_competitor: WebExpand<awc_idea_Expand, Competitor_Select, Competitor_Filter, { awc_awc_idea_competitor: Competitor_Result[] }>;
  awc_idea_AsyncOperations: WebExpand<awc_idea_Expand, AsyncOperation_Select, AsyncOperation_Filter, { awc_idea_AsyncOperations: AsyncOperation_Result[] }>;
  awc_idea_BulkDeleteFailures: WebExpand<awc_idea_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { awc_idea_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  awc_idea_DuplicateBaseRecord: WebExpand<awc_idea_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { awc_idea_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  awc_idea_DuplicateMatchingRecord: WebExpand<awc_idea_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { awc_idea_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  awc_idea_MailboxTrackingFolders: WebExpand<awc_idea_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { awc_idea_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  awc_idea_PrincipalObjectAttributeAccesses: WebExpand<awc_idea_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { awc_idea_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  awc_idea_ProcessSession: WebExpand<awc_idea_Expand, ProcessSession_Select, ProcessSession_Filter, { awc_idea_ProcessSession: ProcessSession_Result[] }>;
  awc_idea_SyncErrors: WebExpand<awc_idea_Expand, SyncError_Select, SyncError_Filter, { awc_idea_SyncErrors: SyncError_Result[] }>;
  awc_idea_UserEntityInstanceDatas: WebExpand<awc_idea_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { awc_idea_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<awc_idea_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<awc_idea_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<awc_idea_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<awc_idea_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<awc_idea_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<awc_idea_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<awc_idea_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<awc_idea_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface awc_idea_FormattedResult {
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
interface awc_idea_Result extends awc_idea_Base, awc_idea_Relationships {
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
interface awc_idea_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface awc_idea_RelatedMany {
  awc_awc_idea_awc_prototype: WebMappingRetrieve<awc_prototype_Select,awc_prototype_Expand,awc_prototype_Filter,awc_prototype_Fixed,awc_prototype_Result,awc_prototype_FormattedResult>;
  awc_awc_idea_competitor: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
  awc_idea_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  awc_idea_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  awc_idea_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  awc_idea_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  awc_idea_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  awc_idea_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  awc_idea_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  awc_idea_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  awc_idea_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  awc_ideas: WebMappingRetrieve<awc_idea_Select,awc_idea_Expand,awc_idea_Filter,awc_idea_Fixed,awc_idea_Result,awc_idea_FormattedResult>;
}
interface WebEntitiesRelated {
  awc_ideas: WebMappingRelated<awc_idea_RelatedOne,awc_idea_RelatedMany>;
}
interface WebEntitiesCUDA {
  awc_ideas: WebMappingCUDA<awc_idea_Create,awc_idea_Update,awc_idea_Select>;
}
