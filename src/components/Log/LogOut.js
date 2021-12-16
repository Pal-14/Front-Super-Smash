import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "./LogOut.css";

function LogOut(props) {
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("jwt");
    props.setIsLoggedIn(false);
    navigate("/");
  }, []);

  return <></>;
}

export default LogOut;
