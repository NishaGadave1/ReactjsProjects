import { useState } from "react"

export default function Commentform({newComment})
{
    let[comment , setComment] = useState({
        username : "Ketki",
        remark : "excellent",
        rating : 7
    });

    function handleDefault(event)
    {
     event.preventDefault();   
     console.log(comment)
     newComment(comment)
    }

    function handleSubmit(event)
    {
     let fieldName = event.target.name;
     let newVal = event.target.value;
     setComment((currVal) =>{
      currVal[fieldName] = newVal;
      return{...currVal}
     })
    }

    return(
        <>
        <h2> Commentform! </h2>
        <form onSubmit={handleDefault}>
            <input placeholder="Enter username" type="text" name="username"
            value={comment.username} onChange={handleSubmit}/>
            <br></br>
            <br></br>
            <textarea placeholder="Enter remark" type="text" name="remark"
            value={comment.remark} onChange={handleSubmit}/>
            <br></br>
            <input placeholder="rating" min={2} max={10} type="number" name="rating"
            value={comment.rating} onChange={handleSubmit}/>
            <br></br>
            <button onClick={handleSubmit}> Submit </button>
        </form>
        </>
    )
}