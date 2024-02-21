
// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   return (
//     <div >
//       <div className="site-page" >
//         <div className="movie-screen">
//         <h2>Movie Screen</h2>
//         </div>
//         <div className="seat-map">
//         {[...Array(8)].map((_, rowIndex) => (
//           <div key={rowIndex} className="seat-row">
//             {[...Array(20)].map((_, colIndex) => {
//               const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//               console.log("seat------",seat)
//               const isSelected = isSeatSelected(seat);
//               return (
//                 <div
//                   key={colIndex}
//                   className={`seat ${isSelected ? 'selected' : ''}`}
//                   onClick={() => handleSeatClick(seat)}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//         </div>
//       </div>
//       <div>
            

//       </div>
//     </div>
//   );
// };

// export default SitePage;



// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
//   const [totalPrice, setTotalPrice] = useState<number>(0); // State to store the total price

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   // Calculate total price based on the number of selected seats and price per seat
//   const calculateTotalPrice = () => {
//     const pricePerSeat = 50; // Price per seat (50 Rp)
//     const totalPrice = selectedSeats.length * pricePerSeat;
//     return totalPrice;
//   };

//   // Update total price whenever selected seats change
//   React.useEffect(() => {
//     const newTotalPrice = calculateTotalPrice();
//     setTotalPrice(newTotalPrice);
//   }, [selectedSeats]);

//   return (
//     <div>
//       <div className="site-page">
//         <div className="movie-screen">
//           <h2>Movie Screen</h2>
//         </div>
//         <div className="seat-map">
//           {[...Array(8)].map((_, rowIndex) => (
//             <div key={rowIndex} className="seat-row">
//               {/* Display seat numbers in a row */}
//               <span className="seat-number">Row {String.fromCharCode(65 + rowIndex)}</span>
//               {[...Array(20)].map((_, colIndex) => {
//                 const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//                 const isSelected = isSeatSelected(seat);
//                 return (
//                   <div
//                     key={colIndex}
//                     className={`seat ${isSelected ? 'selected' : ''}`}
//                     onClick={() => handleSeatClick(seat)}
//                   >
//                     {seat}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className='sitepage-layout-text'>
//              <h2>Layar Bioskop Disini</h2>
//       </div>
//       <div className='totalprice-button-section'>
//         <div>
//               <div>Total </div>
//               <div> {totalPrice}</div>
//         </div>
//         <div>
//               <div>Total Sets </div>
//               <div> {totalPrice}</div>

//         </div>
//         <div>

//         </div>
//         <div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SitePage;



import React, { useState } from 'react';
import './SitePage.css';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { selectTime, setTheaterData, setdimension, setsite, settotal } from '../Redux/Slice/MovieBookingSlice';
import { useDispatch, useSelector } from 'react-redux';

