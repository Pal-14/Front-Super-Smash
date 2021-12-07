import React from "react";
import { useNavigate } from "react-router";
import "./LogOut.css";

function LogOut(props) {
  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("jwt");
    props.setIsLoggedIn(false);
    props.setUser("");
    navigate("/");
  }

  return (
    <div className="divRow">
      
      <div className="div">
        <p className="textLogOut">
          Êtes-vous sûr de vouloir vous déconnecter ?
        </p>
        <div className="buttonLogOut">
          <button onClick={logOut}>Déconnexion</button>
        </div>
      </div>
    </div>
  );
}

export default LogOut;
