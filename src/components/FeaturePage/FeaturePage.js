import './FeaturePage.css';

export default function FeaturePage(){
    return(
        <>
        <div className="featurepage-primary">
            <div className="headings">
                <h2>Featuring...</h2>
                <p>Welcome to our Feature Page, where we shine a spotlight on thought-provoking TEDx talks that inspire and captivate. In this edition, we present Anubhav Singh Bassi, a charismatic speaker whose TEDx talk, titled "Putting Everyday Life on Trial," challenges us to view the mundane through a fresh lens. With wit and wisdom, Bassi delves into the intricacies of our daily experiences, turning them into moments of reflection and transformation. Join us on this engaging journey as we explore the extraordinary in the ordinary with Anubhav Singh Bassi's enlightening talk. Prepare to see your everyday life in a whole new light.</p>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LKPD_a4xd7M?si=EpxSKUZgU3W7CMbz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        </div>
        </>
    );
}