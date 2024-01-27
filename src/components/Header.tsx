import { NavLink, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSearchFilter } from "../contexts/SearchFilterContext";

const Header = () => {
  const { logout } = useAuth0();
  const { setSearchValue, searchValue } = useSearchFilter();
  const location = useLocation();

  const isPLay = location.pathname;
  return (
    <nav
      className={`${" navbar navbar-expand-lg"} ${
        isPLay === "/play" ? "bg-dark" : "bg-body-tertiary "
      }`}
    >
      <div className="container-fluid">
        <img
          style={{
            height: "2rem",
            marginRight: "1rem",
            objectFit: "cover",
          }}
          src="https://i.ibb.co/c8xyrs8/youtube.png"
        />
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink
                className={`${"nav-link"} ${
                  isPLay === "/play" ? "text-light" : ""
                }`}
                aria-current="page"
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`${"nav-link"} ${
                  isPLay === "/play" ? "text-light" : ""
                }`}
                aria-current="page"
                to={"/movies"}
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`${"nav-link"} ${
                  isPLay === "/play" ? "text-light" : ""
                }`}
                aria-current="page"
                to={"/webseries"}
              >
                Webseries
              </NavLink>
            </li>
          </ul>

          <form className="d-flex" role="search">
          {(isPLay !== '/play')?<input
              onChange={(e) => setSearchValue(e.target.value)}
              className="form-control me-2 shadow-none"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              style={{marginRight:"0.5em",border:"none"}}
            />:""}
          
          {localStorage.getItem("auth") &&  <button className="btn btn-outline-success" type="submit" onClick={() => {
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  });
                  localStorage.removeItem("auth");
                }}>
              Logout
            </button>}
          </form>

           
         
        </div>
      </div>
    </nav>
  );
};

export default Header;
