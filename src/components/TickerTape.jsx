import React, { useEffect } from "react";

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { description: "Gold", proName: "CAPITALCOM:GOLD" },
        { description: "Silver", proName: "CAPITALCOM:SILVER" },
        { description: "GBP to USD", proName: "OANDA:GBPUSD" },
        { description: "Tesla Inc.", proName: "NASDAQ:TSLA" },
        { description: "Apple Inc.", proName: "NASDAQ:AAPL" },
        { description: "Nvidia Corporation", proName: "NASDAQ:NVDA" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });
    const container = document.getElementById("tradingview-widget");
    container.appendChild(script);
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget"></div>
    </div>
  );
};

export default TradingViewWidget;
