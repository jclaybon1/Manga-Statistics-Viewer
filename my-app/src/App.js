import React, { Component } from 'react';
import './App.css';
// import Rating from './Rating';
// import newRating from './newRating';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { todos: [] };
    this.addRating = this.addRating.bind(this);
    this.removeDeletedRating = this.removeDeletedRating.bind(this);
    this.updateRating = this.updateTodo.bind(this);
  };

  getRating(){
    const mangaID = '0301208d-258a-444a-8ef7-66e433d801b1';
    
    const axios = require('axios');

    const baseUrl = 'https://api.mangadex.org';

    (async () => {
        const resp = await axios({
            method: 'GET',
            url: `${baseUrl}/statistics/manga/${mangaID}`
        });

        const { rating, follows } = resp.data.statistics[mangaID];

        console.log(
            'Mean Rating:', rating.average, '\n' +
            'Bayesian Rating:', rating.bayesian, '\n' +
            'Follows:', follows
        );
    })();

  }
  
  // componentDidMount() {
  //   // Make initial AJAX call to list ratings
  //   let self = this;
  //   let xhttp = new XMLHttpRequest();

  //   xhttp.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       let  = JSON.parse(this.responseText);

  //       console.log(ratings);
  //     }
  //   };

  //   xhttp.open("GET", "https://cse204.work/todos", true);
  //   xhttp.setRequestHeader("x-api-key", "18bba0-819ea4-ec6048-7fe684-178c3a");
  //   xhttp.send();
  // };


  

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Manga Rater</h1>
        </div>
        <button  onClick={this.getRating}>Get Rating</button>
      </div>
    );
  }
}

export default App;