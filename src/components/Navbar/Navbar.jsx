import { NavHashLink } from 'react-router-hash-link';
import rideOnLogo from './../../assets/images/rideon247-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-white h-20 flex justify-center fixed w-full'>
      <div className='flex justify-between items-center w-[90%] max-w-[1200px] mx-auto'>
        <div>
          <Link to="/">
            <img src={rideOnLogo} alt="RideOn247" />
          </Link>
        </div>
        <div>
          <ul className='flex items-center'>
            <li className='mr-11 hover:underline decoration-primary underline-offset-2 decoration-2'><NavHashLink to="#home" smooth>Home</NavHashLink></li>
            <li className='mr-11 hover:underline decoration-primary underline-offset-2 decoration-2'><NavHashLink to="#about" smooth>About</NavHashLink></li>
            <li className='mr-11 hover:underline decoration-primary underline-offset-2 decoration-2'><NavHashLink to="#features" smooth>Features</NavHashLink></li>
            <li className='mr-11 hover:underline decoration-primary underline-offset-2 decoration-2'><NavHashLink to="#contact" smooth>Contact</NavHashLink></li>
            <li><button className='bg-primary rounded px-3 py-2 text-sm font-semibold'>Download Now</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
