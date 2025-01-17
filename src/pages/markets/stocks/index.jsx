import React, { useEffect } from "react";

const Stocks = () => {
  useEffect(() => {
    document.title = "Zipphy | Markets";
  }, []);
  return <div>Stocks</div>;
};

export default Stocks;
