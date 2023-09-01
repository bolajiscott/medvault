import NewsletterBar from "../NewsletterBar/NewsletterBar"

const Newsletter = () => {
  return (
    <section id="newsletter" className="min-h-[550px] sm:min-h-[80vh] md:min-h-[90vh] flex justify-center items-center relative">
      <div>
        <div className="rotate-0 absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative z-50 block w-[calc(100%_+_1.3px)] h-[175px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1436 175" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5299e-05 -0.000125889L1440 0L1440 175C1200 121.667 960 95 720 94.9999C480 94.9999 240 121.667 0 175L1.5299e-05 -0.000125889Z" fill="#F3C723"/>
          </svg>
        </div>
        <div className="mt-5 md:mt-[48px]">
          <h3 className="font-bold text-4xl text-center mb-4">Stay in the Know</h3>
          <p className="text-justify md:text-center w-[90%] max-w-[57ch] mx-auto mb-10">
            raesent at volutpat elit. Donec consequat aliquet dui, eu fermentum ex viverra eget.Morbi consectetur ligula sit amet nisi.
          </p>
        </div>
        <div className="w-[90%] md:w-3/5 mx-auto max-w-[457px] mb-0 md:mb-[57px]">
          <NewsletterBar />
        </div>
        <div className="rotate-180 absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative z-50 block w-[calc(100%_+_1.3px)] md:h-[175px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1436 175" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5299e-05 -0.000125889L1440 0L1440 175C1200 121.667 960 95 720 94.9999C480 94.9999 240 121.667 0 175L1.5299e-05 -0.000125889Z" fill="#F3C723"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
