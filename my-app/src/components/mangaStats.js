// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import React, { Component } from 'react';

class getMangaStats extends Component {

    const mangaID = '0301208d-258a-444a-8ef7-66e433d801b1';
    // const axios = require('axios');
    
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

    render() {
        return (
            <article id="{this.props.id}" className="todo">
                <button className="check"></button>
                <p>{this.props.text}</p>
            </article>
        );
    }
 }
 
 export default getMangaStats;




// function mangaStats() {
//     const [mangaStats, setMangaStats] = useState([]);
//     const mangaID = '0301208d-258a-444a-8ef7-66e433d801b1';
//     const baseUrl = 'https://api.mangadex.org';

//     useEffect(() => {
//       mangaStatsData();
//     }, []);
  
//     const mangaStatsData = async () => {
//       const { rating, follows } = await axios.get(`${baseUrl}/statistics/manga/${mangaID}`);
//       setMangaStats({ rating, follows});

//     };
  
//     return (
//       <div className='mangaStats'>
//         {mangaStats.map((mangaStats) => (
//           <div key={mangaStats.mangaID}>
//             <h5>{mangaStats.rating.average}</h5>
//             <h6>{mangaStats.rating.follows}</h6>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
//   export default mangaStats;



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



// const qs = require("querystring");
// const http = require("https");

// const options = {
// 	"method": "POST",
// 	"hostname": "anilistmikilior1v1.p.rapidapi.com",
// 	"port": null,
// 	"path": "/createThread",
// 	"headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"X-RapidAPI-Key": "978b5edd6amsh41d5b48cd4cedf4p1aad2fjsn030c4a6b5b61",
// 		"X-RapidAPI-Host": "Anilistmikilior1V1.p.rapidapi.com",
// 		"useQueryString": true
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on("data", function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on("end", function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.write(qs.stringify({body: '<REQUIRED>', accessToken: '<REQUIRED>', title: '<REQUIRED>'}));
// req.end();




