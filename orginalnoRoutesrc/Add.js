import React, {useState} from "react";
import axios from "axios";
 
export const Add = (props)=>{
    const [item_name, setItem_name] = useState('');
    const [serial_number, setSerial_number] = useState('');
    const [model, setModel] = useState('');
    const [add_date, setAdd_date] = useState('');

    const handleSubmit = ()=>{
            axios.post('http://localhost:8081/adder', {item_name, serial_number, model, add_date})
            .then(res => console.log(res.data))
            .then(props.onFormSwitch('main'))
            .catch(err => console.log(err));
    }

    return(
        //formularz dodawania wierszy do bazy danych
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
                <button type="submit">Dodaj zapotrzebowanie</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('main')}>Powrót do strony głównej</button>
            </form>
        </div>
    )
}