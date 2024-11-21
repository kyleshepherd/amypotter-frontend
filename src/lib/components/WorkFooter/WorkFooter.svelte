<script lang="ts">
  import type { Work } from "../../../types";

  interface Props {
    work: Work;
  }

  let { work }: Props = $props();
</script>

<div
  class="mb-8 flex w-dvw shrink-0 grow flex-col gap-2 p-3 sm:p-6 md:p-9 lg:mb-0 lg:grow-0 lg:flex-row lg:items-end lg:gap-8 lg:p-12 xl:p-16"
>
  <div>
    <h2
      class="font-display text-xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
    >
      {work.title}
    </h2>
  </div>
  <div class="text-xs uppercase lg:text-sm">
    <p><b>Year:</b> {work.year}</p>
    {#if work.artDirector.length > 0}
      <p>
        <b>Art Director{work.artDirector.length > 1 ? "s" : ""}:</b>
        {work.artDirector.join(", ")}
      </p>
    {/if}
    {#if work.stylist.length > 0}
      <p>
        <b>Stylist{work.stylist.length > 1 ? "s" : ""}:</b>
        {work.stylist.join(", ")}
      </p>
    {/if}
    {#if work.photographer.length > 0}
      <p>
        <b>Photographer{work.photographer.length > 1 ? "s" : ""}:</b>
        {work.photographer.join(", ")}
      </p>
    {/if}
    {#if work.model.length > 0}
      <p>
        <b>Model{work.model.length > 1 ? "s" : ""}:</b>
        {work.model.join(", ")}
      </p>
    {/if}
    {#if work.makeUp.length > 0}
      <p>
        <b>Make-up:</b>
        {work.makeUp.join(", ")}
      </p>
    {/if}
    {#if work.hair.length > 0}
      <p>
        <b>Hair:</b>
        {work.hair.join(", ")}
      </p>
    {/if}
  </div>
</div>
