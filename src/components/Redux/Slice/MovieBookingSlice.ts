import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { MoviesData, TheaterData } from '../../data';
// interface MovieBookingState {
//   selectedMovie: MoviesData | null;
//   selectedTheater: TheaterData | null;
//   selectedDateTime: Date | null;
// }
const initialState = {
  selectedMovie: {},
  selectedTheater: {},
  selectedTimeSlotsList: [],
  selectedDateTime: "",
  selectedDate: "",
  selectedSeats: {},
  selectedTime: '',
  selecteddimension:{},
  selectedtotal:"",
  selectsite:[]
};

const MovieBookingSlice = createSlice({
  name: 'movieBooking',
  initialState,
  reducers: {
    setMovieData: (state, action) => {
      console.log("Slice Movie che: ",state.selectedMovie)
      state.selectedMovie = action.payload;
    },
    setTheaterData: (state, action) => {
      state.selectedTheater = action.payload.theater;
    },
    setSelectedSeats(state, action) {
      state.selectedSeats = action.payload.seat;
      state.selectedSeats = action.payload.total;
    },
    resetMovieBooking(state) {
      state.selectedMovie = {};
      state.selectedTheater = {};
      state.selectedDateTime = "";
      state.selectedSeats = {};
      state.selectedTime='',
      state.selecteddimension={},
      state.selectedDate=""
    },
    selectTimeSlote(state, action){
      state.selectedTimeSlotsList = action.payload;
    },
    selectTime(state, action){
      state.selectedTime = action.payload
    },
    setdimension(state,action){
      state.selecteddimension = action.payload;
    },
    setDate(state,action){
      state.selectedDate = action.payload;
    },
    settotal(state,action){
      state.selectedtotal=action.payload
    },
    setsite(state,action){
      state.selectsite=action.payload
    }
  },
});
export const { setMovieData, setTheaterData, setSelectedSeats, resetMovieBooking, selectTimeSlote, selectTime ,setdimension,setDate,settotal,setsite} = MovieBookingSlice.actions;
export default MovieBookingSlice.reducer;