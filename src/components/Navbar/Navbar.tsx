import "./Navbar.css";
import logo from '../../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";

function Navbar() {

	const [openMenu, setOpenMenu] = useState(false);

	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	}

	return (
		<>
		<MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
			<nav className="nav-wrapper">
				<div className="nav-content">
					<img className="logo" src={logo} alt="Logo" />
					<ul>
						<li>
							<a className="menu-item">Home</a>
						</li>
						<li>
							<a className="menu-item">Skills</a>
						</li>
						<li>
							<a className="menu-item">Work Experience</a>
						</li>
						<li className="menu-item">
							<a href="#" className="custom-button">
								<span className="start-icon"><DownloadIcon /></span>
								Download CV
							</a>
						</li>
						<li className="menu-item">
							<a href="#" className="custom-button">
								<span className="start-icon"><EmailIcon /></span>
								Contact me
							</a>
						</li>
					</ul>
					<button className="menu-btn" onClick={toggleMenu}>
						<span>
							{openMenu ?"close" : "menu"}
							<MenuIcon />
						</span>
					</button>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
