import React from 'react'
import Navbar from '../../Home/Navbar'
import Footer from '../../Home/Footer'
import { useSelector } from 'react-redux'

// const {selectedMovie,selectedDate,selecteddimension,selectedTime,selectsite} =useSelector((state: any)=>{state.movieBooking})
const {selectedMovie, selectedDate, selecteddimension, selectedTime, selectsite } = useSelector((state: any) => state.movieBooking);

const ShowDetailsHomePage = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <h2>PAYMENT CONFIRMATION</h2>
            <small>Confirm payment for the seats you ordered</small>
            <div>
                <div>
                    <h3>Schedule Details</h3>
                    <h4>{selectedMovie.name}</h4>


                </div>
                <div>
                
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ShowDetailsHomePage