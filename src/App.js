import React from "react";
import Describe from "./components/Describe";
import {
  describeData,
  mathData,
  recomandationData,
  rightplaceData,
  yourWayData,
} from "./utils/data";
import { interestedData } from "./utils/data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rightplace from "./components/rightplace";
import Math from "./components/math";
import Recomandation from "./components/recomandation";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Describe
                heading="Which describes you best?"
                subHeading="This will help us personalize your experience."
                data={describeData}
                path="interest"
              />
            }
            path="/"
          />
          <Route
            element={
              <Describe
                heading="Which are you most interested in?"
                subHeading="Choose just one. This will help us get you started (but won't limit your experience)."
                data={interestedData}
                path="rightplace"
              />
            }
            path="/interest"
          />
          <Route
            element={<Rightplace data={rightplaceData} path="math" />}
            path="/rightplace"
          />
          <Route
            element={
              <Math
                heading=" What is your math comfort level?"
                subHeading="choose the highest level you feel confident in -- you can always adjust later"
                data={mathData}
                path="yourway"
              />
            }
            path="/math"
          />
          <Route
            element={<Rightplace data={yourWayData} path="recomandation" />}
            path="/yourway"
          />
          <Route
            element={<Recomandation data={recomandationData} path="" />}
            path="/recomandation"
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
