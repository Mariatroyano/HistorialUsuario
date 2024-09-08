import React, { useState } from "react";
import Modal from "../Formulario/modal/Modal";
import "./formulario.css";

const Formulario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [age, setAge] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);

  const edadNumero = parseInt(age);
  let validacionMensaje = "";

  if (edadNumero > 18) {
    validacionMensaje = "Puedes ingresar al evento";
  } else if (edadNumero >= 12 && edadNumero <= 18) {
    validacionMensaje =
      "Puedes ingresar al evento con supervisión de un adulto";
  } else {
    validacionMensaje = "No puedes ingresar al evento";
  }

  return (
    <div>
      <div className="contenedorPrincipal">
        <button onClick={handleOpenModal} className="open-modal-btn">
          Abrir Modal
        </button>
        <h2 className="Titulo">Registros de Validación de edad para ingreso al evento:</h2>
      </div>
      <div>
        <Modal />
      </div>
    </div>
  );
};

export default Formulario;
