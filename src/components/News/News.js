import React, { useState, useEffect } from "react";
import "./News.css";
import imgDefault from "../../assets/icons8-utilisateur.gif";

import service from "../../services";


export default function News(props) {
  const [userPostStorage, setUserPostStorage] = useState([]);

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let authorProfilePicture = props.user?.data?.data?.pictureUrl.at(-1);

  /*   const pictureArray = props.user?.data?.data?.pictureUrl;
  const lastPicture = pictureArray?.at(-1) */ let Url =
    "http://localhost:5000/get-pic-profil/";

  useEffect(() => {
    service
      .displayAllPost()
      .then((response) => setUserPostStorage(response.data));
  }, []);

  const setPosts = () => {
    setLoading(true);
    service.displayAllPost().then((postsFromDb) => {
      setUserPostStorage(postsFromDb.data);
      setLoading(false);
    });
  };

  useEffect(setPosts, [loading]);

  async function handleClickLike(id) {
    let post = id;
    let body = {
      post,
    };

    let clickLikeIsGood = await service.setLike(body);

    setPosts();
    if (clickLikeIsGood.data === "Vous avez liké") {
    }
  }

  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  async function handleSubmitPost() {
    let body = {
      title,
      content,
      authorProfilePicture,
    };
    let postSubmit = await service.postByUser(body);
    if (postSubmit.data.success) {
      window.location.reload(true);
    }
  }

  return (
    <div className="main">
      <div className="row">
        <div className="titleFeed">
          <h4 className="titleh1">Accueil</h4>
          <h1 className="titleh4">Bienvenue au Pays</h1>
        </div>
      </div>

      <div className="containerAddPost">
        <div className="addPost">
          <label htmlFor="title">Titre:</label>
          <textarea
            className="newPost"
            maxLength="30"
            placeholder="30 caractères max..."
            onChange={(e) => onChange(e, setTitle)}
            name="title"
          ></textarea>
          <label htmlFor="title">Message:</label>
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

      {userPostStorage
        .map((post, id) => (
          <div key={id} className="containerCardFeed">
            <div className="cardFeed">
              <div className="cardPartOne">
                <div className="imgProfil">
                  {" "}
                  {post.authorProfilePicture ? (
                    <img
                    alt="profil"
                      className="imgTwo"
                      src={`${Url}${post.authorProfilePicture}`}
                    />
                  ) : (
                    <img 
                    alt="profil"
                    className="imgTwo" src={imgDefault}/>
                  )}
                  <span>{post.author}</span>
                </div>

                
                  <h3>{post.title}</h3>
                  <br />
                
                <div>
                  <p>Le: {post.date}.</p> <p>à: {post.time}.</p>
                </div>
              </div>

              <div className="cardPartTwo">
                <p></p>
                <p>{post.content}</p>
                <p className="nbLike">Vous avez {post.likes.length} Likes </p>
              </div>

              <div className="cardPartThree">
                <button
                  className="commentButton"
                  onClick={() => handleClickLike(post._id)}
                >
                  A
                </button>

                <p className="spaceTextButton">Press A to Like</p>
                <button
                  className="addLikeButton"
                  name=" add-like"
                  type="submit"
                >
                  B
                </button>
                <p className="spaceTextButton">Press B to Comment</p>
              </div>
            </div>
          </div>
        ))
        .reverse()}
    </div>
  );
}
