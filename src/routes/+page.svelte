<script lang="ts">
  import Hero from "$lib/components/Hero/Hero.svelte";
  import ScrollImages from "$lib/components/ScrollImages/ScrollImages.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="lg:mb-[200dvh]">
  <Hero introText={data.heroText} />
</div>
<ScrollImages images={data.scrollImages} />
<div class="h-dvh bg-white">
  <h1>just more page content</h1>
</div>
<div class="h-dvh bg-white">
  <h1>just more page content</h1>
</div>
