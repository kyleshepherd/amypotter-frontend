<script lang="ts">
  import type { Work } from "../../../types";
  import ResponsiveImage, {
    type Sizes,
  } from "../ResponsiveImage/ResponsiveImage.svelte";

  interface Props {
    works: Work[];
  }

  let { works }: Props = $props();

  const coverBigSizes: Sizes = {
    fallback: {
      width: 455,
      height: 637,
    },
    xs: {
      width: 615,
      height: 861,
    },
    sm: {
      width: 720,
      height: 1008,
    },
    md: {
      width: 991,
      height: 670,
    },
    lg: {
      width: 1186,
      height: 807,
    },
    xl: {
      width: 1410,
      height: 964,
    },
    xxl: {
      width: 1474,
      height: 1009,
    },
    xxxl: {
      width: 1794,
      height: 1233,
    },
    xxxlPlus: {
      width: 2432,
      height: 1680,
    },
  };

  const coverSmallSizes: Sizes = {
    fallback: {
      width: 455,
      height: 637,
    },
    xs: {
      width: 615,
      height: 861,
    },
    sm: {
      width: 720,
      height: 1008,
    },
    md: {
      width: 460,
      height: 644,
    },
    lg: {
      width: 580,
      height: 812,
    },
    xl: {
      width: 690,
      height: 966,
    },
    xxl: {
      width: 720,
      height: 1008,
    },
    xxxl: {
      width: 880,
      height: 1232,
    },
    xxxlPlus: {
      width: 1200,
      height: 1680,
    },
  };

  const mainSizes: Sizes = {
    fallback: {
      width: 255,
      height: 357,
    },
    xs: {
      width: 400,
      height: 560,
    },
    sm: {
      width: 470,
      height: 658,
    },
    md: {
      width: 240,
      height: 336,
    },
    lg: {
      width: 260,
      height: 364,
    },
    xl: {
      width: 350,
      height: 490,
    },
    xxl: {
      width: 475,
      height: 665,
    },
    xxxl: {
      width: 500,
      height: 700,
    },
    xxxlPlus: {
      width: 675,
      height: 945,
    },
  };
</script>

<div class="bg-white p-3 sm:p-6 md:p-9 lg:p-12 xl:p-16" id="work">
  <h2
    class="mb-3 text-center font-display text-4xl sm:p-6 sm:text-5xl md:mb-9 md:text-6xl lg:mb-12 lg:text-7xl xl:mb-16"
  >
    Work
  </h2>
  <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
    {#each works as work, i}
      <a
        class="group relative {i === 0 && works.length % 2 !== 0
          ? 'col-span-1 md:col-span-2'
          : 'col-span-1'}"
        href="/work/{work.slug}"
      >
        <div>
          <ResponsiveImage
            id={work.coverImage.id}
            altText={work.coverImage.altText}
            hotspotX={work.coverImage.hotspot.x}
            hotspotY={work.coverImage.hotspot.y}
            sizes={i === 0 && works.length % 2 !== 0
              ? coverBigSizes
              : coverSmallSizes}
            classes="w-full"
            lazy={true}
          />
        </div>
        <div class="absolute inset-0">
          <div class="absolute left-0 right-0 top-0 p-8 text-center sm:p-12">
            <h3
              class="xs:text-xl mb-2 font-display text-lg sm:text-2xl lg:mb-4 lg:text-3xl xl:text-4xl 2xl:text-5xl"
            >
              {work.title}
            </h3>
            <p class="xs:text-base text-sm sm:text-lg lg:text-xl xl:text-2xl">
              {work.year}
            </p>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div
              class="xs:max-w-[65%] aspect-[5/7] w-full max-w-[55%] overflow-hidden sm:max-w-[65%] lg:max-w-[260px] xl:max-w-[350px] 2xl:max-w-[475px] 3xl:max-w-[500px] 4xl:max-w-[660px] {i ===
                0 && works.length % 2 !== 0
                ? 'md:max-w-[25%]'
                : 'md:max-w-[50%]'}"
            >
              <ResponsiveImage
                id={work.mainImage.id}
                altText={work.mainImage.altText}
                hotspotX={work.mainImage.hotspot.x}
                hotspotY={work.mainImage.hotspot.y}
                sizes={mainSizes}
                classes="w-full group-hover:scale-105 transform-gpu transition-transform duration-500"
                lazy={true}
              />
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
