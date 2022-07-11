<script>
  import { page } from "$app/stores";
</script>

<nav>
  <a href="/">
    <img
      src="/images/logo.png"
      alt="C.A. Micro Credit Enterprise Logo"
      class="logo-nav"
    />
  </a>
  <div class="links">
    <a href="/" style="opacity: {$page.url.pathname == '/' ? 1 : 0.5}">Home</a>
    <a
      href="/stories"
      style="opacity: {$page.url.pathname == '/stories' ? 1 : 0.5}">Stories</a
    >
    <a
      href="/contact"
      style="opacity: {$page.url.pathname == '/contact' ? 1 : 0.5}">Contact</a
    >
  </div>
</nav>

<slot />

<footer>
  <section class="top">
    <section class="left">
      <p class="footer-title">C.A. Mirco Credit<br />Enterprise</p>
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
      <p class="footer-paragraph">© {new Date().getFullYear()}</p>
    </section>
    <section class="right">
      <p class="footer-paragraph">
        website by <a
          class="footer-a"
          href="https://joshlucpoll.dev"
          target="_blank"
          rel="noopener noreferrer">joshlucpoll</a
        ><br /><a class="footer-a" target="_blank" href="https://icons8.com"
          >icons by Icons8</a
        >
      </p>
    </section>
  </section>
</footer>

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .links {
    display: block;
    text-align: right;
    line-height: 2rem;
    font-size: 16px;
  }
  .links > * {
    margin-left: 20px;
    text-decoration: none;
    color: var(--black);
    border-bottom: 1px solid var(--secondary);
    padding-bottom: 1px;

    transition: all 200ms ease;
  }

  .links > *:hover {
    padding-bottom: 4px;
  }

  footer {
    padding: 20px;
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

  @media screen and (max-width: 600px) {
    nav {
      padding: 28px;
    }
    .logo-nav {
      height: 45px;
    }
    .logo-footer {
      height: 60px;
    }
  }

  @media screen and (min-width: 600px) {
    nav {
      padding: 28px;
    }
    .logo-nav {
      height: 85px;
    }
    .logo-footer {
      height: 100px;
    }
  }
</style>
