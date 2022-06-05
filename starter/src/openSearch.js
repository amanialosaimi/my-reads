import "./App.css";
import { useState } from "react";

const openSearch = (props) => {
  const [showSearchPage, setShowSearchpage] = useState(false);
  
  return(
    <div className="open-search">
    <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
  </div>
  )
}
export default openSearch