import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  chromecast,
  disc02,
  file02,
  homeSmile,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap3,
  searchMd,
  sliders04,
  telegram,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Products",
    url: "#features",
  },
  {
    id: "1",
    title: "Globe",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Mission",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Try it",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice assistant for farmers",
    text: "Enable to AI chatbot to understand and respond to voice commands, making it easier for farmers to interact with the app hands-free.",
    date: "October 5, 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "2",
    title: "Personal customization",
    text: "Allow farmers to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "October 5, 2024",
    status: "done",
    imageUrl: roadmap3,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];



export const benefits = [
  {
    id: "0",
    title: "Insights",
    text: "Get valuable insights based on provided information by farmers",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Machine Learning Model",
    text: "AI powered application helping farmers make right decisions in agriculture",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "FarmGPT",
    text: "In future, we're going to make LLM to make personalized AI chatbot assistants for farmers",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "t.me/khushbakhtxs",
  },
];
