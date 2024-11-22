import type {
  SanityCustomImage,
  SanityHomeWork,
  SanityWork,
} from "../sanityTypes";
import type { Image, HomeWork, Work } from "../types";
import imageUrlBuilder from "@sanity/image-url";

export const customImageToType = (s: SanityCustomImage): Image => {
  const image: Image = {
    id: s?.img?.asset?.assetId ?? "",
    altText: s?.altText ?? "",
  };

  if (s?.img?.hotspot?.x && s.img.hotspot.y) {
    image.hotspot = {
      x: s.img.hotspot.x,
      y: s.img.hotspot.y,
    };
  }
  return image;
};

export const homeWorkToType = (s: SanityHomeWork): HomeWork => {
  return {
    title: s?.title ?? "",
    year: s?.year ?? "",
    slug: s?.slug?.current ?? "",
    coverImage: customImageToType(s?.coverImage),
    mainImage: customImageToType(s?.mainImage),
  };
};

export const workToType = (s: SanityWork): Work => {
  return {
    title: s?.title ?? "",
    year: s?.year ?? "",
    slug: s?.slug?.current ?? "",
    mainImage: customImageToType(s?.mainImage),
    artDirector: s?.artDirector?.map(ad => ad ?? "") || [],
    model: s?.model?.map(ad => ad ?? "") || [],
    makeUp: s?.makeUp?.map(ad => ad ?? "") || [],
    stylist: s?.stylist?.map(ad => ad ?? "") || [],
    hair: s?.hair?.map(ad => ad ?? "") || [],
    photographer: s?.photographer?.map(ad => ad ?? "") || [],
    images: s?.images?.map(img => customImageToType(img)) || [],
  };
};

export const builder = imageUrlBuilder({
  projectId: "jh4ghg2v",
  dataset: "production",
});

export const builderImageToUrl = (
  imageId: string,
  width?: number,
  height?: number,
  hotspotX?: number,
  hotspotY?: number,
  dpr = 1,
): string => {
  let img = builder
    .image(imageId)
    .auto("format")
    .fit("crop")
    .dpr(dpr)
    .quality(80);

  if (hotspotX && hotspotY) {
    img = img.focalPoint(hotspotX, hotspotY);
  }

  if (width && width !== 0) {
    img = img.width(width);
  }

  if (height && height !== 0) {
    img = img.height(height);
  }

  return img.url();
};

export const idToSource = (
  imageId: string,
  width?: number,
  height?: number,
  hotspotX: number = 0.5,
  hotspotY: number = 0.5,
): string => {
  let imgX1 = builder
    .image(imageId)
    .auto("format")
    .fit("crop")
    .dpr(1)
    .quality(80);

  if (hotspotX && hotspotY) {
    imgX1 = imgX1.focalPoint(hotspotX, hotspotY);
  }

  if (width && width !== 0) {
    imgX1 = imgX1.width(width);
  }

  if (height && height !== 0) {
    imgX1 = imgX1.height(height);
  }

  let imgX2 = builder
    .image(imageId)
    .auto("format")
    .fit("crop")
    .dpr(2)
    .quality(80);

  if (hotspotX && hotspotY) {
    imgX2 = imgX2.focalPoint(hotspotX, hotspotY);
  }

  if (width && width !== 0) {
    imgX2 = imgX2.width(width);
  }

  if (height && height !== 0) {
    imgX2 = imgX2.height(height);
  }

  return `${imgX1.url()}, ${imgX2.url()} 2x`;
};
