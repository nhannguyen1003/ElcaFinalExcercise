interface BookableResourceBooking_Base extends WebEntity {
  bookableresourcebookingid?: string | null;
  bookingtype?: bookableresourcebooking_bookingtype | null;
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
  statecode?: bookableresourcebooking_statecode | null;
  statuscode?: bookableresourcebooking_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BookableResourceBooking_Relationships {
  BookableResourceBooking_SyncErrors?: SyncError_Result[] | null;
  BookingStatus?: BookingStatus_Result | null;
  Header?: BookableResourceBookingHeader_Result | null;
  Resource?: BookableResource_Result | null;
  bookableresourcebooking_ActivityPointers?: ActivityPointer_Result[] | null;
  bookableresourcebooking_Annotations?: Annotation_Result[] | null;
  bookableresourcebooking_Appointments?: Appointment_Result[] | null;
  bookableresourcebooking_AsyncOperations?: AsyncOperation_Result[] | null;
  bookableresourcebooking_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  bookableresourcebooking_BulkOperations?: BulkOperation_Result[] | null;
  bookableresourcebooking_CampaignActivities?: CampaignActivity_Result[] | null;
  bookableresourcebooking_CampaignResponses?: CampaignResponse_Result[] | null;
  bookableresourcebooking_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  bookableresourcebooking_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  bookableresourcebooking_Emails?: Email_Result[] | null;
  bookableresourcebooking_Faxes?: Fax_Result[] | null;
  bookableresourcebooking_IncidentResolutions?: IncidentResolution_Result[] | null;
  bookableresourcebooking_Letters?: Letter_Result[] | null;
  bookableresourcebooking_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bookableresourcebooking_OpportunityCloses?: OpportunityClose_Result[] | null;
  bookableresourcebooking_OrderCloses?: OrderClose_Result[] | null;
  bookableresourcebooking_PhoneCalls?: PhoneCall_Result[] | null;
  bookableresourcebooking_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bookableresourcebooking_ProcessSession?: ProcessSession_Result[] | null;
  bookableresourcebooking_QuoteCloses?: QuoteClose_Result[] | null;
  bookableresourcebooking_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  bookableresourcebooking_ServiceAppointments?: ServiceAppointment_Result[] | null;
  bookableresourcebooking_SocialActivities?: SocialActivity_Result[] | null;
  bookableresourcebooking_Tasks?: Task_Result[] | null;
  bookableresourcebooking_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  bookableresourcebooking_awcnpd_feedbacks?: awcnpd_feedback_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
}
interface BookableResourceBooking extends BookableResourceBooking_Base, BookableResourceBooking_Relationships {
  BookingStatus_bind$bookingstatuses?: string | null;
  Header_bind$bookableresourcebookingheaders?: string | null;
  Resource_bind$bookableresources?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface BookableResourceBooking_Create extends BookableResourceBooking {
}
interface BookableResourceBooking_Update extends BookableResourceBooking {
}
interface BookableResourceBooking_Select {
  bookableresourcebookingid: WebAttribute<BookableResourceBooking_Select, { bookableresourcebookingid: string | null }, {  }>;
  bookingstatus_guid: WebAttribute<BookableResourceBooking_Select, { bookingstatus_guid: string | null }, { bookingstatus_formatted?: string }>;
  bookingtype: WebAttribute<BookableResourceBooking_Select, { bookingtype: bookableresourcebooking_bookingtype | null }, { bookingtype_formatted?: string }>;
  createdby_guid: WebAttribute<BookableResourceBooking_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BookableResourceBooking_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BookableResourceBooking_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  duration: WebAttribute<BookableResourceBooking_Select, { duration: number | null }, {  }>;
  endtime: WebAttribute<BookableResourceBooking_Select, { endtime: Date | null }, { endtime_formatted?: string }>;
  exchangerate: WebAttribute<BookableResourceBooking_Select, { exchangerate: number | null }, {  }>;
  header_guid: WebAttribute<BookableResourceBooking_Select, { header_guid: string | null }, { header_formatted?: string }>;
  importsequencenumber: WebAttribute<BookableResourceBooking_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<BookableResourceBooking_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BookableResourceBooking_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BookableResourceBooking_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<BookableResourceBooking_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BookableResourceBooking_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BookableResourceBooking_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BookableResourceBooking_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BookableResourceBooking_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BookableResourceBooking_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<BookableResourceBooking_Select, { processid: string | null }, {  }>;
  resource_guid: WebAttribute<BookableResourceBooking_Select, { resource_guid: string | null }, { resource_formatted?: string }>;
  stageid: WebAttribute<BookableResourceBooking_Select, { stageid: string | null }, {  }>;
  starttime: WebAttribute<BookableResourceBooking_Select, { starttime: Date | null }, { starttime_formatted?: string }>;
  statecode: WebAttribute<BookableResourceBooking_Select, { statecode: bookableresourcebooking_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<BookableResourceBooking_Select, { statuscode: bookableresourcebooking_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<BookableResourceBooking_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<BookableResourceBooking_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<BookableResourceBooking_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<BookableResourceBooking_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BookableResourceBooking_Select, { versionnumber: number | null }, {  }>;
}
interface BookableResourceBooking_Filter {
  bookableresourcebookingid: XQW.Guid;
  bookingstatus_guid: XQW.Guid;
  bookingtype: bookableresourcebooking_bookingtype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  duration: number;
  endtime: Date;
  exchangerate: any;
  header_guid: XQW.Guid;
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
  resource_guid: XQW.Guid;
  stageid: XQW.Guid;
  starttime: Date;
  statecode: bookableresourcebooking_statecode;
  statuscode: bookableresourcebooking_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BookableResourceBooking_Expand {
  BookableResourceBooking_SyncErrors: WebExpand<BookableResourceBooking_Expand, SyncError_Select, SyncError_Filter, { BookableResourceBooking_SyncErrors: SyncError_Result[] }>;
  BookingStatus: WebExpand<BookableResourceBooking_Expand, BookingStatus_Select, BookingStatus_Filter, { BookingStatus: BookingStatus_Result }>;
  Header: WebExpand<BookableResourceBooking_Expand, BookableResourceBookingHeader_Select, BookableResourceBookingHeader_Filter, { Header: BookableResourceBookingHeader_Result }>;
  Resource: WebExpand<BookableResourceBooking_Expand, BookableResource_Select, BookableResource_Filter, { Resource: BookableResource_Result }>;
  bookableresourcebooking_ActivityPointers: WebExpand<BookableResourceBooking_Expand, ActivityPointer_Select, ActivityPointer_Filter, { bookableresourcebooking_ActivityPointers: ActivityPointer_Result[] }>;
  bookableresourcebooking_Annotations: WebExpand<BookableResourceBooking_Expand, Annotation_Select, Annotation_Filter, { bookableresourcebooking_Annotations: Annotation_Result[] }>;
  bookableresourcebooking_Appointments: WebExpand<BookableResourceBooking_Expand, Appointment_Select, Appointment_Filter, { bookableresourcebooking_Appointments: Appointment_Result[] }>;
  bookableresourcebooking_AsyncOperations: WebExpand<BookableResourceBooking_Expand, AsyncOperation_Select, AsyncOperation_Filter, { bookableresourcebooking_AsyncOperations: AsyncOperation_Result[] }>;
  bookableresourcebooking_BulkDeleteFailures: WebExpand<BookableResourceBooking_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { bookableresourcebooking_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  bookableresourcebooking_BulkOperations: WebExpand<BookableResourceBooking_Expand, BulkOperation_Select, BulkOperation_Filter, { bookableresourcebooking_BulkOperations: BulkOperation_Result[] }>;
  bookableresourcebooking_CampaignActivities: WebExpand<BookableResourceBooking_Expand, CampaignActivity_Select, CampaignActivity_Filter, { bookableresourcebooking_CampaignActivities: CampaignActivity_Result[] }>;
  bookableresourcebooking_CampaignResponses: WebExpand<BookableResourceBooking_Expand, CampaignResponse_Select, CampaignResponse_Filter, { bookableresourcebooking_CampaignResponses: CampaignResponse_Result[] }>;
  bookableresourcebooking_DuplicateBaseRecord: WebExpand<BookableResourceBooking_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcebooking_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  bookableresourcebooking_DuplicateMatchingRecord: WebExpand<BookableResourceBooking_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcebooking_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  bookableresourcebooking_Emails: WebExpand<BookableResourceBooking_Expand, Email_Select, Email_Filter, { bookableresourcebooking_Emails: Email_Result[] }>;
  bookableresourcebooking_Faxes: WebExpand<BookableResourceBooking_Expand, Fax_Select, Fax_Filter, { bookableresourcebooking_Faxes: Fax_Result[] }>;
  bookableresourcebooking_IncidentResolutions: WebExpand<BookableResourceBooking_Expand, IncidentResolution_Select, IncidentResolution_Filter, { bookableresourcebooking_IncidentResolutions: IncidentResolution_Result[] }>;
  bookableresourcebooking_Letters: WebExpand<BookableResourceBooking_Expand, Letter_Select, Letter_Filter, { bookableresourcebooking_Letters: Letter_Result[] }>;
  bookableresourcebooking_MailboxTrackingFolders: WebExpand<BookableResourceBooking_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bookableresourcebooking_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bookableresourcebooking_OpportunityCloses: WebExpand<BookableResourceBooking_Expand, OpportunityClose_Select, OpportunityClose_Filter, { bookableresourcebooking_OpportunityCloses: OpportunityClose_Result[] }>;
  bookableresourcebooking_OrderCloses: WebExpand<BookableResourceBooking_Expand, OrderClose_Select, OrderClose_Filter, { bookableresourcebooking_OrderCloses: OrderClose_Result[] }>;
  bookableresourcebooking_PhoneCalls: WebExpand<BookableResourceBooking_Expand, PhoneCall_Select, PhoneCall_Filter, { bookableresourcebooking_PhoneCalls: PhoneCall_Result[] }>;
  bookableresourcebooking_PrincipalObjectAttributeAccesses: WebExpand<BookableResourceBooking_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bookableresourcebooking_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bookableresourcebooking_ProcessSession: WebExpand<BookableResourceBooking_Expand, ProcessSession_Select, ProcessSession_Filter, { bookableresourcebooking_ProcessSession: ProcessSession_Result[] }>;
  bookableresourcebooking_QuoteCloses: WebExpand<BookableResourceBooking_Expand, QuoteClose_Select, QuoteClose_Filter, { bookableresourcebooking_QuoteCloses: QuoteClose_Result[] }>;
  bookableresourcebooking_RecurringAppointmentMasters: WebExpand<BookableResourceBooking_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { bookableresourcebooking_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  bookableresourcebooking_ServiceAppointments: WebExpand<BookableResourceBooking_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { bookableresourcebooking_ServiceAppointments: ServiceAppointment_Result[] }>;
  bookableresourcebooking_SocialActivities: WebExpand<BookableResourceBooking_Expand, SocialActivity_Select, SocialActivity_Filter, { bookableresourcebooking_SocialActivities: SocialActivity_Result[] }>;
  bookableresourcebooking_Tasks: WebExpand<BookableResourceBooking_Expand, Task_Select, Task_Filter, { bookableresourcebooking_Tasks: Task_Result[] }>;
  bookableresourcebooking_UserEntityInstanceDatas: WebExpand<BookableResourceBooking_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { bookableresourcebooking_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  bookableresourcebooking_awcnpd_feedbacks: WebExpand<BookableResourceBooking_Expand, awcnpd_feedback_Select, awcnpd_feedback_Filter, { bookableresourcebooking_awcnpd_feedbacks: awcnpd_feedback_Result[] }>;
  createdbyname: WebExpand<BookableResourceBooking_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<BookableResourceBooking_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<BookableResourceBooking_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<BookableResourceBooking_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  ownerid: WebExpand<BookableResourceBooking_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<BookableResourceBooking_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<BookableResourceBooking_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<BookableResourceBooking_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<BookableResourceBooking_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
  transactioncurrencyid: WebExpand<BookableResourceBooking_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface BookableResourceBooking_FormattedResult {
  bookingstatus_formatted?: string;
  bookingtype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  endtime_formatted?: string;
  header_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  resource_formatted?: string;
  starttime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface BookableResourceBooking_Result extends BookableResourceBooking_Base, BookableResourceBooking_Relationships {
  "@odata.etag": string;
  bookingstatus_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  header_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  resource_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface BookableResourceBooking_RelatedOne {
  BookingStatus: WebMappingRetrieve<BookingStatus_Select,BookingStatus_Expand,BookingStatus_Filter,BookingStatus_Fixed,BookingStatus_Result,BookingStatus_FormattedResult>;
  Header: WebMappingRetrieve<BookableResourceBookingHeader_Select,BookableResourceBookingHeader_Expand,BookableResourceBookingHeader_Filter,BookableResourceBookingHeader_Fixed,BookableResourceBookingHeader_Result,BookableResourceBookingHeader_FormattedResult>;
  Resource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
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
interface BookableResourceBooking_RelatedMany {
  BookableResourceBooking_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  bookableresourcebooking_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  bookableresourcebooking_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  bookableresourcebooking_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  bookableresourcebooking_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  bookableresourcebooking_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  bookableresourcebooking_BulkOperations: WebMappingRetrieve<BulkOperation_Select,BulkOperation_Expand,BulkOperation_Filter,BulkOperation_Fixed,BulkOperation_Result,BulkOperation_FormattedResult>;
  bookableresourcebooking_CampaignActivities: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  bookableresourcebooking_CampaignResponses: WebMappingRetrieve<CampaignResponse_Select,CampaignResponse_Expand,CampaignResponse_Filter,CampaignResponse_Fixed,CampaignResponse_Result,CampaignResponse_FormattedResult>;
  bookableresourcebooking_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcebooking_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcebooking_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  bookableresourcebooking_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  bookableresourcebooking_IncidentResolutions: WebMappingRetrieve<IncidentResolution_Select,IncidentResolution_Expand,IncidentResolution_Filter,IncidentResolution_Fixed,IncidentResolution_Result,IncidentResolution_FormattedResult>;
  bookableresourcebooking_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  bookableresourcebooking_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bookableresourcebooking_OpportunityCloses: WebMappingRetrieve<OpportunityClose_Select,OpportunityClose_Expand,OpportunityClose_Filter,OpportunityClose_Fixed,OpportunityClose_Result,OpportunityClose_FormattedResult>;
  bookableresourcebooking_OrderCloses: WebMappingRetrieve<OrderClose_Select,OrderClose_Expand,OrderClose_Filter,OrderClose_Fixed,OrderClose_Result,OrderClose_FormattedResult>;
  bookableresourcebooking_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  bookableresourcebooking_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bookableresourcebooking_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  bookableresourcebooking_QuoteCloses: WebMappingRetrieve<QuoteClose_Select,QuoteClose_Expand,QuoteClose_Filter,QuoteClose_Fixed,QuoteClose_Result,QuoteClose_FormattedResult>;
  bookableresourcebooking_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  bookableresourcebooking_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  bookableresourcebooking_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  bookableresourcebooking_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  bookableresourcebooking_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  bookableresourcebooking_awcnpd_feedbacks: WebMappingRetrieve<awcnpd_feedback_Select,awcnpd_feedback_Expand,awcnpd_feedback_Filter,awcnpd_feedback_Fixed,awcnpd_feedback_Result,awcnpd_feedback_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bookableresourcebookings: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresourcebookings: WebMappingRelated<BookableResourceBooking_RelatedOne,BookableResourceBooking_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresourcebookings: WebMappingCUDA<BookableResourceBooking_Create,BookableResourceBooking_Update,BookableResourceBooking_Select>;
}
