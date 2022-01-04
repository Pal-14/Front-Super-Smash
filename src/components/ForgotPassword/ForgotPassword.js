import React, { useState } from "react";
/* import { useNavigate } from "react-router"; */ // pas encore utilisé

import "./ForgotPassword.css";

export default function ForgotPassword(props) {
/*   let navigate = useNavigate(); */ //pas encore utilisé
  const [email, setEmail] = useState("");
/*   const [error, setError] = useState("");
  const [message, setMessage] = ""; */ // pas encore utilisé

  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  const disabled = email === "";

  /* async function handleSubmit(e) {
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
         setMessage(logIn.data.message); //pas encore utilisé
      }
    }
  }*/

  return (
    <div className="containerForm">
      <h1>Attention cette page est en cours de construction</h1>
      <h3>
        Elle n'est pas encore opérationnelle merci de ne pas y prêter attention.
      </h3>
      <h3>Mot de Passe oublié</h3>
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
         /*  onClick={handleSubmit} */
        >
          Récupérer
        </button>
      </div>
    </div>
  );
}
