import { gql } from "@apollo/client";

export default gql`
    query getSinglePost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            content(format: RENDERED)
            date
            excerpt(format: RENDERED)
            modified
            slug
            title(format: RENDERED)
            databaseId
            featuredImage {
                node {
                    mediaDetails {
                    sizes {
                        sourceUrl
                        width
                        height
                    }
                    }
                }
            }
            categories {
                nodes {
                    name
                    slug
                }
            }
        }
    }
`;
