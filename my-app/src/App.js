// import React, { Component } from 'react';
// import React from 'react';
// import axios from 'axios';
import './components/mangaStats';
import './components/getChapters';
import './components/findManga'
// import './components/rateManga';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <getMangaStats/> */}
      <h1>Manga Rater</h1>
      <div>
        <input type="text" placeholder="Enter Manga Name..."></input>
        <button >Search</button>
      </div>
      {/* <Parent/> */}
      <script href="mangaStats.js"></script>
      {/* <script href="getChapters.js"></script> */}
      {/* <script href="addToList.js"></script> */}
      {/* <script href="findManga.js"></script> */}

    </div>
  );
}

export default App;
