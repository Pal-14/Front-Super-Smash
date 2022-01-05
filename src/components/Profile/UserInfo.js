import { useState } from "react";
import service from "../../services";
import Upload from "../UploadPic.js/Upload";
import imgDefault from "../../assets/icons8-utilisateur.gif";
import "./Profil.css";
import "./UserInfo.css";

export default function UserInfo(props) {
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const user = props.user?.data;

  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  async function handleChange(props) {
    let body = {
      description,
    };
    let descriptionSubmit = await service.editDescription(body);
    if (descriptionSubmit.data.success) {
      window.location.reload(true);
    }
  }

  let Url = "http://localhost:5000/get-pic-profil/";

  return (
    <div className="profilPage">
      <div className="row5">
        <div className="card">
          <div className="col-1">
            <div className="row-1">
              {props.user?.data?.data?.pictureUrl.at(-1) ? (
                <img
                  className="profilImg"
                  src={`${Url}${props.user?.data?.data?.pictureUrl.at(-1)}`}
                  alt="Photo"
                />
              ) : (
                <img className="profilImg" src={imgDefault} />
              )}{" "}
              <Upload {...props} />
            </div>

            <p className="textCenter">
              <span>Pseudo: </span> {user?.data.userName}
            </p>
            <p className="textCenter">
              <span>Nom: </span> {user?.data.lastName}
            </p>
            <p className="textCenter">
              <span>Prénom:</span> {user?.data.firstName}
            </p>
            <p className="textCenter">
              <span>Email: </span>
              {user?.data.email}
            </p>
          </div>

          <div className="col-2">
            <p>
              <span>Description:</span> {user?.data.description}
            </p>{" "}
            <input
              maxLength={140}
              name="description"
              placeholder="Décrivez-vous"
              onChange={(e) => onChange(e, setDescription)}
            ></input>
            <button onClick={handleChange}>Changer la description </button>
          </div>
        </div>
      </div>
    </div>
  );
}
