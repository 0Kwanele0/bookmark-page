import './download.css'
import chrome from '../../images/logo-chrome.svg'
import fire from '../../images/logo-firefox.svg'
import opera from '../../images/logo-opera.svg'
import BlueButton from '../BlueCutton/BlueButton'

function Download() {
    return (
        <div className="download">
            <h2 className="dark sec-hearder">Download the extension</h2>
            <p className="light heading-para"> We've got more browsers in the pipeline.
                Please do let us know if
                you've got a favourite you'de like us to prioritize.
            </p>
            <div className="download__cards">
                {myBrowsers.map((item, key) => {
                    return(
                        <section key={key} className="download__card">
                            <img src={item.icon} alt="extension"/>
                            <h5 className="dark">{ item.call}</h5>
                            <p className="light">{item.version}</p>
                            <hr/>
                            <BlueButton text="Add & Install Extension" />
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Download

const myBrowsers = [
    {
        call: "Add to Chrome",
        version: "Minimum version 62",
        icon: chrome
    },
    {
        call: "Add to FireFox",
        version: "Minimum version 55",
        icon: fire
    },
    {
        call: "Add to Opera",
        version: "Minimum version 46",
        icon: opera
    },
]