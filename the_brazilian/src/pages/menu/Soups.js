import React from 'react';
import FirebaseFunctions from './FirebaseFunctions';


export default function Soups() {
  const items = FirebaseFunctions('soup')

  return (
    <>
      <h3>Soups</h3>
      {items}
    </>
  )
}