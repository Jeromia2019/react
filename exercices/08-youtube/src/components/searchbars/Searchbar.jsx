import React, { useState } from "react";
import style from "../youtube/styles/youtube.module.css";

function Searchbar({ handleFormSubmit }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!search) {
      return;
    }
    handleFormSubmit(search);
  };
  return (
      <form onSubmit={handleSubmit} className={style}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            name="youtube-search"
            type="text"
          />
          <button type="submit">Rechercher</button>
      </form>
  );
}

export default Searchbar;
