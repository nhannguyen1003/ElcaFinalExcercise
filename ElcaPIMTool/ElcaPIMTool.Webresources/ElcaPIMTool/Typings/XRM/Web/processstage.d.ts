interface ProcessStage_Base extends WebEntity {
  clientdata?: string | null;
  connector?: string | null;
  istrigger?: boolean | null;
  operationid?: string | null;
  operationkind?: processstage_operationkind | null;
  operationtype?: processstage_operationtype | null;
  owningbusinessunit?: string | null;
  primaryentitytypecode?: string | null;
  processstageid?: string | null;
  stagecategory?: processstage_category | null;
  stagename?: string | null;
  versionnumber?: number | null;
}
interface ProcessStage_Relationships {
  ProcessStage_SyncErrors?: SyncError_Result[] | null;
  processstage_BookableResource?: BookableResource_Result[] | null;
  processstage_BookableResourceBooking?: BookableResourceBooking_Result[] | null;
  processstage_BookableResourceBookingHeader?: BookableResourceBookingHeader_Result[] | null;
  processstage_BookableResourceCharacteristic?: BookableResourceCharacteristic_Result[] | null;
  processstage_Entitlement?: Entitlement_Result[] | null;
  processstage_account?: Account_Result[] | null;
  processstage_appointments?: Appointment_Result[] | null;
  processstage_awcnpd_feedback?: awcnpd_feedback_Result[] | null;
  processstage_awcnpd_idea?: awcnpd_idea_Result[] | null;
  processstage_awcnpd_prototype?: awcnpd_prototype_Result[] | null;
  processstage_campaignactivities?: CampaignActivity_Result[] | null;
  processstage_campaignresponses?: CampaignResponse_Result[] | null;
  processstage_campaigns?: Campaign_Result[] | null;
  processstage_competitors?: Competitor_Result[] | null;
  processstage_contact?: Contact_Result[] | null;
  processstage_emails?: Email_Result[] | null;
  processstage_expiredprocess?: ExpiredProcess_Result[] | null;
  processstage_faxes?: Fax_Result[] | null;
  processstage_incident?: Incident_Result[] | null;
  processstage_invoices?: Invoice_Result[] | null;
  processstage_knowledgearticle?: KnowledgeArticle_Result[] | null;
  processstage_lead?: Lead_Result[] | null;
  processstage_leadtoopportunitysalesprocess?: LeadToOpportunitySalesProcess_Result[] | null;
  processstage_letters?: Letter_Result[] | null;
  processstage_lists?: List_Result[] | null;
  processstage_newprocess?: NewProcess_Result[] | null;
  processstage_opportunity?: Opportunity_Result[] | null;
  processstage_opportunitysalesprocess?: OpportunitySalesProcess_Result[] | null;
  processstage_phonecalls?: PhoneCall_Result[] | null;
  processstage_phonetocaseprocess?: PhoneToCaseProcess_Result[] | null;
  processstage_processstageparameter?: processstageparameter_Result[] | null;
  processstage_productpricelevels?: ProductPriceLevel_Result[] | null;
  processstage_products?: Product_Result[] | null;
  processstage_quotes?: Quote_Result[] | null;
  processstage_recurringappointmentmasters?: RecurringAppointmentMaster_Result[] | null;
  processstage_salesliteratures?: SalesLiterature_Result[] | null;
  processstage_salesorders?: SalesOrder_Result[] | null;
  processstage_systemusers?: SystemUser_Result[] | null;
  processstage_tasks?: Task_Result[] | null;
  processstage_teams?: Team_Result[] | null;
  processstage_translationprocess?: TranslationProcess_Result[] | null;
}
interface ProcessStage extends ProcessStage_Base, ProcessStage_Relationships {
}
interface ProcessStage_Create extends ProcessStage {
  processid_bind$workflows?: string | null;
}
interface ProcessStage_Update extends ProcessStage {
}
interface ProcessStage_Select {
  clientdata: WebAttribute<ProcessStage_Select, { clientdata: string | null }, {  }>;
  connector: WebAttribute<ProcessStage_Select, { connector: string | null }, {  }>;
  istrigger: WebAttribute<ProcessStage_Select, { istrigger: boolean | null }, {  }>;
  operationid: WebAttribute<ProcessStage_Select, { operationid: string | null }, {  }>;
  operationkind: WebAttribute<ProcessStage_Select, { operationkind: processstage_operationkind | null }, { operationkind_formatted?: string }>;
  operationtype: WebAttribute<ProcessStage_Select, { operationtype: processstage_operationtype | null }, { operationtype_formatted?: string }>;
  ownerid_guid: WebAttribute<ProcessStage_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ProcessStage_Select, { owningbusinessunit: string | null }, {  }>;
  primaryentitytypecode: WebAttribute<ProcessStage_Select, { primaryentitytypecode: string | null }, {  }>;
  processid_guid: WebAttribute<ProcessStage_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  processstageid: WebAttribute<ProcessStage_Select, { processstageid: string | null }, {  }>;
  stagecategory: WebAttribute<ProcessStage_Select, { stagecategory: processstage_category | null }, { stagecategory_formatted?: string }>;
  stagename: WebAttribute<ProcessStage_Select, { stagename: string | null }, {  }>;
  versionnumber: WebAttribute<ProcessStage_Select, { versionnumber: number | null }, {  }>;
}
interface ProcessStage_Filter {
  clientdata: string;
  connector: string;
  istrigger: boolean;
  operationid: string;
  operationkind: processstage_operationkind;
  operationtype: processstage_operationtype;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  primaryentitytypecode: string;
  processid_guid: XQW.Guid;
  processstageid: XQW.Guid;
  stagecategory: processstage_category;
  stagename: string;
  versionnumber: number;
}
interface ProcessStage_Expand {
  ProcessStage_SyncErrors: WebExpand<ProcessStage_Expand, SyncError_Select, SyncError_Filter, { ProcessStage_SyncErrors: SyncError_Result[] }>;
  processid: WebExpand<ProcessStage_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
  processstage_BookableResource: WebExpand<ProcessStage_Expand, BookableResource_Select, BookableResource_Filter, { processstage_BookableResource: BookableResource_Result[] }>;
  processstage_BookableResourceBooking: WebExpand<ProcessStage_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { processstage_BookableResourceBooking: BookableResourceBooking_Result[] }>;
  processstage_BookableResourceBookingHeader: WebExpand<ProcessStage_Expand, BookableResourceBookingHeader_Select, BookableResourceBookingHeader_Filter, { processstage_BookableResourceBookingHeader: BookableResourceBookingHeader_Result[] }>;
  processstage_BookableResourceCharacteristic: WebExpand<ProcessStage_Expand, BookableResourceCharacteristic_Select, BookableResourceCharacteristic_Filter, { processstage_BookableResourceCharacteristic: BookableResourceCharacteristic_Result[] }>;
  processstage_Entitlement: WebExpand<ProcessStage_Expand, Entitlement_Select, Entitlement_Filter, { processstage_Entitlement: Entitlement_Result[] }>;
  processstage_account: WebExpand<ProcessStage_Expand, Account_Select, Account_Filter, { processstage_account: Account_Result[] }>;
  processstage_appointments: WebExpand<ProcessStage_Expand, Appointment_Select, Appointment_Filter, { processstage_appointments: Appointment_Result[] }>;
  processstage_awcnpd_feedback: WebExpand<ProcessStage_Expand, awcnpd_feedback_Select, awcnpd_feedback_Filter, { processstage_awcnpd_feedback: awcnpd_feedback_Result[] }>;
  processstage_awcnpd_idea: WebExpand<ProcessStage_Expand, awcnpd_idea_Select, awcnpd_idea_Filter, { processstage_awcnpd_idea: awcnpd_idea_Result[] }>;
  processstage_awcnpd_prototype: WebExpand<ProcessStage_Expand, awcnpd_prototype_Select, awcnpd_prototype_Filter, { processstage_awcnpd_prototype: awcnpd_prototype_Result[] }>;
  processstage_campaignactivities: WebExpand<ProcessStage_Expand, CampaignActivity_Select, CampaignActivity_Filter, { processstage_campaignactivities: CampaignActivity_Result[] }>;
  processstage_campaignresponses: WebExpand<ProcessStage_Expand, CampaignResponse_Select, CampaignResponse_Filter, { processstage_campaignresponses: CampaignResponse_Result[] }>;
  processstage_campaigns: WebExpand<ProcessStage_Expand, Campaign_Select, Campaign_Filter, { processstage_campaigns: Campaign_Result[] }>;
  processstage_competitors: WebExpand<ProcessStage_Expand, Competitor_Select, Competitor_Filter, { processstage_competitors: Competitor_Result[] }>;
  processstage_contact: WebExpand<ProcessStage_Expand, Contact_Select, Contact_Filter, { processstage_contact: Contact_Result[] }>;
  processstage_emails: WebExpand<ProcessStage_Expand, Email_Select, Email_Filter, { processstage_emails: Email_Result[] }>;
  processstage_expiredprocess: WebExpand<ProcessStage_Expand, ExpiredProcess_Select, ExpiredProcess_Filter, { processstage_expiredprocess: ExpiredProcess_Result[] }>;
  processstage_faxes: WebExpand<ProcessStage_Expand, Fax_Select, Fax_Filter, { processstage_faxes: Fax_Result[] }>;
  processstage_incident: WebExpand<ProcessStage_Expand, Incident_Select, Incident_Filter, { processstage_incident: Incident_Result[] }>;
  processstage_invoices: WebExpand<ProcessStage_Expand, Invoice_Select, Invoice_Filter, { processstage_invoices: Invoice_Result[] }>;
  processstage_knowledgearticle: WebExpand<ProcessStage_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { processstage_knowledgearticle: KnowledgeArticle_Result[] }>;
  processstage_lead: WebExpand<ProcessStage_Expand, Lead_Select, Lead_Filter, { processstage_lead: Lead_Result[] }>;
  processstage_leadtoopportunitysalesprocess: WebExpand<ProcessStage_Expand, LeadToOpportunitySalesProcess_Select, LeadToOpportunitySalesProcess_Filter, { processstage_leadtoopportunitysalesprocess: LeadToOpportunitySalesProcess_Result[] }>;
  processstage_letters: WebExpand<ProcessStage_Expand, Letter_Select, Letter_Filter, { processstage_letters: Letter_Result[] }>;
  processstage_lists: WebExpand<ProcessStage_Expand, List_Select, List_Filter, { processstage_lists: List_Result[] }>;
  processstage_newprocess: WebExpand<ProcessStage_Expand, NewProcess_Select, NewProcess_Filter, { processstage_newprocess: NewProcess_Result[] }>;
  processstage_opportunity: WebExpand<ProcessStage_Expand, Opportunity_Select, Opportunity_Filter, { processstage_opportunity: Opportunity_Result[] }>;
  processstage_opportunitysalesprocess: WebExpand<ProcessStage_Expand, OpportunitySalesProcess_Select, OpportunitySalesProcess_Filter, { processstage_opportunitysalesprocess: OpportunitySalesProcess_Result[] }>;
  processstage_phonecalls: WebExpand<ProcessStage_Expand, PhoneCall_Select, PhoneCall_Filter, { processstage_phonecalls: PhoneCall_Result[] }>;
  processstage_phonetocaseprocess: WebExpand<ProcessStage_Expand, PhoneToCaseProcess_Select, PhoneToCaseProcess_Filter, { processstage_phonetocaseprocess: PhoneToCaseProcess_Result[] }>;
  processstage_processstageparameter: WebExpand<ProcessStage_Expand, processstageparameter_Select, processstageparameter_Filter, { processstage_processstageparameter: processstageparameter_Result[] }>;
  processstage_productpricelevels: WebExpand<ProcessStage_Expand, ProductPriceLevel_Select, ProductPriceLevel_Filter, { processstage_productpricelevels: ProductPriceLevel_Result[] }>;
  processstage_products: WebExpand<ProcessStage_Expand, Product_Select, Product_Filter, { processstage_products: Product_Result[] }>;
  processstage_quotes: WebExpand<ProcessStage_Expand, Quote_Select, Quote_Filter, { processstage_quotes: Quote_Result[] }>;
  processstage_recurringappointmentmasters: WebExpand<ProcessStage_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { processstage_recurringappointmentmasters: RecurringAppointmentMaster_Result[] }>;
  processstage_salesliteratures: WebExpand<ProcessStage_Expand, SalesLiterature_Select, SalesLiterature_Filter, { processstage_salesliteratures: SalesLiterature_Result[] }>;
  processstage_salesorders: WebExpand<ProcessStage_Expand, SalesOrder_Select, SalesOrder_Filter, { processstage_salesorders: SalesOrder_Result[] }>;
  processstage_systemusers: WebExpand<ProcessStage_Expand, SystemUser_Select, SystemUser_Filter, { processstage_systemusers: SystemUser_Result[] }>;
  processstage_tasks: WebExpand<ProcessStage_Expand, Task_Select, Task_Filter, { processstage_tasks: Task_Result[] }>;
  processstage_teams: WebExpand<ProcessStage_Expand, Team_Select, Team_Filter, { processstage_teams: Team_Result[] }>;
  processstage_translationprocess: WebExpand<ProcessStage_Expand, TranslationProcess_Select, TranslationProcess_Filter, { processstage_translationprocess: TranslationProcess_Result[] }>;
}
interface ProcessStage_FormattedResult {
  operationkind_formatted?: string;
  operationtype_formatted?: string;
  ownerid_formatted?: string;
  processid_formatted?: string;
  stagecategory_formatted?: string;
}
interface ProcessStage_Result extends ProcessStage_Base, ProcessStage_Relationships {
  "@odata.etag": string;
  ownerid_guid: string | null;
  processid_guid: string | null;
}
interface ProcessStage_RelatedOne {
  processid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface ProcessStage_RelatedMany {
  ProcessStage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  processstage_BookableResource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  processstage_BookableResourceBooking: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  processstage_BookableResourceBookingHeader: WebMappingRetrieve<BookableResourceBookingHeader_Select,BookableResourceBookingHeader_Expand,BookableResourceBookingHeader_Filter,BookableResourceBookingHeader_Fixed,BookableResourceBookingHeader_Result,BookableResourceBookingHeader_FormattedResult>;
  processstage_BookableResourceCharacteristic: WebMappingRetrieve<BookableResourceCharacteristic_Select,BookableResourceCharacteristic_Expand,BookableResourceCharacteristic_Filter,BookableResourceCharacteristic_Fixed,BookableResourceCharacteristic_Result,BookableResourceCharacteristic_FormattedResult>;
  processstage_Entitlement: WebMappingRetrieve<Entitlement_Select,Entitlement_Expand,Entitlement_Filter,Entitlement_Fixed,Entitlement_Result,Entitlement_FormattedResult>;
  processstage_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  processstage_appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  processstage_awcnpd_feedback: WebMappingRetrieve<awcnpd_feedback_Select,awcnpd_feedback_Expand,awcnpd_feedback_Filter,awcnpd_feedback_Fixed,awcnpd_feedback_Result,awcnpd_feedback_FormattedResult>;
  processstage_awcnpd_idea: WebMappingRetrieve<awcnpd_idea_Select,awcnpd_idea_Expand,awcnpd_idea_Filter,awcnpd_idea_Fixed,awcnpd_idea_Result,awcnpd_idea_FormattedResult>;
  processstage_awcnpd_prototype: WebMappingRetrieve<awcnpd_prototype_Select,awcnpd_prototype_Expand,awcnpd_prototype_Filter,awcnpd_prototype_Fixed,awcnpd_prototype_Result,awcnpd_prototype_FormattedResult>;
  processstage_campaignactivities: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  processstage_campaignresponses: WebMappingRetrieve<CampaignResponse_Select,CampaignResponse_Expand,CampaignResponse_Filter,CampaignResponse_Fixed,CampaignResponse_Result,CampaignResponse_FormattedResult>;
  processstage_campaigns: WebMappingRetrieve<Campaign_Select,Campaign_Expand,Campaign_Filter,Campaign_Fixed,Campaign_Result,Campaign_FormattedResult>;
  processstage_competitors: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
  processstage_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  processstage_emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  processstage_expiredprocess: WebMappingRetrieve<ExpiredProcess_Select,ExpiredProcess_Expand,ExpiredProcess_Filter,ExpiredProcess_Fixed,ExpiredProcess_Result,ExpiredProcess_FormattedResult>;
  processstage_faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  processstage_incident: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  processstage_invoices: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  processstage_knowledgearticle: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  processstage_lead: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  processstage_leadtoopportunitysalesprocess: WebMappingRetrieve<LeadToOpportunitySalesProcess_Select,LeadToOpportunitySalesProcess_Expand,LeadToOpportunitySalesProcess_Filter,LeadToOpportunitySalesProcess_Fixed,LeadToOpportunitySalesProcess_Result,LeadToOpportunitySalesProcess_FormattedResult>;
  processstage_letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  processstage_lists: WebMappingRetrieve<List_Select,List_Expand,List_Filter,List_Fixed,List_Result,List_FormattedResult>;
  processstage_newprocess: WebMappingRetrieve<NewProcess_Select,NewProcess_Expand,NewProcess_Filter,NewProcess_Fixed,NewProcess_Result,NewProcess_FormattedResult>;
  processstage_opportunity: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  processstage_opportunitysalesprocess: WebMappingRetrieve<OpportunitySalesProcess_Select,OpportunitySalesProcess_Expand,OpportunitySalesProcess_Filter,OpportunitySalesProcess_Fixed,OpportunitySalesProcess_Result,OpportunitySalesProcess_FormattedResult>;
  processstage_phonecalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  processstage_phonetocaseprocess: WebMappingRetrieve<PhoneToCaseProcess_Select,PhoneToCaseProcess_Expand,PhoneToCaseProcess_Filter,PhoneToCaseProcess_Fixed,PhoneToCaseProcess_Result,PhoneToCaseProcess_FormattedResult>;
  processstage_processstageparameter: WebMappingRetrieve<processstageparameter_Select,processstageparameter_Expand,processstageparameter_Filter,processstageparameter_Fixed,processstageparameter_Result,processstageparameter_FormattedResult>;
  processstage_productpricelevels: WebMappingRetrieve<ProductPriceLevel_Select,ProductPriceLevel_Expand,ProductPriceLevel_Filter,ProductPriceLevel_Fixed,ProductPriceLevel_Result,ProductPriceLevel_FormattedResult>;
  processstage_products: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  processstage_quotes: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  processstage_recurringappointmentmasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  processstage_salesliteratures: WebMappingRetrieve<SalesLiterature_Select,SalesLiterature_Expand,SalesLiterature_Filter,SalesLiterature_Fixed,SalesLiterature_Result,SalesLiterature_FormattedResult>;
  processstage_salesorders: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  processstage_systemusers: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  processstage_tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  processstage_teams: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  processstage_translationprocess: WebMappingRetrieve<TranslationProcess_Select,TranslationProcess_Expand,TranslationProcess_Filter,TranslationProcess_Fixed,TranslationProcess_Result,TranslationProcess_FormattedResult>;
}
interface WebEntitiesRetrieve {
  processstages: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
}
interface WebEntitiesRelated {
  processstages: WebMappingRelated<ProcessStage_RelatedOne,ProcessStage_RelatedMany>;
}
interface WebEntitiesCUDA {
  processstages: WebMappingCUDA<ProcessStage_Create,ProcessStage_Update,ProcessStage_Select>;
}
