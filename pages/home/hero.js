const Banner = () =>{
    return(
        <>
            <div className="banner py-5">
                    <div className="container">
                        <div className="row banner__row align-items-center">
                            <div className=" col-sm-12 col-md-6 banner__texts">
                                <h1 className="banner__texts--title">Professional</h1>
                                <h2 className="banner__texts--subtitle">DRONE <br/>SERVICES</h2>
                                <p className="banner__texts--text">Suspendisse tincidunt ornare sem, at venenatis lorem tempor vel.
                                Sed feugiat sit amet nisi non dignissim. Duis egestas augue at nisi pharetra porta.</p>
                                <button className="banner__texts--btn">Order Now</button>
                            </div>
                            <div className="col-sm-12 col-md-6 banner__image">
                                <img src="/images/drone5.png" className="img-fluid banner__image--img"/> 
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    )
}
export default Banner