<script lang="ts">
  export let introText: string;
</script>

<div
  class="flex items-center justify-center p-3 sm:p-6 md:p-9 lg:h-dvh lg:p-12"
>
  <div class="py-36 text-center">
    <h1
      class="mb-8 font-display text-6xl sm:text-7xl md:text-9xl lg:text-[10rem]"
    >
      Amy Potter
    </h1>
    <p class="text-sm md:text-base">{introText}</p>
  </div>
</div>
