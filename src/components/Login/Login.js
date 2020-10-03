import React from "react";
import logo from "../../images/logo.png";
import googleLogo from "../../images/google.png";

const Login = () => {
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
            <span style={{ color: "#3F90FC" }}>Create an account</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
