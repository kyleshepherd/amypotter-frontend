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
