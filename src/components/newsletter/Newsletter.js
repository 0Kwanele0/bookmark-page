import './news.css'
import { useForm } from "react-hook-form";


function Newsletter() {
  const { register, handleSubmit } = useForm()
  function mySubmit(d) {
    console.log(d)
  }
    return (
      <div className="news">
        <h3>35,000+ already joined</h3>
        <h2>Stay up-to-date with what we're doing</h2>
        <form onSubmit={handleSubmit(mySubmit)}>
          <input required {...register("email")} className="news__input" type="email" />
          
          <button className="news__btn" type="submit">Contact Us</button>
        </form>
      </div>
    )
}

export default Newsletter
