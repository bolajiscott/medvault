const SignUp = () => {
  return (
    <section className="min-h-screen w-full pt-[50px]">
      <div className="flex flex-col md:flex-row w-[90%] my-[54px] mx-auto">
        <div className="bg-primary w-full md:w-1/2 p-10 sm:p-20 md:p-[104px]">
          <div className="flex flex-col justify-center items-center h-full">
            <div>
              <h1 className="font-bold text-[40px] md:text-[82px] leading-[58px] md:leading-[68px]">
                MV
              </h1>
            </div>
            <div>
              <p className="font-medium text-2xl">Medical Vault</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#F8F9FA] p-10 px-4 sm:p-20 md:p-[104px]">
          <div>
            <div className="flex flex-col mb-10">
              <label htmlFor="patient-name" className="font-bold mb-[18px]">
                Patient Name
              </label>
              <input
                type="text"
                id="patient-name"
                placeholder="Enter your name here"
                className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999]"
              />
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="diagnoses" className="font-bold mb-[18px]">
                Diagnoses
              </label>
              <input
                type="text"
                id="diagnoses"
                placeholder="Enter the diagnoses here"
                className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999]"
              />
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="diseases" className="font-bold mb-[18px]">
                Diseases
              </label>
              <input
                type="text"
                id="diseases"
                placeholder="Enter the diseases here"
                className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999]"
              />
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="file" className="font-bold mb-[18px]">
                Upload File
              </label>
              <input
                type="file"
                id="file"
                placeholder="Upload the necessary document"
                className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999]"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-black text-white hover:bg-transparent hover:text-black transition duration-200 border border-black rounded-lg py-4 px-12 text-sm font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
