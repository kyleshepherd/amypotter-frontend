<script lang="ts">
  import Header from "$lib/components/Header/Header.svelte";
  import "../styles/global.css";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Header />
<main>
  {@render children?.()}
</main>
