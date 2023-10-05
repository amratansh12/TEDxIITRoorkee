import './LandingPage.css';

export default function LandingPage(){
    return(
        <div className="landing-primary">
            <div className="heading">
                <h1 className='first'>TEDxIITRoorkee</h1>
                <h1 className='second'>Beyond the Barriers</h1>
            </div>

            <div className="gallery">
                <div className="gallery-content">
                    <p>At the core of our mission lies the belief that "Beyond the Barriers" lies a world of limitless potential. TEDx is a platform where these transformative ideas find their voice, inspiring innovation and sparking conversations that transcend limitations. From technology to art, science to social issues, we curate a diverse spectrum of talks that challenge boundaries. Join us in the pursuit of knowledge, inspiration, and the endless possibilities that emerge when we dare to go beyond the barriers. Together, we can shape a brighter, more inclusive future.</p>
                    <a href="https://www.ted.com/participate/organize-a-local-tedx-event" target='_blank'><button>Become an Organiser</button></a>
                </div>
                <div className="gallery-images">
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2021/07/GettyImages-1301065105-H-2021.jpg" alt="img1" />
                    <img src="https://masterclass.ted.com/static/4ec0a4b5c98da46bb6843cca8d33b744/ee604/TEDSpeakeronstage.png" alt="img2" />
                    <img src="https://learn.g2.com/hubfs/TED-talk-2016.jpg" alt="img3" />
                </div>
            </div>
        </div>
    );
}