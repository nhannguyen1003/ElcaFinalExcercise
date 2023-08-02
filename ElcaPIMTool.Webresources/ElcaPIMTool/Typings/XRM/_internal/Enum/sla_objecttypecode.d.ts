declare const enum sla_objecttypecode {
  Account = 1,
  Employee = 2,
  Opportunity = 3,
  Lead = 4,
  Note = 5,
  BusinessUnitMap = 6,
  Owner = 7,
  User = 8,
  Team = 9,
  BusinessUnit = 10,
  SystemUserPrincipal = 14,
  AccountLeads = 16,
  ContactInvoices = 17,
  ContactQuotes = 18,
  ContactOrders = 19,
  ServiceContractContact = 20,
  ProductSalesLiterature = 21,
  ContactLeads = 22,
  LeadCompetitors = 24,
  OpportunityCompetitors = 25,
  CompetitorSalesLiterature = 26,
  LeadProduct = 27,
  Subscription = 29,
  FilterTemplate = 30,
  PrivilegeObjectTypeCode = 31,
  SalesProcessInstance = 32,
  SubscriptionSynchronizationInformation = 33,
  Trackinginformationfordeletedentities = 35,
  Clientupdate = 36,
  SubscriptionManuallyTrackedObject = 37,
  SystemUserBusinessUnitEntityMap = 42,
  FieldSharing = 44,
  SubscriptionStatisticOffline = 45,
  SubscriptionStatisticOutlook = 46,
  SubscriptionSyncEntryOffline = 47,
  SubscriptionSyncEntryOutlook = 48,
  Position = 50,
  SystemUserManagerMap = 51,
  UserSearchFacet = 52,
  GlobalSearchConfiguration = 54,
  FileAttachment = 55,
  VirtualEntityDataProvider = 78,
  VirtualEntityDataSource = 85,
  Teamtemplate = 92,
  SocialProfile = 99,
  ServicePlan = 101,
  Case = 112,
  ChildIncidentCount = 113,
  Competitor = 123,
  IndexedArticle = 126,
  Article = 127,
  Subject = 129,
  Announcement = 132,
  ActivityParty = 135,
  UserSettings = 150,
  CanvasApp = 300,
  CallbackRegistration = 301,
  Connector = 372,
  EnvironmentVariableDefinition = 380,
  EnvironmentVariableValue = 381,
  AITemplate = 400,
  AIModel = 401,
  AIConfiguration = 402,
  EntityAnalyticsConfig = 430,
  ImageAttributeConfiguration = 431,
  EntityImageConfiguration = 432,
  NewProcess = 950,
  TranslationProcess = 951,
  PhoneToCaseProcess = 952,
  OpportunitySalesProcess = 953,
  LeadToOpportunitySalesProcess = 954,
  ExpiredProcess = 955,
  Attachment_2 = 1001,
  Attachment = 1002,
  InternalAddress = 1003,
  CompetitorAddress = 1004,
  CompetitorProduct = 1006,
  ImageDescriptor = 1007,
  Contract = 1010,
  ContractLine = 1011,
  Discount = 1013,
  ArticleTemplate = 1016,
  LeadAddress = 1017,
  Organization = 1019,
  OrganizationUI = 1021,
  PriceList = 1022,
  Privilege = 1023,
  Product = 1024,
  ProductAssociation = 1025,
  PriceListItem = 1026,
  ProductRelationship = 1028,
  SystemForm = 1030,
  UserDashboard = 1031,
  SecurityRole = 1036,
  RoleTemplate = 1037,
  SalesLiterature = 1038,
  View = 1039,
  StringMap = 1043,
  Property = 1048,
  PropertyOptionSetItem = 1049,
  Unit = 1055,
  UnitGroup = 1056,
  SalesAttachment = 1070,
  Address = 1071,
  SubscriptionClients = 1072,
  StatusMap = 1075,
  DiscountList = 1080,
  ArticleComment = 1082,
  OpportunityProduct = 1083,
  Quote = 1084,
  QuoteProduct = 1085,
  UserFiscalCalendar = 1086,
  Order = 1088,
  OrderProduct = 1089,
  Invoice = 1090,
  InvoiceProduct = 1091,
  AuthorizationServer = 1094,
  PartnerApplication = 1095,
  SystemChart = 1111,
  UserChart = 1112,
  RibbonTabToCommandMapping = 1113,
  RibbonContextGroup = 1115,
  RibbonCommand = 1116,
  RibbonRule = 1117,
  ApplicationRibbons = 1120,
  RibbonDifference = 1130,
  ReplicationBacklog = 1140,
  Characteristic = 1141,
  RatingValue = 1142,
  RatingModel = 1144,
  BookableResourceBooking = 1145,
  BookableResourceBookingHeader = 1146,
  BookableResourceCategory = 1147,
  BookableResourceCharacteristic = 1148,
  BookableResourceCategoryAssn = 1149,
  BookableResource = 1150,
  BookableResourceGroup = 1151,
  BookingStatus = 1152,
  DocumentSuggestions = 1189,
  SuggestionCardTemplate = 1190,
  FieldSecurityProfile = 1200,
  FieldPermission = 1201,
  TeamProfiles = 1203,
  ChannelPropertyGroup = 1234,
  PropertyAssociation = 1235,
  ChannelProperty = 1236,
  SocialInsightsConfiguration = 1300,
  SavedOrganizationInsightsConfiguration = 1309,
  PropertyInstance = 1333,
  SyncAttributeMappingProfile = 1400,
  SyncAttributeMapping = 1401,
  TeamSyncAttributeMappingProfiles = 1403,
  PrincipalSyncAttributeMap = 1404,
  AnnualFiscalCalendar = 2000,
  SemiannualFiscalCalendar = 2001,
  QuarterlyFiscalCalendar = 2002,
  MonthlyFiscalCalendar = 2003,
  FixedMonthlyFiscalCalendar = 2004,
  EmailTemplate = 2010,
  ContractTemplate = 2011,
  UnresolvedAddress = 2012,
  Territory = 2013,
  Theme = 2015,
  UserMapping = 2016,
  Queue = 2020,
  QueueItemCount = 2023,
  QueueMemberCount = 2024,
  License = 2027,
  QueueItem = 2029,
  UserEntityUISettings = 2500,
  UserEntityInstanceData = 2501,
  IntegrationStatus = 3000,
  ChannelAccessProfile = 3005,
  ExternalParty = 3008,
  ConnectionRole = 3231,
  ConnectionRoleObjectTypeCode = 3233,
  Connection = 3234,
  FacilityEquipment = 4000,
  Service = 4001,
  Resource = 4002,
  Calendar = 4003,
  CalendarRule = 4004,
  SchedulingGroup = 4005,
  ResourceSpecification = 4006,
  ResourceGroup = 4007,
  Site = 4009,
  ResourceExpansion = 4010,
  InterProcessLock = 4011,
  EmailHash = 4023,
  DisplayStringMap = 4101,
  DisplayString = 4102,
  Notification = 4110,
  ExchangeSyncIdMapping = 4120,
  Activity = 4200,
  Appointment = 4201,
  Email = 4202,
  Fax = 4204,
  CaseResolution = 4206,
  Letter = 4207,
  OpportunityClose = 4208,
  OrderClose = 4209,
  PhoneCall = 4210,
  QuoteClose = 4211,
  Task = 4212,
  ServiceActivity = 4214,
  Commitment = 4215,
  SocialActivity = 4216,
  UntrackedEmail = 4220,
  SavedView = 4230,
  MetadataDifference = 4231,
  BusinessDataLocalizedLabel = 4232,
  RecurrenceRule = 4250,
  RecurringAppointment = 4251,
  EmailSearch = 4299,
  MarketingList = 4300,
  MarketingListMember = 4301,
  Campaign = 4400,
  CampaignResponse = 4401,
  CampaignActivity = 4402,
  CampaignItem = 4403,
  CampaignActivityItem = 4404,
  BulkOperationLog = 4405,
  QuickCampaign = 4406,
  DataImport = 4410,
  DataMap = 4411,
  ImportSourceFile = 4412,
  ImportData = 4413,
  DuplicateDetectionRule = 4414,
  DuplicateRecord = 4415,
  DuplicateRuleCondition = 4416,
  ColumnMapping = 4417,
  ListValueMapping = 4418,
  LookupMapping = 4419,
  OwnerMapping = 4420,
  BookableResourceBookingtoExchangeIdMapping = 4421,
  ImportLog = 4423,
  BulkDeleteOperation = 4424,
  BulkDeleteFailure = 4425,
  TransformationMapping = 4426,
  TransformationParameterMapping = 4427,
  ImportEntityMapping = 4428,
  DataPerformanceDashboard = 4450,
  OfficeDocument = 4490,
  RelationshipRole = 4500,
  RelationshipRoleMap = 4501,
  CustomerRelationship = 4502,
  OpportunityRelationship = 4503,
  EntitlementTemplateProduct = 4545,
  Auditing = 4567,
  RibbonClientMetadata = 4579,
  EntityMap = 4600,
  AttributeMap = 4601,
  PluginType = 4602,
  PluginTypeStatistic = 4603,
  PluginAssembly = 4605,
  SdkMessage = 4606,
  SdkMessageFilter = 4607,
  SdkMessageProcessingStep = 4608,
  SdkMessageRequest = 4609,
  SdkMessageResponse = 4610,
  SdkMessageResponseField = 4611,
  SdkMessagePair = 4613,
  SdkMessageRequestField = 4614,
  SdkMessageProcessingStepImage = 4615,
  SdkMessageProcessingStepSecureConfiguration = 4616,
  ServiceEndpoint = 4618,
  PluginTraceLog = 4619,
  SystemJob = 4700,
  WorkflowWaitSubscription = 4702,
  Process = 4703,
  ProcessDependency = 4704,
  ISVConfig = 4705,
  ProcessLog = 4706,
  ApplicationFile = 4707,
  OrganizationStatistic = 4708,
  SiteMap = 4709,
  ProcessSession = 4710,
  ExpanderEvent = 4711,
  ProcessTrigger = 4712,
  FlowSession = 4720,
  ProcessStage = 4724,
  BusinessProcessFlowInstance = 4725,
  WebWizard = 4800,
  WizardPage = 4802,
  WebWizardAccessPrivilege = 4803,
  TimeZoneDefinition = 4810,
  TimeZoneRule = 4811,
  TimeZoneLocalizedName = 4812,
  EntitlementProduct = 6363,
  SystemApplicationMetadata = 7000,
  UserApplicationMetadata = 7001,
  Solution = 7100,
  Publisher = 7101,
  PublisherAddress = 7102,
  SolutionComponent = 7103,
  SolutionComponentDefinition = 7104,
  Dependency = 7105,
  DependencyNode = 7106,
  InvalidDependency = 7107,
  DependencyFeature = 7108,
  RuntimeDependency = 7200,
  EntitlementContact = 7272,
  Post = 8000,
  PostRole = 8001,
  PostRegarding = 8002,
  Follow = 8003,
  Comment = 8005,
  Like = 8006,
  ACIViewMapper = 8040,
  Trace = 8050,
  TraceAssociation = 8051,
  TraceRegarding = 8052,
  RoutingRuleSet = 8181,
  RuleItem = 8199,
  AppModuleMetadata = 8700,
  AppModuleMetadataDependency = 8701,
  AppModuleMetadataAsyncOperation = 8702,
  HierarchyRule = 8840,
  ModeldrivenApp = 9006,
  AppModuleComponent = 9007,
  AppModuleRoles = 9009,
  AppConfigMaster = 9011,
  AppConfiguration = 9012,
  AppConfigurationInstance = 9013,
  Report = 9100,
  ReportRelatedEntity = 9101,
  ReportRelatedCategory = 9102,
  ReportVisibility = 9103,
  ReportLink = 9104,
  Currency = 9105,
  MailMergeTemplate = 9106,
  ImportJob = 9107,
  LocalConfigStore = 9201,
  RecordCreationandUpdateRule = 9300,
  RecordCreationandUpdateRuleItem = 9301,
  WebResource = 9333,
  ChannelAccessProfileRule = 9400,
  ChannelAccessProfileRuleItem = 9401,
  SharePointSite = 9502,
  SharepointDocument = 9507,
  DocumentLocation = 9508,
  SharePointData = 9509,
  RollupProperties = 9510,
  RollupJob = 9511,
  Goal = 9600,
  RollupQuery = 9602,
  GoalMetric = 9603,
  RollupField = 9604,
  EmailServerProfile = 9605,
  Mailbox = 9606,
  MailboxStatistics = 9607,
  MailboxAutoTrackingFolder = 9608,
  MailboxTrackingCategory = 9609,
  ProcessConfiguration = 9650,
  OrganizationInsightsNotification = 9690,
  OrganizationInsightsMetric = 9699,
  Entitlement = 9700,
  EntitlementChannel = 9701,
  EntitlementTemplate = 9702,
  EntitlementTemplateChannel = 9703,
  EntitlementEntityAllocationTypeMapping = 9704,
  SLA = 9750,
  SLAItem = 9751,
  SLAKPIInstance = 9752,
  CustomControl = 9753,
  CustomControlResource = 9754,
  CustomControlDefaultConfig = 9755,
  Entity = 9800,
  Attribute = 9808,
  OptionSet = 9809,
  EntityKey = 9810,
  EntityRelationship = 9811,
  ManagedProperty = 9812,
  RelationshipEntity = 9813,
  RelationshipAttribute = 9814,
  MobileOfflineProfile = 9866,
  MobileOfflineProfileItem = 9867,
  MobileOfflineProfileItemAssociation = 9868,
  SyncError = 9869,
  OfflineCommandDefinition = 9870,
  LanguageProvisioningState = 9875,
  RibbonMetadataToProcess = 9880,
  SolutionHistoryData = 9890,
  NavigationSetting = 9900,
  MultiEntitySearch = 9910,
  MultiSelectOptionValue = 9912,
  HierarchySecurityConfiguration = 9919,
  KnowledgeBaseRecord = 9930,
  IncidentKnowledgeBaseRecord = 9931,
  TimeStampDateMapping = 9932,
  AzureServiceConnection = 9936,
  DocumentTemplate = 9940,
  PersonalDocumentTemplate = 9941,
  TopicModelConfiguration = 9942,
  TopicModelExecutionHistory = 9943,
  TopicModel = 9944,
  TextAnalyticsEntityMapping = 9945,
  TopicHistory = 9946,
  KnowledgeSearchModel = 9947,
  TextAnalyticsTopic = 9948,
  AdvancedSimilarityRule = 9949,
  OfficeGraphDocument = 9950,
  SimilarityRule = 9951,
  KnowledgeArticle = 9953,
  KnowledgeArticleIncident = 9954,
  KnowledgeArticleViews = 9955,
  Language = 9957,
  Feedback_2 = 9958,
  Category = 9959,
  KnowledgeArticleCategory = 9960,
  DelveActionHub = 9961,
  ActionCard = 9962,
  ActionCardUserState = 9968,
  ActionCardUserSettings = 9973,
  ActionCardType = 9983,
  InteractionforEmail = 9986,
  ExternalPartyItem = 9987,
  HolidayWrapper = 9996,
  EmailSignature = 9997,
  ODatav4DataSource = 10000,
  SolutionComponentSummary = 10001,
  SolutionComponentDataSource = 10002,
  msdyn_relationshipinsightsunifiedconfig = 10003,
  siconfig = 10004,
  ProfileAlbum = 10005,
  PostConfiguration = 10006,
  PostRuleConfiguration = 10007,
  WallView = 10008,
  Filter = 10009,
  SolutionHistory = 10010,
  SolutionHistoryDataSource = 10011,
  SolutionComponentAttributeConfiguration = 10012,
  SolutionComponentConfiguration = 10013,
  SolutionComponentRelationshipConfiguration = 10014,
  ComponentLayer = 10015,
  ComponentLayerDataSource = 10016,
  Package = 10017,
  StageSolutionUpload = 10019,
  ExportSolutionUpload = 10020,
  DataLakeFolder = 10021,
  DataLakeFolderPermission = 10022,
  DataLakeWorkspace = 10023,
  DataLakeWorkspacePermission = 10024,
  ProvisionLanguageForUser = 10025,
  CascadeGrantRevokeAccessRecordsTracker = 10026,
  CascadeGrantRevokeAccessVersionTracker = 10027,
  ModelDrivenAppElement = 10029,
  ModelDrivenAppComponentNodesEdge = 10030,
  ModelDrivenAppComponentNode = 10031,
  ModelDrivenAppSetting = 10032,
  SettingDefinition = 10033,
  CanvasAppExtendedMetadata = 10034,
  ProcessStageParameter = 10035,
  WorkflowBinary = 10036,
  ConnectionReference = 10037,
  HelpPage = 10038,
  BotContent = 10039,
  ConversationTranscript = 10040,
  Chatbot = 10041,
  Chatbotsubcomponent = 10042,
  PDFSetting = 10046,
  RichTextAttachment = 10047,
  KnowledgeFederatedArticle = 10048,
  KnowledgeFederatedArticleIncident = 10049,
  Searchprovider = 10050,
  KnowledgeArticleImage = 10051,
  KnowledgeInteractionInsight = 10052,
  KnowledgeSearchInsight = 10053,
  KnowledgeArticleTemplate = 10054,
  Catalog = 10055,
  CatalogAssignment = 10056,
  InternalCatalogAssignment = 10057,
  CustomAPI = 10058,
  CustomAPIRequestParameter = 10059,
  CustomAPIResponseProperty = 10060,
  AIBuilderDataset = 10061,
  AIBuilderDatasetFile = 10062,
  AIBuilderDatasetRecord = 10063,
  AIBuilderDatasetsContainer = 10064,
  AIBuilderFile = 10065,
  AIBuilderFileAttachedData = 10066,
  AIFormProcessingDocument = 10067,
  AIObjectDetectionImage = 10068,
  AIObjectDetectionLabel = 10069,
  AIObjectDetectionBoundingBox = 10070,
  AIObjectDetectionImageMapping = 10071,
  ListOperation = 10073,
  DatabaseVersion = 10074,
  UpgradeRun = 10075,
  UpgradeStep = 10076,
  UpgradeVersion = 10077,
  Activitymonitor = 10078,
  AvailableTimes = 10079,
  AvailableTimesDataSource = 10080,
  resourcegroupdatasource = 10081,
  VirtualResourceGroupResource = 10082,
  PlaybookCallableContext = 10083,
  Playbookactivity = 10084,
  Playbookactivityattribute = 10085,
  Playbookcategory = 10086,
  Playbook = 10087,
  Playbooktemplate = 10088,
  admin_settings_entity = 10090,
  SIKeyValueConfig = 10091,
  ActionCardRegarding = 10092,
  ActionCardRoleSetting = 10093,
  EntityRankingRule = 10094,
  flowcardtype = 10095,
  salesinsightssettings = 10096,
  AutoCaptureRule = 10097,
  AutoCaptureSettings = 10098,
  UntrackedAppointment = 10099,
  SuggestedActivity = 10100,
  SuggestedActivityDataSource = 10101,
  SuggestedContact = 10102,
  Suggestedcontactsdatasource = 10103,
  NotesanalysisConfig = 10104,
  icebreakersconfig = 10105,
  MicrosoftTeamsGraphresourceEntity = 10106,
  msdyn_msteamssetting = 10107,
  msdyn_msteamssettingsv2 = 10108,
  MicrosoftTeamsCollaborationentity = 10109,
  Tour = 10110,
  MarketingFormDisplayAttributes = 10111,
  CustomDemoEntity = 10112,
  venue = 10114,
  Idea = 10115,
  Prototype = 10116,
  Project = 10121,
  ProjectGroup = 10122,
  Feedback = 10130,
  Prototype_2 = 10131,
  Idea_2 = 10132,
  Event = 10134,
  PluginProfile = 10140,
}
