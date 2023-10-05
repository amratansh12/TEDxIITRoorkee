import './Navbar.css';

export default function Navbar(){
    return(
        <div className="nav-primary">
            <h2>TEDxIITRoorkee</h2>

            <div className="options">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    );
}