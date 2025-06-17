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
    title: "Quantum AI",
    link: "/quantum",
    label: "New",
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
    stat: "139505",
    title: "Total Clients",
    suffix: "+",
    separator: ",",
  },
  {
    stat: "81",
    title: "Client Profit Percentage",
    suffix: "%",
  },
  {
    stat: "250",
    title: "IB Brokers",
  },
  {
    stat: "20313",
    title: "Premium Account Holders",
    suffix: "+",
    separator: ",",
  },
];

export const banks = [
  { name: "RAK Bank", logo: images.rak },
  { name: "Bank of America", logo: images.boa },
  { name: "HSBC", logo: images.hsbc },
  { name: "Citibank", logo: images.citibank },
  { name: "Wells Fargo", logo: images.wfargo },
  { name: "Abu Dhabi Commercial Bank", logo: images.adbc },
  { name: "Goldman Sachs", logo: images.gsachs },
  { name: "First Abu Dhabi Bank", logo: images.fab },
  { name: "Barclays", logo: images.barclays },
  { name: "JP Morgan Chase", logo: images.jpmc },
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
    question: "How do I sign up?",
    answer:
      "To sign up, navigate to the registration page, complete the form, and click 'Open Account.' Check your inbox for a confirmation email titled 'Confirm Your Email Address.' Click the link, and you'll be redirected to our site. Provide the required information and continue. Finally, set up your trading account, and you're ready to begin trading!",
  },
  {
    question: "What are the trading hours?",
    answer:
      "Trading is available 24 hours a day, starting from 00:00 on Monday and closing at 23:59 on Friday. The markets remain active throughout this period.",
  },
  {
    question: "What type of account should I choose?",
    answer:
      "The ideal account type depends on your chosen trading platform and preferred instruments. Explore our account comparison chart to make an informed decision. You can always open another account if your needs change.",
  },
  {
    question: "How do I deposit funds into my trading account?",
    answer:
      "You can deposit funds through the client portal. Simply click on the 'Deposit Funds' tab and choose your preferred funding method. Processing times vary: standard methods may take up to 24 hours, while bank wire transfers may take up to 3 business days, depending on the bank.",
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
    timeFrame: "Within 96 hours",
  },
  {
    type: "Islamic",
    minimumDeposit: "$200",
    minimumWithdrawal: "$50",
    timeFrame: "Within 96 hours",
  },
  {
    type: "Funded",
    minimumDeposit: "$1000",
    minimumWithdrawal: "$500",
    timeFrame: "Within 72 hours",
  },
  {
    type: "Trader",
    minimumDeposit: "$5000",
    minimumWithdrawal: "$1000",
    timeFrame: "Within 48 Hours",
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
      "Introducing the exclusive Zipphy Prepaid MasterCard®—crafted just for you! As a valued Premium account holder, you’re invited to unlock a world of effortless global transactions, perfectly synchronized with your Zipphy account.",
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

export const companyInfo = [
  {
    title: "About Us",
    text: "Select a trusted broker—one that stands by you. At Zipphy, we are committed to putting our clients first, providing reliable services, and offering exceptional support. Whether you’re a seasoned trader or new to trading, we prioritize your success and aim to provide the resources and tools you need to thrive.",
    image: images.about,
    reverse: false,
  },
  {
    title: "Our Mission",
    text: "At Zipphy, we aim to empower traders by delivering cutting-edge trading technology, innovative tools, and exceptional support. Our mission is to provide a robust platform where traders can thrive with confidence and achieve their financial aspirations.",
    image: images.mission,
    reverse: true,
  },
  {
    title: "Our Vision",
    text: "Our vision is to lead the industry with innovation and reliability, offering a platform that empowers traders to excel in their financial journeys. We strive to create a seamless trading experience, helping our clients achieve their goals and shape a prosperous future.",
    image: images.vision,
    reverse: false,
  },
  {
    title: "Empowerment",
    text: "At Zipphy, every trade counts! We’re dedicated to empowering our clients with tailored solutions and personalized support to help them unlock their trading potential. Discover trading as it’s meant to be: dependable, transparent, and accessible.",
    image: images.empowerment,
    reverse: true,
  },
];

export const paymentMethods = [
  {
    name: "Bank Transfer",
    image: images.bankTransfer,
  },
  {
    name: "Google Pay",
    image: images.gpay,
  },
  {
    name: "Mastercard",
    image: images.mastercard,
  },
  {
    name: "UPI",
    image: images.upi,
  },
  {
    name: "Visa",
    image: images.visa,
  },
];

export const educations = [
  {
    title: "How To Trade Stocks? ",
    content: [
      "Investing in stocks entails purchasing stock in a publicly traded firm. The firm’s stock is made up of those little shares, and by investing in it, you’re betting that the company will develop and perform well over time.",
      "Your shares may become more valuable as a result of this, and other investors may be ready to purchase them from you at a higher price than you paid for them. That means if you chose to sell them, you may make a profit.",
    ],
    subtitle: "Here are the important concepts to master before you get started:",
    features: [
      "Learn how to evaluate stocks using fundamental & technical measurements and ideas.",
      "Diversify your investment portfolio.",
      "Invest exclusively in companies that you are familiar with. Until you've gotten the hang of investing, stay away from high-volatility equities.",
      "Avoid penny stocks at all costs.",
    ],
    conclusion: [
      "It’s a good idea to understand the notion of diversity, which means that your portfolio should include a number of various sorts of firms. However, excessive variety should be avoided. Stick to industries you’re familiar with, and if you discover you’re excellent at (or comfortable with) appraising a specific sort of stock, there’s nothing wrong with that area accounting for a sizable portion of your portfolio.",
      "If you wish to invest in individual stocks, you need learn how to analyze them using some of the most fundamental methods. A good place to start is with our guide to value investing. We can assist you in locating stocks with good values. Our guide to growth investing is a wonderful place to start if you want to add some exciting long-term growth potential to your portfolio.",
    ],
    image: images.stocks,
  },
  {
    title: "How To Trade Forex? ",
    content: [
      "The foreign exchange market, generally referred to as “forex” or “FX,” is the world’s largest financial market. The foreign exchange market (FX market) is a worldwide, decentralized market where the world’s currencies are traded. Because exchange rates fluctuate by the second, the market is always in motion.",
      "The foreign currency market, with its $6.6 TRILLION per day trading activity, seems extremely massive when compared to the “scanty” $23.4 billion per day volume of the New York Stock Exchange (NYSE). Don’t get excited early, we will take you through the proper guide about how trade this market. Let’s begin with understanding the pip” value.",
    ],
    subtitle: "Pip Value:",
    features: [
      "A “pip” is a unit of measurement used to describe the difference in value between two currencies. You’ve undoubtedly heard the phrases “pips,” “points,” “pipettes,” and “lots” used, and now we’ll explain what they mean and how their values are computed.",
      "A 0.0001 USD increase in value equals ONE PIP if EUR/USD increases from 1.1050 to 1.1051. The last decimal point of a pricing quote is commonly referred to as a pip.",
      "There are rare outliers, such as Japanese yen pairs, which go to four decimal points (they go out to two decimal places). For example, it is 0.0001 for EUR/USD and 0.01 for USD/JPY.",
    ],
    conclusion: [],
    image: images.forex,
  },
  {
    title: "How To Trade Cryptocurrencies? ",
    content: [
      "Cryptocurrencies let you to exchange them for goods and services in the same way that traditional money allows you to, or trade them for profit. Digital currencies, on the other hand, are decentralized, and no single body controls their issue, unlike traditional money, which is issued and managed by governments.",
      "The crypto market is a large market with many distinct trading systems. As a result, it would be ideal if you could comprehend the industry from your perspective. Crypto exchanges, cryptocurrencies, and trading platforms should all be included in your investigation. TradeProNet is here to provide you the best experience of investing with vast range of trading tools and techniques to help you avoid loses. It’s a good idea to weigh the benefits and drawbacks of investing in such a broad market. You can start trading if you’re satisfied with the information you’ve acquired.",
    ],
    subtitle: "",
    features: [
      "In recent years, bitcoin trading has become a worldwide phenomenon. Almost everyone trades, and its human nature to want to follow in the footsteps of others. Day trading is a type of cryptocurrency trading that resembles the stock market in traditional finance.",
      "If you decide to engage in day trading, keep an eye out for FOMO (fear of missing out), which is the fastest way to lose money. When you’re under duress, you should avoid trading.",
      "Learn different technical techniques to read the chart and to identify trends. Acquiring knowledge of supply and demand would help you sharpen your strategy.",
    ],
    conclusion: [
      "In the present market, there are over 18,000 cryptocurrencies in circulation. Choose a crypto currency based on its performance and market longevity parameters. You want to trade a currency that will provide you with respectable long-term profits. Avoid trading initial coin offers (ICOs) as a newbie since you don’t know their success rate or legitimacy. TradeProNet is believed to be the best platform to enhance your experience of investing in cryptocurrencies.",
      "“Don’t put all your eggs in one basket,” as the expression goes, and this concept applies to both digital assets and equities. Investing in digital assets has the potential to be profitable, but it also has the potential to be risky. Diversifying your holdings among numerous cryptocurrencies allows you to limit your losses if the price of one cryptocurrency falls.",
    ],
    image: images.cryptocurrencies,
  },
  {
    title: "How To Trade Indices? ",
    content: [
      "Investors use index trading to acquire exposure to financial markets without having to study and invest in individual firm equities. Trading stock market indices is a risk-reduction strategy for stock traders. You trade an index, or a collection of shares, rather than buying and selling individual firm shares.",
      "Many individual investors, especially those saving for retirement, like to trade indexes in their investment accounts.",
      "Investors can gain exposure to a variety of firms by trading indexes. While the stock values of certain companies decline over time, the stock prices of others rise. Diversification helps to balance out volatility extremes.",
    ],
    subtitle: "",
    features: [
      "Each trading session, index values vary, but they do not lose or gain significant amounts unless there is a substantial shift, such as a market crash, geopolitical incident, or natural disaster.",
      "Indices are safer to invest in than individual equities. You may lose money if you invest in a company shares and the firm goes bankrupt. However, if a firm in an index goes bankrupt, the next largest company outside the index can take its position.",
      "Index investing, on the other hand, reduces the amount of money you may make from a high-growth firm. Individual growth companies can outperform an index by a big margin, but they come with a larger risk.",
      "The top five indices by volume are the NASDAQ100, S&P 500, Hang Seng, FTSE 100, and DIJA. Trading indexes requires deep understanding of market conditions, although it lowers your risk because of the broader span of stock companies but understanding the key fundamentals is essential for profitable index trading.",
    ],
    conclusion: [],
    image: images.indices,
  },
  {
    title: "How To Trade Commodities? ",
    content: [
      "Raw resources such as corn, flour, oil, and metals are examples of commodity products. The purchasing and selling of these basic resources are known as commodities trading. It occasionally entails the physical exchange of items. However, futures contracts, in which you commit to purchase or sell a commodity for a specific price at a specific date, are increasingly common.",
      "Commodities may help diversify your portfolio while also acting as an inflation buffer. Commodities, on the other hand, are extremely volatile. Commodity trading is challenging because unpredictable factors such as weather and political unrest can have a significant influence on pricing.Traders of commodities make bets on the direction in which the price of the commodity will change. You purchase futures or go long if you believe the price of a commodity will rise. You sell futures or go short if you believe the price will fall.",
    ],
    subtitle: "",
    features: [
      "Buying shares of the firms that generate commodities is another option to invest in commodities. You may invest in metal stocks, energy companies, or meat stocks, for example.",
      "The value of a commodity-producing firm does not always grow or decline in tandem with the value of the commodity it produces. Sure, when crude oil prices increase, an oil production business benefits, and when they fall, it suffers. But the amount of oil it has in its reserves and whether it has profitable supply contracts with high-demand buyers are even more crucial.",
      "Commodity trading is a high-reward, high-risk venture. It might be a good way to protect your assets from a bad market or inflation.",
      "However, you should only consider it if you have a thorough grasp of the commodities market’s supply and demand dynamics. This entails understanding previous pricing trends as well as current events. If you’re just getting started, minimize your utilization of margin to lessen your risk.",
    ],
    conclusion: [],
    image: images.commodities,
  },
  {
    title: "How To Trade CFDs? ",
    content: [
      "CFDs, or Contracts for Difference, are a type of financial derivative that allows you to speculate on the price movements of various assets without owning the underlying asset. CFDs are popular among traders because they offer the opportunity to profit from both rising and falling markets.",
      "CFD trading involves entering into a contract with a broker to exchange the difference in the price of an asset from the time the contract is opened to the time it is closed. This type of trading can be applied to a wide range of markets, including stocks, indices, forex, commodities, and cryptocurrencies.",
    ],
    subtitle: "Important concepts to understand before trading CFDs:",
    features: [
      "Leverage: CFDs allow you to trade with leverage, meaning you can open larger positions with a smaller amount of capital. However, leverage amplifies both potential profits and losses.",
      "Margin: To trade CFDs, you need to maintain a margin, which is a percentage of the trade’s total value. If your account equity drops below the required margin, you may face a margin call.",
      "Spread: The spread is the difference between the buy and sell price of a CFD. It represents the cost of entering a trade and affects your profitability.",
      "Stop-Loss Orders: Managing risk is crucial in CFD trading. Use stop-loss orders to automatically close a position if the market moves against you beyond a certain point.",
    ],
    conclusion: [
      "CFD trading is a versatile and potentially profitable trading method, but it comes with significant risks due to leverage. It’s essential to have a solid understanding of the market, develop a trading plan, and stick to risk management strategies.",
      "If you’re new to CFDs, start with a demo account to practice trading strategies without risking real money. Learn how to read charts, analyze trends, and use tools like stop-loss and take-profit orders effectively.",
    ],
    image: images.cfds,
  },
];

export const accounts = [
  {
    name: "Classic",
    price: "$100",
    type: "manual",
    features: [
      "Daily Analysis",
      "Leverage 1:100",
      "Events and trades",
      "Spreads – Fixed",
      "Conditional Stock Trading",
      "Upto 96 hours withdrawal",
      "24/5 Customer Support",
    ],
    cta: "Register Now!",
  },
  {
    name: "Islamic",
    price: "$200",
    type: "manual",
    features: [
      "No Swap Charges",
      "Shariah-Compliant Trading",
      "Daily Analysis",
      "Leverage 1:100",
      "Events and Trades",
      "Spreads – Fixed",
      "Conditional Stock Trading",
      "Conditional Commodities Trading",
      "Upto 96 hours withdrawal",
      "24/5 Customer Support",
    ],
    cta: "Register Now!",
  },
  {
    name: "Funded",
    price: "$1000",
    type: "manual",
    features: [
      "$1000 Will be funded to your account",
      "Daily Analysis",
      "Leverage 1:150",
      "Events and trades",
      "Spreads – Fixed",
      "Conditional Stock Trading",
      "Conditional Commodities Trading",
      "Upto 72 hours withdrawal",
      "24/5 Customer Support",
    ],
    cta: "Register Now!",
  },
  {
    name: "Trader",
    price: "$5000",
    type: "manual",
    features: [
      "Daily Analysis",
      "Leverage 1:250",
      "Events and trades",
      "Spreads – Variable",
      "Stock Trading",
      "Commodities Trading",
      "Upto 48 hours withdrawal",
      "24/7 Customer Support",
    ],
    cta: "Register Now!",
  },
  {
    name: "Expert",
    price: "$10,000",
    type: "manual",
    features: [
      "Cashback Guaranteed",
      "Leverage 1:300",
      "Events and trades",
      "Spreads – Variable",
      "Stock Trading",
      "Commodities Trading",
      "Premium Analysis",
      "24/7 Support",
      "Upto 24 hours withdrawal",
      "Trading Central",
    ],
    cta: "Register Now!",
  },
  {
    name: "Exclusive",
    price: "$25,000",
    type: "manual",
    features: [
      "Cashback Guaranteed",
      "Leverage 1:500",
      "Events and trades",
      "Spreads – Variable",
      "ROI Plan",
      "Stock Trading Priority Basis",
      "Crypto Trading",
      "Premium Analysis",
      "Upto 12 hours Withdrawal",
      "Premium Support",
      "Trading Central",
    ],
    cta: "Register Now!",
  },
  {
    name: "Premium",
    price: "$50,000",
    type: "manual",
    features: [
      "Cashback Guaranteed",
      "Leverage 1:1000",
      "Events and trades",
      "Spreads – Variable",
      "Stock Trading Priority Basis",
      "Crypto Trading",
      "Premium Analysis",
      "Prompt Withdrawals",
      "Premium Support",
      "Trading Central",
      "Max. No. of Simultaneous Open Deals",
      "Increased Asset Profit",
      "ROI Plan",
      "Dedicated Relationship Manager",
    ],
    cta: "Register Now!",
  },
];

export const botAccounts = [
  {
    name: "Basic",
    price: "$300",
    type: "bot",
    features: [
      "Access to AI-powered automated trading with basic strategies",
      "Trading leverage: 1:50",
      "Daily trade signals (Limited)",
      "Max open trades: 20",
      "Minimum withdrawal: $100",
      "Standard customer support",
    ],
    cta: "Get started",
  },
  {
    name: "Advanced",
    price: "$1000",
    type: "bot",
    features: [
      "AI trading with customizable risk settings",
      "Trading leverage: 1:100",
      "Daily trade signals (Advanced)",
      "Max open trades: 50",
      "Minimum withdrawal: $200",
      "Priority customer support",
      "Cashback rewards (1% per month on trading volume)",
    ],
    cta: "Get started",
  },
  {
    name: "Pro",
    price: "$5000",
    type: "bot",
    features: [
      "AI trading with smart trend analysis & real-time adjustments",
      "Trading leverage: 1:200",
      "Unlimited trade signals",
      "Max open trades: 60",
      "Minimum withdrawal: $500",
      "VIP customer support (24/7)",
      "Cashback rewards (3% per month on trading volume)",
      "Free risk management consultation",
    ],
    cta: "Get started",
  },
  {
    name: "Expert",
    price: "$15,000",
    type: "bot",
    features: [
      "AI trading with high-frequency trading capabilities",
      "Trading leverage: 1:500",
      "Unlimited trade signals & AI market predictions",
      "Max open trades: 80",
      "Minimum withdrawal: $1,000",
      "Personal Account Manager",
      "Cashback rewards (5% per month on trading volume)",
      "Dedicated risk management & strategy consultation",
      "Priority access to new AI features & market analysis",
    ],
    cta: "Get started",
  },
  {
    name: "VIP Elite",
    price: "$50,000",
    type: "bot",
    features: [
      "AI trading with ultra-fast execution & deep market analysis",
      "Trading leverage: 1:1000",
      "VIP access to AI trading models",
      "Unlimited trade signals & predictive analytics",
      "Max open trades: Unlimited",
      "Minimum withdrawal: $5,000",
      "Dedicated Senior Account Manager & Financial Advisor",
      "Cashback rewards (7% per month on trading volume)",
      "Private one-on-one trading mentorship",
      "Exclusive market insights & AI trading updates",
      "Priority withdrawal processing (Instant transfers)",
    ],
    cta: "Get started",
  },
];

export const awards = [
  {
    year: 2023,
    title: "Best multi-asset platform",
    event: "Forex Expo Dubai",
  },
  {
    year: 2024,
    title: "Best affiliate program",
    event: "Fazzaco Business Awards",
  },
  {
    year: 2024,
    title: "Best fintech broker",
    event: "Wiki Finance Expo",
  },
  {
    year: 2022,
    title: "Most Innovative broker",
    event: "Forex Traders Summit",
  },
  {
    year: 2023,
    title: "Best FX trading platform",
    event: "Forex Expo Dubai",
  },
];

export const tradingBots = [
  {
    name: "BotLite 500",
    level: "Basic",
    price: "500",
    supportedMarkets: ["Forex"],
    duration: "15 Minutes",
    specifications: ["High-frequency scalping", "Low drawdown", "Safe risk settings", "Trend-following"],
    riskManagement: "Stop-loss Alerts Only",
    profitOptimization: "Standard AI Signals",
    cashbackBonus: "10% Bonus",
    roi: "15% Weekly",
  },
  {
    name: "SwiftAI 1000",
    level: "Moderate",
    price: "1,000",
    supportedMarkets: ["Forex", "Commodities"],
    duration: "20 Minutes",
    specifications: ["Multi-strategy approach", "High adaptability", "Trend-following", "Countertrend"],
    riskManagement: "Trailing Stop Included",
    profitOptimization: "Real-time Market Scans",
    cashbackBonus: "20% Bonus",
    roi: "20% Weekly",
  },
  {
    name: "ProfitX 2000",
    level: "Advanced",
    price: "2,000",
    supportedMarkets: ["Forex", "Commodities", "Crypto"],
    duration: "25 Minutes",
    specifications: ["Auto-adaptive trading", "Customizable risk settings", "Trend-following", "Scalping"],
    riskManagement: "Risk Matrix Enabled",
    profitOptimization: "AI-Backed Entry/Exit",
    cashbackBonus: "30% Bonus",
    roi: "20% Weekly",
  },
  {
    name: "AlphaBot 3000",
    level: "Pro Level",
    price: "3,000",
    supportedMarkets: ["Stocks", "Global Indices"],
    duration: "1 Hour",
    specifications: ["Automated trend strategy", "Counter-trend strategy", "Trend-following", "Scalping"],
    riskManagement: "Auto-Hedging Enabled",
    profitOptimization: "Deep Learning Analysis",
    cashbackBonus: "40% Bonus",
    roi: "25% Weekly",
  },
  {
    name: "QuantumAI 5000",
    level: "Premium",
    price: "5,000",
    supportedMarkets: ["All Major Markets"],
    duration: "5 Hours",
    specifications: ["High-frequency scalping", "Low drawdown", "Scalping", "Advanced traders"],
    riskManagement: "Adaptive Risk Controls",
    profitOptimization: "Predictive Analytics",
    cashbackBonus: "60% Bonus + Signal Upgrade",
    roi: "30% Weekly",
  },
  {
    name: "ZenithPro 7500",
    level: "Elite AI Suite",
    price: "7,500",
    supportedMarkets: ["All Markets", "Custom Options"],
    duration: "10 Hours",
    specifications: [
      "Low-risk",
      "Steady profit",
      "Adjustable settings",
      "Scalping",
      "Trend-following",
      "Low-risk traders",
    ],
    riskManagement: "Full Portfolio Automation",
    profitOptimization: "Self-Learning Algorithms",
    cashbackBonus: "100% Bonus + VIP Access",
    roi: "35% Weekly",
  },
];

export const reviews = [
  {
    name: "Arjun Mehta",
    profile_picture: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4.5,
    review:
      "Zipphy is a reliable and user-friendly trading platform, perfect for both beginners and experienced traders. It offers low spreads, fast execution, and a variety of tools to enhance your trading experience. The customer support is responsive and helpful, making it easy to get assistance whenever needed.",
  },
  {
    name: "Fatima Al-Sayed",
    profile_picture: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    review:
      "Zipphy is the best platform I have invested with. The user interface simple and clear and there are no any transaction fees. To top this great experience, my account manager is excellent very knowledgeable and always proactive, Five stars to both the platform and my Account Manager!",
  },
  {
    name: "Ravi Iyer",
    profile_picture: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    review:
      "My Account Manager was a good listener to my needs and guided me through the process with clear instructions and information. The good thing I loved about this platform is instant deposits and withdrawals within seconds",
  },
  {
    name: "Amina Khoury",
    profile_picture: "https://randomuser.me/api/portraits/women/38.jpg",
    rating: 4.9,
    review:
      "Good platform and easy to use. I found the analysis data very helpful in making an informative decision. My Technical Adviser professionalism was clear throughout the year, and his advice is very helpful and an eye-opener.",
  },
  {
    name: "Imran Siddiqui",
    profile_picture: "https://randomuser.me/api/portraits/men/18.jpg",
    rating: 4.8,
    review: "This broker’s algorithms are top-notch. I’ve seen consistent performance since day one.",
  },
  {
    name: "Sneha Kapoor",
    profile_picture: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review: "Great returns with minimal effort. Setup was easy and the dashboard is clean.",
  },
  {
    name: "Emily Thompson",
    profile_picture: "https://randomuser.me/api/portraits/women/15.jpg",
    rating: 4.7,
    review:
      "I have been using Zipphy for the last 3 years and I haven’t had face any issues, it looks as it works as intended! the manager of my account was very quick to respond to a query whenever I needed.",
  },
];
