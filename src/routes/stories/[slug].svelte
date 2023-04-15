<script context="module">
  import stories from "$lib/stories";

  export async function load({ params }) {
    let title = params.slug.replace("-", " ");
    const words = title.split(" ");

    title = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    const story = stories.find((el) => el.title == title);
    return { props: { story } };
  }
</script>

<script lang="ts">
  interface Story {
    title: string;
    subtitle: string;
    imageURL: string;
    text: string[];
  }

  export let story: Story;
</script>

<div class="wrapper">
  <a class="back" href="/stories" sveltekit:noscroll>Back to stories</a>
  <img src={story.imageURL} alt={story.title} />
  <div class="story-wrapper">
    <h1>{story.title}</h1>
    {#each story.text as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    position: relative;
  }

  .back {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;

    background-color: var(--primary);
    color: var(--white);
    text-decoration: none;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.25);
  }

  .story-wrapper {
    padding: 0 28px;
  }

  img {
    width: 100%;
    max-height: 70vh;
    object-fit: cover;
  }

  p {
    opacity: 0.5;
  }

  @media screen and (min-width: 800px) {
    .story-wrapper {
      padding: 0 60px;
    }
  }
</style>
