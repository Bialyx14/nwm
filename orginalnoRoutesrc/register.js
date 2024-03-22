import axios from "axios";
import { useState } from "react";

export const Register = (props)=>{
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit=(e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/register', {name, pass})
    }
    return(
        //Formularz rejestracji
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label form="name">Nazwa użytkownika</label>
                <input value={name} type="name" id="name" placeholder="Jan Kowalski" onChange={e => setName(e.target.value)}/>
                <label form="password">Hasło</label>
                <input value={pass} type="password" id="password" name="password" placeholder="********" onChange={e => setPass(e.target.value)}/>
                <button type="submit">Stwórz konto</button>
            </form>
            <button onClick={()=>props.onFormSwitch('login')} className="link-btn">Masz już konto? Zaloguj się.</button>
        </div>
    )
}