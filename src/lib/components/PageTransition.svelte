<script>
  import { fly } from "svelte/transition";
  export let url = "";
  const pageTransitionDuration = 500;
</script>

{#key url}
  <div
    in:fly={{
      opacity: 0,
      duration: pageTransitionDuration,
      delay: pageTransitionDuration,
    }}
    on:outroend={() => window.scrollTo(0, 0)}
    out:fly={{ opacity: 0, duration: pageTransitionDuration }}
  >
    <slot />
  </div>
{/key}
