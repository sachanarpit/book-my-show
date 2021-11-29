import { useState } from "react";

export const Login = () => {
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
      .then((response) => console.log(response))
      .catch((error) => console.log("Form submit error", error));
  };
  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="type your email"
            onChange={handleEmailChange}
            value={email}
            className="form-control"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="type your password"
            onChange={handlePasswordChange}
            value={password}
            className="form-control"
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
