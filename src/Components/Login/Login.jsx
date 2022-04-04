import React from "react";
import "../Login/Login.scss";

export default function Login() {
  return (
    <div className="loginBody">
      <div className="loginTitle">
        <h2>Login</h2>
        <div className="line"></div>

      </div>
      <form className="inputs">
        <label>Email</label>
        <input type={"emial"} className="emailinp" />
        <label>Password</label>

        <input type={"password"} className="passwoedinp" />
        <p>
          <a className="forgotpsw">Forgot Your Password?</a>
        </p>
        <div className="signin" aria-valuemax={"Sign IN"}>
          <input className="signinInp" type={"submit"} value="SIGN IN" />
          <a>CREATE ACCOUNT</a>
        </div>
      </form>
    </div>
  );
}
