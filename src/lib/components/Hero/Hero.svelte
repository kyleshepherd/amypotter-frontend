<script lang="ts">
  export let introText: string;
</script>

<div
  class="flex h-dvh items-center justify-center bg-white p-3 sm:p-6 md:p-9 lg:p-12 xl:p-16"
>
  <div class="py-36 text-center">
    <h1
      class="mb-8 font-display text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[11rem] 2xl:text-[12rem] 3xl:text-[13rem]"
    >
      Amy Potter
    </h1>
    <p class="mx-auto max-w-xs text-sm uppercase md:text-base">{introText}</p>
  </div>
</div>
