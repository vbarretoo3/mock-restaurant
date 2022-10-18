import React from 'react';
import FirebaseFunctions from './FirebaseFunctions';


export default function Soups() {
  const items = FirebaseFunctions('Soups')

  return (
    <>
      <h3>Soups</h3>
      {items}
    </>
  )
}