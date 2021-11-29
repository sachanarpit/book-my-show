import "./App.css";
import { Home } from "./components/Home";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          About Page
        </Route>

        <Route exact path="/newshows">
          New Shows
        </Route>
        <Route exact path="/login">
          {" "}
          Login{" "}
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
