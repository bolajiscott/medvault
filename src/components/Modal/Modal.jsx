/* eslint-disable react/prop-types */
const Modal = ({handleClose, success, failure}) => {

  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="relative flex h-[364px] w-[90%] max-w-[753px] items-center justify-center bg-white shadow-xl">
        <div
          onClick={handleClose}
          className="absolute top-2 right-4 scale-110 cursor-pointer text-4xl font-bold hover:scale-125 active:scale-110"
        >
          &times;
        </div>
        <div className="flex flex-col items-center justify-center">
          {success && <>
          <div className="w-fit text-center font-poppins text-[5rem] font-bold text-green-500">
            Success
          </div>
          <div className="text-center text-2xl text-[#80978E]">
            The form has been submitted successfully!
          </div>
          </>}
          {failure && <>
          <div className="w-fit text-center font-poppins text-[5rem] font-bold text-red-500">
            Failed
          </div>
          <div className="text-center text-2xl text-[#80978E]">
            Form submission failed, try again!
          </div>
          </>}
        </div>
      </div>
    </div>
  )
}

export default Modal