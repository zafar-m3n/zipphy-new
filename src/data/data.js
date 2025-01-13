import images from "@/assets";

export const navMenu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Investing",
    children: [
      { title: "Account Types", link: "/investing/account-types" },
      { title: "Deposits & Withdrawals", link: "/investing/deposits-withdrawals" },
      { title: "Platforms", link: "/investing/platforms" },
      { title: "Education", link: "/investing/education" },
    ],
  },
  {
    title: "Promotions",
    link: "/promotions",
  },
  {
    title: "Markets",
    children: [
      { title: "Stocks", link: "/markets/stocks" },
      { title: "Forex", link: "/markets/forex" },
      { title: "Commodities", link: "/markets/commodities" },
      { title: "Cryptocurrencies", link: "/markets/cryptocurrencies" },
      { title: "Indices", link: "/markets/indices" },
    ],
  },
  {
    title: "Partnerships",
    children: [
      { title: "Refer a Friend", link: "/partnerships/refer-a-friend" },
      { title: "Introducing Broker", link: "/partnerships/introducing-broker" },
    ],
  },
  {
    title: "Company",
    children: [
      { title: "About Us", link: "/company/about-us" },
      { title: "FAQ", link: "/company/faq" },
      { title: "Contact Us", link: "/company/contact-us" },
    ],
  },
];

export const heroContent = [
  {
    title: "Trade Smarter, Not Harder",
    description: "Join millions of traders leveraging cutting-edge tools for maximum returns.",
  },
  {
    title: "Analyze the Market with Precision",
    description: "Stay ahead with real-time data and expert insights at your fingertips.",
  },
  {
    title: "Your Journey to Financial Freedom",
    description: "Achieve your goals with a platform designed for traders of all levels.",
  },
];

export const stats = [
  {
    stat: "51966",
    title: "Total Clients",
    suffix: "+",
    separator: ",",
  },
  {
    stat: "72",
    title: "Client Profit Percentage",
    suffix: "%",
  },
  {
    stat: "150",
    title: "IB Brokers",
  },
  {
    stat: "1906",
    title: "Premium Account Holders",
    suffix: "+",
    separator: ",",
  },
];

export const stocks = [
  {
    id: 1,
    name: "MCD",
    logo: images.mcd,
    background: "bg-yellow-100",
    text: "text-yellow-400",
    position: "top[20%] left-0 md:left-[20%]",
    value: 250,
  },
  {
    id: 2,
    name: "IBM",
    logo: images.ibm,
    background: "bg-purple-100",
    text: "text-purple-400",
    position: "top-[70%] left-[5%] md:left-[25%]",
    value: 150,
  },
  {
    id: 3,
    name: "TSLA",
    logo: images.tsla,
    background: "bg-red-100",
    text: "text-red-400",
    position: "top-[10%] left-[20%] md:left-[40%]",
    value: 400,
  },

  {
    id: 4,
    name: "META",
    logo: images.meta,
    background: "bg-blue-100",
    text: "text-blue-400",
    position: "top-[60%] left-[25%] md:left-[35%]",
    value: 350,
  },
  {
    id: 5,
    name: "MSFT",
    logo: images.msft,
    background: "bg-green-100",
    text: "text-green-400",
    position: "top-[30%] left-[55%] md:left-[65%]",
    value: 250,
  },
  {
    id: 6,
    name: "AMZN",
    logo: images.amzn,
    background: "bg-slate-100",
    text: "text-black",
    position: "top-[65%] left-[68%] md:left-[58%]",
    value: 200,
  },
];

export const steps = [
  {
    title: "Open a Zipphy Account",
    description:
      "Begin your journey by signing up for a Zipphy account. Provide your name, email address, and phone number, and complete the verification process to access our cutting-edge online trading platform.",
    icon: "solar:user-id-linear",
  },
  {
    title: "Fund your account",
    description:
      "Easily and securely deposit funds into your account using a variety of payment options, including credit cards, bank transfers, eWallets, and more. All transactions are protected with top-tier security protocols.",
    icon: "tabler:credit-card",
  },
  {
    title: "Start Trading Today!",
    description:
      "Once your KYC form is approved, you’re all set to start trading. Gain access to over 15,000 financial products, including stocks, commodities, forex, and indices, with advanced trading tools at your fingertips.",
    icon: "flowbite:chart-outline",
  },
];
