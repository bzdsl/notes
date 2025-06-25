/** @format */

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
const HomePage = () => {
  const { isRateLimited, setIsRateLimited } = useState(true);
  return (
    <div>
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;
