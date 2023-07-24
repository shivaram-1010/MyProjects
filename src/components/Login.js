import React, { useState } from "react";
import AmazonLogo from "../components-img/Amazon-Logo1.png";
import "../components-css/Login.css";
import { auth } from "../FireBase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const nagvigate = useNavigate();

  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          nagvigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const SignIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      nagvigate("/");
    });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" alt="" src={AmazonLogo} />
      </Link>

      <div className="login_container">
        <form>
          <h5>Email</h5>

          <input
            type="email"
            placeholder=" Email"
            value={email}
            onChange={(e) => setmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder=" Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button className="sign_in" onClick={SignIn}>
            Sign in
          </button>
        </form>
        <p>
          By signing in, you agree to Amazon's clone Conditions of Use and
          Privacy Notice.
        </p>
      </div>

      <div className="create_account">
        <h5>New to Amazon?</h5>
        <button className="createAccountBtn" onClick={Register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
