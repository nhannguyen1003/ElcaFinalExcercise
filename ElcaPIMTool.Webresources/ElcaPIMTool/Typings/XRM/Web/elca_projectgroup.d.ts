interface elca_ProjectGroup_Base extends WebEntity {
  createdon?: Date | null;
  elca_name?: string | null;
  elca_projectgroupid?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: elca_projectgroup_statecode | null;
  statuscode?: elca_projectgroup_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface elca_ProjectGroup_Relationships {
  elca_GroupLeaderId?: Contact_Result | null;
  elca_elca_projectgroup_elca_project?: elca_Project_Result[] | null;
  elca_projectgroup_AsyncOperations?: AsyncOperation_Result[] | null;
  elca_projectgroup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  elca_projectgroup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  elca_projectgroup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  elca_projectgroup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  elca_projectgroup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  elca_projectgroup_ProcessSession?: ProcessSession_Result[] | null;
  elca_projectgroup_SyncErrors?: SyncError_Result[] | null;
  elca_projectgroup_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface elca_ProjectGroup extends elca_ProjectGroup_Base, elca_ProjectGroup_Relationships {
  elca_GroupLeaderId_bind$contacts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface elca_ProjectGroup_Create extends elca_ProjectGroup {
}
interface elca_ProjectGroup_Update extends elca_ProjectGroup {
}
interface elca_ProjectGroup_Select {
  createdby_guid: WebAttribute<elca_ProjectGroup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<elca_ProjectGroup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<elca_ProjectGroup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  elca_groupleaderid_guid: WebAttribute<elca_ProjectGroup_Select, { elca_groupleaderid_guid: string | null }, { elca_groupleaderid_formatted?: string }>;
  elca_name: WebAttribute<elca_ProjectGroup_Select, { elca_name: string | null }, {  }>;
  elca_projectgroupid: WebAttribute<elca_ProjectGroup_Select, { elca_projectgroupid: string | null }, {  }>;
  importsequencenumber: WebAttribute<elca_ProjectGroup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<elca_ProjectGroup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<elca_ProjectGroup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<elca_ProjectGroup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<elca_ProjectGroup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<elca_ProjectGroup_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<elca_ProjectGroup_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<elca_ProjectGroup_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<elca_ProjectGroup_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<elca_ProjectGroup_Select, { statecode: elca_projectgroup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<elca_ProjectGroup_Select, { statuscode: elca_projectgroup_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<elca_ProjectGroup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<elca_ProjectGroup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<elca_ProjectGroup_Select, { versionnumber: number | null }, {  }>;
}
interface elca_ProjectGroup_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  elca_groupleaderid_guid: XQW.Guid;
  elca_name: string;
  elca_projectgroupid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: elca_projectgroup_statecode;
  statuscode: elca_projectgroup_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface elca_ProjectGroup_Expand {
  createdby: WebExpand<elca_ProjectGroup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<elca_ProjectGroup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  elca_GroupLeaderId: WebExpand<elca_ProjectGroup_Expand, Contact_Select, Contact_Filter, { elca_GroupLeaderId: Contact_Result }>;
  elca_elca_projectgroup_elca_project: WebExpand<elca_ProjectGroup_Expand, elca_Project_Select, elca_Project_Filter, { elca_elca_projectgroup_elca_project: elca_Project_Result[] }>;
  elca_projectgroup_AsyncOperations: WebExpand<elca_ProjectGroup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { elca_projectgroup_AsyncOperations: AsyncOperation_Result[] }>;
  elca_projectgroup_BulkDeleteFailures: WebExpand<elca_ProjectGroup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { elca_projectgroup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  elca_projectgroup_DuplicateBaseRecord: WebExpand<elca_ProjectGroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { elca_projectgroup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  elca_projectgroup_DuplicateMatchingRecord: WebExpand<elca_ProjectGroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { elca_projectgroup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  elca_projectgroup_MailboxTrackingFolders: WebExpand<elca_ProjectGroup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { elca_projectgroup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  elca_projectgroup_PrincipalObjectAttributeAccesses: WebExpand<elca_ProjectGroup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { elca_projectgroup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  elca_projectgroup_ProcessSession: WebExpand<elca_ProjectGroup_Expand, ProcessSession_Select, ProcessSession_Filter, { elca_projectgroup_ProcessSession: ProcessSession_Result[] }>;
  elca_projectgroup_SyncErrors: WebExpand<elca_ProjectGroup_Expand, SyncError_Select, SyncError_Filter, { elca_projectgroup_SyncErrors: SyncError_Result[] }>;
  elca_projectgroup_UserEntityInstanceDatas: WebExpand<elca_ProjectGroup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { elca_projectgroup_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<elca_ProjectGroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<elca_ProjectGroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<elca_ProjectGroup_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<elca_ProjectGroup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<elca_ProjectGroup_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<elca_ProjectGroup_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface elca_ProjectGroup_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  elca_groupleaderid_formatted?: string;
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
interface elca_ProjectGroup_Result extends elca_ProjectGroup_Base, elca_ProjectGroup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  elca_groupleaderid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface elca_ProjectGroup_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  elca_GroupLeaderId: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface elca_ProjectGroup_RelatedMany {
  elca_elca_projectgroup_elca_project: WebMappingRetrieve<elca_Project_Select,elca_Project_Expand,elca_Project_Filter,elca_Project_Fixed,elca_Project_Result,elca_Project_FormattedResult>;
  elca_projectgroup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  elca_projectgroup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  elca_projectgroup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  elca_projectgroup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  elca_projectgroup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  elca_projectgroup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  elca_projectgroup_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  elca_projectgroup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  elca_projectgroup_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  elca_projectgroups: WebMappingRetrieve<elca_ProjectGroup_Select,elca_ProjectGroup_Expand,elca_ProjectGroup_Filter,elca_ProjectGroup_Fixed,elca_ProjectGroup_Result,elca_ProjectGroup_FormattedResult>;
}
interface WebEntitiesRelated {
  elca_projectgroups: WebMappingRelated<elca_ProjectGroup_RelatedOne,elca_ProjectGroup_RelatedMany>;
}
interface WebEntitiesCUDA {
  elca_projectgroups: WebMappingCUDA<elca_ProjectGroup_Create,elca_ProjectGroup_Update,elca_ProjectGroup_Select>;
}
