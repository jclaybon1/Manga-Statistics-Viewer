import React, { useState, useRef } from "react";
import "./mangaStats.css";
import {Stats} from "./mangaStats.js";

export function Search() {
  const [search, setSearch] = useState(" ");
  const state = useRef();


  function handleSubmit(event) {
    setSearch(state.current.value);
    event.preventDefault();
  }

  return (
    <div>
      <div className="c-manga-search">
        <form onSubmit={handleSubmit} id="searchForm">
          <label>
            <h4>Enter Manga Title Here:</h4>
            <input type="text" ref={state} />
          </label>
          <input type="submit" value="Search for Manga..." id="inputSearch" />
        </form>
        <Stats dataParentToChild = {search}/> 

      </div>
    </div>
  );
}
