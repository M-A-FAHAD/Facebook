'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/AllAPI');
            const jsonData = await response.json();
            const data = await jsonData.result
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const confirtmdeleate = (id) => {
        if (confirm('Are you sure you want to delete?')) {
            deleteOne(id);
        }
    }
    const deleteOne = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/AllAPI/${id}`, {
                method: 'DELETE'
            })
            const jsonData = await response.json();
            if (jsonData.success) {
                alert('Successfully deleted')
                fetchData()
            }
        }
        catch (error) {
            console.log('Error in delete  data:', error);
        }
    }

    const tb = {
        border: '1px solid black',
        width: '150px',
        height: '30px'
    };

    return (
        <>
            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={tb}>Name</th>
                        <th style={tb}>Brand</th>
                        <th style={tb}>Color</th>
                        <th style={tb}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <>
                                <tr key={item._id}>
                                    <td style={tb}>{item.name}</td>
                                    <td style={tb}>{item.brand}</td>
                                    <td style={tb}>{item.color}</td>
                                    <td style={tb}>{item.price}</td>
                                    <td><Link href={`./showApiData/edi_details/${item._id}`}><button>Edit</button></Link></td>
                                    <td><button onClick={() => { confirtmdeleate(item._id) }}>Deleate</button></td>
                                </tr>

                            </>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
