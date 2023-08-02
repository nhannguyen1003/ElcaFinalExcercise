interface Contract_Base extends WebEntity {
  activeon?: Date | null;
  allotmenttypecode?: contract_allotmenttypecode | null;
  billingendon?: Date | null;
  billingfrequencycode?: contract_billingfrequencycode | null;
  billingstarton?: Date | null;
  cancelon?: Date | null;
  contractid?: string | null;
  contractlanguage?: string | null;
  contractnumber?: string | null;
  contractservicelevelcode?: contract_contractservicelevelcode | null;
  contracttemplateabbreviation?: string | null;
  createdon?: Date | null;
  duration?: number | null;
  effectivitycalendar?: string | null;
  emailaddress?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  expireson?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  netprice?: number | null;
  netprice_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: contract_statecode | null;
  statuscode?: contract_statuscode | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  totaldiscount?: number | null;
  totaldiscount_base?: number | null;
  totalprice?: number | null;
  totalprice_base?: number | null;
  transactioncurrencyid_guid?: string | null;
  usediscountaspercentage?: boolean | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Contract_Relationships {
  Contract_ActivityPointers?: ActivityPointer_Result[] | null;
  Contract_Annotation?: Annotation_Result[] | null;
  Contract_Appointments?: Appointment_Result[] | null;
  Contract_AsyncOperations?: AsyncOperation_Result[] | null;
  Contract_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Contract_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  Contract_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  Contract_Emails?: Email_Result[] | null;
  Contract_Faxes?: Fax_Result[] | null;
  Contract_Letters?: Letter_Result[] | null;
  Contract_MailboxTrackingFolder?: MailboxTrackingFolder_Result[] | null;
  Contract_Phonecalls?: PhoneCall_Result[] | null;
  Contract_ProcessSessions?: ProcessSession_Result[] | null;
  Contract_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  Contract_ServiceAppointments?: ServiceAppointment_Result[] | null;
  Contract_SocialActivities?: SocialActivity_Result[] | null;
  Contract_SyncErrors?: SyncError_Result[] | null;
  Contract_Tasks?: Task_Result[] | null;
  billingcustomerid_account?: Account_Result | null;
  billingcustomerid_contact?: Contact_Result | null;
  contract_activity_parties?: ActivityParty_Result[] | null;
  contract_awcnpd_feedbacks?: awcnpd_feedback_Result[] | null;
  contract_cases?: Incident_Result[] | null;
  contract_connections1?: Connection_Result[] | null;
  contract_connections2?: Connection_Result[] | null;
  contract_line_items?: ContractDetail_Result[] | null;
  contract_originating_contract?: Contract_Result[] | null;
  contract_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  customerid_account?: Account_Result | null;
  customerid_contact?: Contact_Result | null;
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  servicecontractcontacts_association?: Contact_Result[] | null;
  userentityinstancedata_contract?: UserEntityInstanceData_Result[] | null;
}
interface Contract extends Contract_Base, Contract_Relationships {
  billingcustomerid_account_bind$accounts?: string | null;
  billingcustomerid_contact_bind$contacts?: string | null;
  billtoaddress_bind$customeraddresses?: string | null;
  contracttemplateid_bind$contracttemplates?: string | null;
  customerid_account_bind$accounts?: string | null;
  customerid_contact_bind$contacts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  serviceaddress_bind$customeraddresses?: string | null;
}
interface Contract_Create extends Contract {
  originatingcontract_bind$contracts?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Contract_Update extends Contract {
}
interface Contract_Select {
  accountid_guid: WebAttribute<Contract_Select, { accountid_guid: string | null }, { accountid_formatted?: string }>;
  activeon: WebAttribute<Contract_Select, { activeon: Date | null }, { activeon_formatted?: string }>;
  allotmenttypecode: WebAttribute<Contract_Select, { allotmenttypecode: contract_allotmenttypecode | null }, { allotmenttypecode_formatted?: string }>;
  billingaccountid_guid: WebAttribute<Contract_Select, { billingaccountid_guid: string | null }, { billingaccountid_formatted?: string }>;
  billingcontactid_guid: WebAttribute<Contract_Select, { billingcontactid_guid: string | null }, { billingcontactid_formatted?: string }>;
  billingcustomerid_guid: WebAttribute<Contract_Select, { billingcustomerid_guid: string | null }, { billingcustomerid_formatted?: string }>;
  billingendon: WebAttribute<Contract_Select, { billingendon: Date | null }, { billingendon_formatted?: string }>;
  billingfrequencycode: WebAttribute<Contract_Select, { billingfrequencycode: contract_billingfrequencycode | null }, { billingfrequencycode_formatted?: string }>;
  billingstarton: WebAttribute<Contract_Select, { billingstarton: Date | null }, { billingstarton_formatted?: string }>;
  billtoaddress_guid: WebAttribute<Contract_Select, { billtoaddress_guid: string | null }, { billtoaddress_formatted?: string }>;
  cancelon: WebAttribute<Contract_Select, { cancelon: Date | null }, { cancelon_formatted?: string }>;
  contactid_guid: WebAttribute<Contract_Select, { contactid_guid: string | null }, { contactid_formatted?: string }>;
  contractid: WebAttribute<Contract_Select, { contractid: string | null }, {  }>;
  contractlanguage: WebAttribute<Contract_Select, { contractlanguage: string | null }, {  }>;
  contractnumber: WebAttribute<Contract_Select, { contractnumber: string | null }, {  }>;
  contractservicelevelcode: WebAttribute<Contract_Select, { contractservicelevelcode: contract_contractservicelevelcode | null }, { contractservicelevelcode_formatted?: string }>;
  contracttemplateabbreviation: WebAttribute<Contract_Select, { contracttemplateabbreviation: string | null }, {  }>;
  contracttemplateid_guid: WebAttribute<Contract_Select, { contracttemplateid_guid: string | null }, { contracttemplateid_formatted?: string }>;
  createdby_guid: WebAttribute<Contract_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Contract_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Contract_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customerid_guid: WebAttribute<Contract_Select, { customerid_guid: string | null }, { customerid_formatted?: string }>;
  duration: WebAttribute<Contract_Select, { duration: number | null }, {  }>;
  effectivitycalendar: WebAttribute<Contract_Select, { effectivitycalendar: string | null }, {  }>;
  emailaddress: WebAttribute<Contract_Select, { emailaddress: string | null }, {  }>;
  entityimageid: WebAttribute<Contract_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<Contract_Select, { exchangerate: number | null }, {  }>;
  expireson: WebAttribute<Contract_Select, { expireson: Date | null }, { expireson_formatted?: string }>;
  importsequencenumber: WebAttribute<Contract_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<Contract_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Contract_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Contract_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  netprice: WebAttribute<Contract_Select, { netprice: number | null; transactioncurrencyid_guid: string | null }, { netprice_formatted?: string; transactioncurrencyid_formatted?: string }>;
  netprice_base: WebAttribute<Contract_Select, { netprice_base: number | null; transactioncurrencyid_guid: string | null }, { netprice_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  originatingcontract_guid: WebAttribute<Contract_Select, { originatingcontract_guid: string | null }, { originatingcontract_formatted?: string }>;
  overriddencreatedon: WebAttribute<Contract_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Contract_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Contract_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Contract_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Contract_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  serviceaddress_guid: WebAttribute<Contract_Select, { serviceaddress_guid: string | null }, { serviceaddress_formatted?: string }>;
  statecode: WebAttribute<Contract_Select, { statecode: contract_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Contract_Select, { statuscode: contract_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<Contract_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<Contract_Select, { title: string | null }, {  }>;
  totaldiscount: WebAttribute<Contract_Select, { totaldiscount: number | null; transactioncurrencyid_guid: string | null }, { totaldiscount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totaldiscount_base: WebAttribute<Contract_Select, { totaldiscount_base: number | null; transactioncurrencyid_guid: string | null }, { totaldiscount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totalprice: WebAttribute<Contract_Select, { totalprice: number | null; transactioncurrencyid_guid: string | null }, { totalprice_formatted?: string; transactioncurrencyid_formatted?: string }>;
  totalprice_base: WebAttribute<Contract_Select, { totalprice_base: number | null; transactioncurrencyid_guid: string | null }, { totalprice_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<Contract_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  usediscountaspercentage: WebAttribute<Contract_Select, { usediscountaspercentage: boolean | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Contract_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Contract_Select, { versionnumber: number | null }, {  }>;
}
interface Contract_Filter {
  accountid_guid: XQW.Guid;
  activeon: Date;
  allotmenttypecode: contract_allotmenttypecode;
  billingaccountid_guid: XQW.Guid;
  billingcontactid_guid: XQW.Guid;
  billingcustomerid_guid: XQW.Guid;
  billingendon: Date;
  billingfrequencycode: contract_billingfrequencycode;
  billingstarton: Date;
  billtoaddress_guid: XQW.Guid;
  cancelon: Date;
  contactid_guid: XQW.Guid;
  contractid: XQW.Guid;
  contractlanguage: string;
  contractnumber: string;
  contractservicelevelcode: contract_contractservicelevelcode;
  contracttemplateabbreviation: string;
  contracttemplateid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customerid_guid: XQW.Guid;
  duration: number;
  effectivitycalendar: string;
  emailaddress: string;
  entityimageid: XQW.Guid;
  exchangerate: any;
  expireson: Date;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  netprice: number;
  netprice_base: number;
  originatingcontract_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  serviceaddress_guid: XQW.Guid;
  statecode: contract_statecode;
  statuscode: contract_statuscode;
  timezoneruleversionnumber: number;
  title: string;
  totaldiscount: number;
  totaldiscount_base: number;
  totalprice: number;
  totalprice_base: number;
  transactioncurrencyid_guid: XQW.Guid;
  usediscountaspercentage: boolean;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Contract_Expand {
  Contract_ActivityPointers: WebExpand<Contract_Expand, ActivityPointer_Select, ActivityPointer_Filter, { Contract_ActivityPointers: ActivityPointer_Result[] }>;
  Contract_Annotation: WebExpand<Contract_Expand, Annotation_Select, Annotation_Filter, { Contract_Annotation: Annotation_Result[] }>;
  Contract_Appointments: WebExpand<Contract_Expand, Appointment_Select, Appointment_Filter, { Contract_Appointments: Appointment_Result[] }>;
  Contract_AsyncOperations: WebExpand<Contract_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Contract_AsyncOperations: AsyncOperation_Result[] }>;
  Contract_BulkDeleteFailures: WebExpand<Contract_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Contract_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Contract_DuplicateBaseRecord: WebExpand<Contract_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Contract_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  Contract_DuplicateMatchingRecord: WebExpand<Contract_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Contract_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  Contract_Emails: WebExpand<Contract_Expand, Email_Select, Email_Filter, { Contract_Emails: Email_Result[] }>;
  Contract_Faxes: WebExpand<Contract_Expand, Fax_Select, Fax_Filter, { Contract_Faxes: Fax_Result[] }>;
  Contract_Letters: WebExpand<Contract_Expand, Letter_Select, Letter_Filter, { Contract_Letters: Letter_Result[] }>;
  Contract_MailboxTrackingFolder: WebExpand<Contract_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { Contract_MailboxTrackingFolder: MailboxTrackingFolder_Result[] }>;
  Contract_Phonecalls: WebExpand<Contract_Expand, PhoneCall_Select, PhoneCall_Filter, { Contract_Phonecalls: PhoneCall_Result[] }>;
  Contract_ProcessSessions: WebExpand<Contract_Expand, ProcessSession_Select, ProcessSession_Filter, { Contract_ProcessSessions: ProcessSession_Result[] }>;
  Contract_RecurringAppointmentMasters: WebExpand<Contract_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { Contract_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  Contract_ServiceAppointments: WebExpand<Contract_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { Contract_ServiceAppointments: ServiceAppointment_Result[] }>;
  Contract_SocialActivities: WebExpand<Contract_Expand, SocialActivity_Select, SocialActivity_Filter, { Contract_SocialActivities: SocialActivity_Result[] }>;
  Contract_SyncErrors: WebExpand<Contract_Expand, SyncError_Select, SyncError_Filter, { Contract_SyncErrors: SyncError_Result[] }>;
  Contract_Tasks: WebExpand<Contract_Expand, Task_Select, Task_Filter, { Contract_Tasks: Task_Result[] }>;
  billingcustomerid_account: WebExpand<Contract_Expand, Account_Select, Account_Filter, { billingcustomerid_account: Account_Result }>;
  billingcustomerid_contact: WebExpand<Contract_Expand, Contact_Select, Contact_Filter, { billingcustomerid_contact: Contact_Result }>;
  billtoaddress: WebExpand<Contract_Expand, CustomerAddress_Select, CustomerAddress_Filter, { billtoaddress: CustomerAddress_Result }>;
  contract_activity_parties: WebExpand<Contract_Expand, ActivityParty_Select, ActivityParty_Filter, { contract_activity_parties: ActivityParty_Result[] }>;
  contract_awcnpd_feedbacks: WebExpand<Contract_Expand, awcnpd_feedback_Select, awcnpd_feedback_Filter, { contract_awcnpd_feedbacks: awcnpd_feedback_Result[] }>;
  contract_cases: WebExpand<Contract_Expand, Incident_Select, Incident_Filter, { contract_cases: Incident_Result[] }>;
  contract_connections1: WebExpand<Contract_Expand, Connection_Select, Connection_Filter, { contract_connections1: Connection_Result[] }>;
  contract_connections2: WebExpand<Contract_Expand, Connection_Select, Connection_Filter, { contract_connections2: Connection_Result[] }>;
  contract_line_items: WebExpand<Contract_Expand, ContractDetail_Select, ContractDetail_Filter, { contract_line_items: ContractDetail_Result[] }>;
  contract_originating_contract: WebExpand<Contract_Expand, Contract_Select, Contract_Filter, { contract_originating_contract: Contract_Result[] }>;
  contract_principalobjectattributeaccess: WebExpand<Contract_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { contract_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  contracttemplateid: WebExpand<Contract_Expand, ContractTemplate_Select, ContractTemplate_Filter, { contracttemplateid: ContractTemplate_Result }>;
  createdby: WebExpand<Contract_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Contract_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customerid_account: WebExpand<Contract_Expand, Account_Select, Account_Filter, { customerid_account: Account_Result }>;
  customerid_contact: WebExpand<Contract_Expand, Contact_Select, Contact_Filter, { customerid_contact: Contact_Result }>;
  entityimageid_imagedescriptor: WebExpand<Contract_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  modifiedby: WebExpand<Contract_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Contract_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  originatingcontract: WebExpand<Contract_Expand, Contract_Select, Contract_Filter, { originatingcontract: Contract_Result }>;
  ownerid: WebExpand<Contract_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Contract_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<Contract_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<Contract_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  serviceaddress: WebExpand<Contract_Expand, CustomerAddress_Select, CustomerAddress_Filter, { serviceaddress: CustomerAddress_Result }>;
  servicecontractcontacts_association: WebExpand<Contract_Expand, Contact_Select, Contact_Filter, { servicecontractcontacts_association: Contact_Result[] }>;
  transactioncurrencyid: WebExpand<Contract_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_contract: WebExpand<Contract_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_contract: UserEntityInstanceData_Result[] }>;
}
interface Contract_FormattedResult {
  accountid_formatted?: string;
  activeon_formatted?: string;
  allotmenttypecode_formatted?: string;
  billingaccountid_formatted?: string;
  billingcontactid_formatted?: string;
  billingcustomerid_formatted?: string;
  billingendon_formatted?: string;
  billingfrequencycode_formatted?: string;
  billingstarton_formatted?: string;
  billtoaddress_formatted?: string;
  cancelon_formatted?: string;
  contactid_formatted?: string;
  contractservicelevelcode_formatted?: string;
  contracttemplateid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customerid_formatted?: string;
  expireson_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  netprice_base_formatted?: string;
  netprice_formatted?: string;
  originatingcontract_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  serviceaddress_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  totaldiscount_base_formatted?: string;
  totaldiscount_formatted?: string;
  totalprice_base_formatted?: string;
  totalprice_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Contract_Result extends Contract_Base, Contract_Relationships {
  "@odata.etag": string;
  accountid_guid: string | null;
  billingaccountid_guid: string | null;
  billingcontactid_guid: string | null;
  billingcustomerid_guid: string | null;
  billtoaddress_guid: string | null;
  contactid_guid: string | null;
  contracttemplateid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  customerid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  originatingcontract_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  serviceaddress_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Contract_RelatedOne {
  billingcustomerid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  billingcustomerid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  billtoaddress: WebMappingRetrieve<CustomerAddress_Select,CustomerAddress_Expand,CustomerAddress_Filter,CustomerAddress_Fixed,CustomerAddress_Result,CustomerAddress_FormattedResult>;
  contracttemplateid: WebMappingRetrieve<ContractTemplate_Select,ContractTemplate_Expand,ContractTemplate_Filter,ContractTemplate_Fixed,ContractTemplate_Result,ContractTemplate_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  customerid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  customerid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  originatingcontract: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  serviceaddress: WebMappingRetrieve<CustomerAddress_Select,CustomerAddress_Expand,CustomerAddress_Filter,CustomerAddress_Fixed,CustomerAddress_Result,CustomerAddress_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Contract_RelatedMany {
  Contract_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  Contract_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  Contract_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  Contract_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Contract_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Contract_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Contract_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Contract_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  Contract_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  Contract_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  Contract_MailboxTrackingFolder: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  Contract_Phonecalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  Contract_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Contract_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  Contract_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  Contract_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  Contract_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  Contract_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  contract_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  contract_awcnpd_feedbacks: WebMappingRetrieve<awcnpd_feedback_Select,awcnpd_feedback_Expand,awcnpd_feedback_Filter,awcnpd_feedback_Fixed,awcnpd_feedback_Result,awcnpd_feedback_FormattedResult>;
  contract_cases: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  contract_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  contract_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  contract_line_items: WebMappingRetrieve<ContractDetail_Select,ContractDetail_Expand,ContractDetail_Filter,ContractDetail_Fixed,ContractDetail_Result,ContractDetail_FormattedResult>;
  contract_originating_contract: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
  contract_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  servicecontractcontacts_association: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  userentityinstancedata_contract: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  contracts: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
}
interface WebEntitiesRelated {
  contracts: WebMappingRelated<Contract_RelatedOne,Contract_RelatedMany>;
}
interface WebEntitiesCUDA {
  contracts: WebMappingCUDA<Contract_Create,Contract_Update,Contract_Select>;
}
