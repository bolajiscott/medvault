
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen w-full pt-[50px]">
      <div className="flex flex-col md:flex-row w-[90%] my-[54px] mx-auto">
        <div className="bg-primary w-full md:w-1/2 p-10 sm:p-20 md:p-[104px]">
          <div className="mb-[50px]">
            <h3 className="text-4xl font-bold mb-1">Talk with us</h3>
            <p className="text-lg">
              Have a project in mind that you think we’d be a great fit for it? We’d love to know what you’re thinking
            </p>
          </div>
          <div>
            <h4 className="font-bold text-2xl mb-8">Contact info: </h4>
            <ul>
              <li className="flex mb-6">
                <div className="w-6 h-6 bg-secondary rounded-full mr-4"></div>
                <div className="font-bold">Phone Number: (62) 1829017</div>
              </li>
              <li className="flex mb-6">
                <div className="w-6 h-6 bg-secondary rounded-full mr-4"></div>
                <div className="font-bold">Email: Hello@collinsokpe.com</div>
              </li>
              <li className="flex mb-6">
                <div className="w-6 h-6 bg-secondary rounded-full mr-4"></div>
                <div className="font-bold">Map Street: John Bucarest St. 199</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#F8F9FA] p-10 px-4 sm:p-20 md:p-[104px]">
          <div>
            <div className="flex flex-col mb-10">
              <label htmlFor="full-name" className="font-bold mb-[18px]">Full Name</label>
              <input type="text" id="full-name" placeholder="Input your full name here" className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999]" />
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="email" className="font-bold mb-[18px]">Email Address</label>
              <input type="text" id="email" placeholder="Input your email address here" className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999]" />
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="message" className="font-bold mb-[18px]">Message</label>
              <textarea id="message" rows={5} placeholder="Write your message here" className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999] resize-none" />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-black text-white hover:bg-transparent hover:text-black transition duration-200 border border-black rounded-lg py-4 px-12 text-sm font-semibold">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
