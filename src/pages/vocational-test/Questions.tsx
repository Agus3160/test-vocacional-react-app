import { useEffect, useRef, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { EnumAreas, TypeFormProvider } from "../../lib/definitions";
import ScoreInput from "../../components/forms/inputs/score-input/ScoreInput";
import { puntajesDosOpcionesEmojiStyle } from "../../components/forms/inputs/score-input/data";
import { preguntasTestVocacional } from "../../lib/data";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/ui/Modal";

type Props = {};

export default function Questions({}: Props) {
  const methods = useFormContext<TypeFormProvider>();
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = methods;
  const { fields } = useFieldArray({
    control: control,
    name: "preguntas.respuestas",
  });

  const [modal, setModal] = useState(true);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          const firstErrorIndex = fields.findIndex(
            (_, index) => errors.preguntas?.respuestas?.[index]
          );
          if (firstErrorIndex !== -1 && questionRefs.current[firstErrorIndex]) {
            questionRefs.current[firstErrorIndex]?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [fields, errors]);

  //Colocar la vista en top-0
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickHandler = (area: EnumAreas, puntaje: number, index: number) => {
    setValue(
      `preguntas.respuestas.${index}`,
      {
        puntaje,
        area,
      },
      {
        shouldValidate: true,
      }
    );
  };

  const handleNextStep = async () => {
    const valid = await methods.trigger("preguntas");
    if (!valid) return;
    navigate("/test-vocation/step/3");
  };

  return (
    <form className="flex text-gray-800 dark:text-gray-300 flex-col py-6 sm:py-12 gap-4 max-w-[800px] sm:py-8 mx-auto px-3 sm:px-16">
      {modal && (
        <Modal
          title="¿Cómo funciona el test vocacional?"
          icon="info"
          className="p-3 sm:max-w-[800px] max-w-[320px] h-auto text-gray-800 dark:text-gray-300"
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
              actividades con una opción{" "}
              <strong>(No dejar nada en blanco)</strong>; de lo contrario, la
              respuesta será invalida y no podras obtener un resultado.
            </p>
            <button
              className="bg-blue-500 mx-auto shadow hover:bg-blue-700 hover:scale-105 duration-100 dark:bg-blue-800 dark:hover:bg-blue-700 text-gray-100 dark:text-gray-300 text-sm font-bold p-2 rounded"
              onClick={() => setModal(false)}
            >
              He comprendido y tendré en cuenta estas recomendaciones
            </button>
          </div>
        </Modal>
      )}

      <h2 className="text-2xl font-semi-bold text-center">Test Vocacional</h2>
      <div className="flex flex-col sm:gap-8 gap-16 justify-center items-center">
        {fields.map((field, index) => (
          <div
            key={field.id}
            ref={(el) => (questionRefs.current[index] = el)}
            data-index={index}
            className=" flex flex-col justify-center items-center"
          >
            <ScoreInput
              tabIndex={index + 1}
              area={preguntasTestVocacional[index].area}
              initialChecked={getValues("preguntas.respuestas")[index]?.puntaje}
              onClick={(opcion, area) => onClickHandler(area, opcion, index)}
              title={`${index + 1}. ${
                preguntasTestVocacional[index].preguntas
              }`}
              opciones={puntajesDosOpcionesEmojiStyle}
              error={
                errors.preguntas?.respuestas?.[index]?.area?.message
                  ? "Respuesta requerida"
                  : undefined
              }
              name={`preguntas.respuestas.${index}`}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => navigate("/test-vocation/step/1")}
          className="bg-gray-500 hover:bg-gray-700 hover:scale-105 duration-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-100 dark:text-gray-300 text-sm font-bold py-2 px-4 rounded flex gap-2"
        >
          Atras
        </button>
        <button
          type="button"
          onClick={async () => await handleNextStep()}
          className="bg-green-500 hover:bg-green-700 hover:scale-105 duration-100 dark:bg-green-800 dark:hover:bg-green-700 text-gray-100 dark:text-gray-300 text-sm font-bold py-2 px-4 rounded flex gap-2"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
