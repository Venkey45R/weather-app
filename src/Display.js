import React from 'react';
import dark from "./dark.jpg";
import light from "./light.jpg";

function Display(props) {
  const backgroundImageUrl = props.temp < 25 ?  light : dark;
  const desc = props.temp < 25 ? "PARTLY CLOUD" : "BLOODY HOT";
  return (
    <div className='flex items-center justify-center overflow-hidden rounded-xl'>
      <div className='flex flex-col justify-end py-20 text-white bg-center bg-cover w-80 rounded-xl' style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className='mx-auto'>
          <h1 className='relative text-2xl font-semibold top-10'>{desc}</h1>
          <div className='flex justify-center'>
            <h1 className='relative pt-5 text-2xl font-semibold top-7'>{props.city.toUpperCase()}</h1>
          </div>
          <div className='flex justify-center'>
            <h1 className='relative mx-auto text-6xl top-16 pb-60'>{props.temp}°</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
