interface Pageable {
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface PagableResponse<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface SolutionColumn {
  gptSolutionSeq: number;
  userGithubId: string;
  userSubmitSolutionLanguage: string;
  userSubmitSolutionRuntime: number;
  userSubmitSolutionMemory: number;
  userSubmitSolutionCodeLength: number;
  gptTotalScore: number;
  userImageUrl: string;
  userSubmitSolutionTime: string;
}

export interface RankingDetailParam {
  problemId: number;
  pagenumber: number;
  languagefilter: string;
  sortcriteria: string;
  defaultvalue: string;
}
