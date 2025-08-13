import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [images, setImages] = useState([null, null, null, null])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [oldPrice, setOldPrice] = useState("")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])
  const [models, setModels] = useState([])
  const [modelInput, setModelInput] = useState("")

  
  const addModel = () => {
    const trimmed = modelInput.trim()
    if (trimmed && !models.includes(trimmed)) {
      setModels(prev => [...prev, trimmed])
      setModelInput("")
    }
  }

  // ✅ Remove model
  const removeModel = (model) => {
    setModels(prev => prev.filter(m => m !== model))
  }

  // ✅ Handle image upload
  const handleImageChange = (index, file) => {
    setImages(prev => {
      const updated = [...prev]
      updated[index] = file
      return updated
    })
  }

  // ✅ Submit form
  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("oldPrice", oldPrice)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))
      formData.append("models", JSON.stringify(models))

      images.forEach((img, idx) => {
        if (img) formData.append(`image${idx + 1}`, img)
      })

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { token } }
      )

      if (response.data.success) {
        toast.success(response.data.message)
        setName("")
        setDescription("")
        setPrice("")
        setBestseller(false)
        setSizes([])
        setModels([])
        setModelInput("")
        setImages([null, null, null, null])
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      
      {/* Upload Images */}
      <div>
        <p className='mb-2'>Upload Images</p>
        <div className='flex gap-2'>
          {images.map((img, idx) => (
            <label key={idx} htmlFor={`image${idx + 1}`}>
              <img
                className='w-20'
                src={img ? URL.createObjectURL(img) : assets.upload_area}
                alt=''
              />
              <input
                type='file'
                id={`image${idx + 1}`}
                hidden
                onChange={(e) => handleImageChange(idx, e.target.files[0])}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>

      {/* Product Description */}
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-full max-w-[500px] px-3 py-2'
          placeholder='Write content here'
          required
        />
      </div>

      {/* Price */}
      <div>
        <p className='mb-2'>New Product Price</p>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='w-full px-3 py-2 sm:w-[120px]'
          type='number'
          placeholder='1000'
        />
      </div>
      
      {/*Old product price*/}
      <div>
        <p className='mb-2'>Old ProductPrice</p>
        <input
         value={oldPrice}
         onChange={(e) => setOldPrice(e.target.value)}
         className='wfull px-3 py-2 sm:w-[120px]'
         type = 'number'
         placeholder='1500'
        />
      </div>

      {/* Models Input */}
      <div className='w-full'>
        <p className='mb-2'>Available Models</p>
        <div className='flex gap-2'>
          <input
            value={modelInput}
            onChange={(e) => setModelInput(e.target.value)}
            className='px-3 py-2 border'
            type='text'
            placeholder='Enter model name'
          />
          <button
            type='button'
            onClick={addModel}
            className='bg-black text-white px-3 py-2'
          >
            Add
          </button>
        </div>
        <div className='flex flex-wrap gap-2 mt-2'>
          {models.map((model, idx) => (
            <span
              key={idx}
              className='bg-gray-200 px-3 py-1 rounded-full flex items-center gap-2'
            >
              {model}
              <button
                type='button'
                onClick={() => removeModel(model)}
                className='text-red-500'
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className='flex gap-2 mt-2'>
        <input
          type='checkbox'
          id='bestseller'
          checked={bestseller}
          onChange={() => setBestseller(prev => !prev)}
        />
        <label htmlFor='bestseller' className='cursor-pointer'>
          Add to bestseller
        </label>
      </div>

      {/* Submit Button */}
      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>
        ADD
      </button>
    </form>
  )
}

export default Add
