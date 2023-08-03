interface PriceLevel_Base extends WebEntity {
  begindate?: Date | null;
  createdon?: Date | null;
  description?: string | null;
  enddate?: Date | null;
  exchangerate?: number | null;
  freighttermscode?: pricelevel_freighttermscode | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  paymentmethodcode?: pricelevel_paymentmethodcode | null;
  pricelevelid?: string | null;
  shippingmethodcode?: pricelevel_shippingmethodcode | null;
  statecode?: pricelevel_statecode | null;
  statuscode?: pricelevel_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface PriceLevel_Relationships {
  PriceLevel_AsyncOperations?: AsyncOperation_Result[] | null;
  PriceLevel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  PriceLevel_ProcessSessions?: ProcessSession_Result[] | null;
  PriceLevel_SyncErrors?: SyncError_Result[] | null;
  PriceList_Campaigns?: Campaign_Result[] | null;
  price_level_accounts?: Account_Result[] | null;
  price_level_contacts?: Contact_Result[] | null;
  price_level_invoices?: Invoice_Result[] | null;
  price_level_opportunties?: Opportunity_Result[] | null;
  price_level_orders?: SalesOrder_Result[] | null;
  price_level_product_price_levels?: ProductPriceLevel_Result[] | null;
  price_level_products?: Product_Result[] | null;
  price_level_quotes?: Quote_Result[] | null;
  pricelevel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  pricelevel_connections1?: Connection_Result[] | null;
  pricelevel_connections2?: Connection_Result[] | null;
  pricelevel_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_pricelevel?: UserEntityInstanceData_Result[] | null;
}
interface PriceLevel extends PriceLevel_Base, PriceLevel_Relationships {
}
interface PriceLevel_Create extends PriceLevel {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface PriceLevel_Update extends PriceLevel {
}
interface PriceLevel_Select {
  begindate: WebAttribute<PriceLevel_Select, { begindate: Date | null }, { begindate_formatted?: string }>;
  createdby_guid: WebAttribute<PriceLevel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PriceLevel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PriceLevel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<PriceLevel_Select, { description: string | null }, {  }>;
  enddate: WebAttribute<PriceLevel_Select, { enddate: Date | null }, { enddate_formatted?: string }>;
  exchangerate: WebAttribute<PriceLevel_Select, { exchangerate: number | null }, {  }>;
  freighttermscode: WebAttribute<PriceLevel_Select, { freighttermscode: pricelevel_freighttermscode | null }, { freighttermscode_formatted?: string }>;
  importsequencenumber: WebAttribute<PriceLevel_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<PriceLevel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<PriceLevel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<PriceLevel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<PriceLevel_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<PriceLevel_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<PriceLevel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  paymentmethodcode: WebAttribute<PriceLevel_Select, { paymentmethodcode: pricelevel_paymentmethodcode | null }, { paymentmethodcode_formatted?: string }>;
  pricelevelid: WebAttribute<PriceLevel_Select, { pricelevelid: string | null }, {  }>;
  shippingmethodcode: WebAttribute<PriceLevel_Select, { shippingmethodcode: pricelevel_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  statecode: WebAttribute<PriceLevel_Select, { statecode: pricelevel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<PriceLevel_Select, { statuscode: pricelevel_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<PriceLevel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<PriceLevel_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<PriceLevel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<PriceLevel_Select, { versionnumber: number | null }, {  }>;
}
interface PriceLevel_Filter {
  begindate: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  enddate: Date;
  exchangerate: any;
  freighttermscode: pricelevel_freighttermscode;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  paymentmethodcode: pricelevel_paymentmethodcode;
  pricelevelid: XQW.Guid;
  shippingmethodcode: pricelevel_shippingmethodcode;
  statecode: pricelevel_statecode;
  statuscode: pricelevel_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface PriceLevel_Expand {
  PriceLevel_AsyncOperations: WebExpand<PriceLevel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { PriceLevel_AsyncOperations: AsyncOperation_Result[] }>;
  PriceLevel_BulkDeleteFailures: WebExpand<PriceLevel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { PriceLevel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  PriceLevel_ProcessSessions: WebExpand<PriceLevel_Expand, ProcessSession_Select, ProcessSession_Filter, { PriceLevel_ProcessSessions: ProcessSession_Result[] }>;
  PriceLevel_SyncErrors: WebExpand<PriceLevel_Expand, SyncError_Select, SyncError_Filter, { PriceLevel_SyncErrors: SyncError_Result[] }>;
  PriceList_Campaigns: WebExpand<PriceLevel_Expand, Campaign_Select, Campaign_Filter, { PriceList_Campaigns: Campaign_Result[] }>;
  createdby: WebExpand<PriceLevel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PriceLevel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<PriceLevel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<PriceLevel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<PriceLevel_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  price_level_accounts: WebExpand<PriceLevel_Expand, Account_Select, Account_Filter, { price_level_accounts: Account_Result[] }>;
  price_level_contacts: WebExpand<PriceLevel_Expand, Contact_Select, Contact_Filter, { price_level_contacts: Contact_Result[] }>;
  price_level_invoices: WebExpand<PriceLevel_Expand, Invoice_Select, Invoice_Filter, { price_level_invoices: Invoice_Result[] }>;
  price_level_opportunties: WebExpand<PriceLevel_Expand, Opportunity_Select, Opportunity_Filter, { price_level_opportunties: Opportunity_Result[] }>;
  price_level_orders: WebExpand<PriceLevel_Expand, SalesOrder_Select, SalesOrder_Filter, { price_level_orders: SalesOrder_Result[] }>;
  price_level_product_price_levels: WebExpand<PriceLevel_Expand, ProductPriceLevel_Select, ProductPriceLevel_Filter, { price_level_product_price_levels: ProductPriceLevel_Result[] }>;
  price_level_products: WebExpand<PriceLevel_Expand, Product_Select, Product_Filter, { price_level_products: Product_Result[] }>;
  price_level_quotes: WebExpand<PriceLevel_Expand, Quote_Select, Quote_Filter, { price_level_quotes: Quote_Result[] }>;
  pricelevel_MailboxTrackingFolders: WebExpand<PriceLevel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { pricelevel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  pricelevel_connections1: WebExpand<PriceLevel_Expand, Connection_Select, Connection_Filter, { pricelevel_connections1: Connection_Result[] }>;
  pricelevel_connections2: WebExpand<PriceLevel_Expand, Connection_Select, Connection_Filter, { pricelevel_connections2: Connection_Result[] }>;
  pricelevel_principalobjectattributeaccess: WebExpand<PriceLevel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { pricelevel_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  transactioncurrencyid: WebExpand<PriceLevel_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_pricelevel: WebExpand<PriceLevel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_pricelevel: UserEntityInstanceData_Result[] }>;
}
interface PriceLevel_FormattedResult {
  begindate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  enddate_formatted?: string;
  freighttermscode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  paymentmethodcode_formatted?: string;
  shippingmethodcode_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface PriceLevel_Result extends PriceLevel_Base, PriceLevel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface PriceLevel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface PriceLevel_RelatedMany {
  PriceLevel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  PriceLevel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  PriceLevel_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  PriceLevel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  PriceList_Campaigns: WebMappingRetrieve<Campaign_Select,Campaign_Expand,Campaign_Filter,Campaign_Fixed,Campaign_Result,Campaign_FormattedResult>;
  price_level_accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  price_level_contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  price_level_invoices: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  price_level_opportunties: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  price_level_orders: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  price_level_product_price_levels: WebMappingRetrieve<ProductPriceLevel_Select,ProductPriceLevel_Expand,ProductPriceLevel_Filter,ProductPriceLevel_Fixed,ProductPriceLevel_Result,ProductPriceLevel_FormattedResult>;
  price_level_products: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  price_level_quotes: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  pricelevel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  pricelevel_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  pricelevel_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  pricelevel_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_pricelevel: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  pricelevels: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
}
interface WebEntitiesRelated {
  pricelevels: WebMappingRelated<PriceLevel_RelatedOne,PriceLevel_RelatedMany>;
}
interface WebEntitiesCUDA {
  pricelevels: WebMappingCUDA<PriceLevel_Create,PriceLevel_Update,PriceLevel_Select>;
}
