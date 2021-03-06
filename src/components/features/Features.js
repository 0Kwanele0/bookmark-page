import { useState, useRef, useEffect } from 'react'
import './features.css'
import illu from '../../images/illustration-features-tab-1.svg'
import illu2 from '../../images/illustration-features-tab-2.svg'
import illu3 from '../../images/illustration-features-tab-3.svg'
import BlueButton from '../BlueCutton/BlueButton'
import gsap from 'gsap'

function Features() {
    const [one, setone] = useState(true)
    const [two, settwo] = useState(false)
    const [three, setthree] = useState(false)
    const oneRef = useRef()
    const twoRef = useRef()
    const threeRef = useRef()

    function changeOne() {
        setone(true)
        settwo(false)
        setthree(false)
    }
    function changeTwo() {
        settwo(true)
        setone(false)
        setthree(false)
    }
    function changeThree() {
        setthree(true)
        setone(false)
        settwo(false)
    }
    useEffect(() => {
        if (one) {
            oneRef.current.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
        } else {
            oneRef.current.style.borderBottom = "none"
        }
        if (two) {
            twoRef.current.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
        } else {
            twoRef.current.style.borderBottom = "none"
        }
        if (three) {
            threeRef.current.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
        } else {
            threeRef.current.style.borderBottom = "none"
        }
    }, [one, two, three])

    return (
        <div className="features">
            <h3 className="sec-hearder">Features</h3>
            <p>Our aim is to make it quick
                and easy for you to access
                your favourite websites.
                Your bookmarks sync between
                your devices so you can access
                them on the go.
            </p>
            <div className="features__menu">
                <h5 ref={oneRef} onClick={changeOne}>Simple Bookmarking</h5>
                <h5 ref={twoRef} onClick={changeTwo}>Speedy Serching</h5>
                <h5 ref={threeRef} onClick={changeThree}>Easy sharing</h5>
            </div>
            {one && <One />}
            {two && <Two />}
            {three && <Three />}
        </div>
    )
}

export default Features

function One() {
    const [load1, setLoad1] = useState(false)
    const mydiv = useRef()

    function loads() {
        setLoad1(true)
        gsap.to(mydiv.current, 2, {
            opacity: 1,
            ease: "expo"
        })
        
    }
    return (
        <div ref={mydiv} className="features__feature">
            <img onLoad={loads} src={illu} alt="feature illustration" />
            {load1 && <div className="features__des">
                <h4>Bookmark in one click</h4>
                <p>Organize your bookmarks however you click.
                    Our drag-and-drop interface gives you
                    complete control over how you manage your
                    favourite site.
                </p>
                <BlueButton textColor="rgb(233, 234, 236)" color="hsl(231, 69%, 60%)" text="More Info" />
            </div>}
        </div>
    )
}
function Two() {
    const [load2, setLoad2] = useState(false)
    const mydiv = useRef()

    function loads() {
        setLoad2(true)
        gsap.to(mydiv.current, 2, {
            opacity: 1,
            ease: "expo"
        })
    }

    return (
        <div ref={mydiv} className="features__feature">
            <img onLoad={loads} src={illu2} alt="feature illustration" />
            {load2 && <div className="features__des">
                <h4>Inteligent Search</h4>
                <p>Our powerful search feature will
                    help you find your sites in no time at all.
                    No need to trawl through all your bookmarks.
                </p>
                <BlueButton textColor="rgb(233, 234, 236)" color="hsl(231, 69%, 60%)" text="More Info" />
            </div>}
        </div>
    )
}
function Three() {
    const [load3, setLoad3] = useState(false)
    const mydiv = useRef()


    function loads() {
        setLoad3(true)
        gsap.to(mydiv.current, 2, {
            opacity: 1,
            ease: "expo",
        })
    }
    

    return (
        <div ref={mydiv} className="features__feature">
            <img onLoad={loads} src={illu3} alt="feature illustration" />
            {load3 && <div className="features__des">
                <h4>Share your bookmarks</h4>
                <p>Easily share your bookmarks and collections with others.
                    Create a sharable link that you can share at a click of a button.
                </p>
                <BlueButton textColor="rgb(233, 234, 236)" color="hsl(231, 69%, 60%)" text="More Info" />
            </div>}
        </div>
    )
}
