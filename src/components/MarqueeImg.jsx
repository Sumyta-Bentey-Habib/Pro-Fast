import React from 'react';
import Marquee from "react-fast-marquee";
import amazon from "../assets/brands/amazon.png";
import casio from "../assets/brands/casio.png";
import moonstar from "../assets/brands/moonstar.png";
import star from "../assets/brands/start.png";
import starone from "../assets/brands/start-people 1.png";

const MarqueeImg = () => {
  return (
    <section className="py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        We've helped thousands of sales teams
      </h1>

      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <div className="flex items-center gap-12">
          <img src={amazon} alt="Amazon" className=" w-auto" />
          <img src={casio} alt="Casio" className="w-auto" />
          <img src={moonstar} alt="Moonstar" className="w-auto" />
          <img src={star} alt="Star" className="w-auto" />
          <img src={starone} alt="Star One" className="w-auto" />
        </div>
      </Marquee>
    </section>
  );
};

export default MarqueeImg;
