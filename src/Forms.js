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
    try {
      const response = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=3b1b3ca829164c39a86262895bdd150d&include=minutely`);
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
      alert('Error fetching weather data. Check console for details.');
    }
  };

  const handleSubmit = () => {
    getCoordinates();
  };

  return (
    <div className='block'>
      <div className='flex justify-center py-4 md:py-10'>
        <form className='rounded-xl bg-black px-8 py-4 mx-2'>
          <div className=' flex'>
            <input type='text' placeholder='Enter your city' value={locations} onChange={(e) => setLocations(e.target.value)} className='w-full pr-40 pl-2 py-2 my-2 rounded-xl bg-black border-4 text-white border-violet-600'/>
            <button type="button" onClick={handleSubmit} className='my-4 bg-violet-600 px-5 py-2 text-white font-bold -ml-28 rounded-xl'>Submit</button>
          </div>
        </form>
      </div>
      <Display temp={temperature} city = {city}/>
    </div>
  );
}

export default Forms;
