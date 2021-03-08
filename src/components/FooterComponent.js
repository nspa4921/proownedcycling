import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';


function Footer() {
    return(
    <div className="footer">
         <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand className="navbarTop">
                    <div class="container">
                        <ul class="site-footer__block__links">
                            <li><a href="/collections/shop-news">Shop News</a></li>
                            <li><a href="/collections/popular">Popular</a></li>
                            <li><a href="/pages/teams">Teams</a></li>
                            <li><a href="/pages/brands">Brands</a></li>
                        </ul>
                    </div>
                </NavbarBrand>
            </div>
        </Navbar>
        <div className="container">
            <div className="row" align="left">   
            <div className="col-3">
                    <h5>Company Info</h5>
                    <address>
                    <ul className="list">
                    <li>ProOwned ApS</li>
                    <li>Kirstinehoj 14</li>
                    <li>2770 Kastrup</li>
                    <li>Denmark</li>
                    </ul>
                    <br></br>

                    <div>
                    <strong>VAT numbers:</strong>
                    <ul className="list">
                    <li>DK37366536</li>
                    <li>GB369929918</li>
                    </ul>
                    </div>

                    <br></br>
                    <div>
                    <ul className="list">
                    <strong>Support hours: (CEST)</strong>
                    <li>Monday to thursday: 10:00 - 18:00</li>
                    <li>Friday: 10:00 - 16:00</li>
                    <li>Weekend: Closed</li>
                    </ul>
                    </div>
                    </address>
                </div>

                <div className="col-3 ">
                    <h5>Customer service</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Sizeguide</Link></li>
                        <li><Link to='#'>Delivery</Link></li>
                        <li><Link to='#'>Payment</Link></li>
                        <li><Link to='#'>Returns</Link></li>
                        <li><Link to='#'>Privacy Policy</Link></li>
                        <li><Link to='#'>Terms</Link></li>
                        <li><Link to='#'>FAQ</Link></li>
                        <li><Link to='#'>Contact Us</Link></li>
                    </ul>
                </div>
                
                <div className="col-3">
                    <h5>Quick links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='#'>Sizeguide</Link></li>
                        <li><Link to='#'>The concept </Link></li>
                        <li><Link to='#'>Articles & guides</Link></li>
                        <li><Link to='#'>Newsletter</Link></li>
                        <li><Link to='#'>Gift card</Link></li>
                        <li><Link to='#'>Brexit 2021</Link></li>
                        <li><Link to='#'>Careers</Link></li>

                    </ul>
                </div>
                <div className=" col-sm-3">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© 2021 ProOwnedCycling.dk</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;