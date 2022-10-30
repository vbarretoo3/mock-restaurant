import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {db} from '../../pages/menu/Firebase';
import { query, collection, getDocs, where, get } from 'firebase/firestore';
import Item from './Item'

function EditMenuItem() {
    const [item, setItems] = useState([])
    const id = useParams()
    const docRef = query(collection(db, 'menu'), where('name', '==', id.id))
    const test = async() => {
        const snapshot = await getDocs(docRef);
        const menu = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setItems(menu)
        return menu
    }

    useEffect(() => {
        test()
    },[])

    return (
    <>
        <h2>
            Edit Menu Item
        </h2>
        <p>{item.name}</p>
        {console.log(item.name)}
    </>
  )
}

export default EditMenuItem