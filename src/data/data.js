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

export const benefits = [
  {
    title: "Lightning fast trading",
    description: "Trade at the speed of light with instant deposits and withdrawals empowering every move.",
  },
  {
    title: "Expert Support",
    description:
      "Our team of experts is here to guide you every step of the way, ensuring you make the most of your trading journey.",
  },
  {
    title: "Flexible Payment Options",
    description: "Take control with a variety of secure payment methods, giving you flexibility in every transaction.",
  },
  {
    title: "Transparent Pricing, No Surprises",
    description: "No surprises, only clarity—transparent pricing and zero hidden fees put you in the driver’s seat.",
  },
  {
    title: "Unmatched Security",
    description: "Security like never before, with top-notch encryption and fraud protection keeping your assets safe.",
  },
  {
    title: "Your Gateway to Markets",
    description: "Our gateway to limitless markets, from stocks to crypto, all in one seamless platform.",
  },
];

export const faqs = [
  {
    question: "What is Zipphy?",
    answer:
      "Zipphy is a cutting-edge trading platform that provides access to a wide range of financial markets, including stocks, forex, commodities, and crypto.",
  },
  {
    question: "How secure is Zipphy?",
    answer:
      "Security is our top priority. Zipphy uses advanced encryption and fraud protection to ensure your assets and personal information are safe.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, Zipphy is transparent about its pricing. There are no hidden fees—just clear, upfront costs.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "Zipphy supports a variety of payment methods, including credit/debit cards, bank transfers, and popular e-wallets.",
  },
  {
    question: "Can I trade on mobile?",
    answer: "Yes, Zipphy offers a fully responsive platform that works seamlessly on mobile and desktop devices.",
  },
];

export const accountData = [
  {
    type: "Classic",
    minimumDeposit: "$100",
    minimumWithdrawal: "$25",
    timeFrame: "1-3 Business Days",
  },
  {
    type: "Funded",
    minimumDeposit: "$1000",
    minimumWithdrawal: "$500",
    timeFrame: "1-2 Business Days",
  },
  {
    type: "Trader",
    minimumDeposit: "$5000",
    minimumWithdrawal: "$1000",
    timeFrame: "Within 24 Hours",
  },
  {
    type: "Expert",
    minimumDeposit: "$10,000",
    minimumWithdrawal: "$2000",
    timeFrame: "Within 24 Hours",
  },
  {
    type: "Exclusive",
    minimumDeposit: "$25,000",
    minimumWithdrawal: "$5000",
    timeFrame: "Within 12 Hours",
  },
  {
    type: "Premium",
    minimumDeposit: "$50,000",
    minimumWithdrawal: "$10,000",
    timeFrame: "Instant",
  },
];

export const platforms = [
  {
    name: "MetaTrader 5 Desktop",
    description:
      "Discover endless trading opportunities with MetaTrader 5 Desktop. Designed for serious traders, it provides real-time market access, robust charting tools, and algorithmic trading capabilities. Execute trades seamlessly while managing diverse financial instruments from a single platform. Perfect for traders looking to harness professional-grade tools for maximum precision.",
    features: [
      "Real-time market data",
      "Comprehensive charting tools",
      "Algorithmic trading support",
      "Access to trading robots and indicators",
    ],
    image: images.mt5web,
  },
  {
    name: "MetaTrader 5 Mobile",
    description:
      "Stay ahead of the market wherever you are with MetaTrader 5 Mobile. This platform empowers traders with advanced tools for analysis, real-time market updates, and secure trade execution, all from your smartphone. Enjoy flexibility and control over your portfolio, whether at home or on the move.",
    features: [
      "On-the-go trading",
      "Advanced charting tools",
      "Real-time notifications",
      "Available for Android & iOS",
    ],
    image: images.mt5mobile,
  },
  {
    name: "WebTrader",
    description:
      "Experience the convenience of trading without downloads or installations with our WebTrader. Access powerful tools, analyze market trends, and execute trades securely—all directly from your browser. WebTrader is perfect for traders who value simplicity and accessibility.",
    features: [
      "Browser-based trading",
      "No installations required",
      "Advanced analysis tools",
      "Secure execution capabilities",
    ],
    image: images.webtrader,
  },
];

