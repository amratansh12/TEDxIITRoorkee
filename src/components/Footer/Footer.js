import './Footer.css'

export default function Footer(){
    return(
        <>
        <div className="footer-primary">
            <div className="links">
                <h2>Connect with us</h2>
                <ul>
                    <a href="https://instagram.com/tedxiitroorkee?igshid=NTc4MTIwNjQ2YQ==" target='_blank'><li>Instagram</li></a>
                    <a href="https://twitter.com/dx_iit/status/1178682907130384386" target='_blank'><li>Twitter</li></a>
                    <a href="https://www.facebook.com/tedxiitr/" target='_blank'><li>Facebook</li></a>
                </ul>
            </div>

            <div className="description">
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet sequi ipsam harum, fugit illum asperiores atque esse! Veniam, voluptatibus!</p>
            </div>

            <div className="photo">
                <img src="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/327173286_537238611805117_1147303419981609496_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=sRP9yUR0azMAX_Xm0uo&_nc_ht=scontent.fdel29-1.fna&oh=00_AfCxN2ERRvJ95QKksbPdwEjxoyJo-qIy030jQwXWVySRKA&oe=6524C1EC" alt="logo" />
            </div>
        </div>

        <div className="copyright-section">
        This website is copyrighted and patented under TEDxIITRoorkee.
        </div>
        </>
    );
}