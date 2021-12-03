import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services";

import "./SignUp.css";

export default function SignUp(props) {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  async function handleSubmit(event) {
    if (
      !userName ||
      !lastName ||
      !firstName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("il en manque");
    }
    let body = {
      userName,
      lastName,
      firstName,
      email,
      password,
      confirmPassword,
    };
    let signUp = await service.signup(body);
    console.log(signUp.data.success);
    navigate('/actu')
    if (signUp.data.success) {
      setUserName("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      localStorage.setItem("jwt", signUp.data.token);
      props.setIsLoggedIn(true)
} else {
      setError(signUp.data.success);
    }
  }
  return (
    <div className="form">
      

      <h1>
        {error}{message}
        {message}
      </h1>
      <input
        onChange={(e) => onChange(e, setUserName)}
        name="userName"
        type="text"
        placeholder="Nom d'utilisateur"
      ></input>
      <input
        onChange={(e) => onChange(e, setLastName)}
        name="lastName"
        type="text"
        placeholder="Prénom"
      ></input>
      <input
        onChange={(e) => onChange(e, setFirstName)}
        name="firstName"
        type="text"
        placeholder="Nom"
      ></input>
      <input
        onChange={(e) => onChange(e, setEmail)}
        name="email"
        type="email"
        placeholder="Email"
      ></input>
      <input
        onChange={(e) => onChange(e, setPassword)}
        name="password"
        type="password"
        placeholder="Mot de Passe"
      ></input>
      <input
        onChange={(e) => onChange(e, setConfirmPassword)}
        name="confirmPassword"
        type="password"
        placeholder="Confirmer mot de Passe"
      ></input>
      <button onClick={handleSubmit} type="submit">
        Inscription
      </button>
    </div>
  );
}
