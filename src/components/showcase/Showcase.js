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
                    <BlueButton text="Get it on Chrome" />
                    <button>Get it on Firefox</button>
                </div>
            </div>
        </div>
    )
}

export default Showcase
