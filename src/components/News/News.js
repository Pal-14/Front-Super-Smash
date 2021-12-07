import React, { useState, useEffect } from "react";
import "./News.css";
import image1 from "../../assets/apple-icon-57x57.png";

import service from "../../services";
import { Navigate, useNavigate } from "react-router";

export default function News() {
  const [userPostStorage, setUserPostStorage] = useState([]);
  const [likes, setLikes] = useState(0);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");

  let navigate = useNavigate();

  useEffect(() => {}, [likes]);

  useEffect(() => {
    service
      .displayAllUsers()
      .then((response) => setUserPostStorage(response.data));
  }, []);

  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  async function handleSubmitPost() {
    console.log(userPostStorage, "userPostStorage");
    let body = {
      title,
      content,
    };
    let postSubmit = await service.postByUser(body);
    if (postSubmit.data.message === "yes") {
      navigate("/actu");
      window.location.reload(true);
      
      console.log(postSubmit, "ici");
    }
  }

  return (
    <div className="main">
      <div className="row">
        <div className="titleFeed">
          <h4 classname="titleh1">Accueil</h4>
          <h1 classname="titleh4">Bienvenue au Pays</h1>
        </div>
      </div>

      <div className="containerAddPost">
        <div className="addPost">
          <textarea
            className="newPost"
            maxLength="140"
            placeholder="140 caractères max..."
            onChange={(e) => onChange(e, setContent)}
            name="content"
          ></textarea>
          <button className="addPostButton" onClick={handleSubmitPost}>
            Poster
          </button>
        </div>
      </div>

      {userPostStorage.map((post, id) => (
        <div key={id} className="containerCardFeed">
          <div className="cardFeed">
            <div className="cardPartOne">
              <img className="imgTwo" src={image1} />
              <p>
                <span>{post?.userName}</span>
              </p>
              <p> {/* {lepost.date} */} Il y a 12 heures.</p>
              {/* mettre la date dans la V2 */}
            </div>

            <div className="cardPartTwo">
              <p></p>
              <p>{post.post?.content}</p>
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
      ))}
    </div>
  );
}
