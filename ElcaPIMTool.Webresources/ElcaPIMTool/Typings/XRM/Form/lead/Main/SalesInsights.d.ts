declare namespace Form.lead.Main {
  namespace SalesInsights {
    namespace Tabs {
      interface Summary extends Xrm.SectionCollectionBase {
        get(name: "Contact"): Xrm.PageSection;
        get(name: "MapSection"): Xrm.PageSection;
        get(name: "RELATED_TAB"): Xrm.PageSection;
        get(name: "SOCIAL_PANE"): Xrm.PageSection;
        get(name: "Summary_section_6"): Xrm.PageSection;
        get(name: "company"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface details_tab extends Xrm.SectionCollectionBase {
        get(name: "contact_methods"): Xrm.PageSection;
        get(name: "lead_information"): Xrm.PageSection;
        get(name: "marketing_information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "address1_city"): Xrm.Attribute<string> | null;
      get(name: "address1_composite"): Xrm.Attribute<string> | null;
      get(name: "address1_country"): Xrm.Attribute<string> | null;
      get(name: "address1_line1"): Xrm.Attribute<string> | null;
      get(name: "address1_line2"): Xrm.Attribute<string> | null;
      get(name: "address1_line3"): Xrm.Attribute<string> | null;
      get(name: "address1_postalcode"): Xrm.Attribute<string> | null;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string> | null;
      get(name: "budgetamount"): Xrm.NumberAttribute | null;
      get(name: "companyname"): Xrm.Attribute<string>;
      get(name: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "followemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<lead_industrycode>;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "leadqualitycode"): Xrm.OptionSetAttribute<lead_leadqualitycode>;
      get(name: "leadsourcecode"): Xrm.OptionSetAttribute<lead_leadsourcecode>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "numberofemployees"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcontactid"): Xrm.LookupAttribute<"contact"> | null;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<lead_preferredcontactmethodcode>;
      get(name: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess> | null;
      get(name: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe> | null;
      get(name: "revenue"): Xrm.NumberAttribute;
      get(name: "sic"): Xrm.Attribute<string>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<lead_statuscode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ActionCards"): Xrm.BaseControl;
      get(name: "Competitors"): Xrm.SubGridControl<"competitor">;
      get(name: "Stakeholders"): Xrm.SubGridControl<"connection">;
      get(name: "address1_composite"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
      get(name: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
      get(name: "companyname"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "followemail"): Xrm.OptionSetControl<boolean>;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "header_leadqualitycode"): Xrm.OptionSetControl<lead_leadqualitycode>;
      get(name: "header_leadsourcecode"): Xrm.OptionSetControl<lead_leadsourcecode>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_budgetamount"): Xrm.NumberControl | null;
      get(name: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_description"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_parentcontactid"): Xrm.LookupControl<"contact"> | null;
      get(name: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess> | null;
      get(name: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe> | null;
      get(name: "header_statuscode"): Xrm.OptionSetControl<lead_statuscode>;
      get(name: "industrycode"): Xrm.OptionSetControl<lead_industrycode>;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "mapcontrol"): Xrm.BaseControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "numberofemployees"): Xrm.NumberControl;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<lead_preferredcontactmethodcode>;
      get(name: "revenue"): Xrm.NumberControl;
      get(name: "sic"): Xrm.StringControl;
      get(name: "subject"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Summary"): Xrm.PageTab<Tabs.Summary>;
      get(name: "details_tab"): Xrm.PageTab<Tabs.details_tab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SalesInsights extends Xrm.PageBase<SalesInsights.Attributes,SalesInsights.Tabs,SalesInsights.Controls> {
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_composite"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "budgetamount"): Xrm.NumberAttribute | null;
    getAttribute(attributeName: "companyname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "followemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<lead_industrycode>;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "leadqualitycode"): Xrm.OptionSetAttribute<lead_leadqualitycode>;
    getAttribute(attributeName: "leadsourcecode"): Xrm.OptionSetAttribute<lead_leadsourcecode>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "numberofemployees"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcontactid"): Xrm.LookupAttribute<"contact"> | null;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<lead_preferredcontactmethodcode>;
    getAttribute(attributeName: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess> | null;
    getAttribute(attributeName: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe> | null;
    getAttribute(attributeName: "revenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "sic"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<lead_statuscode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ActionCards"): Xrm.BaseControl;
    getControl(controlName: "Competitors"): Xrm.SubGridControl<"competitor">;
    getControl(controlName: "Stakeholders"): Xrm.SubGridControl<"connection">;
    getControl(controlName: "address1_composite"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_city"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_country"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line1"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line2"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_line3"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_postalcode"): Xrm.StringControl | null;
    getControl(controlName: "address1_composite_compositionLinkControl_address1_stateorprovince"): Xrm.StringControl | null;
    getControl(controlName: "companyname"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "followemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "header_leadqualitycode"): Xrm.OptionSetControl<lead_leadqualitycode>;
    getControl(controlName: "header_leadsourcecode"): Xrm.OptionSetControl<lead_leadsourcecode>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_budgetamount"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_parentcontactid"): Xrm.LookupControl<"contact"> | null;
    getControl(controlName: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess> | null;
    getControl(controlName: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe> | null;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<lead_statuscode>;
    getControl(controlName: "industrycode"): Xrm.OptionSetControl<lead_industrycode>;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "mapcontrol"): Xrm.BaseControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "numberofemployees"): Xrm.NumberControl;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<lead_preferredcontactmethodcode>;
    getControl(controlName: "revenue"): Xrm.NumberControl;
    getControl(controlName: "sic"): Xrm.StringControl;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "websiteurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}