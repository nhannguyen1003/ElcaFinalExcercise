interface BookableResourceCategory_Base extends WebEntity {
  bookableresourcecategoryid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: bookableresourcecategory_statecode | null;
  statuscode?: bookableresourcecategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BookableResourceCategory_Relationships {
  BookableResourceCategory_SyncErrors?: SyncError_Result[] | null;
  bookableresourcecategory_AsyncOperations?: AsyncOperation_Result[] | null;
  bookableresourcecategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  bookableresourcecategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  bookableresourcecategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  bookableresourcecategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bookableresourcecategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bookableresourcecategory_ProcessSession?: ProcessSession_Result[] | null;
  bookableresourcecategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory?: BookableResourceCategoryAssn_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
}
interface BookableResourceCategory extends BookableResourceCategory_Base, BookableResourceCategory_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface BookableResourceCategory_Create extends BookableResourceCategory {
}
interface BookableResourceCategory_Update extends BookableResourceCategory {
}
interface BookableResourceCategory_Select {
  bookableresourcecategoryid: WebAttribute<BookableResourceCategory_Select, { bookableresourcecategoryid: string | null }, {  }>;
  createdby_guid: WebAttribute<BookableResourceCategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BookableResourceCategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BookableResourceCategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<BookableResourceCategory_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<BookableResourceCategory_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<BookableResourceCategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<BookableResourceCategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BookableResourceCategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BookableResourceCategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<BookableResourceCategory_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BookableResourceCategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BookableResourceCategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BookableResourceCategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BookableResourceCategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BookableResourceCategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<BookableResourceCategory_Select, { statecode: bookableresourcecategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<BookableResourceCategory_Select, { statuscode: bookableresourcecategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<BookableResourceCategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<BookableResourceCategory_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<BookableResourceCategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BookableResourceCategory_Select, { versionnumber: number | null }, {  }>;
}
interface BookableResourceCategory_Filter {
  bookableresourcecategoryid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: bookableresourcecategory_statecode;
  statuscode: bookableresourcecategory_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BookableResourceCategory_Expand {
  BookableResourceCategory_SyncErrors: WebExpand<BookableResourceCategory_Expand, SyncError_Select, SyncError_Filter, { BookableResourceCategory_SyncErrors: SyncError_Result[] }>;
  bookableresourcecategory_AsyncOperations: WebExpand<BookableResourceCategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { bookableresourcecategory_AsyncOperations: AsyncOperation_Result[] }>;
  bookableresourcecategory_BulkDeleteFailures: WebExpand<BookableResourceCategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { bookableresourcecategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  bookableresourcecategory_DuplicateBaseRecord: WebExpand<BookableResourceCategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcecategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  bookableresourcecategory_DuplicateMatchingRecord: WebExpand<BookableResourceCategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcecategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  bookableresourcecategory_MailboxTrackingFolders: WebExpand<BookableResourceCategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bookableresourcecategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bookableresourcecategory_PrincipalObjectAttributeAccesses: WebExpand<BookableResourceCategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bookableresourcecategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bookableresourcecategory_ProcessSession: WebExpand<BookableResourceCategory_Expand, ProcessSession_Select, ProcessSession_Filter, { bookableresourcecategory_ProcessSession: ProcessSession_Result[] }>;
  bookableresourcecategory_UserEntityInstanceDatas: WebExpand<BookableResourceCategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { bookableresourcecategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory: WebExpand<BookableResourceCategory_Expand, BookableResourceCategoryAssn_Select, BookableResourceCategoryAssn_Filter, { bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory: BookableResourceCategoryAssn_Result[] }>;
  createdbyname: WebExpand<BookableResourceCategory_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<BookableResourceCategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<BookableResourceCategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<BookableResourceCategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  ownerid: WebExpand<BookableResourceCategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<BookableResourceCategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<BookableResourceCategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<BookableResourceCategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<BookableResourceCategory_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface BookableResourceCategory_FormattedResult {
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
  transactioncurrencyid_formatted?: string;
}
interface BookableResourceCategory_Result extends BookableResourceCategory_Base, BookableResourceCategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface BookableResourceCategory_RelatedOne {
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface BookableResourceCategory_RelatedMany {
  BookableResourceCategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  bookableresourcecategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  bookableresourcecategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  bookableresourcecategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcecategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcecategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bookableresourcecategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bookableresourcecategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  bookableresourcecategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory: WebMappingRetrieve<BookableResourceCategoryAssn_Select,BookableResourceCategoryAssn_Expand,BookableResourceCategoryAssn_Filter,BookableResourceCategoryAssn_Fixed,BookableResourceCategoryAssn_Result,BookableResourceCategoryAssn_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bookableresourcecategories: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresourcecategories: WebMappingRelated<BookableResourceCategory_RelatedOne,BookableResourceCategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresourcecategories: WebMappingCUDA<BookableResourceCategory_Create,BookableResourceCategory_Update,BookableResourceCategory_Select>;
}
