<script lang="ts">
  import { fly } from "svelte/transition";
  import { page, navigating } from "$app/stores";

  let open: boolean = false;
  const links: Array<string> = ["Home", "Invest", "Stories", "Contact"];
  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= 600}
  <svg
    id="hamburger"
    on:click={() => (open = !open)}
    height="32px"
    version="1.1"
    viewBox="0 0 32 32"
    width="32px"
    fill={open ? "white" : "black"}
    ><path
      d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
    />
  </svg>
{/if}
{#if open || innerWidth > 600}
  <div
    class="links"
    on:click={() => (open = false)}
    transition:fly={{ opacity: 0, duration: innerWidth > 600 ? 0 : 300 }}
  >
    {#each links as link, i}
      <a
        transition:fly={{
          y: -15,
          delay: 50 * i,
          duration: innerWidth > 600 ? 0 : 300,
        }}
        href={link == "Home" ? "/" : `/${link.toLowerCase()}`}
        sveltekit:noscroll
        on:click={() => (open = false)}
        style="opacity: {($page.url.pathname == '/'
          ? '/home'
          : $page.url.pathname) ==
        '/' + link.toLowerCase()
          ? 1
          : 0.5}"
      >
        {link}
      </a>
    {/each}
  </div>
{/if}

<style>
  #hamburger {
    cursor: pointer;
    transition: transform 300ms ease;
    z-index: 100;
  }
  #hamburger:hover {
    transform: scale(1.1);
  }

  .links {
    display: block;
    text-align: right;
    line-height: 2rem;
    /* pointer-events: none; */
  }
  .links > * {
    pointer-events: all;
    margin-left: 1.5rem;
    text-decoration: none;
    color: var(--black);
    border-bottom: 1px solid var(--secondary);
    padding-bottom: 1px;

    -webkit-user-select: none;
    user-select: none;

    transition: all 200ms ease;
  }

  .links > *:hover {
    padding-bottom: 4px;
  }

  @media screen and (max-width: 600px) {
    .links {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;

      height: 100vh;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      z-index: 50;

      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    .links > * {
      border-bottom: 0;
      padding-bottom: 1rem !important;

      font-size: 1.5rem;
      color: white;
      /* font-weight: bold; */
    }
  }

  @media screen and (min-width: 800px) {
    .links > * {
      border-bottom: 2px solid var(--secondary);
    }
  }
</style>
