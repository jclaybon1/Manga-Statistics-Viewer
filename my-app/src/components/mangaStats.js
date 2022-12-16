import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './SearchManga.css';
import { Form, Card } from 'react-bootstrap';

var url = "https://api.mangadex.org/manga";
const imgURL = "https://mangadex.org/covers/";
// const title = "?title=";
// const limit = "&limit=";
// const includeCoverArt = "&includes[]=cover_art";
// const limitNum = 12;


// import React, { useState } from 'react';

export function Example() {
  // Declare a new state variable, which we'll call "count"
  const [search, setSearch] = useState(" ");
  const [mangas, setMangas] = useState([]);
//   const title = "?title=";
    // const limit = "&limit=";
    // const includeCoverArt = "&includes[]=cover_art";
    // const limitNum = 12;
  const baseUrl = 'https://api.mangadex.org';
//   const state ={value: ''};
  const state = useRef();

//   let requestHttp = url + title + search.trim() + limit + String(limitNum) + includeCoverArt;

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
        // console.log(resp1);
        let mangaResults = resp1.data.data.map((mangaResult) => {
            let fileName = mangaResult.relationships.find((relationship) => {
                return relationship.type === "cover_art";
            })?.attributes?.fileName;
            // let coverArt = mangaResult.relationships.find((relationship) => {
            //     return relationship.type === "cover_art";
            // });
            // console.log(fileName);
            let coverURL = imgURL + mangaResult.id + "/" + fileName + ".256.jpg";
            // console.log(coverURL);
            console.log(mangaResult.attributes.title);
            
            return { id: mangaResult.id, url: coverURL, manga: mangaResult, title: mangaResult.attributes.title.en, rating: "", follows: ""};
        });
        for (const x in mangaResults){
            // console.log(x.id);
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
        


        // return resp1;
        // const data = fetchData().toPromise();

        // console.log(data);
        

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
            {/* <Form.Control type="text" onChange={event => { setSearch(event.target.value);  }} ></Form.Control> */}
            <form onSubmit={handleSubmit}>                
            <label>
                <input type="text" ref={state}   />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <div className='list-container'>
                <div className='list'>
                    {
                        mangas.length ?
                            mangas.map(manga => {
                                // return (
                                //     // <Card className='list-card' key={manga.id}>
                                //     //     <Card.Img className="card-img"  src={manga.url}></Card.Img>
                                //     //     <Card.Title className='card-title'>{Object.values(manga.manga.attributes.title)[0] ? Object.values(manga.manga.attributes.title)[0] : "Error"}</Card.Title>
                                //     // </Card> 
                                // );
                                return(
                                    <div>
                                        <img src={manga.url}></img>
                                        <h4>{manga.title}</h4>
                                        <h4>rating: {manga.rating}</h4>
                                        <h4>follows: {manga.follows}</h4>

                                    </div>
                                )
                            }) :
                            <div>No Mangas Found.</div>
                    }
                </div>
            </div>

        </div >

        
     
    </div>


    // <div className='c-manga-search'>
    //     <Form.Control type="text" onChange={event => { setSearch(event.target.value);  }} ></Form.Control>
    // </div >

  );
}





   