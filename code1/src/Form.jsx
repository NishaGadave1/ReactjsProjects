import { useState } from "react"
import "./Form.css"
import Commentform from "./Commentform";
export default function Form()
{
    let[form , setForm] = useState([{
        username : "Rahul",
        remark : "good",
        rating : 4
    }])

    function handleDefault(event)
    {
     event.preventDefault();
    }

    let addNewComment =(myComment) => {
      setForm((currVal) => {
       return [...currVal , myComment]
      })
    }

    return(
        <>
        <h2> Form! </h2>
        <div>
        { form.map((cmt, idx) => (  
        <div className="myForm" key={idx}>
        <form onSubmit={handleDefault}>
            <span> {cmt.remark}</span>
            &nbsp;
            &nbsp;
            <span> rating : {cmt.rating}</span>
            <p> -{cmt.username}</p>
        </form>
        </div>))
        }
        </div>
        <hr></hr>
        <Commentform newComment={addNewComment}/>
        </>
    )
}