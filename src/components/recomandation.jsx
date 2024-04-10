import React from "react";
const Recomandation = ({ data }) => {
  return (
    <div className="circle-component">
      <div className="circle-parent">
        <div className="circle">
          <img src={data.img1} alt="" className="w-24" />
          <h3>{data.heading1}</h3>
        </div>
      </div>
      <div className="md:h-[80dvh]">
        <div className="learning">
          <div className="learning-child">
            <h3>{data.heading2}</h3>
            <p>{data.para}</p>
          </div>
          <div className="most-popular-parent">
            <div className="most-popular">
              <p>most popular</p>
            </div>
            <div className="box">
              <div className="box-child">
                <p>
                  <span>{data.subParaHighlighte1}</span>
                  {data.subPara}
                </p>
              </div>
              <div className="box-image">
                <img src={data.img2} alt="" />
              </div>
            </div>

            <div className="box">
              <div className="box-child">
                <p>
                  <span>{data.subParaHighlighte2}</span> {data.subPara}
                </p>
              </div>
              <div className="box-image">
                <img src={data.img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomandation;
