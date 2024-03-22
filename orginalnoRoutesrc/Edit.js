import React, {useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
 
export const Edit = (props)=>{

    const {id} = useParams();
    const [item_name, setItem_name] = useState('');
    const [serial_number, setSerial_number] = useState('');
    const [model, setModel] = useState('');
    const [add_date, setAdd_date] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onFormSwitch('main')
    }

    const handleEdit = (id)=>{
        axios.post(`http://localhost:8081/update/${id}`, {item_name, serial_number, model, add_date})
    }

    return(
        //formularz aktualizowania wiersza w bazie danych
        <div className="auth-form-container">
            <form className="add-form"  onSubmit={handleSubmit}>
                <label>Nazwa przedmiotu</label>
                <input name="name" value={item_name} onChange={e=>setItem_name(e.target.value)}></input>
                <label>Numer seryjny</label>
                <input name="serial" value={serial_number} onChange={e=>setSerial_number(e.target.value)}></input>
                <label>Model</label>
                <input name="model" value={model} onChange={e=>setModel(e.target.value)}></input>
                <label>Data dodania</label>
                <input type="date" name="date" value={add_date} onChange={e=>setAdd_date(e.target.value)}></input>
                <button type="submit" onClick={()=>handleEdit(id)}>Zapisz zapotrzebowanie</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('main')}>Powrót do strony głównej</button>
            </form>
        </div>
    )
}