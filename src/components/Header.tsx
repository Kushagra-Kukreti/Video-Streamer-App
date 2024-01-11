import { NavLink } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { logout ,isAuthenticated } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img style={{
      height:"2rem",
      marginRight:"1rem",
      objectFit:"cover"
    }}
    src="/public/images/youtube.png"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link " aria-current="page" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " aria-current="page" to={"/movies"}>Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to={"/webseries"}>Webseries</NavLink>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
       { isAuthenticated &&<button className="btn btn-primary" type="submit" style={{marginLeft:"0.5rem"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>}
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header
