interface UoM_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  isschedulebaseuom?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  organizationid?: string | null;
  overriddencreatedon?: Date | null;
  quantity?: number | null;
  timezoneruleversionnumber?: number | null;
  uomid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UoM_Relationships {
  CreatedByExternalParty?: ExternalParty_Result | null;
  ModifiedByExternalParty?: ExternalParty_Result | null;
  UoM_AsyncOperations?: AsyncOperation_Result[] | null;
  UoM_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  UoM_SyncErrors?: SyncError_Result[] | null;
  unit_of_measurement_base_unit?: UoM_Result[] | null;
  unit_of_measurement_contract_line_items?: ContractDetail_Result[] | null;
  unit_of_measurement_invoice_details?: InvoiceDetail_Result[] | null;
  unit_of_measurement_opportunity_products?: OpportunityProduct_Result[] | null;
  unit_of_measurement_order_details?: SalesOrderDetail_Result[] | null;
  unit_of_measurement_product_price_levels?: ProductPriceLevel_Result[] | null;
  unit_of_measurement_productassociation?: ProductAssociation_Result[] | null;
  unit_of_measurement_products?: Product_Result[] | null;
  unit_of_measurement_quote_details?: QuoteDetail_Result[] | null;
  uom_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uom_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_uom?: UserEntityInstanceData_Result[] | null;
}
interface UoM extends UoM_Base, UoM_Relationships {
  baseuom_bind$uoms?: string | null;
}
interface UoM_Create extends UoM {
  uomscheduleid_bind$uomschedules?: string | null;
}
interface UoM_Update extends UoM {
}
interface UoM_Select {
  baseuom_guid: WebAttribute<UoM_Select, { baseuom_guid: string | null }, { baseuom_formatted?: string }>;
  createdby_guid: WebAttribute<UoM_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdbyexternalparty_guid: WebAttribute<UoM_Select, { createdbyexternalparty_guid: string | null }, { createdbyexternalparty_formatted?: string }>;
  createdon: WebAttribute<UoM_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UoM_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<UoM_Select, { importsequencenumber: number | null }, {  }>;
  isschedulebaseuom: WebAttribute<UoM_Select, { isschedulebaseuom: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<UoM_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedbyexternalparty_guid: WebAttribute<UoM_Select, { modifiedbyexternalparty_guid: string | null }, { modifiedbyexternalparty_formatted?: string }>;
  modifiedon: WebAttribute<UoM_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UoM_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<UoM_Select, { name: string | null }, {  }>;
  organizationid: WebAttribute<UoM_Select, { organizationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<UoM_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  quantity: WebAttribute<UoM_Select, { quantity: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<UoM_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uomid: WebAttribute<UoM_Select, { uomid: string | null }, {  }>;
  uomscheduleid_guid: WebAttribute<UoM_Select, { uomscheduleid_guid: string | null }, { uomscheduleid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<UoM_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UoM_Select, { versionnumber: number | null }, {  }>;
}
interface UoM_Filter {
  baseuom_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdbyexternalparty_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  isschedulebaseuom: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedbyexternalparty_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid: XQW.Guid;
  overriddencreatedon: Date;
  quantity: any;
  timezoneruleversionnumber: number;
  uomid: XQW.Guid;
  uomscheduleid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UoM_Expand {
  CreatedByExternalParty: WebExpand<UoM_Expand, ExternalParty_Select, ExternalParty_Filter, { CreatedByExternalParty: ExternalParty_Result }>;
  ModifiedByExternalParty: WebExpand<UoM_Expand, ExternalParty_Select, ExternalParty_Filter, { ModifiedByExternalParty: ExternalParty_Result }>;
  UoM_AsyncOperations: WebExpand<UoM_Expand, AsyncOperation_Select, AsyncOperation_Filter, { UoM_AsyncOperations: AsyncOperation_Result[] }>;
  UoM_BulkDeleteFailures: WebExpand<UoM_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { UoM_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  UoM_SyncErrors: WebExpand<UoM_Expand, SyncError_Select, SyncError_Filter, { UoM_SyncErrors: SyncError_Result[] }>;
  baseuom: WebExpand<UoM_Expand, UoM_Select, UoM_Filter, { baseuom: UoM_Result }>;
  createdby: WebExpand<UoM_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UoM_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UoM_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UoM_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  unit_of_measurement_base_unit: WebExpand<UoM_Expand, UoM_Select, UoM_Filter, { unit_of_measurement_base_unit: UoM_Result[] }>;
  unit_of_measurement_contract_line_items: WebExpand<UoM_Expand, ContractDetail_Select, ContractDetail_Filter, { unit_of_measurement_contract_line_items: ContractDetail_Result[] }>;
  unit_of_measurement_invoice_details: WebExpand<UoM_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { unit_of_measurement_invoice_details: InvoiceDetail_Result[] }>;
  unit_of_measurement_opportunity_products: WebExpand<UoM_Expand, OpportunityProduct_Select, OpportunityProduct_Filter, { unit_of_measurement_opportunity_products: OpportunityProduct_Result[] }>;
  unit_of_measurement_order_details: WebExpand<UoM_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { unit_of_measurement_order_details: SalesOrderDetail_Result[] }>;
  unit_of_measurement_product_price_levels: WebExpand<UoM_Expand, ProductPriceLevel_Select, ProductPriceLevel_Filter, { unit_of_measurement_product_price_levels: ProductPriceLevel_Result[] }>;
  unit_of_measurement_productassociation: WebExpand<UoM_Expand, ProductAssociation_Select, ProductAssociation_Filter, { unit_of_measurement_productassociation: ProductAssociation_Result[] }>;
  unit_of_measurement_products: WebExpand<UoM_Expand, Product_Select, Product_Filter, { unit_of_measurement_products: Product_Result[] }>;
  unit_of_measurement_quote_details: WebExpand<UoM_Expand, QuoteDetail_Select, QuoteDetail_Filter, { unit_of_measurement_quote_details: QuoteDetail_Result[] }>;
  uom_MailboxTrackingFolders: WebExpand<UoM_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uom_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uom_PrincipalObjectAttributeAccesses: WebExpand<UoM_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uom_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  uomscheduleid: WebExpand<UoM_Expand, UoMSchedule_Select, UoMSchedule_Filter, { uomscheduleid: UoMSchedule_Result }>;
  userentityinstancedata_uom: WebExpand<UoM_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_uom: UserEntityInstanceData_Result[] }>;
}
interface UoM_FormattedResult {
  baseuom_formatted?: string;
  createdby_formatted?: string;
  createdbyexternalparty_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedbyexternalparty_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  uomscheduleid_formatted?: string;
}
interface UoM_Result extends UoM_Base, UoM_Relationships {
  "@odata.etag": string;
  baseuom_guid: string | null;
  createdby_guid: string | null;
  createdbyexternalparty_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedbyexternalparty_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  uomscheduleid_guid: string | null;
}
interface UoM_RelatedOne {
  CreatedByExternalParty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  ModifiedByExternalParty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  baseuom: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  uomscheduleid: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
}
interface UoM_RelatedMany {
  UoM_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  UoM_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  UoM_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  unit_of_measurement_base_unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  unit_of_measurement_contract_line_items: WebMappingRetrieve<ContractDetail_Select,ContractDetail_Expand,ContractDetail_Filter,ContractDetail_Fixed,ContractDetail_Result,ContractDetail_FormattedResult>;
  unit_of_measurement_invoice_details: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
  unit_of_measurement_opportunity_products: WebMappingRetrieve<OpportunityProduct_Select,OpportunityProduct_Expand,OpportunityProduct_Filter,OpportunityProduct_Fixed,OpportunityProduct_Result,OpportunityProduct_FormattedResult>;
  unit_of_measurement_order_details: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  unit_of_measurement_product_price_levels: WebMappingRetrieve<ProductPriceLevel_Select,ProductPriceLevel_Expand,ProductPriceLevel_Filter,ProductPriceLevel_Fixed,ProductPriceLevel_Result,ProductPriceLevel_FormattedResult>;
  unit_of_measurement_productassociation: WebMappingRetrieve<ProductAssociation_Select,ProductAssociation_Expand,ProductAssociation_Filter,ProductAssociation_Fixed,ProductAssociation_Result,ProductAssociation_FormattedResult>;
  unit_of_measurement_products: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  unit_of_measurement_quote_details: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  uom_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uom_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_uom: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uoms: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
}
interface WebEntitiesRelated {
  uoms: WebMappingRelated<UoM_RelatedOne,UoM_RelatedMany>;
}
interface WebEntitiesCUDA {
  uoms: WebMappingCUDA<UoM_Create,UoM_Update,UoM_Select>;
}
