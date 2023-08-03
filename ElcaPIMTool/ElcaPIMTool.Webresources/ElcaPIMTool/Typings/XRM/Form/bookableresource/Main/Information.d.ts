declare namespace Form.bookableresource.Main {
  namespace Information {
    namespace Tabs {
      interface e37f45244a6642dc974c078756aef3fb extends Xrm.SectionCollectionBase {
        get(name: "{9e7dec57-2c62-4d5d-8b21-75d076c5d1a1}"): Xrm.PageSection;
        get(name: "{e37f4524-4a66-42dc-974c-078756aef3fb}_section_6"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "accountid"): Xrm.LookupAttribute<"account">;
      get(name: "contactid"): Xrm.LookupAttribute<"contact">;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "resourcetype"): Xrm.OptionSetAttribute<bookableresource_resourcetype>;
      get(name: "timezone"): Xrm.NumberAttribute;
      get(name: "userid"): Xrm.LookupAttribute<"systemuser">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ResourceCategory"): Xrm.SubGridControl<"bookableresourcecategoryassn">;
      get(name: "ResourceCharacteristics"): Xrm.SubGridControl<"bookableresourcecharacteristic">;
      get(name: "accountid"): Xrm.LookupControl<"account">;
      get(name: "contactid"): Xrm.LookupControl<"contact">;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "resourcetype"): Xrm.OptionSetControl<bookableresource_resourcetype>;
      get(name: "timezone"): Xrm.Control<Xrm.NumberAttribute>;
      get(name: "userid"): Xrm.LookupControl<"systemuser">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{e37f4524-4a66-42dc-974c-078756aef3fb}"): Xrm.PageTab<Tabs.e37f45244a6642dc974c078756aef3fb>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "accountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "contactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "resourcetype"): Xrm.OptionSetAttribute<bookableresource_resourcetype>;
    getAttribute(attributeName: "timezone"): Xrm.NumberAttribute;
    getAttribute(attributeName: "userid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ResourceCategory"): Xrm.SubGridControl<"bookableresourcecategoryassn">;
    getControl(controlName: "ResourceCharacteristics"): Xrm.SubGridControl<"bookableresourcecharacteristic">;
    getControl(controlName: "accountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "contactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "resourcetype"): Xrm.OptionSetControl<bookableresource_resourcetype>;
    getControl(controlName: "timezone"): Xrm.Control<Xrm.NumberAttribute>;
    getControl(controlName: "userid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
