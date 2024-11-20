<script lang="ts">
  import Hero from "$lib/components/Hero/Hero.svelte";
  import HomeAbout from "$lib/components/HomeAbout/HomeAbout.svelte";
  import HomeWork from "$lib/components/HomeWork/HomeWork.svelte";
  import PolaroidImages from "$lib/components/PolaroidImages/PolaroidImages.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let { polaroidImages, heroText, aboutText } = data;
</script>

<Hero introText={heroText} />
<PolaroidImages images={polaroidImages} />
<HomeAbout text={aboutText} />
<HomeWork works={data.work} />
