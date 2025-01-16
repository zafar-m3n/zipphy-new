import React, { useEffect } from "react";
import JoinUs from "./components/JoinUs";

const AccountTypes = () => {
  useEffect(() => {
    document.title = "Zipphy | Investing";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 space-y-12">
      Account Types 3*2 grid
      <JoinUs />
    </div>
  );
};

export default AccountTypes;
