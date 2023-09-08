import React, { useState } from 'react';
import './style.css';
import windy from '../Yashwanth/Images/windy.jpeg';
import sunny from '../Yashwanth/Images/sunny.png';
import Rainy from '../Yashwanth/Images/Rainy.png';
import ThunderStorm from '../Yashwanth/Images/ThunderStorm.png';
import Mostlycloudy from '../Yashwanth/Images/Mostlycloudy.png';
import Partlycloudy from '../Yashwanth/Images/Partlycloudy.jpeg';

function DateDifference() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const jsonData = [
    {
      day: 0,
      temp: 68,
      image: windy,
      message: 'windy',
    },
    {
      day: 1,
      temp: 74,
      image: sunny,
      message: 'sunny',
    },
    {
      day: 2,
      temp: 83,
      image: ThunderStorm,
      message: 'ThunderStorm',
    },
    {
      day: 3,
      temp: 75,
      image: Mostlycloudy,
      message: 'Mostly Cloudy',
    },
    {
      day: 4,
      temp: 82,
      image: Partlycloudy,
      message: 'partly cloudy',
    },
    {
      day: 5,
      temp: 81,
      image: Rainy,
      message: 'Rain',
    },
    {
      day: 6,
      temp: 90,
      image: sunny,
      message: 'sunny',
    },
  ];
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const handleSubmit = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInDays = (end - start) / (1000 * 60 * 60 * 24);

    if (diffInDays === 6) {
      setFilteredData(jsonData);
    } else {
      alert("Please select a date range of exactly 7 days.");
      setFilteredData([]);
    }
  };

  return (
    <div className="date-difference">
      <h1>Date Range Filter</h1>
      <div className="input-container">
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        /><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="data-container">
        {filteredData.map((item, index) => (
          <div key={index} className="data-card">
            <p>{daysOfWeek[item.day]}</p>
            <p>{item.temp}</p>
            <img src={item.image} alt={item.message} />
            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DateDifference;











