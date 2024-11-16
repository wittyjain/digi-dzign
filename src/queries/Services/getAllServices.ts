import { getClient } from "@/lib/ApolloClient";
import { gql } from "@apollo/client";

const GET_ALL_SERVICES = gql`
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

export default async function getAllServices() {
  try {
    const response = await getClient().query({
      query: GET_ALL_SERVICES,
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error in getPageByUri: ", error);
    return { error };
  }
}
