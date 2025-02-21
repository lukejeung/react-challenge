import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coins from "./routes/Coins";

function Router(){
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/:coinId">
        <Coin />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}
export default Router;