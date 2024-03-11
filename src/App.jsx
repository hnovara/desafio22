import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const generateWelcomeMessage = () => {
    if (age < 18) {
      return `Hola ${name}, sos muy joven para usar la aplicación`;
    } else {
      return `Bienvenido ${name}, gracias por usar la aplicación`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      const message = generateWelcomeMessage();
      setWelcomeMessage(message);
      alert(message); 
    } else {
      alert('Por favor completa todos los campos'); 
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Edad
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="button">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default App;