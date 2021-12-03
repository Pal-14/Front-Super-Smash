import React, { useState } from "react";
import { useNavigate } from "react-router";
import service from "../../services";


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
    if (email!=="" || password !=="") {
      let body = {
        email: email,
        password: password,
      };
      let logIn =  await service.logUsers(body);
      navigate('/actu')
      if(logIn.data.success) {
          setPassword("");
          setEmail("");
          localStorage.setItem("jwt", logIn.data.token);
          props.setIsLoggedIn(true)
      } else {
          setMessage(logIn.data.message)
      }
    
   
    }
  }

  return (
    <div >
    
    
       
        <h3>
          {error}
          {message}
        </h3>
        <div className="form">
        <input
          onChange={(e) => onChange(e, setEmail)}
          name="email"
          type="text"
          placeholder="Email"
        ></input>
        <input
          onChange={(e) =>onChange(e, setPassword)}
          name="password"
          type="password"
          placeholder="Mot de passe"
        ></input>
        <button className="buttonCenter" type="submit" onClick={handleSubmit}>
          Se Connecter
        </button></div>
     
    </div>
  );
}
