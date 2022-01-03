import React, { useState } from "react";
import { useNavigate } from "react-router";
import service from "../../services";

export default function AddPost() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");

  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  async function handleSubmitPost() {
    let body = {
      title,
      content,
    };
    let postSubmit = await service.postByUser(body);
  }

  return (
    <div>
      {/*  <label htmlFor="author">user map</label>
      <input onChange={(e) => onChange(e, setAuthor)} name="author"></input>*/}
      <label htmlFor="title">Titre</label>
      <input onChange={(e) => onChange(e, setTitle)} name="title"></input>
      <label htmlFor="content">Message....</label>
      <input onChange={(e) => onChange(e, setContent)} name="content"></input>
      <button onClick={handleSubmitPost}>Poster</button>
    </div>
  );
}
