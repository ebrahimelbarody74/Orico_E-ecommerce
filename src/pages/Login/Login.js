import React, { useState } from "react";
import "./Login.scss";
import Navbar from "../../components/Navbar/Navbar";
import img from "../../assets/images/register/karsten-winegeart-4bC1Ef88OYI-unsplash.jpg";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../rtk/slices/authSlice";
import swal from "sweetalert";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://server-data-shzb.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });
      const data = await response.json();
      console.log(data);
      if (data.status === "true") {
        dispatch(login(data));
        navigate("/");
      } else {
        return swal({
          title: data,
          icon: "warning",
          dangerMode: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="row">
          <div className="left">
            <form onSubmit={handelSubmit}>
              {error && <span>{error}</span>}
              <label for="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/register">Dont have an account?</Link>
              <button>Sign In</button>
            </form>
          </div>
          <div className="right">
            <img src={img} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
