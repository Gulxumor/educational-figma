import logo from "../../assets/images/logo.png";
import nav_img from "../../assets/images/nav_img.png";
import burger from "../../assets/images/burger.png";
import search from "../../assets/icons/search.svg"
import notification from "../../assets/icons/notification.svg";

const Navbar = () => {
  return (
    <div>
      <div className="wrapper">
        <img src={logo} alt="nav__img" className="nav__img" />
        <img alt="nav__img" src={nav_img} />
        <div className="nav__inner">
          <img alt="nav__img" className="nav__img" src={search} />
          <img alt="nav__img" className="nav__img" src={notification} />
          <img alt="nav__img" className="nav__img" src={burger} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
