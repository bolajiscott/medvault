import featuresImg from '../../assets/images/features-mobile.png'
const Features = () => {
  return (
    <section id="features" className='bg-primary'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='-mt-3 pt-3 mb-8 md:mb-16 w-[90%] max-w-[1200px] mx-auto'>
          <h2 className='font-bold text-4xl text-center mb-4'>Lorem Ipsum Dolor Sit Amet </h2>
          <p className='text-[#474747] text-lg text-center max-w-[60ch] mx-auto'>
            Raesent at volutpat elit. Donec consequat aliquet dui, eu fermentum ex viverra 
            eget.Morbi consectetur ligula sit amet nisi.
          </p>
        </div>
        <div className='flex justify-center flex-col md:flex-row'>
          <div className='w-[80%] md:w-auto mx-auto'>
            <div className='mt-8 mb-12'>
              <div className='flex justify-start md:justify-end mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle opacity="0.1" cx="10" cy="10" r="10" fill="black"/>
                  <circle cx="10" cy="10" r="4" fill="#FAAD13"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-left md:text-right mb-3">Morbi consectetur</h3>
              <p className="text-lg text-black/60 text-left md:text-right max-w-full md:max-w-[28ch]">raesent at volutpat elit. Donec consequat aliquet dui, eu fermentum ex viverra</p>
            </div>
            <div className='mb-12'>
              <div className='flex justify-start md:justify-end mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle opacity="0.1" cx="10" cy="10" r="10" fill="black"/>
                  <circle cx="10" cy="10" r="4" fill="#FAAD13"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-left md:text-right mb-3">Morbi consectetur</h3>
              <p className="text-lg text-black/60 text-left md:text-right max-w-full md:max-w-[28ch]">raesent at volutpat elit. Donec consequat aliquet dui, eu fermentum ex viverra</p>
            </div>
            <div className='mb-12'>
              <div className='flex justify-start md:justify-end mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle opacity="0.1" cx="10" cy="10" r="10" fill="black"/>
                  <circle cx="10" cy="10" r="4" fill="#FAAD13"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-left md:text-right mb-3">Morbi consectetur</h3>
              <p className="text-lg text-black/60 text-left md:text-right max-w-full md:max-w-[28ch]">raesent at volutpat elit. Donec consequat aliquet dui, eu fermentum ex viverra</p>
            </div>
          </div>
          <div className='w-[80%] md:w-auto mx-auto md:mx-0'>
            <img src={featuresImg} alt="Mobile phone displaying features" className='mx-auto' />
          </div>
          <div className='w-[80%] md:w-auto mx-auto'>
            <div className='mt-8 mb-12'>
              <div className='flex justify-start mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle opacity="0.1" cx="10" cy="10" r="10" fill="black"/>
                  <circle cx="10" cy="10" r="4" fill="#FAAD13"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-left mb-3">Morbi consectetur</h3>
              <p className="text-lg text-black/60 text-left max-w-full md:max-w-[28ch]">raesent at volutpat elit. Donec consequat aliquet dui, eu fermentum ex viverra</p>
            </div>
            <div className='mb-12'>
              <div className='flex justify-start mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle opacity="0.1" cx="10" cy="10" r="10" fill="black"/>
                  <circle cx="10" cy="10" r="4" fill="#FAAD13"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-left mb-3">Morbi consectetur</h3>
              <p className="text-lg text-black/60 text-left max-w-full md:max-w-[28ch]">raesent at volutpat elit. Donec consequat aliquet dui, eu fermentum ex viverra</p>
            </div>
            <div className='mb-12'>
              <div className='flex justify-start mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle opacity="0.1" cx="10" cy="10" r="10" fill="black"/>
                  <circle cx="10" cy="10" r="4" fill="#FAAD13"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-left mb-3">Morbi consectetur</h3>
              <p className="text-lg text-black/60 text-left max-w-full md:max-w-[28ch]">raesent at volutpat elit. Donec consequat aliquet dui, eu fermentum ex viverra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
