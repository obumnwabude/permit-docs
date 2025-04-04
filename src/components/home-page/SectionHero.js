import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

import hero_image from "./assets/hero.png";
import cloud from "./assets/cloud.png";

const SectionHero = ({ title, text }) => (
  <div className="min-h-[260px] relative p-6 md:p-12 !-mt-[2.2rem] overflow-hidden ">
    <div className="flex flex-col xl:flex-row items-center justify-between gap-10 mx-auto w-full px-0 lg:px-5 max-w-6xl">
      <div className="flex flex-col gap-3 shrink-0 relative z-20">
        <h1 className={`!m-0 text-[28px] ${styles.title}`}>{title}</h1>
        <p
          className={`text-sm !leading-5 ${styles.text}`}
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
      <figure className="relative m-0 pointer-events-none w-full lg:w-auto">
        <img
          src={cloud}
          alt="bg"
          width={582}
          height={528}
          className="max-w-[120vw] w-auto z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <img
          style={{ aspectRatio: "423 / 151" }}
          className="relative z-20 object-contain w-full"
          src={hero_image}
          alt="hero image"
          width={423}
          height={151}
          loading="eager"
        />
      </figure>
    </div>
    <div className={`${styles.section_hero_hr}`}></div>
  </div>
);

SectionHero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

SectionHero.defaultProps = {
  title: "Welcome to Permit.io",
  text: "",
};

export default SectionHero;
