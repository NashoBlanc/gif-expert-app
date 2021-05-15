import React, {useState}  from 'react';

export const GifGrid = ({ category}) => {

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/trending?q=Rick+and+Morty&limit=10&api_key=0s7Dc9iMNg3Dtt4WR3M3p5byoaLJlUqH';
        const res = await fetch(url);
        const {data} = await res.json();


        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    getGifs();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}