import { Link } from "react-router-dom";
import "./NavBar.css";
import Searchbar from "./Searchbar";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>쿠킹 레시피</h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          <h1>레시피 만들기</h1>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
