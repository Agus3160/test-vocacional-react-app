import React from "react";
import Modal from "../ui/Modal";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ResultModal({ setShowModal }: Props) {
  return (
    <Modal
      title="Resultados"
      className="max-w-[500px] min-h-[200px] p-4 mx-4 sm:mx-0 gap-4 flex flex-col"
      icon="info"
    >
      <div className="flex flex-col gap-4 items-center">
        <p>
          El test vocacional no refleja necesariamente la realidad de manera
          exacta, y sus resultados deben interpretarse con cautela. Es
          fundamental complementar esta herramienta con un proceso continuo de
          auto conocimiento y reflexión personal para tomar decisiones más
          informadas sobre tu carrera.
        </p>
        <button
          className="bg-blue-500 shadow hover:bg-blue-700 hover:scale-105 duration-100 dark:bg-blue-800 dark:hover:bg-blue-700 text-gray-100 dark:text-gray-300 text-sm font-bold p-2 rounded"
          onClick={() => setShowModal(false)}
        >
          He entendido y acepto las limitaciones del test
        </button>
      </div>
    </Modal>
  );
}
