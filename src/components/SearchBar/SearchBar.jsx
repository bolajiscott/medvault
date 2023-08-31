import { useState } from "react"
import searchLens from '../../assets/icons/search-lens.svg';

const SearchBar = () => {
  const [text, setText] = useState('');
  const handleChangeText = (e) => {
    e.preventDefault()
    setText(e.target.value);
  }
  return (
    <div className="flex items-center justify-between border border-[#D1E9FF] rounded-lg bg-[#FEFFFF] p-4">
      <input type="search" value={text} onChange={handleChangeText} placeholder="Search" className="border-none outline-none w-full px-2 text-sm" />
      <button className="border-none bg-transparent hover:scale-125 active:scale-100 transition duration-200">
        <img src={searchLens} alt="Search" />
      </button>
    </div>
  )
}

export default SearchBar