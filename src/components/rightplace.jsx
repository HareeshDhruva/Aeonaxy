import React from "react";
import Button from "./button";
import Navbar from "./Navbar";
import { useContext } from "react";
import { ProgressContext } from "../context/progressContest";

const Rightplace = ({ data, path }) => {
  const { progress } = useContext(ProgressContext);
  return (
    <>
      <Navbar progress={progress} />
      <div className="rightplace-parent-component">
        <div className="rightplace-component">
          <div className="flex justify-center">
            <img src={data.img} alt="" className="w-[50%]" />
          </div>
          <div className="rightplace-component-heading">
            <h1>{data.heading}</h1>
            <div className="rightplace-component-image">
              {data.rating === true && (
                <img src="star.jpg" alt="" className="w-40" />
              )}
              <p className="rightplace-component-para">{data.para}</p>
              {data.author !== null && (
                <p className="italic font-medium">{data.author}</p>
              )}
            </div>
          </div>
        </div>
        <Button path={path} />
      </div>
    </>
  );
};

export default Rightplace;
