import React, { useState } from "react";

function Searchbar({handleFormSubmit}) {

    const [search, setSearch] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        handleFormSubmit(search)
    }
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        <img
          style={{ width: "200px", height: "100px", justifyContent: "center" }}
          src=""
          alt="youtube logo"
        ></img>
      </h2>
      <div className="search-bar ui segment">
        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video-search">Video Search</label>
            <input
              onChange={e => setSearch(e.target.value)}
              name="video-search"
              type="text"
              placeholder="Search.."
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Searchbar;
