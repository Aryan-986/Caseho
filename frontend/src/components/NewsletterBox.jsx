import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='bg-gray-100 py-12 rounded-lg shadow-md text-center'>
      <p className='text-3xl font-semibold text-gray-800 mb-4'>Stay in the Loop & Get 20% Off</p>
      <p className='text-gray-500 mt-3 px-6'>
        Be the first to know about our latest collections, exclusive offers, and stylish updates for your iPhone.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto mt-6 p-1 rounded-full bg-white shadow-inner'>
        <input className='w-full flex-1 outline-none px-4 py-3 rounded-full' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black hover:bg-gray-700 text-white text-sm px-6 py-3 rounded-full font-semibold transition duration-300'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
