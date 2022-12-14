// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Parent(){
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



