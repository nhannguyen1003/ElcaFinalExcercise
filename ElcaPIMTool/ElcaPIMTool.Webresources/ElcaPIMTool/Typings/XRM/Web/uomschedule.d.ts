interface UoMSchedule_Base extends WebEntity {
  baseuomname?: string | null;
  createdon?: Date | null;
  description?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: uomschedule_statecode | null;
  statuscode?: uomschedule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  uomscheduleid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UoMSchedule_Relationships {
  CreatedByExternalParty?: ExternalParty_Result | null;
  ModifiedByExternalParty?: ExternalParty_Result | null;
  UoMSchedule_AsyncOperations?: AsyncOperation_Result[] | null;
  UoMSchedule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  UoMSchedule_SyncErrors?: SyncError_Result[] | null;
  contract_detail_unit_of_measure_schedule?: ContractDetail_Result[] | null;
  unit_of_measure_schedule_conversions?: UoM_Result[] | null;
  unit_of_measure_schedule_product_price_level?: ProductPriceLevel_Result[] | null;
  unit_of_measurement_schedule_products?: Product_Result[] | null;
  uomschedule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uomschedule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_uomschedule?: UserEntityInstanceData_Result[] | null;
}
interface UoMSchedule extends UoMSchedule_Base, UoMSchedule_Relationships {
}
interface UoMSchedule_Create extends UoMSchedule {
}
interface UoMSchedule_Update extends UoMSchedule {
}
interface UoMSchedule_Select {
  baseuomname: WebAttribute<UoMSchedule_Select, { baseuomname: string | null }, {  }>;
  createdby_guid: WebAttribute<UoMSchedule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdbyexternalparty_guid: WebAttribute<UoMSchedule_Select, { createdbyexternalparty_guid: string | null }, { createdbyexternalparty_formatted?: string }>;
  createdon: WebAttribute<UoMSchedule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UoMSchedule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<UoMSchedule_Select, { description: string | null }, {  }>;
  importsequencenumber: WebAttribute<UoMSchedule_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UoMSchedule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedbyexternalparty_guid: WebAttribute<UoMSchedule_Select, { modifiedbyexternalparty_guid: string | null }, { modifiedbyexternalparty_formatted?: string }>;
  modifiedon: WebAttribute<UoMSchedule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UoMSchedule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<UoMSchedule_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<UoMSchedule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<UoMSchedule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<UoMSchedule_Select, { statecode: uomschedule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<UoMSchedule_Select, { statuscode: uomschedule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<UoMSchedule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uomscheduleid: WebAttribute<UoMSchedule_Select, { uomscheduleid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<UoMSchedule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UoMSchedule_Select, { versionnumber: number | null }, {  }>;
}
interface UoMSchedule_Filter {
  baseuomname: string;
  createdby_guid: XQW.Guid;
  createdbyexternalparty_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedbyexternalparty_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: uomschedule_statecode;
  statuscode: uomschedule_statuscode;
  timezoneruleversionnumber: number;
  uomscheduleid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UoMSchedule_Expand {
  CreatedByExternalParty: WebExpand<UoMSchedule_Expand, ExternalParty_Select, ExternalParty_Filter, { CreatedByExternalParty: ExternalParty_Result }>;
  ModifiedByExternalParty: WebExpand<UoMSchedule_Expand, ExternalParty_Select, ExternalParty_Filter, { ModifiedByExternalParty: ExternalParty_Result }>;
  UoMSchedule_AsyncOperations: WebExpand<UoMSchedule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { UoMSchedule_AsyncOperations: AsyncOperation_Result[] }>;
  UoMSchedule_BulkDeleteFailures: WebExpand<UoMSchedule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { UoMSchedule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  UoMSchedule_SyncErrors: WebExpand<UoMSchedule_Expand, SyncError_Select, SyncError_Filter, { UoMSchedule_SyncErrors: SyncError_Result[] }>;
  contract_detail_unit_of_measure_schedule: WebExpand<UoMSchedule_Expand, ContractDetail_Select, ContractDetail_Filter, { contract_detail_unit_of_measure_schedule: ContractDetail_Result[] }>;
  createdby: WebExpand<UoMSchedule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UoMSchedule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UoMSchedule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UoMSchedule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<UoMSchedule_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  unit_of_measure_schedule_conversions: WebExpand<UoMSchedule_Expand, UoM_Select, UoM_Filter, { unit_of_measure_schedule_conversions: UoM_Result[] }>;
  unit_of_measure_schedule_product_price_level: WebExpand<UoMSchedule_Expand, ProductPriceLevel_Select, ProductPriceLevel_Filter, { unit_of_measure_schedule_product_price_level: ProductPriceLevel_Result[] }>;
  unit_of_measurement_schedule_products: WebExpand<UoMSchedule_Expand, Product_Select, Product_Filter, { unit_of_measurement_schedule_products: Product_Result[] }>;
  uomschedule_MailboxTrackingFolders: WebExpand<UoMSchedule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uomschedule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uomschedule_PrincipalObjectAttributeAccesses: WebExpand<UoMSchedule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uomschedule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  userentityinstancedata_uomschedule: WebExpand<UoMSchedule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_uomschedule: UserEntityInstanceData_Result[] }>;
}
interface UoMSchedule_FormattedResult {
  createdby_formatted?: string;
  createdbyexternalparty_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedbyexternalparty_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface UoMSchedule_Result extends UoMSchedule_Base, UoMSchedule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdbyexternalparty_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedbyexternalparty_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface UoMSchedule_RelatedOne {
  CreatedByExternalParty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  ModifiedByExternalParty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface UoMSchedule_RelatedMany {
  UoMSchedule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  UoMSchedule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  UoMSchedule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  contract_detail_unit_of_measure_schedule: WebMappingRetrieve<ContractDetail_Select,ContractDetail_Expand,ContractDetail_Filter,ContractDetail_Fixed,ContractDetail_Result,ContractDetail_FormattedResult>;
  unit_of_measure_schedule_conversions: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  unit_of_measure_schedule_product_price_level: WebMappingRetrieve<ProductPriceLevel_Select,ProductPriceLevel_Expand,ProductPriceLevel_Filter,ProductPriceLevel_Fixed,ProductPriceLevel_Result,ProductPriceLevel_FormattedResult>;
  unit_of_measurement_schedule_products: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  uomschedule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uomschedule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_uomschedule: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uomschedules: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
}
interface WebEntitiesRelated {
  uomschedules: WebMappingRelated<UoMSchedule_RelatedOne,UoMSchedule_RelatedMany>;
}
interface WebEntitiesCUDA {
  uomschedules: WebMappingCUDA<UoMSchedule_Create,UoMSchedule_Update,UoMSchedule_Select>;
}
