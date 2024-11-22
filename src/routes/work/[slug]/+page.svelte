<script lang="ts">
  import WorkFooter from "$lib/components/WorkFooter/WorkFooter.svelte";
  import WorkImageSlider from "$lib/components/WorkImageSlider/WorkImageSlider.svelte";
  import { builderImageToUrl } from "../../../utils/sanity";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let { work } = data;
</script>

<svelte:head>
  <title>{work.title} / Amy Potter - Shoot Producer</title>
  <meta name="title" content="{work.title} / Amy Potter - Shoot Producer" />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://amypotter.vercel.app/work/{work.slug}"
  />
  <meta
    property="og:title"
    content="{work.title} / Amy Potter - Shoot Producer"
  />
  <meta
    property="og:image"
    content={builderImageToUrl(
      work.mainImage.id,
      1200,
      628,
      work?.mainImage?.hotspot?.x,
      work?.mainImage?.hotspot?.y,
      1,
    )}
  />
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content="https://amypotter.vercel.app/work/{work.slug}"
  />
  <meta
    property="twitter:title"
    content="{work.title} / Amy Potter - Shoot Producer"
  />
  <meta
    property="twitter:image"
    content={builderImageToUrl(
      work.mainImage.id,
      1200,
      628,
      work?.mainImage?.hotspot?.x,
      work?.mainImage?.hotspot?.y,
      1,
    )}
  />
</svelte:head>

<div class="fixed inset-0 flex h-dvh w-dvw flex-col">
  <WorkImageSlider images={work.images} />
  <WorkFooter {work} />
</div>
