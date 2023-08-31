import { useState } from "react"

const NewsletterBar = () => {
  const [text, setText] = useState('');
  const handleChangeText = (e) => {
    e.preventDefault()
    setText(e.target.value);
  }
  return (
    <div className="flex items-center justify-between rounded-lg bg-[#F7FAFE] p-[6px] h-[52px]">
      <input type="email" value={text} onChange={handleChangeText} placeholder="Enter your email address" className="border-none outline-none w-full px-2 text-sm bg-[#F7FAFE]" />
      <button className="border-none rounded bg-primary w-10 h-10 flex justify-center items-center hover:scale-90 active:scale-100 transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0_312_742)">
            <path d="M20.99 14.04V5C20.99 3.9 20.09 3 18.99 3H5C3.9 3 3 3.9 3 5V15C3 16.1 3.9 17 5 17H15.05C15.33 18.92 17.15 20.35 19.23 19.93C20.57 19.66 21.66 18.56 21.93 17.22C22.18 15.98 21.77 14.83 20.99 14.04ZM18.99 5L12 8.5L5 5H18.99ZM15.35 15H5V7L12 10.5L19 7V13.05C18.84 13.03 18.67 13 18.5 13C17.11 13 15.91 13.82 15.35 15ZM20.5 17H16.5V16H20.5V17Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_312_742">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  )
}

export default NewsletterBar