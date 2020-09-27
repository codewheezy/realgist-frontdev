import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';

// components 
import DialogNav from './dialog_nav';

const Header = () => {
	const [menu, handleMenu] = useState(false);

	const openModalHandler = () => {
		handleMenu(true)
	}

	const closeModalHandler = () => {
		handleMenu(false)
	}

    return (
	<Fragment>
		<header className="site-header">
			<div className="header wrapper">
				<button className="menuButton no-btn" onClick={() => openModalHandler()}>
					<span className="sr-only">Open Site Navigation</span>
					<svg style={{ width: 14, height: 11 }} viewBox="0 0 14 10" className="fill" fill="#26292c" aria-hidden="true">
						<rect width="14" height="2"></rect>
						<rect width="14" height="2" y="4"></rect>
						<rect width="14" height="2" y="8"></rect>
					</svg>
				</button>
				<h1 className="site-title">
					<Link to="/home" className="no-ul">
						<span className="sr-only">realgist</span>
						<img className='logo' src={require('../assets/image/logo.png')} alt="realgist" />
					</Link>
				</h1>
				<Link className="site_search_open" to="/search">
					<span className="sr-only">Open Site Navigation</span>
					<svg style={{ width: 12, height: 12 }} viewBox="0 0 12 12">
						<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g className="fill" transform="translate(-1089.000000, -28.000000)" fill="#26292c">
								<g transform="translate(0.000000, 24.000000)">
									<path d="M1100.8061,14.9012567 L1098.60862,12.7037702 C1099.36266,11.7342908 1099.77199,10.5709156 1099.77199,9.38599641 C1099.77199,6.41292639 1097.35907,4 1094.386,4 C1091.41293,4 1089,6.41292639 1089,9.38599641 C1089,12.3590664 1091.41293,14.7719928 1094.386,14.7719928 C1095.59246,14.7719928 1096.77738,14.3626571 1097.70377,13.6086176 L1099.90126,15.8061041 C1100.03052,15.935368 1100.18133,16 1100.35368,16 C1100.52603,16 1100.67684,15.935368 1100.8061,15.8061041 C1101.06463,15.5475763 1101.06463,15.1597846 1100.8061,14.9012567 Z M1098.47935,9.40754039 C1098.47935,11.6696589 1096.64811,13.5008977 1094.386,13.5008977 C1092.12388,13.5008977 1090.29264,11.6696589 1090.29264,9.40754039 C1090.29264,7.1454219 1092.12388,5.31418312 1094.386,5.31418312 C1096.64811,5.31418312 1098.47935,7.1454219 1098.47935,9.40754039 Z"></path>
								</g>
							</g>
						</g>
					</svg>
				</Link>
			</div>
		</header>
		{ menu ? <DialogNav close={() => closeModalHandler()} /> : null }
	</Fragment>
    );
}

export default Header;