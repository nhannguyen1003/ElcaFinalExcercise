interface BookableResource_Base extends WebEntity {
  bookableresourceid?: string | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  resourcetype?: bookableresource_resourcetype | null;
  stageid?: string | null;
  statecode?: bookableresource_statecode | null;
  statuscode?: bookableresource_statuscode | null;
  timezone?: number | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BookableResource_Relationships {
  AccountId?: Account_Result | null;
  BookableResource_SyncErrors?: SyncError_Result[] | null;
  ContactId?: Contact_Result | null;
  UserId?: SystemUser_Result | null;
  bookableresource_Annotations?: Annotation_Result[] | null;
  bookableresource_AsyncOperations?: AsyncOperation_Result[] | null;
  bookableresource_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  bookableresource_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  bookableresource_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  bookableresource_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bookableresource_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bookableresource_ProcessSession?: ProcessSession_Result[] | null;
  bookableresource_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  bookableresource_bookableresourcebooking_Resource?: BookableResourceBooking_Result[] | null;
  bookableresource_bookableresourcecategoryassn_Resource?: BookableResourceCategoryAssn_Result[] | null;
  bookableresource_bookableresourcecharacteristic_Resource?: BookableResourceCharacteristic_Result[] | null;
  bookableresource_bookableresourcegroup_ChildResource?: BookableResourceGroup_Result[] | null;
  bookableresource_bookableresourcegroup_ParentResource?: BookableResourceGroup_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
}
interface BookableResource extends BookableResource_Base, BookableResource_Relationships {
  AccountId_bind$accounts?: string | null;
  ContactId_bind$contacts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface BookableResource_Create extends BookableResource {
  UserId_bind$systemusers?: string | null;
  calendarid_bind$calendars?: string | null;
}
interface BookableResource_Update extends BookableResource {
}
interface BookableResource_Select {
  accountid_guid: WebAttribute<BookableResource_Select, { accountid_guid: string | null }, { accountid_formatted?: string }>;
  bookableresourceid: WebAttribute<BookableResource_Select, { bookableresourceid: string | null }, {  }>;
  calendarid_guid: WebAttribute<BookableResource_Select, { calendarid_guid: string | null }, { calendarid_formatted?: string }>;
  contactid_guid: WebAttribute<BookableResource_Select, { contactid_guid: string | null }, { contactid_formatted?: string }>;
  createdby_guid: WebAttribute<BookableResource_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BookableResource_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BookableResource_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<BookableResource_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<BookableResource_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<BookableResource_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BookableResource_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BookableResource_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<BookableResource_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BookableResource_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BookableResource_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BookableResource_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BookableResource_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BookableResource_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<BookableResource_Select, { processid: string | null }, {  }>;
  resourcetype: WebAttribute<BookableResource_Select, { resourcetype: bookableresource_resourcetype | null }, { resourcetype_formatted?: string }>;
  stageid: WebAttribute<BookableResource_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<BookableResource_Select, { statecode: bookableresource_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<BookableResource_Select, { statuscode: bookableresource_statuscode | null }, { statuscode_formatted?: string }>;
  timezone: WebAttribute<BookableResource_Select, { timezone: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<BookableResource_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<BookableResource_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<BookableResource_Select, { traversedpath: string | null }, {  }>;
  userid_guid: WebAttribute<BookableResource_Select, { userid_guid: string | null }, { userid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<BookableResource_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BookableResource_Select, { versionnumber: number | null }, {  }>;
}
interface BookableResource_Filter {
  accountid_guid: XQW.Guid;
  bookableresourceid: XQW.Guid;
  calendarid_guid: XQW.Guid;
  contactid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
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
  processid: XQW.Guid;
  resourcetype: bookableresource_resourcetype;
  stageid: XQW.Guid;
  statecode: bookableresource_statecode;
  statuscode: bookableresource_statuscode;
  timezone: number;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  userid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BookableResource_Expand {
  AccountId: WebExpand<BookableResource_Expand, Account_Select, Account_Filter, { AccountId: Account_Result }>;
  BookableResource_SyncErrors: WebExpand<BookableResource_Expand, SyncError_Select, SyncError_Filter, { BookableResource_SyncErrors: SyncError_Result[] }>;
  ContactId: WebExpand<BookableResource_Expand, Contact_Select, Contact_Filter, { ContactId: Contact_Result }>;
  UserId: WebExpand<BookableResource_Expand, SystemUser_Select, SystemUser_Filter, { UserId: SystemUser_Result }>;
  bookableresource_Annotations: WebExpand<BookableResource_Expand, Annotation_Select, Annotation_Filter, { bookableresource_Annotations: Annotation_Result[] }>;
  bookableresource_AsyncOperations: WebExpand<BookableResource_Expand, AsyncOperation_Select, AsyncOperation_Filter, { bookableresource_AsyncOperations: AsyncOperation_Result[] }>;
  bookableresource_BulkDeleteFailures: WebExpand<BookableResource_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { bookableresource_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  bookableresource_DuplicateBaseRecord: WebExpand<BookableResource_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresource_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  bookableresource_DuplicateMatchingRecord: WebExpand<BookableResource_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresource_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  bookableresource_MailboxTrackingFolders: WebExpand<BookableResource_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bookableresource_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bookableresource_PrincipalObjectAttributeAccesses: WebExpand<BookableResource_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bookableresource_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bookableresource_ProcessSession: WebExpand<BookableResource_Expand, ProcessSession_Select, ProcessSession_Filter, { bookableresource_ProcessSession: ProcessSession_Result[] }>;
  bookableresource_UserEntityInstanceDatas: WebExpand<BookableResource_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { bookableresource_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  bookableresource_bookableresourcebooking_Resource: WebExpand<BookableResource_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { bookableresource_bookableresourcebooking_Resource: BookableResourceBooking_Result[] }>;
  bookableresource_bookableresourcecategoryassn_Resource: WebExpand<BookableResource_Expand, BookableResourceCategoryAssn_Select, BookableResourceCategoryAssn_Filter, { bookableresource_bookableresourcecategoryassn_Resource: BookableResourceCategoryAssn_Result[] }>;
  bookableresource_bookableresourcecharacteristic_Resource: WebExpand<BookableResource_Expand, BookableResourceCharacteristic_Select, BookableResourceCharacteristic_Filter, { bookableresource_bookableresourcecharacteristic_Resource: BookableResourceCharacteristic_Result[] }>;
  bookableresource_bookableresourcegroup_ChildResource: WebExpand<BookableResource_Expand, BookableResourceGroup_Select, BookableResourceGroup_Filter, { bookableresource_bookableresourcegroup_ChildResource: BookableResourceGroup_Result[] }>;
  bookableresource_bookableresourcegroup_ParentResource: WebExpand<BookableResource_Expand, BookableResourceGroup_Select, BookableResourceGroup_Filter, { bookableresource_bookableresourcegroup_ParentResource: BookableResourceGroup_Result[] }>;
  calendarid: WebExpand<BookableResource_Expand, Calendar_Select, Calendar_Filter, { calendarid: Calendar_Result }>;
  createdbyname: WebExpand<BookableResource_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<BookableResource_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<BookableResource_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<BookableResource_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  ownerid: WebExpand<BookableResource_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<BookableResource_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<BookableResource_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<BookableResource_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<BookableResource_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
  transactioncurrencyid: WebExpand<BookableResource_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface BookableResource_FormattedResult {
  accountid_formatted?: string;
  calendarid_formatted?: string;
  contactid_formatted?: string;
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
  resourcetype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  userid_formatted?: string;
}
interface BookableResource_Result extends BookableResource_Base, BookableResource_Relationships {
  "@odata.etag": string;
  accountid_guid: string | null;
  calendarid_guid: string | null;
  contactid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
  userid_guid: string | null;
}
interface BookableResource_RelatedOne {
  AccountId: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  ContactId: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  UserId: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  calendarid: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface BookableResource_RelatedMany {
  BookableResource_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  bookableresource_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  bookableresource_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  bookableresource_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  bookableresource_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresource_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresource_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bookableresource_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bookableresource_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  bookableresource_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  bookableresource_bookableresourcebooking_Resource: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  bookableresource_bookableresourcecategoryassn_Resource: WebMappingRetrieve<BookableResourceCategoryAssn_Select,BookableResourceCategoryAssn_Expand,BookableResourceCategoryAssn_Filter,BookableResourceCategoryAssn_Fixed,BookableResourceCategoryAssn_Result,BookableResourceCategoryAssn_FormattedResult>;
  bookableresource_bookableresourcecharacteristic_Resource: WebMappingRetrieve<BookableResourceCharacteristic_Select,BookableResourceCharacteristic_Expand,BookableResourceCharacteristic_Filter,BookableResourceCharacteristic_Fixed,BookableResourceCharacteristic_Result,BookableResourceCharacteristic_FormattedResult>;
  bookableresource_bookableresourcegroup_ChildResource: WebMappingRetrieve<BookableResourceGroup_Select,BookableResourceGroup_Expand,BookableResourceGroup_Filter,BookableResourceGroup_Fixed,BookableResourceGroup_Result,BookableResourceGroup_FormattedResult>;
  bookableresource_bookableresourcegroup_ParentResource: WebMappingRetrieve<BookableResourceGroup_Select,BookableResourceGroup_Expand,BookableResourceGroup_Filter,BookableResourceGroup_Fixed,BookableResourceGroup_Result,BookableResourceGroup_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bookableresources: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresources: WebMappingRelated<BookableResource_RelatedOne,BookableResource_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresources: WebMappingCUDA<BookableResource_Create,BookableResource_Update,BookableResource_Select>;
}
