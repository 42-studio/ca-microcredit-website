<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
  import NavMenu from "$lib/components/NavMenu.svelte";
  import PageTransition from "../lib/components/PageTransition.svelte";

  export let url: string;
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<nav class:nav-shadow={y > 0}>
  <a href="/" class="logo-nav-container" sveltekit:noscroll>
    <img
      src="/images/logo.png"
      alt="C.A. Micro Credit Enterprise Logo"
      class="logo-nav"
    />
  </a>
  <NavMenu />
</nav>

<PageTransition {url}>
  <slot />
  <footer>
    <section class="top">
      <section class="left">
        <p class="footer-title">C.A. Micro Credit<br />Enterprise</p>
        <p class="footer-paragraph">Some rights reserved</p>
      </section>
      <section class="right">
        <img
          src="/images/logo.png"
          alt="C.A. Micro Credit Enterprise Logo"
          class="logo-footer"
        />
      </section>
    </section>
    <hr />
    <section class="bottom">
      <section class="left">
        <p class="footer-paragraph">
          © {new Date().getFullYear()} •
          <a class="footer-a" href="/privacy" sveltekit:noscroll
            >Privacy Policy</a
          >
        </p>
      </section>
      <section class="right">
        <p class="footer-paragraph">
          website by <a
            class="footer-a"
            href="https://42.studio"
            target="_blank"
            rel="noopener noreferrer">Studio 42</a
          >
        </p>
      </section>
    </section>
  </footer>
</PageTransition>

<style>
  nav {
    top: 0;
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: var(--background);
    transition: all 200ms ease;
    z-index: 100;
  }

  .logo-nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer {
    padding: 28px;
    font-size: 12px;
    color: var(--black);
  }

  section.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  section.bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    opacity: 0.5;
    line-height: 1.3rem;
  }

  .footer-a {
    text-decoration: underline;
    color: var(--black);
  }

  section.right {
    text-align: right;
  }
  .footer-title {
    font-weight: 700;
  }

  hr {
    height: 1px;
    background-color: var(--secondary);
    opacity: 0.5;
    border: none;
  }

  .nav-shadow {
    box-shadow: 10px 3px 15px 6px rgba(0, 0, 0, 0.1),
      -10px 3px 15px 6px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 800px) {
    nav {
      padding: 28px;
      font-size: 16px;
    }
    .nav-shadow {
      padding: 12px 28px;
      margin-bottom: 32px;
    }

    .logo-nav {
      height: 45px;
    }

    .logo-footer {
      height: 60px;
    }
  }

  @media screen and (min-width: 800px) {
    nav {
      padding: 60px;
      font-size: 20px;
    }

    .nav-shadow {
      padding: 28px 60px;
      margin-bottom: 64px;
    }

    .logo-nav {
      height: 85px;
    }

    footer {
      padding: 60px;
    }

    .logo-footer {
      height: 100px;
    }
  }

  footer {
    font-size: 18px;
  }

  section.bottom {
    font-size: 14px;
  }

  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes -global-from-left {
    0% {
      transform: translateX(-50px) scale(0.95);
      opacity: 0;
    }
    30% {
      transform: translateX(-50px) scale(0.95);
      opacity: 0;
    }
    100% {
      transform: translateX(0px) scale(1);
      opacity: 1;
    }
  }

  @keyframes -global-from-right {
    0% {
      transform: translateX(50px) scale(0.95);
      opacity: 0;
    }
    30% {
      transform: translateX(50px) scale(0.95);
      opacity: 0;
    }
    100% {
      transform: translateX(0px) scale(1);
      opacity: 1;
    }
  }

  @keyframes -global-from-bottom {
    0% {
      transform: translateY(30px) scale(0.95);
      opacity: 0;
    }
    50% {
      transform: translateY(30px) scale(0.95);
      opacity: 0;
    }
    100% {
      transform: translateX(0px) scale(1);
      opacity: 1;
    }
  }
</style>
