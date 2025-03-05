import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../store/auth/thunks";




export const Login = () => {
  const { counter } = useSelector(s => s.auth)
  const dispatch = useDispatch()

  const handleLogin = (code,password) => {
    try {
      console.log("klk")
      dispatch(loginUser(code,password))
      console.log("klk")
    } catch (error) {
      console.log(error)

    }

  }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }
    setError("");
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "10px" }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          <a href="#" className="text-decoration-none">Forgot Password?</a>
        </p>
        <button
          onClick={() => handleLogin(47199,"550105321")}
        >
          klk
        </button>
      </div>
    </div>
  );
};

export default Login;
