import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Home = () => {
  const AuthstateNow = useSelector((state) => state.AuthReducer);
  console.log("stateNow:", AuthstateNow);
  return (
    <div>
      {AuthstateNow === false ? (
        <div>
          {" "}
          <h1>please login</h1>
          <Link to="/login">
            <button className="btn btn-danger">Login Now</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>Go to Dashboard to book ticket</h1>
          <Link to="/dashboard">
            <button className="btn btn-success">Dashboard</button>
          </Link>
        </div>
      )}
    </div>
  );
};
