
import Header from "../Header";
import Button from "../button/Button";
import './MainSection.css'
function MainSection() {
    
    const signupData = {
        clasName: 'signup btn',
        content:' Sign Up'
    }
    const searchData = {
        clasName:'search btn',
        content: 'Search Hotels'
    }

    return (
        <div className="main-section">
            <div className="main-section_left">
                <Header />
                <div className="main-section_body">
                    <h2>
                        <span className="dark_blue">
                            Find Perfect Hotels
                        </span>
                        <br />
                        <span className="light_blue">
                            anywhere you go.
                        </span>
                    </h2>
                    <p>
                        We've been in the hotels business across the world for 5 years now. We assure you that you will always enjoy your stay with us.
                    </p>
                    <div className="main-section_buttons">
                        <Button props={signupData} />
                        <Button props={searchData} />
                    </div>
                </div>
            </div>
            <div className="main-section_right">
                <img src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&width=1440&height=1024&q=75" alt="" />
            </div>
        </div>
    );
}

export default MainSection;
