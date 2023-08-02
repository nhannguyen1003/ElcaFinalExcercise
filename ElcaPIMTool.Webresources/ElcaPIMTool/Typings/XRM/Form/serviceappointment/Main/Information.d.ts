declare namespace Form.serviceappointment.Main {
  namespace Information {
    namespace Tabs {
      interface details extends Xrm.SectionCollectionBase {
        get(name: "appointment details"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface service extends Xrm.SectionCollectionBase {
        get(name: "general information"): Xrm.PageSection;
        get(name: "notes"): Xrm.PageSection;
        get(name: "scheduling information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "category"): Xrm.Attribute<string>;
      get(name: "customers"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "isalldayevent"): Xrm.OptionSetAttribute<boolean>;
      get(name: "location"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<serviceappointment_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
      get(name: "resources"): Xrm.LookupAttribute<"equipment" | "systemuser">;
      get(name: "scheduleddurationminutes"): Xrm.NumberAttribute;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "scheduledstart"): Xrm.DateAttribute;
      get(name: "serviceid"): Xrm.LookupAttribute<"service">;
      get(name: "siteid"): Xrm.LookupAttribute<"site">;
      get(name: "statecode"): Xrm.OptionSetAttribute<serviceappointment_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<serviceappointment_statuscode>;
      get(name: "subcategory"): Xrm.Attribute<string>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "category"): Xrm.StringControl;
      get(name: "customers"): Xrm.LookupControl<"account" | "contact">;
      get(name: "footer_statecode"): Xrm.OptionSetControl<serviceappointment_statecode>;
      get(name: "isalldayevent"): Xrm.OptionSetControl<boolean>;
      get(name: "location"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetControl<serviceappointment_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
      get(name: "resources"): Xrm.LookupControl<"equipment" | "systemuser">;
      get(name: "scheduleddurationminutes"): Xrm.NumberControl;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "scheduledstart"): Xrm.DateControl;
      get(name: "serviceid"): Xrm.LookupControl<"service">;
      get(name: "siteid"): Xrm.LookupControl<"site">;
      get(name: "statuscode"): Xrm.OptionSetControl<serviceappointment_statuscode>;
      get(name: "subcategory"): Xrm.StringControl;
      get(name: "subject"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "details"): Xrm.PageTab<Tabs.details>;
      get(name: "service"): Xrm.PageTab<Tabs.service>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "category"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customers"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "isalldayevent"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "location"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<serviceappointment_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
    getAttribute(attributeName: "resources"): Xrm.LookupAttribute<"equipment" | "systemuser">;
    getAttribute(attributeName: "scheduleddurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "serviceid"): Xrm.LookupAttribute<"service">;
    getAttribute(attributeName: "siteid"): Xrm.LookupAttribute<"site">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<serviceappointment_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<serviceappointment_statuscode>;
    getAttribute(attributeName: "subcategory"): Xrm.Attribute<string>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "category"): Xrm.StringControl;
    getControl(controlName: "customers"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<serviceappointment_statecode>;
    getControl(controlName: "isalldayevent"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "location"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<serviceappointment_prioritycode>;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "awcnpd_idea" | "awcnpd_prototype" | "awc_prototype" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_playbookinstance" | "msdyn_postalbum" | "opportunity" | "quote" | "salesorder" | "site">;
    getControl(controlName: "resources"): Xrm.LookupControl<"equipment" | "systemuser">;
    getControl(controlName: "scheduleddurationminutes"): Xrm.NumberControl;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "scheduledstart"): Xrm.DateControl;
    getControl(controlName: "serviceid"): Xrm.LookupControl<"service">;
    getControl(controlName: "siteid"): Xrm.LookupControl<"site">;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<serviceappointment_statuscode>;
    getControl(controlName: "subcategory"): Xrm.StringControl;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
