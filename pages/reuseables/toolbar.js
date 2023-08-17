import Link from 'next/link';
const ToolBar = () => {
    return(
        <>
        <div className="navigation">
                <nav className="navbar navbar-expand-md fixed-top d-none d-lg-block" style={{
                backgroundColor: '#f5f5f5'
                }}> 
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-dark"></span>
                        </button>
                        <a className="navbar-brand" href="#"></a>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link text-dark"><i className="fa fa-envelope"/> hello@trybasket.com</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">|</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" >Free Shipping for all Order above ₹299</a>
                            </li>
                            
                        </ul>
                        <form className="d-flex flex-end ms-auto" role="search">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#"> <i className="fa fa-facebook"/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#"> <i className="fa fa-twitter"/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#"> <i className="fa fa-linkedin"/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark"> <i className="fa fa-pinterest"/></a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" href="/authentication/login" as="/login"><i className="fa fa-user"/> Login</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">|</a>
                                </li>
                                <li className="nav-item">
                                <Link href="/authentication/register" as="/register" className="nav-link text-dark">
                                    <i className="fa fa-user-plus" /> Register
                                </Link>
                                </li>
                            </ul>
                        </form>
                        </div>
                    </div>
                </nav>
                </div>
        </>
    )
}
export default ToolBar;