import React, { useState } from 'react';
import  './FormularioMeta.css';

const FormularioMeta = ({ agregarMeta }) => {
  const [meta, setMeta] = useState('');

  const handleAgregarMeta = () => {
    if (meta.trim() === '') {
      return;
    }

    agregarMeta(meta);
    setMeta(''); 
  };

  return (
    <div className="formulario-container">
      <input
        type="text"
        placeholder="Nueva Meta"
        value={meta}
        onChange={(e) => setMeta(e.target.value)}
      />
      <button onClick={handleAgregarMeta}>Agregar Meta</button>
    </div>
  );
};

export default FormularioMeta;
