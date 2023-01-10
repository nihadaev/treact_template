import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
 
    return(
        <footer className="footer">
            <ul className="footer-content">
                <li className="logo">
                    <img src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg" alt="" />
                    Treact
                </li>
                <li>
                    <ul className="footer-content_nav">
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Contact us</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Reviews</Link></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li><Link><svg fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path></svg></Link></li>
                        <li><Link><svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path></svg></Link></li>
                        <li><Link><svg fill="currentColor" viewBox="0 0 24 24"><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path></svg></Link></li>
                    </ul>
                </li>
                <li>
                    <h3>© Copyright 2020, Treact Inc. All Rights Reserved.</h3>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;