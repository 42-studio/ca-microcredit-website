<div class="container">
  <div class="code">404</div>
  <h1>Oh No! I Can't Find That Page</h1>
  <h2>Go back home?</h2>
  <button>Take me back</button>
</div>

<style>
  button {
    height: 40px;
    width: 220px;
    margin: 0;
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
    font-size: 100px;
    color: transparent;
    -webkit-text-stroke: 3px var(--secondary);
  }

  @media screen and (min-width: 800px) {
    .container {
      padding: 60px;
      padding-top: 0;
    }
  }
</style>
