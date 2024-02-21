// import React from 'react'

// const ConfirmPayment = () => {
//   return (
//     <div>
//         <div className="pay-heading">
//             <div>KONFIRMASI PEMBAYARAN</div>
//             <div>Konfirmasi pembayaran dari kursi yang anda pesan</div>
//         </div>
//         <div className='pay-details'>
//             <div className="pay-left-part">

//         </div>
//         <div className="pay-right-part">
            
//         </div>
//         </div>
//     </div>
//   )
// }

// export default ConfirmPayment


import React, { useState } from 'react';
import Navbar from '../../components/Home/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { settotal } from '../Redux/Slice/MovieBookingSlice';

const Con_Pay_HomePage = () => {

  // url value find
  const location = useLocation();
  const url=location.pathname;
  console.log(location.pathname)

  //date fetch from slice
  const {selectedMovie, selectedDate, selecteddimension, selectedTime, selectsite,selectedtotal } = useSelector((state: any) => state.movieBooking);
  console.log("seletedmovie",selectedMovie)
  console.log("price",selectedtotal)
  const length=selectsite.length
  console.log()


  // promocode
  const [promoCode, setPromoCode] = useState<string>('');
  const [discount, setDiscount] = useState<number | null>(null);
  const applyPromo = () => {
      const upperCasePromoCode = promoCode.toUpperCase(); 

      let appliedDiscount: number | null = null;
      switch (upperCasePromoCode) {
        case 'MOVIE100':
          appliedDiscount = 100;
          break;
        case 'MOVIE200':
          appliedDiscount = 200;
          break;
        default:
          console.log('Invalid promo code!');
          break;
      }

      setDiscount(appliedDiscount);

  };

  //Tax value defined
  const serivetax:number=3;

  //Discount calculate
  const finalPrice = selectedtotal + serivetax * length - (discount ?? 0);
  //Discount value store in slice
  const dispatch = useDispatch();
  // dispatch(settotal(finalPrice) as any)
  console.log(finalPrice);

  return (
    <div>
      <div>
            <h2>PAYMENT CONFIRMATION</h2>
            <small>Confirm payment for the seats you ordered</small>
            <div>
                <div>
                    <h3>Schedule Details</h3>

                    <p>Movie Title</p>
                    <h4>{selectedMovie.name}</h4>
                    <p>Date :</p>
                    <h4>{selectedDate}</h4>
                    <p>Class</p>
                    <h4>{selecteddimension.dimensionCategory}</h4>
                    <p>Time : </p>
                    <h4>{selectedTime}</h4>
                    <p>Tickets : {selectsite.length}</p>
                    <h4>{selectsite}</h4>

                </div>
                <div>
                  <h1>Order Summary</h1>
                  <h4>Transaction Details</h4>
                  <p>REGULAR SEAT</p>
                  <h3>{selecteddimension.price} <span>X</span> {length}</h3>
                  <p>SERVICE FEES</p>
                  <h3>{serivetax} <span>X</span> {length}</h3>

                  <div>
                        <p>Promos & Vouchers</p>
                        <input
                          type='text'
                          placeholder='Enter Promos Code'
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button onClick={applyPromo}>Apply</button>
                            {discount !== null && discount > 0 && (
                              <div>
                                <p>Applied {discount}rs discount!</p>
                                <button onClick={() => setDiscount(null)}>Remove Promo</button>
                              </div>
                            )}
                            <h3>Discount : {discount}</h3>
                        </div>
                        <h2>Total Pay : {finalPrice}</h2>
                </div>

                <NavLink to={`${url}/`}>BUY TICKETS</NavLink>
            </div>
        </div>
    </div>
  );
};

export default Con_Pay_HomePage;