const SitePage: React.FC = () => {

  const {selecteddimension,selectedTime,selectedDate,selectedTheater,selectedtotal,selectsite} =useSelector((state : any)=>state.movieBooking)
  console.log("datas from moviesbooking slice",selecteddimension,selectedTime,selectedDate,selectedTheater,selectedtotal,selectsite)
  
  const dispatch =useDispatch();


  //url value find
  const location = useLocation();
  const url=location.pathname;
  console.log(location.pathname)
  


  
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0) // State to store the total price

  const handleSeatClick = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else if (selectedSeats.length < 5) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      const newSelectedSeats = [...selectedSeats.slice(1), seat];
      setSelectedSeats(newSelectedSeats);
    }
  };

  const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

  // Calculate total price based on the number of selected seats and price per seat
  const calculateTotalPrice = () => {
    const pricePerSeat = selecteddimension.price; // Price per seat (50 Rp)
    const totalPrice = selectedSeats.length * pricePerSeat;
    return totalPrice;
  };

  // Update total price whenever selected seats change
  React.useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    setTotalPrice(newTotalPrice);
  }, [selectedSeats]);


  dispatch(settotal(totalPrice))
  dispatch(setsite(selectedSeats))

  /*time selected */
  const [selectedValue, setSelectedValue] = useState<string>('');
   const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    dispatch(selectTime(selectedOption));
  };

 const options = selecteddimension.time;


  return (
    <div>
      <div >
         <div className='sitepage-heading'>
           <div><h2 className='sitepage-h-h'>SELECT A SEAT</h2></div>
           <div><p className='sitepage-h-p'>Choose the seat you will occupy during the film screening</p></div>
          </div>
      </div> 

      <div className="site-page">
        {/* <div className="movie-screen">
          <h2>Movie Screen</h2>
        </div> */}

         <div>
      {/* <select value={selectedValue} onChange={handleDropdownChange}>
        {options.map((option:string, index:number) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select> */}
      <select value={selectedValue} onChange={handleDropdownChange}>
        {options.map((option: string, index: number) => (
      <option key={index} value={option}>{option}</option>
    ))}
  </select>
    </div>

        <div className="seat-map">
          {[...Array(8)].map((_, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {[...Array(20)].map((_, colIndex) => {
                const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
                const isSelected = isSeatSelected(seat);
                return (
                  <div
                    key={colIndex}
                    className={`seat ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className='sitepage-layout-text'>
             <h2>Cinema Screen Here</h2>
     </div>

      <div className='totalprice-button-section'>
        <div className='totalprice-sets'>
            <div className='totalprice'>
                <div className='total'><h4>Total</h4></div>
                <div className='totalprice'><h3>₹{selectedtotal}</h3></div>
            </div>
           
        </div>
        <div>
            <div className='total'><h4>Total Sets</h4> </div>
            <div className='totalprice'><h3>{selectsite} </h3></div>
        </div>
        <div className='button-book'>
            {/* <div  >Kembali</div> */}
            <NavLink to={""} className='but but-1'>Back</NavLink>
            {/* <NavLink to={""} className='but but-2'>CONFIRMATION</NavLink> */}
             <NavLink to={`${url}/confirm_payment`} className='but but-1'>CONFIRMATION</NavLink>

            {/* <div className='but but-2'>KONFIRMASI</div> */}
        </div>
       

        
      </div>

    </div>
  );
};

export default SitePage;






























// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       // User has already selected 5 seats, unselect the first seat and select the new one
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   return (
//     <div className="seat-map">
//       {[...Array(8)].map((_, rowIndex) => (
//         <div key={rowIndex} className="seat-row">
//           {[...Array(20)].map((_, colIndex) => {
//             const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//             const isSelected = isSeatSelected(seat);
//             return (
//               <div
//                 key={colIndex}
//                 className={`seat ${isSelected ? 'selected' : ''}`}
//                 onClick={() => handleSeatClick(seat)}
//               >
//                 {seat}
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SitePage;


// selected sit display react page------------

// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   return (
//     <div>
//       <div className="seat-map">
//         {[...Array(8)].map((_, rowIndex) => (
//           <div key={rowIndex} className="seat-row">
//             {[...Array(10)].map((_, colIndex) => {
//               const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//               const isSelected = isSeatSelected(seat);
//               return (
//                 <div
//                   key={colIndex}
//                   className={`seat ${isSelected ? 'selected' : ''}`}
//                   onClick={() => handleSeatClick(seat)}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//         <div className="gap" />
//         {[...Array(8)].map((_, rowIndex) => (
//           <div key={rowIndex} className="seat-row">
//             {[...Array(10)].map((_, colIndex) => {
//               const seatNumber = colIndex + 11;
//               const seat = `${String.fromCharCode(65 + rowIndex)}${seatNumber}`;
//               const isSelected = isSeatSelected(seat);
//               return (
//                 <div
//                   key={colIndex}
//                   className={`seat ${isSelected ? 'selected' : ''}`}
//                   onClick={() => handleSeatClick(seat)}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//       <div >
//         <h2>Selected Seats:</h2>
//         <ul>
//           {selectedSeats.map(seat => (
//             <li key={seat}>{seat}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SitePage;



//selected site display in console ----------------

// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   // Output selected seats to the console
//   console.log('Selected Seats:', selectedSeats);

//   return (
//     <div className="seat-map">
//       {[...Array(8)].map((_, rowIndex) => (
//         <div key={rowIndex} className="seat-row">
//           {[...Array(20)].map((_, colIndex) => {
//             const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//             const isSelected = isSeatSelected(seat);
//             return (
//               <div
//                 key={colIndex}
//                 className={`seat ${isSelected ? 'selected' : ''}`}
//                 onClick={() => handleSeatClick(seat)}
//               >
//                 {seat}
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SitePage;

