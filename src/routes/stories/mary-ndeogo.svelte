<div class="wrapper">
  <a class="back" href="/stories" sveltekit:noscroll>Back to stories</a>
  <img src="/images/stories/NDEOGO_MARY.jpg" alt="Ndeogo Mary" />
  <div class="story-wrapper">
    <h1>Mary Ndeogo</h1>
    <p>
      Meet Mary, a 19-year-old single young lady who lost her mum two years ago.
      Her mother left behind a provision store for Mary to manage.
      Unfortunately, her mum’s funeral expenses took almost all the working
      capital of the store. This meant Mary had to close her store; she was
      devastated and worried about what the future would look like for herself
      and her siblings.
    </p>
    <p>
      But it does not have to be this way. People can work their way out of
      poverty with a simple loan; this is why C.A. Micro Credit is on a mission
      to provide easily accessible loans for women to empower themselves.
    </p>
    <p>
      C.A Micro Credit granted a loan of GHS2,000.00 ($150) to help Mary with
      her mum’s provision store business. She invested the whole amount into the
      store, and after 6 months, she paid back the loan in full, leaving a net
      profit of GHS800.00 ($57.00).
    </p>
    <p>
      Today, her provision store is always stocked with goods and attracts many
      customers. She makes a profit of about $60.00 every month which is used to
      buy food, and pay hospital bills and school fees for her siblings. Mary's
      successful business has brought much joy and happiness to herself and her
      family. Mary's dream is to grow the business into a supermarket and
      support her brother with education to become a carpenter.
    </p>
    <p>
      Mary has learnt how to manage her credit and is advising others on how to
      manage theirs. This is helping others to pay back their loans and work
      their way out of poverty. Mary shares the opinion that when you support a
      woman with a loan, you benefit the entire family.
    </p>
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
