import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/login/Login";
import Details from "./pages/details/Details";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/details" component={Details} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
