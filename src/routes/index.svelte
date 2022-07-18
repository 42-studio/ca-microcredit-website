<script>
  const values = {
    "Every individual has potential": "child-reaching",
    "We treat all with respect": "people-group",
    "Confidentiality is key": "lock",
    "Honesty and trust": "hand-holding-heart",
    "Accountability and integrity": "handshake-simple",
  };
</script>

<svelte:head>
  <title>Home • C.A. Micro Credit Enterprise</title>
</svelte:head>

<section class="title">
  <h1>C.A. Micro Credit</h1>
  <h2>supporting local<br />communities</h2>
  <img src="/images/leaves.svg" alt="leaves" class="leaves" />
  <h2>in Ghana</h2>

  <div class="learn-more-container">
    <img src="/images/man.png" alt="man" class="man" />
    <button
      class="learn-more-btn"
      on:click|preventDefault={(e) =>
        document
          .querySelectorAll(".learn-more-btn")[0]
          .scrollIntoView({ behavior: "smooth" })}>Learn more</button
    >
  </div>
</section>
<section class="mission">
  <div class="mission-container">
    <h1 class="mission-title">Our Mission</h1>
    <hr class="mission-hr" />
    <p class="mission-statement">
      "To create financial inclusion by providing efficient delivery of credit
      facilities to micro, small and medium enterprises through a combination of
      servicing methodologies with an ultimate objective of no bankable poor are
      left behind”
    </p>
    <a class="desktop-explore-btn" sveltekit:noscroll href="/stories">
      <button class="explore-btn">Explore our stories</button>
    </a>
  </div>
  <div class="img-container">
    <img src="/images/people.jpg" alt="people" class="people" />
    <a class="mobile-explore-btn" sveltekit:noscroll href="/stories">
      <button class="explore-btn">Explore our stories</button>
    </a>
  </div>
