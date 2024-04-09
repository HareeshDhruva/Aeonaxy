import "../App.css";
const Navbar = ({ progress }) => {
  return (
    <>
      <div className="my-10">
        <div class="navbar">
          <div className="bar" style={{ width: `${progress}%` }}>
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
