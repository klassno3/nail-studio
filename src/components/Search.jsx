import { FaSearch } from "react-icons/fa"
import {useState} from 'react'

const Search = ({onSubmit}) => {
  const [term, setTerm ] = useState(  );
    const handleChange = ( e ) => {
      setTerm( e.target.value );
  }
  const handleFormSubmit = ( e ) => {
    onSubmit( term );
    e.preventDefault();
  };
  return (
    <div>
      <form action="" className="" onSubmit={ handleFormSubmit } >

        <div className="flex items-center gap-3 border-[1px] border-text-gray bg-text-white rounded-md px-2  py-1 ">  
      
          <FaSearch/>
        
          <input type="search" placeholder='Search ...' value={ term } onChange={ handleChange }

            className="flex items-center justify-between focus:outline-none text-sm  font-Montserrat" />
        </div>
      </form>
    </div>
  )
}

export default Search
