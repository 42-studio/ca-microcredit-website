<script lang="ts">
  const boxes = [
    {
      title: "Join us in making a positive social impact",
      tagline:
        "Invest in C.A. Microcredit and support our mission to provide financial inclusion to people and businesses in Ghana",
      image: "/images/icons/helping-hand.png",
    },
    {
      title: "Experience high potential returns",
      tagline:
        "As C.A. Microcredit grows and expands, your investment has the potential to generate significant returns",
      image: "/images/icons/profit.png",
    },
    {
      title: "Grow with us",
      tagline:
        "As C.A. Microcredit pursues its vision of becoming a first class universal bank, your investment has the potential to grow along with us",
      image: "/images/icons/leaf.png",
    },
    {
      title: "Diversify your portfolio",
      tagline:
        "Invest in C.A. Microcredit and add a fast-growing industry to your investment portfolio",
      image: "/images/icons/diversity.png",
    },
  ];
</script>

<svelte:head>
  <title>Invest • C.A. Micro Credit Enterprise</title>
</svelte:head>

<main>
  <div class="header-container">
    <div class="title-wrapper">
      <h1>
        We are looking for <span class="effect-shine">Investors</span>
      </h1>
      <p class="subtitle">
        Join forces with C.A. Microcredit and support our mission to provide
        financial inclusion to businesses in Ghana. By investing in our company,
        you have the opportunity to drive growth and development in the
        country's small and medium enterprises, and make a positive impact on
        the local community. Partner with us and be a part of something bigger -
        a movement towards a more inclusive and prosperous future for Ghana.
      </p>
    </div>
    <div class="image-container">
      <img id="case" class="floater" src="/images/case.png" alt="case" />
      <img id="coins" class="floater" src="/images/coins.png" alt="coins" />
    </div>
  </div>

  <section class="boxes">
    {#each boxes as box}
      <div class="box">
        <div class="head">
          <div class="icon">
            <img src={box.image} alt="icon" />
          </div>
          <h2>{box.title}</h2>
        </div>
        <p class="box-tagline">{box.tagline}</p>
      </div>
    {/each}
  </section>
</main>

<style>
  main {
    padding: 0 28px;
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .title-wrapper {
    display: flex;
    flex-direction: column;
  }

  .image-container {
    width: 100%;
    height: 12rem;

    /* margin: 2rem 0; */
    position: relative;
  }

  .floater {
    width: 8rem;
    position: absolute;
    bottom: 0;
    -webkit-filter: drop-shadow(-10px 10px 10px #0000004b);
    filter: drop-shadow(-10px 10px 10px #0000004b);
  }

  #coins {
    left: calc(50% - 1rem);
    transform: translateX(-50%);
    width: 6rem;
    animation: bob 4s 500ms ease-in-out infinite;
  }

  #case {
    left: 50%;
    transform: translateX(-50%);
    bottom: 1rem;
    width: 8rem;
    animation: bob 4s ease-in-out infinite;
  }

  .boxes {
    margin-top: 5rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;
  }

  .box {
    background-color: var(--black);
    color: var(--white);
    padding: 1rem;
    border-radius: 1rem;
  }

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    padding: 0.8rem;
    margin-right: 1rem;
    border-radius: 4rem;

    background-color: rgba(255, 255, 255, 0.2);
  }

  .icon > img {
    width: 2rem;
    height: 2rem;
  }

  .box-tagline {
    margin-left: 4.6rem;
  }

  p {
    max-width: 610px;
    opacity: 0.5;
    line-height: 1.7em;
    margin-top: 0.5rem;
  }

  h1 {
    margin: 1rem 0;
    font-family: "Roboto Slab", serif;
    font-size: 2rem;
    line-height: 1.3em;
    font-weight: 700;
  }

  h2 {
    margin: 0;
    font-family: "Roboto Slab", serif;
    opacity: 0.9;
  }

  .effect-shine {
    border-bottom: 3px solid var(--secondary);
  }

  .effect-shine:hover {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 10%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 90%
    );
    -webkit-mask-size: 200%;

    mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 10%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 90%
    );
    mask-size: 200%;

    animation: shine 2s infinite;
  }
  @-webkit-keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
    }
  }

  @keyframes shine {
    from {
      mask-position: 150%;
    }

    to {
      mask-position: -50%;
    }
  }

  @keyframes bob {
    0% {
      transform: translate(-50%, 0);
      -webkit-filter: drop-shadow(-10px 10px 15px #0000004b);
      filter: drop-shadow(-10px 10px 15px #00000068);
    }
    50% {
      transform: translate(-50%, -20px);
      -webkit-filter: drop-shadow(-10px 30px 30px #0000004b);
      filter: drop-shadow(-10px 30px 30px #00000068);
    }
    100% {
      transform: translate(-50%, 0);
      -webkit-filter: drop-shadow(-10px 10px 15px #0000004b);
      filter: drop-shadow(-10px 10px 15px #00000068);
    }
  }

  @media screen and (min-width: 800px) {
    main {
      padding: 0 60px;
    }

    .header-container {
      flex-direction: row;
      align-items: flex-end;
    }

    .title-wrapper {
      margin-right: 5rem;
    }

    .image-container {
      width: 12rem;
    }

    .floater {
      width: 12rem;
      margin: 0;
      margin: 0 auto;
    }

    #coins {
      width: 9rem;
    }

    #case {
      width: 12rem;
    }

    h1 {
      font-size: 3em;
    }
  }
</style>
