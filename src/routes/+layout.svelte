<script lang="ts">
  import Header from "$lib/components/Header/Header.svelte";
  import "../styles/global.css";
  import type { LayoutData } from "./$types";

  interface Props {
    children?: import("svelte").Snippet;
    data: LayoutData;
  }

  let { children, data }: Props = $props();
</script>

<svelte:head>
  <meta name="description" content={data.aboutText} />
  <meta property="og:description" content={data.aboutText} />
  <meta property="twitter:description" content={data.aboutText} />
</svelte:head>

<Header />
<main>
  {@render children?.()}
</main>
