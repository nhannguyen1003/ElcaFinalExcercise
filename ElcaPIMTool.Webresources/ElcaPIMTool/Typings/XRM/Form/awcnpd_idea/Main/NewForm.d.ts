declare namespace Form.awcnpd_idea.Main {
  namespace NewForm {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "awcnpd_detaileddescription"): Xrm.Attribute<string>;
      get(name: "awcnpd_name"): Xrm.Attribute<string>;
      get(name: "awcnpd_targetmarketsize"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "awcnpd_detaileddescription"): Xrm.StringControl;
      get(name: "awcnpd_name"): Xrm.StringControl;
      get(name: "awcnpd_targetmarketsize"): Xrm.NumberControl;
      get(name: "header_process_awcnpd_name"): Xrm.StringControl | null;
      get(name: "header_process_awcnpd_name_1"): Xrm.StringControl | null;
      get(name: "header_process_awcnpd_targetmarketsize"): Xrm.NumberControl | null;
      get(name: "header_process_awcnpd_targetmarketsize_1"): Xrm.NumberControl | null;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
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
  interface NewForm extends Xrm.PageBase<NewForm.Attributes,NewForm.Tabs,NewForm.Controls> {
    getAttribute(attributeName: "awcnpd_detaileddescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "awcnpd_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "awcnpd_targetmarketsize"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "awcnpd_detaileddescription"): Xrm.StringControl;
    getControl(controlName: "awcnpd_name"): Xrm.StringControl;
    getControl(controlName: "awcnpd_targetmarketsize"): Xrm.NumberControl;
    getControl(controlName: "header_process_awcnpd_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_awcnpd_name_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_awcnpd_targetmarketsize"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_awcnpd_targetmarketsize_1"): Xrm.NumberControl | null;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
