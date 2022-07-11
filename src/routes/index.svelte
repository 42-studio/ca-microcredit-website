<svelte:head>
  <title>Home • C.A. Micro Credit Enterprise</title>
</svelte:head>

<section class="title">
  <h1>C.A. Micro Credit</h1>
  <h2>supporting local<br />communities<br />in Ghana</h2>

  <img src="/images/leaves.svg" alt="leaves" class="leaves" />
  <div class="learn-more-container">
    <img src="/images/man.png" alt="man" class="man" />
    <button>Learn more</button>
  </div>
</section>
<section class="mission" />

<style>
  section.title {
    padding: 28px;
    padding-top: 0;
    min-height: calc(100vh - 200px);
  }

  h1,
  h2 {
    display: block;
    text-align: right;
    font-family: "Roboto Slab", serif;
    color: var(--black);
    font-size: 30px;
    margin: 0;
    line-height: 3rem;
  }

  h1 {
    font-weight: 700;
  }
  h2 {
    font-weight: 400;
  }

  .leaves {
    position: absolute;
    left: 0;
    top: 250px;
    z-index: -1;
  }

  .learn-more-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(100vh - 730px);
  }
  .man {
    width: 230px;
    /* max-width: 40vh; */
  }

  button {
    padding: 10px 70px;
    margin: 0;
    border-radius: 10px;
    border: none;
    background-color: var(--primary);
    box-shadow: 0px 3px 15px 6px rgba(0, 0, 0, 0.1);

    color: var(--white);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  section.mission {
    background-color: var(--white);
    height: 100px;
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  }
</style>
