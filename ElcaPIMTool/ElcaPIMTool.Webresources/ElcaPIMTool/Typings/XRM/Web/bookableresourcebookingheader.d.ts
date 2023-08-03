interface BookableResourceBookingHeader_Base extends WebEntity {
  bookableresourcebookingheaderid?: string | null;
  createdon?: Date | null;
  duration?: number | null;
  endtime?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  starttime?: Date | null;
  statecode?: bookableresourcebookingheader_statecode | null;
  statuscode?: bookableresourcebookingheader_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BookableResourceBookingHeader_Relationships {
  BookableResourceBookingHeader_SyncErrors?: SyncError_Result[] | null;
  bookableresourcebookingheader_ActivityPointers?: ActivityPointer_Result[] | null;
  bookableresourcebookingheader_Annotations?: Annotation_Result[] | null;
  bookableresourcebookingheader_Appointments?: Appointment_Result[] | null;
  bookableresourcebookingheader_AsyncOperations?: AsyncOperation_Result[] | null;
  bookableresourcebookingheader_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  bookableresourcebookingheader_BulkOperations?: BulkOperation_Result[] | null;
  bookableresourcebookingheader_CampaignActivities?: CampaignActivity_Result[] | null;
  bookableresourcebookingheader_CampaignResponses?: CampaignResponse_Result[] | null;
  bookableresourcebookingheader_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  bookableresourcebookingheader_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  bookableresourcebookingheader_Emails?: Email_Result[] | null;
  bookableresourcebookingheader_Faxes?: Fax_Result[] | null;
  bookableresourcebookingheader_IncidentResolutions?: IncidentResolution_Result[] | null;
  bookableresourcebookingheader_Letters?: Letter_Result[] | null;
  bookableresourcebookingheader_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bookableresourcebookingheader_OpportunityCloses?: OpportunityClose_Result[] | null;
  bookableresourcebookingheader_OrderCloses?: OrderClose_Result[] | null;
  bookableresourcebookingheader_PhoneCalls?: PhoneCall_Result[] | null;
  bookableresourcebookingheader_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bookableresourcebookingheader_ProcessSession?: ProcessSession_Result[] | null;
  bookableresourcebookingheader_QuoteCloses?: QuoteClose_Result[] | null;
  bookableresourcebookingheader_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  bookableresourcebookingheader_ServiceAppointments?: ServiceAppointment_Result[] | null;
  bookableresourcebookingheader_SocialActivities?: SocialActivity_Result[] | null;
  bookableresourcebookingheader_Tasks?: Task_Result[] | null;
  bookableresourcebookingheader_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  bookableresourcebookingheader_awcnpd_feedbacks?: awcnpd_feedback_Result[] | null;
  bookableresourcebookingheader_bookableresourcebooking_Header?: BookableResourceBooking_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
}
interface BookableResourceBookingHeader extends BookableResourceBookingHeader_Base, BookableResourceBookingHeader_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface BookableResourceBookingHeader_Create extends BookableResourceBookingHeader {
}
interface BookableResourceBookingHeader_Update extends BookableResourceBookingHeader {
}
interface BookableResourceBookingHeader_Select {
  bookableresourcebookingheaderid: WebAttribute<BookableResourceBookingHeader_Select, { bookableresourcebookingheaderid: string | null }, {  }>;
  createdby_guid: WebAttribute<BookableResourceBookingHeader_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BookableResourceBookingHeader_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BookableResourceBookingHeader_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duration: WebAttribute<BookableResourceBookingHeader_Select, { duration: number | null }, {  }>;
  endtime: WebAttribute<BookableResourceBookingHeader_Select, { endtime: Date | null }, { endtime_formatted?: string }>;
  exchangerate: WebAttribute<BookableResourceBookingHeader_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<BookableResourceBookingHeader_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<BookableResourceBookingHeader_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BookableResourceBookingHeader_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BookableResourceBookingHeader_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<BookableResourceBookingHeader_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BookableResourceBookingHeader_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BookableResourceBookingHeader_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BookableResourceBookingHeader_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BookableResourceBookingHeader_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BookableResourceBookingHeader_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<BookableResourceBookingHeader_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<BookableResourceBookingHeader_Select, { stageid: string | null }, {  }>;
  starttime: WebAttribute<BookableResourceBookingHeader_Select, { starttime: Date | null }, { starttime_formatted?: string }>;
  statecode: WebAttribute<BookableResourceBookingHeader_Select, { statecode: bookableresourcebookingheader_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<BookableResourceBookingHeader_Select, { statuscode: bookableresourcebookingheader_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<BookableResourceBookingHeader_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<BookableResourceBookingHeader_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<BookableResourceBookingHeader_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<BookableResourceBookingHeader_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BookableResourceBookingHeader_Select, { versionnumber: number | null }, {  }>;
}
interface BookableResourceBookingHeader_Filter {
  bookableresourcebookingheaderid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  duration: number;
  endtime: Date;
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
  stageid: XQW.Guid;
  starttime: Date;
  statecode: bookableresourcebookingheader_statecode;
  statuscode: bookableresourcebookingheader_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BookableResourceBookingHeader_Expand {
  BookableResourceBookingHeader_SyncErrors: WebExpand<BookableResourceBookingHeader_Expand, SyncError_Select, SyncError_Filter, { BookableResourceBookingHeader_SyncErrors: SyncError_Result[] }>;
  bookableresourcebookingheader_ActivityPointers: WebExpand<BookableResourceBookingHeader_Expand, ActivityPointer_Select, ActivityPointer_Filter, { bookableresourcebookingheader_ActivityPointers: ActivityPointer_Result[] }>;
  bookableresourcebookingheader_Annotations: WebExpand<BookableResourceBookingHeader_Expand, Annotation_Select, Annotation_Filter, { bookableresourcebookingheader_Annotations: Annotation_Result[] }>;
  bookableresourcebookingheader_Appointments: WebExpand<BookableResourceBookingHeader_Expand, Appointment_Select, Appointment_Filter, { bookableresourcebookingheader_Appointments: Appointment_Result[] }>;
  bookableresourcebookingheader_AsyncOperations: WebExpand<BookableResourceBookingHeader_Expand, AsyncOperation_Select, AsyncOperation_Filter, { bookableresourcebookingheader_AsyncOperations: AsyncOperation_Result[] }>;
  bookableresourcebookingheader_BulkDeleteFailures: WebExpand<BookableResourceBookingHeader_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { bookableresourcebookingheader_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  bookableresourcebookingheader_BulkOperations: WebExpand<BookableResourceBookingHeader_Expand, BulkOperation_Select, BulkOperation_Filter, { bookableresourcebookingheader_BulkOperations: BulkOperation_Result[] }>;
  bookableresourcebookingheader_CampaignActivities: WebExpand<BookableResourceBookingHeader_Expand, CampaignActivity_Select, CampaignActivity_Filter, { bookableresourcebookingheader_CampaignActivities: CampaignActivity_Result[] }>;
  bookableresourcebookingheader_CampaignResponses: WebExpand<BookableResourceBookingHeader_Expand, CampaignResponse_Select, CampaignResponse_Filter, { bookableresourcebookingheader_CampaignResponses: CampaignResponse_Result[] }>;
  bookableresourcebookingheader_DuplicateBaseRecord: WebExpand<BookableResourceBookingHeader_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcebookingheader_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  bookableresourcebookingheader_DuplicateMatchingRecord: WebExpand<BookableResourceBookingHeader_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcebookingheader_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  bookableresourcebookingheader_Emails: WebExpand<BookableResourceBookingHeader_Expand, Email_Select, Email_Filter, { bookableresourcebookingheader_Emails: Email_Result[] }>;
  bookableresourcebookingheader_Faxes: WebExpand<BookableResourceBookingHeader_Expand, Fax_Select, Fax_Filter, { bookableresourcebookingheader_Faxes: Fax_Result[] }>;
  bookableresourcebookingheader_IncidentResolutions: WebExpand<BookableResourceBookingHeader_Expand, IncidentResolution_Select, IncidentResolution_Filter, { bookableresourcebookingheader_IncidentResolutions: IncidentResolution_Result[] }>;
  bookableresourcebookingheader_Letters: WebExpand<BookableResourceBookingHeader_Expand, Letter_Select, Letter_Filter, { bookableresourcebookingheader_Letters: Letter_Result[] }>;
  bookableresourcebookingheader_MailboxTrackingFolders: WebExpand<BookableResourceBookingHeader_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bookableresourcebookingheader_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bookableresourcebookingheader_OpportunityCloses: WebExpand<BookableResourceBookingHeader_Expand, OpportunityClose_Select, OpportunityClose_Filter, { bookableresourcebookingheader_OpportunityCloses: OpportunityClose_Result[] }>;
  bookableresourcebookingheader_OrderCloses: WebExpand<BookableResourceBookingHeader_Expand, OrderClose_Select, OrderClose_Filter, { bookableresourcebookingheader_OrderCloses: OrderClose_Result[] }>;
  bookableresourcebookingheader_PhoneCalls: WebExpand<BookableResourceBookingHeader_Expand, PhoneCall_Select, PhoneCall_Filter, { bookableresourcebookingheader_PhoneCalls: PhoneCall_Result[] }>;
  bookableresourcebookingheader_PrincipalObjectAttributeAccesses: WebExpand<BookableResourceBookingHeader_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bookableresourcebookingheader_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bookableresourcebookingheader_ProcessSession: WebExpand<BookableResourceBookingHeader_Expand, ProcessSession_Select, ProcessSession_Filter, { bookableresourcebookingheader_ProcessSession: ProcessSession_Result[] }>;
  bookableresourcebookingheader_QuoteCloses: WebExpand<BookableResourceBookingHeader_Expand, QuoteClose_Select, QuoteClose_Filter, { bookableresourcebookingheader_QuoteCloses: QuoteClose_Result[] }>;
  bookableresourcebookingheader_RecurringAppointmentMasters: WebExpand<BookableResourceBookingHeader_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { bookableresourcebookingheader_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  bookableresourcebookingheader_ServiceAppointments: WebExpand<BookableResourceBookingHeader_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { bookableresourcebookingheader_ServiceAppointments: ServiceAppointment_Result[] }>;
  bookableresourcebookingheader_SocialActivities: WebExpand<BookableResourceBookingHeader_Expand, SocialActivity_Select, SocialActivity_Filter, { bookableresourcebookingheader_SocialActivities: SocialActivity_Result[] }>;
  bookableresourcebookingheader_Tasks: WebExpand<BookableResourceBookingHeader_Expand, Task_Select, Task_Filter, { bookableresourcebookingheader_Tasks: Task_Result[] }>;
  bookableresourcebookingheader_UserEntityInstanceDatas: WebExpand<BookableResourceBookingHeader_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { bookableresourcebookingheader_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  bookableresourcebookingheader_awcnpd_feedbacks: WebExpand<BookableResourceBookingHeader_Expand, awcnpd_feedback_Select, awcnpd_feedback_Filter, { bookableresourcebookingheader_awcnpd_feedbacks: awcnpd_feedback_Result[] }>;
  bookableresourcebookingheader_bookableresourcebooking_Header: WebExpand<BookableResourceBookingHeader_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { bookableresourcebookingheader_bookableresourcebooking_Header: BookableResourceBooking_Result[] }>;
  createdbyname: WebExpand<BookableResourceBookingHeader_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<BookableResourceBookingHeader_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<BookableResourceBookingHeader_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<BookableResourceBookingHeader_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  ownerid: WebExpand<BookableResourceBookingHeader_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<BookableResourceBookingHeader_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<BookableResourceBookingHeader_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<BookableResourceBookingHeader_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<BookableResourceBookingHeader_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
  transactioncurrencyid: WebExpand<BookableResourceBookingHeader_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface BookableResourceBookingHeader_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  endtime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  starttime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface BookableResourceBookingHeader_Result extends BookableResourceBookingHeader_Base, BookableResourceBookingHeader_Relationships {
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
interface BookableResourceBookingHeader_RelatedOne {
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
interface BookableResourceBookingHeader_RelatedMany {
  BookableResourceBookingHeader_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  bookableresourcebookingheader_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  bookableresourcebookingheader_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  bookableresourcebookingheader_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  bookableresourcebookingheader_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  bookableresourcebookingheader_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  bookableresourcebookingheader_BulkOperations: WebMappingRetrieve<BulkOperation_Select,BulkOperation_Expand,BulkOperation_Filter,BulkOperation_Fixed,BulkOperation_Result,BulkOperation_FormattedResult>;
  bookableresourcebookingheader_CampaignActivities: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  bookableresourcebookingheader_CampaignResponses: WebMappingRetrieve<CampaignResponse_Select,CampaignResponse_Expand,CampaignResponse_Filter,CampaignResponse_Fixed,CampaignResponse_Result,CampaignResponse_FormattedResult>;
  bookableresourcebookingheader_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcebookingheader_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcebookingheader_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  bookableresourcebookingheader_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  bookableresourcebookingheader_IncidentResolutions: WebMappingRetrieve<IncidentResolution_Select,IncidentResolution_Expand,IncidentResolution_Filter,IncidentResolution_Fixed,IncidentResolution_Result,IncidentResolution_FormattedResult>;
  bookableresourcebookingheader_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  bookableresourcebookingheader_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bookableresourcebookingheader_OpportunityCloses: WebMappingRetrieve<OpportunityClose_Select,OpportunityClose_Expand,OpportunityClose_Filter,OpportunityClose_Fixed,OpportunityClose_Result,OpportunityClose_FormattedResult>;
  bookableresourcebookingheader_OrderCloses: WebMappingRetrieve<OrderClose_Select,OrderClose_Expand,OrderClose_Filter,OrderClose_Fixed,OrderClose_Result,OrderClose_FormattedResult>;
  bookableresourcebookingheader_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  bookableresourcebookingheader_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bookableresourcebookingheader_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  bookableresourcebookingheader_QuoteCloses: WebMappingRetrieve<QuoteClose_Select,QuoteClose_Expand,QuoteClose_Filter,QuoteClose_Fixed,QuoteClose_Result,QuoteClose_FormattedResult>;
  bookableresourcebookingheader_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  bookableresourcebookingheader_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  bookableresourcebookingheader_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  bookableresourcebookingheader_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  bookableresourcebookingheader_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  bookableresourcebookingheader_awcnpd_feedbacks: WebMappingRetrieve<awcnpd_feedback_Select,awcnpd_feedback_Expand,awcnpd_feedback_Filter,awcnpd_feedback_Fixed,awcnpd_feedback_Result,awcnpd_feedback_FormattedResult>;
  bookableresourcebookingheader_bookableresourcebooking_Header: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bookableresourcebookingheaders: WebMappingRetrieve<BookableResourceBookingHeader_Select,BookableResourceBookingHeader_Expand,BookableResourceBookingHeader_Filter,BookableResourceBookingHeader_Fixed,BookableResourceBookingHeader_Result,BookableResourceBookingHeader_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresourcebookingheaders: WebMappingRelated<BookableResourceBookingHeader_RelatedOne,BookableResourceBookingHeader_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresourcebookingheaders: WebMappingCUDA<BookableResourceBookingHeader_Create,BookableResourceBookingHeader_Update,BookableResourceBookingHeader_Select>;
}
