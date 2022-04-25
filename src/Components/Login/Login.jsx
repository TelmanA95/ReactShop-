import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Login/Login.scss";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty"
  );
  const [formValid, setFormValid] = useState(false);

  const blureHandle = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect Email ");
    } else {
      setEmailError("");
    }
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Password must be longer than 3 and less than 8");
      if (!e.target.value) {
        setPasswordError("Password cannot be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);
  return (
    <div className="loginBody">
      <div className="loginTitle">
        <h2>Login</h2>
        <div className="line"></div>
      </div>
      <form className="inputs">
        {emailDirty && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <label>Email</label>
        <input
          onChange={(e) => emailHandler(e)}
          value={email}
          onBlur={(e) => blureHandle(e)}
          name="email"
          type={"emial"}
          className="emailinp"
        />
        {passwordDirty && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}

        <label>Password</label>
        <input
          onChange={(e) => passwordHandle(e)}
          value={password}
          onBlur={(e) => blureHandle(e)}
          name="password"
          type={"password"}
          className="passwoedinp"
        />
        <p>
          <NavLink to={"/forgotpsw"} className="forgotpsw">
            Forgot Your Password?
          </NavLink>
        </p>
        <div className="signin" aria-valuemax={"Sign IN"}>
          <input
            disabled={!formValid}
            className="signinInp"
            type={"submit"}
            value="SIGN IN"
          />
          <NavLink className={"create"} to={"/create"}>
            CREATE ACCOUNT
          </NavLink>
        </div>
      </form>
    </div>
  );
}
