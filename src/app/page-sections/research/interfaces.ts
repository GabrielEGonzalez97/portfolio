export interface IPublication {
  title: string;
  abstract: string;
  publicationLink: string;
  publicationDate: string;
  presentedAt: string;
  authors: Author[];
}

export interface Author {
  name: string;
  highlightName: boolean;
}
