import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../menu/Firebase';

export default function EditMenu() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [filterItems, setFilterItems] = useState([])
  const itemRef = collection(db, 'menu')

  async function getData() {
    const itemsArr = []
    await getDocs(itemRef).then( docs =>
    docs.forEach(doc => {
    itemsArr.push(doc.data())
    }))
    setItems(itemsArr.map(item => item.name.toLowerCase()))
  }
  


  useEffect(() => {
    getData()
    setFilterItems(items.filter(item => item.includes(search.toLowerCase())))
  }, [search])
  

  


  return (
    <>
      <h2>Edit Menu</h2>
      <div className="container">
        <input className='form-search' type='search' placeholder="Menu Item" value={search} onChange={e => setSearch(e.target.value)} id='menu-search'/>
        {search === ''? null : filterItems.map((item) => <><a href={`/dashboard/${item}`}>{item}</a><br/></>)}
        <button className='form-button'>Search</button>
      </div>
    </>
  )
}
