import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Items = ()=>{
    const [items, setItems] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3030')
        .then(res=>setItems(res.data))
        .catch(err=>console.log(err))
    }, [])
    const handleDelete = (id)=>{
        axios.delete('http://localhost:3030/delete/'+id)
        .then(res=>window.location.reload())
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <Link to='/create'>Stwórz zapotrzebowanie</Link>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Nazwa</th>
                        <th scope='col'>Numer seryjny</th>
                        <th scope='col'>Model</th>
                        <th scope='col'>Data dodania</th>
                        <th scope='col'>Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.item_name}</td>
                                <td>{item.serial_number}</td>
                                <td>{item.model}</td>
                                <td>{item.add_date}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>Update</Link>
                                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Items