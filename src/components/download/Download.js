import './download.css'
import chrome from '../../images/logo-chrome.svg'
import fire from '../../images/logo-firefox.svg'
import opera from '../../images/logo-opera.svg'

function Download() {
    return (
        <div className="download">
            <h2 className="dark sec-hearder">Download the extension</h2>
            <p className="light heading-para"> We've got more browsers in the pipeline.
                Please do let us know if
                you've got a favourite you'de like us to prioritize.
            </p>
            <div className="download__cards">
                <section className="download__card">
                    <img src={chrome} alt="extension"/>
                    <h5 className="dark">Add to Chrome</h5>
                    <p className="light">Minimum version 62</p>
                    <br/>
                    <button>Add & Install Extension</button>
                </section>
                <section className="download__card">
                    <img src={fire} alt="extension"/>
                    <h5 className="dark">Add to Firefox</h5>
                    <p className="light">Minimum version 55</p>
                    <br/>
                    <button>Add & Install Extension</button>
                </section>
                <section className="download__card">
                    <img src={opera} alt="extension"/>
                    <h5 className="dark">Add to Opera</h5>
                    <p className="light">Minimum version 46</p>
                    <br/>
                    <button>Add & Install Extension</button>
                </section>
            </div>
        </div>
    )
}

export default Download
