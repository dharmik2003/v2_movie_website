// import React, { useEffect, useState } from 'react'
// // import Dates from '../Data/Dates'
// // import DateItems from './Date/DateItems'
// import './MovieDetails.css'
// import Area_search from './Location/Area_search'
// import { GrLocation   } from "react-icons/gr";
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
// import DropdownMenu from './Location/DropdownMenu'
// import MovieShowList from './MovieShow/MovieShowList'
// import { NavLink } from 'react-router-dom'
// import movies from './../Data/poster_movie'
// import DateSelector from './Date/DateItems'
// import { useDispatch, useSelector } from 'react-redux';
// import { showMoviesData } from '../Redux/Thunk/MovieThunk';
// import { showTheaterData } from '../Redux/Thunk/TheaterDataThunk';
// import MovieSideDetails from './MovieSideDetails';


// function MovieDetails() {

//  const [scrollPosition, setScrollPosition] = useState<number>(0);

//  const handleDateSelect = (date: Date) => {
//   console.log("Selected date:", date);
// };





// /*right side movie data*/
//  const dispatch = useDispatch();
// //   const { moviesData, loading } = useSelector((state: any) => state.movies);

// //   useEffect(() => {
// //     // Fetch movies data when component mounts
// //     dispatch(showMoviesData() as any);
// //   }, [dispatch]);




// // search movie id from URL
// //  const urlParams = new URLSearchParams(window.location.search);
// // const id = parseInt(urlParams.get('id') || '');
// // console.log("movie",id)


// // Find movie data by ID
// // const movie = moviesData.find((movie: any) => movie.id === id);
// // console.log("movie",movie)


// // schedule data display
// const { theaterData, theaterloading,theaterError } = useSelector((state: any) => state.theator);

//   useEffect(() => {
//     // Fetch movies data when component mounts
//     dispatch(showTheaterData() as any);
//   }, [dispatch]);

//   console.log("theater data -------",theaterData)

// // left side --------------------

// // const { theaterData, theaterloading, theaterError } = useSelector((state: any) => state.theator);
//   const [selectedCity, setSelectedCity] = useState<string>('');
//   const [cities, setCities] = useState<string[]>([]);

//   useEffect(() => {
//     dispatch(showTheaterData() as any);
//   }, [dispatch]);

//   useEffect(() => {
//     const uniqueCities = [...new Set(theaterData.map((theater: any) => theater.city)) as any];
//     setCities(uniqueCities);
//   }, [theaterData]);

//   const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCity(e.target.value);
//   };

//   return (
//     <div>
//         <div className='main-con-movie'>
//             <div className='main-con-movie-left'>
//                 {/* hrading--------------------------- */}
//                 <div>
//                     <h2 className='heading-h2'>TIMETABLE</h2>
//                     <p className='heading-p'>Select the schedule of the cinema you want to watch</p>
//                 </div>

//                 {/* Date -----------------------*/}
//                 <DateSelector onDateSelect={handleDateSelect} />

        

//                 {/* movieshows------------------------ */}
//                 {/* <div>
//                     <MovieShowList/>
//                 </div> */}

//                 {/* data display city vise ------------*/}

    

//                 <div>
//     {theaterloading ? (
//         <p>Loading...</p>
//     ) : theaterError ? (
//         <p>Error: {theaterError}</p>
//     ) : (
//         <div>
//             <select value={selectedCity} onChange={handleCityChange}>
//                 <option value="">Select a city</option>
//                 {cities.map((city) => (
//                     <option key={city} value={city}>
//                         {city}
//                     </option>
//                 ))}
//             </select>
//             <div>
//                 <h3>Theaters</h3>
//                 {selectedCity ? (
//                     <>
//                         <h1> {selectedCity}</h1>
//                         {theaterData
//         .filter((theater: any) => theater.city === selectedCity)
//         .map((theater: any) => (
//             <div key={theater.id}>
//                 <h2>{theater.name}</h2>
//                 <p>{theater.badge}</p>
//                 {theater.dimension.map((dim: any) => (
//                     <div key={dim.dimensionCategory}>
//                         <p>{dim.dimensionCategory}</p>
//                         <p>Price: {dim.price} RS</p>
//                         <p>Times: {dim.time.join(', ')}</p>
//                     </div>
//                 ))}
//             </div>
//         ))}
//                     </>
//                 ) : (
//                     <>
//                         {theaterData.map((theater: any) => (
//                             <div key={theater.id}>
//                                 <h4>{theater.name}</h4>
//                                 <h5>{theater.city}</h5>
//                                 <p>Badge: {theater.badge}</p>
//                                 {theater.dimension.map((dim: any) => (
//                                     <div key={dim.dimensionCategory}>
//                                         <p>{dim.dimensionCategory}</p>
//                                         <p>Price: {dim.price} RS</p>
//                                         <p>Times: {dim.time.join(', ')}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 )}
//             </div>  
                
