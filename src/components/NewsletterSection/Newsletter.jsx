import './Newsletter.css'
const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-section_left">
                <svg viewBox="0 0 64 64" class="sc-fbPSWO jCQXa"><g fill-rule="evenodd" stroke="currentColor" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="20.8346" d="M7095 7523l142 58 2 386h-636l-3-386 144-58" transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="20.8346" d="M6603 7967l318-232 318 232" transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"></path><path fill="none" stroke-width="20.8346" d="M6603 7581l257 198M7239 7581l-259 197" transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="20.8346" d="M6746 7689v-273h348v276M6853 7474h193M6792 7541h254M6792 7608h254M6792 7675h254" transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"></path></g></svg>
                <ul>
                    <li>
                        <h2>
                            Newsletter
                        </h2>
                    </li>
                    <li>
                        <h3 className='gray'>
                            Subscribe now to get our latest blog posts.
                        </h3>
                    </li>
                </ul>
            </div>
            <form className="newsletter-section_right">
                <input type="text" name="" id="" placeholder="Your Email Address"  className='gray'/>
                <button>
                    Subscribe Now
                </button>
            </form>
        </section>
    )
}

export default Newsletter;