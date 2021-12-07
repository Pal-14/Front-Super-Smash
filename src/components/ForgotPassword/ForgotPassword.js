import React, { useState } from "react";
import { useNavigate } from "react-router";
import service from "../../services";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = "";

  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  const disabled = email === "";

  async function handleSubmit(e) {
    console.log(email);
    if (email !== "") {
      let body = {
        email: email,
      };
      let logIn = await service.logUsers(body);
      navigate("/actu");
      if (logIn.data.success) {
        setEmail("");
        localStorage.setItem("jwt", logIn.data.token);
        props.setIsLoggedIn(true);
      } else {
        setMessage(logIn.data.message);
      }
    }
  }
  

  return (
    <div className="containerForm">
      <h3>
        {error}
        {message}Mot de Passe oublié
      </h3>
      <div className="form">
        <input
          onChange={(e) => onChange(e, setEmail)}
          name="email"
          type="email"
          placeholder="Email"
        ></input>

        <button
          disabled={disabled}
          className="buttonCenter"
          type="submit"
          onClick={handleSubmit}
        >
          Récupérer
        </button>
      </div>
    </div>
  );
}
