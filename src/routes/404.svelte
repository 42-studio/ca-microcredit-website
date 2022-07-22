<script>
  import { page } from "$app/stores";
</script>

<div class="container">
  <div class="code">404</div>
  <div class="text">
    <h1>Oh No! I Can't Find That Page</h1>
    <p>
      Sorry but <code>{$page.url.pathname}</code> does not exist, do you want to
      go back home?
    </p>
    <a href="/" sveltekit:noscroll><button>Take me back</button></a>
  </div>
</div>

<style>
  button {
    height: 40px;
    width: 220px;
    margin: 0;
    margin-top: 28px;
    border-radius: 10px;
    border: none;
    background-color: var(--primary);
    box-shadow: 0px 3px 15px 6px rgba(0, 0, 0, 0.1);

    color: var(--white);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    z-index: 2;

    transition: all 200ms ease;
  }

  button:hover {
    transform: scale(1.1);
  }

  button:active {
    transform: translateY(5px);
  }

  .container {
    padding: 28px;
    text-align: right;
  }

  .code {
    font-size: 25vh;
    color: transparent;
    -webkit-text-stroke: 0.5vh var(--secondary);
    align-self: flex-start;
  }

  p {
    opacity: 0.5;
  }

  code {
    font-size: 1rem;
  }

  @media screen and (min-width: 800px) {
    .container {
      padding: 60px;
      padding-top: 0;
    }
  }
</style>
