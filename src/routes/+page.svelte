<script lang="ts">
  import Hero from "$lib/components/Hero/Hero.svelte";
  import HomeAbout from "$lib/components/HomeAbout/HomeAbout.svelte";
  import HomeWork from "$lib/components/HomeWork/HomeWork.svelte";
  import PolaroidImages from "$lib/components/PolaroidImages/PolaroidImages.svelte";
  import type { PageData } from "./$types";
  import Footer from "$lib/components/Footer/Footer.svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let { polaroidImages, heroText, aboutText } = data;
</script>

<svelte:head>
  <meta name="title" content="Amy Potter - Shoot Producer" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://amypotter.vercel.app/" />
  <meta property="og:title" content="Amy Potter - Shoot Producer" />
  <meta property="og:image" content="https://amypotter.vercel.app/og.png" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://amypotter.vercel.app/" />
  <meta property="twitter:title" content="Amy Potter - Shoot Producer" />
  <meta
    property="twitter:image"
    content="https://amypotter.vercel.app/og.png"
  />
</svelte:head>

<Hero introText={heroText} />
<PolaroidImages images={polaroidImages} />
<HomeAbout text={aboutText} />
<HomeWork works={data.work} />
<Footer />
