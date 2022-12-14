// import axios from "axios";
// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";

function getManga(){
    const [post, setPost] = useState([]);
    

    useEffect(() => {
        const mangaID = '0301208d-258a-444a-8ef7-66e433d801b1';

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
      }, []);

      return (
        <div>
          Users
          {post.map((item, i) => {
            return (
              <div key={i}>
                <p>{item?.name}</p>
              </div>
            );
          })}
        </div>
      );
}


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





