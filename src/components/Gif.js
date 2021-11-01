import React from "react";
import { useEffect, useState } from "react";

function Gif() {
    // API info
    const apiKey = 'lNDWSK0J8mV6kyxYRjRbhtVqquO0kQca'
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    // State to hold API data
    const [giph, setGiph] = useState(null);
    // Function to fetch
    const getGiph = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setGiph(data);
    };
    // useEffect to run getGiph when component mounts
        useEffect(() => {
        getGiph();
    })

    return (
            <div>
                <img src={giph.data.url} alt=''/>
            </div>
        )
};


export default Gif;