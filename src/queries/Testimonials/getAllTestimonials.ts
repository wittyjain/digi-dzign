import { gql } from "@apollo/client";

export default gql`
  query getAllTestimonials {
    testimonials {
      nodes {
        title(format: RAW)
        testimonials {
          authorImageUrl {
            node {
              id
              sourceUrl(size: SWM_IMAGE_SIZE_TINY)
            }
          }
          authorName
          bgImageUrl {
            node {
              id
              sourceUrl(size: MK_IMAGE_SIZE_SQUARE)
            }
          }
          videoUrl
          position
          quote
        }
        id
      }
    }
  }
`;
