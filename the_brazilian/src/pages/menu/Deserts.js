import React from 'react';
import FirebaseFunctions from './FirebaseFunctions';


export default function Deserts() {
  const items = FirebaseFunctions('Deserts')

  return (
    <>
      <h3>Deserts</h3>
      {items}
    </>
  )
}
