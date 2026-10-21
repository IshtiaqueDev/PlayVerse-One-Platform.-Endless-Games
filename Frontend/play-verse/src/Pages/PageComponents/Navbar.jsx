function Navbar(){
    return(
    <>
    <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav>
                        <div className="logo">
                            <i className="fa-solid fa-gamepad"></i>
                            Play <span style={{ color: "#268BFF" }}>Verse</span>
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>Games</li>
                            <li>Leaderbaord</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>
                                <div className="btn btn-warning">
                                    Login/Signup
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </>
    )
}

export default Navbar;