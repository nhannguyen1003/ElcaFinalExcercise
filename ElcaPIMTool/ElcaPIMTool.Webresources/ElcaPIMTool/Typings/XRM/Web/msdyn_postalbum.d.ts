interface msdyn_PostAlbum_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_postalbumid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_postalbum_statecode | null;
  statuscode?: msdyn_postalbum_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_PostAlbum_Relationships {
  msdyn_postalbum_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_postalbum_Annotations?: Annotation_Result[] | null;
  msdyn_postalbum_Appointments?: Appointment_Result[] | null;
  msdyn_postalbum_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_postalbum_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_postalbum_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_postalbum_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_postalbum_Emails?: Email_Result[] | null;
  msdyn_postalbum_Faxes?: Fax_Result[] | null;
  msdyn_postalbum_Letters?: Letter_Result[] | null;
  msdyn_postalbum_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_postalbum_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_postalbum_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_postalbum_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_postalbum_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_postalbum_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_postalbum_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_postalbum_SyncErrors?: SyncError_Result[] | null;
  msdyn_postalbum_Tasks?: Task_Result[] | null;
  msdyn_postalbum_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_postalbum_awcnpd_feedbacks?: awcnpd_feedback_Result[] | null;
  msdyn_postalbum_connections1?: Connection_Result[] | null;
  msdyn_postalbum_connections2?: Connection_Result[] | null;
}
interface msdyn_PostAlbum extends msdyn_PostAlbum_Base, msdyn_PostAlbum_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_PostAlbum_Create extends msdyn_PostAlbum {
}
interface msdyn_PostAlbum_Update extends msdyn_PostAlbum {
}
interface msdyn_PostAlbum_Select {
  createdby_guid: WebAttribute<msdyn_PostAlbum_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_PostAlbum_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_PostAlbum_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_PostAlbum_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_PostAlbum_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_PostAlbum_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_PostAlbum_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_PostAlbum_Select, { msdyn_name: string | null }, {  }>;
  msdyn_postalbumid: WebAttribute<msdyn_PostAlbum_Select, { msdyn_postalbumid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_PostAlbum_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_PostAlbum_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_PostAlbum_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_PostAlbum_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_PostAlbum_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_PostAlbum_Select, { statecode: msdyn_postalbum_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_PostAlbum_Select, { statuscode: msdyn_postalbum_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_PostAlbum_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_PostAlbum_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_PostAlbum_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_PostAlbum_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_postalbumid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_postalbum_statecode;
  statuscode: msdyn_postalbum_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_PostAlbum_Expand {
  createdby: WebExpand<msdyn_PostAlbum_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_PostAlbum_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_PostAlbum_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_PostAlbum_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_postalbum_ActivityPointers: WebExpand<msdyn_PostAlbum_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_postalbum_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_postalbum_Annotations: WebExpand<msdyn_PostAlbum_Expand, Annotation_Select, Annotation_Filter, { msdyn_postalbum_Annotations: Annotation_Result[] }>;
  msdyn_postalbum_Appointments: WebExpand<msdyn_PostAlbum_Expand, Appointment_Select, Appointment_Filter, { msdyn_postalbum_Appointments: Appointment_Result[] }>;
  msdyn_postalbum_AsyncOperations: WebExpand<msdyn_PostAlbum_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_postalbum_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_postalbum_BulkDeleteFailures: WebExpand<msdyn_PostAlbum_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_postalbum_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_postalbum_DuplicateBaseRecord: WebExpand<msdyn_PostAlbum_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_postalbum_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_postalbum_DuplicateMatchingRecord: WebExpand<msdyn_PostAlbum_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_postalbum_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_postalbum_Emails: WebExpand<msdyn_PostAlbum_Expand, Email_Select, Email_Filter, { msdyn_postalbum_Emails: Email_Result[] }>;
  msdyn_postalbum_Faxes: WebExpand<msdyn_PostAlbum_Expand, Fax_Select, Fax_Filter, { msdyn_postalbum_Faxes: Fax_Result[] }>;
  msdyn_postalbum_Letters: WebExpand<msdyn_PostAlbum_Expand, Letter_Select, Letter_Filter, { msdyn_postalbum_Letters: Letter_Result[] }>;
  msdyn_postalbum_MailboxTrackingFolders: WebExpand<msdyn_PostAlbum_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_postalbum_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_postalbum_PhoneCalls: WebExpand<msdyn_PostAlbum_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_postalbum_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_postalbum_PrincipalObjectAttributeAccesses: WebExpand<msdyn_PostAlbum_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_postalbum_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_postalbum_ProcessSession: WebExpand<msdyn_PostAlbum_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_postalbum_ProcessSession: ProcessSession_Result[] }>;
  msdyn_postalbum_RecurringAppointmentMasters: WebExpand<msdyn_PostAlbum_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_postalbum_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_postalbum_ServiceAppointments: WebExpand<msdyn_PostAlbum_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_postalbum_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_postalbum_SocialActivities: WebExpand<msdyn_PostAlbum_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_postalbum_SocialActivities: SocialActivity_Result[] }>;
  msdyn_postalbum_SyncErrors: WebExpand<msdyn_PostAlbum_Expand, SyncError_Select, SyncError_Filter, { msdyn_postalbum_SyncErrors: SyncError_Result[] }>;
  msdyn_postalbum_Tasks: WebExpand<msdyn_PostAlbum_Expand, Task_Select, Task_Filter, { msdyn_postalbum_Tasks: Task_Result[] }>;
  msdyn_postalbum_UserEntityInstanceDatas: WebExpand<msdyn_PostAlbum_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_postalbum_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_postalbum_awcnpd_feedbacks: WebExpand<msdyn_PostAlbum_Expand, awcnpd_feedback_Select, awcnpd_feedback_Filter, { msdyn_postalbum_awcnpd_feedbacks: awcnpd_feedback_Result[] }>;
  msdyn_postalbum_connections1: WebExpand<msdyn_PostAlbum_Expand, Connection_Select, Connection_Filter, { msdyn_postalbum_connections1: Connection_Result[] }>;
  msdyn_postalbum_connections2: WebExpand<msdyn_PostAlbum_Expand, Connection_Select, Connection_Filter, { msdyn_postalbum_connections2: Connection_Result[] }>;
  ownerid: WebExpand<msdyn_PostAlbum_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_PostAlbum_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_PostAlbum_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_PostAlbum_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_PostAlbum_FormattedResult {
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
interface msdyn_PostAlbum_Result extends msdyn_PostAlbum_Base, msdyn_PostAlbum_Relationships {
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
interface msdyn_PostAlbum_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_PostAlbum_RelatedMany {
  msdyn_postalbum_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_postalbum_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_postalbum_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_postalbum_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_postalbum_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_postalbum_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_postalbum_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_postalbum_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_postalbum_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_postalbum_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_postalbum_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_postalbum_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_postalbum_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_postalbum_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_postalbum_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_postalbum_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_postalbum_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_postalbum_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_postalbum_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_postalbum_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_postalbum_awcnpd_feedbacks: WebMappingRetrieve<awcnpd_feedback_Select,awcnpd_feedback_Expand,awcnpd_feedback_Filter,awcnpd_feedback_Fixed,awcnpd_feedback_Result,awcnpd_feedback_FormattedResult>;
  msdyn_postalbum_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_postalbum_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_postalbums: WebMappingRetrieve<msdyn_PostAlbum_Select,msdyn_PostAlbum_Expand,msdyn_PostAlbum_Filter,msdyn_PostAlbum_Fixed,msdyn_PostAlbum_Result,msdyn_PostAlbum_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_postalbums: WebMappingRelated<msdyn_PostAlbum_RelatedOne,msdyn_PostAlbum_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_postalbums: WebMappingCUDA<msdyn_PostAlbum_Create,msdyn_PostAlbum_Update,msdyn_PostAlbum_Select>;
}
