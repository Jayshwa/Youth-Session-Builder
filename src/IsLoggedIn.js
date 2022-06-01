import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Homepage from "./Homepage";

const IsLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    return setLoggedIn(true);
  };
  const handleLogout = () => {
    history.push("/");
    return setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div className="navbar">
        <h2>Session Builder</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/NewSession">New Session</Link>
          <Link to="/MySessions">My Sessions</Link>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <h2>Session Builder</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Login" onClick={handleLogin}>
            Login
          </Link>
        </div>
      </div>
    );
  }
};

export default IsLoggedIn;
