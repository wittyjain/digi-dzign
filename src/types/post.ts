export interface Post {
  __typename: string;
  content: string;
  date: string;
  excerpt: string;
  modified: string;
  slug: string;
  title: string;
  databaseId: number;
  featuredImage: {
    __typename: string;
    node: {
      __typename: string;
      mediaDetails: {
        __typename: string;
        sizes: Array<{
          __typename: string;
          name: string;
          sourceUrl: string;
          width: string;
          height: string;
        }>;
      };
      sourceUrl: string;
    };
  };
  categories: {
    __typename: string;
    nodes: Array<{
      __typename: string;
      name: string;
      slug: string;
    }>;
  };
  author: {
    node: {
      name: string;
      avatar: {
        url: string;
      };
    };
  };
}
