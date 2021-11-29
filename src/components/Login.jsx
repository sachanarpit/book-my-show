import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { changeAuth } from "../redux/actions";
import { Link, Redirect } from "react-router-dom";
import { FormLogin } from "./utils/Form";
export const Login = () => {
  const AuthstateNow = useSelector((state) => state.AuthReducer);
  console.log("AuthstateNow:", AuthstateNow);
  const disp = useDispatch();

  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "https://reqres.in/api/login";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    fetch(url, requestOptions)
      .then((response) => disp(changeAuth(true)))
      .catch((error) => console.log("Form submit error", error));
  };
  return AuthstateNow === true ? (
    <div>
      <button className="btn btn-success">
        <Link to="/dashboard"> Go To dashboard</Link>
      </button>
    </div>
  ) : (
    <FormLogin
      handleSubmit={handleSubmit}
      handleEmailChange={handleEmailChange}
      email={email}
      handlePasswordChange={handlePasswordChange}
      password={password}
    />
  );
};
