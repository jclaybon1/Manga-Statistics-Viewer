import React from 'react';
import PropTypes from 'prop-types';

getChapterList.PropTypes = {
    chapterList: PropTypes.array,
};
getChapterList.defaultProps = {
    chapterList: [],
};

function getChapterList(props){
    const {stats} = props;
    return(
        <div>
            <ul className='post-list'>
                {stats.map(manga=>(
                    <li key={post.id}>{post.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default getMangaStats;