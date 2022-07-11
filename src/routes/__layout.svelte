<nav>
  <img
    src="/images/logo.png"
    alt="C.A. Micro Credit Enterprise Logo"
    class="logo"
  />
  <div class="links">
    <a href="/">Home</a>
    <a href="/stories">Stories</a>
    <a href="/contact">Contact</a>
  </div>
</nav>

<slot />

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .links > * {
    margin-left: 20px;
    color: var(--black);
  }

  .links {
    display: block;
    text-align: right;
    line-height: 2rem;
    font-size: 16px;
  }

  @media screen and (max-width: 1024px) {
    nav {
      padding: 28px;
    }
    .logo {
      height: 45px;
      widows: 45px;
    }
  }
</style>
