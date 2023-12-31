interface Site_Base extends WebEntity {
  address1_addressid?: string | null;
  address1_addresstypecode?: site_address1_addresstypecode | null;
  address1_city?: string | null;
  address1_country?: string | null;
  address1_county?: string | null;
  address1_fax?: string | null;
  address1_latitude?: number | null;
  address1_line1?: string | null;
  address1_line2?: string | null;
  address1_line3?: string | null;
  address1_longitude?: number | null;
  address1_name?: string | null;
  address1_postalcode?: string | null;
  address1_postofficebox?: string | null;
  address1_shippingmethodcode?: site_address1_shippingmethodcode | null;
  address1_stateorprovince?: string | null;
  address1_telephone1?: string | null;
  address1_telephone2?: string | null;
  address1_telephone3?: string | null;
  address1_upszone?: string | null;
  address1_utcoffset?: number | null;
  address2_addressid?: string | null;
  address2_addresstypecode?: site_address2_addresstypecode | null;
  address2_city?: string | null;
  address2_country?: string | null;
  address2_county?: string | null;
  address2_fax?: string | null;
  address2_latitude?: number | null;
  address2_line1?: string | null;
  address2_line2?: string | null;
  address2_line3?: string | null;
  address2_longitude?: number | null;
  address2_name?: string | null;
  address2_postalcode?: string | null;
  address2_postofficebox?: string | null;
  address2_shippingmethodcode?: site_address2_shippingmethodcode | null;
  address2_stateorprovince?: string | null;
  address2_telephone1?: string | null;
  address2_telephone2?: string | null;
  address2_telephone3?: string | null;
  address2_upszone?: string | null;
  address2_utcoffset?: number | null;
  createdon?: Date | null;
  emailaddress?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  siteid?: string | null;
  timezonecode?: number | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Site_Relationships {
  Site_AsyncOperations?: AsyncOperation_Result[] | null;
  Site_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Site_ProcessSessions?: ProcessSession_Result[] | null;
  Site_SyncErrors?: SyncError_Result[] | null;
  organizationid_organization?: Organization_Result | null;
  site_ActivityPointers?: ActivityPointer_Result[] | null;
  site_Appointments?: Appointment_Result[] | null;
  site_Emails?: Email_Result[] | null;
  site_Faxes?: Fax_Result[] | null;
  site_Letters?: Letter_Result[] | null;
  site_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  site_OpportunityCloses?: OpportunityClose_Result[] | null;
  site_OrderCloses?: OrderClose_Result[] | null;
  site_PhoneCalls?: PhoneCall_Result[] | null;
  site_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  site_QuoteCloses?: QuoteClose_Result[] | null;
  site_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  site_ServiceAppointments?: ServiceAppointment_Result[] | null;
  site_SocialActivities?: SocialActivity_Result[] | null;
  site_Tasks?: Task_Result[] | null;
  site_awcnpd_feedbacks?: awcnpd_feedback_Result[] | null;
  site_equipment?: Equipment_Result[] | null;
  site_internal_addresses?: InternalAddress_Result[] | null;
  site_resources?: Resource_Result[] | null;
  site_service_appointments?: ServiceAppointment_Result[] | null;
  site_system_users?: SystemUser_Result[] | null;
  userentityinstancedata_site?: UserEntityInstanceData_Result[] | null;
}
interface Site extends Site_Base, Site_Relationships {
}
interface Site_Create extends Site {
}
interface Site_Update extends Site {
}
interface Site_Select {
  address1_addressid: WebAttribute<Site_Select, { address1_addressid: string | null }, {  }>;
  address1_addresstypecode: WebAttribute<Site_Select, { address1_addresstypecode: site_address1_addresstypecode | null }, { address1_addresstypecode_formatted?: string }>;
  address1_city: WebAttribute<Site_Select, { address1_city: string | null }, {  }>;
  address1_country: WebAttribute<Site_Select, { address1_country: string | null }, {  }>;
  address1_county: WebAttribute<Site_Select, { address1_county: string | null }, {  }>;
  address1_fax: WebAttribute<Site_Select, { address1_fax: string | null }, {  }>;
  address1_latitude: WebAttribute<Site_Select, { address1_latitude: number | null }, {  }>;
  address1_line1: WebAttribute<Site_Select, { address1_line1: string | null }, {  }>;
  address1_line2: WebAttribute<Site_Select, { address1_line2: string | null }, {  }>;
  address1_line3: WebAttribute<Site_Select, { address1_line3: string | null }, {  }>;
  address1_longitude: WebAttribute<Site_Select, { address1_longitude: number | null }, {  }>;
  address1_name: WebAttribute<Site_Select, { address1_name: string | null }, {  }>;
  address1_postalcode: WebAttribute<Site_Select, { address1_postalcode: string | null }, {  }>;
  address1_postofficebox: WebAttribute<Site_Select, { address1_postofficebox: string | null }, {  }>;
  address1_shippingmethodcode: WebAttribute<Site_Select, { address1_shippingmethodcode: site_address1_shippingmethodcode | null }, { address1_shippingmethodcode_formatted?: string }>;
  address1_stateorprovince: WebAttribute<Site_Select, { address1_stateorprovince: string | null }, {  }>;
  address1_telephone1: WebAttribute<Site_Select, { address1_telephone1: string | null }, {  }>;
  address1_telephone2: WebAttribute<Site_Select, { address1_telephone2: string | null }, {  }>;
  address1_telephone3: WebAttribute<Site_Select, { address1_telephone3: string | null }, {  }>;
  address1_upszone: WebAttribute<Site_Select, { address1_upszone: string | null }, {  }>;
  address1_utcoffset: WebAttribute<Site_Select, { address1_utcoffset: number | null }, {  }>;
  address2_addressid: WebAttribute<Site_Select, { address2_addressid: string | null }, {  }>;
  address2_addresstypecode: WebAttribute<Site_Select, { address2_addresstypecode: site_address2_addresstypecode | null }, { address2_addresstypecode_formatted?: string }>;
  address2_city: WebAttribute<Site_Select, { address2_city: string | null }, {  }>;
  address2_country: WebAttribute<Site_Select, { address2_country: string | null }, {  }>;
  address2_county: WebAttribute<Site_Select, { address2_county: string | null }, {  }>;
  address2_fax: WebAttribute<Site_Select, { address2_fax: string | null }, {  }>;
  address2_latitude: WebAttribute<Site_Select, { address2_latitude: number | null }, {  }>;
  address2_line1: WebAttribute<Site_Select, { address2_line1: string | null }, {  }>;
  address2_line2: WebAttribute<Site_Select, { address2_line2: string | null }, {  }>;
  address2_line3: WebAttribute<Site_Select, { address2_line3: string | null }, {  }>;
  address2_longitude: WebAttribute<Site_Select, { address2_longitude: number | null }, {  }>;
  address2_name: WebAttribute<Site_Select, { address2_name: string | null }, {  }>;
  address2_postalcode: WebAttribute<Site_Select, { address2_postalcode: string | null }, {  }>;
  address2_postofficebox: WebAttribute<Site_Select, { address2_postofficebox: string | null }, {  }>;
  address2_shippingmethodcode: WebAttribute<Site_Select, { address2_shippingmethodcode: site_address2_shippingmethodcode | null }, { address2_shippingmethodcode_formatted?: string }>;
  address2_stateorprovince: WebAttribute<Site_Select, { address2_stateorprovince: string | null }, {  }>;
  address2_telephone1: WebAttribute<Site_Select, { address2_telephone1: string | null }, {  }>;
  address2_telephone2: WebAttribute<Site_Select, { address2_telephone2: string | null }, {  }>;
  address2_telephone3: WebAttribute<Site_Select, { address2_telephone3: string | null }, {  }>;
  address2_upszone: WebAttribute<Site_Select, { address2_upszone: string | null }, {  }>;
  address2_utcoffset: WebAttribute<Site_Select, { address2_utcoffset: number | null }, {  }>;
  createdby_guid: WebAttribute<Site_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Site_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Site_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  emailaddress: WebAttribute<Site_Select, { emailaddress: string | null }, {  }>;
  importsequencenumber: WebAttribute<Site_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<Site_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Site_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Site_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Site_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<Site_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Site_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  siteid: WebAttribute<Site_Select, { siteid: string | null }, {  }>;
  timezonecode: WebAttribute<Site_Select, { timezonecode: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Site_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Site_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Site_Select, { versionnumber: number | null }, {  }>;
}
interface Site_Filter {
  address1_addressid: XQW.Guid;
  address1_addresstypecode: site_address1_addresstypecode;
  address1_city: string;
  address1_country: string;
  address1_county: string;
  address1_fax: string;
  address1_latitude: number;
  address1_line1: string;
  address1_line2: string;
  address1_line3: string;
  address1_longitude: number;
  address1_name: string;
  address1_postalcode: string;
  address1_postofficebox: string;
  address1_shippingmethodcode: site_address1_shippingmethodcode;
  address1_stateorprovince: string;
  address1_telephone1: string;
  address1_telephone2: string;
  address1_telephone3: string;
  address1_upszone: string;
  address1_utcoffset: number;
  address2_addressid: XQW.Guid;
  address2_addresstypecode: site_address2_addresstypecode;
  address2_city: string;
  address2_country: string;
  address2_county: string;
  address2_fax: string;
  address2_latitude: number;
  address2_line1: string;
  address2_line2: string;
  address2_line3: string;
  address2_longitude: number;
  address2_name: string;
  address2_postalcode: string;
  address2_postofficebox: string;
  address2_shippingmethodcode: site_address2_shippingmethodcode;
  address2_stateorprovince: string;
  address2_telephone1: string;
  address2_telephone2: string;
  address2_telephone3: string;
  address2_upszone: string;
  address2_utcoffset: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  emailaddress: string;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  siteid: XQW.Guid;
  timezonecode: number;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Site_Expand {
  Site_AsyncOperations: WebExpand<Site_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Site_AsyncOperations: AsyncOperation_Result[] }>;
  Site_BulkDeleteFailures: WebExpand<Site_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Site_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Site_ProcessSessions: WebExpand<Site_Expand, ProcessSession_Select, ProcessSession_Filter, { Site_ProcessSessions: ProcessSession_Result[] }>;
  Site_SyncErrors: WebExpand<Site_Expand, SyncError_Select, SyncError_Filter, { Site_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<Site_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Site_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Site_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Site_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid_organization: WebExpand<Site_Expand, Organization_Select, Organization_Filter, { organizationid_organization: Organization_Result }>;
  site_ActivityPointers: WebExpand<Site_Expand, ActivityPointer_Select, ActivityPointer_Filter, { site_ActivityPointers: ActivityPointer_Result[] }>;
  site_Appointments: WebExpand<Site_Expand, Appointment_Select, Appointment_Filter, { site_Appointments: Appointment_Result[] }>;
  site_Emails: WebExpand<Site_Expand, Email_Select, Email_Filter, { site_Emails: Email_Result[] }>;
  site_Faxes: WebExpand<Site_Expand, Fax_Select, Fax_Filter, { site_Faxes: Fax_Result[] }>;
  site_Letters: WebExpand<Site_Expand, Letter_Select, Letter_Filter, { site_Letters: Letter_Result[] }>;
  site_MailboxTrackingFolders: WebExpand<Site_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { site_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  site_OpportunityCloses: WebExpand<Site_Expand, OpportunityClose_Select, OpportunityClose_Filter, { site_OpportunityCloses: OpportunityClose_Result[] }>;
  site_OrderCloses: WebExpand<Site_Expand, OrderClose_Select, OrderClose_Filter, { site_OrderCloses: OrderClose_Result[] }>;
  site_PhoneCalls: WebExpand<Site_Expand, PhoneCall_Select, PhoneCall_Filter, { site_PhoneCalls: PhoneCall_Result[] }>;
  site_PrincipalObjectAttributeAccesses: WebExpand<Site_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { site_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  site_QuoteCloses: WebExpand<Site_Expand, QuoteClose_Select, QuoteClose_Filter, { site_QuoteCloses: QuoteClose_Result[] }>;
  site_RecurringAppointmentMasters: WebExpand<Site_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { site_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  site_ServiceAppointments: WebExpand<Site_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { site_ServiceAppointments: ServiceAppointment_Result[] }>;
  site_SocialActivities: WebExpand<Site_Expand, SocialActivity_Select, SocialActivity_Filter, { site_SocialActivities: SocialActivity_Result[] }>;
  site_Tasks: WebExpand<Site_Expand, Task_Select, Task_Filter, { site_Tasks: Task_Result[] }>;
  site_awcnpd_feedbacks: WebExpand<Site_Expand, awcnpd_feedback_Select, awcnpd_feedback_Filter, { site_awcnpd_feedbacks: awcnpd_feedback_Result[] }>;
  site_equipment: WebExpand<Site_Expand, Equipment_Select, Equipment_Filter, { site_equipment: Equipment_Result[] }>;
  site_internal_addresses: WebExpand<Site_Expand, InternalAddress_Select, InternalAddress_Filter, { site_internal_addresses: InternalAddress_Result[] }>;
  site_resources: WebExpand<Site_Expand, Resource_Select, Resource_Filter, { site_resources: Resource_Result[] }>;
  site_service_appointments: WebExpand<Site_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { site_service_appointments: ServiceAppointment_Result[] }>;
  site_system_users: WebExpand<Site_Expand, SystemUser_Select, SystemUser_Filter, { site_system_users: SystemUser_Result[] }>;
  userentityinstancedata_site: WebExpand<Site_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_site: UserEntityInstanceData_Result[] }>;
}
interface Site_FormattedResult {
  address1_addresstypecode_formatted?: string;
  address1_shippingmethodcode_formatted?: string;
  address2_addresstypecode_formatted?: string;
  address2_shippingmethodcode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
}
interface Site_Result extends Site_Base, Site_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface Site_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid_organization: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface Site_RelatedMany {
  Site_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Site_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Site_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Site_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  site_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  site_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  site_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  site_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  site_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  site_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  site_OpportunityCloses: WebMappingRetrieve<OpportunityClose_Select,OpportunityClose_Expand,OpportunityClose_Filter,OpportunityClose_Fixed,OpportunityClose_Result,OpportunityClose_FormattedResult>;
  site_OrderCloses: WebMappingRetrieve<OrderClose_Select,OrderClose_Expand,OrderClose_Filter,OrderClose_Fixed,OrderClose_Result,OrderClose_FormattedResult>;
  site_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  site_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  site_QuoteCloses: WebMappingRetrieve<QuoteClose_Select,QuoteClose_Expand,QuoteClose_Filter,QuoteClose_Fixed,QuoteClose_Result,QuoteClose_FormattedResult>;
  site_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  site_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  site_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  site_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  site_awcnpd_feedbacks: WebMappingRetrieve<awcnpd_feedback_Select,awcnpd_feedback_Expand,awcnpd_feedback_Filter,awcnpd_feedback_Fixed,awcnpd_feedback_Result,awcnpd_feedback_FormattedResult>;
  site_equipment: WebMappingRetrieve<Equipment_Select,Equipment_Expand,Equipment_Filter,Equipment_Fixed,Equipment_Result,Equipment_FormattedResult>;
  site_internal_addresses: WebMappingRetrieve<InternalAddress_Select,InternalAddress_Expand,InternalAddress_Filter,InternalAddress_Fixed,InternalAddress_Result,InternalAddress_FormattedResult>;
  site_resources: WebMappingRetrieve<Resource_Select,Resource_Expand,Resource_Filter,Resource_Fixed,Resource_Result,Resource_FormattedResult>;
  site_service_appointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  site_system_users: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  userentityinstancedata_site: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sites: WebMappingRetrieve<Site_Select,Site_Expand,Site_Filter,Site_Fixed,Site_Result,Site_FormattedResult>;
}
interface WebEntitiesRelated {
  sites: WebMappingRelated<Site_RelatedOne,Site_RelatedMany>;
}
interface WebEntitiesCUDA {
  sites: WebMappingCUDA<Site_Create,Site_Update,Site_Select>;
}
