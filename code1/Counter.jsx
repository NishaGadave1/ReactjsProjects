import { useState } from "react"

export default function Counter()
{
    let[count, setCount] = useState(0);

    function incrCount()
    {
    setCount(count+1)
    }
    return(
        <>
        <p> Count : {count}</p>
        <button style={{backgroundColor : "blue"}} onClick={incrCount}> +1 </button>
        </>
    )
}