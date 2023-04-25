import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center md:justify-between items-start gap-y-8 md:gap-y-0 w-full  md:gap-x-8 px-5 md:px-[8%] lg:px-[7%] mb-[50px] md:mb-[100px] relative bg-white z-20 pt-14 lg:pt-7">
      <p className="text-[#2C2C2E] font-thin text-base mb-5 md:mb-20 ">
        News flash - I&apos;m currently looking for mid or senior - level design
        role!!!
      </p>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start gap-y-5 md:gap-y-0 w-full h-full">
        <div className="flex flex-col justify-center items-start text-left md:basis-[70%] w-full h-fit z-[5] ">
          <p className="text-[#2C2C2E] font-semibold text-[35px] mb-7 md:mb-8">
            A little bit about myself...
          </p>
          <p className="text-[#2C2C2E] font-thin text-[20px] mb-5 md:mb-6 leading-[1.9] ">
            My name is Adebayode, passionate about work that improves
            accessibility for human race. I enjoy learning new things everyday
            and love meeting people who are motivated about sharing ideas with
            the world. I currently live in Lagos State, Nigeria, ready and open
            to work globally.
          </p>

          <p className="text-[#2C2C2E] font-thin text-[20px] mb-5 md:mb-6 leading-[1.9] ">
            Growing up, I found love for art-related activities, like drawing on
            sketchbook. After going through life struggles for years, I became
            aware and fascinated with the way we humans act, think, and feel.
            Also, how products could help us live more fulfilling lives.
          </p>

          <p className="text-[#2C2C2E] font-thin text-[20px] mb-5 md:mb-6 leading-[1.9] ">
            I started my design career as a graphics/brand designer, creating
            unique identities for businesses, startups, and individuals. Over
            the years, I have grown to understand the importance and the purpose
            of creating digital products for human race to the point of planning
            to own one.
          </p>
          <p className="text-[#2C2C2E] font-thin text-[20px] mb-5 md:mb-6 leading-[1.9] ">
            My recent role was at Bani - a financial tech startup that provides
            solutions for alternative payment infrastructure for the Global
            Economy. I was part of the design team. I created the payment
            link(responsive web designs for both the merchants and the clients)
            - one of their products. I also work on the virtual account design
            with the other designer.
          </p>
          <p className="text-[#2C2C2E] font-thin text-[20px] mb-5 md:mb-6 leading-[1.9] ">
            I&apos;m currently open to new role as a senior or mid level product
            designer and I&apos;m open to full-time, hybrid, contract, or
            completely remote.
          </p>
          <p className="text-[#2C2C2E] font-thin text-[20px] mb-5 md:mb-6 leading-[1.9] ">
            I enjoy teaching design to interested people and also mentor them on
            their design journey, preparing them for the task ahead until they
            land their first role.
          </p>

          <p className="text-[#2C2C2E] font-thin text-[20px] mb-5 md:mb-6 leading-[1.9] ">
            If I&apos;m not designing, I&apos;m a workout enthusiasts , and
            enjoy exploring new places. I also hosting casual and professional
            events.
          </p>

          <p className="text-[#2C2C2E] font-thin text-[20px] mb-5 md:mb-6 leading-[1.9] ">
            I&apos;m always down to collaborate. Reach out and let&apos;s chat!
          </p>
        </div>

        <div className="flex flex-col justify-center items-center md:basis-[30%] w-full h-full relative z-[5]">
          <div className="flex flex-col justify-center items-center md:items-end min-h-[450px] w-full bg-hero-about bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-left md:bg-center z-[8]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
