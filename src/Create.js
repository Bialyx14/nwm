import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = ()=>{
    const [values, setValues] = useState({
        item_name: '',
        serial_number: '',
        model: '',
        add_date: ''
    })
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3030/create', values)
        .then(res=>navigate('/'))
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <h1>Dodaj zapotrzebowanie</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for='name'>Nazwa</label>
                    <input type='text' onChange={(e)=>setValues({...values, item_name: e.target.value})} placeholder='Wprowadź nazwę'/>
                </div>
                <div>
                    <label for='serial'>Numer seryjny</label>
                    <input type='text' onChange={(e)=>setValues({...values, serial_number: e.target.value})} placeholder='Wprowadź numer seryjny'/>
                </div>
                <div>
                    <label for='model'>Model</label>
                    <input type='text' onChange={(e)=>setValues({...values, model: e.target.value})} placeholder='Wprowadź model'/>
                </div>
                <div>
                    <label for='date'>Data dodania</label>
                    <input type='date' onChange={(e)=>setValues({...values, add_date: e.target.value})}/>
                </div>
                <button type='submit'>Dodaj</button>
            </form>
        </div>
    )
}

export default Create