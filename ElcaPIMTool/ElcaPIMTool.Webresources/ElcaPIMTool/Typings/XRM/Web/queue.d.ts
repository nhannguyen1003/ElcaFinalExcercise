interface Queue_Base extends WebEntity {
  allowemailcredentials?: boolean | null;
  createdon?: Date | null;
  description?: string | null;
  emailaddress?: string | null;
  emailpassword?: string | null;
  emailrouteraccessapproval?: queue_emailrouteraccessapproval | null;
  emailusername?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  ignoreunsolicitedemail?: boolean | null;
  importsequencenumber?: number | null;
  incomingemaildeliverymethod?: queue_incomingemaildeliverymethod | null;
  incomingemailfilteringmethod?: queue_incomingemailfilteringmethod | null;
  isemailaddressapprovedbyo365admin?: boolean | null;
  isfaxqueue?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  numberofitems?: number | null;
  numberofmembers?: number | null;
  outgoingemaildeliverymethod?: queue_outgoingemaildeliverymethod | null;
  overriddencreatedon?: Date | null;
  queueid?: string | null;
  queuetypecode?: queue_queuetypecode | null;
  queueviewtype?: queue_queueviewtype | null;
  statecode?: queue_statecode | null;
  statuscode?: queue_statuscode | null;
  versionnumber?: number | null;
}
interface Queue_Relationships {
  Queue_AsyncOperations?: AsyncOperation_Result[] | null;
  Queue_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Queue_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  Queue_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  Queue_Email_EmailSender?: Email_Result[] | null;
  Queue_ProcessSessions?: ProcessSession_Result[] | null;
  Queue_SyncErrors?: SyncError_Result[] | null;
  convertrule_queue?: ConvertRule_Result[] | null;
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  mailbox_regarding_queue?: Mailbox_Result[] | null;
  queue_PostFollows?: PostFollow_Result[] | null;
  queue_PostRegardings?: PostRegarding_Result[] | null;
  queue_PostRoles?: PostRole_Result[] | null;
  queue_activity_parties?: ActivityParty_Result[] | null;
  queue_convertruleitem?: ConvertRuleItem_Result[] | null;
  queue_entries?: QueueItem_Result[] | null;
  queue_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  queue_routingruleitem?: RoutingRuleItem_Result[] | null;
  queue_system_user?: SystemUser_Result[] | null;
  queue_team?: Team_Result[] | null;
  queueid_queueitemcount?: QueueItemCount_Result | null;
  queueid_queuemembercount?: QueueMemberCount_Result | null;
  queuemembership_association?: SystemUser_Result[] | null;
  userentityinstancedata_queue?: UserEntityInstanceData_Result[] | null;
}
interface Queue extends Queue_Base, Queue_Relationships {
  businessunitid_bind$businessunits?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  primaryuserid_bind$systemusers?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Queue_Create extends Queue {
  queueid_queueitemcount_bind$queueitemcounts?: string | null;
  queueid_queuemembercount_bind$queuemembercounts?: string | null;
}
interface Queue_Update extends Queue {
}
interface Queue_Select {
  allowemailcredentials: WebAttribute<Queue_Select, { allowemailcredentials: boolean | null }, {  }>;
  businessunitid_guid: WebAttribute<Queue_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  createdby_guid: WebAttribute<Queue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Queue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Queue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  defaultmailbox_guid: WebAttribute<Queue_Select, { defaultmailbox_guid: string | null }, { defaultmailbox_formatted?: string }>;
  description: WebAttribute<Queue_Select, { description: string | null }, {  }>;
  emailaddress: WebAttribute<Queue_Select, { emailaddress: string | null }, {  }>;
  emailpassword: WebAttribute<Queue_Select, { emailpassword: string | null }, {  }>;
  emailrouteraccessapproval: WebAttribute<Queue_Select, { emailrouteraccessapproval: queue_emailrouteraccessapproval | null }, { emailrouteraccessapproval_formatted?: string }>;
  emailusername: WebAttribute<Queue_Select, { emailusername: string | null }, {  }>;
  entityimageid: WebAttribute<Queue_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Queue_Select, { exchangerate: number | null }, {  }>;
  ignoreunsolicitedemail: WebAttribute<Queue_Select, { ignoreunsolicitedemail: boolean | null }, {  }>;
  importsequencenumber: WebAttribute<Queue_Select, { importsequencenumber: number | null }, {  }>;
  incomingemaildeliverymethod: WebAttribute<Queue_Select, { incomingemaildeliverymethod: queue_incomingemaildeliverymethod | null }, { incomingemaildeliverymethod_formatted?: string }>;
  incomingemailfilteringmethod: WebAttribute<Queue_Select, { incomingemailfilteringmethod: queue_incomingemailfilteringmethod | null }, { incomingemailfilteringmethod_formatted?: string }>;
  isemailaddressapprovedbyo365admin: WebAttribute<Queue_Select, { isemailaddressapprovedbyo365admin: boolean | null }, {  }>;
  isfaxqueue: WebAttribute<Queue_Select, { isfaxqueue: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Queue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Queue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Queue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Queue_Select, { name: string | null }, {  }>;
  numberofitems: WebAttribute<Queue_Select, { numberofitems: number | null }, {  }>;
  numberofmembers: WebAttribute<Queue_Select, { numberofmembers: number | null }, {  }>;
  organizationid_guid: WebAttribute<Queue_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  outgoingemaildeliverymethod: WebAttribute<Queue_Select, { outgoingemaildeliverymethod: queue_outgoingemaildeliverymethod | null }, { outgoingemaildeliverymethod_formatted?: string }>;
  overriddencreatedon: WebAttribute<Queue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Queue_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Queue_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Queue_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Queue_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  primaryuserid_guid: WebAttribute<Queue_Select, { primaryuserid_guid: string | null }, { primaryuserid_formatted?: string }>;
  queueid: WebAttribute<Queue_Select, { queueid: string | null }, {  }>;
  queuetypecode: WebAttribute<Queue_Select, { queuetypecode: queue_queuetypecode | null }, { queuetypecode_formatted?: string }>;
  queueviewtype: WebAttribute<Queue_Select, { queueviewtype: queue_queueviewtype | null }, { queueviewtype_formatted?: string }>;
  statecode: WebAttribute<Queue_Select, { statecode: queue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Queue_Select, { statuscode: queue_statuscode | null }, { statuscode_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<Queue_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<Queue_Select, { versionnumber: number | null }, {  }>;
}
interface Queue_Filter {
  allowemailcredentials: boolean;
  businessunitid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  defaultmailbox_guid: XQW.Guid;
  description: string;
  emailaddress: string;
  emailpassword: string;
  emailrouteraccessapproval: queue_emailrouteraccessapproval;
  emailusername: string;
  entityimageid: XQW.Guid;
  exchangerate: any;
  ignoreunsolicitedemail: boolean;
  importsequencenumber: number;
  incomingemaildeliverymethod: queue_incomingemaildeliverymethod;
  incomingemailfilteringmethod: queue_incomingemailfilteringmethod;
  isemailaddressapprovedbyo365admin: boolean;
  isfaxqueue: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  numberofitems: number;
  numberofmembers: number;
  organizationid_guid: XQW.Guid;
  outgoingemaildeliverymethod: queue_outgoingemaildeliverymethod;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  primaryuserid_guid: XQW.Guid;
  queueid: XQW.Guid;
  queuetypecode: queue_queuetypecode;
  queueviewtype: queue_queueviewtype;
  statecode: queue_statecode;
  statuscode: queue_statuscode;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
}
interface Queue_Expand {
  Queue_AsyncOperations: WebExpand<Queue_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Queue_AsyncOperations: AsyncOperation_Result[] }>;
  Queue_BulkDeleteFailures: WebExpand<Queue_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Queue_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Queue_DuplicateBaseRecord: WebExpand<Queue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Queue_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  Queue_DuplicateMatchingRecord: WebExpand<Queue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Queue_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  Queue_Email_EmailSender: WebExpand<Queue_Expand, Email_Select, Email_Filter, { Queue_Email_EmailSender: Email_Result[] }>;
  Queue_ProcessSessions: WebExpand<Queue_Expand, ProcessSession_Select, ProcessSession_Filter, { Queue_ProcessSessions: ProcessSession_Result[] }>;
  Queue_SyncErrors: WebExpand<Queue_Expand, SyncError_Select, SyncError_Filter, { Queue_SyncErrors: SyncError_Result[] }>;
  businessunitid: WebExpand<Queue_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid: BusinessUnit_Result }>;
  convertrule_queue: WebExpand<Queue_Expand, ConvertRule_Select, ConvertRule_Filter, { convertrule_queue: ConvertRule_Result[] }>;
  createdby: WebExpand<Queue_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Queue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  defaultmailbox: WebExpand<Queue_Expand, Mailbox_Select, Mailbox_Filter, { defaultmailbox: Mailbox_Result }>;
  entityimageid_imagedescriptor: WebExpand<Queue_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  mailbox_regarding_queue: WebExpand<Queue_Expand, Mailbox_Select, Mailbox_Filter, { mailbox_regarding_queue: Mailbox_Result[] }>;
  modifiedby: WebExpand<Queue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Queue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<Queue_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  ownerid: WebExpand<Queue_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Queue_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  primaryuserid: WebExpand<Queue_Expand, SystemUser_Select, SystemUser_Filter, { primaryuserid: SystemUser_Result }>;
  queue_PostFollows: WebExpand<Queue_Expand, PostFollow_Select, PostFollow_Filter, { queue_PostFollows: PostFollow_Result[] }>;
  queue_PostRegardings: WebExpand<Queue_Expand, PostRegarding_Select, PostRegarding_Filter, { queue_PostRegardings: PostRegarding_Result[] }>;
  queue_PostRoles: WebExpand<Queue_Expand, PostRole_Select, PostRole_Filter, { queue_PostRoles: PostRole_Result[] }>;
  queue_activity_parties: WebExpand<Queue_Expand, ActivityParty_Select, ActivityParty_Filter, { queue_activity_parties: ActivityParty_Result[] }>;
  queue_convertruleitem: WebExpand<Queue_Expand, ConvertRuleItem_Select, ConvertRuleItem_Filter, { queue_convertruleitem: ConvertRuleItem_Result[] }>;
  queue_entries: WebExpand<Queue_Expand, QueueItem_Select, QueueItem_Filter, { queue_entries: QueueItem_Result[] }>;
  queue_principalobjectattributeaccess: WebExpand<Queue_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { queue_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  queue_routingruleitem: WebExpand<Queue_Expand, RoutingRuleItem_Select, RoutingRuleItem_Filter, { queue_routingruleitem: RoutingRuleItem_Result[] }>;
  queue_system_user: WebExpand<Queue_Expand, SystemUser_Select, SystemUser_Filter, { queue_system_user: SystemUser_Result[] }>;
  queue_team: WebExpand<Queue_Expand, Team_Select, Team_Filter, { queue_team: Team_Result[] }>;
  queueid_queueitemcount: WebExpand<Queue_Expand, QueueItemCount_Select, QueueItemCount_Filter, { queueid_queueitemcount: QueueItemCount_Result }>;
  queueid_queuemembercount: WebExpand<Queue_Expand, QueueMemberCount_Select, QueueMemberCount_Filter, { queueid_queuemembercount: QueueMemberCount_Result }>;
  queuemembership_association: WebExpand<Queue_Expand, SystemUser_Select, SystemUser_Filter, { queuemembership_association: SystemUser_Result[] }>;
  transactioncurrencyid: WebExpand<Queue_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_queue: WebExpand<Queue_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_queue: UserEntityInstanceData_Result[] }>;
}
interface Queue_FormattedResult {
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  defaultmailbox_formatted?: string;
  emailrouteraccessapproval_formatted?: string;
  incomingemaildeliverymethod_formatted?: string;
  incomingemailfilteringmethod_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  outgoingemaildeliverymethod_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  primaryuserid_formatted?: string;
  queuetypecode_formatted?: string;
  queueviewtype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Queue_Result extends Queue_Base, Queue_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  defaultmailbox_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  primaryuserid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Queue_RelatedOne {
  businessunitid: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  defaultmailbox: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  primaryuserid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  queueid_queueitemcount: WebMappingRetrieve<QueueItemCount_Select,QueueItemCount_Expand,QueueItemCount_Filter,QueueItemCount_Fixed,QueueItemCount_Result,QueueItemCount_FormattedResult>;
  queueid_queuemembercount: WebMappingRetrieve<QueueMemberCount_Select,QueueMemberCount_Expand,QueueMemberCount_Filter,QueueMemberCount_Fixed,QueueMemberCount_Result,QueueMemberCount_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Queue_RelatedMany {
  Queue_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Queue_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Queue_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Queue_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Queue_Email_EmailSender: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  Queue_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Queue_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  convertrule_queue: WebMappingRetrieve<ConvertRule_Select,ConvertRule_Expand,ConvertRule_Filter,ConvertRule_Fixed,ConvertRule_Result,ConvertRule_FormattedResult>;
  mailbox_regarding_queue: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  queue_PostFollows: WebMappingRetrieve<PostFollow_Select,PostFollow_Expand,PostFollow_Filter,PostFollow_Fixed,PostFollow_Result,PostFollow_FormattedResult>;
  queue_PostRegardings: WebMappingRetrieve<PostRegarding_Select,PostRegarding_Expand,PostRegarding_Filter,PostRegarding_Fixed,PostRegarding_Result,PostRegarding_FormattedResult>;
  queue_PostRoles: WebMappingRetrieve<PostRole_Select,PostRole_Expand,PostRole_Filter,PostRole_Fixed,PostRole_Result,PostRole_FormattedResult>;
  queue_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  queue_convertruleitem: WebMappingRetrieve<ConvertRuleItem_Select,ConvertRuleItem_Expand,ConvertRuleItem_Filter,ConvertRuleItem_Fixed,ConvertRuleItem_Result,ConvertRuleItem_FormattedResult>;
  queue_entries: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  queue_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  queue_routingruleitem: WebMappingRetrieve<RoutingRuleItem_Select,RoutingRuleItem_Expand,RoutingRuleItem_Filter,RoutingRuleItem_Fixed,RoutingRuleItem_Result,RoutingRuleItem_FormattedResult>;
  queue_system_user: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  queue_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  queuemembership_association: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  userentityinstancedata_queue: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  queues: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
}
interface WebEntitiesRelated {
  queues: WebMappingRelated<Queue_RelatedOne,Queue_RelatedMany>;
}
interface WebEntitiesCUDA {
  queues: WebMappingCUDA<Queue_Create,Queue_Update,Queue_Select>;
}
