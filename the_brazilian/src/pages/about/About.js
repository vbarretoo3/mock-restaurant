import React from 'react'

export default function About() {
  return (
    <>
      <h2>About Us</h2>
      <div className='about-us'>
        <h4 className='about-us-titles-first'>Catering</h4>
        <p className='about-us-paragraph'>
          We are happy to provide catering services for our customers if you are interested in this service 
          contact us at (555) 555-5555 or send a email to fakeemail@example.com so we can schedule the event 
          we will bring all the tools to cook you a fresh and authentic Brazilian experience we also have delivery 
          services if you are interested only in the appetizers and deserts.
        </p>
        <h4 className='about-us-titles'>Our Goal</h4>
        <p className='about-us-paragraph'>
          Our goal is to spread Brazilian couzine accross north america. We are have plates from different areas 
          of Brazil so you can have a little bit of each experience of those areas.
        </p>
        <h4 className='about-us-titles'>Who are we?</h4>
        <p className='about-us-paragraph'>
          This business unfortonately is not real it was created by me 
          Victor Barreto de Oliveira a web developer located in Sault Ste. Marie, 
          Canada you can check this website and more projects on my portifolio  
          <a className='link' href='https://victordeoliveira.net'> here</a> this project was completed 
          using the ReactJS Framework is being hosted with Firebase and also uses realtime database 
          with Firestore that is what powers the menu on the join our team page you have a log in 
          that allows access to a dashaboard that permits making realt time changes to the menu.
        </p>
      </div>
    </>
  )
}
