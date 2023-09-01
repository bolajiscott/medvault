import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"

const FAQs = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (id) => {
    setActiveButton(id)
  }
  return (
    <section id="faqs">
      <div>
        <div className='mt-16 mb-8'>
          <h2 className='font-bold text-5xl text-center mb-4'>Frequently Asked Question</h2>
          <p className='text-center max-w-[80%] md:max-w-[44ch] mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed doeiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="w-[90%] md:w-1/2 max-w-[608px] mx-auto mb-16">
          <SearchBar />
        </div>
        <div className="mb-10 md:mb-20">
          <div className="flex flex-wrap justify-evenly md:justify-between items-center w-[90%] md:w-1/2 max-w-[600px] mx-auto">
            <button onClick={()=> handleButtonClick(1)} className={activeButton === 1 ? "bg-primary px-4 md:px-3 py-1 rounded-lg transition duration-200": "px-1 text-[#333] transition duration-200"}>General</button>
            <button onClick={()=> handleButtonClick(2)} className={activeButton === 2 ? "bg-primary px-4 md:px-3 py-1 rounded-lg transition duration-200": "px-1 text-[#333] transition duration-200"}>Payments</button>
            <button onClick={()=> handleButtonClick(3)} className={activeButton === 3 ? "bg-primary px-4 md:px-3 py-1 rounded-lg transition duration-200": "px-1 text-[#333] transition duration-200"}>Services</button>
            <button onClick={()=> handleButtonClick(4)} className={activeButton === 4 ? "bg-primary px-4 md:px-3 py-1 rounded-lg transition duration-200": "px-1 text-[#333] transition duration-200"}>Refund</button>
            <button onClick={()=> handleButtonClick(5)} className={activeButton === 5 ? "bg-primary px-4 md:px-3 py-1 rounded-lg transition duration-200": "px-1 text-[#333] transition duration-200"}>Contact</button>
          </div>
        </div>
        <div className="mb-20 md:mb-[183px]">
          <div className="flex flex-col md:flex-row w-4/5 mx-auto justify-evenly">
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold max-w-full md:max-w-[42ch] mb-4">What services does Ride On Offer?</h3>
              <p className="text-[#333] max-w-full md:max-w-[42ch] text-justify md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In tristique convallis elit, ut egestas purus condimentum 
                facilisis. Nam acc.
              </p>
            </div>
            <div>
              <h3 className="font-semibold max-w-full md:max-w-[42ch] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique convallis elit?</h3>
              <p className="text-[#333] max-w-full md:max-w-[42ch] mb-8 md:mb-[66px] text-justify md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique convallis elit, ut egestas purus condimentum facilisis. Nam accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique convallis elit,
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-4/5 mx-auto justify-evenly">
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold max-w-full md:max-w-[42ch] mb-4">What services does Cashpoint Offer?</h3>
              <p className="text-[#333] max-w-full md:max-w-[42ch] text-justify md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In tristique convallis elit, ut egestas purus condimentum 
                facilisis. Nam acc.
              </p>
            </div>
            <div>
              <h3 className="font-semibold max-w-full md:max-w-[42ch] mb-4">Why should i choose a Design studio like TanahAir over full-service agency?</h3>
              <p className="text-[#333] max-w-full md:max-w-[42ch] text-justify md:text-left">
              Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs