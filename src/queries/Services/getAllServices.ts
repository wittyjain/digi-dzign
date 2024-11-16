import { gql } from "@apollo/client";

export default gql`
  query getAllServices {
    services(where: {orderby: {field: DATE, order: ASC}}) {
      nodes {
        title
        slug
        serviceData {
          description
          bgGradient
          bgPosition
          textPosition
          bgImage {
            node {
              sourceUrl
              mediaDetails {
                sizes {
                  name
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
