export interface Service {
  __typename: string;
  description: string;
  bgImage: {
    __typename: string;
    node: {
      __typename: string;
      mediaDetails: {
        __typename: string;
        sizes: Array<{
          __typename: string;
          sourceUrl: string;
        }>;
      };
    };
  };
}
