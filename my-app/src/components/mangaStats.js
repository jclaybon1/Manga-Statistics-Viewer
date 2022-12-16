import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './mangaStats.css';

export function getChapters(){

}



// 


export function Search() {
  const [search, setSearch] = useState(" ");
  const [mangas, setMangas] = useState([]);

  const baseUrl = 'https://api.mangadex.org';
  const imgURL = "https://mangadex.org/covers/";
  const state = useRef();


  useEffect( () => {
    // alert(search);
    const fetchData = async () => {
        // alert(search);
        const resp1 = await axios({
            method: 'GET',
            url: `${baseUrl}/manga`,
            params: {
                title: search,
                limit: 12,
                "includes[]": 'cover_art'

            }
        });     
        let mangaResults = resp1.data.data.map((mangaResult) => {
            let fileName = mangaResult.relationships.find((relationship) => {
                return relationship.type === "cover_art";
            })?.attributes?.fileName;
            
            let coverURL = imgURL + mangaResult.id + "/" + fileName + ".256.jpg";
            
            return { id: mangaResult.id, url: coverURL, manga: mangaResult, title: mangaResult.attributes.title.en, rating: "", follows: ""};
        });
        for (const x in mangaResults){
            const resp = await axios({
                method: 'GET',
                url: `${baseUrl}/statistics/manga/${mangaResults[x].id}`
            });
        
            const { rating, follows } = resp.data.statistics[mangaResults[x].id];
            console.log(
                'Mean Rating:', rating.average, '\n' +
                'Bayesian Rating:', rating.bayesian, '\n' +
                'Follows:', follows
            );

            mangaResults[x].rating = rating.average;
            mangaResults[x].follows = follows;

            
        }

        setMangas(mangaResults);
        console.log(mangas);
        

    }
    fetchData();
  
}, [search]);


    function handleSubmit(event){
        setSearch(state.current.value);
        event.preventDefault();
    }


  return (

       
    <div>
        <div className='c-manga-search'>
            <form onSubmit={handleSubmit} id="searchForm">                
                <label>
                <h4>Enter Manga Title Here:</h4>
                <input type="text" ref={state}   />
                </label>
                <input type="submit" value="Search for Manga..." id="inputSearch" />
            </form>
            <div className='list-container'>
                <div className='list'>
                    {
                        mangas.length ?
                            mangas.map(manga => {
                                
                                return(
                                    <div>
                                        <img src={manga.url}></img>
                                        <h4>{manga.title}</h4>
                                        <h4>rating: {manga.rating}</h4>
                                        <h4>follows: {manga.follows}</h4>

                                    </div>
                                )
                            }) :
                            <div id="noneFound">No Mangas Found.</div>
                    }
                </div>
            </div>
        </div >

        
     
    </div>

  );
}






    