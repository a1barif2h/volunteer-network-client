import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import logo from "../../images/logo.png";
import googleLogo from "../../images/google.png";
import { localContext } from "../../App";
import { firebaseConfig } from "./firebase.config";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);
const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [logedInUser, setLogedInUser] = useContext(localContext);
  const handelGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLogedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#F8FAFC",
        height: "100vh",
      }}
    >
      <img className="mt-5" style={{ width: "200px" }} src={logo} alt="" />
      <div
        style={{
          border: "2px solid #ABABAB",
          width: "570px",
          margin: "50px auto",
          height: "450px",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
        }}
      >
        <div style={{ width: "450px", height: "148px", margin: "170px auto" }}>
          <h3 className="mb-3">Login with</h3>
          <button
            onClick={handelGoogleLogin}
            style={{
              width: "100%",
              outline: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              padding: "10px",
              border: "1px solid #ABABAB",
              background: "transparent",
              position: "relative",
            }}
          >
            <img
              style={{
                width: "35px",
                position: "absolute",
                left: "5px",
                top: "5px",
              }}
              src={googleLogo}
              alt=""
            />
            Continue with Google
          </button>
          <p className="mt-3 font-weight-bold">
            Don’t have an account?{" "}
            <span style={{ color: "#3F90FC", cursor: "pointer" }}>
              Create an account
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
