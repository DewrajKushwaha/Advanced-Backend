import React from 'react'
import Randomimg from './Randomimg'

import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>

        <main>
          <section className="relative">
            
            {/* <img src="https://placehold.co/1920x600" alt="Aerial view of a farm with green fields and white buildings" className="w-full h-96 object-cover" /> */}
            <div className='object-cover'>< Randomimg/></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-30">
              <h1 className="text-4xl font-bold">Empowering Farmers with Real-Time Market and Weather Insights</h1>
              <p className="mt-4 text-lg">Get up-to-date crop prices, weather forecasts, and expert crop recommendations</p>
              <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded">Learn More</button>
            </div>
          </section>

          <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded shadow text-center">
                <i className="fas fa-chart-line text-4xl text-blue-500"></i>
                <h3 className="mt-4 text-xl font-semibold">Market Data</h3>
                <p className="mt-2 text-gray-600">Access real-time crop prices and market trends to make informed decisions.</p>
                <Link to="/" className="mt-4 inline-block text-blue-500">Learn More</Link>
              </div>
              <div className="bg-white p-6 rounded shadow text-center">
                <i className="fas fa-cloud-sun text-4xl text-blue-500"></i>
                <h3 className="mt-4 text-xl font-semibold">Weather Updates</h3>
                <p className="mt-2 text-gray-600">Get accurate weather forecasts to plan your farming activities effectively.</p>
                <Link to="/" className="mt-4 inline-block text-blue-500">Learn More</Link>
              </div>
              <div className="bg-white p-6 rounded shadow text-center">
                <i className="fas fa-seedling text-4xl text-blue-500"></i>
                <h3 className="mt-4 text-xl font-semibold">Crop Recommendations</h3>
                <p className="mt-2 text-gray-600">Receive expert recommendations on the best crops to plant based on your soil and weather conditions.</p>
                <Link to="/" className="mt-4 inline-block text-blue-500">Learn More</Link>
              </div>
              <div className="bg-white p-6 rounded shadow text-center">
                <i className="fas fa-bug text-4xl text-blue-500"></i>
                <h3 className="mt-4 text-xl font-semibold">Pest Detection</h3>
                <p className="mt-2 text-gray-600">Identify and manage pests effectively with our advanced detection tools.</p>
                <Link to="/" className="mt-4 inline-block text-blue-500">Learn More</Link>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold">How It Works</h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                  <i className="fas fa-user-plus text-4xl text-blue-500"></i>
                  <h3 className="mt-4 text-xl font-semibold">Sign Up</h3>
                  <p className="mt-2 text-gray-600">Create an account to get started.</p>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-tractor text-4xl text-blue-500"></i>
                  <h3 className="mt-4 text-xl font-semibold">Input Farm Data</h3>
                  <p className="mt-2 text-gray-600">Enter details about your farm and crops.</p>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-chart-bar text-4xl text-blue-500"></i>
                  <h3 className="mt-4 text-xl font-semibold">Receive Insights</h3>
                  <p className="mt-2 text-gray-600">Get personalized insights and recommendations.</p>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-hand-holding-seedling text-4xl text-blue-500"></i>
                  <h3 className="mt-4 text-xl font-semibold">Take Action</h3>
                  <p className="mt-2 text-gray-600">Implement the insights to enhance your farming.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold">Testimonials/Success Stories</h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded shadow">
                  <img src="https://placehold.co/100x100" alt="Farmer smiling" className="w-24 h-24 rounded-full mx-auto" />
                  <p className="mt-4 text-gray-600">"FarmApp helped me increase my farm productivity by 20%!"</p>
                  <p className="mt-2 text-gray-800 font-semibold">- John Doe</p>
                </div>
                <div className="bg-white p-6 rounded shadow">
                  <img src="https://placehold.co/100x100" alt="Farmer with a hat" className="w-24 h-24 rounded-full mx-auto" />
                  <p className="mt-4 text-gray-600">"The weather updates are incredibly accurate and helpful."</p>
                  <p className="mt-2 text-gray-800 font-semibold">- Jane Smith</p>
                </div>
                <div className="bg-white p-6 rounded shadow">
                  <img src="https://placehold.co/100x100" alt="Farmer in a field" className="w-24 h-24 rounded-full mx-auto" />
                  <p className="mt-4 text-gray-600">"I love the crop recommendations. They are spot on!"</p>
                  <p className="mt-2 text-gray-800 font-semibold">- Joe Brown</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold">Ready to boost your farm’s productivity? Sign up today and get started</h2>
              <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded">Sign Up</button>
            </div>
          </section>
        </main>

        <footer className="bg-gray-100 py-6">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">About Us</Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">Sign up for our newsletter:</p>
              <input type="email" placeholder="Enter your email" className="mt-2 px-4 py-2 border rounded" />
            </div>
            <div className="flex justify-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook-f"></i></Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></Link>
              <Link to="/" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></Link>
            </div>
          </div>
        </footer>
     


    </>
  )
}

export default Home
