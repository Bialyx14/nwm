import React, {useState} from "react";
import axios from "axios";

export const Login = (props)=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //Przesyłanie danych do serwera
    const handleSubmit = (e) =>{
        e.preventDefault();
            axios.post('http://localhost:8081/login', {username, password})
            .then((response)=>{
                console.log()
                //sprawdzenie czy użytkownik istnieje na podstawie wyniku z bazy danych
                if(response.data.message) props.onFormSwitch('login');
                else props.onFormSwitch('main')
            })
    }

    return(
        //Formularz logowania
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label form="email">Nazwa użytkownika</label>
                <input value={username} type="name" id="name" name="name" placeholder="Jan Kowalski" onChange={e => setUsername(e.target.value)}/>
                <label form="password">Hasło</label>
                <input value={password} type="password" id="password" name="password" placeholder="********" onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Zaloguj się</button>
            </form>
            <button className="link-btn, btn" onClick={() => props.onFormSwitch('register')}>Nie masz konta? Zarejestruj się.</button>
        </div>
    )
}