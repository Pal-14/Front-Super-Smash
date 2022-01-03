import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import service from "./services";

import Log from "./components/Log/Log";
import Navbarpp from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import News from "./components/News/News";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import LogOut from "./components/Log/LogOut";
import UserInfo from "./components/Profile/UserInfo";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  //recuperation des informations de connexion
  useEffect(async () => {
    let info = await service.checkToken();
    setUser(info);
  }, [isLoggedIn]);

  //actualisation de l'affichage
  useEffect(() => {
    if (user?.data?.success) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  useEffect(() => {}, [isLoggedIn]);

  return (
    <div className="App">
      <Navbarpp className="fixe" user={user} isLoggedIn={isLoggedIn} />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              user={user}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/log"
          element={
            <Log
              user={user}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>

        <Route
          path="/actu"
          element={
            <News
              user={user}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route
          path="/profil"
          element={
            <UserInfo
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>

        <Route
          path="/deconnexion"
          element={<LogOut setUser={setUser} setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
