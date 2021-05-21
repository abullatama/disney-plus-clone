import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "./features/user/userSlice";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {userName ? <Redirect to="/home" /> : <Login />}
          </Route>
          <Route exact path="/home">
            {!userName ? <Redirect to="/" /> : <Home />}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
