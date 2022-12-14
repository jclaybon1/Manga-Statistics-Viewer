// import React, { Component } from 'react';
// import React from 'react';
// import axios from 'axios';
import './components/mangaStats';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Manga Rater</h1>
      <div>
        <input type="text" placeholder="Enter Manga Name..."></input>
        <button>Search</button>
      </div>
      <script href="mangaStats.js"></script>
      {/* <script href="addToList.js"></script> */}
      {/* <script href="findManga.js"></script> */}

    </div>
  );
}

export default App;
