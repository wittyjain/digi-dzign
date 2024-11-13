import { gql } from "@apollo/client";

export default gql`
  query getAllServices {
    services {
      nodes {
        title
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
