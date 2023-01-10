import './InfoSection.css'
const InfoSection = () => {

    return (
        <section className="info-section">
            <div className="info-section_left">
                <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" alt="" />
            </div>
            <div className="info-section_right">
                <h2 className='dark_blue'>
                    We have the best service.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul>
                    <li>
                        <span className="light_blue">192</span>
                        <span className="black">Countries</span>
                    </li>
                    <li>
                        <span className="light_blue">479</span>
                        <span className="black">Hotels</span>
                    </li>
                    <li>
                        <span className="light_blue">2093</span>
                        <span className="black">Rooms</span>
                    </li>
                    <li>
                        <span className="light_blue">10347</span>
                        <span className="black">Workers</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default InfoSection;