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

  async function handleSubmit(e) {
    if (email == "" || password !== "") {
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
        console.log('mess',logIn.data.success);
      }else {setError(logIn.data)} 
    } 
  }

  return (
    <div>
      <h5> {error}</h5>
      <div className="form">
        <input
          vdsferf
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
