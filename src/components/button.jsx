import { Link } from "react-router-dom";

const Button = ({ path }) => {
  return (
    <Link
      to={"/" + path}
      className="mb-10"
    >
      <button type="submit" className="btn">
        Continue
      </button>
    </Link>
  );
};

export default Button;
