import { useEffect, useRef, useState } from 'react'
import './faq.css'
import gsap from "gsap";

function Faq() {

    return (
        <div className="faq">
            <h2 className="sec-hearder">Frequently Asked Questions</h2>
            <p className="heading-para light">Here are some of our FAQs. If you have any other Questions
                you'd like us to answer please feel free to email us.
            </p>
            {myList.map((item, key) => {
                return (
                <EachFaq key={key} myQuestion={item.myQuestion} myAnswer={item.myAnswer} />
                )
            })}
        </div>
    )
}

export default Faq



function EachFaq({myQuestion, myAnswer}) {
    const question = useRef()
    const para = useRef()
    const [open, setopen] = useState(false)

    function view() {
     setopen(!open)
    }

    useEffect(() => {
        if (open) {
            para.current.style.display = "block"
            gsap.from(para.current, 0.5, {
                display:"none",
                opacity: 0,
                y: -40,
                ease: "slow(0.7, 0.7, false)"
            })
        } else {
            para.current.style.display = "none"
            
        }
    }, [view, open])
    
    return (
        <div className="faq__question">
            <div onClick={view} ref={question} className="q">
                <h4 className="dark">{ myQuestion}</h4>
                <img alt="dropdown" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-down-arrows-those-icons-fill-those-icons-1.png"/>
            </div>
            <p ref={para} className="light">{ myAnswer}</p>
        </div>
    )
}



const myList = [
    {
        myQuestion: "What is a bookmark?",
        myAnswer: `The standard chunk of Lorem Ipsum used since
                    the 1500s is reproduced below from "de Finibus Bonorum
                    et Malorum" by Cicero are also reproduced in their
                    exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham.`
    },
    {
        myQuestion: "How can i request a new browser?",
        myAnswer: `The standard chunk of Lorem Ipsum used since
                    the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
                    et Malorum" by Cicero are also reproduced in their
                    exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham.`
    },
    {
        myQuestion: "Is there a mobile app?",
        myAnswer: `The standard chunk of Lorem Ipsum used since
                    the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
                    et Malorum" by Cicero are also reproduced in their
                    exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham.`
    },
    {
        myQuestion: "What about other Chromium browsers?",
        myAnswer: `The standard chunk of Lorem Ipsum used since
                    the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
                    et Malorum" by Cicero are also reproduced in their
                    exact original form, accompanied by English versions
                    from the 1914 translation by H. Rackham.`
    },
    
]