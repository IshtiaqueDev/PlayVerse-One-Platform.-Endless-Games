function FeatureGames(){
    let games=[
        {
            logo:"",
            title:"Tic-Tac-Toe",
            desc:"Classic, Simple, Addictive.",
            players:"2 Players"
        },
        {
            logo:"",
            title:"Chess",
            desc:"Think, Plan, Win.",
            players:"2 Players"

        },{
            logo:"",
            title:"Simon Says",
            desc:"Test your memory skills.",
            players:"2-4 Players"

        },{
            logo:"",
            title:"Rock Paper Scissors",
            desc:"Quick hands, Bigger wins.",
            players:"2 Players"

        }
    ]
    return(
        <>
        <h5>Play your favourite games and discover challenges</h5>
        <div className="games">
            <div className="row">
                <div className="col-sm-12">
                {
                games.map((el)=>(
                <div className="card">
                <div className="card-img">
                    <img src={el.logo} alt="" />
                </div>
                <div className="card-body">
                    <div className="card-title">
                    {el.title}
                    </div>
                    <div className="card-text">
                        {el.desc}
                        <br />
                        {el.players}
                    </div>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default FeatureGames