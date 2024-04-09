import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/progressContest";

const Button = ({ path }) => {
  const { progress, setProgress } = useContext(ProgressContext);
  return (
    <Link
      to={"/" + path}
      onClick={() => setProgress(progress + 20)}
      className="mb-10"
    >
      <button type="submit" className="btn">
        Continue
      </button>
    </Link>
  );
};

export default Button;