</section>
<section class="values">
  <h1 class="values-title">Our Core Values</h1>
  <hr class="values-hr" />
  <div class="values-container">
    {#each Object.entries(values) as [value, image], i}
      {#if i % 2}
        <div class="value-container">
          <div class="value-spacer" />
          <div class="value-text">{value}</div>
          <div class="left-arrow">
            <img
              class="value-icon"
              src="/images/{image}-solid.svg"
              alt={image}
            />
          </div>
        </div>
      {:else}
        <div class="value-container">
          <div class="right-arrow">
            <img
              class="value-icon"
              src="/images/{image}-solid.svg"
              alt={image}
            />
          </div>
          <div class="value-text">{value}</div>
          <div class="value-spacer" />
        </div>
      {/if}
    {/each}
  </div>
</section>
<section class="vision">
  <h1 class="vision-title">Our Vision</h1>
  <hr />
  <div class="vision-container">
    <p class="vision-text">
      The vision of C.A. Micro Credit Enterprise is to grow into a first class
      universal bank
    </p>
    <p class="vision-text">
      Interested in investing with <span style="font-weight: 600;"
        >C.A. Micro Credit Enterprise</span
      >? Get in touch with us below
    </p>
  </div>
  <br />
  <a sveltekit:noscroll href="/contact">
    <button class="vision-button">Contact us</button>
  </a>
</section>

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
    line-height: 1.6em;
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
    opacity: 0.5;
    z-index: -1;
  }

  .learn-more-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(100vh - 730px);
  }
  .man {
    transform: translateY(5px);
    z-index: 0;
    width: 230px;
  }

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

  section.mission {
    background-color: var(--white);
    border-radius: 20px 20px 0px 0px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  }

  .mission-container {
    padding: 28px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mission-title {
    margin-top: 20px;
    margin-bottom: 30px;
    line-height: 1em;
  }
  hr {
    height: 2px;
    width: 8rem;
    margin: 0;
    background-color: var(--secondary);
    opacity: 0.5;
    border: none;
  }

  .mission-statement {
    margin: 30px 0;

    text-align: center;
    font-style: italic;
    opacity: 0.5;
    font-size: 16px;
    line-height: 1.7em;
  }

  .img-container {
    /* position: relative; */
    width: 100%;
    height: fit-content;
    background-image: url("/images/people.jpg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .people {
    width: 100%;
    visibility: hidden;
  }

  .explore-btn {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }

  .desktop-explore-btn {
    display: none;
  }

  section.values {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .values-title {
    line-height: 1em;
    margin-top: 60px;
    margin-bottom: 30px;
  }

  .values-container {
    width: 100%;
    margin-top: 40px;
  }

  .value-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .value-text {
    text-align: center;
    width: 100%;
  }

  .left-arrow,
  .right-arrow {
    width: 0;
    height: 0;
    border-style: solid;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-arrow {
    border-color: transparent #321325 transparent transparent;
    border-width: 50px 80px 50px 0px;
  }

  .right-arrow {
    border-width: 50px 0 50px 80px;
    border-color: transparent transparent transparent #321325;
  }

  .value-icon {
    position: relative;
    height: 30px;
    width: 30px;
  }

  .right-arrow > .value-icon {
    left: -55px;
  }
  .left-arrow > .value-icon {
    left: 55px;
  }

  .value-text {
    opacity: 0.5;
    font-size: 18px;
  }

  section.vision {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 28px;
    margin-top: 40px;

    background: #321325;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
    border-radius: 20px 20px 0px 0px;
  }

  .vision-title {
    color: var(--white);
    margin-top: 20px;
    margin-bottom: 30px;
    line-height: 1em;
  }

  .vision-text {
    color: var(--white);
    text-align: center;
    font-size: 20px;
    line-height: 1.7em;
  }

  @media screen and (min-width: 800px) {
    button {
      height: 55px;
      width: 250px;
      margin: 0;
      border-radius: 14px;
      border: none;
      background-color: var(--primary);
      box-shadow: 0px 3px 15px 6px rgba(0, 0, 0, 0.1);

      color: var(--white);
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    h1,
    h2 {
      font-size: 60px;
      line-height: 1.3em;
    }

    @media screen and (min-height: 950px) {
      h1,
      h2 {
        font-size: 80px;
        line-height: 1.3em;
      }
    }

    section.title {
      display: flex;
      flex-direction: column;
      padding: 0 60px;
      min-height: calc(100vh - 250px);
    }

    .learn-more-container {
      position: relative;
      margin-top: 0;
      min-height: 100%;
      flex-grow: 1;
    }

    .learn-more-btn {
      align-self: flex-end;
      margin: 50px 0;
    }

    .man {
      position: absolute;
      bottom: -10vh;
      left: 0;
      width: min(56vh, 60vw);
      z-index: -1;
    }

    .leaves {
      margin-top: calc(80vh - min(80vh, 70vw));
      height: min(80vh, 70vw);
    }

    section.mission {
      display: flex;
    }

    .mission-container {
      flex: 1;
      padding: 60px;
      align-items: flex-start;
    }

    hr {
      height: 3px;
    }

    .mission-hr {
      margin-top: 10px;
      margin-bottom: 40px;
      width: 30em;
      align-self: flex-start;
    }

    .mission-statement {
      text-align: left;
      font-size: 24px;
    }

    .img-container {
      border-radius: 0 20px 0 0;
      flex: 1;
      background-size: cover;
      height: auto;
    }

    .desktop-explore-btn {
      display: block;
      margin-top: 40px;
    }

    .mobile-explore-btn {
      display: none;
    }

    .explore-btn {
      position: relative;
    }

    .values-hr {
      margin-bottom: 40px;
      margin-top: 10px;
      width: 28em;
    }

    section.values {
      padding: 0 80px;
      margin-bottom: 100px;
    }

    .value-container {
      max-width: 1100px;
      margin: 0 auto;
    }

    .value-text {
      font-size: 32px;
      width: auto;
    }

    .left-arrow,
    .right-arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      background-color: var(--black);

      transform: rotate(45deg);
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
      border: none;
    }

    .value-icon {
      height: 60px;
      width: 60px;
      left: 0 !important;

      transform: rotate(-45deg);
    }

    .vision-container {
      max-width: 450px;
      padding: 60px 0;
    }
  }
</style>
