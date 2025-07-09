import { useState } from "react"

export default function Ludogame()
{
    let[move , setMove] = useState({blue:0 , red:0, yellow:0, green:0});

    let incrBlue = () =>
    {
      move.blue += 1;
      console.log(`blue : ${move.blue}`)
      setMove((currMove) => {
        return {...currMove};
      })
    }

    let incrRed = () =>
    {
      move.red += 1;
      console.log(`red : ${move.red}`)
      setMove((currMove) => {
        return {...currMove};
      })
    }

    let incrYellow = () =>
    {
      move.yellow += 1;
      console.log(`yellow : ${move.yellow}`)
      setMove((currMove) => {
        return {...currMove};
      })
    }

    let incrGreen = () =>
    {
      move.green += 1;
      console.log(`green : ${move.green}`)
      setMove((currMove) => {
        return {...currMove};
      })
    }
    return(
        <>
        <h2> LudoGame! </h2>       
        <p> blue : {move.blue}</p>
        <button style={{backgroundColor : "blue"}} onClick={incrBlue}> +1 </button>
        <p> red : {move.red}</p>
        <button style={{backgroundColor : "red"}} onClick={incrRed}> +1 </button>
        <p> yellow : {move.yellow}</p>
        <button style={{backgroundColor : "yellow"}} onClick={incrYellow}> +1 </button>
        <p> green : {move.green}</p>
        <button style={{backgroundColor : "green"}} onClick={incrGreen}> +1 </button>
        </>
    )
}