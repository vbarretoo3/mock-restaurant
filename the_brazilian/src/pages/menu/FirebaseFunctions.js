import React, {useEffect, useState} from 'react';
import { db } from './Firebase';
import { collection, query, onSnapshot, where } from "firebase/firestore";


export default function FirebaseFunctions(parm) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'menu'), where("type", "==", parm))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = []
      querySnapshot.forEach((doc) => {
        itemsArr.push({...doc.data(), id: doc.id})
      });
      setItems(itemsArr)
    })
    return () => unsubscribe
  }, [parm]);

  return (
    <>
      <div className='menu-container'>
        {items.map(({ name, price, description, options, id}) => (
            <>
              <div className='menu-item' key={id}>
              <h4 className='item-name'>{name}</h4>
              <p className='item-price'>${price}</p>
              <p className='item-options'><strong>{options}</strong></p>
              <br />
              <p className='item-description'>{description}</p> 
              </div>
              <div className='menu-divider'></div>
            </>
        ))}
      </div>
    </>
  )
}