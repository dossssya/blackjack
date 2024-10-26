import React, { useState } from 'react';
import '../styles/App.css';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const handleRegister = () => {
        if (!username || !password || !confirmPassword) {
            setError('Все поля должны быть заполнены');
            return;
        }

        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        const userExists = users.some((user) => user.username === username);
        if (userExists) {
            setError('Такой пользователь уже зарегистрирован');
            return;
        }

        const newUser = { username, password };
        setUsers([...users, newUser]);
        setError('');
        alert('Регистрация прошла успешно');
    };

    return (
        <div className="registration-form">
            <h2>Регистрация</h2>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Зарегистрироваться</button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default RegistrationForm;
