import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchElems from "./FetchElems";

const MySessions = ({ session, title }) => {
  const {
    data: elements,
    isPending,
    error,
  } = useFetchElems("http://localhost:8500/elements");
  const [search, setSearch] = useState(null);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  if (elements) {
    return (
      <div className="session-container">
        <div className="search-sessions">
          <label>Search for Session</label>
          <input
            className="input-box"
            type="text"
            value={search}
            onChange={handleInput}
          />
          <label>Searching for: {search}</label>
        </div>
        {elements.map((elements) => (
          <div className="session-preview" key={elements.id}>
            <Link to={`/elements/${elements.id}`}>
              <h2>{elements.session}</h2>
            </Link>
            <h5>{elements.date}</h5>
          </div>
        ))}
      </div>
    );
  }
};

export default MySessions;
