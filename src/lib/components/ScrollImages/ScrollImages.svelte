<script lang="ts">
  import { onMount } from "svelte";
  import type { Image } from "../../../types";
  import { builderImageToUrl } from "../../../utils/sanity";

  interface Props {
    images: Image[];
  }

  let { images }: Props = $props();

  let scrollY: number = $state(0);
  let scrollHeight: number;
  let scrollPercentage = $state(0);
  let heroScrollPercentage = $state(0);
  let heroInnerHeight: number = $state(0);
  let width: number = $state(0);

  let isLarge = $derived(width >= 1280);

  onMount(() => {
    setScrollHeight();
    setScrollPercentage();
  });

  const setScrollHeight = () => {
    scrollHeight = window.document.body.scrollHeight;
  };

  const setScrollPercentage = () => {
    scrollPercentage = (scrollY / (scrollHeight - heroInnerHeight)) * 100;
    heroScrollPercentage = Math.min((scrollY / heroInnerHeight) * 100, 100);
  };
</script>

<svelte:window
  bind:scrollY
  bind:innerHeight={heroInnerHeight}
  bind:innerWidth={width}
  onresize={setScrollHeight}
  onscroll={setScrollPercentage}
/>

<div
  class="relative inset-0 -z-10 flex h-auto items-center justify-center bg-white lg:fixed lg:h-dvh"
  style={isLarge ? `opacity: ${heroScrollPercentage}%;` : ""}
>
  <div
    class="flex h-auto w-full items-center justify-center gap-8 overflow-hidden lg:gap-16"
  >
    {#each { length: 3 } as _, i}
      <div
        class="flex flex-grow flex-col gap-8 lg:gap-16"
        style={isLarge
          ? `transform: translate3d(0, ${i === 1 ? `${scrollPercentage / 10}` : `-${scrollPercentage / 10}`}%, 0);`
          : "transform: translate3d(0, 0, 0);"}
      >
        {#each { length: 2 } as _, x}
          <div>
            <img
              src={builderImageToUrl(
                images[i * 2 + x].id,
                624,
                998,
                images[i * 2 + x].hotspot.x,
                images[i * 2 + x].hotspot.y,
                1,
              )}
              alt={images[i + x].altText}
              class="w-full"
            />
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
