import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./components/Home";
import Tweet from "./components/Tweet"
import Jsondata from "./components/Jsondata"
import Searchjson from "./components/Searchjson";

function App() {
  return (
    
    <Router>
      <div>
   
      <div className="App">
      <Nav />
        <header className="App-header">
          
         
          <switch>
            <Route path="/" exact component={Home} />
            <Route path="/tweets" exact component={Tweet} />
            <Route path="/jsondata" exact component={Jsondata} />
            <Route path="/searchjson" exact component={Searchjson} />
          </switch>
        
        </header>
       
      </div>

      </div>
    </Router>
  );
}

export default App;
