import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewSession from "./NewSession";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import IsLoggedIn from "./IsLoggedIn";
import MySessions from "./MySessions";
import SessionDetails from "./sessionDetails";

//CREATE NEW COMPONENTS WITH SFC
//STATELESS FUNCTIONAL COMPONENT

function App() {
  const title = "Welcome to the Session Builder";

  return (
    <Router>
      <div className="App">
        <IsLoggedIn />
        <Route exact path="/Login">
          <LoginForm />
        </Route>
        <Route exact path="/NewSession">
          <NewSession />
        </Route>
        <Route exact path="/MySessions">
          <MySessions />
        </Route>
        <Route exact path="/elements/:id">
          <SessionDetails />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
