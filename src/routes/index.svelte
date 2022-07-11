<svelte:head>
  <title>Home • C.A. Micro Credit Enterprise</title>
</svelte:head>

<section class="title">
  <h1>C.A. Micro Credit</h1>
  <h2>supporting local<br />communities<br />in Ghana</h2>

  <img src="/images/leaves.svg" alt="leaves" class="leaves" />
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
      To create financial inclusion by providing efficient delivery of credit
      facilities to micro, small and medium enterprises through a combination of
      servicing methodologies with an ultimate objective of no bankable poor are
      left behind”
    </p>
  </div>
  <!-- <div class="img-container"> -->
  <img src="/images/people.jpg" alt="people" class="people" />
  <!-- <button class="explore-btn">Explore our stories</button> -->
  <!-- </div> -->
</section>
<section class="values">
  <h1 class="values-title">Our Core Values</h1>
  <hr />
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
    margin-top: 32px;
    margin-bottom: 30px;
    line-height: 1rem;
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
  }

  .img-container {
    /* position: relative; */
  }

  .people {
    width: 100%;
  }

  .explore-btn {
    position: absolute;
    bottom: 50%;
    right: 50%;
    margin: 0 -20px -110px 0;
  }
</style>
