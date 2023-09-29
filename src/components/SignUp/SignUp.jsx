import { useState } from "react";
import Modal from "../Modal/Modal";

const defaultFields = {
  patientName: "",
  diagnoses:"",
  diseases:"",
  email:""
}
const SignUp = () => {
  const [formFields, setFormFields] = useState({defaultFields});
  const [files, setFiles] = useState("");
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {patientName, diagnoses, diseases, email} = formFields;
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value});
  }
  const handleFiles = (e) => {
    setFiles(e.target.files);
  }
  const resetFormFields = () => {
    setFormFields({defaultFields});
  }
  const successful = () => {
    setSuccess(true);
    setOpenModal(true);
  } 
  // eslint-disable-next-line no-unused-vars
  const unsuccessful = () => {
    setFailure(true);
    setOpenModal(true);
  }
  const handleClose = () => {
    setOpenModal(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // Make the api call for submission here

    // after it's successfull, call the reset function and modal display function
    
    // if it's successfull, call the successful function by uncommenting the below
    successful();
    
    // if it's unsuccessfull, call the unsuccessful function by uncommenting the below
    // unsuccessful();
    
    //the below will reset the formfields 
    resetFormFields();
  }
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
        {openModal && <Modal handleClose={handleClose} success={success} failure={failure} />}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-[#F8F9FA] p-10 px-4 sm:p-20 md:p-[104px]">
          <div>
            <div className="flex flex-col md:flex-row">
              <div className="flex mb-3">Fill the form below</div>
              <div className="flex mb-5"><span className="text-red-500 font-bold md:ml-3 mr-1">*</span> <em className="text-[#999]">indicates required field</em></div>
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="patient-name" className="font-bold mb-[18px]">
                Patient Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="patient-name"
                value={patientName}
                onChange={handleChange}
                placeholder="Enter your name here"
                className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999]"
                required
              />
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="diagnoses" className="font-bold mb-[18px]">
                Diagnoses <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="diagnoses"
                value={diagnoses}
                onChange={handleChange}
                placeholder="Enter the diagnoses here"
                className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999]"
                required
              />
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="diseases" className="font-bold mb-[18px]">
                Diseases <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="diseases"
                value={diseases}
                onChange={handleChange}
                placeholder="Enter the diseases here"
                className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999]"
                required
              />
            </div>

            <div className="flex flex-col mb-10">
              <label htmlFor="email" className="font-bold mb-[18px]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="bg-[#FEFFFF] p-[14px] placeholder:text-[#999]"
                required
              />
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="file" className="font-bold mb-[18px]">
                Upload File
              </label>
              <input
                type="file"
                id="file"
                value={files}
                onChange={handleFiles}
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
        </form>
      </div>
    </section>
  );
};

export default SignUp;
