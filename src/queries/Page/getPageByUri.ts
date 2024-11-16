import { getClient } from "@/lib/ApolloClient";
import { gql } from "@apollo/client";

const GET_PAGE_BY_URI = gql`
  query getPageByUri($id: ID!) {
    page(id: $id, idType: URI) {
      featuredImage {
        node {
          altText
          sourceUrl(size: MK_IMAGE_SIZE_LANDSCAPE)
          title
        }
      }
      slug
      heroSection {
        ctaText
        subtitle
        title {
          text
        }
      }
    }
  }
`;

export default async function getPageByUri(uri: string) {
  try {
    const response = await getClient().query({
      query: GET_PAGE_BY_URI,
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      },
      variables: { id: uri },
    });

    return response.data;
  } catch (error) {
    console.error("Error in getPageByUri: ", error);
    return { error };
  }
}
