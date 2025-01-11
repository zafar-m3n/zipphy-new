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
