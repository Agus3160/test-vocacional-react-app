import React from "react";
import Modal from "../ui/Modal";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function QuestionsModal({ setModal }: Props) {
  return (
    <Modal
      title="¿Cómo funciona el test vocacional?"
      icon="info"
      className="p-3 sm:max-w-[800px] max-w-[320px] mx-4  h-auto text-gray-800 dark:text-gray-300"
    >
      <div className="flex flex-col gap-4 text-sm sm:text-md ">
        <p className="text-lg font-semibold">INSTRUCCIONES:</p>
        <p>1. Realiza el siguiente test en un espacio privado y cómodo.</p>
        <p>
          2. No hay respuestas correctas o incorrectas. La validez del test
          dependerá mucho de la honestidad con la que respondas.
        </p>
        <p>
          3. Lee con mucha atención cada actividad. Debes marcar todas las
          actividades con una opción <strong>(No dejar nada en blanco)</strong>;
          de lo contrario, la respuesta será invalida y no podras obtener un
          resultado.
        </p>
        <button
          className="bg-blue-500 mx-auto shadow hover:bg-blue-700 hover:scale-105 duration-100 dark:bg-blue-800 dark:hover:bg-blue-700 text-gray-100 dark:text-gray-300 text-sm font-bold p-2 rounded"
          onClick={() => setModal(false)}
        >
          He comprendido y tendré en cuenta estas recomendaciones
        </button>
      </div>
    </Modal>
  );
}
