import React from 'react';
import FirebaseFunctions from './FirebaseFunctions';


export default function Main() {
  const items = FirebaseFunctions('Main')

  return (
    <>
      <h3>Main</h3>
      {items}
    </>
  )
}