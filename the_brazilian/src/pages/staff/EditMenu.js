import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../menu/Firebase';

export default function EditMenu() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    const q = collection(db, 'menu')
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = []
      querySnapshot.forEach((doc) => {
        itemsArr.push({...doc.data()})
      });
      setItems(itemsArr)
    })
    return () => unsubscribe
  }, [search]);


  if (!items) return null

  const filteredItems = items.filter(item => {
    return item.name.includes(search.lowerCase)
  })

  console.log(filteredItems)

  return (
    <>
      <h2>Edit Menu</h2>
      <div className="container">
        <input className='' type='search' placeholder="Menu Item" value={search} onChange={e => setSearch(e.target.value)} id='menu-search'/>
        <button className='form-button'>Search</button>
      </div>
    </>
  )
}
