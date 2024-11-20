export type Image = {
  id: string;
  altText?: string;
  hotspot: {
    x: number;
    y: number;
  };
};

export type Work = {
  title: string;
  year: string;
  slug: string;
  coverImage: Image;
  mainImage: Image;
};
