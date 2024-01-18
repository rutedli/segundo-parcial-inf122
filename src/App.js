// App.js
import React, { useState } from 'react';
import './App.css';
import FormularioMeta from './components/FormularioMeta';
import ListaMetas from './components/ListaMetas';

function App() {
  const [metasCompletas, setMetasCompletas] = useState([]);
  const [metasPendientes, setMetasPendientes] = useState([]);

  const agregarMeta = (texto) => {
    const nuevaMeta = { texto, completada: false };
    setMetasPendientes([...metasPendientes, nuevaMeta]);
  };

  const marcarComoCompletada = (index) => {
    const nuevasMetasPendientes = [...metasPendientes];
    const metaCompletada = nuevasMetasPendientes.splice(index, 1)[0];
    metaCompletada.completada = true;
    setMetasCompletas([...metasCompletas, metaCompletada]);
    setMetasPendientes(nuevasMetasPendientes);
  };

  const eliminarMeta = (index, esCompletada) => {
    if (esCompletada) {
      const nuevasMetasCompletas = [...metasCompletas];
      nuevasMetasCompletas.splice(index, 1);
      setMetasCompletas(nuevasMetasCompletas);
    } else {
      const nuevasMetasPendientes = [...metasPendientes];
      nuevasMetasPendientes.splice(index, 1);
      setMetasPendientes(nuevasMetasPendientes);
    }
  };

  return (
    <div className="App">
      <div className="formulario-container">
        <FormularioMeta agregarMeta={agregarMeta} />
      </div>
      <div className="listas-container">
        <div className="lista">
          <ListaMetas
            metas={metasCompletas}
            titulo="Metas Completadas"
            onCompletada={marcarComoCompletada}
            onEliminar={(index) => eliminarMeta(index, true)}
          />
        </div>
        <div className="lista">
          <ListaMetas
            metas={metasPendientes}
            titulo="Metas Pendientes"
            onCompletada={marcarComoCompletada}
            onEliminar={(index) => eliminarMeta(index, false)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
