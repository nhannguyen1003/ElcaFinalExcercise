declare namespace Form.pricelevel.Main {
  namespace PriceLevel {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "Description"): Xrm.PageSection;
        get(name: "price level information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Price_List_Items extends Xrm.SectionCollectionBase {
        get(name: "pricelistbyproduct"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface TERRITORYRELATIONSHIP_TAB extends Xrm.SectionCollectionBase {
        get(name: "Territories"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "begindate"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "enddate"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<pricelevel_statuscode>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "RelatedTerritoriesGrid"): Xrm.SubGridControl<"connection">;
      get(name: "begindate"): Xrm.DateControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "enddate"): Xrm.DateControl;
      get(name: "header_statuscode"): Xrm.OptionSetControl<pricelevel_statuscode>;
      get(name: "name"): Xrm.StringControl;
      get(name: "pricelistitemsgrid"): Xrm.SubGridControl<"productpricelevel">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: "Price_List_Items"): Xrm.PageTab<Tabs.Price_List_Items>;
      get(name: "TERRITORYRELATIONSHIP_TAB"): Xrm.PageTab<Tabs.TERRITORYRELATIONSHIP_TAB>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface PriceLevel extends Xrm.PageBase<PriceLevel.Attributes,PriceLevel.Tabs,PriceLevel.Controls> {
    getAttribute(attributeName: "begindate"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "enddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<pricelevel_statuscode>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "RelatedTerritoriesGrid"): Xrm.SubGridControl<"connection">;
    getControl(controlName: "begindate"): Xrm.DateControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "enddate"): Xrm.DateControl;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<pricelevel_statuscode>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "pricelistitemsgrid"): Xrm.SubGridControl<"productpricelevel">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
