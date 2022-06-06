import "./App.css";
import { useState } from "react";
import Search from "./Search";
import Book from "./Books";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/search">
              <Search/>
            </Route>
            <Route path="/">
              <Book />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
