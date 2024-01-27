import { useAuth0 } from "@auth0/auth0-react";
import "../css/BeforeAuthentication.css";

const BeforeAuthentication = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  if (isAuthenticated) localStorage.setItem("authentication", "true");
  
  return (
    <div className="before-authentication-container">
      <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
        Log In
      </button>
      <div className="centered">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="red"
          className="bi bi-play-btn-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
        </svg>
      </div>
    </div>
  );
};

export default BeforeAuthentication;
