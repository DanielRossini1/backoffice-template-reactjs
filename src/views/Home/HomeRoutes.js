import {Switch, Route, Redirect} from "react-router-dom";
import Customer from "./views/Customer/Customer";
import Activity from "./views/Activity/Activity";
import Place from "./views/Place/Place";

function AppRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Customer} />
        <Route exact path="/home/activities" component={Activity} />
        <Route exact path="/home/places" component={Place} />
        <Route path="/home/*">
          <Redirect to="/notfound" />
        </Route>
      </Switch>
    </div>
  )
}

export default AppRoutes;
