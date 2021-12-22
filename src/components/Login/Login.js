import React, { useState } from "react";
import { useNavigate } from "react-router";
import service from "../../services";
import { Link } from "react-router-dom";

export default function Login(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = "";

  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  async function handleSubmit(event) {
    if (email !== "" || password !== "") {
      let body = {
        email: email,
        password: password,
      };
      let logIn = await service.logUsers(body);
      if (logIn.data.token) {
        navigate("/actu");
        setPassword("");
        setEmail("");
        localStorage.setItem("jwt", logIn.data.token);
        props.setIsLoggedIn(true);
        console.log("message de logIn", logIn);
      } else {
        setError(logIn.data.message);
      }
    }
  }

  return (
    <div>
      <h3 style={{color:"red",textAlign:"center"}}>
        {" "}
        {error}
        {message}
      </h3>
      <div className="form">
        <input
          onChange={(e) => onChange(e, setEmail)}
          name="email"
          type="email"
          required
          placeholder="Email"
        ></input>
        <input
          onChange={(e) => onChange(e, setPassword)}
          name="password"
          type="password"
          placeholder="Mot de passe"
        ></input>
        {/* <a><Link to="/forgot-password">Mot de passe oublié ?</Link> </a> */}
        <button className="buttonCenter" type="submit" onClick={handleSubmit}>
          Se Connecter
        </button>
        <p className="forgot">
          <Link to="/forgot-password">Mot de passe oublié?</Link>
        </p>
      </div>
    </div>
  );
}
