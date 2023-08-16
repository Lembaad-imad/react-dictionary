import React from 'react'

const Search = ({handleBtnValue,handleValue,inputValue}) => {
  return (
    <div className='searchbox'>
        <input type="text" placeholder="Search" id="searchworld"   value={inputValue} onChange={handleValue}/>
        <button id="searchbtn" onClick={handleBtnValue}>Search</button>
    </div>
  )
}

export default Search