export const promotionsData = [
  {
    id: 1,
    title: "DOUBLE DEPOSIT",
    subheading:
      "Supercharge your trading journey—double your investment instantly and unlock endless profit potential!",
    text: [
      "Ready to transform your trading game? With Zipphy Trading’s exclusive offer, unlock a thrilling 100% bonus on your first deposit! Dive in, double your power, and watch your trades soar.",
      "Unleash your trading potential with Double Deposit! It’s more than a boost—it’s your gateway to bigger trades, bolder strategies, and boundless opportunities. Start strong, trade smarter, and make every move count with twice the power from day one!",
      "Join us today and double your potential from the very first trade!",
    ],
    image: images.doubleDeposit,
    imageClass: "w-full",
  },
  {
    id: 2,
    title: "CRYPTO BONUS",
    subheading: "Kickstart your crypto journey with a bang—enjoy a 25% bonus on your first deposit!",
    text: [
      "Step into the digital revolution—your investment, now with extra power! Ignite your crypto adventure with a sizzling 25% bonus on your first deposit! Transform your digital dreams into reality as your investment gets an instant boost. Zipphy makes every trade count.",
      "The crypto revolution is here—zip, zap, claim your bonus, and lead the charge today.",
      "Don’t just join the future; own it today!",
    ],
    image: images.bonus,
    imageClass: "w-full",
  },
  {
    id: 3,
    title: "5 LOSS-FREE TRADES",
    subheading: "Trade like a pro with 5 loss-free trades—your risk-free ticket to success!",
    text: [
      "Step into the world of trading with zero fear of knowing there’s no risk to your journey! Your first 5 trades are on us. Explore the markets with confidence.",
      "Test strategies, seize opportunities, and trade smarter—all with no risk to your capital. Your safety net is here; take the leap, and let success follow.",
      "Your winning streak starts now! Join Zipphy today and unlock a world where your potential has no limits! Let’s transform every challenge into a victory and turn those losses into wins!",
    ],
    image: images.trades,
    imageClass: "w-full",
  },
  {
    id: 4,
    title: "PREPAID MASTERCARD",
    subheading: "Unlock endless benefits with our all-in-one Prepaid MasterCard—empower your wallet!",
    text: [
      "Introducing the exclusive Zipphy Prepaid MasterCard®—crafted just for you! As a valued Premium account holder, you’re invited to unlock a world of effortless global transactions, perfectly synchronized with your Vorbex account.",
      "Whether at home or abroad, your financial freedom knows no bounds. Experience the ultimate convenience, as the Zipphy MasterCard® delivers seamless integration and unparalleled access to your funds—anytime, anywhere.",
      "Say goodbye to limits and hello to exclusive perks that elevate your lifestyle.",
    ],
    image: images.card,
    imageClass: "w-3/4",
  },
];

export const features = [
  {
    title: "User-Friendly Interface",
    description:
      "Zipphy’s trading platform is designed for everyone—from beginners to professionals. Navigate effortlessly, execute trades smoothly, and access a comprehensive set of tools with ease.",
    icon: "heroicons:face-smile",
  },
  {
    title: "Advanced Charting Tools",
    description:
      "Gain an edge with advanced tools to analyze trends and make informed decisions. Access powerful indicators and charting options to stay ahead in the market.",
    icon: "heroicons:chart-bar",
  },
  {
    title: "Multiple Asset Classes",
    description:
      "Diversify your portfolio with access to various asset classes, including forex, stocks, commodities, and cryptocurrencies. Explore endless possibilities with Zipphy.",
    icon: "heroicons:currency-dollar",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Rest assured that Zipphy operates with full regulatory compliance, offering you a safe and secure trading environment.",
    icon: "heroicons:shield-check",
  },
  {
    title: "Customer Support",
    description:
      "Get 24/7 support from our dedicated team of experts who are always ready to assist with your trading needs.",
    icon: "heroicons:phone-arrow-down-left",
  },
  {
    title: "Secure and Reliable Infrastructure",
    description:
      "Experience a robust trading infrastructure designed for maximum security and reliability, ensuring uninterrupted trading.",
    icon: "heroicons:server",
  },
];

export const referSteps = [
  {
    number: 1,
    title: "Share Your Unique Link",
    description:
      "Copy and share your referral link with friends. You can find your unique link in your account dashboard.",
  },
  {
    number: 2,
    title: "Friend Signs Up",
    description:
      "Once your friend clicks on the link, they’ll be guided through the sign-up process and can start trading right away.",
  },
  {
    number: 3,
    title: "Earn Exclusive Rewards",
    description:
      "When your friend starts trading, both of you will earn rewards. Enjoy perks such as bonuses, discounts, or other exclusive benefits.",
  },
];
