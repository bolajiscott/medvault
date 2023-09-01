import easyToUse from '../../assets/icons/easy-to-use.svg';
import alwaysInSync from '../../assets/icons/always-in-sync.svg';
import playStoreDownload from '../../assets/images/playstore-download.png';
import appleStoreDownload from '../../assets/images/appstore-download.png';
import moreMobile from '../../assets/images/rideon-mobiles.png';

const More = () => {
  return (
    <section id="more">
      <div className='flex flex-col md:flex-row justify-between w-[90%] max-w-[1200px] mx-auto'>
        <div className='mt-32'>
          <div className='mb-10'>
            <h5 className="uppercase text-secondary text-sm font-semibold mb-3">So much more</h5>
            <h3 className="text-4xl font-bold mb-4 max-w-full md:max-w-[18ch]">Lorem Ipsum Dolor Sit Amet </h3>
            <p className="text-tertiary text-lg max-w-full md:max-w-[44ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel luctus nisl.
            </p>
          </div>
          <div className='flex mb-8'>
            <div className='mr-auto md:mr-7'>
              <div className='mb-5'><img src={easyToUse} alt="Easy to use" /></div>
              <h4 className="mb-2 text-xl font-bold">Easy to use</h4>
              <p className="text-tertiary max-w-[23ch] mr-2">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            <div className='mr-auto'>
              <div className='mb-5'><img src={alwaysInSync} alt="Easy to use" /></div>
              <h4 className="mb-2 text-xl font-bold">Always in sync</h4>
              <p className="text-tertiary max-w-[23ch]">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
          </div>
          <div className='flex justify-center md:justify-start'>
            <div className='mr-auto md:mr-4'><img src={appleStoreDownload} alt="Download on Apple Store" className='pr-2 md:pr-0' /></div>
            <div className='mr-auto'><img src={playStoreDownload} alt="Download on Play Store" className='pl-2 md:pl-0' /></div>
          </div>
        </div>
        <div>
          <div className='flex justify-center mt-16 sm:mt-10 md:mt-20'>
            <img src={moreMobile} alt="More features on mobile screen" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default More