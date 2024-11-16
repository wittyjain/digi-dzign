export interface Service {
  title: string;
  slug: string;
  serviceData: {
    __typename: string;
    description: string;
    bgGradient: string;
    bgPosition: string;
    textPosition: string;
    bgImage: {
      __typename: string;
      node: {
        __typename: string;
        sourceUrl: string;
        mediaDetails: {
          __typename: string;
          sizes: Array<{
            __typename: string;
            name: string;
            sourceUrl: string;
          }>;
        };
      };
    };
  };
}
