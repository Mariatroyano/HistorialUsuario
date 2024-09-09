import React, { useState } from "react";
import "./formulario.css";

const Formulario = () => {
  const [edad, setEdad] = useState("");
  const [validacionMensaje, setValidacionMensaje] = useState("");
  const [array, setArray] = useState([]);

  const validacion = (edadNumero) => {
    if (edadNumero > 50) {
      setValidacionMensaje("estas viejo");
      return
    }

     if (edadNumero > 18) {
      setValidacionMensaje("Puedes ingresar al evento");
      setArray([...array, objetoFecha])
      return
    } 

     if (edadNumero >= 12 && edadNumero <= 18) {
      setValidacionMensaje(
        "Puedes ingresar al evento con supervisión de un adulto"
      );
      return
    } 
      setValidacionMensaje("No puedes ingresar al evento");
    
  };



  const validar = (edades) => {
    edades.preventDefault();

    const edadNumero = parseInt(edad);
    if (!isNaN(edadNumero)) {
      validacion(edadNumero);
    } else {
      setValidacionMensaje("Por favor, ingresa un número válido.");
    }
  };

  const fechaActual = new Date();

  const objetoFecha = {
    id: crypto.randomUUID(),
    fecha: fechaActual.toLocaleDateString(),
    hora: fechaActual.toLocaleTimeString(),
  };

  return (
    <div>
      <div className="contenedorPrincipal">
        <h2 className="Titulo">
          Registros de Validación de edad para ingreso al evento:
        </h2>
        <div className="contenedorSecundario">
          <div className="modal">
            <h2>Ingresa tu edad</h2>
            <form onSubmit={validar}>
              <label htmlFor="edad">Edad:</label>
              <input
                type="text"
                placeholder="Ingresa tu edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
              <button onClick={setArray} type="submit">
                Validar
              </button>
            </form>

            <div>
              {/* {setArray . setArray}
              {array . array} */}
              <p>{objetoFecha.id}</p>
              <p>{objetoFecha.fecha}</p>
              <p>{objetoFecha.hora}</p>
            </div>
            {validacionMensaje && <p>{validacionMensaje}</p>}
            {/* <div>
              setArray={setArray}
              array={array}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
