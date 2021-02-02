import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Typical from "react-typical";
import {
  Navbar,
  Hello,
  Profile,
  Resume,
  Contact,
  Portfolio,
  Skills,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Profile />
        <Hello />
        <Resume />
        <Skills />
        <Portfolio />

        {/* <Route path="/" component={Hello} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} /> */}
      </Router>
    </div>
  );
};

export default App;
