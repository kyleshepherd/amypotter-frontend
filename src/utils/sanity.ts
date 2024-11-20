import type { SanityCustomImage, SanityWork } from "../sanityTypes";
import type { Image, Work } from "../types";
import imageUrlBuilder from "@sanity/image-url";

export const customImageToType = (s: SanityCustomImage): Image => {
  return {
    id: s?.img?.asset?.assetId ?? "",
    altText: s?.altText ?? "",
    hotspot: {
      x: s?.img?.hotspot?.x ?? 0.5,
      y: s?.img?.hotspot?.y ?? 0.5,
    },
  };
};

export const workToType = (s: SanityWork): Work => {
  return {
    title: s?.title ?? "",
    year: s?.year ?? "",
    slug: s?.slug?.current ?? "",
    coverImage: customImageToType(s?.coverImage),
    mainImage: customImageToType(s?.mainImage),
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
  hotspotX: number = 0.5,
  hotspotY: number = 0.5,
  dpr = 1,
): string => {
  let img = builder
    .image(imageId)
    .auto("format")
    .fit("crop")
    .focalPoint(hotspotX, hotspotY)
    .dpr(dpr);

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
    .focalPoint(hotspotX, hotspotY)
    .dpr(1);

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
    .focalPoint(hotspotX, hotspotY)
    .dpr(2);

  if (width && width !== 0) {
    imgX2 = imgX2.width(width);
  }

  if (height && height !== 0) {
    imgX2 = imgX2.height(height);
  }

  return `${imgX1.url()}, ${imgX2.url()} 2x`;
};
