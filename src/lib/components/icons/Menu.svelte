<script lang="ts">
  interface Props {
    classes?: string;
  }

  let { classes = "size-6" }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class={classes}
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M3.75 6.75h18.5M5.75 12h16.5m-16.5 5.25h16.5"
  />
</svg>
