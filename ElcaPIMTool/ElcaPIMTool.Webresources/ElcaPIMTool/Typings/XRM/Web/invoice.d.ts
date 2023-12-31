interface Invoice_Base extends WebEntity {
  billto_city?: string | null;
  billto_composite?: string | null;
  billto_country?: string | null;
  billto_fax?: string | null;
  billto_line1?: string | null;
  billto_line2?: string | null;
  billto_line3?: string | null;
  billto_name?: string | null;
  billto_postalcode?: string | null;
  billto_stateorprovince?: string | null;
  billto_telephone?: string | null;
  createdon?: Date | null;
  datedelivered?: Date | null;
  description?: string | null;
  discountamount?: number | null;
  discountamount_base?: number | null;
  discountpercentage?: number | null;
  duedate?: Date | null;
  emailaddress?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  freightamount?: number | null;
  freightamount_base?: number | null;
  importsequencenumber?: number | null;
  invoiceid?: string | null;
  invoicenumber?: string | null;
  ispricelocked?: boolean | null;
  lastbackofficesubmit?: Date | null;
  lastonholdtime?: Date | null;
  modifiedon?: Date | null;
  name?: string | null;
  onholdtime?: number | null;
  overriddencreatedon?: Date | null;
  paymenttermscode?: invoice_paymenttermscode | null;
  pricingerrorcode?: qooi_pricingerrorcode | null;
  prioritycode?: invoice_prioritycode | null;
  processid?: string | null;
  shippingmethodcode?: invoice_shippingmethodcode | null;
  shipto_city?: string | null;
  shipto_composite?: string | null;
  shipto_country?: string | null;
  shipto_fax?: string | null;
  shipto_freighttermscode?: invoice_shipto_freighttermscode | null;
  shipto_line1?: string | null;
  shipto_line2?: string | null;
  shipto_line3?: string | null;
  shipto_name?: string | null;
  shipto_postalcode?: string | null;
  shipto_stateorprovince?: string | null;
  shipto_telephone?: string | null;
  skippricecalculation?: qooi_skippricecalculation | null;
  stageid?: string | null;
  statecode?: invoice_statecode | null;
  statuscode?: invoice_statuscode | null;
  timezoneruleversionnumber?: number | null;
  totalamount?: number | null;
  totalamount_base?: number | null;
  totalamountlessfreight?: number | null;
  totalamountlessfreight_base?: number | null;
  totaldiscountamount?: number | null;
  totaldiscountamount_base?: number | null;
  totallineitemamount?: number | null;
  totallineitemamount_base?: number | null;
  totallineitemdiscountamount?: number | null;
  totallineitemdiscountamount_base?: number | null;
  totaltax?: number | null;
  totaltax_base?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  willcall?: boolean | null;
}
interface Invoice_Relationships {
  Invoice_ActivityPointers?: ActivityPointer_Result[] | null;
  Invoice_Annotation?: Annotation_Result[] | null;
  Invoice_Appointments?: Appointment_Result[] | null;
  Invoice_AsyncOperations?: AsyncOperation_Result[] | null;
  Invoice_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Invoice_Emails?: Email_Result[] | null;
  Invoice_Faxes?: Fax_Result[] | null;
  Invoice_Letters?: Letter_Result[] | null;
  Invoice_MailboxTrackingFolder?: MailboxTrackingFolder_Result[] | null;
  Invoice_Phonecalls?: PhoneCall_Result[] | null;
  Invoice_ProcessSessions?: ProcessSession_Result[] | null;
  Invoice_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  Invoice_ServiceAppointments?: ServiceAppointment_Result[] | null;
  Invoice_SocialActivities?: SocialActivity_Result[] | null;
  Invoice_SyncErrors?: SyncError_Result[] | null;
  Invoice_Tasks?: Task_Result[] | null;
  contactinvoices_association?: Contact_Result[] | null;
  customerid_account?: Account_Result | null;
  customerid_contact?: Contact_Result | null;
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  invoice_activity_parties?: ActivityParty_Result[] | null;
  invoice_awcnpd_feedbacks?: awcnpd_feedback_Result[] | null;
  invoice_connections1?: Connection_Result[] | null;
  invoice_connections2?: Connection_Result[] | null;
  invoice_details?: InvoiceDetail_Result[] | null;
  invoice_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_playbookinstance_invoice?: msdyn_playbookinstance_Result[] | null;
  sla_invoice_sla?: SLA_Result | null;
  slainvokedid_invoice_sla?: SLA_Result | null;
  slakpiinstance_invoice?: SLAKPIInstance_Result[] | null;
  stageid_processstage?: ProcessStage_Result | null;
  userentityinstancedata_invoice?: UserEntityInstanceData_Result[] | null;
}
interface Invoice extends Invoice_Base, Invoice_Relationships {
  customerid_account_bind$accounts?: string | null;
  customerid_contact_bind$contacts?: string | null;
  opportunityid_bind$opportunities?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  pricelevelid_bind$pricelevels?: string | null;
  salesorderid_bind$salesorders?: string | null;
  sla_invoice_sla_bind$slas?: string | null;
  stageid_processstage_bind$processstages?: string | null;
}
interface Invoice_Create extends Invoice {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Invoice_Update extends Invoice {
}
interface Invoice_Select {
  accountid_guid: WebAttribute<Invoice_Select, { accountid_guid: string | null }, { accountid_formatted?: string }>;
  billto_city: WebAttribute<Invoice_Select, { billto_city: string | null }, {  }>;
  billto_composite: WebAttribute<Invoice_Select, { billto_composite: string | null }, {  }>;
  billto_country: WebAttribute<Invoice_Select, { billto_country: string | null }, {  }>;
  billto_fax: WebAttribute<Invoice_Select, { billto_fax: string | null }, {  }>;
  billto_line1: WebAttribute<Invoice_Select, { billto_line1: string | null }, {  }>;
  billto_line2: WebAttribute<Invoice_Select, { billto_line2: string | null }, {  }>;
  billto_line3: WebAttribute<Invoice_Select, { billto_line3: string | null }, {  }>;
  billto_name: WebAttribute<Invoice_Select, { billto_name: string | null }, {  }>;
  billto_postalcode: WebAttribute<Invoice_Select, { billto_postalcode: string | null }, {  }>;
  billto_stateorprovince: WebAttribute<Invoice_Select, { billto_stateorprovince: string | null }, {  }>;
  billto_telephone: WebAttribute<Invoice_Select, { billto_telephone: string | null }, {  }>;
  contactid_guid: WebAttribute<Invoice_Select, { contactid_guid: string | null }, { contactid_formatted?: string }>;
  createdby_guid: WebAttribute<Invoice_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Invoice_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Invoice_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customerid_guid: WebAttribute<Invoice_Select, { customerid_guid: string | null }, { customerid_formatted?: string }>;
  datedelivered: WebAttribute<Invoice_Select, { datedelivered: Date | null }, { datedelivered_formatted?: string }>;
  description: WebAttribute<Invoice_Select, { description: string | null }, {  }>;
  discountamount: WebAttribute<Invoice_Select, { discountamount: number | null; transactioncurrencyid_guid: string | null }, { discountamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  discountamount_base: WebAttribute<Invoice_Select, { discountamount_base: number | null; transactioncurrencyid_guid: string | null }, { discountamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  discountpercentage: WebAttribute<Invoice_Select, { discountpercentage: number | null }, {  }>;
  duedate: WebAttribute<Invoice_Select, { duedate: Date | null }, { duedate_formatted?: string }>;
  emailaddress: WebAttribute<Invoice_Select, { emailaddress: string | null }, {  }>;
  entityimageid: WebAttribute<Invoice_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Invoice_Select, { exchangerate: number | null }, {  }>;
  freightamount: WebAttribute<Invoice_Select, { freightamount: number | null; transactioncurrencyid_guid: string | null }, { freightamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  freightamount_base: WebAttribute<Invoice_Select, { freightamount_base: number | null; transactioncurrencyid_guid: string | null }, { freightamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  importsequencenumber: WebAttribute<Invoice_Select, { importsequencenumber: number | null }, {  }>;
  invoiceid: WebAttribute<Invoice_Select, { invoiceid: string | null }, {  }>;
  invoicenumber: WebAttribute<Invoice_Select, { invoicenumber: string | null }, {  }>;
  ispricelocked: WebAttribute<Invoice_Select, { ispricelocked: boolean | null }, {  }>;
  lastbackofficesubmit: WebAttribute<Invoice_Select, { lastbackofficesubmit: Date | null }, { lastbackofficesubmit_formatted?: string }>;
  lastonholdtime: WebAttribute<Invoice_Select, { lastonholdtime: Date | null }, { lastonholdtime_formatted?: string }>;
  modifiedby_guid: WebAttribute<Invoice_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Invoice_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Invoice_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Invoice_Select, { name: string | null }, {  }>;
  onholdtime: WebAttribute<Invoice_Select, { onholdtime: number | null }, {  }>;
  opportunityid_guid: WebAttribute<Invoice_Select, { opportunityid_guid: string | null }, { opportunityid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Invoice_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Invoice_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Invoice_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Invoice_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Invoice_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  paymenttermscode: WebAttribute<Invoice_Select, { paymenttermscode: invoice_paymenttermscode | null }, { paymenttermscode_formatted?: string }>;
  pricelevelid_guid: WebAttribute<Invoice_Select, { pricelevelid_guid: string | null }, { pricelevelid_formatted?: string }>;
  pricingerrorcode: WebAttribute<Invoice_Select, { pricingerrorcode: qooi_pricingerrorcode | null }, { pricingerrorcode_formatted?: string }>;
  prioritycode: WebAttribute<Invoice_Select, { prioritycode: invoice_prioritycode | null }, { prioritycode_formatted?: string }>;
  processid: WebAttribute<Invoice_Select, { processid: string | null }, {  }>;
  salesorderid_guid: WebAttribute<Invoice_Select, { salesorderid_guid: string | null }, { salesorderid_formatted?: string }>;
  shippingmethodcode: WebAttribute<Invoice_Select, { shippingmethodcode: invoice_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  shipto_city: WebAttribute<Invoice_Select, { shipto_city: string | null }, {  }>;
  shipto_composite: WebAttribute<Invoice_Select, { shipto_composite: string | null }, {  }>;
  shipto_country: WebAttribute<Invoice_Select, { shipto_country: string | null }, {  }>;
  shipto_fax: WebAttribute<Invoice_Select, { shipto_fax: string | null }, {  }>;
  shipto_freighttermscode: WebAttribute<Invoice_Select, { shipto_freighttermscode: invoice_shipto_freighttermscode | null }, { shipto_freighttermscode_formatted?: string }>;
  shipto_line1: WebAttribute<Invoice_Select, { shipto_line1: string | null }, {  }>;
  shipto_line2: WebAttribute<Invoice_Select, { shipto_line2: string | null }, {  }>;
  shipto_line3: WebAttribute<Invoice_Select, { shipto_line3: string | null }, {  }>;
  shipto_name: WebAttribute<Invoice_Select, { shipto_name: string | null }, {  }>;
  shipto_postalcode: WebAttribute<Invoice_Select, { shipto_postalcode: string | null }, {  }>;
  shipto_stateorprovince: WebAttribute<Invoice_Select, { shipto_stateorprovince: string | null }, {  }>;
  shipto_telephone: WebAttribute<Invoice_Select, { shipto_telephone: string | null }, {  }>;
  skippricecalculation: WebAttribute<Invoice_Select, { skippricecalculation: qooi_skippricecalculation | null }, { skippricecalculation_formatted?: string }>;
  slaid_guid: WebAttribute<Invoice_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  slainvokedid_guid: WebAttribute<Invoice_Select, { slainvokedid_guid: string | null }, { slainvokedid_formatted?: string }>;
  stageid: WebAttribute<Invoice_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<Invoice_Select, { statecode: invoice_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Invoice_Select, { statuscode: invoice_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<Invoice_Select, { timezoneruleversionnumber: number | null }, {  }>;
  totalamount: WebAttribute<Invoice_Select, { totalamount: number | null; transactioncurrencyid_guid: string | null }, { totalamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totalamount_base: WebAttribute<Invoice_Select, { totalamount_base: number | null; transactioncurrencyid_guid: string | null }, { totalamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totalamountlessfreight: WebAttribute<Invoice_Select, { totalamountlessfreight: number | null; transactioncurrencyid_guid: string | null }, { totalamountlessfreight_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totalamountlessfreight_base: WebAttribute<Invoice_Select, { totalamountlessfreight_base: number | null; transactioncurrencyid_guid: string | null }, { totalamountlessfreight_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totaldiscountamount: WebAttribute<Invoice_Select, { totaldiscountamount: number | null; transactioncurrencyid_guid: string | null }, { totaldiscountamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totaldiscountamount_base: WebAttribute<Invoice_Select, { totaldiscountamount_base: number | null; transactioncurrencyid_guid: string | null }, { totaldiscountamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totallineitemamount: WebAttribute<Invoice_Select, { totallineitemamount: number | null; transactioncurrencyid_guid: string | null }, { totallineitemamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totallineitemamount_base: WebAttribute<Invoice_Select, { totallineitemamount_base: number | null; transactioncurrencyid_guid: string | null }, { totallineitemamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totallineitemdiscountamount: WebAttribute<Invoice_Select, { totallineitemdiscountamount: number | null; transactioncurrencyid_guid: string | null }, { totallineitemdiscountamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totallineitemdiscountamount_base: WebAttribute<Invoice_Select, { totallineitemdiscountamount_base: number | null; transactioncurrencyid_guid: string | null }, { totallineitemdiscountamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totaltax: WebAttribute<Invoice_Select, { totaltax: number | null; transactioncurrencyid_guid: string | null }, { totaltax_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totaltax_base: WebAttribute<Invoice_Select, { totaltax_base: number | null; transactioncurrencyid_guid: string | null }, { totaltax_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<Invoice_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<Invoice_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Invoice_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Invoice_Select, { versionnumber: number | null }, {  }>;
  willcall: WebAttribute<Invoice_Select, { willcall: boolean | null }, {  }>;
}
interface Invoice_Filter {
  accountid_guid: XQW.Guid;
  billto_city: string;
  billto_composite: string;
  billto_country: string;
  billto_fax: string;
  billto_line1: string;
  billto_line2: string;
  billto_line3: string;
  billto_name: string;
  billto_postalcode: string;
  billto_stateorprovince: string;
  billto_telephone: string;
  contactid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customerid_guid: XQW.Guid;
  datedelivered: Date;
  description: string;
  discountamount: number;
  discountamount_base: number;
  discountpercentage: any;
  duedate: Date;
  emailaddress: string;
  entityimageid: XQW.Guid;
  exchangerate: any;
  freightamount: number;
  freightamount_base: number;
  importsequencenumber: number;
  invoiceid: XQW.Guid;
  invoicenumber: string;
  ispricelocked: boolean;
  lastbackofficesubmit: Date;
  lastonholdtime: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  onholdtime: number;
  opportunityid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  paymenttermscode: invoice_paymenttermscode;
  pricelevelid_guid: XQW.Guid;
  pricingerrorcode: qooi_pricingerrorcode;
  prioritycode: invoice_prioritycode;
  processid: XQW.Guid;
  salesorderid_guid: XQW.Guid;
  shippingmethodcode: invoice_shippingmethodcode;
  shipto_city: string;
  shipto_composite: string;
  shipto_country: string;
  shipto_fax: string;
  shipto_freighttermscode: invoice_shipto_freighttermscode;
  shipto_line1: string;
  shipto_line2: string;
  shipto_line3: string;
  shipto_name: string;
  shipto_postalcode: string;
  shipto_stateorprovince: string;
  shipto_telephone: string;
  skippricecalculation: qooi_skippricecalculation;
  slaid_guid: XQW.Guid;
  slainvokedid_guid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: invoice_statecode;
  statuscode: invoice_statuscode;
  timezoneruleversionnumber: number;
  totalamount: number;
  totalamount_base: number;
  totalamountlessfreight: number;
  totalamountlessfreight_base: number;
  totaldiscountamount: number;
  totaldiscountamount_base: number;
  totallineitemamount: number;
  totallineitemamount_base: number;
  totallineitemdiscountamount: number;
  totallineitemdiscountamount_base: number;
  totaltax: number;
  totaltax_base: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
  willcall: boolean;
}
interface Invoice_Expand {
  Invoice_ActivityPointers: WebExpand<Invoice_Expand, ActivityPointer_Select, ActivityPointer_Filter, { Invoice_ActivityPointers: ActivityPointer_Result[] }>;
  Invoice_Annotation: WebExpand<Invoice_Expand, Annotation_Select, Annotation_Filter, { Invoice_Annotation: Annotation_Result[] }>;
  Invoice_Appointments: WebExpand<Invoice_Expand, Appointment_Select, Appointment_Filter, { Invoice_Appointments: Appointment_Result[] }>;
  Invoice_AsyncOperations: WebExpand<Invoice_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Invoice_AsyncOperations: AsyncOperation_Result[] }>;
  Invoice_BulkDeleteFailures: WebExpand<Invoice_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Invoice_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Invoice_Emails: WebExpand<Invoice_Expand, Email_Select, Email_Filter, { Invoice_Emails: Email_Result[] }>;
  Invoice_Faxes: WebExpand<Invoice_Expand, Fax_Select, Fax_Filter, { Invoice_Faxes: Fax_Result[] }>;
  Invoice_Letters: WebExpand<Invoice_Expand, Letter_Select, Letter_Filter, { Invoice_Letters: Letter_Result[] }>;
  Invoice_MailboxTrackingFolder: WebExpand<Invoice_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { Invoice_MailboxTrackingFolder: MailboxTrackingFolder_Result[] }>;
  Invoice_Phonecalls: WebExpand<Invoice_Expand, PhoneCall_Select, PhoneCall_Filter, { Invoice_Phonecalls: PhoneCall_Result[] }>;
  Invoice_ProcessSessions: WebExpand<Invoice_Expand, ProcessSession_Select, ProcessSession_Filter, { Invoice_ProcessSessions: ProcessSession_Result[] }>;
  Invoice_RecurringAppointmentMasters: WebExpand<Invoice_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { Invoice_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  Invoice_ServiceAppointments: WebExpand<Invoice_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { Invoice_ServiceAppointments: ServiceAppointment_Result[] }>;
  Invoice_SocialActivities: WebExpand<Invoice_Expand, SocialActivity_Select, SocialActivity_Filter, { Invoice_SocialActivities: SocialActivity_Result[] }>;
  Invoice_SyncErrors: WebExpand<Invoice_Expand, SyncError_Select, SyncError_Filter, { Invoice_SyncErrors: SyncError_Result[] }>;
  Invoice_Tasks: WebExpand<Invoice_Expand, Task_Select, Task_Filter, { Invoice_Tasks: Task_Result[] }>;
  contactinvoices_association: WebExpand<Invoice_Expand, Contact_Select, Contact_Filter, { contactinvoices_association: Contact_Result[] }>;
  createdby: WebExpand<Invoice_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Invoice_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customerid_account: WebExpand<Invoice_Expand, Account_Select, Account_Filter, { customerid_account: Account_Result }>;
  customerid_contact: WebExpand<Invoice_Expand, Contact_Select, Contact_Filter, { customerid_contact: Contact_Result }>;
  entityimageid_imagedescriptor: WebExpand<Invoice_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  invoice_activity_parties: WebExpand<Invoice_Expand, ActivityParty_Select, ActivityParty_Filter, { invoice_activity_parties: ActivityParty_Result[] }>;
  invoice_awcnpd_feedbacks: WebExpand<Invoice_Expand, awcnpd_feedback_Select, awcnpd_feedback_Filter, { invoice_awcnpd_feedbacks: awcnpd_feedback_Result[] }>;
  invoice_connections1: WebExpand<Invoice_Expand, Connection_Select, Connection_Filter, { invoice_connections1: Connection_Result[] }>;
  invoice_connections2: WebExpand<Invoice_Expand, Connection_Select, Connection_Filter, { invoice_connections2: Connection_Result[] }>;
  invoice_details: WebExpand<Invoice_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { invoice_details: InvoiceDetail_Result[] }>;
  invoice_principalobjectattributeaccess: WebExpand<Invoice_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { invoice_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby: WebExpand<Invoice_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Invoice_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_playbookinstance_invoice: WebExpand<Invoice_Expand, msdyn_playbookinstance_Select, msdyn_playbookinstance_Filter, { msdyn_playbookinstance_invoice: msdyn_playbookinstance_Result[] }>;
  opportunityid: WebExpand<Invoice_Expand, Opportunity_Select, Opportunity_Filter, { opportunityid: Opportunity_Result }>;
  ownerid: WebExpand<Invoice_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Invoice_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<Invoice_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<Invoice_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  pricelevelid: WebExpand<Invoice_Expand, PriceLevel_Select, PriceLevel_Filter, { pricelevelid: PriceLevel_Result }>;
  salesorderid: WebExpand<Invoice_Expand, SalesOrder_Select, SalesOrder_Filter, { salesorderid: SalesOrder_Result }>;
  sla_invoice_sla: WebExpand<Invoice_Expand, SLA_Select, SLA_Filter, { sla_invoice_sla: SLA_Result }>;
  slainvokedid_invoice_sla: WebExpand<Invoice_Expand, SLA_Select, SLA_Filter, { slainvokedid_invoice_sla: SLA_Result }>;
  slakpiinstance_invoice: WebExpand<Invoice_Expand, SLAKPIInstance_Select, SLAKPIInstance_Filter, { slakpiinstance_invoice: SLAKPIInstance_Result[] }>;
  stageid_processstage: WebExpand<Invoice_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid_processstage: ProcessStage_Result }>;
  transactioncurrencyid: WebExpand<Invoice_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_invoice: WebExpand<Invoice_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_invoice: UserEntityInstanceData_Result[] }>;
}
interface Invoice_FormattedResult {
  accountid_formatted?: string;
  contactid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customerid_formatted?: string;
  datedelivered_formatted?: string;
  discountamount_base_formatted?: string;
  discountamount_formatted?: string;
  duedate_formatted?: string;
  freightamount_base_formatted?: string;
  freightamount_formatted?: string;
  lastbackofficesubmit_formatted?: string;
  lastonholdtime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opportunityid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  paymenttermscode_formatted?: string;
  pricelevelid_formatted?: string;
  pricingerrorcode_formatted?: string;
  prioritycode_formatted?: string;
  salesorderid_formatted?: string;
  shippingmethodcode_formatted?: string;
  shipto_freighttermscode_formatted?: string;
  skippricecalculation_formatted?: string;
  slaid_formatted?: string;
  slainvokedid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  totalamount_base_formatted?: string;
  totalamount_formatted?: string;
  totalamountlessfreight_base_formatted?: string;
  totalamountlessfreight_formatted?: string;
  totaldiscountamount_base_formatted?: string;
  totaldiscountamount_formatted?: string;
  totallineitemamount_base_formatted?: string;
  totallineitemamount_formatted?: string;
  totallineitemdiscountamount_base_formatted?: string;
  totallineitemdiscountamount_formatted?: string;
  totaltax_base_formatted?: string;
  totaltax_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Invoice_Result extends Invoice_Base, Invoice_Relationships {
  "@odata.etag": string;
  accountid_guid: string | null;
  contactid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  customerid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opportunityid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  pricelevelid_guid: string | null;
  salesorderid_guid: string | null;
  slaid_guid: string | null;
  slainvokedid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Invoice_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  customerid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  customerid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opportunityid: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  pricelevelid: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  salesorderid: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  sla_invoice_sla: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  slainvokedid_invoice_sla: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  stageid_processstage: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Invoice_RelatedMany {
  Invoice_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  Invoice_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  Invoice_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  Invoice_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Invoice_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Invoice_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  Invoice_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  Invoice_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  Invoice_MailboxTrackingFolder: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  Invoice_Phonecalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  Invoice_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Invoice_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  Invoice_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  Invoice_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  Invoice_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  Invoice_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  contactinvoices_association: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  invoice_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  invoice_awcnpd_feedbacks: WebMappingRetrieve<awcnpd_feedback_Select,awcnpd_feedback_Expand,awcnpd_feedback_Filter,awcnpd_feedback_Fixed,awcnpd_feedback_Result,awcnpd_feedback_FormattedResult>;
  invoice_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  invoice_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  invoice_details: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
  invoice_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_playbookinstance_invoice: WebMappingRetrieve<msdyn_playbookinstance_Select,msdyn_playbookinstance_Expand,msdyn_playbookinstance_Filter,msdyn_playbookinstance_Fixed,msdyn_playbookinstance_Result,msdyn_playbookinstance_FormattedResult>;
  slakpiinstance_invoice: WebMappingRetrieve<SLAKPIInstance_Select,SLAKPIInstance_Expand,SLAKPIInstance_Filter,SLAKPIInstance_Fixed,SLAKPIInstance_Result,SLAKPIInstance_FormattedResult>;
  userentityinstancedata_invoice: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  invoices: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
}
interface WebEntitiesRelated {
  invoices: WebMappingRelated<Invoice_RelatedOne,Invoice_RelatedMany>;
}
interface WebEntitiesCUDA {
  invoices: WebMappingCUDA<Invoice_Create,Invoice_Update,Invoice_Select>;
}
