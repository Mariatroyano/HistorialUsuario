import React from "react";
import "./modal.css"

const Modal = () => {
  return (

      <div className="contenedorSecundario">
        <button >X</button>
        <div className="modal">
          <h2>Ingresa tu edad</h2>
          <form>
            <label htmlFor="age">Edad:</label>
            <input type="text" placeholder="Ingresa tu edad" />
            <button type="submit">Validar</button>
          </form>
        </div>
      </div>
   
  );
};

export default Modal;
