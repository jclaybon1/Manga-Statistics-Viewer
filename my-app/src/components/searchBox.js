import React, { useState, useRef } from "react";
import "./mangaStats.css";
import {Stats} from "./mangaStats.js";
import "./searchBox.css";


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
            <h4 className="mangaTitle">Enter Manga Title Here:</h4>
          </label>
          <input  className="inputSearch"type="text" placeholder="Search for Manga (i.e. One Piece)..." ref={state}/>

          <button className="buttonSearch"><span>Display Statistics</span></button>
        </form>
        <Stats dataParentToChild = {search}/> 

      </div>
    </div>
  );
}
