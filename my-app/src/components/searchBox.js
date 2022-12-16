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
          <label className="inputLabel">
            <h4>Enter Manga Title Here:</h4>
          </label>
          <input  className="inputSearch"type="text" ref={state} />

          <button className="buttonSearch"><span>Search for Manga...</span></button>
        </form>
        <Stats dataParentToChild = {search}/> 

      </div>
    </div>
  );
}
