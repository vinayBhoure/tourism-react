import React, { useState, useEffect } from "react";
import logo from "../images/arabian-ark-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Header.css";
import { useCurrentUserQuery } from "../api/query/auth";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useLogoutMutation } from "../api/mutation/auth";
import { useUserContext } from "../context/userContext";


const UserAccount = () => {

	const {authUser, logoutUser} = useUserContext();
	// const logoutMutation = useLogoutMutation()

	return ( <div>
		{
			authUser ? (<li style={{
				display: 'flex',
				gap: '6px',
				alignItems: 'center'
			}}>
				<span className="fw-bold" style={{ fontSize: '13px', textTransform: 'uppercase' }}>{authUser.name}</span>
				<button
					onClick={logoutUser}
					style={{
						background: 'transparent'
					}}
				>
					<FontAwesomeIcon icon={faRightFromBracket} />
				</button>
			</li>) :
			(<div className="d-flex">
				<li>
					<Link to='/login'><button className="header-button--login">LOGIN</button></Link>
				</li>
				<li>
					<Link to='/signup'><button className="header-button--signup">SIGN UP</button></Link>
				</li>
			</div>)
		}
	</div>)
}

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);


	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header_inner">
					<div className="logo">
						<img src={logo} alt="Logo" />
					</div>
					<nav className={`main_nav ${showMenu ? "show" : ""}`}>
						<ul>
							<li>
								<Link to="/">HOME</Link>
							</li>
							<li>
								<Link to="/packages">PACKAGES</Link>
							</li>
							<li>
								<Link to="/attractions">ATTRACTIONS</Link>
							</li>
							{/* <li>
								<Link to="/mice">MICE</Link>
							</li> */}
							<li>
								<Link to="/vehiclefleet">VEHICLE FLEET</Link>
							</li>
							<li>
								<Link to="/about">ABOUT US</Link>
							</li>
							<li>
								<Link to="/contact">CONTACT</Link>
							</li>
							<UserAccount />
						</ul>
					</nav>
					<div className="hamburger" onClick={toggleMenu}>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
