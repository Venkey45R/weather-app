import React from 'react'
import Forms from './Forms'
import { Link } from 'react-router-dom'
function Main() {
  return (
    <div className="mx-3 my-2">
      <div className="flex justify-center">
        <div className="block">
          <h1 className=" font-bold text-xl mb-5">Weather App</h1>
            <Link to={`/Form`}>
                <button className='py-3 px-6 rounded-xl bg-red-600 text-white font-bold text-xl'>START</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Main