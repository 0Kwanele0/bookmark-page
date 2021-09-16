import './showcase.css'
import illustration from '../../images/illustration-hero.svg'
import BlueButton from '../BlueCutton/BlueButton'


function Showcase() {
    return (
        <div className="showcase">
            <div className="showcase__illustration">
                <img src={illustration} alt="hero illustration" />
            </div>
            <div className="showcase__text">
                <h3>A simple Bookmark Manager</h3>
                <p>A clean and simple interface to
                    organize your favourite websites.
                    Open a new browser tab and see
                    your sites load instantly.
                    Try it for free
                </p>
                <div className="showcase__btns">
                    <BlueButton textColor="rgb(233, 234, 236)" color="hsl(231, 69%, 60%)" text="Get it on Chrome" />
                    <BlueButton textColor="rgb(62, 63, 65)" color="rgba(221, 221, 221, 0.644)" text="Get it on Chrome" />
                </div>
            </div>
        </div>
    )
}

export default Showcase
