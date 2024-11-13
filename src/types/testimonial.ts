export interface Testimonial {
  title: string;
  testimonials: {
    authorImageUrl: {
      node: {
        sourceUrl: string;
      };
    };
    authorName: string;
    bgImageUrl: {
      node: {
        sourceUrl: string;
      };
    };
    videoUrl: string;
    position: string;
    quote: string;
  };
  id: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}
