<script lang="ts">
  import type { Image } from "../../../types";
  import { builderImageToUrl, idToSource } from "../../../utils/sanity";

  interface Props {
    image: Image;
    anchor: string;
  }

  let { image, anchor = "top" }: Props = $props();

  let imageContainer: HTMLDivElement | undefined = $state();
  let innerHeight: number = $state(0);
  let scrollY: number = $state(0);
  let scrollPercentage = $derived(
    imageContainer
      ? Math.min((scrollY / imageContainer.offsetHeight) * 100, 100)
      : 0,
  );

  function lerp(a: number, b: number, alpha: number): number {
    return a + alpha * (b - a);
  }

  let scale = $derived(lerp(105, 100, scrollPercentage / 100));
  let opacity = $derived(lerp(50, 100, scrollPercentage / 100));
</script>

<svelte:window bind:innerHeight bind:scrollY />

<div class="mb-[200lvh] overflow-hidden">
  <div
    class="fixed inset-0 -z-10 h-[200lvh]"
    bind:this={imageContainer}
    style={`opacity: ${opacity}%; transform: scale(${scale / 100});`}
  >
    <div class="fixed inset-0">
      <picture>
        <source
          srcset={idToSource(
            image.id,
            3000,
            undefined,
            image.hotspot.x,
            image.hotspot.y,
          )}
          media="min-width: 0px"
        />
        <img
          class="h-[200lvh] w-full object-cover {anchor === 'top'
            ? 'object-top'
            : anchor === 'bottom'
              ? 'object.bottom'
              : 'object-center'}"
          src={builderImageToUrl(
            image.id,
            3000,
            undefined,
            image.hotspot.x,
            image.hotspot.y,
            1,
          )}
          alt={image.altText}
        />
      </picture>
    </div>
  </div>
</div>
