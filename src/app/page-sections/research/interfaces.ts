export interface IPublication {
  title: string;
  bestPaperAwards: BestPaperAward[];
  abstract: string;
  publicationLink: string;
  publicationDate: string;
  presentedAt: string;
  authors: Author[];
}

export interface BestPaperAward {
  award: string;
  link: string;
}

export interface Author {
  name: string;
  highlightName: boolean;
}
