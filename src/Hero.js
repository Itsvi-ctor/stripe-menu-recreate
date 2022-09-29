import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenuBar } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenuBar}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from startups tp Fortune 500s-use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their business online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
