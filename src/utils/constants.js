import Handshake from "../../public/handshake.svg";
import Emoji from "../../public/emoji.svg";
import Chat from "../../public/chat.svg";
import Stack from "../../public/stack.svg";
import Toolbox from "../../public/toolbox.svg";

export const PAYMENT_TYPES_STICKY_MODES = {
  PRE_VIEW: "PRE_VIEW",
  IN_VIEW: "IN_VIEW",
  POST_VIEW: "POST_VIEW",
};

export const TABS = [
  {
    title: "Customer",
    content: <h1 className="text-xl text-white">Customer CONTENT</h1>,
  },
  {
    title: "Vendors",
    content: <h1 className="text-xl text-white">Vendors CONTENT</h1>,
  },
];

export const CUSTOMER_DATA = [
  {
    icon: <Handshake />,
    title: "Save money and time",
    body: "Not comfortable with your total spending? Negotiate with the vendor so it’s a win for everyone. Take advantage of our subscription models  to get the most benefits. ",
    image: "bg-iphone_14_one",
  },
  {
    icon: <Emoji />,
    title: "Eliminate Fear and Frustration",
    body: "Establish trust in vendors by reading reviews from past clients and paying it forward by giving review on completion to ensure quality lives on.",
    image: "bg-iphone_14_two",
  },
  {
    icon: <Chat />,
    title: "Stay in loop ",
    body: "Track your appointments and orders in real time to ensure work is being done. ",
    image: "bg-iphone_14_three",
  },
];
export const VENDOR_DATA = [
  {
    icon: <Stack />,
    title: "Streamlined management system",
    body: "Keep your books in order digitally with the dashboard, that enables you to see your progress at a glance",
    image: "bg-iphone_14_vendor_one",
  },
  {
    icon: <Toolbox />,
    title: "Customisable toolkit",
    body: "Show off your business and it’s perks with your toolkit and save productivity workhours.",
    image: "bg-iphone_14_vendor_two",
  },
  {
    icon: <Chat />,
    title: "Transparency",
    body: "An easy way to keep your customers in the loop of things so their trust in your brand grows",
    image: "bg-iphone_14_vendor_three",
  },
];

export const FAQS = [
  {
    question: "How long will it take before I get response to my bid",
    answer:
      "Yes, on Cleand you can easily find vendors in your locale using the search option. You can also find vendors via availability and price  ",
  },
  {
    question: "Can I find vendors in my locale?",
    answer:
      "Yes, on Cleand you can easily find vendors in your locale using the search option. You can also find vendors via availability and price  ",
  },
  {
    question: "Is it affordable?",
    answer:
      "Yes, on Cleand you can easily find vendors in your locale using the search option. You can also find vendors via availability and price  ",
  },
  {
    question: "Can I use a subscription model instead?",
    answer:
      "Yes, on Cleand you can easily find vendors in your locale using the search option. You can also find vendors via availability and price  ",
  },
];
