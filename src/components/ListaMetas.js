import React from 'react';

const ListaMetas = ({ metas, titulo, onCompletada, onEliminar }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>Total: {metas.length}</p>
      <ul>
        {metas.map((meta, index) => (
          <li key={index}>
            {meta.texto}
            <button onClick={() => onCompletada(index)}>Completada</button>
            <button onClick={() => onEliminar(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaMetas;
