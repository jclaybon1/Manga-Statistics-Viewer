const mangaID = 'bbdaa3a3-ea49-4f12-9e1c-baa452f0830d';
const status = 'reading';
const sessionToken = 'somesessiontoken';
const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

(async () => {
    const resp = await axios({
        method: 'POST',
        url: `${baseUrl}/manga/${mangaID}/status`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`
        },
        data: {
            status: status
        }
    });

    console.log(resp.data.result);
})();