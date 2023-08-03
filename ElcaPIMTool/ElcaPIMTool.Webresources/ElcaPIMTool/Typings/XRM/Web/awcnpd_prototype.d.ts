interface awcnpd_prototype_Base extends WebEntity {
  awcnpd_name?: string | null;
  awcnpd_prototypeid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: awcnpd_prototype_statecode | null;
  statuscode?: awcnpd_prototype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface awcnpd_prototype_Relationships {
  awcnpd_OriginatingIdeaId?: awcnpd_idea_Result | null;
  awcnpd_prototype_ActivityPointers?: ActivityPointer_Result[] | null;
  awcnpd_prototype_Annotations?: Annotation_Result[] | null;
  awcnpd_prototype_Appointments?: Appointment_Result[] | null;
  awcnpd_prototype_AsyncOperations?: AsyncOperation_Result[] | null;
  awcnpd_prototype_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  awcnpd_prototype_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  awcnpd_prototype_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  awcnpd_prototype_Emails?: Email_Result[] | null;
  awcnpd_prototype_Faxes?: Fax_Result[] | null;
  awcnpd_prototype_Feedback?: Feedback_Result[] | null;
  awcnpd_prototype_Letters?: Letter_Result[] | null;
  awcnpd_prototype_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  awcnpd_prototype_PhoneCalls?: PhoneCall_Result[] | null;
  awcnpd_prototype_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  awcnpd_prototype_ProcessSession?: ProcessSession_Result[] | null;
  awcnpd_prototype_QueueItems?: QueueItem_Result[] | null;
  awcnpd_prototype_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  awcnpd_prototype_ServiceAppointments?: ServiceAppointment_Result[] | null;
  awcnpd_prototype_SocialActivities?: SocialActivity_Result[] | null;
  awcnpd_prototype_SyncErrors?: SyncError_Result[] | null;
  awcnpd_prototype_Tasks?: Task_Result[] | null;
  awcnpd_prototype_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  awcnpd_prototype_awcnpd_feedbacks?: awcnpd_feedback_Result[] | null;
  awcnpd_prototype_connections1?: Connection_Result[] | null;
  awcnpd_prototype_connections2?: Connection_Result[] | null;
}
interface awcnpd_prototype extends awcnpd_prototype_Base, awcnpd_prototype_Relationships {
  awcnpd_OriginatingIdeaId_bind$awcnpd_ideas?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
}
interface awcnpd_prototype_Create extends awcnpd_prototype {
}
interface awcnpd_prototype_Update extends awcnpd_prototype {
}
interface awcnpd_prototype_Select {
  awcnpd_name: WebAttribute<awcnpd_prototype_Select, { awcnpd_name: string | null }, {  }>;
  awcnpd_originatingideaid_guid: WebAttribute<awcnpd_prototype_Select, { awcnpd_originatingideaid_guid: string | null }, { awcnpd_originatingideaid_formatted?: string }>;
  awcnpd_prototypeid: WebAttribute<awcnpd_prototype_Select, { awcnpd_prototypeid: string | null }, {  }>;
  createdby_guid: WebAttribute<awcnpd_prototype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<awcnpd_prototype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<awcnpd_prototype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<awcnpd_prototype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<awcnpd_prototype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<awcnpd_prototype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<awcnpd_prototype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<awcnpd_prototype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<awcnpd_prototype_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<awcnpd_prototype_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<awcnpd_prototype_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<awcnpd_prototype_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<awcnpd_prototype_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<awcnpd_prototype_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<awcnpd_prototype_Select, { statecode: awcnpd_prototype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<awcnpd_prototype_Select, { statuscode: awcnpd_prototype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<awcnpd_prototype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<awcnpd_prototype_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<awcnpd_prototype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<awcnpd_prototype_Select, { versionnumber: number | null }, {  }>;
}
interface awcnpd_prototype_Filter {
  awcnpd_name: string;
  awcnpd_originatingideaid_guid: XQW.Guid;
  awcnpd_prototypeid: XQW.Guid;
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
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: awcnpd_prototype_statecode;
  statuscode: awcnpd_prototype_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface awcnpd_prototype_Expand {
  awcnpd_OriginatingIdeaId: WebExpand<awcnpd_prototype_Expand, awcnpd_idea_Select, awcnpd_idea_Filter, { awcnpd_OriginatingIdeaId: awcnpd_idea_Result }>;
  awcnpd_prototype_ActivityPointers: WebExpand<awcnpd_prototype_Expand, ActivityPointer_Select, ActivityPointer_Filter, { awcnpd_prototype_ActivityPointers: ActivityPointer_Result[] }>;
  awcnpd_prototype_Annotations: WebExpand<awcnpd_prototype_Expand, Annotation_Select, Annotation_Filter, { awcnpd_prototype_Annotations: Annotation_Result[] }>;
  awcnpd_prototype_Appointments: WebExpand<awcnpd_prototype_Expand, Appointment_Select, Appointment_Filter, { awcnpd_prototype_Appointments: Appointment_Result[] }>;
  awcnpd_prototype_AsyncOperations: WebExpand<awcnpd_prototype_Expand, AsyncOperation_Select, AsyncOperation_Filter, { awcnpd_prototype_AsyncOperations: AsyncOperation_Result[] }>;
  awcnpd_prototype_BulkDeleteFailures: WebExpand<awcnpd_prototype_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { awcnpd_prototype_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  awcnpd_prototype_DuplicateBaseRecord: WebExpand<awcnpd_prototype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { awcnpd_prototype_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  awcnpd_prototype_DuplicateMatchingRecord: WebExpand<awcnpd_prototype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { awcnpd_prototype_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  awcnpd_prototype_Emails: WebExpand<awcnpd_prototype_Expand, Email_Select, Email_Filter, { awcnpd_prototype_Emails: Email_Result[] }>;
  awcnpd_prototype_Faxes: WebExpand<awcnpd_prototype_Expand, Fax_Select, Fax_Filter, { awcnpd_prototype_Faxes: Fax_Result[] }>;
  awcnpd_prototype_Feedback: WebExpand<awcnpd_prototype_Expand, Feedback_Select, Feedback_Filter, { awcnpd_prototype_Feedback: Feedback_Result[] }>;
  awcnpd_prototype_Letters: WebExpand<awcnpd_prototype_Expand, Letter_Select, Letter_Filter, { awcnpd_prototype_Letters: Letter_Result[] }>;
  awcnpd_prototype_MailboxTrackingFolders: WebExpand<awcnpd_prototype_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { awcnpd_prototype_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  awcnpd_prototype_PhoneCalls: WebExpand<awcnpd_prototype_Expand, PhoneCall_Select, PhoneCall_Filter, { awcnpd_prototype_PhoneCalls: PhoneCall_Result[] }>;
  awcnpd_prototype_PrincipalObjectAttributeAccesses: WebExpand<awcnpd_prototype_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { awcnpd_prototype_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  awcnpd_prototype_ProcessSession: WebExpand<awcnpd_prototype_Expand, ProcessSession_Select, ProcessSession_Filter, { awcnpd_prototype_ProcessSession: ProcessSession_Result[] }>;
  awcnpd_prototype_QueueItems: WebExpand<awcnpd_prototype_Expand, QueueItem_Select, QueueItem_Filter, { awcnpd_prototype_QueueItems: QueueItem_Result[] }>;
  awcnpd_prototype_RecurringAppointmentMasters: WebExpand<awcnpd_prototype_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { awcnpd_prototype_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  awcnpd_prototype_ServiceAppointments: WebExpand<awcnpd_prototype_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { awcnpd_prototype_ServiceAppointments: ServiceAppointment_Result[] }>;
  awcnpd_prototype_SocialActivities: WebExpand<awcnpd_prototype_Expand, SocialActivity_Select, SocialActivity_Filter, { awcnpd_prototype_SocialActivities: SocialActivity_Result[] }>;
  awcnpd_prototype_SyncErrors: WebExpand<awcnpd_prototype_Expand, SyncError_Select, SyncError_Filter, { awcnpd_prototype_SyncErrors: SyncError_Result[] }>;
  awcnpd_prototype_Tasks: WebExpand<awcnpd_prototype_Expand, Task_Select, Task_Filter, { awcnpd_prototype_Tasks: Task_Result[] }>;
  awcnpd_prototype_UserEntityInstanceDatas: WebExpand<awcnpd_prototype_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { awcnpd_prototype_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  awcnpd_prototype_awcnpd_feedbacks: WebExpand<awcnpd_prototype_Expand, awcnpd_feedback_Select, awcnpd_feedback_Filter, { awcnpd_prototype_awcnpd_feedbacks: awcnpd_feedback_Result[] }>;
  awcnpd_prototype_connections1: WebExpand<awcnpd_prototype_Expand, Connection_Select, Connection_Filter, { awcnpd_prototype_connections1: Connection_Result[] }>;
  awcnpd_prototype_connections2: WebExpand<awcnpd_prototype_Expand, Connection_Select, Connection_Filter, { awcnpd_prototype_connections2: Connection_Result[] }>;
  createdby: WebExpand<awcnpd_prototype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<awcnpd_prototype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<awcnpd_prototype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<awcnpd_prototype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<awcnpd_prototype_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<awcnpd_prototype_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<awcnpd_prototype_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<awcnpd_prototype_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<awcnpd_prototype_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
}
interface awcnpd_prototype_FormattedResult {
  awcnpd_originatingideaid_formatted?: string;
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
interface awcnpd_prototype_Result extends awcnpd_prototype_Base, awcnpd_prototype_Relationships {
  "@odata.etag": string;
  awcnpd_originatingideaid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface awcnpd_prototype_RelatedOne {
  awcnpd_OriginatingIdeaId: WebMappingRetrieve<awcnpd_idea_Select,awcnpd_idea_Expand,awcnpd_idea_Filter,awcnpd_idea_Fixed,awcnpd_idea_Result,awcnpd_idea_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
}
interface awcnpd_prototype_RelatedMany {
  awcnpd_prototype_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  awcnpd_prototype_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  awcnpd_prototype_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  awcnpd_prototype_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  awcnpd_prototype_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  awcnpd_prototype_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  awcnpd_prototype_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  awcnpd_prototype_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  awcnpd_prototype_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  awcnpd_prototype_Feedback: WebMappingRetrieve<Feedback_Select,Feedback_Expand,Feedback_Filter,Feedback_Fixed,Feedback_Result,Feedback_FormattedResult>;
  awcnpd_prototype_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  awcnpd_prototype_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  awcnpd_prototype_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  awcnpd_prototype_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  awcnpd_prototype_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  awcnpd_prototype_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  awcnpd_prototype_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  awcnpd_prototype_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  awcnpd_prototype_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  awcnpd_prototype_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  awcnpd_prototype_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  awcnpd_prototype_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  awcnpd_prototype_awcnpd_feedbacks: WebMappingRetrieve<awcnpd_feedback_Select,awcnpd_feedback_Expand,awcnpd_feedback_Filter,awcnpd_feedback_Fixed,awcnpd_feedback_Result,awcnpd_feedback_FormattedResult>;
  awcnpd_prototype_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  awcnpd_prototype_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  awcnpd_prototypes: WebMappingRetrieve<awcnpd_prototype_Select,awcnpd_prototype_Expand,awcnpd_prototype_Filter,awcnpd_prototype_Fixed,awcnpd_prototype_Result,awcnpd_prototype_FormattedResult>;
}
interface WebEntitiesRelated {
  awcnpd_prototypes: WebMappingRelated<awcnpd_prototype_RelatedOne,awcnpd_prototype_RelatedMany>;
}
interface WebEntitiesCUDA {
  awcnpd_prototypes: WebMappingCUDA<awcnpd_prototype_Create,awcnpd_prototype_Update,awcnpd_prototype_Select>;
}
