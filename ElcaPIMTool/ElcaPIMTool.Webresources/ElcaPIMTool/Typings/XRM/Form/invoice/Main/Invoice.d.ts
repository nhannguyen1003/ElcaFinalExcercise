declare namespace Form.invoice.Main {
  namespace Invoice {
    namespace Tabs {
      interface Summary_tab extends Xrm.SectionCollectionBase {
        get(name: "DynamicProperties"): Xrm.PageSection;
        get(name: "addresses"): Xrm.PageSection;
        get(name: "dates"): Xrm.PageSection;
        get(name: "description_section"): Xrm.PageSection;
        get(name: "invoice information"): Xrm.PageSection;
        get(name: "products"): Xrm.PageSection;
        get(name: "sales_information"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: "suggestionsection"): Xrm.PageSection;
        get(name: "totals"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface details_tab extends Xrm.SectionCollectionBase {
        get(name: "Social Pane"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "billto_composite"): Xrm.Attribute<string>;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "datedelivered"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "discountamount"): Xrm.NumberAttribute;
      get(name: "discountpercentage"): Xrm.NumberAttribute;
      get(name: "duedate"): Xrm.DateAttribute;
      get(name: "freightamount"): Xrm.NumberAttribute;
      get(name: "invoicenumber"): Xrm.Attribute<string>;
      get(name: "ispricelocked"): Xrm.OptionSetAttribute<boolean>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<invoice_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "salesorderid"): Xrm.LookupAttribute<"salesorder">;
      get(name: "shippingmethodcode"): Xrm.OptionSetAttribute<invoice_shippingmethodcode>;
      get(name: "shipto_composite"): Xrm.Attribute<string>;
      get(name: "statecode"): Xrm.OptionSetAttribute<invoice_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<invoice_statuscode>;
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
      get(name: "datedelivered"): Xrm.DateControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "discountamount"): Xrm.NumberControl;
      get(name: "discountpercentage"): Xrm.NumberControl;
      get(name: "duedate"): Xrm.DateControl;
      get(name: "freightamount"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<invoice_statecode>;
      get(name: "header_statuscode"): Xrm.OptionSetControl<invoice_statuscode>;
      get(name: "header_totalamount"): Xrm.NumberControl;
      get(name: "invoicedetailsGrid"): Xrm.BaseControl;
      get(name: "invoicenumber"): Xrm.StringControl;
      get(name: "ispricelocked"): Xrm.OptionSetControl<boolean>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<invoice_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "salesorderid"): Xrm.LookupControl<"salesorder">;
      get(name: "shippingmethodcode"): Xrm.OptionSetControl<invoice_shippingmethodcode>;
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
      get(name: "Summary_tab"): Xrm.PageTab<Tabs.Summary_tab>;
      get(name: "details_tab"): Xrm.PageTab<Tabs.details_tab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Invoice extends Xrm.PageBase<Invoice.Attributes,Invoice.Tabs,Invoice.Controls> {
    getAttribute(attributeName: "billto_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "datedelivered"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "discountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "discountpercentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "duedate"): Xrm.DateAttribute;
    getAttribute(attributeName: "freightamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "invoicenumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ispricelocked"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<invoice_paymenttermscode>;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "salesorderid"): Xrm.LookupAttribute<"salesorder">;
    getAttribute(attributeName: "shippingmethodcode"): Xrm.OptionSetAttribute<invoice_shippingmethodcode>;
    getAttribute(attributeName: "shipto_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<invoice_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<invoice_statuscode>;
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
    getControl(controlName: "datedelivered"): Xrm.DateControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "discountamount"): Xrm.NumberControl;
    getControl(controlName: "discountpercentage"): Xrm.NumberControl;
    getControl(controlName: "duedate"): Xrm.DateControl;
    getControl(controlName: "freightamount"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<invoice_statecode>;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<invoice_statuscode>;
    getControl(controlName: "header_totalamount"): Xrm.NumberControl;
    getControl(controlName: "invoicedetailsGrid"): Xrm.BaseControl;
    getControl(controlName: "invoicenumber"): Xrm.StringControl;
    getControl(controlName: "ispricelocked"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<invoice_paymenttermscode>;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "salesorderid"): Xrm.LookupControl<"salesorder">;
    getControl(controlName: "shippingmethodcode"): Xrm.OptionSetControl<invoice_shippingmethodcode>;
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
