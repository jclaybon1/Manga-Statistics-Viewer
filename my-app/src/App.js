// import React, { Component } from 'react';
// import React from 'react';
// import axios from 'axios';
// import './components/mangaStats';
// import './components/getChapters';
// import './components/findManga';
// import './components/searchByTag';
// import './components/rateManga';
// import SearchManga from './components/SearchManga';
import './App.css';
import { SearchManga, Example }from './components/mangaStats';

function App(){
  return (
    <div className="App">
      {/* <getMangaStats/> */}
      {/* <h1>Manga Rater</h1> */}
      {/* <div> */}
        {/* <button >Search</button> */}
      {/* </div> */}
      {/* <SearchManga/> */}
      <Example/>


      {/* <script href="mangaStats.js"></script> */}
      {/* <script href="getChapters.js"></script> */}
      {/* <script href="addToList.js"></script> */}
      {/* <script href="findManga.js"></script> */}
      {/* <script href="searchByTag.js"></script> */}
    </div>
  );
}

export default App;
