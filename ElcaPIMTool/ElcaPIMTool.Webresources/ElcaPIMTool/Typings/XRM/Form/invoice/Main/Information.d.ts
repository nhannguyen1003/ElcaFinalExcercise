declare namespace Form.invoice.Main {
  namespace Information {
    namespace Tabs {
      interface addresses extends Xrm.SectionCollectionBase {
        get(name: "bill to address"): Xrm.PageSection;
        get(name: "ship to address"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface administration extends Xrm.SectionCollectionBase {
        get(name: "internal information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "invoice information"): Xrm.PageSection;
        get(name: "totals"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notes extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface shipping extends Xrm.SectionCollectionBase {
        get(name: "dates"): Xrm.PageSection;
        get(name: "description"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "billto_city"): Xrm.Attribute<string>;
      get(name: "billto_country"): Xrm.Attribute<string>;
      get(name: "billto_fax"): Xrm.Attribute<string>;
      get(name: "billto_line1"): Xrm.Attribute<string>;
      get(name: "billto_line2"): Xrm.Attribute<string>;
      get(name: "billto_line3"): Xrm.Attribute<string>;
      get(name: "billto_name"): Xrm.Attribute<string>;
      get(name: "billto_postalcode"): Xrm.Attribute<string>;
      get(name: "billto_stateorprovince"): Xrm.Attribute<string>;
      get(name: "billto_telephone"): Xrm.Attribute<string>;
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
      get(name: "shipto_city"): Xrm.Attribute<string>;
      get(name: "shipto_country"): Xrm.Attribute<string>;
      get(name: "shipto_fax"): Xrm.Attribute<string>;
      get(name: "shipto_line1"): Xrm.Attribute<string>;
      get(name: "shipto_line2"): Xrm.Attribute<string>;
      get(name: "shipto_line3"): Xrm.Attribute<string>;
      get(name: "shipto_name"): Xrm.Attribute<string>;
      get(name: "shipto_postalcode"): Xrm.Attribute<string>;
      get(name: "shipto_stateorprovince"): Xrm.Attribute<string>;
      get(name: "shipto_telephone"): Xrm.Attribute<string>;
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
      get(name: "billto_city"): Xrm.StringControl;
      get(name: "billto_country"): Xrm.StringControl;
      get(name: "billto_fax"): Xrm.StringControl;
      get(name: "billto_line1"): Xrm.StringControl;
      get(name: "billto_line2"): Xrm.StringControl;
      get(name: "billto_line3"): Xrm.StringControl;
      get(name: "billto_name"): Xrm.StringControl;
      get(name: "billto_postalcode"): Xrm.StringControl;
      get(name: "billto_stateorprovince"): Xrm.StringControl;
      get(name: "billto_telephone"): Xrm.StringControl;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "datedelivered"): Xrm.DateControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "discountamount"): Xrm.NumberControl;
      get(name: "discountpercentage"): Xrm.NumberControl;
      get(name: "duedate"): Xrm.DateControl;
      get(name: "freightamount"): Xrm.NumberControl;
      get(name: "invoicenumber"): Xrm.StringControl;
      get(name: "ispricelocked"): Xrm.OptionSetControl<boolean>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<invoice_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "salesorderid"): Xrm.LookupControl<"salesorder">;
      get(name: "shippingmethodcode"): Xrm.OptionSetControl<invoice_shippingmethodcode>;
      get(name: "shipto_city"): Xrm.StringControl;
      get(name: "shipto_country"): Xrm.StringControl;
      get(name: "shipto_fax"): Xrm.StringControl;
      get(name: "shipto_line1"): Xrm.StringControl;
      get(name: "shipto_line2"): Xrm.StringControl;
      get(name: "shipto_line3"): Xrm.StringControl;
      get(name: "shipto_name"): Xrm.StringControl;
      get(name: "shipto_postalcode"): Xrm.StringControl;
      get(name: "shipto_stateorprovince"): Xrm.StringControl;
      get(name: "shipto_telephone"): Xrm.StringControl;
      get(name: "statuscode"): Xrm.OptionSetControl<invoice_statuscode>;
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
      get(name: "addresses"): Xrm.PageTab<Tabs.addresses>;
      get(name: "administration"): Xrm.PageTab<Tabs.administration>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: "shipping"): Xrm.PageTab<Tabs.shipping>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "billto_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_telephone"): Xrm.Attribute<string>;
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
    getAttribute(attributeName: "shipto_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_telephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<invoice_statuscode>;
    getAttribute(attributeName: "totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totalamountlessfreight"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totallineitemamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totaltax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "willcall"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "billto_city"): Xrm.StringControl;
    getControl(controlName: "billto_country"): Xrm.StringControl;
    getControl(controlName: "billto_fax"): Xrm.StringControl;
    getControl(controlName: "billto_line1"): Xrm.StringControl;
    getControl(controlName: "billto_line2"): Xrm.StringControl;
    getControl(controlName: "billto_line3"): Xrm.StringControl;
    getControl(controlName: "billto_name"): Xrm.StringControl;
    getControl(controlName: "billto_postalcode"): Xrm.StringControl;
    getControl(controlName: "billto_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "billto_telephone"): Xrm.StringControl;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "datedelivered"): Xrm.DateControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "discountamount"): Xrm.NumberControl;
    getControl(controlName: "discountpercentage"): Xrm.NumberControl;
    getControl(controlName: "duedate"): Xrm.DateControl;
    getControl(controlName: "freightamount"): Xrm.NumberControl;
    getControl(controlName: "invoicenumber"): Xrm.StringControl;
    getControl(controlName: "ispricelocked"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<invoice_paymenttermscode>;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "salesorderid"): Xrm.LookupControl<"salesorder">;
    getControl(controlName: "shippingmethodcode"): Xrm.OptionSetControl<invoice_shippingmethodcode>;
    getControl(controlName: "shipto_city"): Xrm.StringControl;
    getControl(controlName: "shipto_country"): Xrm.StringControl;
    getControl(controlName: "shipto_fax"): Xrm.StringControl;
    getControl(controlName: "shipto_line1"): Xrm.StringControl;
    getControl(controlName: "shipto_line2"): Xrm.StringControl;
    getControl(controlName: "shipto_line3"): Xrm.StringControl;
    getControl(controlName: "shipto_name"): Xrm.StringControl;
    getControl(controlName: "shipto_postalcode"): Xrm.StringControl;
    getControl(controlName: "shipto_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "shipto_telephone"): Xrm.StringControl;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<invoice_statuscode>;
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