//             </div>



//                 {/* right side  */}
//             {/* <div  className='main-con-movie-right'>

//                 <div className='main-con-image-des'>
//                     <div className='spider-img'>
//                         <img src='./img/haft-spiderman.png'/>
//                     </div>
//                     <div className='description-h'>
//                         <h3>SPIDERMAN : NO WAY HOME</h3>
//                         <div className="movie-details">
//                             <div className="category">
//                                 <ul>
//                                     <li>Genre</li>
//                                     <li>Durasi</li>
//                                     <li>Sutradara</li>
//                                     <li>Rating Usia</li>
//                                 </ul>
//                             </div>
//                             <div className="info">
//                                 <ul>
//                                     <li>Action</li>
//                                     <li>2 jam 28 menit</li>
//                                     <li>Jon Watts</li>
//                                     <li>SU</li>
//                                 </ul>
//                             </div>
//                         </div>


//                     </div>

//                 </div>

//                 <div className='right-bottom'>
//                 <div className='main-book-button'>
//                     <div className='book-h'>
//                         GRAND INDONESIA CGV
//                     </div>
//                     <div className='book-date'>
//                         Kamis, 16 Desember 2021
//                     </div>
//                     <div className='book-type-time'>
//                         <div className='book-type'>
//                             REGULAR 2D 
//                         </div>
//                         <div className='book-type book-time'>
//                             14:40 
//                         </div>
//                     </div>
//                     <div className='book-des'>
//                         <small>* Pemilihan kursi dapat dilakukan setelah ini</small>
//                     </div>
//                     <div className='book-button'>
//                         <NavLink to="/sitepage"><h3 className='book-but-text'>BELI SEKARANG</h3></NavLink>

//                     </div>

//                 </div>
//                 </div>


//             </div> */}

// {/* 
//             {loading ? (
//         <p>Loading...</p>
//                 ) : movie ? (
//                     <div>
//                     <img src={movie.image}></img>
//                     <p>{movie.name}</p>
//                     <div className="movie-details">
//                                         <div className="category">
//                                             <ul>
//                                                 <li>Tag</li>
//                                                 <li>Duration</li>
//                                                 <li>Director</li>
//                                                 <li>Age Rating</li>
//                                             </ul>
//                                         </div>
//                                         <div className="info">
//                                             <ul>
//                                                 <li>{movie.tag}</li>
//                                                 <li>{movie.duration}</li>
//                                                 <li>{movie.director}</li>
//                                                 <li>{movie.agerating}</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                     </div>
//                 ) : (
//                     <p>Movie not found</p>
//                 )} */}
//             <div className='main-con-movie-right'>
//                 {/* <MovieSideDetails/> */}

//             </div>
                

//         </div>
//     </div>
//   )
// }


// export default MovieDetails








// import DateSelector from './Date/DateItems'
// import { showTheaterData } from '../Redux/Thunk/TheaterDataThunk';
// import { useDispatch, useSelector } from 'react-redux';


// const MovieDetails = () => {
// //      const handleDateSelect = (date: Date) => {
// //   console.log("Selected date:", date);
// // };

//   return (
//     <div>
//         <div>
//             {/* <DateSelector onDateSelect={handleDateSelect} /> */}
            

//         </div>
//     </div> 
      
//   )
// }

// export default MovieDetails







import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DateSelector from './Date/DateItems';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import { log, time } from 'console';
import './MovieDetails.css'
import { resetMovieBooking, selectTime, setDate, setTheaterData, setdimension } from '../Redux/Slice/MovieBookingSlice';

