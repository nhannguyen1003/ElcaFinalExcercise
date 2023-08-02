interface elca_Project_Base extends WebEntity {
  createdon?: Date | null;
  elca_customer?: string | null;
  elca_enddate?: Date | null;
  elca_members?: string | null;
  elca_name?: string | null;
  elca_projectid?: string | null;
  elca_projectnumber?: string | null;
  elca_projectstatus?: elca_projectstatus | null;
  elca_startdate?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: elca_project_statecode | null;
  statuscode?: elca_project_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface elca_Project_Relationships {
  elca_ProjectGroupId?: elca_ProjectGroup_Result | null;
  elca_project_AsyncOperations?: AsyncOperation_Result[] | null;
  elca_project_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  elca_project_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  elca_project_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  elca_project_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  elca_project_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  elca_project_ProcessSession?: ProcessSession_Result[] | null;
  elca_project_SyncErrors?: SyncError_Result[] | null;
  elca_project_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  elca_project_contact?: Contact_Result[] | null;
}
interface elca_Project extends elca_Project_Base, elca_Project_Relationships {
  elca_ProjectGroupId_bind$elca_projectgroups?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface elca_Project_Create extends elca_Project {
}
interface elca_Project_Update extends elca_Project {
}
interface elca_Project_Select {
  createdby_guid: WebAttribute<elca_Project_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<elca_Project_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<elca_Project_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  elca_customer: WebAttribute<elca_Project_Select, { elca_customer: string | null }, {  }>;
  elca_enddate: WebAttribute<elca_Project_Select, { elca_enddate: Date | null }, { elca_enddate_formatted?: string }>;
  elca_members: WebAttribute<elca_Project_Select, { elca_members: string | null }, {  }>;
  elca_name: WebAttribute<elca_Project_Select, { elca_name: string | null }, {  }>;
  elca_projectgroupid_guid: WebAttribute<elca_Project_Select, { elca_projectgroupid_guid: string | null }, { elca_projectgroupid_formatted?: string }>;
  elca_projectid: WebAttribute<elca_Project_Select, { elca_projectid: string | null }, {  }>;
  elca_projectnumber: WebAttribute<elca_Project_Select, { elca_projectnumber: string | null }, {  }>;
  elca_projectstatus: WebAttribute<elca_Project_Select, { elca_projectstatus: elca_projectstatus | null }, { elca_projectstatus_formatted?: string }>;
  elca_startdate: WebAttribute<elca_Project_Select, { elca_startdate: Date | null }, { elca_startdate_formatted?: string }>;
  importsequencenumber: WebAttribute<elca_Project_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<elca_Project_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<elca_Project_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<elca_Project_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<elca_Project_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<elca_Project_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<elca_Project_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<elca_Project_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<elca_Project_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<elca_Project_Select, { statecode: elca_project_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<elca_Project_Select, { statuscode: elca_project_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<elca_Project_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<elca_Project_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<elca_Project_Select, { versionnumber: number | null }, {  }>;
}
interface elca_Project_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  elca_customer: string;
  elca_enddate: Date;
  elca_members: string;
  elca_name: string;
  elca_projectgroupid_guid: XQW.Guid;
  elca_projectid: XQW.Guid;
  elca_projectnumber: string;
  elca_projectstatus: elca_projectstatus;
  elca_startdate: Date;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: elca_project_statecode;
  statuscode: elca_project_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface elca_Project_Expand {
  createdby: WebExpand<elca_Project_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<elca_Project_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  elca_ProjectGroupId: WebExpand<elca_Project_Expand, elca_ProjectGroup_Select, elca_ProjectGroup_Filter, { elca_ProjectGroupId: elca_ProjectGroup_Result }>;
  elca_project_AsyncOperations: WebExpand<elca_Project_Expand, AsyncOperation_Select, AsyncOperation_Filter, { elca_project_AsyncOperations: AsyncOperation_Result[] }>;
  elca_project_BulkDeleteFailures: WebExpand<elca_Project_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { elca_project_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  elca_project_DuplicateBaseRecord: WebExpand<elca_Project_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { elca_project_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  elca_project_DuplicateMatchingRecord: WebExpand<elca_Project_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { elca_project_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  elca_project_MailboxTrackingFolders: WebExpand<elca_Project_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { elca_project_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  elca_project_PrincipalObjectAttributeAccesses: WebExpand<elca_Project_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { elca_project_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  elca_project_ProcessSession: WebExpand<elca_Project_Expand, ProcessSession_Select, ProcessSession_Filter, { elca_project_ProcessSession: ProcessSession_Result[] }>;
  elca_project_SyncErrors: WebExpand<elca_Project_Expand, SyncError_Select, SyncError_Filter, { elca_project_SyncErrors: SyncError_Result[] }>;
  elca_project_UserEntityInstanceDatas: WebExpand<elca_Project_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { elca_project_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  elca_project_contact: WebExpand<elca_Project_Expand, Contact_Select, Contact_Filter, { elca_project_contact: Contact_Result[] }>;
  modifiedby: WebExpand<elca_Project_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<elca_Project_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<elca_Project_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<elca_Project_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<elca_Project_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<elca_Project_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface elca_Project_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  elca_enddate_formatted?: string;
  elca_projectgroupid_formatted?: string;
  elca_projectstatus_formatted?: string;
  elca_startdate_formatted?: string;
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
interface elca_Project_Result extends elca_Project_Base, elca_Project_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  elca_projectgroupid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface elca_Project_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  elca_ProjectGroupId: WebMappingRetrieve<elca_ProjectGroup_Select,elca_ProjectGroup_Expand,elca_ProjectGroup_Filter,elca_ProjectGroup_Fixed,elca_ProjectGroup_Result,elca_ProjectGroup_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface elca_Project_RelatedMany {
  elca_project_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  elca_project_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  elca_project_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  elca_project_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  elca_project_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  elca_project_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  elca_project_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  elca_project_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  elca_project_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  elca_project_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface WebEntitiesRetrieve {
  elca_projects: WebMappingRetrieve<elca_Project_Select,elca_Project_Expand,elca_Project_Filter,elca_Project_Fixed,elca_Project_Result,elca_Project_FormattedResult>;
}
interface WebEntitiesRelated {
  elca_projects: WebMappingRelated<elca_Project_RelatedOne,elca_Project_RelatedMany>;
}
interface WebEntitiesCUDA {
  elca_projects: WebMappingCUDA<elca_Project_Create,elca_Project_Update,elca_Project_Select>;
}
