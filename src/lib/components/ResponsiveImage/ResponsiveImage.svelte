<script lang="ts">
  import { builderImageToUrl, idToSource } from "../../../utils/sanity";

  export type Dimension = {
    width?: number;
    height?: number;
  };

  export type Sizes = {
    fallback: Dimension;
    xs: Dimension;
    sm: Dimension;
    md: Dimension;
    lg: Dimension;
    xl: Dimension;
    xxl: Dimension;
    xxxl: Dimension;
    xxxlPlus: Dimension;
  };

  interface Props {
    id: string;
    altText?: string;
    hotspotX: number;
    hotspotY: number;
    sizes: Sizes;
    classes?: string;
    style?: string;
    lazy?: boolean;
  }

  let {
    id,
    altText,
    hotspotX = 0.5,
    hotspotY = 0.5,
    sizes,
    classes,
    style,
    lazy = false,
  }: Props = $props();
</script>

<picture>
  <source
    srcset={idToSource(
      id,
      sizes.xxxlPlus.width,
      sizes.xxxlPlus.height,
      hotspotX,
      hotspotY,
    )}
    media="(min-width: 1920px)"
  />
  <source
    srcset={idToSource(
      id,
      sizes.xxxl.width,
      sizes.xxxl.height,
      hotspotX,
      hotspotY,
    )}
    media="(min-width: 1600px)"
  />
  <source
    srcset={idToSource(
      id,
      sizes.xxl.width,
      sizes.xxl.height,
      hotspotX,
      hotspotY,
    )}
    media="(min-width: 1536px)"
  />
  <source
    srcset={idToSource(id, sizes.xl.width, sizes.xl.height, hotspotX, hotspotY)}
    media="(min-width: 1280px)"
  />
  <source
    srcset={idToSource(id, sizes.lg.width, sizes.lg.height, hotspotX, hotspotY)}
    media="(min-width: 1024px)"
  />
  <source
    srcset={idToSource(id, sizes.md.width, sizes.md.height, hotspotX, hotspotY)}
    media="(min-width: 768px)"
  />
  <source
    srcset={idToSource(id, sizes.sm.width, sizes.sm.height, hotspotX, hotspotY)}
    media="(min-width: 640px)"
  />
  <source
    srcset={idToSource(id, sizes.xs.width, sizes.xs.height, hotspotX, hotspotY)}
    media="(min-width: 480px)"
  />
  <source
    srcset={idToSource(
      id,
      sizes.fallback.width,
      sizes.fallback.height,
      hotspotX,
      hotspotY,
    )}
    media="(max-width: 479px)"
  />
  <img
    src={builderImageToUrl(
      id,
      sizes.fallback.width,
      sizes.fallback.height,
      hotspotX,
      hotspotY,
      1,
    )}
    alt={altText}
    class={classes}
    {style}
    loading={lazy ? "lazy" : "eager"}
  />
</picture>
