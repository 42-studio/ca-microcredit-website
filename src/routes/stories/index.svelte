<script>
  import Saos from "saos";
</script>

<svelte:head>
  <title>Stories • C.A. Micro Credit Enterprise</title>
</svelte:head>

<div class="header-container">
  <div class="title-wrapper">
    <h1 class="title">Explore Our Success Stories</h1>
    <p class="subtitle">
      Our enterprise helps many people in and around <a
        href="https://www.google.com/maps/place/Garu,+Ghana/@9.0517837,-5.9857138,3263545m"
        target="_blank"
        rel="noopener noreferrer">Garu</a
      >, a small town in the Upper East Region of north Ghana. Discover how we
      have helped these communities by reading about some of our success stoires
      below
    </p>
  </div>
</div>
<div class="stories">
  <div class="story">
    <a href="/stories/mary-ndeogo" sveltekit:noscroll>
      <div class="image">
        <img src="/images/stories/NDEOGO_MARY.jpg" alt="Ndeogo Mary" />
        <div class="text-container">
          <div class="story-title">Mary Ndeogo</div>
          <div class="subtitle">
            A young lady who had to close down her store
          </div>
        </div>
        <div class="discover">↗</div>
      </div>
    </a>
  </div>
  <div class="story">
    <a href="/stories/seidu-ramatu" sveltekit:noscroll>
      <div class="image">
        <img src="/images/stories/SEIDU_RAMATU.jpg" alt="Seidu Ramatu" />
        <div class="text-container">
          <div class="story-title">Seidu Ramatu</div>
          <div class="subtitle">
            A food vendor who became stuck due to Covid 19
          </div>
        </div>
        <div class="discover">↗</div>
      </div>
    </a>
  </div>
</div>

<style>
  .header-container {
    display: flex;
    flex-direction: column;
  }

  .title-wrapper {
    margin: 0 28px;
    text-align: right;
    display: flex;
    flex-direction: column;
  }

  .subtitle {
    align-self: flex-end;
    max-width: 410px;
    opacity: 0.5;
    line-height: 1.7em;
  }

  a {
    color: var(--black);
  }

  .stories {
    padding: 0 28px;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 8rem;
    /* justify-items: center; */
    font-size: 14px;
  }

  .title {
    margin: 0;
    display: block;
    font-family: "Roboto Slab", serif;
    font-size: 2rem;
    line-height: 1.6em;
    font-weight: 700;
  }
  .story {
    width: 100%;
    max-width: min(85vw, 40rem);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .image {
    position: relative;
    width: 100%;
    transition: all 200ms ease;
  }

  .image > img {
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0px 3px 15px 6px rgba(0, 0, 0, 0.25);
  }

  .image::before {
    content: "";
    border-radius: 1rem;
    position: absolute;
    z-index: -1;

    top: -5%;
    right: -5%;
    bottom: 5%;
    left: 5%;

    transition: all 200ms ease;
    border: 2px dashed var(--black);
  }

  .image:hover::before {
    top: -10%;
    right: -10%;
    bottom: 10%;
    left: 10%;
  }

  .image:hover {
    transform: scale(1.02);
  }

  .story-title {
    font-size: 2rem;
    font-weight: bold;
  }

  .text-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;

    color: white;
    background-color: rgba(0, 0, 0, 0.583);
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0px -10px 10px 0px rgba(0, 0, 0, 0.583);
  }

  .text-container > .subtitle {
    max-width: calc(100% - 6rem);
  }

  .discover {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2rem;
    aspect-ratio: 1;
    border-radius: 1rem 0 1rem 0;

    background-color: var(--primary);
    color: white;
    text-align: center;
    font-weight: 900;
    font-size: 3rem;
    line-height: 2rem;
  }

  @media screen and (min-width: 800px) {
    .header-container {
      flex-direction: row-reverse;
    }

    .title-wrapper {
      margin: 0 60px;
      text-align: right;
    }
    .title {
      font-size: 3em;
    }
    .subtitle {
      max-width: 560px;
    }

    .stories {
      padding: 0 60px;
      font-size: 16px;
    }
  }
</style>
