import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/notfound" component={NotFound} />
        <Route path="*">
          <Redirect to="/notfound" />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRoutes;
