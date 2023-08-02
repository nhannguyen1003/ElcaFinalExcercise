declare namespace Form.email.Main {
  namespace EnhancedEmaildeprecated {
    namespace Tabs {
      interface Attachments extends Xrm.SectionCollectionBase {
        get(name: "attachments"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Email extends Xrm.SectionCollectionBase {
        get(name: "recipient information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface EmailEngagementTab extends Xrm.SectionCollectionBase {
        get(name: "Emailrecipient_section_6"): Xrm.PageSection;
        get(name: "emailengagementactions"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Properties extends Xrm.SectionCollectionBase {
        get(name: "properties_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "bcc"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "cc"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "asyncoperation" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "statuscode"): Xrm.OptionSetAttribute<email_statuscode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "to"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "attachmentsGrid"): Xrm.SubGridControl<"activitymimeattachment">;
      get(name: "bcc"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "cc"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: "description"): Xrm.StringControl;
      get(name: "emailengagementactionscontrol"): Xrm.BaseControl;
      get(name: "emailrecipientactivitycontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "asyncoperation" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "statuscode"): Xrm.OptionSetControl<email_statuscode>;
      get(name: "subject"): Xrm.StringControl;
      get(name: "to"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Attachments"): Xrm.PageTab<Tabs.Attachments>;
      get(name: "Email"): Xrm.PageTab<Tabs.Email>;
      get(name: "EmailEngagementTab"): Xrm.PageTab<Tabs.EmailEngagementTab>;
      get(name: "Properties"): Xrm.PageTab<Tabs.Properties>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface EnhancedEmaildeprecated extends Xrm.PageBase<EnhancedEmaildeprecated.Attributes,EnhancedEmaildeprecated.Tabs,EnhancedEmaildeprecated.Controls> {
    getAttribute(attributeName: "bcc"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "cc"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "asyncoperation" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<email_statuscode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "to"): Xrm.LookupAttribute<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "attachmentsGrid"): Xrm.SubGridControl<"activitymimeattachment">;
    getControl(controlName: "bcc"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "cc"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "emailengagementactionscontrol"): Xrm.BaseControl;
    getControl(controlName: "emailrecipientactivitycontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "asyncoperation" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<email_statuscode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "to"): Xrm.LookupControl<"account" | "contact" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "queue" | "systemuser" | "unresolvedaddress">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
