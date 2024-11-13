import { gql } from "@apollo/client";

export default gql`
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
