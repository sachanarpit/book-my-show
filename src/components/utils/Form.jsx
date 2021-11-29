import { Link } from "react-router-dom";

export const FormLogin = (
  handleSubmit,
  handleEmailChange,
  email,
  handlePasswordChange,
  password
) => {
  return (
    <form onSubmit={handleSubmit} action="/dashboard">
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
        <button className="btn btn-dark" type="submit">
          <Link to="/dashboard">Submit</Link>
        </button>
      </div>
    </form>
  );
};
