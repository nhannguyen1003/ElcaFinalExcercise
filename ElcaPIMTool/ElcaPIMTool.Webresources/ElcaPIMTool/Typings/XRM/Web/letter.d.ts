interface Letter_Base extends WebEntity {
  activityid?: string | null;
  activitytypecode?: string | null;
  actualdurationminutes?: number | null;
  actualend?: Date | null;
  actualstart?: Date | null;
  address?: string | null;
  category?: string | null;
  createdon?: Date | null;
  description?: string | null;
  directioncode?: boolean | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  isbilled?: boolean | null;
  isregularactivity?: boolean | null;
  isworkflowcreated?: boolean | null;
  lastonholdtime?: Date | null;
  modifiedon?: Date | null;
  onholdtime?: number | null;
  overriddencreatedon?: Date | null;
  prioritycode?: letter_prioritycode | null;
  processid?: string | null;
  scheduleddurationminutes?: number | null;
  scheduledend?: Date | null;
  scheduledstart?: Date | null;
  sortdate?: Date | null;
  stageid?: string | null;
  statecode?: letter_statecode | null;
  statuscode?: letter_statuscode | null;
  subcategory?: string | null;
  subject?: string | null;
  subscriptionid?: string | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Letter_Relationships {
  Letter_Annotation?: Annotation_Result[] | null;
  Letter_AsyncOperations?: AsyncOperation_Result[] | null;
  Letter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Letter_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  Letter_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  Letter_ProcessSessions?: ProcessSession_Result[] | null;
  Letter_QueueItem?: QueueItem_Result[] | null;
  Letter_SyncErrors?: SyncError_Result[] | null;
  activityid_activitypointer?: ActivityPointer_Result | null;
  createdby_letter?: SystemUser_Result | null;
  createdonbehalfby_letter?: SystemUser_Result | null;
  letter_actioncard?: ActionCard_Result[] | null;
  letter_activity_parties?: ActivityParty_Result[] | null;
  letter_campaignresponse?: CampaignResponse_Result[] | null;
  letter_connections1?: Connection_Result[] | null;
  letter_connections2?: Connection_Result[] | null;
  letter_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  modifiedby_letter?: SystemUser_Result | null;
  modifiedonbehalfby_letter?: SystemUser_Result | null;
  ownerid_letter?: Team_Result | null;
  ownerid_letter1?: SystemUser_Result | null;
  owningbusinessunit_letter?: BusinessUnit_Result | null;
  owningteam_letter?: Team_Result | null;
  owninguser_letter?: SystemUser_Result | null;
  regardingobjectid_account_letter?: Account_Result | null;
  regardingobjectid_awc_prototype_letter?: awc_prototype_Result | null;
  regardingobjectid_awcnpd_idea_letter?: awcnpd_idea_Result | null;
  regardingobjectid_awcnpd_prototype_letter?: awcnpd_prototype_Result | null;
  regardingobjectid_bookableresourcebooking_letter?: BookableResourceBooking_Result | null;
  regardingobjectid_bookableresourcebookingheader_letter?: BookableResourceBookingHeader_Result | null;
  regardingobjectid_bulkoperation_letter?: BulkOperation_Result | null;
  regardingobjectid_campaign_letter?: Campaign_Result | null;
  regardingobjectid_campaignactivity_letter?: CampaignActivity_Result | null;
  regardingobjectid_contact_letter?: Contact_Result | null;
  regardingobjectid_contract_letter?: Contract_Result | null;
  regardingobjectid_entitlement_letter?: Entitlement_Result | null;
  regardingobjectid_entitlementtemplate_letter?: EntitlementTemplate_Result | null;
  regardingobjectid_incident_letter?: Incident_Result | null;
  regardingobjectid_invoice_letter?: Invoice_Result | null;
  regardingobjectid_knowledgearticle_letter?: KnowledgeArticle_Result | null;
  regardingobjectid_knowledgebaserecord_letter?: KnowledgeBaseRecord_Result | null;
  regardingobjectid_lead_letter?: Lead_Result | null;
  regardingobjectid_msdyn_playbookinstance_letter?: msdyn_playbookinstance_Result | null;
  regardingobjectid_msdyn_postalbum_letter?: msdyn_PostAlbum_Result | null;
  regardingobjectid_opportunity_letter?: Opportunity_Result | null;
  regardingobjectid_quote_letter?: Quote_Result | null;
  regardingobjectid_salesorder_letter?: SalesOrder_Result | null;
  regardingobjectid_site_letter?: Site_Result | null;
  serviceid_letter?: Service_Result | null;
  sla_letter_sla?: SLA_Result | null;
  slainvokedid_letter_sla?: SLA_Result | null;
  slakpiinstance_letter?: SLAKPIInstance_Result[] | null;
  stageid_processstage?: ProcessStage_Result | null;
  transactioncurrencyid_letter?: TransactionCurrency_Result | null;
  userentityinstancedata_letter?: UserEntityInstanceData_Result[] | null;
}
interface Letter extends Letter_Base, Letter_Relationships {
  ownerid_letter_bind$systemusers?: string | null;
  ownerid_letter_bind$teams?: string | null;
  regardingobjectid_account_letter_bind$accounts?: string | null;
  regardingobjectid_awc_prototype_letter_bind$awc_prototypes?: string | null;
  regardingobjectid_awcnpd_idea_letter_bind$awcnpd_ideas?: string | null;
  regardingobjectid_awcnpd_prototype_letter_bind$awcnpd_prototypes?: string | null;
  regardingobjectid_bookableresourcebooking_letter_bind$bookableresourcebookings?: string | null;
  regardingobjectid_bookableresourcebookingheader_letter_bind$bookableresourcebookingheaders?: string | null;
  regardingobjectid_bulkoperation_letter_bind$bulkoperations?: string | null;
  regardingobjectid_campaign_letter_bind$campaigns?: string | null;
  regardingobjectid_campaignactivity_letter_bind$campaignactivities?: string | null;
  regardingobjectid_contact_letter_bind$contacts?: string | null;
  regardingobjectid_contract_letter_bind$contracts?: string | null;
  regardingobjectid_entitlement_letter_bind$entitlements?: string | null;
  regardingobjectid_entitlementtemplate_letter_bind$entitlementtemplates?: string | null;
  regardingobjectid_incident_letter_bind$incidents?: string | null;
  regardingobjectid_invoice_letter_bind$invoices?: string | null;
  regardingobjectid_knowledgearticle_letter_bind$knowledgearticles?: string | null;
  regardingobjectid_knowledgebaserecord_letter_bind$knowledgebaserecords?: string | null;
  regardingobjectid_lead_letter_bind$leads?: string | null;
  regardingobjectid_msdyn_playbookinstance_letter_bind$msdyn_playbookinstances?: string | null;
  regardingobjectid_msdyn_postalbum_letter_bind$msdyn_postalbums?: string | null;
  regardingobjectid_opportunity_letter_bind$opportunities?: string | null;
  regardingobjectid_quote_letter_bind$quotes?: string | null;
  regardingobjectid_salesorder_letter_bind$salesorders?: string | null;
  regardingobjectid_site_letter_bind$sites?: string | null;
  serviceid_letter_bind$services?: string | null;
  sla_letter_sla_bind$slas?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  transactioncurrencyid_letter_bind$transactioncurrencies?: string | null;
}
interface Letter_Create extends Letter {
  activityid_activitypointer_bind$activitypointers?: string | null;
}
interface Letter_Update extends Letter {
}
interface Letter_Select {
  activityid: WebAttribute<Letter_Select, { activityid: string | null }, {  }>;
  activitytypecode: WebAttribute<Letter_Select, { activitytypecode: string | null }, {  }>;
  actualdurationminutes: WebAttribute<Letter_Select, { actualdurationminutes: number | null }, {  }>;
  actualend: WebAttribute<Letter_Select, { actualend: Date | null }, { actualend_formatted?: string }>;
  actualstart: WebAttribute<Letter_Select, { actualstart: Date | null }, { actualstart_formatted?: string }>;
  address: WebAttribute<Letter_Select, { address: string | null }, {  }>;
  bcc_guid: WebAttribute<Letter_Select, { bcc_guid: string | null }, { bcc_formatted?: string }>;
  category: WebAttribute<Letter_Select, { category: string | null }, {  }>;
  cc_guid: WebAttribute<Letter_Select, { cc_guid: string | null }, { cc_formatted?: string }>;
  createdby_guid: WebAttribute<Letter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Letter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Letter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Letter_Select, { description: string | null }, {  }>;
  directioncode: WebAttribute<Letter_Select, { directioncode: boolean | null }, {  }>;
  exchangerate: WebAttribute<Letter_Select, { exchangerate: number | null }, {  }>;
  from_guid: WebAttribute<Letter_Select, { from_guid: string | null }, { from_formatted?: string }>;
  importsequencenumber: WebAttribute<Letter_Select, { importsequencenumber: number | null }, {  }>;
  isbilled: WebAttribute<Letter_Select, { isbilled: boolean | null }, {  }>;
  isregularactivity: WebAttribute<Letter_Select, { isregularactivity: boolean | null }, {  }>;
  isworkflowcreated: WebAttribute<Letter_Select, { isworkflowcreated: boolean | null }, {  }>;
  lastonholdtime: WebAttribute<Letter_Select, { lastonholdtime: Date | null }, { lastonholdtime_formatted?: string }>;
  modifiedby_guid: WebAttribute<Letter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Letter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Letter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  onholdtime: WebAttribute<Letter_Select, { onholdtime: number | null }, {  }>;
  overriddencreatedon: WebAttribute<Letter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Letter_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Letter_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Letter_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Letter_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  prioritycode: WebAttribute<Letter_Select, { prioritycode: letter_prioritycode | null }, { prioritycode_formatted?: string }>;
  processid: WebAttribute<Letter_Select, { processid: string | null }, {  }>;
  regardingobjectid_guid: WebAttribute<Letter_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  scheduleddurationminutes: WebAttribute<Letter_Select, { scheduleddurationminutes: number | null }, {  }>;
  scheduledend: WebAttribute<Letter_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
  scheduledstart: WebAttribute<Letter_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
  serviceid_guid: WebAttribute<Letter_Select, { serviceid_guid: string | null }, { serviceid_formatted?: string }>;
  slaid_guid: WebAttribute<Letter_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  slainvokedid_guid: WebAttribute<Letter_Select, { slainvokedid_guid: string | null }, { slainvokedid_formatted?: string }>;
  sortdate: WebAttribute<Letter_Select, { sortdate: Date | null }, { sortdate_formatted?: string }>;
  stageid: WebAttribute<Letter_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<Letter_Select, { statecode: letter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Letter_Select, { statuscode: letter_statuscode | null }, { statuscode_formatted?: string }>;
  subcategory: WebAttribute<Letter_Select, { subcategory: string | null }, {  }>;
  subject: WebAttribute<Letter_Select, { subject: string | null }, {  }>;
  subscriptionid: WebAttribute<Letter_Select, { subscriptionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Letter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  to_guid: WebAttribute<Letter_Select, { to_guid: string | null }, { to_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<Letter_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<Letter_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Letter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Letter_Select, { versionnumber: number | null }, {  }>;
}
interface Letter_Filter {
  activityid: XQW.Guid;
  activitytypecode: string;
  actualdurationminutes: number;
  actualend: Date;
  actualstart: Date;
  address: string;
  bcc_guid: XQW.Guid;
  category: string;
  cc_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  directioncode: boolean;
  exchangerate: any;
  from_guid: XQW.Guid;
  importsequencenumber: number;
  isbilled: boolean;
  isregularactivity: boolean;
  isworkflowcreated: boolean;
  lastonholdtime: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  onholdtime: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  prioritycode: letter_prioritycode;
  processid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  scheduleddurationminutes: number;
  scheduledend: Date;
  scheduledstart: Date;
  serviceid_guid: XQW.Guid;
  slaid_guid: XQW.Guid;
  slainvokedid_guid: XQW.Guid;
  sortdate: Date;
  stageid: XQW.Guid;
  statecode: letter_statecode;
  statuscode: letter_statuscode;
  subcategory: string;
  subject: string;
  subscriptionid: XQW.Guid;
  timezoneruleversionnumber: number;
  to_guid: XQW.Guid;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Letter_Expand {
  Letter_Annotation: WebExpand<Letter_Expand, Annotation_Select, Annotation_Filter, { Letter_Annotation: Annotation_Result[] }>;
  Letter_AsyncOperations: WebExpand<Letter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Letter_AsyncOperations: AsyncOperation_Result[] }>;
  Letter_BulkDeleteFailures: WebExpand<Letter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Letter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Letter_DuplicateBaseRecord: WebExpand<Letter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Letter_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  Letter_DuplicateMatchingRecord: WebExpand<Letter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Letter_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  Letter_ProcessSessions: WebExpand<Letter_Expand, ProcessSession_Select, ProcessSession_Filter, { Letter_ProcessSessions: ProcessSession_Result[] }>;
  Letter_QueueItem: WebExpand<Letter_Expand, QueueItem_Select, QueueItem_Filter, { Letter_QueueItem: QueueItem_Result[] }>;
  Letter_SyncErrors: WebExpand<Letter_Expand, SyncError_Select, SyncError_Filter, { Letter_SyncErrors: SyncError_Result[] }>;
  activityid_activitypointer: WebExpand<Letter_Expand, ActivityPointer_Select, ActivityPointer_Filter, { activityid_activitypointer: ActivityPointer_Result }>;
  createdby_letter: WebExpand<Letter_Expand, SystemUser_Select, SystemUser_Filter, { createdby_letter: SystemUser_Result }>;
  createdonbehalfby_letter: WebExpand<Letter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby_letter: SystemUser_Result }>;
  letter_actioncard: WebExpand<Letter_Expand, ActionCard_Select, ActionCard_Filter, { letter_actioncard: ActionCard_Result[] }>;
  letter_activity_parties: WebExpand<Letter_Expand, ActivityParty_Select, ActivityParty_Filter, { letter_activity_parties: ActivityParty_Result[] }>;
  letter_campaignresponse: WebExpand<Letter_Expand, CampaignResponse_Select, CampaignResponse_Filter, { letter_campaignresponse: CampaignResponse_Result[] }>;
  letter_connections1: WebExpand<Letter_Expand, Connection_Select, Connection_Filter, { letter_connections1: Connection_Result[] }>;
  letter_connections2: WebExpand<Letter_Expand, Connection_Select, Connection_Filter, { letter_connections2: Connection_Result[] }>;
  letter_principalobjectattributeaccess: WebExpand<Letter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { letter_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby_letter: WebExpand<Letter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby_letter: SystemUser_Result }>;
  modifiedonbehalfby_letter: WebExpand<Letter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby_letter: SystemUser_Result }>;
  ownerid_letter: WebExpand<Letter_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid_letter: SystemUser_Result } & { ownerid_letter: Team_Result }>;
  owningbusinessunit_letter: WebExpand<Letter_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit_letter: BusinessUnit_Result }>;
  owningteam_letter: WebExpand<Letter_Expand, Team_Select, Team_Filter, { owningteam_letter: Team_Result }>;
  owninguser_letter: WebExpand<Letter_Expand, SystemUser_Select, SystemUser_Filter, { owninguser_letter: SystemUser_Result }>;
  regardingobjectid_account_letter: WebExpand<Letter_Expand, Account_Select, Account_Filter, { regardingobjectid_account_letter: Account_Result }>;
  regardingobjectid_awc_prototype_letter: WebExpand<Letter_Expand, awc_prototype_Select, awc_prototype_Filter, { regardingobjectid_awc_prototype_letter: awc_prototype_Result }>;
  regardingobjectid_awcnpd_idea_letter: WebExpand<Letter_Expand, awcnpd_idea_Select, awcnpd_idea_Filter, { regardingobjectid_awcnpd_idea_letter: awcnpd_idea_Result }>;
  regardingobjectid_awcnpd_prototype_letter: WebExpand<Letter_Expand, awcnpd_prototype_Select, awcnpd_prototype_Filter, { regardingobjectid_awcnpd_prototype_letter: awcnpd_prototype_Result }>;
  regardingobjectid_bookableresourcebooking_letter: WebExpand<Letter_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { regardingobjectid_bookableresourcebooking_letter: BookableResourceBooking_Result }>;
  regardingobjectid_bookableresourcebookingheader_letter: WebExpand<Letter_Expand, BookableResourceBookingHeader_Select, BookableResourceBookingHeader_Filter, { regardingobjectid_bookableresourcebookingheader_letter: BookableResourceBookingHeader_Result }>;
  regardingobjectid_bulkoperation_letter: WebExpand<Letter_Expand, BulkOperation_Select, BulkOperation_Filter, { regardingobjectid_bulkoperation_letter: BulkOperation_Result }>;
  regardingobjectid_campaign_letter: WebExpand<Letter_Expand, Campaign_Select, Campaign_Filter, { regardingobjectid_campaign_letter: Campaign_Result }>;
  regardingobjectid_campaignactivity_letter: WebExpand<Letter_Expand, CampaignActivity_Select, CampaignActivity_Filter, { regardingobjectid_campaignactivity_letter: CampaignActivity_Result }>;
  regardingobjectid_contact_letter: WebExpand<Letter_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact_letter: Contact_Result }>;
  regardingobjectid_contract_letter: WebExpand<Letter_Expand, Contract_Select, Contract_Filter, { regardingobjectid_contract_letter: Contract_Result }>;
  regardingobjectid_entitlement_letter: WebExpand<Letter_Expand, Entitlement_Select, Entitlement_Filter, { regardingobjectid_entitlement_letter: Entitlement_Result }>;
  regardingobjectid_entitlementtemplate_letter: WebExpand<Letter_Expand, EntitlementTemplate_Select, EntitlementTemplate_Filter, { regardingobjectid_entitlementtemplate_letter: EntitlementTemplate_Result }>;
  regardingobjectid_incident_letter: WebExpand<Letter_Expand, Incident_Select, Incident_Filter, { regardingobjectid_incident_letter: Incident_Result }>;
  regardingobjectid_invoice_letter: WebExpand<Letter_Expand, Invoice_Select, Invoice_Filter, { regardingobjectid_invoice_letter: Invoice_Result }>;
  regardingobjectid_knowledgearticle_letter: WebExpand<Letter_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { regardingobjectid_knowledgearticle_letter: KnowledgeArticle_Result }>;
  regardingobjectid_knowledgebaserecord_letter: WebExpand<Letter_Expand, KnowledgeBaseRecord_Select, KnowledgeBaseRecord_Filter, { regardingobjectid_knowledgebaserecord_letter: KnowledgeBaseRecord_Result }>;
  regardingobjectid_lead_letter: WebExpand<Letter_Expand, Lead_Select, Lead_Filter, { regardingobjectid_lead_letter: Lead_Result }>;
  regardingobjectid_msdyn_playbookinstance_letter: WebExpand<Letter_Expand, msdyn_playbookinstance_Select, msdyn_playbookinstance_Filter, { regardingobjectid_msdyn_playbookinstance_letter: msdyn_playbookinstance_Result }>;
  regardingobjectid_msdyn_postalbum_letter: WebExpand<Letter_Expand, msdyn_PostAlbum_Select, msdyn_PostAlbum_Filter, { regardingobjectid_msdyn_postalbum_letter: msdyn_PostAlbum_Result }>;
  regardingobjectid_opportunity_letter: WebExpand<Letter_Expand, Opportunity_Select, Opportunity_Filter, { regardingobjectid_opportunity_letter: Opportunity_Result }>;
  regardingobjectid_quote_letter: WebExpand<Letter_Expand, Quote_Select, Quote_Filter, { regardingobjectid_quote_letter: Quote_Result }>;
  regardingobjectid_salesorder_letter: WebExpand<Letter_Expand, SalesOrder_Select, SalesOrder_Filter, { regardingobjectid_salesorder_letter: SalesOrder_Result }>;
  regardingobjectid_site_letter: WebExpand<Letter_Expand, Site_Select, Site_Filter, { regardingobjectid_site_letter: Site_Result }>;
  serviceid_letter: WebExpand<Letter_Expand, Service_Select, Service_Filter, { serviceid_letter: Service_Result }>;
  sla_letter_sla: WebExpand<Letter_Expand, SLA_Select, SLA_Filter, { sla_letter_sla: SLA_Result }>;
  slainvokedid_letter_sla: WebExpand<Letter_Expand, SLA_Select, SLA_Filter, { slainvokedid_letter_sla: SLA_Result }>;
  slakpiinstance_letter: WebExpand<Letter_Expand, SLAKPIInstance_Select, SLAKPIInstance_Filter, { slakpiinstance_letter: SLAKPIInstance_Result[] }>;
  stageid_processstage: WebExpand<Letter_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid_processstage: ProcessStage_Result }>;
  transactioncurrencyid_letter: WebExpand<Letter_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid_letter: TransactionCurrency_Result }>;
  userentityinstancedata_letter: WebExpand<Letter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_letter: UserEntityInstanceData_Result[] }>;
}
interface Letter_FormattedResult {
  actualend_formatted?: string;
  actualstart_formatted?: string;
  bcc_formatted?: string;
  cc_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  from_formatted?: string;
  lastonholdtime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  prioritycode_formatted?: string;
  regardingobjectid_formatted?: string;
  scheduledend_formatted?: string;
  scheduledstart_formatted?: string;
  serviceid_formatted?: string;
  slaid_formatted?: string;
  slainvokedid_formatted?: string;
  sortdate_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  to_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Letter_Result extends Letter_Base, Letter_Relationships {
  "@odata.etag": string;
  bcc_guid: string | null;
  cc_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  from_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
  serviceid_guid: string | null;
  slaid_guid: string | null;
  slainvokedid_guid: string | null;
  to_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Letter_RelatedOne {
  activityid_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  createdby_letter: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby_letter: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby_letter: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby_letter: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid_letter: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  ownerid_letter1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owningbusinessunit_letter: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam_letter: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser_letter: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regardingobjectid_account_letter: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_awc_prototype_letter: WebMappingRetrieve<awc_prototype_Select,awc_prototype_Expand,awc_prototype_Filter,awc_prototype_Fixed,awc_prototype_Result,awc_prototype_FormattedResult>;
  regardingobjectid_awcnpd_idea_letter: WebMappingRetrieve<awcnpd_idea_Select,awcnpd_idea_Expand,awcnpd_idea_Filter,awcnpd_idea_Fixed,awcnpd_idea_Result,awcnpd_idea_FormattedResult>;
  regardingobjectid_awcnpd_prototype_letter: WebMappingRetrieve<awcnpd_prototype_Select,awcnpd_prototype_Expand,awcnpd_prototype_Filter,awcnpd_prototype_Fixed,awcnpd_prototype_Result,awcnpd_prototype_FormattedResult>;
  regardingobjectid_bookableresourcebooking_letter: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  regardingobjectid_bookableresourcebookingheader_letter: WebMappingRetrieve<BookableResourceBookingHeader_Select,BookableResourceBookingHeader_Expand,BookableResourceBookingHeader_Filter,BookableResourceBookingHeader_Fixed,BookableResourceBookingHeader_Result,BookableResourceBookingHeader_FormattedResult>;
  regardingobjectid_bulkoperation_letter: WebMappingRetrieve<BulkOperation_Select,BulkOperation_Expand,BulkOperation_Filter,BulkOperation_Fixed,BulkOperation_Result,BulkOperation_FormattedResult>;
  regardingobjectid_campaign_letter: WebMappingRetrieve<Campaign_Select,Campaign_Expand,Campaign_Filter,Campaign_Fixed,Campaign_Result,Campaign_FormattedResult>;
  regardingobjectid_campaignactivity_letter: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  regardingobjectid_contact_letter: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regardingobjectid_contract_letter: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
  regardingobjectid_entitlement_letter: WebMappingRetrieve<Entitlement_Select,Entitlement_Expand,Entitlement_Filter,Entitlement_Fixed,Entitlement_Result,Entitlement_FormattedResult>;
  regardingobjectid_entitlementtemplate_letter: WebMappingRetrieve<EntitlementTemplate_Select,EntitlementTemplate_Expand,EntitlementTemplate_Filter,EntitlementTemplate_Fixed,EntitlementTemplate_Result,EntitlementTemplate_FormattedResult>;
  regardingobjectid_incident_letter: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  regardingobjectid_invoice_letter: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  regardingobjectid_knowledgearticle_letter: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  regardingobjectid_knowledgebaserecord_letter: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
  regardingobjectid_lead_letter: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  regardingobjectid_msdyn_playbookinstance_letter: WebMappingRetrieve<msdyn_playbookinstance_Select,msdyn_playbookinstance_Expand,msdyn_playbookinstance_Filter,msdyn_playbookinstance_Fixed,msdyn_playbookinstance_Result,msdyn_playbookinstance_FormattedResult>;
  regardingobjectid_msdyn_postalbum_letter: WebMappingRetrieve<msdyn_PostAlbum_Select,msdyn_PostAlbum_Expand,msdyn_PostAlbum_Filter,msdyn_PostAlbum_Fixed,msdyn_PostAlbum_Result,msdyn_PostAlbum_FormattedResult>;
  regardingobjectid_opportunity_letter: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  regardingobjectid_quote_letter: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  regardingobjectid_salesorder_letter: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  regardingobjectid_site_letter: WebMappingRetrieve<Site_Select,Site_Expand,Site_Filter,Site_Fixed,Site_Result,Site_FormattedResult>;
  serviceid_letter: WebMappingRetrieve<Service_Select,Service_Expand,Service_Filter,Service_Fixed,Service_Result,Service_FormattedResult>;
  sla_letter_sla: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  slainvokedid_letter_sla: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  stageid_processstage: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  transactioncurrencyid_letter: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Letter_RelatedMany {
  Letter_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  Letter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Letter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Letter_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Letter_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Letter_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Letter_QueueItem: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  Letter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  letter_actioncard: WebMappingRetrieve<ActionCard_Select,ActionCard_Expand,ActionCard_Filter,ActionCard_Fixed,ActionCard_Result,ActionCard_FormattedResult>;
  letter_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  letter_campaignresponse: WebMappingRetrieve<CampaignResponse_Select,CampaignResponse_Expand,CampaignResponse_Filter,CampaignResponse_Fixed,CampaignResponse_Result,CampaignResponse_FormattedResult>;
  letter_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  letter_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  letter_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  slakpiinstance_letter: WebMappingRetrieve<SLAKPIInstance_Select,SLAKPIInstance_Expand,SLAKPIInstance_Filter,SLAKPIInstance_Fixed,SLAKPIInstance_Result,SLAKPIInstance_FormattedResult>;
  userentityinstancedata_letter: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
}
interface WebEntitiesRelated {
  letters: WebMappingRelated<Letter_RelatedOne,Letter_RelatedMany>;
}
interface WebEntitiesCUDA {
  letters: WebMappingCUDA<Letter_Create,Letter_Update,Letter_Select>;
}