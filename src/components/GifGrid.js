import React from 'react'

export const GifGrid = ({ category }) => {
    const getGifs = async () => {
        const api_key = "0tvd5dyESMawJWm3Sf8qRu19SV2ozR91";
        const url = "https://api.giphy.com/v1/gifs/search?api_key=0tvd5dyESMawJWm3Sf8qRu19SV2ozR91&q=Rick and Morty&limit=10";
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        })
        console.log(data);
    };
    getGifs();
    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
