const includedTagNames = ['Action', 'Romance'];
const excludedTagNames = ['Harem'];

const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

let includedTagIDs, excludedTagIDs;

(async () => {
    const tags = await axios(`${baseUrl}/manga/tag`);

    // ['391b0423-d847-456f-aff0-8b0cfc03066b', '423e2eae-a7a2-4a8b-ac03-a8351462d71d']
    includedTagIDs = tags.data.data
                        .filter(tag => includedTagNames.includes(tag.attributes.name.en))
                        .map(tag => tag.id);

    // ['aafb99c1-7f60-43fa-b75f-fc9502ce29c7']
    excludedTagIDs = tags.data.data
                        .filter(tag => excludedTagNames.includes(tag.attributes.name.en))
                        .map(tag => tag.id);
});

(async () => {
    const resp = await axios({
        method: 'GET',
        url: `${baseUrl}/manga`,
        params: {
            'includedTags': includedTagIDs,
            'excludedTags': excludedTagIDs
        }
    });

    console.log(resp.data.data.map(manga => manga.id));
})();