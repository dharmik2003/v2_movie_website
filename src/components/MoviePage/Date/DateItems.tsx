
/*30 day display ---------------------------- */


// import React, { useState, useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// interface DateSelectorProps {
//     onDateSelect: (date: Date) => void;
// }

// const DateSelector: React.FC<DateSelectorProps> = ({ onDateSelect }) => {
//     const settings = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//     };

//     const slider = useRef<Slider>(null);
//     const [datesOfMonth, setDatesOfMonth] = useState<{ date: Date; day: string }[]>([]);
//     const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//     useEffect(() => {
//         const currentDate = new Date();
//         const endDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000); // Today + 30 days

//         const dates: { date: Date; day: string }[] = [];

//         // Loop through dates from today to 30 days ahead and populate the dates array
//         for (let date = new Date(currentDate); date <= endDate; date.setDate(date.getDate() + 1)) {
//             const day = date.toLocaleDateString('en-US', { weekday: 'short' });
//             dates.push({ date: new Date(date), day });
//         }

//         setDatesOfMonth(dates);
//     }, []);

//     const handleDateClick = (date: Date) => {
//         setSelectedDate(date);
//         onDateSelect(date);
//     };

//     return (
//         <div className='app-container'>
//             <div className='w-[90%] mx-auto flex'>
//                 <button onClick={() => slider?.current?.slickPrev()}>-</button>
//                 <div className="w-[92%]">
//                     <Slider ref={slider} {...settings}>
//                         {datesOfMonth.map((dateObj, index) => (
//                             <div key={index}
//                                 className='flex flex-col'
//                                 onClick={() => handleDateClick(dateObj.date)}>
//                                 <div>
//                                     {dateObj.date.getDate()} {dateObj.date.toLocaleDateString('en-US', { month: 'short' })}
//                                 </div>
//                                 <div>
//                                     {dateObj.day}
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//                 <button onClick={() => slider?.current?.slickNext()}>+</button>
//             </div>
//         </div>
//     );
// };

// export default DateSelector;





// 15 date display --------------------

// import React, { useState, useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// interface DateSelectorProps {
//     onDateSelect: (date: Date) => void;
// }

// const DateSelector: React.FC<DateSelectorProps> = ({ onDateSelect }) => {
//     const settings = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//     };

//     const slider = useRef<Slider>(null);
//     const [datesOfMonth, setDatesOfMonth] = useState<{ date: Date; day: string }[]>([]);
//     const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//     useEffect(() => {
//         const currentDate = new Date();
//         const endDate = new Date(currentDate.getTime() + 15 * 24 * 60 * 60 * 1000); // Today + 15 days

//         const dates: { date: Date; day: string }[] = [];

//         // Loop through dates from today to 15 days ahead and populate the dates array
//         for (let date = new Date(currentDate); date <= endDate; date.setDate(date.getDate() + 1)) {
//             const day = date.toLocaleDateString('en-US', { weekday: 'short' });
//             dates.push({ date: new Date(date), day });
//         }

//         setDatesOfMonth(dates);
//     }, []);

//     const handleDateClick = (date: Date) => {
//         setSelectedDate(date);
//         onDateSelect(date);
//     };

//     return (
//         <div className='app-container'>
//             <div className='w-[90%] mx-auto flex'>
//                 <button onClick={() => slider?.current?.slickPrev()}>-</button>
//                 <div className="w-[92%]">
//                     <Slider ref={slider} {...settings}>
//                         {datesOfMonth.map((dateObj, index) => (
//                             <div key={index}
//                                 className='flex flex-col'
//                                 onClick={() => handleDateClick(dateObj.date)}>
//                                 <div>
//                                     {dateObj.date.getDate()} {dateObj.date.toLocaleDateString('en-US', { month: 'short' })}
//                                 </div>
//                                 <div>
//                                     {dateObj.day}
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//                 <button onClick={() => slider?.current?.slickNext()}>+</button>
//             </div>
//         </div>
//     );
// };

// export default DateSelector;

//selected display console 15 day.-----------------------------

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './DateItems.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface DateSelectorProps {
    onDateSelect: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onDateSelect }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const slider = useRef<Slider>(null);
    const [datesOfMonth, setDatesOfMonth] = useState<{ date: Date; day: string }[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    useEffect(() => {
        const currentDate = new Date();
        const endDate = new Date(currentDate.getTime() + 15 * 24 * 60 * 60 * 1000); // Today + 15 days

        const dates: { date: Date; day: string }[] = [];

        // Loop through dates from today to 15 days ahead and populate the dates array
        for (let date = new Date(currentDate); date <= endDate; date.setDate(date.getDate() + 1)) {
            const day = date.toLocaleDateString('en-US', { weekday: 'short' });
            dates.push({ date: new Date(date), day });
        }

        setDatesOfMonth(dates);
    }, []);

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
        onDateSelect(date);
    };

    return (
        <div className='app-container'>
            <div className=''><button onClick={() => slider?.current?.slickPrev()}>-</button></div>
            <div className=''>
              
                <div className="">
                    <Slider ref={slider} {...settings}>
                        {datesOfMonth.map((dateObj, index) => (
                            <div key={index}
                                className=''
                                onClick={() => handleDateClick(dateObj.date)}>
                                <div>
                                    {dateObj.date.getDate()} {dateObj.date.toLocaleDateString('en-US', { month: 'short' })}
                                </div>
                                <div>
                                    {dateObj.day}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='date-right-but'><button onClick={() => slider?.current?.slickNext()}>+</button></div>
        </div>
    );
};

export default DateSelector;

