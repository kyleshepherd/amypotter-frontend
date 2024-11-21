<script lang="ts">
  import WorkFooter from "$lib/components/WorkFooter/WorkFooter.svelte";
  import WorkImageSlider from "$lib/components/WorkImageSlider/WorkImageSlider.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let { work } = data;
</script>

<div class="fixed inset-0 flex h-dvh w-dvw flex-col">
  <WorkImageSlider images={work.images} />
  <WorkFooter {work} />
</div>
