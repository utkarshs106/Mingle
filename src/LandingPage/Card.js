import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Mingle.jpg";

function Card() {
  var [loginOrSignup, setLoginOrSignup] = useState("Login");
  function LoginOrSignup() {
    if (loginOrSignup === "Login") {
      return (
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            Login
          </button>
          <button
            style={{ position: "relative", marginLeft: "10px" }}
            type="button"
            className="btn btn-secondary"
            onClick={doSignup}
          >
            SignUp
          </button>
        </form>
      );
    } else {
      return (
        //This is signup
        <>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name"
            />
            <label for="exampleFormControlTextarea1" class="form-label">
              Password
            </label>
            <input
              type="Password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your Password"
            />
            <input
              style={{ position: "relative", top: "5px" }}
              type="Password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Re enter Password"
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={doLogin}
              style={{ position: "relative", top: "10px" }}
            >
              Login
            </button>
            <button
              style={{ position: "relative", marginLeft: "10px", top: "10px" }}
              type="button"
              className="btn btn-secondary"
              onClick={doSignup}
            >
              SignUp
            </button>
          </div>
        </>
      );
    }
  }

  const navigate = useNavigate();

  function doLogin() {
    setLoginOrSignup("Login");
    navigate("/MainPage");
  }
  function doSignup() {
    console.log("Hii");
    setLoginOrSignup("Signup");
  }

  return (
    <div
      className="row"
      style={{
        position: "relative",
        justifyContent: "center",
        marginTop: "100px"
      }}
    >
      <img
        style={{ height: "400px", width: "350px" }}
        src={require("./Mingle.jpg")}
        alt="is there "
      />
      <div style={{ width: "300px" }}>
        <LoginOrSignup />
      </div>
    </div>
  );
}

export default Card;
