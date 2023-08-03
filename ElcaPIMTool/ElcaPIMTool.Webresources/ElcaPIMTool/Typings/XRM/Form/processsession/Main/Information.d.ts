declare namespace Form.processsession.Main {
  namespace Information {
    namespace Tabs {
      interface Comments extends Xrm.SectionCollectionBase {
        get(name: "Comments"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Details extends Xrm.SectionCollectionBase {
        get(name: "Details_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface LinkedSessions extends Xrm.SectionCollectionBase {
        get(name: "Linked Sessions"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Summary extends Xrm.SectionCollectionBase {
        get(name: "Summary"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _474B8A52CB224194A5A6F21FD40B7417 extends Xrm.SectionCollectionBase {
        get(name: "Details"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "canceledby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "canceledon"): Xrm.DateAttribute;
      get(name: "comments"): Xrm.Attribute<string>;
      get(name: "completedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "completedon"): Xrm.DateAttribute;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "nextlinkedsessionid"): Xrm.LookupAttribute<"processsession">;
      get(name: "originatingsessionid"): Xrm.LookupAttribute<"processsession">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "previouslinkedsessionid"): Xrm.LookupAttribute<"processsession">;
      get(name: "processid"): Xrm.LookupAttribute<"workflow">;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "activitymonitor" | "adminsettingsentity" | "annotation" | "appelement" | "appmodulecomponentedge" | "appmodulecomponentnode" | "appointment" | "appsetting" | "awcnpd_feedback" | "awcnpd_idea" | "awcnpd_prototype" | "awc_customdemoentity" | "awc_idea" | "awc_prototype" | "awc_venue" | "bookableresource" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bookableresourcecategory" | "bookableresourcecategoryassn" | "bookableresourcecharacteristic" | "bookableresourcegroup" | "bookingstatus" | "bot" | "botcomponent" | "businessunit" | "businessunitnewsarticle" | "campaign" | "campaignactivity" | "campaignresponse" | "canvasappextendedmetadata" | "cascadegrantrevokeaccessrecordstracker" | "cascadegrantrevokeaccessversiontracker" | "catalog" | "catalogassignment" | "channelaccessprofile" | "channelaccessprofilerule" | "characteristic" | "competitor" | "connection" | "connectionreference" | "connectionrole" | "connector" | "constraintbasedgroup" | "contact" | "contract" | "contractdetail" | "contracttemplate" | "conversationtranscript" | "convertrule" | "customapi" | "customapirequestparameter" | "customapiresponseproperty" | "customeraddress" | "customeropportunityrole" | "customerrelationship" | "datalakefolder" | "datalakefolderpermission" | "datalakeworkspace" | "datalakeworkspacepermission" | "discount" | "discounttype" | "elca_project" | "elca_projectgroup" | "email" | "entitlement" | "entitlementchannel" | "entitlemententityallocationtypemapping" | "entitlementtemplate" | "environmentvariabledefinition" | "environmentvariablevalue" | "equipment" | "expiredprocess" | "exportsolutionupload" | "externalparty" | "externalpartyitem" | "ext_event" | "fax" | "goal" | "goalrollupquery" | "holidaywrapper" | "incident" | "internalcatalogassignment" | "invoice" | "invoicedetail" | "kbarticle" | "kbarticlecomment" | "kbarticletemplate" | "knowledgearticle" | "knowledgearticleincident" | "knowledgebaserecord" | "lead" | "leadtoopportunitysalesprocess" | "letter" | "list" | "listoperation" | "mailbox" | "mailmergetemplate" | "marketingformdisplayattributes" | "mbs_pluginprofile" | "metric" | "msdynce_botcontent" | "msdyn_actioncardregarding" | "msdyn_actioncardrolesetting" | "msdyn_aibdataset" | "msdyn_aibdatasetfile" | "msdyn_aibdatasetrecord" | "msdyn_aibdatasetscontainer" | "msdyn_aibfile" | "msdyn_aibfileattacheddata" | "msdyn_aiconfiguration" | "msdyn_aifptrainingdocument" | "msdyn_aimodel" | "msdyn_aiodimage" | "msdyn_aiodlabel" | "msdyn_aiodtrainingboundingbox" | "msdyn_aiodtrainingimage" | "msdyn_aitemplate" | "msdyn_autocapturerule" | "msdyn_autocapturesettings" | "msdyn_callablecontext" | "msdyn_collabgraphresource" | "msdyn_databaseversion" | "msdyn_entityrankingrule" | "msdyn_federatedarticle" | "msdyn_federatedarticleincident" | "msdyn_flowcardtype" | "msdyn_helppage" | "msdyn_icebreakersconfig" | "msdyn_kmfederatedsearchconfig" | "msdyn_knowledgearticleimage" | "msdyn_knowledgearticletemplate" | "msdyn_knowledgeinteractioninsight" | "msdyn_knowledgesearchinsight" | "msdyn_msteamssetting" | "msdyn_msteamssettingsv2" | "msdyn_notesanalysisconfig" | "msdyn_playbookactivity" | "msdyn_playbookactivityattribute" | "msdyn_playbookcategory" | "msdyn_playbookinstance" | "msdyn_playbooktemplate" | "msdyn_postalbum" | "msdyn_postconfig" | "msdyn_postruleconfig" | "msdyn_relationshipinsightsunifiedconfig" | "msdyn_richtextfile" | "msdyn_salesinsightssettings" | "msdyn_siconfig" | "msdyn_sikeyvalueconfig" | "msdyn_teamscollaboration" | "msdyn_tour" | "msdyn_untrackedappointment" | "msdyn_upgraderun" | "msdyn_upgradestep" | "msdyn_upgradeversion" | "msdyn_wallsavedquery" | "msdyn_wallsavedqueryusersettings" | "newprocess" | "opportunity" | "opportunityproduct" | "opportunitysalesprocess" | "package" | "pdfsetting" | "phonecall" | "phonetocaseprocess" | "position" | "pricelevel" | "processstageparameter" | "product" | "productassociation" | "productpricelevel" | "productsubstitute" | "provisionlanguageforuser" | "queue" | "queueitem" | "quote" | "quotedetail" | "ratingmodel" | "ratingvalue" | "recurringappointmentmaster" | "relationshiprole" | "report" | "rollupfield" | "routingrule" | "routingruleitem" | "salesliterature" | "salesliteratureitem" | "salesorder" | "salesorderdetail" | "service" | "serviceappointment" | "serviceplan" | "settingdefinition" | "sharepointdocumentlocation" | "sharepointsite" | "site" | "sla" | "socialactivity" | "socialprofile" | "solutioncomponentattributeconfiguration" | "solutioncomponentconfiguration" | "solutioncomponentrelationshipconfiguration" | "stagesolutionupload" | "subject" | "systemuser" | "task" | "team" | "template" | "territory" | "theme" | "transactioncurrency" | "translationprocess" | "usermapping" | "workflowbinary">;
      get(name: "startedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "startedon"): Xrm.DateAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<processsession_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<processsession_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "canceledby"): Xrm.LookupControl<"systemuser">;
      get(name: "canceledon"): Xrm.DateControl;
      get(name: "comments"): Xrm.StringControl;
      get(name: "completedby"): Xrm.LookupControl<"systemuser">;
      get(name: "completedon"): Xrm.DateControl;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<processsession_statecode>;
      get(name: "name"): Xrm.StringControl;
      get(name: "nextlinkedsessionid"): Xrm.LookupControl<"processsession">;
      get(name: "originatingsessionid"): Xrm.LookupControl<"processsession">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "previouslinkedsessionid"): Xrm.LookupControl<"processsession">;
      get(name: "processid"): Xrm.LookupControl<"workflow">;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "activitymonitor" | "adminsettingsentity" | "annotation" | "appelement" | "appmodulecomponentedge" | "appmodulecomponentnode" | "appointment" | "appsetting" | "awcnpd_feedback" | "awcnpd_idea" | "awcnpd_prototype" | "awc_customdemoentity" | "awc_idea" | "awc_prototype" | "awc_venue" | "bookableresource" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bookableresourcecategory" | "bookableresourcecategoryassn" | "bookableresourcecharacteristic" | "bookableresourcegroup" | "bookingstatus" | "bot" | "botcomponent" | "businessunit" | "businessunitnewsarticle" | "campaign" | "campaignactivity" | "campaignresponse" | "canvasappextendedmetadata" | "cascadegrantrevokeaccessrecordstracker" | "cascadegrantrevokeaccessversiontracker" | "catalog" | "catalogassignment" | "channelaccessprofile" | "channelaccessprofilerule" | "characteristic" | "competitor" | "connection" | "connectionreference" | "connectionrole" | "connector" | "constraintbasedgroup" | "contact" | "contract" | "contractdetail" | "contracttemplate" | "conversationtranscript" | "convertrule" | "customapi" | "customapirequestparameter" | "customapiresponseproperty" | "customeraddress" | "customeropportunityrole" | "customerrelationship" | "datalakefolder" | "datalakefolderpermission" | "datalakeworkspace" | "datalakeworkspacepermission" | "discount" | "discounttype" | "elca_project" | "elca_projectgroup" | "email" | "entitlement" | "entitlementchannel" | "entitlemententityallocationtypemapping" | "entitlementtemplate" | "environmentvariabledefinition" | "environmentvariablevalue" | "equipment" | "expiredprocess" | "exportsolutionupload" | "externalparty" | "externalpartyitem" | "ext_event" | "fax" | "goal" | "goalrollupquery" | "holidaywrapper" | "incident" | "internalcatalogassignment" | "invoice" | "invoicedetail" | "kbarticle" | "kbarticlecomment" | "kbarticletemplate" | "knowledgearticle" | "knowledgearticleincident" | "knowledgebaserecord" | "lead" | "leadtoopportunitysalesprocess" | "letter" | "list" | "listoperation" | "mailbox" | "mailmergetemplate" | "marketingformdisplayattributes" | "mbs_pluginprofile" | "metric" | "msdynce_botcontent" | "msdyn_actioncardregarding" | "msdyn_actioncardrolesetting" | "msdyn_aibdataset" | "msdyn_aibdatasetfile" | "msdyn_aibdatasetrecord" | "msdyn_aibdatasetscontainer" | "msdyn_aibfile" | "msdyn_aibfileattacheddata" | "msdyn_aiconfiguration" | "msdyn_aifptrainingdocument" | "msdyn_aimodel" | "msdyn_aiodimage" | "msdyn_aiodlabel" | "msdyn_aiodtrainingboundingbox" | "msdyn_aiodtrainingimage" | "msdyn_aitemplate" | "msdyn_autocapturerule" | "msdyn_autocapturesettings" | "msdyn_callablecontext" | "msdyn_collabgraphresource" | "msdyn_databaseversion" | "msdyn_entityrankingrule" | "msdyn_federatedarticle" | "msdyn_federatedarticleincident" | "msdyn_flowcardtype" | "msdyn_helppage" | "msdyn_icebreakersconfig" | "msdyn_kmfederatedsearchconfig" | "msdyn_knowledgearticleimage" | "msdyn_knowledgearticletemplate" | "msdyn_knowledgeinteractioninsight" | "msdyn_knowledgesearchinsight" | "msdyn_msteamssetting" | "msdyn_msteamssettingsv2" | "msdyn_notesanalysisconfig" | "msdyn_playbookactivity" | "msdyn_playbookactivityattribute" | "msdyn_playbookcategory" | "msdyn_playbookinstance" | "msdyn_playbooktemplate" | "msdyn_postalbum" | "msdyn_postconfig" | "msdyn_postruleconfig" | "msdyn_relationshipinsightsunifiedconfig" | "msdyn_richtextfile" | "msdyn_salesinsightssettings" | "msdyn_siconfig" | "msdyn_sikeyvalueconfig" | "msdyn_teamscollaboration" | "msdyn_tour" | "msdyn_untrackedappointment" | "msdyn_upgraderun" | "msdyn_upgradestep" | "msdyn_upgradeversion" | "msdyn_wallsavedquery" | "msdyn_wallsavedqueryusersettings" | "newprocess" | "opportunity" | "opportunityproduct" | "opportunitysalesprocess" | "package" | "pdfsetting" | "phonecall" | "phonetocaseprocess" | "position" | "pricelevel" | "processstageparameter" | "product" | "productassociation" | "productpricelevel" | "productsubstitute" | "provisionlanguageforuser" | "queue" | "queueitem" | "quote" | "quotedetail" | "ratingmodel" | "ratingvalue" | "recurringappointmentmaster" | "relationshiprole" | "report" | "rollupfield" | "routingrule" | "routingruleitem" | "salesliterature" | "salesliteratureitem" | "salesorder" | "salesorderdetail" | "service" | "serviceappointment" | "serviceplan" | "settingdefinition" | "sharepointdocumentlocation" | "sharepointsite" | "site" | "sla" | "socialactivity" | "socialprofile" | "solutioncomponentattributeconfiguration" | "solutioncomponentconfiguration" | "solutioncomponentrelationshipconfiguration" | "stagesolutionupload" | "subject" | "systemuser" | "task" | "team" | "template" | "territory" | "theme" | "transactioncurrency" | "translationprocess" | "usermapping" | "workflowbinary">;
      get(name: "startedby"): Xrm.LookupControl<"systemuser">;
      get(name: "startedon"): Xrm.DateControl;
      get(name: "statuscode"): Xrm.OptionSetControl<processsession_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Comments"): Xrm.PageTab<Tabs.Comments>;
      get(name: "Details"): Xrm.PageTab<Tabs.Details>;
      get(name: "Linked Sessions"): Xrm.PageTab<Tabs.LinkedSessions>;
      get(name: "Summary"): Xrm.PageTab<Tabs.Summary>;
      get(name: "{474B8A52-CB22-4194-A5A6-F21FD40B7417}"): Xrm.PageTab<Tabs._474B8A52CB224194A5A6F21FD40B7417>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "canceledby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "canceledon"): Xrm.DateAttribute;
    getAttribute(attributeName: "comments"): Xrm.Attribute<string>;
    getAttribute(attributeName: "completedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "completedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "nextlinkedsessionid"): Xrm.LookupAttribute<"processsession">;
    getAttribute(attributeName: "originatingsessionid"): Xrm.LookupAttribute<"processsession">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "previouslinkedsessionid"): Xrm.LookupAttribute<"processsession">;
    getAttribute(attributeName: "processid"): Xrm.LookupAttribute<"workflow">;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "activitymonitor" | "adminsettingsentity" | "annotation" | "appelement" | "appmodulecomponentedge" | "appmodulecomponentnode" | "appointment" | "appsetting" | "awcnpd_feedback" | "awcnpd_idea" | "awcnpd_prototype" | "awc_customdemoentity" | "awc_idea" | "awc_prototype" | "awc_venue" | "bookableresource" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bookableresourcecategory" | "bookableresourcecategoryassn" | "bookableresourcecharacteristic" | "bookableresourcegroup" | "bookingstatus" | "bot" | "botcomponent" | "businessunit" | "businessunitnewsarticle" | "campaign" | "campaignactivity" | "campaignresponse" | "canvasappextendedmetadata" | "cascadegrantrevokeaccessrecordstracker" | "cascadegrantrevokeaccessversiontracker" | "catalog" | "catalogassignment" | "channelaccessprofile" | "channelaccessprofilerule" | "characteristic" | "competitor" | "connection" | "connectionreference" | "connectionrole" | "connector" | "constraintbasedgroup" | "contact" | "contract" | "contractdetail" | "contracttemplate" | "conversationtranscript" | "convertrule" | "customapi" | "customapirequestparameter" | "customapiresponseproperty" | "customeraddress" | "customeropportunityrole" | "customerrelationship" | "datalakefolder" | "datalakefolderpermission" | "datalakeworkspace" | "datalakeworkspacepermission" | "discount" | "discounttype" | "elca_project" | "elca_projectgroup" | "email" | "entitlement" | "entitlementchannel" | "entitlemententityallocationtypemapping" | "entitlementtemplate" | "environmentvariabledefinition" | "environmentvariablevalue" | "equipment" | "expiredprocess" | "exportsolutionupload" | "externalparty" | "externalpartyitem" | "ext_event" | "fax" | "goal" | "goalrollupquery" | "holidaywrapper" | "incident" | "internalcatalogassignment" | "invoice" | "invoicedetail" | "kbarticle" | "kbarticlecomment" | "kbarticletemplate" | "knowledgearticle" | "knowledgearticleincident" | "knowledgebaserecord" | "lead" | "leadtoopportunitysalesprocess" | "letter" | "list" | "listoperation" | "mailbox" | "mailmergetemplate" | "marketingformdisplayattributes" | "mbs_pluginprofile" | "metric" | "msdynce_botcontent" | "msdyn_actioncardregarding" | "msdyn_actioncardrolesetting" | "msdyn_aibdataset" | "msdyn_aibdatasetfile" | "msdyn_aibdatasetrecord" | "msdyn_aibdatasetscontainer" | "msdyn_aibfile" | "msdyn_aibfileattacheddata" | "msdyn_aiconfiguration" | "msdyn_aifptrainingdocument" | "msdyn_aimodel" | "msdyn_aiodimage" | "msdyn_aiodlabel" | "msdyn_aiodtrainingboundingbox" | "msdyn_aiodtrainingimage" | "msdyn_aitemplate" | "msdyn_autocapturerule" | "msdyn_autocapturesettings" | "msdyn_callablecontext" | "msdyn_collabgraphresource" | "msdyn_databaseversion" | "msdyn_entityrankingrule" | "msdyn_federatedarticle" | "msdyn_federatedarticleincident" | "msdyn_flowcardtype" | "msdyn_helppage" | "msdyn_icebreakersconfig" | "msdyn_kmfederatedsearchconfig" | "msdyn_knowledgearticleimage" | "msdyn_knowledgearticletemplate" | "msdyn_knowledgeinteractioninsight" | "msdyn_knowledgesearchinsight" | "msdyn_msteamssetting" | "msdyn_msteamssettingsv2" | "msdyn_notesanalysisconfig" | "msdyn_playbookactivity" | "msdyn_playbookactivityattribute" | "msdyn_playbookcategory" | "msdyn_playbookinstance" | "msdyn_playbooktemplate" | "msdyn_postalbum" | "msdyn_postconfig" | "msdyn_postruleconfig" | "msdyn_relationshipinsightsunifiedconfig" | "msdyn_richtextfile" | "msdyn_salesinsightssettings" | "msdyn_siconfig" | "msdyn_sikeyvalueconfig" | "msdyn_teamscollaboration" | "msdyn_tour" | "msdyn_untrackedappointment" | "msdyn_upgraderun" | "msdyn_upgradestep" | "msdyn_upgradeversion" | "msdyn_wallsavedquery" | "msdyn_wallsavedqueryusersettings" | "newprocess" | "opportunity" | "opportunityproduct" | "opportunitysalesprocess" | "package" | "pdfsetting" | "phonecall" | "phonetocaseprocess" | "position" | "pricelevel" | "processstageparameter" | "product" | "productassociation" | "productpricelevel" | "productsubstitute" | "provisionlanguageforuser" | "queue" | "queueitem" | "quote" | "quotedetail" | "ratingmodel" | "ratingvalue" | "recurringappointmentmaster" | "relationshiprole" | "report" | "rollupfield" | "routingrule" | "routingruleitem" | "salesliterature" | "salesliteratureitem" | "salesorder" | "salesorderdetail" | "service" | "serviceappointment" | "serviceplan" | "settingdefinition" | "sharepointdocumentlocation" | "sharepointsite" | "site" | "sla" | "socialactivity" | "socialprofile" | "solutioncomponentattributeconfiguration" | "solutioncomponentconfiguration" | "solutioncomponentrelationshipconfiguration" | "stagesolutionupload" | "subject" | "systemuser" | "task" | "team" | "template" | "territory" | "theme" | "transactioncurrency" | "translationprocess" | "usermapping" | "workflowbinary">;
    getAttribute(attributeName: "startedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "startedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<processsession_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<processsession_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "canceledby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "canceledon"): Xrm.DateControl;
    getControl(controlName: "comments"): Xrm.StringControl;
    getControl(controlName: "completedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "completedon"): Xrm.DateControl;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<processsession_statecode>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "nextlinkedsessionid"): Xrm.LookupControl<"processsession">;
    getControl(controlName: "originatingsessionid"): Xrm.LookupControl<"processsession">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "previouslinkedsessionid"): Xrm.LookupControl<"processsession">;
    getControl(controlName: "processid"): Xrm.LookupControl<"workflow">;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "activitymonitor" | "adminsettingsentity" | "annotation" | "appelement" | "appmodulecomponentedge" | "appmodulecomponentnode" | "appointment" | "appsetting" | "awcnpd_feedback" | "awcnpd_idea" | "awcnpd_prototype" | "awc_customdemoentity" | "awc_idea" | "awc_prototype" | "awc_venue" | "bookableresource" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bookableresourcecategory" | "bookableresourcecategoryassn" | "bookableresourcecharacteristic" | "bookableresourcegroup" | "bookingstatus" | "bot" | "botcomponent" | "businessunit" | "businessunitnewsarticle" | "campaign" | "campaignactivity" | "campaignresponse" | "canvasappextendedmetadata" | "cascadegrantrevokeaccessrecordstracker" | "cascadegrantrevokeaccessversiontracker" | "catalog" | "catalogassignment" | "channelaccessprofile" | "channelaccessprofilerule" | "characteristic" | "competitor" | "connection" | "connectionreference" | "connectionrole" | "connector" | "constraintbasedgroup" | "contact" | "contract" | "contractdetail" | "contracttemplate" | "conversationtranscript" | "convertrule" | "customapi" | "customapirequestparameter" | "customapiresponseproperty" | "customeraddress" | "customeropportunityrole" | "customerrelationship" | "datalakefolder" | "datalakefolderpermission" | "datalakeworkspace" | "datalakeworkspacepermission" | "discount" | "discounttype" | "elca_project" | "elca_projectgroup" | "email" | "entitlement" | "entitlementchannel" | "entitlemententityallocationtypemapping" | "entitlementtemplate" | "environmentvariabledefinition" | "environmentvariablevalue" | "equipment" | "expiredprocess" | "exportsolutionupload" | "externalparty" | "externalpartyitem" | "ext_event" | "fax" | "goal" | "goalrollupquery" | "holidaywrapper" | "incident" | "internalcatalogassignment" | "invoice" | "invoicedetail" | "kbarticle" | "kbarticlecomment" | "kbarticletemplate" | "knowledgearticle" | "knowledgearticleincident" | "knowledgebaserecord" | "lead" | "leadtoopportunitysalesprocess" | "letter" | "list" | "listoperation" | "mailbox" | "mailmergetemplate" | "marketingformdisplayattributes" | "mbs_pluginprofile" | "metric" | "msdynce_botcontent" | "msdyn_actioncardregarding" | "msdyn_actioncardrolesetting" | "msdyn_aibdataset" | "msdyn_aibdatasetfile" | "msdyn_aibdatasetrecord" | "msdyn_aibdatasetscontainer" | "msdyn_aibfile" | "msdyn_aibfileattacheddata" | "msdyn_aiconfiguration" | "msdyn_aifptrainingdocument" | "msdyn_aimodel" | "msdyn_aiodimage" | "msdyn_aiodlabel" | "msdyn_aiodtrainingboundingbox" | "msdyn_aiodtrainingimage" | "msdyn_aitemplate" | "msdyn_autocapturerule" | "msdyn_autocapturesettings" | "msdyn_callablecontext" | "msdyn_collabgraphresource" | "msdyn_databaseversion" | "msdyn_entityrankingrule" | "msdyn_federatedarticle" | "msdyn_federatedarticleincident" | "msdyn_flowcardtype" | "msdyn_helppage" | "msdyn_icebreakersconfig" | "msdyn_kmfederatedsearchconfig" | "msdyn_knowledgearticleimage" | "msdyn_knowledgearticletemplate" | "msdyn_knowledgeinteractioninsight" | "msdyn_knowledgesearchinsight" | "msdyn_msteamssetting" | "msdyn_msteamssettingsv2" | "msdyn_notesanalysisconfig" | "msdyn_playbookactivity" | "msdyn_playbookactivityattribute" | "msdyn_playbookcategory" | "msdyn_playbookinstance" | "msdyn_playbooktemplate" | "msdyn_postalbum" | "msdyn_postconfig" | "msdyn_postruleconfig" | "msdyn_relationshipinsightsunifiedconfig" | "msdyn_richtextfile" | "msdyn_salesinsightssettings" | "msdyn_siconfig" | "msdyn_sikeyvalueconfig" | "msdyn_teamscollaboration" | "msdyn_tour" | "msdyn_untrackedappointment" | "msdyn_upgraderun" | "msdyn_upgradestep" | "msdyn_upgradeversion" | "msdyn_wallsavedquery" | "msdyn_wallsavedqueryusersettings" | "newprocess" | "opportunity" | "opportunityproduct" | "opportunitysalesprocess" | "package" | "pdfsetting" | "phonecall" | "phonetocaseprocess" | "position" | "pricelevel" | "processstageparameter" | "product" | "productassociation" | "productpricelevel" | "productsubstitute" | "provisionlanguageforuser" | "queue" | "queueitem" | "quote" | "quotedetail" | "ratingmodel" | "ratingvalue" | "recurringappointmentmaster" | "relationshiprole" | "report" | "rollupfield" | "routingrule" | "routingruleitem" | "salesliterature" | "salesliteratureitem" | "salesorder" | "salesorderdetail" | "service" | "serviceappointment" | "serviceplan" | "settingdefinition" | "sharepointdocumentlocation" | "sharepointsite" | "site" | "sla" | "socialactivity" | "socialprofile" | "solutioncomponentattributeconfiguration" | "solutioncomponentconfiguration" | "solutioncomponentrelationshipconfiguration" | "stagesolutionupload" | "subject" | "systemuser" | "task" | "team" | "template" | "territory" | "theme" | "transactioncurrency" | "translationprocess" | "usermapping" | "workflowbinary">;
    getControl(controlName: "startedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "startedon"): Xrm.DateControl;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<processsession_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
