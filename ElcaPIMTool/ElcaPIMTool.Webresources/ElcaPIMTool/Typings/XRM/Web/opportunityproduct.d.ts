interface OpportunityProduct_Base extends WebEntity {
  baseamount?: number | null;
  baseamount_base?: number | null;
  createdon?: Date | null;
  description?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  extendedamount?: number | null;
  extendedamount_base?: number | null;
  importsequencenumber?: number | null;
  ispriceoverridden?: boolean | null;
  isproductoverridden?: boolean | null;
  lineitemnumber?: number | null;
  manualdiscountamount?: number | null;
  manualdiscountamount_base?: number | null;
  modifiedon?: Date | null;
  opportunityproductid?: string | null;
  opportunityproductname?: string | null;
  opportunitystatecode?: opportunityproduct_opportunitystatecode | null;
  overriddencreatedon?: Date | null;
  parentbundleid?: string | null;
  priceperunit?: number | null;
  priceperunit_base?: number | null;
  pricingerrorcode?: qooi_pricingerrorcode | null;
  productassociationid?: string | null;
  productdescription?: string | null;
  productname?: string | null;
  producttypecode?: qooiproduct_producttype | null;
  propertyconfigurationstatus?: qooiproduct_propertiesconfigurationstatus | null;
  quantity?: number | null;
  sequencenumber?: number | null;
  skippricecalculation?: qooidetail_skippricecalculation | null;
  tax?: number | null;
  tax_base?: number | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  volumediscountamount?: number | null;
  volumediscountamount_base?: number | null;
}
interface OpportunityProduct_Relationships {
  OpportunityProduct_AsyncOperations?: AsyncOperation_Result[] | null;
  OpportunityProduct_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  OpportunityProduct_Dynamicpropertyinstance?: DynamicPropertyInstance_Result[] | null;
  OpportunityProduct_ProcessSessions?: ProcessSession_Result[] | null;
  OpportunityProduct_SyncErrors?: SyncError_Result[] | null;
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  opportunityproduct_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  opportunityproduct_parent_opportunityproduct?: OpportunityProduct_Result[] | null;
  opportunityproduct_parentref_opportunityproduct?: OpportunityProduct_Result[] | null;
  opportunityproduct_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  parentbundleid_opportunityproduct?: OpportunityProduct_Result | null;
  parentbundleidref_opportunityproduct?: OpportunityProduct_Result | null;
  productassociationid_productassociation?: ProductAssociation_Result | null;
  userentityinstancedata_opportunityproduct?: UserEntityInstanceData_Result[] | null;
}
interface OpportunityProduct extends OpportunityProduct_Base, OpportunityProduct_Relationships {
  opportunityid_bind$opportunities?: string | null;
  parentbundleidref_opportunityproduct_bind$opportunityproducts?: string | null;
  productid_bind$products?: string | null;
  uomid_bind$uoms?: string | null;
}
interface OpportunityProduct_Create extends OpportunityProduct {
  parentbundleid_opportunityproduct_bind$opportunityproducts?: string | null;
  productassociationid_productassociation_bind$productassociations?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface OpportunityProduct_Update extends OpportunityProduct {
}
interface OpportunityProduct_Select {
  baseamount: WebAttribute<OpportunityProduct_Select, { baseamount: number | null; transactioncurrencyid_guid: string | null }, { baseamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  baseamount_base: WebAttribute<OpportunityProduct_Select, { baseamount_base: number | null; transactioncurrencyid_guid: string | null }, { baseamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  createdby_guid: WebAttribute<OpportunityProduct_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<OpportunityProduct_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<OpportunityProduct_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<OpportunityProduct_Select, { description: string | null }, {  }>;
  entityimageid: WebAttribute<OpportunityProduct_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<OpportunityProduct_Select, { exchangerate: number | null }, {  }>;
  extendedamount: WebAttribute<OpportunityProduct_Select, { extendedamount: number | null; transactioncurrencyid_guid: string | null }, { extendedamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  extendedamount_base: WebAttribute<OpportunityProduct_Select, { extendedamount_base: number | null; transactioncurrencyid_guid: string | null }, { extendedamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  importsequencenumber: WebAttribute<OpportunityProduct_Select, { importsequencenumber: number | null }, {  }>;
  ispriceoverridden: WebAttribute<OpportunityProduct_Select, { ispriceoverridden: boolean | null }, {  }>;
  isproductoverridden: WebAttribute<OpportunityProduct_Select, { isproductoverridden: boolean | null }, {  }>;
  lineitemnumber: WebAttribute<OpportunityProduct_Select, { lineitemnumber: number | null }, {  }>;
  manualdiscountamount: WebAttribute<OpportunityProduct_Select, { manualdiscountamount: number | null; transactioncurrencyid_guid: string | null }, { manualdiscountamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  manualdiscountamount_base: WebAttribute<OpportunityProduct_Select, { manualdiscountamount_base: number | null; transactioncurrencyid_guid: string | null }, { manualdiscountamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  modifiedby_guid: WebAttribute<OpportunityProduct_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<OpportunityProduct_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<OpportunityProduct_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opportunityid_guid: WebAttribute<OpportunityProduct_Select, { opportunityid_guid: string | null }, { opportunityid_formatted?: string }>;
  opportunityproductid: WebAttribute<OpportunityProduct_Select, { opportunityproductid: string | null }, {  }>;
  opportunityproductname: WebAttribute<OpportunityProduct_Select, { opportunityproductname: string | null }, {  }>;
  opportunitystatecode: WebAttribute<OpportunityProduct_Select, { opportunitystatecode: opportunityproduct_opportunitystatecode | null }, { opportunitystatecode_formatted?: string }>;
  overriddencreatedon: WebAttribute<OpportunityProduct_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<OpportunityProduct_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<OpportunityProduct_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<OpportunityProduct_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<OpportunityProduct_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentbundleid: WebAttribute<OpportunityProduct_Select, { parentbundleid: string | null }, {  }>;
  parentbundleidref_guid: WebAttribute<OpportunityProduct_Select, { parentbundleidref_guid: string | null }, { parentbundleidref_formatted?: string }>;
  priceperunit: WebAttribute<OpportunityProduct_Select, { priceperunit: number | null; transactioncurrencyid_guid: string | null }, { priceperunit_formatted?: string; transactioncurrencyid_formatted?: string }>;
  priceperunit_base: WebAttribute<OpportunityProduct_Select, { priceperunit_base: number | null; transactioncurrencyid_guid: string | null }, { priceperunit_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  pricingerrorcode: WebAttribute<OpportunityProduct_Select, { pricingerrorcode: qooi_pricingerrorcode | null }, { pricingerrorcode_formatted?: string }>;
  productassociationid: WebAttribute<OpportunityProduct_Select, { productassociationid: string | null }, {  }>;
  productdescription: WebAttribute<OpportunityProduct_Select, { productdescription: string | null }, {  }>;
  productid_guid: WebAttribute<OpportunityProduct_Select, { productid_guid: string | null }, { productid_formatted?: string }>;
  productname: WebAttribute<OpportunityProduct_Select, { productname: string | null }, {  }>;
  producttypecode: WebAttribute<OpportunityProduct_Select, { producttypecode: qooiproduct_producttype | null }, { producttypecode_formatted?: string }>;
  propertyconfigurationstatus: WebAttribute<OpportunityProduct_Select, { propertyconfigurationstatus: qooiproduct_propertiesconfigurationstatus | null }, { propertyconfigurationstatus_formatted?: string }>;
  quantity: WebAttribute<OpportunityProduct_Select, { quantity: number | null }, {  }>;
  sequencenumber: WebAttribute<OpportunityProduct_Select, { sequencenumber: number | null }, {  }>;
  skippricecalculation: WebAttribute<OpportunityProduct_Select, { skippricecalculation: qooidetail_skippricecalculation | null }, { skippricecalculation_formatted?: string }>;
  tax: WebAttribute<OpportunityProduct_Select, { tax: number | null; transactioncurrencyid_guid: string | null }, { tax_formatted?: string; transactioncurrencyid_formatted?: string }>;
  tax_base: WebAttribute<OpportunityProduct_Select, { tax_base: number | null; transactioncurrencyid_guid: string | null }, { tax_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<OpportunityProduct_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<OpportunityProduct_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  uomid_guid: WebAttribute<OpportunityProduct_Select, { uomid_guid: string | null }, { uomid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<OpportunityProduct_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<OpportunityProduct_Select, { versionnumber: number | null }, {  }>;
  volumediscountamount: WebAttribute<OpportunityProduct_Select, { volumediscountamount: number | null; transactioncurrencyid_guid: string | null }, { volumediscountamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  volumediscountamount_base: WebAttribute<OpportunityProduct_Select, { volumediscountamount_base: number | null; transactioncurrencyid_guid: string | null }, { volumediscountamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
}
interface OpportunityProduct_Filter {
  baseamount: number;
  baseamount_base: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  entityimageid: XQW.Guid;
  exchangerate: any;
  extendedamount: number;
  extendedamount_base: number;
  importsequencenumber: number;
  ispriceoverridden: boolean;
  isproductoverridden: boolean;
  lineitemnumber: number;
  manualdiscountamount: number;
  manualdiscountamount_base: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opportunityid_guid: XQW.Guid;
  opportunityproductid: XQW.Guid;
  opportunityproductname: string;
  opportunitystatecode: opportunityproduct_opportunitystatecode;
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
  producttypecode: qooiproduct_producttype;
  propertyconfigurationstatus: qooiproduct_propertiesconfigurationstatus;
  quantity: any;
  sequencenumber: number;
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
}
interface OpportunityProduct_Expand {
  OpportunityProduct_AsyncOperations: WebExpand<OpportunityProduct_Expand, AsyncOperation_Select, AsyncOperation_Filter, { OpportunityProduct_AsyncOperations: AsyncOperation_Result[] }>;
  OpportunityProduct_BulkDeleteFailures: WebExpand<OpportunityProduct_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { OpportunityProduct_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  OpportunityProduct_Dynamicpropertyinstance: WebExpand<OpportunityProduct_Expand, DynamicPropertyInstance_Select, DynamicPropertyInstance_Filter, { OpportunityProduct_Dynamicpropertyinstance: DynamicPropertyInstance_Result[] }>;
  OpportunityProduct_ProcessSessions: WebExpand<OpportunityProduct_Expand, ProcessSession_Select, ProcessSession_Filter, { OpportunityProduct_ProcessSessions: ProcessSession_Result[] }>;
  OpportunityProduct_SyncErrors: WebExpand<OpportunityProduct_Expand, SyncError_Select, SyncError_Filter, { OpportunityProduct_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<OpportunityProduct_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<OpportunityProduct_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entityimageid_imagedescriptor: WebExpand<OpportunityProduct_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  modifiedby: WebExpand<OpportunityProduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<OpportunityProduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opportunityid: WebExpand<OpportunityProduct_Expand, Opportunity_Select, Opportunity_Filter, { opportunityid: Opportunity_Result }>;
  opportunityproduct_MailboxTrackingFolders: WebExpand<OpportunityProduct_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { opportunityproduct_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  opportunityproduct_parent_opportunityproduct: WebExpand<OpportunityProduct_Expand, OpportunityProduct_Select, OpportunityProduct_Filter, { opportunityproduct_parent_opportunityproduct: OpportunityProduct_Result[] }>;
  opportunityproduct_parentref_opportunityproduct: WebExpand<OpportunityProduct_Expand, OpportunityProduct_Select, OpportunityProduct_Filter, { opportunityproduct_parentref_opportunityproduct: OpportunityProduct_Result[] }>;
  opportunityproduct_principalobjectattributeaccess: WebExpand<OpportunityProduct_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { opportunityproduct_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  owningteam: WebExpand<OpportunityProduct_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<OpportunityProduct_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  parentbundleid_opportunityproduct: WebExpand<OpportunityProduct_Expand, OpportunityProduct_Select, OpportunityProduct_Filter, { parentbundleid_opportunityproduct: OpportunityProduct_Result }>;
  parentbundleidref_opportunityproduct: WebExpand<OpportunityProduct_Expand, OpportunityProduct_Select, OpportunityProduct_Filter, { parentbundleidref_opportunityproduct: OpportunityProduct_Result }>;
  productassociationid_productassociation: WebExpand<OpportunityProduct_Expand, ProductAssociation_Select, ProductAssociation_Filter, { productassociationid_productassociation: ProductAssociation_Result }>;
  productid: WebExpand<OpportunityProduct_Expand, Product_Select, Product_Filter, { productid: Product_Result }>;
  transactioncurrencyid: WebExpand<OpportunityProduct_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  uomid: WebExpand<OpportunityProduct_Expand, UoM_Select, UoM_Filter, { uomid: UoM_Result }>;
  userentityinstancedata_opportunityproduct: WebExpand<OpportunityProduct_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_opportunityproduct: UserEntityInstanceData_Result[] }>;
}
interface OpportunityProduct_FormattedResult {
  baseamount_base_formatted?: string;
  baseamount_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  extendedamount_base_formatted?: string;
  extendedamount_formatted?: string;
  manualdiscountamount_base_formatted?: string;
  manualdiscountamount_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opportunityid_formatted?: string;
  opportunitystatecode_formatted?: string;
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
  skippricecalculation_formatted?: string;
  tax_base_formatted?: string;
  tax_formatted?: string;
  transactioncurrencyid_formatted?: string;
  uomid_formatted?: string;
  volumediscountamount_base_formatted?: string;
  volumediscountamount_formatted?: string;
}
interface OpportunityProduct_Result extends OpportunityProduct_Base, OpportunityProduct_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opportunityid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentbundleidref_guid: string | null;
  productid_guid: string | null;
  transactioncurrencyid_guid: string | null;
  uomid_guid: string | null;
}
interface OpportunityProduct_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opportunityid: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentbundleid_opportunityproduct: WebMappingRetrieve<OpportunityProduct_Select,OpportunityProduct_Expand,OpportunityProduct_Filter,OpportunityProduct_Fixed,OpportunityProduct_Result,OpportunityProduct_FormattedResult>;
  parentbundleidref_opportunityproduct: WebMappingRetrieve<OpportunityProduct_Select,OpportunityProduct_Expand,OpportunityProduct_Filter,OpportunityProduct_Fixed,OpportunityProduct_Result,OpportunityProduct_FormattedResult>;
  productassociationid_productassociation: WebMappingRetrieve<ProductAssociation_Select,ProductAssociation_Expand,ProductAssociation_Filter,ProductAssociation_Fixed,ProductAssociation_Result,ProductAssociation_FormattedResult>;
  productid: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  uomid: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
}
interface OpportunityProduct_RelatedMany {
  OpportunityProduct_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  OpportunityProduct_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  OpportunityProduct_Dynamicpropertyinstance: WebMappingRetrieve<DynamicPropertyInstance_Select,DynamicPropertyInstance_Expand,DynamicPropertyInstance_Filter,DynamicPropertyInstance_Fixed,DynamicPropertyInstance_Result,DynamicPropertyInstance_FormattedResult>;
  OpportunityProduct_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  OpportunityProduct_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  opportunityproduct_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  opportunityproduct_parent_opportunityproduct: WebMappingRetrieve<OpportunityProduct_Select,OpportunityProduct_Expand,OpportunityProduct_Filter,OpportunityProduct_Fixed,OpportunityProduct_Result,OpportunityProduct_FormattedResult>;
  opportunityproduct_parentref_opportunityproduct: WebMappingRetrieve<OpportunityProduct_Select,OpportunityProduct_Expand,OpportunityProduct_Filter,OpportunityProduct_Fixed,OpportunityProduct_Result,OpportunityProduct_FormattedResult>;
  opportunityproduct_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_opportunityproduct: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opportunityproducts: WebMappingRetrieve<OpportunityProduct_Select,OpportunityProduct_Expand,OpportunityProduct_Filter,OpportunityProduct_Fixed,OpportunityProduct_Result,OpportunityProduct_FormattedResult>;
}
interface WebEntitiesRelated {
  opportunityproducts: WebMappingRelated<OpportunityProduct_RelatedOne,OpportunityProduct_RelatedMany>;
}
interface WebEntitiesCUDA {
  opportunityproducts: WebMappingCUDA<OpportunityProduct_Create,OpportunityProduct_Update,OpportunityProduct_Select>;
}
