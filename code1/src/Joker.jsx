import { useEffect, useState } from "react"

export default function Joker()
{
    let URL = "https://official-joke-api.appspot.com/random_joke"

    let[joke, setJoke] = useState({});
    
    const getJoke = async() => {
    let myJoke = await fetch(URL);
    // console.log(myJoke);
    let jsonJoke = await myJoke.json();
    console.log(jsonJoke);
    setJoke({setup : jsonJoke.setup , punchline : jsonJoke.punchline})
    }

    return(
        <>
           <h2> Joker! </h2>
           <p> {joke.setup}</p>
           <p> {joke.punchline}</p>
           <button onClick={getJoke}> getJoke </button>
        </>
    )
}