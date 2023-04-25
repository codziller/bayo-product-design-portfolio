import Link from "next/link";
import React from "react";
import ArrowRight from "assets/icons/arrow-right-grey.svg";

const SectionOne = () => {
  const textItems = [
    {
      title: "OVERVIEW",
      body: `Virtual accounts, also known as virtual bank accounts or 
    virtual IBANs, are digital representations of traditional 
    bank accounts that allow individuals and businesses 
    to receive and make payments electronically.`,
    },
    {
      title: "ROLE",
      role: "Product Designer",
      body: `Research, Interaction, Visual design, 
    Prototyping & Testing`,
    },
    {
      title: "GOAL",
      body: `The goal of this particular project was to identify the
    challenges people, business owners, individual go
    through during their daily business transactions.
    And also to give a seamless solution to this 
    challenges faced by these people.`,
    },
  ];
  const secondTextItems = [
    {
      title: "Introduction",
      body: `The banking industry has undergone massive technological transformations in the past few decades, and one of the most significant advancements is the introduction of virtual accounts. Virtual accounts are digital representations of traditional bank accounts that exist only in the digital world. In this case study, I examine the benefits and limitations of virtual accounts, how businesses use them, and also the design approach created by me for Bani Africa’s client base.`,
    },
    {
      title: "Background",
      body: `Bani Africa is a Fintech company that provide payment services such as virtual accounts, payment link and more. They are building alternative payment infrastructure for the Global Economy. Which means they are building infrastructure that is super easy for any business to easily and seamlessly collect alternative payments from their customers. `,
    },
  ];
  return (
    <div className="flex flex-col justify-start items-start  w-full min-h-[500px] mb-[60px] md:gap-x-8 px-5 md:px-[8%] lg:px-[7%]">
      <p className="text-black text-[20px] font-light mb-12 leading-[1.9] ">
        <span className="font-normal">Disclaimer</span>: Due to non-disclosure
        agreements with Bani Africa, I have limitation to what I can share from
        the design team.
      </p>

      <p className="text-black text-[28px] font-semibold mb-5 ">
        Mobile-web design for virtual account
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-24 justify-between items-start w-full mb-8">
        {textItems.map(({ title, body, role }, i) => (
          <div key={i} className="flex flex-col items-start justify-start">
            <p className="text-black text-[20px] font-thin mb-5 leading-[1.9] uppercase ">
              {title}
            </p>
            {role && (
              <p className="text-black text-[20px] font-medium mb-1 leading-[1.9]">
                {role}
              </p>
            )}

            <p className="text-black text-[20px] font-thin mb-3 leading-[1.9]">
              {body}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start justify-start gap-[14px] bg-[#F8F8FF] p-[20px] w-full mb-10">
        {secondTextItems.map(({ title, body }, i) => (
          <div
            key={i}
            className="flex flex-col items-start justify-start gap-[14px] pb-2"
          >
            <p className="text-black text-[28px] font-semibold">{title}</p>

            <p className="text-black text-[20px] font-thin leading-[1.9]">
              {body}
            </p>
          </div>
        ))}
      </div>

      <p className="text-black text-[28px] font-semibold mb-5 ">Process</p>

      <div className="flex flex-col items-start justify-start mb-7">
        <p className="text-black text-[20px] font-thin leading-[1.9] pb-1">
          My design process required three phases:
        </p>
        <p className="text-black text-[20px] font-thin leading-[1.9] pl-2">
          1. Brainstorming together with the other designer and the stakeholders
        </p>
        <p className="text-black text-[20px] font-thin leading-[1.9] pl-2">
          2. Prototyping different solutions
        </p>
        <p className="text-black text-[20px] font-thin leading-[1.9] pl-2">
          3. Designing the UI scree s with the interaction
        </p>
      </div>

      <div className="flex flex-col items-start justify-start mb-4">
        <p className="text-black text-[28px] font-semibold mb-5">Outcome</p>

        <p className="text-black text-[20px] font-thin leading-[1.9]">
          The few mockups below show the empty state of a merchant dashboard for
          virtual account, the dashboard when active, and the merchant branch
          activity page.{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-1 justify-center items-center w-full mb-7 sm:px-10 my-12">
          <div className="flex flex-col justify-center items-center md:items-end min-h-[450px] w-full bg-va-1 bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center z-[8]" />
          <div className="flex flex-col justify-center items-center md:items-end min-h-[450px] w-full bg-va-2 bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center z-[8]" />
          <div className="flex flex-col justify-center items-center md:items-end min-h-[450px] w-full bg-va-3 bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center z-[8]" />
        </div>

        <p className="text-black text-[20px] font-thin leading-[1.9] mb-4">
          Due to non-disclosure agreements with Bani Africa, I have limitation
          to what I can share from the designs, as they contain sensitive
          information and architecture.
        </p>

        <p className="text-black text-[20px] font-thin leading-[1.9] mb-4">
          Interested in checking out how the virtual account works, visit{" "}
          <a
            className="underline font-normal"
            href="https://bani.africa/"
            target="_blank"
            rel="noreferrer"
          >
            bani.africa
          </a>
        </p>

        <p className="text-black text-[20px] font-thin leading-[1.9] mb-4">
          If you&apos;d like more information, feel free to contact me at{" "}
          <a
            className="underline font-medium"
            href="mailto:bayodeog@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            bayodeog@gmail.com
          </a>
          .
        </p>
      </div>
      <Link
        href="/projects/payment-link"
        className=" flex justify-end items-center gap-2 w-full p-3 text-center text-base text-black font-light "
      >
        Next Project
        <span>
          <ArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default SectionOne;
