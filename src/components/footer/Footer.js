import './footer.css'
import logoe from '../../images/logo-bookmark.png'


function Footer() {
    return (
        <div className="footer">
            <div className="footer__con">
                <img className="footer__logo" src={ logoe } alt="logo" />
                <ul className="footer__menu">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <div className="footer__icons">
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png" alt="facebook"/>
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png" alt="twitter"/>
                </div>
            </div>
        </div>
    )
}

export default Footer
