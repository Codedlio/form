import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [opciones, setOpciones] = useState('');
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [listaNombres, setListaNombres] = useState([]);
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleOpcionesChange = (event) => {
    setOpciones(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setMostrarInfo(true); 
  
   setListaNombres([...listaNombres, { nombre, telefono, opciones }]);

    
    setNombre('');
    setTelefono('');
    setOpciones('');
  };
   const handleSortAZ = () => {
    
    const sortedList = listaNombres.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
    setListaNombres(sortedList);
  };

  const handleDeleteName = (index) => {
    
    const updatedList = listaNombres.filter((_, i) => i !== index);
    setListaNombres(updatedList);
  };

 return (
    <div>
      <h1>Formulario React</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={handleNombreChange} />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="text" value={telefono} onChange={handleTelefonoChange} />
        </div>
        <div>
          <label>Opciones:</label>
          <select value={opciones} onChange={handleOpcionesChange}>
            <option value="opcion1">Empresa</option>
            <option value="opcion2">Persona</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {mostrarInfo && (
        <div>
          <h2>Información del formulario:</h2>
          <ul>
            {listaNombres.map((item, index) => (
              <li key={index}>
                {item.nombre} - {item.telefono} - {item.opciones}{' '}
                <button onClick={() => handleDeleteName(index)}>Borrar</button>
              </li>
            ))}
          </ul>
          <button onClick={handleSortAZ}>Ordenar A-Z</button>
        </div>
      )}
    </div>
  );
};

export default App;