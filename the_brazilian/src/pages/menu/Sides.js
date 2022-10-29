import React from 'react';
import FirebaseFunctions from './FirebaseFunctions';


export default function Sides() {
  const items = FirebaseFunctions('side')

  return (
    <>
      <h3>Sides</h3>
      {items}
    </>
  )
}