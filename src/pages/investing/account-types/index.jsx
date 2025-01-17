import React, { useEffect } from "react";
import JoinUs from "./components/JoinUs";
import PaymentMethods from "@/components/PaymentMethods";

const AccountTypes = () => {
  useEffect(() => {
    document.title = "Zipphy | Investing";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 md:px-8">
      Account Types 3*2 grid
      <PaymentMethods />
      <JoinUs />
    </div>
  );
};

export default AccountTypes;
