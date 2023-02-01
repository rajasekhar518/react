import React, { useState } from 'react'
import cardImg1 from '../../assests/img/card_1.jpg';
import cardImg2 from '../../assests/img/card_2.jpg';
import cardImg3 from '../../assests/img/card_3.jpg';
import cardImg4 from '../../assests/img/card_4.jpg';
import TourCard from './TourCard';
import TourHeading from './TourHeading';

//my-first-app\src\assests\img\card_1.jpg

function TourCards() {

  let [cards,setCards] = useState([
    {
      sNo: "AA01",
      imageUrl: cardImg1,
      heading: "Paries"
    },
    {
      sNo: "AA02",
      imageUrl: cardImg2,
      heading: "Malasyia"
    },
    {
      sNo: "AA03",
      imageUrl: cardImg3,
      heading: "Indonesia"
    },
    {
      sNo: "AA04",
      imageUrl: cardImg4,
      heading: "Bangok"
    }
  ]);
  return (
    <>
      {/* <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
             <p className='h3'>Tour Crads</p>
             <p>Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.</p>
          </div>
        </div> 
      </div> */}

      <TourHeading heading="Tour Cards"/>

      <div className='container'>
        <div className='row'>

          {
            cards.map((card,index) =>{
               return(
                <>
                <TourCard  key={index} imageUrl={card.imageUrl} heading={card.heading}/>
                </>
               )
            })
          }

          {/* <TourCard imageUrl={cards[0].imageUrl} heading={cards[0].heading}/>
          <TourCard imageUrl={cards[1].imageUrl} heading={cards[1].heading}/>
          <TourCard imageUrl={cards[2].imageUrl} heading={cards[2].heading}/>
          <TourCard imageUrl={cards[3].imageUrl} heading={cards[3].heading}/> */}

          {/* <TourCard imageUrl={cardImg1} heading="Paries"/>
          <TourCard imageUrl={cardImg2} heading="Malasyia"/>
          <TourCard imageUrl={cardImg3} heading="Indonesia"/>
          <TourCard imageUrl={cardImg4} heading="Bangok"/> */}

          {/* <div className='col-sm-3'>
            <div className='card'>
              <img src={cardImg1} alt=''></img>
              <div className='card-body'>
                <p className='h3'>Paries</p>
                <p>Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.</p>
                <button className='btn btn-success'>Book Now</button>
              </div>
            </div>
          </div>
        
          <div className='col-sm-3'>
            <div className='card'>
              <img src={cardImg2} alt=''></img>
              <div className='card-body'>
              <p className='h3'>Malasyia</p>
                <p>Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.</p>
                <button className='btn btn-success'>Book Now</button>
              </div>
            </div>
          </div>


          <div className='col-sm-3'>
            <div className='card'>
              <img src={cardImg3} alt=''></img>
              <div className='card-body'>
                <p className='h3'>Indonesia</p>
                <p>Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.</p>
                <button className='btn btn-success'>Book Now</button>
              </div>
            </div>
          </div>


          <div className='col-sm-3'>
            <div className='card'>
              <img src={cardImg4} alt=''></img>
              <div className='card-body'>
                <p className='h3'>Bangok</p>
                <p>Save your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.</p>
                <button className='btn btn-success'>Book Now</button>
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </>
  )
}

export default TourCards
