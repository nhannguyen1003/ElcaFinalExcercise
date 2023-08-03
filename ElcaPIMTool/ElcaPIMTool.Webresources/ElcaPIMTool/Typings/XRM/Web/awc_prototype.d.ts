interface awc_prototype_Base extends WebEntity {
  awc_name?: string | null;
  awc_prototypeid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: awc_prototype_statecode | null;
  statuscode?: awc_prototype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface awc_prototype_Relationships {
  awc_OriginatingIdeaId?: awc_idea_Result | null;
  awc_prototype_ActivityPointers?: ActivityPointer_Result[] | null;
  awc_prototype_Annotations?: Annotation_Result[] | null;
  awc_prototype_Appointments?: Appointment_Result[] | null;
  awc_prototype_AsyncOperations?: AsyncOperation_Result[] | null;
  awc_prototype_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  awc_prototype_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  awc_prototype_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  awc_prototype_Emails?: Email_Result[] | null;
  awc_prototype_Faxes?: Fax_Result[] | null;
  awc_prototype_Letters?: Letter_Result[] | null;
  awc_prototype_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  awc_prototype_PhoneCalls?: PhoneCall_Result[] | null;
  awc_prototype_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  awc_prototype_ProcessSession?: ProcessSession_Result[] | null;
  awc_prototype_QueueItems?: QueueItem_Result[] | null;
  awc_prototype_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  awc_prototype_ServiceAppointments?: ServiceAppointment_Result[] | null;
  awc_prototype_SocialActivities?: SocialActivity_Result[] | null;
  awc_prototype_SyncErrors?: SyncError_Result[] | null;
  awc_prototype_Tasks?: Task_Result[] | null;
  awc_prototype_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  awc_prototype_awcnpd_feedbacks?: awcnpd_feedback_Result[] | null;
  awc_prototype_connections1?: Connection_Result[] | null;
  awc_prototype_connections2?: Connection_Result[] | null;
}
interface awc_prototype extends awc_prototype_Base, awc_prototype_Relationships {
  awc_OriginatingIdeaId_bind$awc_ideas?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface awc_prototype_Create extends awc_prototype {
}
interface awc_prototype_Update extends awc_prototype {
}
interface awc_prototype_Select {
  awc_name: WebAttribute<awc_prototype_Select, { awc_name: string | null }, {  }>;
  awc_originatingideaid_guid: WebAttribute<awc_prototype_Select, { awc_originatingideaid_guid: string | null }, { awc_originatingideaid_formatted?: string }>;
  awc_prototypeid: WebAttribute<awc_prototype_Select, { awc_prototypeid: string | null }, {  }>;
  createdby_guid: WebAttribute<awc_prototype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<awc_prototype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<awc_prototype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<awc_prototype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<awc_prototype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<awc_prototype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<awc_prototype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<awc_prototype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<awc_prototype_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<awc_prototype_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<awc_prototype_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<awc_prototype_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<awc_prototype_Select, { statecode: awc_prototype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<awc_prototype_Select, { statuscode: awc_prototype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<awc_prototype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<awc_prototype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<awc_prototype_Select, { versionnumber: number | null }, {  }>;
}
interface awc_prototype_Filter {
  awc_name: string;
  awc_originatingideaid_guid: XQW.Guid;
  awc_prototypeid: XQW.Guid;
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
  statecode: awc_prototype_statecode;
  statuscode: awc_prototype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface awc_prototype_Expand {
  awc_OriginatingIdeaId: WebExpand<awc_prototype_Expand, awc_idea_Select, awc_idea_Filter, { awc_OriginatingIdeaId: awc_idea_Result }>;
  awc_prototype_ActivityPointers: WebExpand<awc_prototype_Expand, ActivityPointer_Select, ActivityPointer_Filter, { awc_prototype_ActivityPointers: ActivityPointer_Result[] }>;
  awc_prototype_Annotations: WebExpand<awc_prototype_Expand, Annotation_Select, Annotation_Filter, { awc_prototype_Annotations: Annotation_Result[] }>;
  awc_prototype_Appointments: WebExpand<awc_prototype_Expand, Appointment_Select, Appointment_Filter, { awc_prototype_Appointments: Appointment_Result[] }>;
  awc_prototype_AsyncOperations: WebExpand<awc_prototype_Expand, AsyncOperation_Select, AsyncOperation_Filter, { awc_prototype_AsyncOperations: AsyncOperation_Result[] }>;
  awc_prototype_BulkDeleteFailures: WebExpand<awc_prototype_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { awc_prototype_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  awc_prototype_DuplicateBaseRecord: WebExpand<awc_prototype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { awc_prototype_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  awc_prototype_DuplicateMatchingRecord: WebExpand<awc_prototype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { awc_prototype_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  awc_prototype_Emails: WebExpand<awc_prototype_Expand, Email_Select, Email_Filter, { awc_prototype_Emails: Email_Result[] }>;
  awc_prototype_Faxes: WebExpand<awc_prototype_Expand, Fax_Select, Fax_Filter, { awc_prototype_Faxes: Fax_Result[] }>;
  awc_prototype_Letters: WebExpand<awc_prototype_Expand, Letter_Select, Letter_Filter, { awc_prototype_Letters: Letter_Result[] }>;
  awc_prototype_MailboxTrackingFolders: WebExpand<awc_prototype_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { awc_prototype_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  awc_prototype_PhoneCalls: WebExpand<awc_prototype_Expand, PhoneCall_Select, PhoneCall_Filter, { awc_prototype_PhoneCalls: PhoneCall_Result[] }>;
  awc_prototype_PrincipalObjectAttributeAccesses: WebExpand<awc_prototype_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { awc_prototype_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  awc_prototype_ProcessSession: WebExpand<awc_prototype_Expand, ProcessSession_Select, ProcessSession_Filter, { awc_prototype_ProcessSession: ProcessSession_Result[] }>;
  awc_prototype_QueueItems: WebExpand<awc_prototype_Expand, QueueItem_Select, QueueItem_Filter, { awc_prototype_QueueItems: QueueItem_Result[] }>;
  awc_prototype_RecurringAppointmentMasters: WebExpand<awc_prototype_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { awc_prototype_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  awc_prototype_ServiceAppointments: WebExpand<awc_prototype_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { awc_prototype_ServiceAppointments: ServiceAppointment_Result[] }>;
  awc_prototype_SocialActivities: WebExpand<awc_prototype_Expand, SocialActivity_Select, SocialActivity_Filter, { awc_prototype_SocialActivities: SocialActivity_Result[] }>;
  awc_prototype_SyncErrors: WebExpand<awc_prototype_Expand, SyncError_Select, SyncError_Filter, { awc_prototype_SyncErrors: SyncError_Result[] }>;
  awc_prototype_Tasks: WebExpand<awc_prototype_Expand, Task_Select, Task_Filter, { awc_prototype_Tasks: Task_Result[] }>;
  awc_prototype_UserEntityInstanceDatas: WebExpand<awc_prototype_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { awc_prototype_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  awc_prototype_awcnpd_feedbacks: WebExpand<awc_prototype_Expand, awcnpd_feedback_Select, awcnpd_feedback_Filter, { awc_prototype_awcnpd_feedbacks: awcnpd_feedback_Result[] }>;
  awc_prototype_connections1: WebExpand<awc_prototype_Expand, Connection_Select, Connection_Filter, { awc_prototype_connections1: Connection_Result[] }>;
  awc_prototype_connections2: WebExpand<awc_prototype_Expand, Connection_Select, Connection_Filter, { awc_prototype_connections2: Connection_Result[] }>;
  createdby: WebExpand<awc_prototype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<awc_prototype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<awc_prototype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<awc_prototype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<awc_prototype_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<awc_prototype_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<awc_prototype_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<awc_prototype_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface awc_prototype_FormattedResult {
  awc_originatingideaid_formatted?: string;
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
interface awc_prototype_Result extends awc_prototype_Base, awc_prototype_Relationships {
  "@odata.etag": string;
  awc_originatingideaid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface awc_prototype_RelatedOne {
  awc_OriginatingIdeaId: WebMappingRetrieve<awc_idea_Select,awc_idea_Expand,awc_idea_Filter,awc_idea_Fixed,awc_idea_Result,awc_idea_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface awc_prototype_RelatedMany {
  awc_prototype_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  awc_prototype_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  awc_prototype_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  awc_prototype_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  awc_prototype_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  awc_prototype_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  awc_prototype_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  awc_prototype_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  awc_prototype_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  awc_prototype_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  awc_prototype_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  awc_prototype_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  awc_prototype_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  awc_prototype_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  awc_prototype_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  awc_prototype_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  awc_prototype_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  awc_prototype_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  awc_prototype_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  awc_prototype_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  awc_prototype_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  awc_prototype_awcnpd_feedbacks: WebMappingRetrieve<awcnpd_feedback_Select,awcnpd_feedback_Expand,awcnpd_feedback_Filter,awcnpd_feedback_Fixed,awcnpd_feedback_Result,awcnpd_feedback_FormattedResult>;
  awc_prototype_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  awc_prototype_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  awc_prototypes: WebMappingRetrieve<awc_prototype_Select,awc_prototype_Expand,awc_prototype_Filter,awc_prototype_Fixed,awc_prototype_Result,awc_prototype_FormattedResult>;
}
interface WebEntitiesRelated {
  awc_prototypes: WebMappingRelated<awc_prototype_RelatedOne,awc_prototype_RelatedMany>;
}
interface WebEntitiesCUDA {
  awc_prototypes: WebMappingCUDA<awc_prototype_Create,awc_prototype_Update,awc_prototype_Select>;
}
