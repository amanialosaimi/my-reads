import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const OpenSearch = (props) => {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  );
};
export default OpenSearch;
