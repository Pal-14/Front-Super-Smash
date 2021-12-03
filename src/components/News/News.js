import React, { useState, useEffect } from "react";
import "./News.css";
import image1 from "../../assets/apple-icon-57x57.png";


export default function News() {
  const [userPostStorage, setUserPostStorage] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {}, [likes]);

  return (
    <div className="main">
      <div className="row">
        <div className="titleFeed">
          <h4 classname="titleh1">Accueil</h4>
          <h1 classname="titleh4">Bienvenue au Pays</h1>
        </div>
      </div>

      <div className="containerCardFeed">
        <div className="cardFeed">
          <div className="cardPartOne">
            <img className="imgTwo" src={image1} />
            <p>
              <span>Auteur</span>
            </p>
            <p> {/* {lepost.date} */} Il y a 12 heures.</p>
            {/* mettre la date dans la V2 */}
          </div>

          <div className="cardPartTwo">
            <p>Titre</p>
            <p>Contenu</p>
            <p className="nbLike">Vous avez {likes} Likes </p>
          </div>

          <div className="cardPartThree">
            <button
              className="commentButton"
              onClick={() => setLikes(likes + 1)}
            >
              A
            </button>

            <p className="spaceTextButton">Press A to Like</p>
            <button className="addLikeButton" name=" add-like" type="submit">
              B
            </button>
            <p className="spaceTextButton">Press B to Comment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
