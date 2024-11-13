import { gql } from "@apollo/client";

export default gql`
  query getAllPostSlugs($after: String!, $first: Int!) {
    posts(
      after: $after
      first: $first
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      nodes {
        id
        slug
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
