import React, { useEffect, useState } from 'react';
import axios from 'axios';

function mangaStats() {
    const [mangaStats, setMangaStats] = useState([]);
    const mangaID = '0301208d-258a-444a-8ef7-66e433d801b1';
    const baseUrl = 'https://api.mangadex.org';

    useEffect(() => {
      mangaStatsData();
    }, []);
  
    const mangaStatsData = async () => {
      const { rating, follows } = await axios.get(`${baseUrl}/statistics/manga/${mangaID}`);
      setMangaStats({ rating, follows});

    };
  
    return (
      <div className='mangaStats'>
        {companies.map((comp) => (
          <div key={comp.CompanyId}>
            <h5>{comp.CompanyName}</h5>
          </div>
        ))}
      </div>
    );
  }
  
  export default mangaStats;



// function displayMangaStats(){
//     //get data from API
//     const [stats, getStats] = useState('');

//     const mangaID = '0301208d-258a-444a-8ef7-66e433d801b1';
//     const baseUrl = 'https://api.mangadex.org';

//     useEffect(() => {
//         getMangaStats();
//     }, []);

//     const getMangaStats = () => {
//         axios.get(`${baseUrl}/statistics/manga/${mangaID}`)
//         .then((response) => {
//             // get Data from API
//             const { rating, follows } = response.data.statistics[mangaID];
//             //add data to state
//             getStats({ rating, follows });
//         })
//         .catch(error => console.error(`Error: ${error}`));
//     }
//         return(
//             <mangaStats stats={stats}/>
//         )

// }

// export default displayMangaStats;


// const mangaID = '0301208d-258a-444a-8ef7-66e433d801b1';
// const axios = require('axios');

// const baseUrl = 'https://api.mangadex.org';

// (async () => {
//     const resp = await axios({
//         method: 'GET',
//         url: `${baseUrl}/statistics/manga/${mangaID}`
//     });
//     const { rating, follows } = resp.data.statistics[mangaID];

//     console.log(
//         'Mean Rating:', rating.average, '\n' +
//         'Bayesian Rating:', rating.bayesian, '\n' +
//         'Follows:', follows
//     );
// })();

// render(){
//     const
// }



