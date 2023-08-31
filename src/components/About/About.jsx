import about1 from '../../assets/images/about-image1.png';
import about2 from '../../assets/images/about-image2.png';
import about3 from '../../assets/images/about-image3.png';
import hamburger from '../../assets/images/hamburger-image.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="w-[90%] mx-auto max-w-[1200px] -mb-20 mt-32">
        <div className='mt-3 mb-16'>
          <h2 className='font-bold text-4xl text-center mb-4'>Top restaurants and more</h2>
          <p className='text-[#474747] text-lg text-center max-w-[60ch] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Morbi cursus et nisl et vestibulum.
          </p>
        </div>
        <div className='flex justify-evenly'>
          <div className='flex flex-col justify-center items-center'>
            <div className='h-24 flex justify-center items-center'>
              <img src={about1} alt="Top restaurant" />
            </div>
            <h3 className='font-bold text-xl my-3'>Your city&apos;s top restaurants</h3>
            <p className='max-w-[30ch] text-center'>
              With a great variety of restaurants you can order 
              your favourite food or explore new restaurants nearby!
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='h-24 flex justify-center items-center'>
              <img src={about2} alt="Top restaurant" />
            </div>
            <h3 className='font-bold text-xl my-3'>Fast Delivery</h3>
            <p className='max-w-[30ch] text-center'>
              We pride ourselves on speed. Order or send anything in your 
              city and we&apos;ll pick it up and deliver it in minutes.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='h-24 flex justify-center items-center'>
              <img src={about3} alt="Top restaurant" />
            </div>
            <h3 className='font-bold text-xl my-3'>Ride at your own fare</h3>
            <p className='max-w-[30ch] text-center'>
              Go anywhere you want at your own fare with our well 
              trained professional drivers at the safest way.
            </p>
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center w-1/2 max-w-[856px] mx-auto mt-[59px]'>
            <img src={hamburger} alt="Hamburger" />
          </div>
        </div>
      </div>
        <div className='rotate-180'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1436" height="175" viewBox="0 0 1436 175" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5299e-05 -0.000125889L1440 0L1440 175C1200 121.667 960 95 720 94.9999C480 94.9999 240 121.667 0 175L1.5299e-05 -0.000125889Z" fill="#F3C723"/>
          </svg>
        </div>
    </section>
  )
}

export default About
