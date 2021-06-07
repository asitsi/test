import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Phaltu from "./components/Phaltu";
import Leagename from "./components/Leagename";
import Match from "./components/Match";
import Bet from "./components/Bet";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/test/" exact component={Home} />
        <Route exact path="/test/:gamename" component={Phaltu} />
        <Route exact path="/test/:gamename/:leageName" component={Leagename} />
        <Route
          exact
          path="/test/:gamename/:leageName/:matchname"
          component={Match}
        />
        <Route
          exact
          path="/test/:gamename/:leageName/:matchname/:bet"
          component={Bet}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
