import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Hello,
  Profile,
  Resume,
  Contact,
  Portfolio,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Profile />
        <Hello />
        <Portfolio />

        {/* <Route path="/" component={Hello} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} /> */}
      </Router>
    </div>
  );
}

export default App;
