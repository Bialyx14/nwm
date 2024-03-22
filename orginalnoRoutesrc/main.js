import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import './main.css';

export const Main = (props) => {

    //dane pobrane z tabeli items
    const [data, setData] = useState([]);
    //sprawdzenie czy przedmiot został usunięty
    const [deleted, setDeleted] = useState(true)

    //Pobranie danych z tabeli items
    useEffect(() => {
        if(deleted){
            setDeleted(false)
        axios
            .get("http://localhost:8081/items")
            .then(result => setData(result.data));
        }}, [deleted]);

    //usuwanie elementów tabeli
    const handleDelete = (id)=>{
        axios.post('http://localhost:8081/delete', {id})   
            .then(res => console.log(res.data))
            .then(setDeleted(true))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Strona główna</h1>
            <button id='dodaj' className='btn' onClick={()=>props.onFormSwitch('add')}>Dodaj swoje zapotrzebowanie</button>
            <table className="table" id='table'>
                <thead className="thead-dark">
                    <tr>
                        <th scope='col'>L.P.</th>
                        <th scope="col">Nazwa</th>
                        <th scope="col">Numer seryjny</th>
                        <th scope="col">Model</th>
                        <th scope="col">Data dodania</th>
                        <th scope='col'>Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => {
                        return <tr key={item.id}>
                            <td>{i+1}</td>
                            <td>{item.item_name}</td>
                            <td>{item.serial_number}</td>
                            <td>{item.model}</td>
                            <td>{item.add_date}</td>  
                            <td><button className='link-btn' onClick={()=>props.onFormSwitch('editor')}>Edytuj zapotrzebowanie</button><button className='link-btn' onClick={() => handleDelete(item.id)}>Usuń zapotrzebowanie</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        <button onClick={()=>props.onFormSwitch('login')} className="btn">Wyloguj  się</button>
    </div>
  )
}