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
import { Search } from './components/mangaStats';
// import { Example1 } from './components/getChapters';


function App(){
  return (
    <div className="App">
      <h1>Manga Stat Viewer</h1>
      <Search/>
      {/* <Example1/> */}
      {/* <script href="getChapters.js"></script> */}
    </div>
  );
}

export default App;
