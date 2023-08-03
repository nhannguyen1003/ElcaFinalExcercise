declare namespace Form.sla.Main {
  namespace SLA {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "allowpauseresume"): Xrm.OptionSetAttribute<boolean>;
      get(name: "applicablefrompicklist"): Xrm.OptionSetAttribute<slabase_applicablefrom>;
      get(name: "businesshoursid"): Xrm.LookupAttribute<"calendar">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "objecttypecode"): Xrm.OptionSetAttribute<sla_objecttypecode>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "slatype"): Xrm.OptionSetAttribute<sla_slatype>;
      get(name: "slaversion"): Xrm.OptionSetAttribute<sla_slaversion>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<sla_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "AllowPauseResume"): Xrm.OptionSetControl<boolean>;
      get(name: "SLADetails"): Xrm.SubGridControl<"slaitem">;
      get(name: "SLAType"): Xrm.OptionSetControl<sla_slatype>;
      get(name: "applicablefrompicklist"): Xrm.OptionSetControl<slabase_applicablefrom>;
      get(name: "businesshoursid"): Xrm.LookupControl<"calendar">;
      get(name: "description"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statuscode"): Xrm.OptionSetControl<sla_statuscode>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "objecttypecode"): Xrm.OptionSetControl<sla_objecttypecode>;
      get(name: "slaversion"): Xrm.OptionSetControl<sla_slaversion>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SLA extends Xrm.PageBase<SLA.Attributes,SLA.Tabs,SLA.Controls> {
    getAttribute(attributeName: "allowpauseresume"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "applicablefrompicklist"): Xrm.OptionSetAttribute<slabase_applicablefrom>;
    getAttribute(attributeName: "businesshoursid"): Xrm.LookupAttribute<"calendar">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "objecttypecode"): Xrm.OptionSetAttribute<sla_objecttypecode>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "slatype"): Xrm.OptionSetAttribute<sla_slatype>;
    getAttribute(attributeName: "slaversion"): Xrm.OptionSetAttribute<sla_slaversion>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<sla_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "AllowPauseResume"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "SLADetails"): Xrm.SubGridControl<"slaitem">;
    getControl(controlName: "SLAType"): Xrm.OptionSetControl<sla_slatype>;
    getControl(controlName: "applicablefrompicklist"): Xrm.OptionSetControl<slabase_applicablefrom>;
    getControl(controlName: "businesshoursid"): Xrm.LookupControl<"calendar">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<sla_statuscode>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "objecttypecode"): Xrm.OptionSetControl<sla_objecttypecode>;
    getControl(controlName: "slaversion"): Xrm.OptionSetControl<sla_slaversion>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
