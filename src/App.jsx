import React, { useState } from 'react';
import './App.css'; // Archivo CSS para los estilos

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

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
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  const WelcomeMessage = ({ message }) => {
    return <h2>{message}</h2>;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {showAlert && <p className="alert">Por favor completa todos los campos</p>}
      {welcomeMessage && <WelcomeMessage message={welcomeMessage} />}
    </div>
  );
}

export default App;