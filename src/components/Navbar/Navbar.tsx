import "./Navbar.css"
import logo from '../../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <>
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
          </ul>
          <button className="menu-btn">
            <span>
                <MenuIcon />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
