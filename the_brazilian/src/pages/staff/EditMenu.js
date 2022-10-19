import React, { useRef } from 'react';

export default function EditMenu() {
  const searchRef = useRef()
  return (
    <>
      <h2>Edit Menu</h2>
      <div className="container">
        <input className='' type='search' placeholder="Menu Item" ref={searchRef} id='menu-search'/>
        <button className='form-button'>Search</button>
      </div>
    </>
  )
}
