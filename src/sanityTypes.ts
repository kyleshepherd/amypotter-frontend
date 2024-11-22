export type SanityCustomImage =
  | {
      __typename?: "CustomImage";
      altText?: string | null | undefined;
      img?:
        | {
            __typename?: "Image";
            asset?:
              | {
                  __typename?: "SanityImageAsset";
                  assetId?: string | null | undefined;
                }
              | null
              | undefined;
            hotspot?:
              | {
                  __typename?: "SanityImageHotspot";
                  x?: number | null | undefined;
                  y?: number | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }
  | null
  | undefined;

export type SanityHomeWork =
  | {
      __typename?: "Work";
      title?: string | null | undefined;
      year?: string | null | undefined;
      slug?:
        | {
            __typename?: "Slug";
            current?: string | null | undefined;
          }
        | null
        | undefined;
      coverImage?:
        | {
            __typename?: "CustomImage";
            altText?: string | null | undefined;
            img?:
              | {
                  __typename?: "Image";
                  asset?:
                    | {
                        __typename?: "SanityImageAsset";
                        assetId?: string | null | undefined;
                      }
                    | null
                    | undefined;
                  hotspot?:
                    | {
                        __typename?: "SanityImageHotspot";
                        x?: number | null | undefined;
                        y?: number | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      mainImage?:
        | {
            __typename?: "CustomImage";
            altText?: string | null | undefined;
            img?:
              | {
                  __typename?: "Image";
                  asset?:
                    | {
                        __typename?: "SanityImageAsset";
                        assetId?: string | null | undefined;
                      }
                    | null
                    | undefined;
                  hotspot?:
                    | {
                        __typename?: "SanityImageHotspot";
                        x?: number | null | undefined;
                        y?: number | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }
  | null
  | undefined;

export type SanityWork =
  | {
      __typename?: "Work";
      title?: string | null | undefined;
      year?: string | null | undefined;
      slug?:
        | {
            __typename?: "Slug";
            current?: string | null | undefined;
          }
        | null
        | undefined;
      mainImage?:
        | {
            __typename?: "CustomImage";
            altText?: string | null | undefined;
            img?:
              | {
                  __typename?: "Image";
                  asset?:
                    | {
                        __typename?: "SanityImageAsset";
                        assetId?: string | null | undefined;
                      }
                    | null
                    | undefined;
                  hotspot?:
                    | {
                        __typename?: "SanityImageHotspot";
                        x?: number | null | undefined;
                        y?: number | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      artDirector?: Array<string | null | undefined> | null | undefined;
      stylist?: Array<string | null | undefined> | null | undefined;
      photographer?: Array<string | null | undefined> | null | undefined;
      model?: Array<string | null | undefined> | null | undefined;
      makeUp?: Array<string | null | undefined> | null | undefined;
      hair?: Array<string | null | undefined> | null | undefined;
      images?:
        | Array<
            | {
                __typename?: "CustomImage";
                altText?: string | null | undefined;
                img?:
                  | {
                      __typename?: "Image";
                      asset?:
                        | {
                            __typename?: "SanityImageAsset";
                            assetId?: string | null | undefined;
                          }
                        | null
                        | undefined;
                      hotspot?:
                        | {
                            __typename?: "SanityImageHotspot";
                            x?: number | null | undefined;
                            y?: number | null | undefined;
                          }
                        | null
                        | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined
          >
        | null
        | undefined;
    }
  | null
  | undefined;
