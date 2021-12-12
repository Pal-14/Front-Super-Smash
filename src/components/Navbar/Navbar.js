import "./Navbar.css";
import { Link } from "react-router-dom";
import photo from "../../assets/photo.jpg";

export default function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;

  console.log(isLoggedIn, "isLoggedIn");

  const displayButton = () => {
    if (isLoggedIn === true) {
      return (
        <div className="navbar fixed">
          {!isLoggedIn ? (
            <Link to="/log">Connexion</Link>
          ) : (
            <div className="navbar fixed">
              <Link to="/">
                <img className="logo" src={photo} />
              </Link>
              <Link to="/quizz">Quizz</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/actu">Actu</Link>
              <Link to="/profil">Mon profil</Link>
              <Link to="/deconnexion">Déconnexion</Link>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="navbar fixed">
          <Link to="/">
            <img className="logo" src={photo} />
          </Link>
          <div className="navbar_links">
            <Link to="/log">Connexion</Link>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="navbar fixed">
      <Link to="/">
        <img className="logo" src={photo} />
      </Link>
      <div className="navbar_links">{displayButton()}</div>
    </div>
  );
}
