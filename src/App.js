import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Games from "./components/Games";
import Header from "./components/Header";
import Streams from "./components/Streams";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <Router>
      <div>
        {" "}
        <Header />
      </div>
      <Link />
      <Route exact path="/" component={Games} />
      <Route exact path="/top-streams" component={Streams} />
    </Router>
  );
}

export default App;
