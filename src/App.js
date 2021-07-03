import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./components/Home";
import Tweet from "./components/Tweet"
import Jsondata from "./components/Jsondata"
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <switch>
            <Route path="/" exact component={Home} />
            <Route path="/tweets" exact component={Tweet} />
            <Route path="/jsondata" exact component={Jsondata} />
          </switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
