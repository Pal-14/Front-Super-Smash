import "./Profil.css";
import { Link, Outlet } from "react-router-dom";
import olaf from "../../assets/olaf.png";

export default function Profil(props) {
  const user = props?.user?.data;
  console.log(user, "userinprofile");

  return (
    <div className="profilPage">
      <h1>Page de Profil</h1>
      {/* <div className="rowProfil"> */}
      <nav>
        {" "}
        <Link to="/profil/mon-profil"> Mon profil </Link>
        <Link to="/profil/mes-infos"> Mes Informations personnelles</Link>
        <Outlet />
      </nav>
    </div>
  );
}
