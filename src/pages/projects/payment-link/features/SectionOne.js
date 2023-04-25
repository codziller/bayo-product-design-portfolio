import Link from "next/link";
import React from "react";
import ArrowRight from "assets/icons/arrow-right-grey.svg";

const SectionOne = () => {
  const textItems = [
    {
      title: "OVERVIEW",
      body: `A URL that leads directly to a checkout page on an 
      e-commerce website. It is designed to make the 
      payment process as simple and convenient 
      as possible.`,
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
      challenges people, business owners, individual face
      when making payments online. Customer’s concern 
      with security of their personal information and 
      ease of use of the payment system.`,
    },
  ];
  const secondTextItems = [
    {
      title: "Introduction",
      body: `Payment link refers to a unique URL or web address that directs customers to a secure online payment page. This payment link can be used to receive payments from customers who are unable to pay directly through a company’s website. This type of payment system is particularly useful for businesses that sell products or services online but don’t have a secure payment gateway integrated into their website.`,
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
        Responsive-web design for Payment link
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
      <div className="flex flex-col items-start justify-start gap-[14px] bg-[#FFF8F9] p-[20px] w-full mb-10">
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
          The design process involved several stages, including prototyping,
          testing, and iteration. In the initial stage, I created a low-fidelity
          wireframe of the payment link that would be integrated into the
          website. The wireframe included the main features of the payment link,
          such as the payment form, the payment options, and the confirmation
          page. I then created a high-fidelity prototype that was tested by
          several users. The prototype was designed to be user-friendly and
          intuitive, with clear instructions and easy-to-understand icons. The
          next step was to conduct user testing sessions to see how users
          interacted with the payment link. During the testing sessions, we
          observed how users navigated through the payment form and the
          confirmation page, and how they responded to various prompts and
          notifications. Based on the feedback received, I made several changes
          to the design, including adjusting the placement of certain elements
          and adding additional information to help users understand the payment
          process. Finally, I conducted a thorough quality assurance (QA)
          testing to ensure that the payment link was functioning correctly and
          that there were no bugs or errors. The QA testing was performed by a
          dedicated team of testers who conducted extensive testing on various
          devices and browsers.
        </p>
      </div>

      <div className="flex flex-col items-start justify-start mb-4">
        <p className="text-black text-[28px] font-semibold mb-5">Outcome</p>

        <p className="text-black text-[20px] font-thin leading-[1.9]">
          The final product was a secure and user-friendly payment link that
          made it easy for customers to make payments for their purchases.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-1 justify-center items-center w-full mb-7 sm:px-10 my-12">
          <div className="flex flex-col justify-center items-center md:items-end min-h-[450px] w-full bg-pl-1 bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center z-[8]" />
          <div className="flex flex-col justify-center items-center md:items-end min-h-[450px] w-full bg-pl-2 bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center z-[8]" />
          <div className="flex flex-col justify-center items-center md:items-end min-h-[450px] w-full bg-pl-3 bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center z-[8]" />
        </div>

        <p className="text-black text-[20px] font-thin leading-[1.9] mb-10">
          Due to non-disclosure agreements with Bani Africa, I have limitation
          to what I can share from the designs, as they contain sensitive
          information and architecture.
        </p>
        <p className="text-black text-[28px] font-semibold mb-5">Conclusion</p>

        <p className="text-black text-[20px] font-thin leading-[1.9] mb-8">
          The payment link project was a success because we approached the
          design process with a customer-focused mindset. By conducting thorough
          research and user testing, we were able to create a payment link that
          was both secure and easy to use. The payment link helped streamline
          the checkout process and provided customers with a seamless and secure
          experience.
        </p>
        <p className="text-black text-[20px] font-thin leading-[1.9] mb-4">
          Interested in checking outpayment link prototype, visit{" "}
          <a
            className="underline font-normal"
            href="https://bani.africa/"
            target="_blank"
            rel="noreferrer"
          >
            bani.africa
          </a>{" "}
          or{" "}
          <a
            className="underline"
            href="https://www.figma.com/file/W7EUfS88DVZSLeurDkMLVO/Virtual-Accounts-and-Payment-Links?node-id=5-93220&t=B48gxqFuCtmoEzWN-0"
            target="_blank"
            rel="noreferrer"
          >
            Prototype link
          </a>
        </p>

        <p className="text-black text-[20px] font-thin leading-[1.9] mb-4">
          If you'd like more information, feel free to contact me at{" "}
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
        href="/projects/virtual-account"
        className=" flex justify-end items-center gap-2 w-full p-3 text-center text-base text-black font-light "
      >
        Previous
        <span className="rotate-[180deg]">
          <ArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default SectionOne;
