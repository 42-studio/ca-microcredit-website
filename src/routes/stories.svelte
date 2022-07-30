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
  <div class="img-wrapper">
    <div class="women-border" />
    <img class="women" src="/images/women.jpg" alt="woman farming" />
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
  .title {
    margin: 0;
    display: block;
    font-family: "Roboto Slab", serif;
    font-size: 2em;
    line-height: 1.6em;
    font-weight: 700;
  }

  .subtitle {
    align-self: flex-end;
    max-width: 410px;
    opacity: 0.5;
    line-height: 1.7em;
  }

  .img-wrapper {
    margin-top: 40px;
    margin-left: 28px;
    width: 70%;
    position: relative;
    align-self: flex-start;
  }

  .women {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 3px 15px 6px rgba(0, 0, 0, 0.1);
    transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .women-border {
    display: block;
    position: absolute;
    top: -20px;
    left: 10px;
    width: 100%;
    height: 100%;
    border: 2px dashed var(--black);
    border-radius: 10px;

    transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .img-wrapper:hover > .women {
    transform: scale(1.1) translate(-5px, 5px);
    box-shadow: 0px 3px 15px 6px rgba(0, 0, 0, 0.25);
  }

  .img-wrapper:hover > .women-border {
    top: -40px;
    left: 30px;
  }

  a {
    color: var(--black);
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

    .img-wrapper {
      margin-top: 8em;
      margin-left: 60px;
      width: 30%;
    }
  }
</style>
