import React from 'react';
import FirebaseFunctions from './FirebaseFunctions';


export default function Entree() {
  const items = FirebaseFunctions('entree')

  return (
    <>
      <h3>appetizers</h3>
      {items}
    </>
  )
}