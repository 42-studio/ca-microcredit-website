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
    <hr />
    <p class="mission-statement">
      "To create financial inclusion by providing efficient delivery of credit
      facilities to micro, small and medium enterprises through a combination of
      servicing methodologies with an ultimate objective of no bankable poor are
      left behind”
    </p>
  </div>
  <div class="img-container">
    <img src="/images/people.jpg" alt="people" class="people" />
    <a sveltekit:noscroll href="/stories">
      <button class="explore-btn">Explore our stories</button>
    </a>
  </div>
</section>
<section class="values">
  <h1 class="values-title">Our Core Values</h1>
  <hr />
  <div class="values-container">
    {#each Object.entries(values) as [value, image], i}
      {#if i % 2}
        <div class="value-container">
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
        </div>
      {/if}
    {/each}
  </div>
</section>
<section class="vision">
  <h1 class="vision-title">Our Vision</h1>
  <hr />
  <p class="vision-text">
    The vision of C.A. Micro Credit Enterprise is to grow into a first class
    universal bank
  </p>
  <p class="vision-text">
    Interested in investing with <span style="font-weight: 600;"
      >C.A. Micro Credit Enterprise</span
    >? Get in touch with us below
  </p>
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
    /* top: 250px; */
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
    font-size: 30px;
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

  .vision-button {
    width: 120px;
  }
</style>
