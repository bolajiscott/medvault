import phones from '../../assets/images/rideon-mobiles.png';
import downloadIOS from '../../assets/images/appstore-download.png';
import downloadPlay from '../../assets/images/playstore-download.png';
import scrollPointer from '../../assets/icons/scroll-pointer.svg';

const Home = () => {
  return (
    <section id="home">
      <div className="bg-home-gradient h-full md:min-h-screen">
        <div className="flex justify-between w-[90%] max-w-[1200px] mx-auto pt-[152px]">
          <div className='w-1/2'>
            <div className='mt-[32px]'>
              <h1 className="font-bold text-[56px] leading-[68px]">Professional Drivers, Food and Many More...</h1>
              <p className='my-10 text-[#474747] text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Aenean molestie vulputate felis ac luctus. Nunc 
                a vehicula sapien. Vestibulum rhoncus mi magna.
              </p>
              <div className='flex'>
                <div className='mr-4'><img src={downloadIOS} alt="Download on Applestore" /></div>
                <div><img src={downloadPlay} alt="Download on Playstore" /></div>
              </div>
            </div>
            <div className='flex items-center mt-28'>
              <div className='mr-4'><img src={scrollPointer} alt="Scrolling pointer" /></div>
              <div className='text-[#B3BAC5]'><span className='font-semibold text-[#5A7184]'>Start scrolling </span>to see our features</div>
            </div>
          </div>
          <div className='w-1/2'>
            <img src={phones} alt="Rideon on phone" className='ml-auto max-h-[843px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home