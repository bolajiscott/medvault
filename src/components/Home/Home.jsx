import phones from '../../assets/images/rideon-mobiles.png';
import downloadIOS from '../../assets/images/appstore-download.png';
import downloadPlay from '../../assets/images/playstore-download.png';
import scrollPointer from '../../assets/icons/scroll-pointer.svg';

const Home = () => {
  return (
    <section id="home">
      <div className="bg-home-gradient h-full">
        <div className="flex flex-col md:flex-row justify-between w-[90%] max-w-[1200px] mx-auto pt-20 md:pt-[152px]">
          <div className='w-full md:w-1/2'>
            <div className='mt-[32px]'>
              <h1 className="font-bold text-[40px] md:text-[56px] leading-[58px] md:leading-[68px]">Professional Drivers, Food and Many More...</h1>
              <p className='my-10 text-[#474747] text-xl text-justify md:text-left'>
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
          <div className='w-full md:w-1/2'>
            <img src={phones} alt="Rideon on phone" className='mx-auto md:ml-auto max-h-[843px] -mb-32' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home