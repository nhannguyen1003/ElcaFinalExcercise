declare namespace Form.elca_project.Main {
  namespace Information {
    namespace Tabs {
      interface _7e6e76cc27d746df852a81d7325c9c96 extends Xrm.SectionCollectionBase {
        get(name: "{7e6e76cc-27d7-46df-852a-81d7325c9c96}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "elca_customer"): Xrm.Attribute<string>;
      get(name: "elca_enddate"): Xrm.DateAttribute;
      get(name: "elca_members"): Xrm.Attribute<string>;
      get(name: "elca_name"): Xrm.Attribute<string>;
      get(name: "elca_projectgroupid"): Xrm.LookupAttribute<"elca_projectgroup">;
      get(name: "elca_projectnumber"): Xrm.Attribute<string>;
      get(name: "elca_projectstatus"): Xrm.OptionSetAttribute<elca_projectstatus>;
      get(name: "elca_startdate"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<elca_project_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<elca_project_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Member"): Xrm.SubGridControl<"contact">;
      get(name: "elca_customer"): Xrm.StringControl;
      get(name: "elca_enddate"): Xrm.DateControl;
      get(name: "elca_members"): Xrm.StringControl;
      get(name: "elca_name"): Xrm.StringControl;
      get(name: "elca_projectgroupid"): Xrm.LookupControl<"elca_projectgroup">;
      get(name: "elca_projectnumber"): Xrm.StringControl;
      get(name: "elca_projectstatus"): Xrm.OptionSetControl<elca_projectstatus>;
      get(name: "elca_startdate"): Xrm.DateControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetControl<elca_project_statecode>;
      get(name: "statuscode"): Xrm.OptionSetControl<elca_project_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{7e6e76cc-27d7-46df-852a-81d7325c9c96}"): Xrm.PageTab<Tabs._7e6e76cc27d746df852a81d7325c9c96>;
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "elca_customer"): Xrm.Attribute<string>;
    getAttribute(attributeName: "elca_enddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "elca_members"): Xrm.Attribute<string>;
    getAttribute(attributeName: "elca_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "elca_projectgroupid"): Xrm.LookupAttribute<"elca_projectgroup">;
    getAttribute(attributeName: "elca_projectnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "elca_projectstatus"): Xrm.OptionSetAttribute<elca_projectstatus>;
    getAttribute(attributeName: "elca_startdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<elca_project_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<elca_project_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Member"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "elca_customer"): Xrm.StringControl;
    getControl(controlName: "elca_enddate"): Xrm.DateControl;
    getControl(controlName: "elca_members"): Xrm.StringControl;
    getControl(controlName: "elca_name"): Xrm.StringControl;
    getControl(controlName: "elca_projectgroupid"): Xrm.LookupControl<"elca_projectgroup">;
    getControl(controlName: "elca_projectnumber"): Xrm.StringControl;
    getControl(controlName: "elca_projectstatus"): Xrm.OptionSetControl<elca_projectstatus>;
    getControl(controlName: "elca_startdate"): Xrm.DateControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<elca_project_statecode>;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<elca_project_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
