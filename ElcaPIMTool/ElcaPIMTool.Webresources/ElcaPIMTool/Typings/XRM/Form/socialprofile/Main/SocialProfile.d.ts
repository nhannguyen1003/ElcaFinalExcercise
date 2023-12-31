declare namespace Form.socialprofile.Main {
  namespace SocialProfile {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "blocked"): Xrm.OptionSetAttribute<boolean>;
      get(name: "community"): Xrm.OptionSetAttribute<socialprofile_community>;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "influencescore"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "profilelink"): Xrm.Attribute<string>;
      get(name: "profilename"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "blocked"): Xrm.OptionSetControl<boolean>;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "header_community"): Xrm.OptionSetControl<socialprofile_community>;
      get(name: "header_influencescore"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "profilelink"): Xrm.StringControl;
      get(name: "profilename"): Xrm.StringControl;
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
  interface SocialProfile extends Xrm.PageBase<SocialProfile.Attributes,SocialProfile.Tabs,SocialProfile.Controls> {
    getAttribute(attributeName: "blocked"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "community"): Xrm.OptionSetAttribute<socialprofile_community>;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "influencescore"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "profilelink"): Xrm.Attribute<string>;
    getAttribute(attributeName: "profilename"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "blocked"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "header_community"): Xrm.OptionSetControl<socialprofile_community>;
    getControl(controlName: "header_influencescore"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "profilelink"): Xrm.StringControl;
    getControl(controlName: "profilename"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
