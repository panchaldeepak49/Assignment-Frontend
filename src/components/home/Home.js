import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
    <div className='upper_content'>
    <div className='text'>
        <h1 className='exotic'>The Exotic</h1>
        <h1 className='laksh' style={{color:'blue'}}>Lakshadweep</h1>
        <h1 className='island' >Island</h1>

    </div>
    <div className='picture'>
    <img src='./images/Rectangle 9.jpg' id='addpic' alt='add' width='200px'></img>
        <img src='./images/mainpic.png' id='mainpic' alt='headimage' width='600'></img>
        
    </div>
    </div> 
    <div className='upper_content2'>
    <div className='discover' >Discover Now</div>
    <div className='plane'>
    <img src='./images/Vector.jpg' alt='plane' height='70px'></img>
    </div>
    </div>

    <div className='question'>Why are you flying?</div>
    <div className='input'>
        <input type='text' placeholder='Enter your destination' id='i1' ></input>
        <input type='text' placeholder='Return' id='i2' ></input>
        <input type='text' placeholder='Depart-Return' id='i3' ></input>
        <input type='text' placeholder='Enter your class' id='i4' ></input>

    </div>
    <div className='middle_content'>
    <div className='addpromo'> + Add promo code</div>
    <div className='showflights'>Show Flights</div>
    </div>
    <div className='lower_content'>Best Packages for You</div>
    <div className='lower_content1'>This is a unique experience on ship, sea and land ,exploring different coral islands of Lakshadweep.</div>
    <div className='lower_content2'>
    <img src='./images/photo1.jpg' alt='photo1' width='30%'></img>
    <img src='./images/photo2.jpg' alt='photo2' width='30%'></img>
    <img src='./images/photo3.jpg' alt='photo3' width='30%'></img>
    </div>
    <div className='lower_content3'>
        <div className='inner1'>
            <h4>Indonesia</h4>
            <button>Book Now</button>
        </div>
        <div className='inner1'>
            <h4>Indonesia</h4>
            <button>Book Now</button>
        </div>
        <div className='inner1'>
            <h4>Indonesia</h4>
            <button>Book Now</button>
        </div>

    </div>

    </>
  )
}

export default Home