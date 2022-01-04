import "./Navbar.css";
import { Link } from "react-router-dom";
import photo from "../../assets/photo.jpg";

export default function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;

  let user = props.user?.data?.data;

  const displayButton = () => {
    if (isLoggedIn === true) {
      return (
        <nav className="navbar fixed">
          {!isLoggedIn ? (
            <Link  className="logPadding" to="/log">Connexion</Link>
          ) : (
            <nav className="navbar fixed">
              <Link to="/">
                <img className="logo" src={photo} alt="Logo du site" />
              </Link>

              <Link to="/actu">Actu</Link>
              <Link to="/profil">Mon profil</Link>
              <Link to="/deconnexion">Déconnexion</Link>
              <div className="userNameBg"> {user?.firstName} </div>
            </nav>
          )}
        </nav>
      );
    } else {
      return (
        <nav className="navbar fixed">
          <Link to="/">
            <img className="logo" src={photo} alt="Logo du site" />
          </Link>
          <div className="navbar_links">
            <Link to="/log">Connexion</Link>
          </div>
        </nav>
      );
    }
  };

  return (
    <nav className="navbar fixed">
      <Link to="/">
        <img className="logo" src={photo}  alt="Logo du site"/>
      </Link>
      <div className="navbar_links">{displayButton()}</div>
    </nav>
  );
}
