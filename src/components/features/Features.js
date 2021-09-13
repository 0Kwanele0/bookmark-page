import './features.css'
import illu from '../../images/illustration-features-tab-1.svg'

function Features() {
    return (
        <div className="features">
            <h3>Features</h3>
            <p>Our aim is to make it quick
                and easy for you to access
                your favourite websites.
                Your bookmarks sync between
                your devices so you can access
                them on the go.
            </p>
            <div className="features__menu">
                <h5>Simple Bookmarking</h5>
                <h5>Speedy Serching</h5>
                <h5>Easy sharing</h5>
            </div>
            <div className="features__feature">
                <img src={illu} alt="feature illustration" />
                <div className="features__des">
                    <h4>Bookmark in one click</h4>
                    <p>Organize your bookmarks however you click.
                        Our drag-and-drop interface gives you
                        complete control over how you manage your
                        favourite site.
                    </p>
                    <button>More info</button>
                </div>
            </div>
        </div>
    )
}

export default Features
