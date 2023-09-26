import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Navbar = () => {
  const navRef = useRef();
  const togglerRef = useRef();

  const handleOpenNav = () => {
    const navClassList = navRef.current.classList;
    const togglerClassList = togglerRef.current.classList;

    if(navClassList.contains("translate-x-full")){
      navClassList.remove("translate-x-full")
      togglerClassList.add("rotate-90")
    } else {
      navClassList.add("translate-x-full")
      togglerClassList.remove("rotate-90")
    }
    console.log(togglerRef)
  }

  return (
    <nav className='bg-white shadow h-20 flex justify-center fixed w-full z-50'>
      <div className='flex justify-between items-center w-[90%] max-w-[1200px] mx-auto'>
        <div>
          <Link to="/">
            <h1 className="font-bold text-[60px]">MV</h1>
          </Link>
        </div>
        <button ref={togglerRef} onClick={handleOpenNav} className='fixed md:hidden top-8 right-8 z-50 transition duration-200 hover:scale-125 active:scale-100'>
          <div>
            <div className='flex w-8 h-1 mb-1.5 bg-black'></div>
            <div className='flex w-8 h-1 mb-1.5 bg-black'></div>
            <div className='flex w-8 h-1 bg-black'></div>
          </div>
        </button>
        <div ref={navRef} className="flex fixed md:relative bg-white md:bg-transparent top-0 right-0 h-screen md:h-fit w-4/5 translate-x-full md:translate-x-0 transition duration-200">
          <ul className='flex items-center md:justify-end flex-col md:flex-row mt-20 md:mt-0 w-full'>
            <li className=''><button className='bg-primary rounded px-3 py-2 text-sm font-semibold'>View Records</button></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
