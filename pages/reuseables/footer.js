const Footer = () => {
    return(
        <>
            <div className="footer py-5 mt-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <img src="/images/logo.png" className="img-fluid footer--logo" alt="logo"/>
                        <p>Address: 60-49 Road 11378 New York</p>
                        <p>Phone: +65 11.188.888</p>
                        <p>Email: hello@trybasket.com</p>
                    </div>
                    <div className="row border-top align-items-center">
                        <div className="col-md-6 pt-3">
                            <p>Copyright ©2023 All rights reserved | <b className="footer--tag">TryBasket Inc.</b></p>
                        </div>
                        <div className="col-md-6 text-end pt-3">
                            <img src="/images/payment-item.png" alt="payment" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;