declare namespace Form.letter.Main {
  namespace Letter {
    namespace Tabs {
      interface SUMMARY_TAB extends Xrm.SectionCollectionBase {
        get(name: "Letter description"): Xrm.PageSection;
        get(name: "Letter details"): Xrm.PageSection;
        get(name: "general information"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "actualdurationminutes"): Xrm.NumberAttribute;
      get(name: "address"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "directioncode"): Xrm.OptionSetAttribute<boolean>;
      get(name: "from"): Xrm.LookupAttribute<"account" | "contact" | "lead" | "systemuser">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<letter_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<letter_statecode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "to"): Xrm.LookupAttribute<"account" | "contact" | "lead" | "systemuser">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "actualdurationminutes"): Xrm.NumberControl;
      get(name: "address"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "directioncode"): Xrm.OptionSetControl<boolean>;
      get(name: "from"): Xrm.LookupControl<"account" | "contact" | "lead" | "systemuser">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_priority"): Xrm.OptionSetControl<letter_prioritycode>;
      get(name: "header_scheduledend"): Xrm.DateControl;
      get(name: "header_statecode"): Xrm.OptionSetControl<letter_statecode>;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
      get(name: "subject"): Xrm.StringControl;
      get(name: "to"): Xrm.LookupControl<"account" | "contact" | "lead" | "systemuser">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "SUMMARY_TAB"): Xrm.PageTab<Tabs.SUMMARY_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Letter extends Xrm.PageBase<Letter.Attributes,Letter.Tabs,Letter.Controls> {
    getAttribute(attributeName: "actualdurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "address"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "directioncode"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "from"): Xrm.LookupAttribute<"account" | "contact" | "lead" | "systemuser">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<letter_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<letter_statecode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "to"): Xrm.LookupAttribute<"account" | "contact" | "lead" | "systemuser">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "actualdurationminutes"): Xrm.NumberControl;
    getControl(controlName: "address"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "directioncode"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "from"): Xrm.LookupControl<"account" | "contact" | "lead" | "systemuser">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_priority"): Xrm.OptionSetControl<letter_prioritycode>;
    getControl(controlName: "header_scheduledend"): Xrm.DateControl;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<letter_statecode>;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "to"): Xrm.LookupControl<"account" | "contact" | "lead" | "systemuser">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}