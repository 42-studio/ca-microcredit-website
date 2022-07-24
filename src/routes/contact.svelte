<script>
  import Saos from "saos";
</script>

<svelte:head>
  <title>Contact • C.A. Micro Credit Enterprise</title>
</svelte:head>

<div class="title-wrapper">
  <h1 class="title">Get in Contact</h1>
</div>

<div class="form-container">
  <Saos animation={"from-right 2s ease"}>
    <!-- https://formspree.io/ -->
    <form>
      <div class="form">
        <h1>Write Us</h1>
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <input type="text" id="subject" name="subject" placeholder="Subject" />
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="Message"
        />
        <button type="submit">Send</button>
      </div>
      <div class="information">
        <h1>Contact information</h1>
        <p>Get in contact with us, we would love to talk</p>
        <div class="contact-info-widget">
          <div class="icon">
            <img src="/images/location-dot-solid.svg" alt="" />
          </div>
          <div class="widget-title">Address: <span>**address**</span></div>
        </div>
        <div class="contact-info-widget">
          <div class="icon">
            <img src="/images/phone-solid.svg" alt="" />
          </div>
          <div class="widget-title">Phone: <span>**phone**</span></div>
        </div>
        <div class="contact-info-widget">
          <div class="icon">
            <img src="/images/at-solid.svg" alt="" />
          </div>
          <div class="widget-title">Email: <span>**email**</span></div>
        </div>
        <div class="contact-info-widget">
          <div class="icon">
            <img src="/images/earth-africa-solid.svg" alt="" />
          </div>
          <div class="widget-title">Website: <span>**website**</span></div>
        </div>
      </div>
    </form>
  </Saos>
</div>

<style>
  .title-wrapper {
    max-width: 1320px;
    margin: 0 auto;
  }
  .title {
    display: block;
    font-family: "Roboto Slab", serif;
    font-size: 2em;
    margin: 0 28px;
    line-height: 1.6em;
    font-weight: 700;
  }
  form {
    color: var(--white);
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    padding: 28px;
  }

  p,
  span {
    opacity: 0.5;
    margin: 0;
  }

  p {
    margin-bottom: 28px;
  }

  .form {
    padding: 28px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #272a34;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18);
  }

  input,
  textarea {
    font-family: "Inter", sans-serif;
    font-size: 1em;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #fdfffc76;
    color: var(--white);
    background-color: transparent;
    padding: 12px 0;
    margin-bottom: 12px;
  }

  textarea {
    resize: vertical;
    height: 80px;
  }

  button {
    align-self: center;
    height: 40px;
    width: 220px;
    margin: 0;
    margin-top: 28px;
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

  .information {
    padding: 28px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #1c1e25;
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18);
  }

  .contact-info-widget {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 7px 0;
  }

  .icon {
    width: 20px;
    height: 20px;
    padding: 15px;
    border-radius: 50%;
    background-color: #272a34;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
  }

  .widget-title {
    margin-left: 12px;
  }

  @media screen and (min-width: 800px) {
    .title {
      font-size: 3em;
      margin: 0 60px;
      line-height: 1.6em;
      font-weight: 700;
    }

    form {
      flex-direction: row;
      padding: 60px;
      padding-top: 28px;
      margin: 0 auto;
    }

    .form {
      border-radius: 10px 0 0 10px;
    }
    .information {
      border-radius: 0 10px 10px 0;
    }
  }
</style>
