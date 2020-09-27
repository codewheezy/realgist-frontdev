import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
    <footer className="site-footer p-t-md p-md">
		<div className="wrapper">
			<p className="fs-i m-sm">All articles written with ❤ by <Link to="#">Chinazo Ibe</Link></p>
			<nav id="site-footer-nav" className="site-footer-nav m-sm no-ul">
				<ul className="nav">
					<li className="nav-home"><Link to="/home">Home</Link></li>
					<li className="nav-your-saved-article"><Link to="#">Your Saved Articles</Link></li>
					<li className="nav-subscribe"><Link to="/subscribe">Subscribe</Link></li>
				</ul>
			</nav>
		</div>
	</footer>
    );
}

export default Footer;