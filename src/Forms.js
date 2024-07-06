import React, { useState } from 'react';
import axios from 'axios';
import Display from './Display';

function Forms() {
  const [locations, setLocations] = useState('');
  const [temperature, setTemperature] = useState('');
  const [city,setCity] = useState('');

  const getCoordinates = async () => {
    try {
      const apiKey = '4c9568f5d9354dcabde4c2ba63d02edb';

      if (locations.trim() === '') {
        alert('Please enter a location');
        return;
      }

      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${locations}&key=${apiKey}`);

      if (response.data.results && response.data.results.length > 0) {
        const result = response.data.results[0];
        const { lat, lng } = result.geometry;
        fetchWeather(lat, lng);
      } else {
        alert('No results found');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
      alert('Error fetching coordinates. Check console for details.');
    }
  };

  const fetchWeather = async (lat, lng) => {
    const apiKey = '8f31d87d96fa438ab942c7d45ae884ab';
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${apiKey}&include=minutely`;
    try {
      const response = await axios.get(url);
      console.log(response);
      if (response.data && response.data.data && response.data.data.length > 0) {
        const temperature = response.data.data[0].temp;
        const city = response.data.data[0].city_name;
        setCity(city);
        setTemperature(temperature);
      } else {
        console.error('Invalid response structure:', response);
        alert('Invalid response structure. Check console for details.');
      }
    } catch (err) {
      console.error('Error fetching weather data:', err);
      alert('Something went wrong');
    }
  };

  const handleSubmit = () => {
    getCoordinates();
  };

  return (
    <div className='block'>
      <div className='flex justify-center py-4 md:py-10'>
        <form className='px-8 py-4 mx-2 bg-black rounded-xl'>
          <div className='flex '>
            <input type='text' placeholder='Enter your city' value={locations} onChange={(e) => setLocations(e.target.value)} className='w-full py-2 pl-2 pr-40 my-2 text-white bg-black border-4 rounded-xl border-violet-600'/>
            <button type="button" onClick={handleSubmit} className='px-5 py-2 my-4 font-bold text-white bg-violet-600 -ml-28 rounded-xl'>Submit</button>
          </div>
        </form>
      </div>
      <Display temp={temperature} city = {city}/>
    </div>
  );
}

export default Forms;
