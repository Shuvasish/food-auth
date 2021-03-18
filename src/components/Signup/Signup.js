import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Signup.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { userContext } from "../../App";

if (firebase.app.length === 0) {
}
firebase.initializeApp(firebaseConfig);

function Signup(props) {
  const provider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useContext(userContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  //   console.log(user);
  //   google signin
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;

        const token = credential.accessToken;

        const { displayName, email, photoURL } = result.user;
        // console.log(displayName, email, photoURL);
        setUser({ displayName, email, photoURL });
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = error.credential;
        console.log(errorMessage);
        console.log(email);
      });
  };
  return (
    <div className="">
      <div className="login-container d-flex justify-content-center align-items-center">
        <div className="login-container-box ">
          <input type="text" placeholder="name" />
          <label>name</label>
          <br></br>
          <input type="email" placeholder="email" />
          <label>email</label>
          <br></br>
          <input type="password" placeholder="password" />
          <label>password</label>
          <br></br>
          <input type="submit" className="submit" value="Sign Up" />
          <div
            className="my-short mb-4"
            onClick={handleGoogleSignIn}
            style={{ cursor: "pointer" }}
          >
            <p className="text-center">Google</p>
          </div>
          <div className="my-short mb-4" style={{ cursor: "pointer" }}>
            <p className="text-center">Facebook</p>
          </div>
          <Link to="signup" className="my">
            <p className="text-white text-left">*already have an account</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
