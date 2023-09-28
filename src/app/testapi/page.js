'use client'
import Link from "next/link"
import { useState } from "react"

export default function Page() {
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const input_fields = {
        width: '300px',
        height: '50px',
        border: '1px solid darkgray',
        borderRadius: '10px',
        margin: '5px',
        outline: 'none'
    }
    const input_btn = {
        width: '300px',
        height: '50px',
        border: '1px solid darkgray',
        borderRadius: '10px',
        margin: '5px',
        cursor: 'pointer'
    }
    const product = async () => {
        let result = await fetch('http://localhost:3000/AllAPI', {
            method: 'POST',
            body: JSON.stringify({ name, brand, color, price })
        })
        result = await result.json();
        if (result.success) {
            alert('new product added successfully')
            setName('')
            setBrand('')
            setColor('')
            setPrice('')
        } else {
            alert('some error occured while adding product')
        }
    }
    const addproduct = () => {
        if (name === '' && brand === '' && color === '' && price === '') {
            alert('Please enter the product details');
        } else if (name === '') {
            alert('Please enter the product name');
        } else if (brand === '') {
            alert('Please enter the product brand name');
        } else if (color === '') {
            alert('Please enter the product color');
        } else if (price === '') {
            alert('Please enter the product price');
        } else {
            product()
        }
    }
    return (
        <>
            <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Enter product details</h1>
                <input value={name} style={input_fields} onChange={(e) => setName(e.target.value)} type="text" placeholder=" Name" /><br />
                <input value={brand} style={input_fields} onChange={(e) => setBrand(e.target.value)} type="text" placeholder="Brand" /><br />
                <input value={color} style={input_fields} onChange={(e) => setColor(e.target.value)} type="text" placeholder=" Color " /><br />
                <input value={price} style={input_fields} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="  Price " /><br />
                <button onClick={addproduct} type="submit" style={input_btn}>ADD PRODUCT</button>
                <Link href="/showApiData">SHOW DATA </Link>
            </div>

        </>
    )
}








