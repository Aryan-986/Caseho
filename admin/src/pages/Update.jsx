import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { useParams, useNavigate } from 'react-router-dom'

const Update = ({ token }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [images, setImages] = useState([])
  const [existingImages, setExistingImages] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [oldPrice, setOldPrice] = useState('')
  const [bestseller, setBestseller] = useState(false)
  const [models, setModels] = useState([])
  const [modelInput, setModelInput] = useState('')
  const [colors, setColors] = useState([])
  const [colorInput, setColorInput] = useState('')

  // Fetch product details
  const fetchProduct = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/product/single`, { productId: id })
      if (response.data.success) {
        const product = response.data.product
        setName(product.name)
        setDescription(product.description)
        setPrice(product.price)
        setOldPrice(product.oldPrice || '')
        setBestseller(product.bestseller)
        setModels(product.models || [])
        setColors(product.colors || [])
        setExistingImages(product.image || [])
        setImages(new Array(product.image.length).fill(null))
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  useEffect(() => { fetchProduct() }, [id])

  // Add / Remove Models
  const addModel = () => {
    const trimmed = modelInput.trim()
    if (trimmed && !models.includes(trimmed)) {
      setModels(prev => [...prev, trimmed])
      setModelInput('')
    }
  }
  const removeModel = (model) => setModels(prev => prev.filter(m => m !== model))

  // Add / Remove Colors
  const addColor = () => {
    const trimmed = colorInput.trim()
    if (trimmed && !colors.includes(trimmed)) {
      setColors(prev => [...prev, trimmed])
      setColorInput('')
    }
  }
  const removeColor = (color) => setColors(prev => prev.filter(c => c !== color))

  // Handle Image Upload
  const handleImageChange = (index, file) => {
    setImages(prev => {
      const updated = [...prev]
      updated[index] = file
      return updated
    })
  }

  // Submit Updated Product
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('productId', id)
      formData.append('name', name)
      formData.append('description', description)
      formData.append('price', price)
      formData.append('oldPrice', oldPrice)
      formData.append('bestseller', bestseller)
      formData.append('models', JSON.stringify(models))
      formData.append('colors', JSON.stringify(colors))

      images.forEach((img, idx) => {
        if (img instanceof File) formData.append(`image${idx + 1}`, img)
      })

      const response = await axios.post(`${backendUrl}/api/product/update`, formData, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        navigate('/list')
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

      {/* Images */}
      <div>
        <p className='mb-2'>Upload Images</p>
        <div className='flex gap-2'>
          {(existingImages.length > 0 || images.length > 0
            ? Array.from({ length: Math.max(existingImages.length, images.length) })
            : []).map((_, idx) => {
            const file = images[idx]
            const existing = existingImages[idx]
            const displaySrc = file ? URL.createObjectURL(file) : existing || assets.upload_area
            return (
              <label key={idx} className='cursor-pointer'>
                <img className='w-20 h-20 object-cover border rounded' src={displaySrc} alt=''/>
                <input type='file' hidden onChange={(e)=>{ const f = e.target.files[0]; if(f) handleImageChange(idx, f) }} />
              </label>
            )
          })}
          {existingImages.length + images.filter(Boolean).length < 4 && (
            <label className='cursor-pointer'>
              <img className='w-20 h-20 object-cover border rounded' src={assets.upload_area} alt=''/>
              <input type='file' hidden onChange={(e)=>{ const f = e.target.files[0]; if(f) setImages(prev=>[...prev, f]) }} />
            </label>
          )}
        </div>
      </div>

      {/* Name */}
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input value={name} onChange={e => setName(e.target.value)} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' required />
      </div>

      {/* Description */}
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea value={description} onChange={e => setDescription(e.target.value)} className='w-full max-w-[500px] px-3 py-2' placeholder='Write content here' required />
      </div>

      {/* Prices */}
      <div>
        <p className='mb-2'>New Product Price</p>
        <input value={price} onChange={e => setPrice(e.target.value)} className='w-full px-3 py-2 sm:w-[120px]' type='number' placeholder='1000'/>
      </div>
      <div>
        <p className='mb-2'>Old Product Price</p>
        <input value={oldPrice} onChange={e => setOldPrice(e.target.value)} className='w-full px-3 py-2 sm:w-[120px]' type='number' placeholder='1500'/>
      </div>

      {/* Models */}
      <div className='w-full'>
        <p className='mb-2'>Available Models</p>
        <div className='flex gap-2'>
          <input value={modelInput} onChange={e => setModelInput(e.target.value)} className='px-3 py-2 border' type='text' placeholder='Enter model name'/>
          <button type='button' onClick={addModel} className='bg-black text-white px-3 py-2'>Add</button>
        </div>
        <div className='flex flex-wrap gap-2 mt-2'>
          {models.map((model, idx) => (
            <span key={idx} className='bg-gray-200 px-3 py-1 rounded-full flex items-center gap-2'>
              {model}
              <button type='button' onClick={() => removeModel(model)} className='text-red-500'>✕</button>
            </span>
          ))}
        </div>
      </div>

      {/* Colors */}
     {/* <div className='w-full'>
        <p className='mb-2'>Available Colors</p>
        <div className='flex gap-2'>
          <input value={colorInput} onChange={e => setColorInput(e.target.value)} className='px-3 py-2 border' type='text' placeholder='Enter color name'/>
          <button type='button' onClick={addColor} className='bg-black text-white px-3 py-2'>Add</button>
        </div>
        <div className='flex flex-wrap gap-2 mt-2'>
          {colors.map((color, idx) => (
            <span key={idx} className='bg-gray-200 px-3 py-1 rounded-full flex items-center gap-2'>
              {color}
              <button type='button' onClick={() => removeColor(color)} className='text-red-500'>✕</button>
            </span>
          ))}
        </div>
      </div> */}

      {/* Bestseller */}
      <div className='flex gap-2 mt-2'>
        <input type='checkbox' id='bestseller' checked={bestseller} onChange={()=>setBestseller(prev => !prev)}/>
        <label htmlFor='bestseller' className='cursor-pointer'>Add to bestseller</label>
      </div>

      {/* Submit */}
      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>UPDATE</button>
    </form>
  )
}

export default Update
