<script>
  import Saos from "saos";
</script>

<svelte:head>
  <title>Stories • C.A. Micro Credit Enterprise</title>
</svelte:head>

<div class="title-wrapper">
  <h1 class="title">Explore Our Success Stories</h1>
  <p class="subtitle">
    Our enterprise helps many people in the local communities
  </p>
</div>

<style>
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
    max-width: 500px;
  }

  @media screen and (min-width: 800px) {
    .title-wrapper {
      margin: 0 60px;
      text-align: right;
    }
    .title {
      font-size: 3em;
    }
  }
</style>
