import React from 'react'

export default function Home() {
  return (
  <>
    <div className="home-container">
      <h2>Home</h2>

      <p className='text-paragraph'>
      Your favourite Brazilian restaurant now comes to Sault Ste Marie, located at the heart
      of the city in the downtown area brings new bold flavors that will make you fall in 
      love with the Brazilian couzine. We deliver these mouth-watering flavors 
      with our famous steaks, pf's and deserts. And we offer 
      a variety of ways to order—quick and easy online, convenient 
      delivery, come into your neighborhood shop for an in-restaurant meal, or 
      pick up curbside. We’re proud to offer a change from same old foods with 
      fresh ingredients and a protein choices, fresh-baked sweets and 
      let’s not forget our famous picanha! And we’re happy to help you with any catering needs 
      as well. Find out more information at the <a className='link' href='https://mock-restaur.web.app/about'>about us</a> page.
      </p>
    </div>
      
    <div className="container-wrap">
      <div className='list-of-info'>
        <li className='list-of-info-list1'>
          <div className='list-of-info-item1' />
          <div className='divider'></div>
          <h3>Learn More About our catering!</h3>
          <p className='text-item'>
            Want to have our delicious meals freshly cooked on you event?
            Read more about our catering services!
          </p>
          <br />
          <br />
          <a href='https://mock-restaur.web.app/about' class="button">Read More!</a>
          
          <div className='spacer' />
        </li>
        <li className='list-of-info-list2' >
          
          <div className='list-of-info-item2' />
          <div className='divider'></div>
          <h3>Want to know more about us?</h3>
          <p className='text-item'>
            All our information is available on our about us page!
            Reach out to us with any questions or orders we will be happy to answer you 
            and prepare you the most delicious food in Sault Ste. Marie.
          </p>
          <a href='https://mock-restaur.web.app/contact' class="button">Contact Us Now!</a>
          
          <div className='spacer' />
        </li>
        <li className='list-of-info-list3' >
          <div className='list-of-info-item3' />
          <div className='divider'></div>
          <h3>Check out or menu!</h3>
          <p className='text-item'>
            Get ready to try the most delicious foods from Brazil!
            See all the option we have on our online menu below and dont 
            forget to order a desert!
          </p>
          <br />
          <a href='https://mock-restaur.web.app/menu' class="button">See More!</a>
          <div className='spacer' />
        </li>
      </div>
    </div>
  </>
  )
}
