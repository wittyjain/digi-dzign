import { getClient } from "@/lib/ApolloClient";
import { gql } from "@apollo/client";

const GET_ALL_POSTS = gql`
  query getAllPosts($after: String!, $first: Int!) {
    posts(
      after: $after
      first: $first
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      nodes {
        date
        slug
        title
        excerpt(format: RENDERED)
        featuredImage {
          node {
            mediaDetails {
              file
              sizes {
                sourceUrl
                width
                height
              }
            }
            sourceUrl(size: MK_IMAGE_SIZE_SQUARE)
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export default async function getAllPosts({
  after = 'null',
  first = 10,
}: {
  after?: string;
  first?: number;
}) {
  try {
    const resp = await getClient().query({
      query: GET_ALL_POSTS,
      variables: { after, first },
    });

    return resp.data;
  } catch (error) {
    console.error("Error in getPageByUri: ", error);
    return { error };
  }
}
