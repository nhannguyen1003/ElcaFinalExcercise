declare namespace Form.salesorder.Main {
  namespace Order {
    namespace Tabs {
      interface details_tab extends Xrm.SectionCollectionBase {
        get(name: "Social Pane"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface summary_tab extends Xrm.SectionCollectionBase {
        get(name: "DynamicProperties"): Xrm.PageSection;
        get(name: "addresses"): Xrm.PageSection;
        get(name: "description_section"): Xrm.PageSection;
        get(name: "order information"): Xrm.PageSection;
        get(name: "products"): Xrm.PageSection;
        get(name: "sales information"): Xrm.PageSection;
        get(name: "shipping dates"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: "suggestionsection"): Xrm.PageSection;
        get(name: "totals"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "billto_composite"): Xrm.Attribute<string>;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "datefulfilled"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "discountamount"): Xrm.NumberAttribute;
      get(name: "discountpercentage"): Xrm.NumberAttribute;
      get(name: "freightamount"): Xrm.NumberAttribute;
      get(name: "freighttermscode"): Xrm.OptionSetAttribute<salesorder_freighttermscode>;
      get(name: "ispricelocked"): Xrm.OptionSetAttribute<boolean>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
      get(name: "ordernumber"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<salesorder_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "quoteid"): Xrm.LookupAttribute<"quote">;
      get(name: "requestdeliveryby"): Xrm.DateAttribute;
      get(name: "shippingmethodcode"): Xrm.OptionSetAttribute<salesorder_shippingmethodcode>;
      get(name: "shipto_composite"): Xrm.Attribute<string>;
      get(name: "statecode"): Xrm.OptionSetAttribute<salesorder_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<salesorder_statuscode>;
      get(name: "totalamount"): Xrm.NumberAttribute;
      get(name: "totalamountlessfreight"): Xrm.NumberAttribute;
      get(name: "totallineitemamount"): Xrm.NumberAttribute;
      get(name: "totaltax"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "willcall"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
      get(name: "ProductSuggestions_LinkControl"): Xrm.BaseControl;
      get(name: "billto_composite"): Xrm.StringControl;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "datefulfilled"): Xrm.DateControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "discountamount"): Xrm.NumberControl;
      get(name: "discountpercentage"): Xrm.NumberControl;
      get(name: "freightamount"): Xrm.NumberControl;
      get(name: "freighttermscode"): Xrm.OptionSetControl<salesorder_freighttermscode>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<salesorder_statecode>;
      get(name: "header_statuscode"): Xrm.OptionSetControl<salesorder_statuscode>;
      get(name: "header_totalamount"): Xrm.NumberControl;
      get(name: "ispricelocked"): Xrm.OptionSetControl<boolean>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "ordernumber"): Xrm.StringControl;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<salesorder_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "quoteid"): Xrm.LookupControl<"quote">;
      get(name: "requestdeliveryby"): Xrm.DateControl;
      get(name: "salesorderdetailsGrid"): Xrm.BaseControl;
      get(name: "shippingmethodcode"): Xrm.OptionSetControl<salesorder_shippingmethodcode>;
      get(name: "shipto_composite"): Xrm.StringControl;
      get(name: "totalamount"): Xrm.NumberControl;
      get(name: "totalamountlessfreight"): Xrm.NumberControl;
      get(name: "totallineitemamount"): Xrm.NumberControl;
      get(name: "totaltax"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "willcall"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "details_tab"): Xrm.PageTab<Tabs.details_tab>;
      get(name: "summary_tab"): Xrm.PageTab<Tabs.summary_tab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Order extends Xrm.PageBase<Order.Attributes,Order.Tabs,Order.Controls> {
    getAttribute(attributeName: "billto_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "datefulfilled"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "discountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "discountpercentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "freightamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "freighttermscode"): Xrm.OptionSetAttribute<salesorder_freighttermscode>;
    getAttribute(attributeName: "ispricelocked"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
    getAttribute(attributeName: "ordernumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<salesorder_paymenttermscode>;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "quoteid"): Xrm.LookupAttribute<"quote">;
    getAttribute(attributeName: "requestdeliveryby"): Xrm.DateAttribute;
    getAttribute(attributeName: "shippingmethodcode"): Xrm.OptionSetAttribute<salesorder_shippingmethodcode>;
    getAttribute(attributeName: "shipto_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<salesorder_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<salesorder_statuscode>;
    getAttribute(attributeName: "totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totalamountlessfreight"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totallineitemamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totaltax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "willcall"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "ProductSuggestions_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "billto_composite"): Xrm.StringControl;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "datefulfilled"): Xrm.DateControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "discountamount"): Xrm.NumberControl;
    getControl(controlName: "discountpercentage"): Xrm.NumberControl;
    getControl(controlName: "freightamount"): Xrm.NumberControl;
    getControl(controlName: "freighttermscode"): Xrm.OptionSetControl<salesorder_freighttermscode>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<salesorder_statecode>;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<salesorder_statuscode>;
    getControl(controlName: "header_totalamount"): Xrm.NumberControl;
    getControl(controlName: "ispricelocked"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "ordernumber"): Xrm.StringControl;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<salesorder_paymenttermscode>;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "quoteid"): Xrm.LookupControl<"quote">;
    getControl(controlName: "requestdeliveryby"): Xrm.DateControl;
    getControl(controlName: "salesorderdetailsGrid"): Xrm.BaseControl;
    getControl(controlName: "shippingmethodcode"): Xrm.OptionSetControl<salesorder_shippingmethodcode>;
    getControl(controlName: "shipto_composite"): Xrm.StringControl;
    getControl(controlName: "totalamount"): Xrm.NumberControl;
    getControl(controlName: "totalamountlessfreight"): Xrm.NumberControl;
    getControl(controlName: "totallineitemamount"): Xrm.NumberControl;
    getControl(controlName: "totaltax"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "willcall"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
