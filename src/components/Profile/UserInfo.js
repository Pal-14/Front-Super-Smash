import olaf from "../../assets/olaf.png";
import { Link, Outlet } from "react-router-dom";
import "./Profil.css";

export default function UserInfo(props) {
  const user = props?.user?.data;
  console.log(user, "userinprofile");

  return (
    <div className="profilPage">
      <div className="row5">
        <div className="card">
          <div className="col-1">
            <img className="profilImg" src={olaf} alt="Photo" />
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
              <span>Description:</span> Moi c'est Olaf est j'aime les gros
              calins et toi Romain ? tu aimes les gros calins{" "}
            </p>
            <p>
              <span>Plus d'info:</span> Envoi Olaf au 6 12 12{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
