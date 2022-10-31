import { useParams } from "react-router-dom";
import React, {useEffect, useState, useRef} from 'react';
import {db} from '../../pages/menu/Firebase';
import { query, collection, getDocs, where, updateDoc, doc } from 'firebase/firestore';

function EditMenuItem() {
    const [item, setItems] = useState(null)
    const nameRef = useRef()
    const descRef = useRef()
    const optionsRef = useRef()
    const priceRef = useRef()
    const typeRef = useRef()
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
    
    function handleSubmit(e) {
        e.preventDefault()
        if (
            item[0].name !== nameRef.current.value ||
            item[0].description !== descRef.current.value ||
            item[0].price !== descRef.current.value ||
            item[0].options !== optionsRef.current.value ||
            item[0].type !== typeRef.current.value
        ) {
            console.log(optionsRef.current.value)
            if (item[0].options === null) { 
                const update = async () => {
                    updateDoc(doc(db, 'menu', item[0].id), {
                        name: nameRef.current.value,
                        description: descRef.current.value,
                        price: priceRef.current.value,
                        type: typeRef.current.value,
                })}
                update()
            } else { 
                const update = async () => {
                updateDoc(doc(db, 'menu', item[0].id), {
                    name: nameRef.current.value,
                    description: descRef.current.value,
                    price: priceRef.current.value,
                    type: typeRef.current.value,
                    options: optionsRef.current.value
                })}     
                update()
            }
        }
    }

    if (item === null) return null

    return (
    <>
        <h2>
            Edit Menu Item
        </h2>
        <div  className='edit-menu-container'>
            <form className='edit-menu-form' type='Submit' onSubmit={handleSubmit}>
                <div className='edit-menu-fields'>
                    <lable  className='edit-menu-lable'>Name: </lable>
                    <input className='edit-menu-input' ref={nameRef} defaultValue={item[0].name} editable />
                </div>
                <div className='edit-menu-fields'>
                    <lable className='edit-menu-lable'>Price: </lable>
                    <input className='edit-menu-input' ref={priceRef} defaultValue={item[0].price} />
                </div>
                <div className='edit-menu-fields'>
                    <lable className='edit-menu-lable'>description: </lable>
                    <textarea className='edit-menu-input description' ref={descRef} defaultValue={item[0].description} />
                </div>
                { item[0].options ? <>
                <div className='edit-menu-fields'>
                    <lable className='edit-menu-lable'>Options: </lable>
                    <input className='edit-menu-input' ref={optionsRef} defaultValue={item[0].options} /> 
                </div></> : null}
                <div className='edit-menu-fields'>
                    <lable className='edit-menu-lable'>Type: </lable>
                    <input className='edit-menu-input' ref={typeRef} defaultValue={item[0].type} />
                </div>
                <button className='button edit-menu-button'type='Submit'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default EditMenuItem