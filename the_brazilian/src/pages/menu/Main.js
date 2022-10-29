import React from 'react';
import FirebaseFunctions from './FirebaseFunctions';


export default function Main() {
  const items = FirebaseFunctions('main')

  return (
    <>
      <h3>Main</h3>
      {items}
    </>
  )
}