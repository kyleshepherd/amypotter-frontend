<script lang="ts">
  import Hero from "$lib/components/Hero/Hero.svelte";
  import PolaroidImages from "$lib/components/PolaroidImages/PolaroidImages.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Hero introText={data.heroText} />
<!-- <ScrollHeroImage image={data.scrollHeroImage} anchor={data.scrollHeroAnchor} /> -->
<PolaroidImages images={data.polaroidImages} />
<div class="h-dvh bg-white">
  <h1>just more page content</h1>
</div>
<div class="h-dvh bg-white">
  <h1>just more page content</h1>
</div>
