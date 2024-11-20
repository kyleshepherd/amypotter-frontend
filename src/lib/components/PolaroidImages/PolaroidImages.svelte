<script lang="ts">
  import type { Image } from "../../../types";
  import { builderImageToUrl, idToSource } from "../../../utils/sanity";
  import { lerp } from "../../../utils/util";

  interface Props {
    images: Image[];
  }

  let { images }: Props = $props();

  let container: HTMLDivElement | undefined = $state();
  let innerHeight: number = $state(0);
  let innerWidth: number = $state(0);
  let isMobile = $derived(innerWidth < 640);
  let containerHeight = $derived(
    innerHeight && container ? container.offsetHeight : 0,
  );
  let scrollY: number = $state(0);
  let scrollPercentage = $derived(
    Math.max(
      Math.min(((scrollY - containerHeight / 2) / containerHeight) * 100, 100),
      0,
    ),
  );
  let onePercentage = $derived(
    Math.max(Math.min((scrollPercentage / 20) * 100, 100), 0),
  );
  let twoPercentage = $derived(
    Math.max(Math.min(((scrollPercentage - 20) / 20) * 100, 100), 0),
  );
  let threePercentage = $derived(
    Math.max(Math.min(((scrollPercentage - 40) / 20) * 100, 100), 0),
  );
  let fourPercentage = $derived(
    Math.max(Math.min(((scrollPercentage - 60) / 20) * 100, 100), 0),
  );
  let fivePercentage = $derived(
    Math.max(Math.min(((scrollPercentage - 80) / 20) * 100, 100), 0),
  );

  let oneScale = $derived(lerp(1.1, 1, onePercentage / 100));
  let twoScale = $derived(lerp(1.1, 1, twoPercentage / 100));
  let threeScale = $derived(lerp(1.1, 1, threePercentage / 100));
  let fourScale = $derived(lerp(1.1, 1, fourPercentage / 100));
  let fiveScale = $derived(lerp(1.1, 1, fivePercentage / 100));

  const imgClasses = [
    "rotate-[4deg] sm:-translate-y-12",
    "-rotate-6 sm:-translate-y-6",
    "rotate-[4deg]",
    "-rotate-[4deg] sm:translate-y-6",
    "rotate-6 sm:translate-y-12",
  ];

  const getOpacity = (i: number) => {
    if (isMobile) {
      i = 4 - i;
    }
    switch (i) {
      case 0:
        return onePercentage;
      case 1:
        return twoPercentage;
      case 2:
        return threePercentage;
      case 3:
        return fourPercentage;
      case 4:
        return fivePercentage;
      default:
        return 100;
    }
  };

  const getScale = (i: number) => {
    if (isMobile) {
      i = 4 - i;
    }
    switch (i) {
      case 0:
        return oneScale;
      case 1:
        return twoScale;
      case 2:
        return threeScale;
      case 3:
        return fourScale;
      case 4:
        return fiveScale;
      default:
        return 1;
    }
  };
</script>

<svelte:window bind:innerHeight bind:scrollY bind:innerWidth />

<div class="mb-[200lvh]">
  <div
    class="fixed inset-0 -z-10 flex h-lvh items-center justify-center"
    bind:this={container}
  >
    <div
      class="grid h-full max-h-full grid-rows-5 flex-col items-center justify-center text-base sm:flex sm:flex-row sm:p-4 md:p-8 xl:p-12"
    >
      {#each images as image, i}
        <div
          class="h-full transform-gpu overflow-hidden border-2 border-[#fff] shadow last:mr-0 sm:h-auto md:border-4 lg:-mr-[36px] xl:border-8 {imgClasses[
            i
          ]}"
          style={`opacity: ${getOpacity(i)}%;`}
        >
          <picture>
            <source
              srcset={idToSource(
                image.id,
                558,
                837,
                image.hotspot.x,
                image.hotspot.y,
              )}
              media="(min-width: 1920px)"
            />
            <source
              srcset={idToSource(
                image.id,
                416,
                624,
                image.hotspot.x,
                image.hotspot.y,
              )}
              media="(min-width: 1600px)"
            />
            <source
              srcset={idToSource(
                image.id,
                346,
                519,
                image.hotspot.x,
                image.hotspot.y,
              )}
              media="(min-width: 1536px)"
            />
            <source
              srcset={idToSource(
                image.id,
                332,
                498,
                image.hotspot.x,
                image.hotspot.y,
              )}
              media="(min-width: 1280px)"
            />
            <source
              srcset={idToSource(
                image.id,
                293,
                438,
                image.hotspot.x,
                image.hotspot.y,
              )}
              media="(min-width: 1024px)"
            />
            <source
              srcset={idToSource(
                image.id,
                203,
                406,
                image.hotspot.x,
                image.hotspot.y,
              )}
              media="(min-width: 768px)"
            />
            <source
              srcset={idToSource(
                image.id,
                158,
                237,
                image.hotspot.x,
                image.hotspot.y,
              )}
              media="(min-width: 640px)"
            />
            <source
              srcset={idToSource(
                image.id,
                180,
                270,
                image.hotspot.x,
                image.hotspot.y,
              )}
              media="(max-width: 639px)"
            />
            <img
              src={builderImageToUrl(
                image.id,
                2000,
                3000,
                image.hotspot.x,
                image.hotspot.y,
                1,
              )}
              alt={image.altText}
              class="h-full transform-gpu sm:h-auto"
              style={`transform: scale(${getScale(i)});`}
            />
          </picture>
        </div>
      {/each}
    </div>
  </div>
</div>
