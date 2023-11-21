export interface Country {
  label: string;
  keyword: string;
  checked?: boolean;
}

export interface ArticlePreview {
  id: string;
  source: string;
  headline: string;
  pub_date: string;
  byline: string;
  url: string;
  isScrapped: boolean;
  glocations: string[];
}
