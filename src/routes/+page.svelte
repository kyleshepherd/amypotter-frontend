<script lang="ts">
  import Hero from "$lib/components/Hero/Hero.svelte";
  import ScrollHeroImage from "$lib/components/ScrollHeroImage/ScrollHeroImage.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Hero introText={data.heroText} />
<ScrollHeroImage image={data.scrollHeroImage} anchor={data.scrollHeroAnchor} />
<div class="h-dvh bg-white">
  <h1>just more page content</h1>
</div>
<div class="h-dvh bg-white">
  <h1>just more page content</h1>
</div>
