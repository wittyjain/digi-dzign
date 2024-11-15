import { gql } from "@apollo/client";

export default gql`
  query getAllServices {
    services {
      nodes {
        title
        slug
        serviceData {
          description
          bgImage {
            node {
              mediaDetails {
                sizes {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;
