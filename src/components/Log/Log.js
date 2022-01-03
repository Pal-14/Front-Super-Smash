import React from "react";
import "./Log.css";
import { useState } from "react";

import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import LogOut from "./LogOut";

export default function Log(props) {
  const [title, setTitle] = useState("Connexion");
  const [text, setText] = useState("Je n'ai pas encore de Compte");
  const [button, setButton] = useState("S'inscrire");
/*   const [error, setError] = useState(""); */ //pas encore utilisé
  function change() {
    if (title === "Connexion") {
      setTitle("Incription");
      setText("J'ai déjà un compte");
      setButton("Se Connecter");
    } else {
      setTitle("Connexion");
      setText("Je n'ai pas encore de compte");
      setButton("S'incrire");
    }
  }

  if (props.isLoggedIn === false) {
    return (
      <div className="main containerLog">
        <h1>{title}</h1>

        {title === "Connexion" ? <Login {...props} /> : <SignUp {...props} />}
        <div className="buttonCenter">
          <p className="textSize">{text}</p>
          <button className="buttonCenter" onClick={change}>
            {button}
          </button>
        </div>
      </div>
    );
  } else {
    <LogOut />;
  }
}
