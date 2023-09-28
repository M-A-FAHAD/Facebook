'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page(props) {
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const dynamicId = props.params.edit_details[1]
    const productdata = async () => {
        const response = await fetch(`http://localhost:3000/AllAPI/${dynamicId}`)
        const dynamidata = await response.json()
        // console.log(dynamidata.name)
        setName(dynamidata.name)
        setBrand(dynamidata.brand)
        setColor(dynamidata.color)
        setPrice(dynamidata.price)
    }
    useEffect(() => {
        productdata()
    }, [])
    const product = async () => {
        let result = await fetch(`http://localhost:3000/AllAPI/${dynamicId}`, {
            method: 'PUT',
            body: JSON.stringify({ name, brand, color, price })
        })
        result = await result.json();
        if (result.success) {
            alert('product details updated successfully')
        } else {
            alert('some error occured while product details updating')
        }
    }
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
    return (
        <>
            <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Enter Updated Data</h1>
                <input value={name} style={input_fields} onChange={(e) => setName(e.target.value)} type="text" placeholder=" Name" /><br />
                <input value={brand} style={input_fields} onChange={(e) => setBrand(e.target.value)} type="text" placeholder="Brand" /><br />
                <input value={color} style={input_fields} onChange={(e) => setColor(e.target.value)} type="text" placeholder=" Color " /><br />
                <input value={price} style={input_fields} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="  Price " /><br />
                <button onClick={product} type="submit" style={input_btn}>UPDATE DATA</button>
                <Link href="/showApiData">SHOW DATA </Link>
            </div>

        </>
    )
}