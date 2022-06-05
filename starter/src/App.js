import "./App.css";
import { useState } from "react";
import Search from "./Search";
import Book from "./Books";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
        <Search showSearchPage={showSearchPage}/>
        <Book/>
    </div>
  );
}

export default App;
