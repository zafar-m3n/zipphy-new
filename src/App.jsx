import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/home";
import NotFound from "@/pages/NotFound";
import AccountTypes from "@/pages/investing/account-types/index";
import DepositsAndWithdrawals from "@/pages/investing/deposits-withdrawals/index";
import Platforms from "@/pages/investing/platforms/index";
import Education from "@/pages/investing/education/index";
import Promotions from "@/pages/promotions/index";
import Stocks from "@/pages/markets/stocks/index";
import Forex from "@/pages/markets/forex/index";
import Crypto from "@/pages/markets/crypto/index";
import Commodities from "@/pages/markets/commodities/index";
import Indices from "@/pages/markets/indices/index";
import ReferAFriend from "@/pages/partnerships/refer-a-friend/index";
import IntroducingBroker from "@/pages/partnerships/introducing-broker/index";
import AboutUs from "@/pages/company/about-us/index";
import FAQs from "@/pages/company/FAQs/index";
import ContactUs from "@/pages/company/contact-us/index";
import QuantumAI from "@/pages/quantum";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />

          {/* Investing Routes */}
          <Route path="/investing/account-types" element={<AccountTypes />} />
          <Route path="/investing/deposits-withdrawals" element={<DepositsAndWithdrawals />} />
          <Route path="/investing/platforms" element={<Platforms />} />
          <Route path="/investing/education" element={<Education />} />

          {/* Promotions Route */}
          <Route path="/promotions" element={<Promotions />} />

          {/* Quantum AI Route */}
          <Route path="/quantum" element={<QuantumAI />} />

          {/* Markets Routes */}
          <Route path="/markets/stocks" element={<Stocks />} />
          <Route path="/markets/forex" element={<Forex />} />
          <Route path="/markets/cryptocurrencies" element={<Crypto />} />
          <Route path="/markets/commodities" element={<Commodities />} />
          <Route path="/markets/indices" element={<Indices />} />

          {/* Partnership Routes */}
          <Route path="/partnerships/refer-a-friend" element={<ReferAFriend />} />
          <Route path="/partnerships/introducing-broker" element={<IntroducingBroker />} />

          {/* Company Routes */}
          <Route path="/company/about-us" element={<AboutUs />} />
          <Route path="/company/faq" element={<FAQs />} />
          <Route path="/company/contact-us" element={<ContactUs />} />

          {/* Not Found Routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
