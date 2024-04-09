import Button from "./button";
import Navbar from "./Navbar";
import "../styles.css";

const Describe = ({ heading, subHeading, data, path }) => {
  return (
    <>
      <Navbar />
      <div className="describe-heading-parent">
        <div className="describe-heading">
          <h2>{heading}</h2>
          <p>{subHeading}</p>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((items) => (
            <div className="describe-component">
              <div className="describe-sub-components">
                <img src={items.img} alt="" />
                <p>
                  {items.description}
                  {items.miniDescription && (
                    <span> {items.miniDescription}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button path={path} />
      </div>
    </>
  );
};

export default Describe;
