import React from 'react'
import axios from 'axios'
import CropRecoDilog from './CropRecoDilog'; 
import { useState } from 'react'

const CropReco = () => {

  const [formData, setFormData] = useState({
    Nitrogen: '',
    Phosphorus: '',
    Potassium: '',
    Temperature: '',
    Humidity: '',
    Ph: '',
    Rainfall: '',
});

  const [prediction, setPrediction] = useState(null)
  const [error, setError] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');



  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]:value
      })
      console.log("Updated formdata is ",setFormData)
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:5000/CropReco', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }); 
        setPrediction(response.data);  // Set the prediction state
        setSuccessMessage(response.data);
        setError(null);
        setDialogOpen(true); 
        } catch (error) {
            setError(error.response?.data?.error || 'Something went wrong');  // Handle error
            setPrediction(null);  // Clear previous predictions
        }
    };



  return (
    <>
    {/* Background  */}
    <div className="relative top-0 z-0 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <form className=" backdrop-blur-md backdrop-brightness-150 px-3 max-w-md pt-2 z-10 mx-auto" onSubmit={handleSave} >
          <div className="relative z-0 w-full mb-5 group">
            <input type="number" name="Nitrogen" id="Nitrogen" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formData.Nitrogen} onChange={handleChange} />
            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ratio of Nitrogen</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="number" name="Phosphorus" id="Phosphorus" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formData.Phosphorus} onChange={handleChange} />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ratio of Phosphorous</label>
          </div>
          
          <div className="relative z-0 w-full mb-5 group">
            <input type="number" name="Potassium" id="Potassium" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formData.Potassium} onChange={handleChange} />
            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ratio of Potassium</label>
          </div>
        
          <div className="relative z-0 w-full mb-5 group">
            <input type="number" name="Temperature" id="Temperature" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formData.Temperature} onChange={handleChange} />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Temperature in degree</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="number" name="Humidity" id="Humidity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formData.Humidity} onChange={handleChange} />
            <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Relative Humidity in % </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="number" name="Ph" id="Ph" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formData.Ph} onChange={handleChange} />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PH value of the soil</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="number" name="Rainfall" id="Rainfall" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formData.Rainfall} onChange={handleChange} />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rainfall in mm</label>
          </div>
        
          <button  type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>



        <CropRecoDilog open={dialogOpen} message={successMessage} onClose={() => setDialogOpen(false)} />
            {error && <h2 style={{ color: 'red' }}>Error: {error}</h2>}

      </div>
       </>
  )
}

export default CropReco
