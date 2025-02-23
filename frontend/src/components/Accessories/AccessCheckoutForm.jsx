import React from 'react'
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAccessories } from "../../contexts/AccessoriesContext";

const AccessCheckoutForm = () => {
    const [category, setCategory] = useState("");
    const [engineBrand, setEngineBrand] = useState("");
    const [exchange, setExchange] = useState("");

    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }
  
    const handleChange = (e) => {
      const input = e.target.value;
      const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  
      // Allow only numbers and dashes
      if (!/^[0-9-]*$/.test(input)) {
        return;
      }
  
      setPhone(input);
  
      // Validate format
      if (input.length === 12 && !phonePattern.test(input)) {
        setError("Invalid format! Use 123-456-7890");
      } else {
        setError("");
      }
    }
    // console.log(accessory.title)
    const handleCheckoutBtn = () => {
      
    }


  return (
    <>
      <section className="min-h-screen bg-blue-600 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-9 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-3 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Checkout 
            </h1>
            <form className="space-y-4" 
                >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Customer Name :
                </label>
                <input type="text" name="name" id="name" required 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              
              <div>
                <form className="max-w-sm mx-auto">
                      {/* Phone Number Label */}
                      <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Phone number:
                      </label>

                      <div className="relative">
                        {/* Phone Icon */}
                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 19 18"
                          >
                            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                          </svg>
                        </div>

                        {/* Phone Input Field */}
                        <input
                          type="text"
                          id="phone-input"
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                    focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="123-456-7890"
                          required
                        />
                      </div>

                      
                
                    </form>
                      
                    <div className='mt-4 ml-1'>
                      <form className="max-w-xs ">
                        <label for="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
                        <div className="relative flex items-center max-w-[8rem]">
                            <button 
                              type="button" 
                              id="decrement-button" 
                              data-input-counter-decrement="quantity-input" 
                              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                              onClick={handleDecrement}
                              >
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                </svg>
                            </button>
                            <input 
                              type="text" 
                              id="quantity-input" 
                              data-input-counter aria-describedby="helper-text-explanation" 
                              className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                              placeholder="999" 
                              value={quantity}
                              readOnly
                              required 

                              />
                            <button 
                              type="button" 
                              id="increment-button" 
                              data-input-counter-increment="quantity-input" 
                              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                              onClick={handleIncrement}
                              >
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                      </form>
                  </div>
                    <div className="mt-4">
                            <label htmlFor="engineBrand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Select Pay Mode:
                            </label>
                            <select
                              required
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            >
                              <option value="">Select Mode </option>
                              <option value="Cash">Cash</option>
                              <option value="Phone pay">Phone Pay</option>
                              <option value="Google Pay">Google Pay</option>
                              <option value="Others">Others</option>
                            </select>
                </div>

                      <div className='mt-3'>
                          <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Price Range (in  ₹):
                          </label>
                          <input type="number" name="number" id="number" required 
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                          />
                      </div>
                     <div className="mt-4">
                     <button
                        type="submit"
                        className="w-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-base px-6 py-3 text-center shadow-lg transform hover:scale-105 cursor-pointer"
                        onClick={handleCheckoutBtn}
                        >
                        Checkout
                      </button>
                     </div>
                </div>
                  </form>
              </div>
            </div>
            </div>
    </section>
    </>
  );

}


export default AccessCheckoutForm
