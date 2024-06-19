import './MobileNav.css';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

interface MobileNavProps {
	isOpen: boolean;
	toggleMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleMenu }) => {
	return (
		<div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>

			<div className='mobile-menu-container'>
				<img className='logo' src='./assets/images/logo.png' alt='' />
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
			</div>
		</div>
	);
}

export default MobileNav;
