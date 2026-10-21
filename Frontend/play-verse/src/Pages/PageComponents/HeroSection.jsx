import heroImage from "../../Pages/neon.png";

function HeroSection(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <h2>One Patform. <br></br>
                <span>Endless Games.</span>
                </h2>
                <p>Playverse is your ultimate destination for classic and modern games. 
                    Challenge your friends, compete with players worlwide, and climb the leaderbaords.
                    It's not just a game - it's a community.
                </p>
                <div className="buttons">
                <button>Explore Games</button>
                <button>How it works</button>
                </div>
                </div>
                <div className="col-md-6">
                <img src={heroImage} alt="PlayVerse neon gaming controller" />
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection;