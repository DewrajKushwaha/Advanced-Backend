import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div>
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
              <i className="fas fa-seedling"></i> Agri Farm
            </div>
            <nav className="space-x-4">
              <Link to="/Weather" className="text-gray-900 hover:text-black hover:font-bold">Weather</Link>
              <Link to="/CropReco" className="text-gray-900 hover:text-black hover:font-bold">Crop Recommendations</Link>
              <Link to="/" className="text-gray-900 hover:text-black hover:font-bold">Pest Detection</Link>
            </nav>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
          </div>
        </header>
      </div>


    </>
  )
}

export default Navbar
