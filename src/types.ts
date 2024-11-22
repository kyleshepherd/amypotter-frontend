export type Image = {
  id: string;
  altText?: string;
  hotspot?: {
    x: number;
    y: number;
  };
};

export type HomeWork = {
  title: string;
  year: string;
  slug: string;
  coverImage: Image;
  mainImage: Image;
};

export type Work = {
  title: string;
  year: string;
  slug: string;
  mainImage: Image;
  artDirector: string[];
  stylist: string[];
  photographer: string[];
  model: string[];
  makeUp: string[];
  hair: string[];
  images: Image[];
};
