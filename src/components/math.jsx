import Button from "./button";
import Navbar from "./Navbar";

const Math = ({ heading, subHeading, data, path }) => {
  return (
    <>
      <Navbar/>
      <div className="maths-parent">
        <div className="maths">
          <div className="maths-child">
            <h1>{heading}</h1>
            <p>{subHeading}</p>
          </div>
          <div className="maths-parent-box">
            {data.map((item, key) => (
              <div key={key} className="maths-box">
                <img src={item.img} alt="" />
                <p>{item.para1}</p>
                <p>{item.para2}</p>
              </div>
            ))}
          </div>
          <Button path={path} />
        </div>
      </div>
    </>
  );
};

export default Math;
