import React, { useState, useEffect  } from 'react';
import Axios from 'axios';


export const ItemTable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios
      .get("http://localhost:8081/testI")
      .then(result => setData(result.data));
    console.log(data);
  }, [2]);
  
  return (
    <div>
      <table className="table" >
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nazwa</th>
            <th scope="col">Numer</th>
            <th scope="col">Model</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return <tr>
              <td>{item.id }</td>
              <td>{item.item_name}</td>
              <td>{item.serial_number}</td>
              <td>{item.model}</td>
              <td>{item.add_date}</td>  
            </tr>
          })}
          
        </tbody>
      </table>

    </div>
  )
}
export default ItemTable;