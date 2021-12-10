import React, { useState, useEffect } from "react";
import "./News.css";
import image1 from "../../assets/apple-icon-57x57.png";

import service from "../../services";
import { useNavigate } from "react-router";

export default function News() {
  const [userPostStorage, setUserPostStorage] = useState([]);

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    service
      .displayAllPost()
      .then((response) => setUserPostStorage(response.data));
  }, []);
/* 
    const setPosts = () => {
    setLoading(true);
      service.displayAllPost().then((postsFromDb) => {
        setUserPostStorage(postsFromDb);
        setLoading(false);
      });
  };

  useEffect(setPosts,[]);


  function handleClickLike(id) {
    let post =id 
    service.setLike({post: id, post})
    .then(()=> {
      setPosts();
    });
  } */

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
    if (postSubmit.data.success) {
      alert("post créer avec succès");

      window.location.reload(true);
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
                <div className="imgTwo">
                  {" "}
                  <img className="imgTwo" src={image1} />
                  <span>{post.author}</span>
                </div>

                <p>
                  <span>{post.title}</span>
                  <br />
                </p>
                <div>
                  <p>
                    {" "}
                    {/* {lepost.date} */}Le: {post.date}.
                  </p>
                  <p>à {post.time}</p>
                </div>

                {/* mettre la date dans la V2 */}
              </div>

              <div className="cardPartTwo">
                <p></p>
                <p>{post.content}</p>
                <p className="nbLike">Vous avez {/* {likes} */} Likes </p>
              </div>

              <div className="cardPartThree">
                <button className="commentButton">A</button>

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