const MovieDetails = () => {

  const dispatch = useDispatch()





  const {moviesData, loading, error} = useSelector((state: any) => state.movies);
  console.log("moviesData",moviesData)
  const {theaterData, theaterloading} = useSelector((state: any) => state.theator);
  console.log("theaterData",theaterData)

  //Date Display 

const [day, setDay] = useState<string>("");
const [dateOfMonth, setDateOfMonth] = useState<number>();
const [month, setMonth] = useState<string>("");

const handleDateSelect = (date: Date) => {
  const formattedDay = date.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedDateOfMonth = date.getDate();
  const formattedMonth = date.toLocaleDateString('en-US', { month: 'long' });
  dispatch(setDate(`${formattedDay} ${formattedDateOfMonth} ${formattedMonth}`));
}
  

  const [selectedCity, setSelectedCity] = useState<string>("");

  // Get unique city names
  const uniqueCityNames = [...new Set(theaterData.map((theater: any) => theater.city)) as any];

  // Filter theater data based on the selected city
  const filteredTheaterData = selectedCity ? theaterData.filter((theater: any) => theater.city === selectedCity) : theaterData;

  //movie details fetch using ID
  const [searchParams] = useSearchParams();
  const urlId = searchParams.get('id');
  console.log(urlId);

  console.log(moviesData)
 
  const filteredMovies = moviesData.filter((movie: any) => movie.id == urlId);
  console.log(filteredMovies);


  //user select time 
  // const [selectedTheater, setSelectedTheater] = useState<any>(null);

    // const handleTimeSelect = (time: string, theater: any) => {
    //   setSelectedTheater(theater);  
    //   console.log("ta",theater)   
    // };

  const { search } = useLocation()
  console.log(search)


 
  //selected Data display moviebookingslice
  
  const {selecteddimension,selectedTime,selectedDate,selectedTheater} =useSelector((state : any)=>state.movieBooking)
  console.log("datas from moviesbooking slice",selecteddimension,selectedTime,selectedDate,selectedTheater)

  
  const handleDimensionClick = (theater :any, dimension:any) => {
    // Dispatch setTheaterData action with theater details
    // dispatch(setTheaterData({ theater:theater ,dateTime: `${day} ${date} ${month}`}));
    dispatch(setTheaterData({ theater}));
    console.log(theater);
    dispatch(setdimension(dimension));
  };

  return (
    <div className='main-con'>

   

     <div className='left-con'>
      {/* Your DateSelector component */}
      <DateSelector onDateSelect={handleDateSelect}/>

      {/* Your city selector */}
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">All Cities</option>
        {uniqueCityNames.map((city: string, index: number) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Display theaters based on the selected city */}
      <h1>{selectedCity}</h1>
      {filteredTheaterData.map((theater: any) => (
        <div key={theater.id} >
          <h2>{theater.name}</h2>
          <p>City: {theater.city}</p>
          <p>Badge: {theater.badge}</p>
          <div>
            <p>Dimension:</p>
            <ul>
              {theater.dimension.map((dimension: any, index: number) => (
                // <li key={index}  onClick={()=> dispatch(setdimension(dimension))} >
                <li key={index}   onClick={() => handleDimensionClick(theater, dimension)} >
                  <p>Category: {dimension.dimensionCategory}</p>
                  <p>Price: {dimension.price}RS</p>
                  <p>Times:</p>
                  <ul>
                   {dimension.time.map((time: string, idx: number) => (
                    <li key={idx} onClick={() => dispatch(selectTime(time))}>
                      {time}
                    </li>
                  ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    



    {/* Display selected data */}
    

    <div className='right-con'>
      <div>
        {filteredMovies.map((movie: any) => (
         <div>
                     <img src={movie.image}></img>
                     <p>{movie.name}</p>
                     <div className="movie-details">
                                         <div className="category">
                                             <ul>
                                                <li>Tag</li>
                                                <li>Duration</li>
                                                <li>Director</li>
                                                <li>Age Rating</li>
                                             </ul>
                                         </div>
                                        <div className="info">
                                              <ul>
                <li> {movie.tag}</li>
                <li> {movie.duration}</li>
                <li> {movie.director}</li>
                <li> {movie.agerating}</li>
              </ul>
                                         </div>
                                    </div>
                     </div>
        ))
      }
      </div>
     
      {/* selected item display */}
     <div className='right-con'>
        {/* <div>
             {selectedTheater && (
                <div>
                  <h2>{selectedTheater.name}</h2>
                  <h3>{Date} {Day} {Month}</h3>

                  <div>
                        <p>{selectedDimension}</p>
                        {selectedTheater.dimension
                          .filter((dimension: any) => dimension.dimensionCategory === selectedDimension)
                          .map((filteredDimension: any, index: number) => (
                            <div key={index}>
                              <p>{filteredDimension.price}RS</p>
                            </div>
                          ))}
                      
                  </div>
                  <p>{selectedTime}</p>
                </div>
              )}
        </div> */}
{/* selecteddimension,selectTime,selectedDateTime */}
        <div>

  <div>

    <h2>{selectedTheater.name}</h2>
    <h2>{selecteddimension.dimensionCategory}</h2>
    <h4>{selectedDate}</h4>
    <h4>{selectedTime}</h4>
    

    
  </div>
    

        </div>
        <div onClick={() => {
              // dispatch(selectTime(selectedTime)) 
            }}>
              
                <button>
                  <Link to={`/movie/${encodeURIComponent(urlId as any)}/sitehomepage`}>Book Now</Link>
                </button>
              
        </div>
     </div>

    
     
     </div>  

    </div>
  )
}

export default MovieDetails;