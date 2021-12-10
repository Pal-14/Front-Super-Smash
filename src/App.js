import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import service from "./services";

import Log from "./components/Log/Log"
import AllUsers from "./components/AllUsers/AllUsers";
import Navbarpp from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import News from "./components/News/News";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import LogOut from "./components/Log/LogOut";


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
    console.log(user);
    console.log("test");
    if (user?.data?.success) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  useEffect(() => {
    console.log("Connecté", isLoggedIn);
  }, [isLoggedIn]);

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

        <Route path="/quizz" element={<AllUsers />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/shop" element={<AllUsers />}></Route>

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
          path="/deconnexion"
          element={<LogOut setUser={setUser} setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
