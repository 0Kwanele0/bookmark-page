import './news.css'
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';


function Newsletter() {
  const [saved, setsaved] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  function mySubmit(d) {
    console.log(d)
    setsaved(true)
    setTimeout(()=>{setsaved(false)}, 2000)
  }
  useEffect(() => {
    if (saved) {
      reset()
    }
  },[reset, saved])
    return (
      <div className="news">
        <h3>35,000+ already joined</h3>
        <h2>Stay up-to-date with what we're doing</h2>
        <form onSubmit={handleSubmit(mySubmit)}>
          <input placeholder="Enter your Email...." required {...register("email")} className="news__input" type="email" />
          <button style={saved ?{backgroundColor: "rgb(91, 33, 199)" } : {backgroundColor: "hsl(0, 94%, 66%)" } } className="news__btn" type="submit">{ saved ? "Thank you" : "Contact Us"}</button>
        </form>
      </div>
    )
}

export default Newsletter
