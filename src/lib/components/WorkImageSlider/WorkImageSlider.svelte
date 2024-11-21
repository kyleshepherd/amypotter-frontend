<script lang="ts">
  import type { Image } from "../../../types";
  import ResponsiveImage, {
    type Sizes,
  } from "../ResponsiveImage/ResponsiveImage.svelte";
  import Swiper from "swiper";
  import { Mousewheel, FreeMode } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/mousewheel";
  import "swiper/css/free-mode";
  import { onMount } from "svelte";

  interface Props {
    images: Image[];
  }

  let { images }: Props = $props();

  let swiper: Swiper | undefined = $state();

  onMount(() => {
    swiper = new Swiper(".swiper", {
      modules: [Mousewheel, FreeMode],
      allowTouchMove: true,
      slidesPerView: "auto",
      lazyPreloadPrevNext: 1,
      freeMode: {
        momentumBounce: false,
      },
      mousewheel: {
        sensitivity: 2,
      },
    });
  });

  const sizes: Sizes = {
    fallback: {
      width: 480,
      height: 672,
    },
    xs: {
      width: 640,
      height: 896,
    },
    sm: {
      width: 675,
      height: 945,
    },
    md: {
      width: 720,
      height: 1008,
    },
    lg: {
      width: 840,
      height: 1176,
    },
    xl: {
      width: 840,
      height: 1176,
    },
    xxl: {
      width: 840,
      height: 1176,
    },
    xxxl: {
      width: 840,
      height: 1176,
    },
    xxxlPlus: {
      width: 840,
      height: 1176,
    },
  };
</script>

<div class="relative -z-10 h-full">
  <div class="swiper !absolute inset-0">
    <div class="swiper-wrapper sm:!duration-500">
      {#each images as image}
        <div class="swiper-slide aspect-[5/7] max-w-fit">
          <ResponsiveImage
            id={image.id}
            altText={image.altText}
            hotspotX={image?.hotspot?.x}
            hotspotY={image?.hotspot?.y}
            lazy={true}
            {sizes}
            classes=""
          />
          <div
            class="swiper-lazy-preloader !border-black !border-t-transparent"
          ></div>
        </div>
      {/each}
    </div>
  </div>
</div>
