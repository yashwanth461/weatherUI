import { useState } from "react";
import "./Weather.css";

function Weather() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredDate, setFliteredDate] = useState([]);

  const weatherData = [
    {
      day: 'SUN',
      temp: 68,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFKrqxmOGaM3EcjpdFXZaE7-ukg03R0mExjLHVbi9lA&s",
      message: "windy",
    },

    {
      day: 'MON',
      temp: 74,
      image:
        "https://static.vecteezy.com/system/resources/previews/021/625/166/original/sunny-weather-icon-sun-icon-weather-forecast-icon-for-sunny-weather-suitable-for-social-media-and-app-icon-sun-illustration-yellow-color-summer-and-hot-weather-sign-and-tag-minimalism-free-vector.jpg",
      message: "sunny",
    },

    {
      day: 'TUE',
      temp: 83,
      image:
        "https://img.freepik.com/premium-vector/thunder-storm-icon-with-cloud-lightning-rain-simple-weather-logo-thunderstorm-with-thonderbolt-flat-vector-illustration-isolated-white-background_198278-15609.jpg?w=2000",
      message: "ThunderStorm",
    },

    {
      day: 'WED',
      temp: 81,
      image:
        "https://i.pinimg.com/736x/ef/30/84/ef308429e4ba90004888f18267590cbe.jpg",
      message: "Rainy",
    },

    {
      day: 'THU',
      temp: 82,
      image:
        "https://img.freepik.com/premium-vector/isolated-vector-object-weather-icon-sunny-partly-cloudy_311865-9420.jpg?w=2000",
      message: "partly cloudy",
    },
    {
      day: 'FRI',
      temp: 90,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrdj2oQQSCnFp-oLaq2TXprKbrzvDTSjwyLWDqQProQ&s",
      message: "mostlycloudy",
    },

    {
      day: 'SAT',
      temp: 76,
      image:
        "https://static.vecteezy.com/system/resources/previews/021/625/166/original/sunny-weather-icon-sun-icon-weather-forecast-icon-for-sunny-weather-suitable-for-social-media-and-app-icon-sun-illustration-yellow-color-summer-and-hot-weather-sign-and-tag-minimalism-free-vector.jpg",
      message: "sunny",
    },
  ];

  

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = () => {
    const firstDate = new Date(startDate)
    const secondDate = new Date(endDate)
    const firstDateInMillsecond=firstDate.getTime()
    const secondDateInMillsecond=secondDate.getTime()

    const differenceBetweenDates=secondDateInMillsecond-firstDateInMillsecond
    
    const aDayInMillseconds=24*60*60*1000

     const differenceInDays =  differenceBetweenDates/ aDayInMillseconds;

    if (differenceInDays === 6) {
      setFliteredDate(weatherData);
      console.log(weatherData);
    } else {
      setFliteredDate([]);
      alert("Date range must be exactly 7 days.");
      console.log("Data cleared");
    }
  };

  return (
    <div>
      <h1>WeatherData</h1>
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={handleStartDateChange} />
      </div>
      <br />
      <div>
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </div>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <br />
      <div className="weather-cards">
        {filteredDate.map((item) => (
          <div className="weather-card">
            <div className="weather-day">{item.day}</div>
            <div>{item.temp}</div>
            <img src={item.image} alt={item.message} />
            <div>{item.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Weather;