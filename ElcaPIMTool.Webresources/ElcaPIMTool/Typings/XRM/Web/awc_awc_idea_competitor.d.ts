interface awc_awc_idea_competitor_Base extends WebEntity {
  awc_awc_idea_competitorid?: string | null;
  awc_ideaid?: string | null;
  competitorid?: string | null;
  versionnumber?: number | null;
}
interface awc_awc_idea_competitor_Relationships {
  awc_awc_idea_competitor?: Competitor_Result[] | null;
}
interface awc_awc_idea_competitor extends awc_awc_idea_competitor_Base, awc_awc_idea_competitor_Relationships {
}
interface awc_awc_idea_competitor_Create extends awc_awc_idea_competitor {
}
interface awc_awc_idea_competitor_Update extends awc_awc_idea_competitor {
}
interface awc_awc_idea_competitor_Select {
  awc_awc_idea_competitorid: WebAttribute<awc_awc_idea_competitor_Select, { awc_awc_idea_competitorid: string | null }, {  }>;
  awc_ideaid: WebAttribute<awc_awc_idea_competitor_Select, { awc_ideaid: string | null }, {  }>;
  competitorid: WebAttribute<awc_awc_idea_competitor_Select, { competitorid: string | null }, {  }>;
  versionnumber: WebAttribute<awc_awc_idea_competitor_Select, { versionnumber: number | null }, {  }>;
}
interface awc_awc_idea_competitor_Filter {
  awc_awc_idea_competitorid: XQW.Guid;
  awc_ideaid: XQW.Guid;
  competitorid: XQW.Guid;
  versionnumber: number;
}
interface awc_awc_idea_competitor_Expand {
  awc_awc_idea_competitor: WebExpand<awc_awc_idea_competitor_Expand, Competitor_Select, Competitor_Filter, { awc_awc_idea_competitor: Competitor_Result[] }>;
}
interface awc_awc_idea_competitor_FormattedResult {
}
interface awc_awc_idea_competitor_Result extends awc_awc_idea_competitor_Base, awc_awc_idea_competitor_Relationships {
  "@odata.etag": string;
}
interface awc_awc_idea_competitor_RelatedOne {
}
interface awc_awc_idea_competitor_RelatedMany {
  awc_awc_idea_competitor: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
}
interface WebEntitiesRetrieve {
  awc_awc_idea_competitorset: WebMappingRetrieve<awc_awc_idea_competitor_Select,awc_awc_idea_competitor_Expand,awc_awc_idea_competitor_Filter,awc_awc_idea_competitor_Fixed,awc_awc_idea_competitor_Result,awc_awc_idea_competitor_FormattedResult>;
}
interface WebEntitiesRelated {
  awc_awc_idea_competitorset: WebMappingRelated<awc_awc_idea_competitor_RelatedOne,awc_awc_idea_competitor_RelatedMany>;
}
interface WebEntitiesCUDA {
  awc_awc_idea_competitorset: WebMappingCUDA<awc_awc_idea_competitor_Create,awc_awc_idea_competitor_Update,awc_awc_idea_competitor_Select>;
}
