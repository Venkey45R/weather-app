import React from 'react';
import dark from "./dark.jpg";
import light from "./light.jpg";

function Display(props) {
  const backgroundImageUrl = props.temp < 20 ? dark : light;
  const desc = props.temp < 20 ? "PARTLY CLOUD" : "BLOODY HOT";
  return (
    <div className='flex justify-center items-center rounded-xl overflow-hidden'>
      <div className='bg-cover bg-center flex flex-col justify-end text-white py-20 w-80 rounded-xl' style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className='mx-auto'>
          <h1 className='font-semibold text-2xl relative top-10'>{desc}</h1>
          <div className='flex justify-center'>
            <h1 className='font-semibold text-2xl pt-5 relative top-7'>{props.city.toUpperCase()}</h1>
          </div>
          <div className='flex justify-center'>
            <h1 className='mx-auto text-6xl relative top-16 pb-60'>{props.temp}°</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
