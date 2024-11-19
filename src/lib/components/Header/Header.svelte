<script lang="ts">
  import Menu from "../icons/Menu.svelte";
  import MobileNav from "../MobileNav/MobileNav.svelte";

  const links: { href: string; label: string }[] = [
    {
      href: "/work",
      label: "Work",
    },
    {
      href: "/about",
      label: "About",
    },
  ];

  let navOpen = $state(false);
</script>

<header
  class="fixed left-0 right-0 top-0 flex items-center justify-between p-3 tracking-tight sm:p-6 md:p-9 lg:p-12 xl:p-16"
>
  <a href="/">
    <p class="text-xs !leading-none sm:text-sm lg:text-lg xl:text-xl">
      <span class="font-medium uppercase">Amy Potter</span>
      <br />
      <span>Shoot Producer</span>
    </p>
  </a>
  <div class="hidden gap-8 sm:flex">
    {#each links as link}
      <a
        href={link.href}
        class="relative text-sm font-medium uppercase before:absolute before:right-0 before:top-full before:h-[1px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full lg:text-lg xl:text-xl"
      >
        {link.label}
      </a>
    {/each}
  </div>
  <button class="sm:hidden" type="button" onclick={() => (navOpen = true)}>
    <Menu classes="size-8" />
  </button>
</header>
{#if navOpen}
  <MobileNav on:onCloseNav={() => (navOpen = false)} {links} />
{/if}
