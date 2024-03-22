import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = ()=>{
    const {id} = useParams()
    const [values, setValues] = useState({
        item_name: '',
        serial_number: '',
        model: '',
        add_date: ''
    })
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3030update/'+id, values)
        .then(res=>navigate('/'))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        axios.get('http://localhost:3030/getrecord/'+id)
        .then(res=>setValues({...values,
             item_name: res.data[0].item_name,
             serial_number: res.data[0].serial_number,
              model: res.data[0].model,
             add_date: res.data[0].add_date}))
        .catch(err=>console.log(err))
    }, [])
    return(
        <div>
            <h1>Zaktualizuj zapotrzebowanie</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for='name'>Nazwa</label>
                    <input type='text' value={values.item_name} vonChange={(e)=>setValues({...values, item_name: e.target.value})} placeholder='Wprowadź nazwę'/>
                </div>
                <div>
                    <label for='serial'>Numer seryjny</label>
                    <input type='text' value={values.serial_number} onChange={(e)=>setValues({...values, serial_number: e.target.value})} placeholder='Wprowadź numer seryjny'/>
                </div>
                <div>
                    <label for='model'>Model</label>
                    <input type='text' value={values.model} onChange={(e)=>setValues({...values, model: e.target.value})} placeholder='Wprowadź model'/>
                </div>
                <div>
                    <label for='date'>Data dodania</label>
                    <input type='date' value={values.add_date} onChange={(e)=>setValues({...values, add_date: e.target.value})}/>
                </div>
                <button type='submit'>Dodaj</button>
            </form>
        </div>
    )
}

export default Update