<script lang="ts">
  import Close from "../icons/Close.svelte";
  import { fade, slide } from "svelte/transition";

  interface Props {
    links?: { href: string; label: string; anchor?: boolean }[];
    onCloseNav: () => void;
  }
  import { handleAnchorClick } from "../../../utils/util";

  let { links = [], onCloseNav }: Props = $props();
</script>

<div
  class="w-dvh fixed inset-0 z-10 h-dvh bg-white sm:hidden"
  transition:fade={{ delay: 0, duration: 200 }}
></div>
<div
  class="fixed inset-0 z-10 h-dvh w-dvw bg-black p-3 text-white sm:hidden"
  in:slide={{ delay: 250, duration: 450, axis: "y" }}
  out:slide={{ delay: 50, duration: 450, axis: "y" }}
>
  <div
    in:fade={{ delay: 500, duration: 200 }}
    out:fade={{ delay: 0, duration: 200 }}
  >
    <div class="flex items-center justify-between">
      <a href="/" onclick={onCloseNav}>
        <p class="text-xs !leading-none sm:text-sm">
          <span class="font-medium uppercase">Amy Potter</span>
          <br />
          <span>Shoot Producer</span>
        </p>
      </a>
      <button type="button" onclick={onCloseNav}>
        <Close classes="size-8" />
      </button>
    </div>

    <ul class="mt-12">
      {#each links as link}
        <li
          class="border-b border-white py-4 font-display text-4xl last:border-none"
        >
          <a
            href={link.href}
            onclick={link.anchor
              ? e => {
                  onCloseNav();
                  handleAnchorClick(e);
                }
              : onCloseNav}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>

    <div class="absolute bottom-3 left-3 text-xs">
      <span>© {new Date().getFullYear()}</span>
      <span class="block">
        Site by
        <a
          href="https://kyleshepherd.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kyle Shepherd
        </a>
      </span>
    </div>
  </div>
</div>
