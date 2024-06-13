import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>쿠킹 레시피</h1>
        </Link>
        <Link to="/create">
          <h1>레시피 만들기</h1>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
