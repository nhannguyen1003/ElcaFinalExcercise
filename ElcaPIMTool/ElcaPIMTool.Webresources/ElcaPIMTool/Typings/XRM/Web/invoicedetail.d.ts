interface InvoiceDetail_Base extends WebEntity {
  actualdeliveryon?: Date | null;
  baseamount?: number | null;
  baseamount_base?: number | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  extendedamount?: number | null;
  extendedamount_base?: number | null;
  importsequencenumber?: number | null;
  invoicedetailid?: string | null;
  invoicedetailname?: string | null;
  invoiceispricelocked?: boolean | null;
  invoicestatecode?: invoicedetail_invoicestatecode | null;
  iscopied?: boolean | null;
  ispriceoverridden?: boolean | null;
  isproductoverridden?: boolean | null;
  lineitemnumber?: number | null;
  manualdiscountamount?: number | null;
  manualdiscountamount_base?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  parentbundleid?: string | null;
  priceperunit?: number | null;
  priceperunit_base?: number | null;
  pricingerrorcode?: qooi_pricingerrorcode | null;
  productassociationid?: string | null;
  productdescription?: string | null;
  productname?: string | null;
  productnumber?: string | null;
  producttypecode?: qooiproduct_producttype | null;
  propertyconfigurationstatus?: qooiproduct_propertiesconfigurationstatus | null;
  quantity?: number | null;
  quantitybackordered?: number | null;
  quantitycancelled?: number | null;
  quantityshipped?: number | null;
  sequencenumber?: number | null;
  shippingtrackingnumber?: string | null;
  shipto_city?: string | null;
  shipto_country?: string | null;
  shipto_fax?: string | null;
  shipto_freighttermscode?: invoicedetail_shipto_freighttermscode | null;
  shipto_line1?: string | null;
  shipto_line2?: string | null;
  shipto_line3?: string | null;
  shipto_name?: string | null;
  shipto_postalcode?: string | null;
  shipto_stateorprovince?: string | null;
  shipto_telephone?: string | null;
  skippricecalculation?: qooidetail_skippricecalculation | null;
  tax?: number | null;
  tax_base?: number | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  volumediscountamount?: number | null;
  volumediscountamount_base?: number | null;
  willcall?: boolean | null;
}
interface InvoiceDetail_Relationships {
  InvoiceDetail_AsyncOperations?: AsyncOperation_Result[] | null;
  InvoiceDetail_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  InvoiceDetail_Dynamicpropertyinstance?: DynamicPropertyInstance_Result[] | null;
  InvoiceDetail_ProcessSessions?: ProcessSession_Result[] | null;
  InvoiceDetail_SyncErrors?: SyncError_Result[] | null;
  SalesOrderDetailId?: SalesOrderDetail_Result | null;
  invoicedetail_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  invoicedetail_parent_invoicedetail?: InvoiceDetail_Result[] | null;
  invoicedetail_parentref_invoicedetail?: InvoiceDetail_Result[] | null;
  invoicedetail_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  parentbundleid_invoicedetail?: InvoiceDetail_Result | null;
  parentbundleidref_invoicedetail?: InvoiceDetail_Result | null;
  productassociationid_productassociation?: ProductAssociation_Result | null;
  userentityinstancedata_invoicedetail?: UserEntityInstanceData_Result[] | null;
}
interface InvoiceDetail extends InvoiceDetail_Base, InvoiceDetail_Relationships {
  SalesOrderDetailId_bind$salesorderdetails?: string | null;
  invoiceid_bind$invoices?: string | null;
  parentbundleidref_invoicedetail_bind$invoicedetails?: string | null;
  productid_bind$products?: string | null;
  salesrepid_bind$systemusers?: string | null;
  uomid_bind$uoms?: string | null;
}
interface InvoiceDetail_Create extends InvoiceDetail {
  parentbundleid_invoicedetail_bind$invoicedetails?: string | null;
  productassociationid_productassociation_bind$productassociations?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface InvoiceDetail_Update extends InvoiceDetail {
}
interface InvoiceDetail_Select {
  actualdeliveryon: WebAttribute<InvoiceDetail_Select, { actualdeliveryon: Date | null }, { actualdeliveryon_formatted?: string }>;
  baseamount: WebAttribute<InvoiceDetail_Select, { baseamount: number | null; transactioncurrencyid_guid: string | null }, { baseamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  baseamount_base: WebAttribute<InvoiceDetail_Select, { baseamount_base: number | null; transactioncurrencyid_guid: string | null }, { baseamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  createdby_guid: WebAttribute<InvoiceDetail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<InvoiceDetail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<InvoiceDetail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<InvoiceDetail_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<InvoiceDetail_Select, { exchangerate: number | null }, {  }>;
  extendedamount: WebAttribute<InvoiceDetail_Select, { extendedamount: number | null; transactioncurrencyid_guid: string | null }, { extendedamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  extendedamount_base: WebAttribute<InvoiceDetail_Select, { extendedamount_base: number | null; transactioncurrencyid_guid: string | null }, { extendedamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  importsequencenumber: WebAttribute<InvoiceDetail_Select, { importsequencenumber: number | null }, {  }>;
  invoicedetailid: WebAttribute<InvoiceDetail_Select, { invoicedetailid: string | null }, {  }>;
  invoicedetailname: WebAttribute<InvoiceDetail_Select, { invoicedetailname: string | null }, {  }>;
  invoiceid_guid: WebAttribute<InvoiceDetail_Select, { invoiceid_guid: string | null }, { invoiceid_formatted?: string }>;
  invoiceispricelocked: WebAttribute<InvoiceDetail_Select, { invoiceispricelocked: boolean | null }, {  }>;
  invoicestatecode: WebAttribute<InvoiceDetail_Select, { invoicestatecode: invoicedetail_invoicestatecode | null }, { invoicestatecode_formatted?: string }>;
  iscopied: WebAttribute<InvoiceDetail_Select, { iscopied: boolean | null }, {  }>;
  ispriceoverridden: WebAttribute<InvoiceDetail_Select, { ispriceoverridden: boolean | null }, {  }>;
  isproductoverridden: WebAttribute<InvoiceDetail_Select, { isproductoverridden: boolean | null }, {  }>;
  lineitemnumber: WebAttribute<InvoiceDetail_Select, { lineitemnumber: number | null }, {  }>;
  manualdiscountamount: WebAttribute<InvoiceDetail_Select, { manualdiscountamount: number | null; transactioncurrencyid_guid: string | null }, { manualdiscountamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  manualdiscountamount_base: WebAttribute<InvoiceDetail_Select, { manualdiscountamount_base: number | null; transactioncurrencyid_guid: string | null }, { manualdiscountamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  modifiedby_guid: WebAttribute<InvoiceDetail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<InvoiceDetail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<InvoiceDetail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<InvoiceDetail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<InvoiceDetail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<InvoiceDetail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<InvoiceDetail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<InvoiceDetail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentbundleid: WebAttribute<InvoiceDetail_Select, { parentbundleid: string | null }, {  }>;
  parentbundleidref_guid: WebAttribute<InvoiceDetail_Select, { parentbundleidref_guid: string | null }, { parentbundleidref_formatted?: string }>;
  priceperunit: WebAttribute<InvoiceDetail_Select, { priceperunit: number | null; transactioncurrencyid_guid: string | null }, { priceperunit_formatted?: string; transactioncurrencyid_formatted?: string }>;
  priceperunit_base: WebAttribute<InvoiceDetail_Select, { priceperunit_base: number | null; transactioncurrencyid_guid: string | null }, { priceperunit_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pricingerrorcode: WebAttribute<InvoiceDetail_Select, { pricingerrorcode: qooi_pricingerrorcode | null }, { pricingerrorcode_formatted?: string }>;
  productassociationid: WebAttribute<InvoiceDetail_Select, { productassociationid: string | null }, {  }>;
  productdescription: WebAttribute<InvoiceDetail_Select, { productdescription: string | null }, {  }>;
  productid_guid: WebAttribute<InvoiceDetail_Select, { productid_guid: string | null }, { productid_formatted?: string }>;
  productname: WebAttribute<InvoiceDetail_Select, { productname: string | null }, {  }>;
  productnumber: WebAttribute<InvoiceDetail_Select, { productnumber: string | null }, {  }>;
  producttypecode: WebAttribute<InvoiceDetail_Select, { producttypecode: qooiproduct_producttype | null }, { producttypecode_formatted?: string }>;
  propertyconfigurationstatus: WebAttribute<InvoiceDetail_Select, { propertyconfigurationstatus: qooiproduct_propertiesconfigurationstatus | null }, { propertyconfigurationstatus_formatted?: string }>;
  quantity: WebAttribute<InvoiceDetail_Select, { quantity: number | null }, {  }>;
  quantitybackordered: WebAttribute<InvoiceDetail_Select, { quantitybackordered: number | null }, {  }>;
  quantitycancelled: WebAttribute<InvoiceDetail_Select, { quantitycancelled: number | null }, {  }>;
  quantityshipped: WebAttribute<InvoiceDetail_Select, { quantityshipped: number | null }, {  }>;
  salesorderdetailid_guid: WebAttribute<InvoiceDetail_Select, { salesorderdetailid_guid: string | null }, { salesorderdetailid_formatted?: string }>;
  salesrepid_guid: WebAttribute<InvoiceDetail_Select, { salesrepid_guid: string | null }, { salesrepid_formatted?: string }>;
  sequencenumber: WebAttribute<InvoiceDetail_Select, { sequencenumber: number | null }, {  }>;
  shippingtrackingnumber: WebAttribute<InvoiceDetail_Select, { shippingtrackingnumber: string | null }, {  }>;
  shipto_city: WebAttribute<InvoiceDetail_Select, { shipto_city: string | null }, {  }>;
  shipto_country: WebAttribute<InvoiceDetail_Select, { shipto_country: string | null }, {  }>;
  shipto_fax: WebAttribute<InvoiceDetail_Select, { shipto_fax: string | null }, {  }>;
  shipto_freighttermscode: WebAttribute<InvoiceDetail_Select, { shipto_freighttermscode: invoicedetail_shipto_freighttermscode | null }, { shipto_freighttermscode_formatted?: string }>;
  shipto_line1: WebAttribute<InvoiceDetail_Select, { shipto_line1: string | null }, {  }>;
  shipto_line2: WebAttribute<InvoiceDetail_Select, { shipto_line2: string | null }, {  }>;
  shipto_line3: WebAttribute<InvoiceDetail_Select, { shipto_line3: string | null }, {  }>;
  shipto_name: WebAttribute<InvoiceDetail_Select, { shipto_name: string | null }, {  }>;
  shipto_postalcode: WebAttribute<InvoiceDetail_Select, { shipto_postalcode: string | null }, {  }>;
  shipto_stateorprovince: WebAttribute<InvoiceDetail_Select, { shipto_stateorprovince: string | null }, {  }>;
  shipto_telephone: WebAttribute<InvoiceDetail_Select, { shipto_telephone: string | null }, {  }>;
  skippricecalculation: WebAttribute<InvoiceDetail_Select, { skippricecalculation: qooidetail_skippricecalculation | null }, { skippricecalculation_formatted?: string }>;
  tax: WebAttribute<InvoiceDetail_Select, { tax: number | null; transactioncurrencyid_guid: string | null }, { tax_formatted?: string; transactioncurrencyid_formatted?: string }>;
  tax_base: WebAttribute<InvoiceDetail_Select, { tax_base: number | null; transactioncurrencyid_guid: string | null }, { tax_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<InvoiceDetail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<InvoiceDetail_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  uomid_guid: WebAttribute<InvoiceDetail_Select, { uomid_guid: string | null }, { uomid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<InvoiceDetail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<InvoiceDetail_Select, { versionnumber: number | null }, {  }>;
  volumediscountamount: WebAttribute<InvoiceDetail_Select, { volumediscountamount: number | null; transactioncurrencyid_guid: string | null }, { volumediscountamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  volumediscountamount_base: WebAttribute<InvoiceDetail_Select, { volumediscountamount_base: number | null; transactioncurrencyid_guid: string | null }, { volumediscountamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  willcall: WebAttribute<InvoiceDetail_Select, { willcall: boolean | null }, {  }>;
}
interface InvoiceDetail_Filter {
  actualdeliveryon: Date;
  baseamount: number;
  baseamount_base: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  extendedamount: number;
  extendedamount_base: number;
  importsequencenumber: number;
  invoicedetailid: XQW.Guid;
  invoicedetailname: string;
  invoiceid_guid: XQW.Guid;
  invoiceispricelocked: boolean;
  invoicestatecode: invoicedetail_invoicestatecode;
  iscopied: boolean;
  ispriceoverridden: boolean;
  isproductoverridden: boolean;
  lineitemnumber: number;
  manualdiscountamount: number;
  manualdiscountamount_base: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentbundleid: XQW.Guid;
  parentbundleidref_guid: XQW.Guid;
  priceperunit: number;
  priceperunit_base: number;
  pricingerrorcode: qooi_pricingerrorcode;
  productassociationid: XQW.Guid;
  productdescription: string;
  productid_guid: XQW.Guid;
  productname: string;
  productnumber: string;
  producttypecode: qooiproduct_producttype;
  propertyconfigurationstatus: qooiproduct_propertiesconfigurationstatus;
  quantity: any;
  quantitybackordered: any;
  quantitycancelled: any;
  quantityshipped: any;
  salesorderdetailid_guid: XQW.Guid;
  salesrepid_guid: XQW.Guid;
  sequencenumber: number;
  shippingtrackingnumber: string;
  shipto_city: string;
  shipto_country: string;
  shipto_fax: string;
  shipto_freighttermscode: invoicedetail_shipto_freighttermscode;
  shipto_line1: string;
  shipto_line2: string;
  shipto_line3: string;
  shipto_name: string;
  shipto_postalcode: string;
  shipto_stateorprovince: string;
  shipto_telephone: string;
  skippricecalculation: qooidetail_skippricecalculation;
  tax: number;
  tax_base: number;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  uomid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
  volumediscountamount: number;
  volumediscountamount_base: number;
  willcall: boolean;
}
interface InvoiceDetail_Expand {
  InvoiceDetail_AsyncOperations: WebExpand<InvoiceDetail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { InvoiceDetail_AsyncOperations: AsyncOperation_Result[] }>;
  InvoiceDetail_BulkDeleteFailures: WebExpand<InvoiceDetail_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { InvoiceDetail_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  InvoiceDetail_Dynamicpropertyinstance: WebExpand<InvoiceDetail_Expand, DynamicPropertyInstance_Select, DynamicPropertyInstance_Filter, { InvoiceDetail_Dynamicpropertyinstance: DynamicPropertyInstance_Result[] }>;
  InvoiceDetail_ProcessSessions: WebExpand<InvoiceDetail_Expand, ProcessSession_Select, ProcessSession_Filter, { InvoiceDetail_ProcessSessions: ProcessSession_Result[] }>;
  InvoiceDetail_SyncErrors: WebExpand<InvoiceDetail_Expand, SyncError_Select, SyncError_Filter, { InvoiceDetail_SyncErrors: SyncError_Result[] }>;
  SalesOrderDetailId: WebExpand<InvoiceDetail_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { SalesOrderDetailId: SalesOrderDetail_Result }>;
  createdby: WebExpand<InvoiceDetail_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<InvoiceDetail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  invoicedetail_MailboxTrackingFolders: WebExpand<InvoiceDetail_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { invoicedetail_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  invoicedetail_parent_invoicedetail: WebExpand<InvoiceDetail_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { invoicedetail_parent_invoicedetail: InvoiceDetail_Result[] }>;
  invoicedetail_parentref_invoicedetail: WebExpand<InvoiceDetail_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { invoicedetail_parentref_invoicedetail: InvoiceDetail_Result[] }>;
  invoicedetail_principalobjectattributeaccess: WebExpand<InvoiceDetail_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { invoicedetail_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  invoiceid: WebExpand<InvoiceDetail_Expand, Invoice_Select, Invoice_Filter, { invoiceid: Invoice_Result }>;
  modifiedby: WebExpand<InvoiceDetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<InvoiceDetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  owningteam: WebExpand<InvoiceDetail_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<InvoiceDetail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  parentbundleid_invoicedetail: WebExpand<InvoiceDetail_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { parentbundleid_invoicedetail: InvoiceDetail_Result }>;
  parentbundleidref_invoicedetail: WebExpand<InvoiceDetail_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { parentbundleidref_invoicedetail: InvoiceDetail_Result }>;
  productassociationid_productassociation: WebExpand<InvoiceDetail_Expand, ProductAssociation_Select, ProductAssociation_Filter, { productassociationid_productassociation: ProductAssociation_Result }>;
  productid: WebExpand<InvoiceDetail_Expand, Product_Select, Product_Filter, { productid: Product_Result }>;
  salesrepid: WebExpand<InvoiceDetail_Expand, SystemUser_Select, SystemUser_Filter, { salesrepid: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<InvoiceDetail_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  uomid: WebExpand<InvoiceDetail_Expand, UoM_Select, UoM_Filter, { uomid: UoM_Result }>;
  userentityinstancedata_invoicedetail: WebExpand<InvoiceDetail_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_invoicedetail: UserEntityInstanceData_Result[] }>;
}
interface InvoiceDetail_FormattedResult {
  actualdeliveryon_formatted?: string;
  baseamount_base_formatted?: string;
  baseamount_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  extendedamount_base_formatted?: string;
  extendedamount_formatted?: string;
  invoiceid_formatted?: string;
  invoicestatecode_formatted?: string;
  manualdiscountamount_base_formatted?: string;
  manualdiscountamount_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentbundleidref_formatted?: string;
  priceperunit_base_formatted?: string;
  priceperunit_formatted?: string;
  pricingerrorcode_formatted?: string;
  productid_formatted?: string;
  producttypecode_formatted?: string;
  propertyconfigurationstatus_formatted?: string;
  salesorderdetailid_formatted?: string;
  salesrepid_formatted?: string;
  shipto_freighttermscode_formatted?: string;
  skippricecalculation_formatted?: string;
  tax_base_formatted?: string;
  tax_formatted?: string;
  transactioncurrencyid_formatted?: string;
  uomid_formatted?: string;
  volumediscountamount_base_formatted?: string;
  volumediscountamount_formatted?: string;
}
interface InvoiceDetail_Result extends InvoiceDetail_Base, InvoiceDetail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  invoiceid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentbundleidref_guid: string | null;
  productid_guid: string | null;
  salesorderdetailid_guid: string | null;
  salesrepid_guid: string | null;
  transactioncurrencyid_guid: string | null;
  uomid_guid: string | null;
}
interface InvoiceDetail_RelatedOne {
  SalesOrderDetailId: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  invoiceid: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentbundleid_invoicedetail: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
  parentbundleidref_invoicedetail: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
  productassociationid_productassociation: WebMappingRetrieve<ProductAssociation_Select,ProductAssociation_Expand,ProductAssociation_Filter,ProductAssociation_Fixed,ProductAssociation_Result,ProductAssociation_FormattedResult>;
  productid: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  salesrepid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  uomid: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
}
interface InvoiceDetail_RelatedMany {
  InvoiceDetail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  InvoiceDetail_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  InvoiceDetail_Dynamicpropertyinstance: WebMappingRetrieve<DynamicPropertyInstance_Select,DynamicPropertyInstance_Expand,DynamicPropertyInstance_Filter,DynamicPropertyInstance_Fixed,DynamicPropertyInstance_Result,DynamicPropertyInstance_FormattedResult>;
  InvoiceDetail_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  InvoiceDetail_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  invoicedetail_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  invoicedetail_parent_invoicedetail: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
  invoicedetail_parentref_invoicedetail: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
  invoicedetail_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_invoicedetail: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  invoicedetails: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
}
interface WebEntitiesRelated {
  invoicedetails: WebMappingRelated<InvoiceDetail_RelatedOne,InvoiceDetail_RelatedMany>;
}
interface WebEntitiesCUDA {
  invoicedetails: WebMappingCUDA<InvoiceDetail_Create,InvoiceDetail_Update,InvoiceDetail_Select>;
}
