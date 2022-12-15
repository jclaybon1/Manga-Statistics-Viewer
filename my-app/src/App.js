// import React, { Component } from 'react';
// import React from 'react';
// import axios from 'axios';
import './components/mangaStats';
import './components/getChapters';
import './components/findManga';
// import './components/searchByTag';
// import './components/rateManga';
import './App.css';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = { ratings: [] };
//     this.findManga = this.findManga.bind(this);
//   };

//   componentDidMount() {

//   }
function App(){
  return (
    <div className="App">
      {/* <getMangaStats/> */}
      <h1>Manga Rater</h1>
      <div>
        <input type="text" placeholder="Enter Manga Name..."></input>
        <button >Search</button>
        <ul>
        </ul>
      </div>
      <script href="mangaStats.js"></script>
      <script href="getChapters.js"></script>
      {/* <script href="addToList.js"></script> */}
      <script href="findManga.js"></script>
      {/* <script href="searchByTag.js"></script> */}
    </div>
  );
}

export default App;
