interface Workflow_Base extends WebEntity {
  asyncautodelete?: boolean | null;
  businessprocesstype?: workflow_businessprocesstype | null;
  category?: workflow_category | null;
  clientdata?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  createstage?: workflow_stage | null;
  deletestage?: workflow_stage | null;
  description?: string | null;
  entityimageid?: string | null;
  formid?: string | null;
  inputparameters?: string | null;
  introducedversion?: string | null;
  iscrmuiworkflow?: boolean | null;
  iscustomizable?: any | null;
  iscustomprocessingstepallowedforotherpublishers?: any | null;
  ismanaged?: boolean | null;
  istransacted?: boolean | null;
  languagecode?: number | null;
  mode?: workflow_mode | null;
  modifiedon?: Date | null;
  name?: string | null;
  ondemand?: boolean | null;
  overwritetime?: Date | null;
  primaryentity?: string | null;
  processorder?: number | null;
  processroleassignment?: string | null;
  processtriggerformid?: string | null;
  processtriggerscope?: processtrigger_scope | null;
  rank?: number | null;
  rendererobjecttypecode?: string | null;
  runas?: workflow_runas | null;
  scope?: workflow_scope | null;
  solutionid?: string | null;
  statecode?: workflow_statecode | null;
  statuscode?: workflow_statuscode | null;
  subprocess?: boolean | null;
  supportingsolutionid?: string | null;
  syncworkflowlogonfailure?: boolean | null;
  triggeroncreate?: boolean | null;
  triggerondelete?: boolean | null;
  triggeronupdateattributelist?: string | null;
  type?: workflow_type | null;
  uidata?: string | null;
  uiflowtype?: workflow_uiflowtype | null;
  uniquename?: string | null;
  updatestage?: workflow_stage | null;
  versionnumber?: number | null;
  workflowid?: string | null;
  workflowidunique?: string | null;
  xaml?: string | null;
}
interface Workflow_Relationships {
  CatalogAssignments?: CatalogAssignment_Result[] | null;
  Workflow_Annotation?: Annotation_Result[] | null;
  Workflow_SyncErrors?: SyncError_Result[] | null;
  Workflow_routingrule?: RoutingRule_Result[] | null;
  botcomponent_workflow?: botcomponent_Result[] | null;
  convertruleitembase_workflowid?: ConvertRuleItem_Result[] | null;
  entityimageinstance_workflow?: ImageDescriptor_Result | null;
  lk_asyncoperation_workflowactivationid?: AsyncOperation_Result[] | null;
  lk_processsession_processid?: ProcessSession_Result[] | null;
  msdyn_retrainworkflow_msdyn_toaimodel?: msdyn_AIModel_Result[] | null;
  msdyn_scheduleinferenceworkflow_msdyn_toaimodel?: msdyn_AIModel_Result[] | null;
  process_processstage?: ProcessStage_Result[] | null;
  process_processtrigger?: ProcessTrigger_Result[] | null;
  regardingobjectid_process?: flowsession_Result[] | null;
  slabase_workflowid?: SLA_Result[] | null;
  slaitembase_workflowid?: SLAItem_Result[] | null;
  userentityinstancedata_workflow?: UserEntityInstanceData_Result[] | null;
  workflow_active_workflow?: Workflow_Result[] | null;
  workflow_dependencies?: WorkflowDependency_Result[] | null;
  workflow_expiredprocess?: ExpiredProcess_Result[] | null;
  workflow_leadtoopportunitysalesprocess?: LeadToOpportunitySalesProcess_Result[] | null;
  workflow_newprocess?: NewProcess_Result[] | null;
  workflow_opportunitysalesprocess?: OpportunitySalesProcess_Result[] | null;
  workflow_parent_workflow?: Workflow_Result[] | null;
  workflow_phonetocaseprocess?: PhoneToCaseProcess_Result[] | null;
  workflow_translationprocess?: TranslationProcess_Result[] | null;
  workflow_workflowbinary_Process?: workflowbinary_Result[] | null;
  workflowid_convertrule?: ConvertRule_Result[] | null;
  workflowid_profilerule?: ChannelAccessProfileRule_Result[] | null;
}
interface Workflow extends Workflow_Base, Workflow_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface Workflow_Create extends Workflow {
}
interface Workflow_Update extends Workflow {
}
interface Workflow_Select {
  activeworkflowid_guid: WebAttribute<Workflow_Select, { activeworkflowid_guid: string | null }, { activeworkflowid_formatted?: string }>;
  asyncautodelete: WebAttribute<Workflow_Select, { asyncautodelete: boolean | null }, {  }>;
  businessprocesstype: WebAttribute<Workflow_Select, { businessprocesstype: workflow_businessprocesstype | null }, { businessprocesstype_formatted?: string }>;
  category: WebAttribute<Workflow_Select, { category: workflow_category | null }, { category_formatted?: string }>;
  clientdata: WebAttribute<Workflow_Select, { clientdata: string | null }, {  }>;
  componentstate: WebAttribute<Workflow_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<Workflow_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Workflow_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Workflow_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  createstage: WebAttribute<Workflow_Select, { createstage: workflow_stage | null }, { createstage_formatted?: string }>;
  deletestage: WebAttribute<Workflow_Select, { deletestage: workflow_stage | null }, { deletestage_formatted?: string }>;
  description: WebAttribute<Workflow_Select, { description: string | null }, {  }>;
  entityimageid: WebAttribute<Workflow_Select, { entityimageid: string | null }, {  }>;
  formid: WebAttribute<Workflow_Select, { formid: string | null }, {  }>;
  inputparameters: WebAttribute<Workflow_Select, { inputparameters: string | null }, {  }>;
  introducedversion: WebAttribute<Workflow_Select, { introducedversion: string | null }, {  }>;
  iscrmuiworkflow: WebAttribute<Workflow_Select, { iscrmuiworkflow: boolean | null }, {  }>;
  iscustomizable: WebAttribute<Workflow_Select, { iscustomizable: any | null }, {  }>;
  iscustomprocessingstepallowedforotherpublishers: WebAttribute<Workflow_Select, { iscustomprocessingstepallowedforotherpublishers: any | null }, {  }>;
  ismanaged: WebAttribute<Workflow_Select, { ismanaged: boolean | null }, {  }>;
  istransacted: WebAttribute<Workflow_Select, { istransacted: boolean | null }, {  }>;
  languagecode: WebAttribute<Workflow_Select, { languagecode: number | null }, {  }>;
  mode: WebAttribute<Workflow_Select, { mode: workflow_mode | null }, { mode_formatted?: string }>;
  modifiedby_guid: WebAttribute<Workflow_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Workflow_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Workflow_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Workflow_Select, { name: string | null }, {  }>;
  ondemand: WebAttribute<Workflow_Select, { ondemand: boolean | null }, {  }>;
  overwritetime: WebAttribute<Workflow_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<Workflow_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Workflow_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Workflow_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Workflow_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentworkflowid_guid: WebAttribute<Workflow_Select, { parentworkflowid_guid: string | null }, { parentworkflowid_formatted?: string }>;
  plugintypeid_guid: WebAttribute<Workflow_Select, { plugintypeid_guid: string | null }, { plugintypeid_formatted?: string }>;
  primaryentity: WebAttribute<Workflow_Select, { primaryentity: string | null }, {  }>;
  processorder: WebAttribute<Workflow_Select, { processorder: number | null }, {  }>;
  processroleassignment: WebAttribute<Workflow_Select, { processroleassignment: string | null }, {  }>;
  processtriggerformid: WebAttribute<Workflow_Select, { processtriggerformid: string | null }, {  }>;
  processtriggerscope: WebAttribute<Workflow_Select, { processtriggerscope: processtrigger_scope | null }, { processtriggerscope_formatted?: string }>;
  rank: WebAttribute<Workflow_Select, { rank: number | null }, {  }>;
  rendererobjecttypecode: WebAttribute<Workflow_Select, { rendererobjecttypecode: string | null }, {  }>;
  runas: WebAttribute<Workflow_Select, { runas: workflow_runas | null }, { runas_formatted?: string }>;
  scope: WebAttribute<Workflow_Select, { scope: workflow_scope | null }, { scope_formatted?: string }>;
  sdkmessageid_guid: WebAttribute<Workflow_Select, { sdkmessageid_guid: string | null }, { sdkmessageid_formatted?: string }>;
  solutionid: WebAttribute<Workflow_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<Workflow_Select, { statecode: workflow_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Workflow_Select, { statuscode: workflow_statuscode | null }, { statuscode_formatted?: string }>;
  subprocess: WebAttribute<Workflow_Select, { subprocess: boolean | null }, {  }>;
  supportingsolutionid: WebAttribute<Workflow_Select, { supportingsolutionid: string | null }, {  }>;
  syncworkflowlogonfailure: WebAttribute<Workflow_Select, { syncworkflowlogonfailure: boolean | null }, {  }>;
  triggeroncreate: WebAttribute<Workflow_Select, { triggeroncreate: boolean | null }, {  }>;
  triggerondelete: WebAttribute<Workflow_Select, { triggerondelete: boolean | null }, {  }>;
  triggeronupdateattributelist: WebAttribute<Workflow_Select, { triggeronupdateattributelist: string | null }, {  }>;
  type: WebAttribute<Workflow_Select, { type: workflow_type | null }, { type_formatted?: string }>;
  uidata: WebAttribute<Workflow_Select, { uidata: string | null }, {  }>;
  uiflowtype: WebAttribute<Workflow_Select, { uiflowtype: workflow_uiflowtype | null }, { uiflowtype_formatted?: string }>;
  uniquename: WebAttribute<Workflow_Select, { uniquename: string | null }, {  }>;
  updatestage: WebAttribute<Workflow_Select, { updatestage: workflow_stage | null }, { updatestage_formatted?: string }>;
  versionnumber: WebAttribute<Workflow_Select, { versionnumber: number | null }, {  }>;
  workflowid: WebAttribute<Workflow_Select, { workflowid: string | null }, {  }>;
  workflowidunique: WebAttribute<Workflow_Select, { workflowidunique: string | null }, {  }>;
  xaml: WebAttribute<Workflow_Select, { xaml: string | null }, {  }>;
}
interface Workflow_Filter {
  activeworkflowid_guid: XQW.Guid;
  asyncautodelete: boolean;
  businessprocesstype: workflow_businessprocesstype;
  category: workflow_category;
  clientdata: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  createstage: workflow_stage;
  deletestage: workflow_stage;
  description: string;
  entityimageid: XQW.Guid;
  formid: XQW.Guid;
  inputparameters: string;
  introducedversion: string;
  iscrmuiworkflow: boolean;
  iscustomizable: any;
  iscustomprocessingstepallowedforotherpublishers: any;
  ismanaged: boolean;
  istransacted: boolean;
  languagecode: number;
  mode: workflow_mode;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  ondemand: boolean;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentworkflowid_guid: XQW.Guid;
  plugintypeid_guid: XQW.Guid;
  primaryentity: string;
  processorder: number;
  processroleassignment: string;
  processtriggerformid: XQW.Guid;
  processtriggerscope: processtrigger_scope;
  rank: number;
  rendererobjecttypecode: string;
  runas: workflow_runas;
  scope: workflow_scope;
  sdkmessageid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: workflow_statecode;
  statuscode: workflow_statuscode;
  subprocess: boolean;
  supportingsolutionid: XQW.Guid;
  syncworkflowlogonfailure: boolean;
  triggeroncreate: boolean;
  triggerondelete: boolean;
  triggeronupdateattributelist: string;
  type: workflow_type;
  uidata: string;
  uiflowtype: workflow_uiflowtype;
  uniquename: string;
  updatestage: workflow_stage;
  versionnumber: number;
  workflowid: XQW.Guid;
  workflowidunique: XQW.Guid;
  xaml: string;
}
interface Workflow_Expand {
  CatalogAssignments: WebExpand<Workflow_Expand, CatalogAssignment_Select, CatalogAssignment_Filter, { CatalogAssignments: CatalogAssignment_Result[] }>;
  Workflow_Annotation: WebExpand<Workflow_Expand, Annotation_Select, Annotation_Filter, { Workflow_Annotation: Annotation_Result[] }>;
  Workflow_SyncErrors: WebExpand<Workflow_Expand, SyncError_Select, SyncError_Filter, { Workflow_SyncErrors: SyncError_Result[] }>;
  Workflow_routingrule: WebExpand<Workflow_Expand, RoutingRule_Select, RoutingRule_Filter, { Workflow_routingrule: RoutingRule_Result[] }>;
  activeworkflowid: WebExpand<Workflow_Expand, Workflow_Select, Workflow_Filter, { activeworkflowid: Workflow_Result }>;
  botcomponent_workflow: WebExpand<Workflow_Expand, botcomponent_Select, botcomponent_Filter, { botcomponent_workflow: botcomponent_Result[] }>;
  convertruleitembase_workflowid: WebExpand<Workflow_Expand, ConvertRuleItem_Select, ConvertRuleItem_Filter, { convertruleitembase_workflowid: ConvertRuleItem_Result[] }>;
  createdby: WebExpand<Workflow_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Workflow_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entityimageinstance_workflow: WebExpand<Workflow_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageinstance_workflow: ImageDescriptor_Result }>;
  lk_asyncoperation_workflowactivationid: WebExpand<Workflow_Expand, AsyncOperation_Select, AsyncOperation_Filter, { lk_asyncoperation_workflowactivationid: AsyncOperation_Result[] }>;
  lk_processsession_processid: WebExpand<Workflow_Expand, ProcessSession_Select, ProcessSession_Filter, { lk_processsession_processid: ProcessSession_Result[] }>;
  modifiedby: WebExpand<Workflow_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Workflow_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_retrainworkflow_msdyn_toaimodel: WebExpand<Workflow_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { msdyn_retrainworkflow_msdyn_toaimodel: msdyn_AIModel_Result[] }>;
  msdyn_scheduleinferenceworkflow_msdyn_toaimodel: WebExpand<Workflow_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { msdyn_scheduleinferenceworkflow_msdyn_toaimodel: msdyn_AIModel_Result[] }>;
  ownerid: WebExpand<Workflow_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Workflow_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<Workflow_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<Workflow_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  parentworkflowid: WebExpand<Workflow_Expand, Workflow_Select, Workflow_Filter, { parentworkflowid: Workflow_Result }>;
  process_processstage: WebExpand<Workflow_Expand, ProcessStage_Select, ProcessStage_Filter, { process_processstage: ProcessStage_Result[] }>;
  process_processtrigger: WebExpand<Workflow_Expand, ProcessTrigger_Select, ProcessTrigger_Filter, { process_processtrigger: ProcessTrigger_Result[] }>;
  regardingobjectid_process: WebExpand<Workflow_Expand, flowsession_Select, flowsession_Filter, { regardingobjectid_process: flowsession_Result[] }>;
  slabase_workflowid: WebExpand<Workflow_Expand, SLA_Select, SLA_Filter, { slabase_workflowid: SLA_Result[] }>;
  slaitembase_workflowid: WebExpand<Workflow_Expand, SLAItem_Select, SLAItem_Filter, { slaitembase_workflowid: SLAItem_Result[] }>;
  userentityinstancedata_workflow: WebExpand<Workflow_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_workflow: UserEntityInstanceData_Result[] }>;
  workflow_active_workflow: WebExpand<Workflow_Expand, Workflow_Select, Workflow_Filter, { workflow_active_workflow: Workflow_Result[] }>;
  workflow_dependencies: WebExpand<Workflow_Expand, WorkflowDependency_Select, WorkflowDependency_Filter, { workflow_dependencies: WorkflowDependency_Result[] }>;
  workflow_expiredprocess: WebExpand<Workflow_Expand, ExpiredProcess_Select, ExpiredProcess_Filter, { workflow_expiredprocess: ExpiredProcess_Result[] }>;
  workflow_leadtoopportunitysalesprocess: WebExpand<Workflow_Expand, LeadToOpportunitySalesProcess_Select, LeadToOpportunitySalesProcess_Filter, { workflow_leadtoopportunitysalesprocess: LeadToOpportunitySalesProcess_Result[] }>;
  workflow_newprocess: WebExpand<Workflow_Expand, NewProcess_Select, NewProcess_Filter, { workflow_newprocess: NewProcess_Result[] }>;
  workflow_opportunitysalesprocess: WebExpand<Workflow_Expand, OpportunitySalesProcess_Select, OpportunitySalesProcess_Filter, { workflow_opportunitysalesprocess: OpportunitySalesProcess_Result[] }>;
  workflow_parent_workflow: WebExpand<Workflow_Expand, Workflow_Select, Workflow_Filter, { workflow_parent_workflow: Workflow_Result[] }>;
  workflow_phonetocaseprocess: WebExpand<Workflow_Expand, PhoneToCaseProcess_Select, PhoneToCaseProcess_Filter, { workflow_phonetocaseprocess: PhoneToCaseProcess_Result[] }>;
  workflow_translationprocess: WebExpand<Workflow_Expand, TranslationProcess_Select, TranslationProcess_Filter, { workflow_translationprocess: TranslationProcess_Result[] }>;
  workflow_workflowbinary_Process: WebExpand<Workflow_Expand, workflowbinary_Select, workflowbinary_Filter, { workflow_workflowbinary_Process: workflowbinary_Result[] }>;
  workflowid_convertrule: WebExpand<Workflow_Expand, ConvertRule_Select, ConvertRule_Filter, { workflowid_convertrule: ConvertRule_Result[] }>;
  workflowid_profilerule: WebExpand<Workflow_Expand, ChannelAccessProfileRule_Select, ChannelAccessProfileRule_Filter, { workflowid_profilerule: ChannelAccessProfileRule_Result[] }>;
}
interface Workflow_FormattedResult {
  activeworkflowid_formatted?: string;
  businessprocesstype_formatted?: string;
  category_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  createstage_formatted?: string;
  deletestage_formatted?: string;
  mode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentworkflowid_formatted?: string;
  plugintypeid_formatted?: string;
  processtriggerscope_formatted?: string;
  runas_formatted?: string;
  scope_formatted?: string;
  sdkmessageid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  type_formatted?: string;
  uiflowtype_formatted?: string;
  updatestage_formatted?: string;
}
interface Workflow_Result extends Workflow_Base, Workflow_Relationships {
  "@odata.etag": string;
  activeworkflowid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentworkflowid_guid: string | null;
  plugintypeid_guid: string | null;
  sdkmessageid_guid: string | null;
}
interface Workflow_RelatedOne {
  activeworkflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entityimageinstance_workflow: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentworkflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface Workflow_RelatedMany {
  CatalogAssignments: WebMappingRetrieve<CatalogAssignment_Select,CatalogAssignment_Expand,CatalogAssignment_Filter,CatalogAssignment_Fixed,CatalogAssignment_Result,CatalogAssignment_FormattedResult>;
  Workflow_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  Workflow_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  Workflow_routingrule: WebMappingRetrieve<RoutingRule_Select,RoutingRule_Expand,RoutingRule_Filter,RoutingRule_Fixed,RoutingRule_Result,RoutingRule_FormattedResult>;
  botcomponent_workflow: WebMappingRetrieve<botcomponent_Select,botcomponent_Expand,botcomponent_Filter,botcomponent_Fixed,botcomponent_Result,botcomponent_FormattedResult>;
  convertruleitembase_workflowid: WebMappingRetrieve<ConvertRuleItem_Select,ConvertRuleItem_Expand,ConvertRuleItem_Filter,ConvertRuleItem_Fixed,ConvertRuleItem_Result,ConvertRuleItem_FormattedResult>;
  lk_asyncoperation_workflowactivationid: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  lk_processsession_processid: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_retrainworkflow_msdyn_toaimodel: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
  msdyn_scheduleinferenceworkflow_msdyn_toaimodel: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
  process_processstage: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  process_processtrigger: WebMappingRetrieve<ProcessTrigger_Select,ProcessTrigger_Expand,ProcessTrigger_Filter,ProcessTrigger_Fixed,ProcessTrigger_Result,ProcessTrigger_FormattedResult>;
  regardingobjectid_process: WebMappingRetrieve<flowsession_Select,flowsession_Expand,flowsession_Filter,flowsession_Fixed,flowsession_Result,flowsession_FormattedResult>;
  slabase_workflowid: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  slaitembase_workflowid: WebMappingRetrieve<SLAItem_Select,SLAItem_Expand,SLAItem_Filter,SLAItem_Fixed,SLAItem_Result,SLAItem_FormattedResult>;
  userentityinstancedata_workflow: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  workflow_active_workflow: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  workflow_dependencies: WebMappingRetrieve<WorkflowDependency_Select,WorkflowDependency_Expand,WorkflowDependency_Filter,WorkflowDependency_Fixed,WorkflowDependency_Result,WorkflowDependency_FormattedResult>;
  workflow_expiredprocess: WebMappingRetrieve<ExpiredProcess_Select,ExpiredProcess_Expand,ExpiredProcess_Filter,ExpiredProcess_Fixed,ExpiredProcess_Result,ExpiredProcess_FormattedResult>;
  workflow_leadtoopportunitysalesprocess: WebMappingRetrieve<LeadToOpportunitySalesProcess_Select,LeadToOpportunitySalesProcess_Expand,LeadToOpportunitySalesProcess_Filter,LeadToOpportunitySalesProcess_Fixed,LeadToOpportunitySalesProcess_Result,LeadToOpportunitySalesProcess_FormattedResult>;
  workflow_newprocess: WebMappingRetrieve<NewProcess_Select,NewProcess_Expand,NewProcess_Filter,NewProcess_Fixed,NewProcess_Result,NewProcess_FormattedResult>;
  workflow_opportunitysalesprocess: WebMappingRetrieve<OpportunitySalesProcess_Select,OpportunitySalesProcess_Expand,OpportunitySalesProcess_Filter,OpportunitySalesProcess_Fixed,OpportunitySalesProcess_Result,OpportunitySalesProcess_FormattedResult>;
  workflow_parent_workflow: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  workflow_phonetocaseprocess: WebMappingRetrieve<PhoneToCaseProcess_Select,PhoneToCaseProcess_Expand,PhoneToCaseProcess_Filter,PhoneToCaseProcess_Fixed,PhoneToCaseProcess_Result,PhoneToCaseProcess_FormattedResult>;
  workflow_translationprocess: WebMappingRetrieve<TranslationProcess_Select,TranslationProcess_Expand,TranslationProcess_Filter,TranslationProcess_Fixed,TranslationProcess_Result,TranslationProcess_FormattedResult>;
  workflow_workflowbinary_Process: WebMappingRetrieve<workflowbinary_Select,workflowbinary_Expand,workflowbinary_Filter,workflowbinary_Fixed,workflowbinary_Result,workflowbinary_FormattedResult>;
  workflowid_convertrule: WebMappingRetrieve<ConvertRule_Select,ConvertRule_Expand,ConvertRule_Filter,ConvertRule_Fixed,ConvertRule_Result,ConvertRule_FormattedResult>;
  workflowid_profilerule: WebMappingRetrieve<ChannelAccessProfileRule_Select,ChannelAccessProfileRule_Expand,ChannelAccessProfileRule_Filter,ChannelAccessProfileRule_Fixed,ChannelAccessProfileRule_Result,ChannelAccessProfileRule_FormattedResult>;
}
interface WebEntitiesRetrieve {
  workflows: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface WebEntitiesRelated {
  workflows: WebMappingRelated<Workflow_RelatedOne,Workflow_RelatedMany>;
}
interface WebEntitiesCUDA {
  workflows: WebMappingCUDA<Workflow_Create,Workflow_Update,Workflow_Select>;
}
