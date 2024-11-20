<script lang="ts">
  interface Props {
    text: string;
  }

  let { text }: Props = $props();
</script>

<div
  class="flex h-dvh max-h-[1000px] items-center justify-center bg-white p-3 sm:max-h-none sm:p-6 md:p-9 lg:p-12 xl:p-16"
>
  <h2
    class="xs:text-3xl max-w-xl text-center font-display text-2xl sm:text-4xl md:max-w-3xl md:text-5xl lg:max-w-5xl lg:text-6xl xl:max-w-7xl xl:text-7xl"
  >
    {text}
  </h2>
</div>
