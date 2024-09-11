import { House } from "lucide-react";
import DocumentTemplate from "../../components/pdf/DocumentTemplate";
import PDFDownloadButton from "../../components/pdf/PDFDownloadButton";
import { calculateScores, getTheResult } from "../../lib/util";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { ResultType, TypeFormProvider } from "../../lib/definitions";
import { useEffect, useState } from "react";
import Modal from "../../components/ui/Modal";

export default function Results() {
  
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  
  const [result, setResult] = useState<ResultType|null>(null);
  const [scores, setScores] = useState<Record<string, number>|null>(null);

  const methods = useFormContext<TypeFormProvider>();
  const { getValues } = methods;
  
  const formValues = getValues();

  useEffect(() => {
    const scores = calculateScores(formValues.preguntas);
    if(scores)  {
      setResult(getTheResult(scores));
      setScores(scores);
    }
  }, []);

  if(!result) return null;

  const { informacionBasicaUsuario:{nombre, apellido} } = formValues;
  const { title, carrerasRelacionadas, description, svg } = result;

  return (
    <div className="flex min-h-[calc(100vh-64px)] text-gray-800 dark:text-gray-300 flex-col py-6 pb-12 sm:py-10  gap-4 max-w-[800px] sm:py-8 mx-auto px-3 sm:px-16">
      {showModal && (
        <Modal
          title="Resultados"
          className="w-[500px] h-[300px] flex flex-col gap-4 justify-center "
          icon="info"
        >
          <div className="flex flex-col gap-4 items-center">
            <p>
              El test vocacional no refleja necesariamente la realidad de manera
              exacta, y sus resultados deben interpretarse con cautela. Es
              fundamental complementar esta herramienta con un proceso continuo
              de auto conocimiento y reflexión personal para tomar decisiones
              más informadas sobre tu carrera.
            </p>
            <button
              className="bg-blue-500 shadow hover:bg-blue-700 hover:scale-105 duration-100 dark:bg-blue-800 dark:hover:bg-blue-700 text-gray-100 dark:text-gray-300 text-sm font-bold p-2 rounded"
              onClick={() => setShowModal(false)}
            >
              He entendido y acepto las limitaciones del test
            </button>
          </div>
        </Modal>
      )}

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semi-bold text-gray-800 dark:text-gray-300">
          Felicidades{" "}
          <span className="font-bold">{nombre + " " + apellido}</span>, tu
          perfil es de <span className="text-red-500 font-bold">"{title}"</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-md flex-1">{description}</p>
          <div className="flex flex-col gap-2 bg-gray-100 shadow dark:bg-gray-800 p-3 items-center justify-center rounded">
            <h3 className="text-lg sm:text-xl font-bold text-red-500">
              Resultados:
            </h3>
            <ul className="flex flex-col gap-1">
              {scores && Object.entries(scores).map(([area, score], index) => (
                <li className="text-sm" key={index}>
                  <span className="font-semibold">{area}:</span>{" "}
                  <span className="text-red-500 font-bold">{score}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative flex sm:flex-row rounded bg-gradient-to-br bg-opacity-50 from-gray-200 from-50% to-red-400 dark:from-gray-800 dark:to-red-800 dark:from-50% dark:bg-opacity-[.15] px-2 py-4 gap-4 rounded shadow-lg flex-col justify-center items-center">
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="text-xl font-bold text-red-500">
              Carreras relacionadas:
            </h3>
            <ul className="flex flex-row flex-wrap gap-1 sm:gap-2">
              {carrerasRelacionadas.map((c, i) => (
                <li
                  className="bg-red-500 p-1 shadow rounded text-white text-sm dark:text-gray-300 "
                  key={i}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <img
            crossOrigin="anonymous"
            alt="svg"
            src={svg}
            className="w-[240px] sm:w-[280px] max-w-[300px]"
          />
          <div className="absolute -right-2 -bottom-6">
            <PDFDownloadButton
              document={
                <DocumentTemplate
                  nombre={nombre}
                  apellido={apellido}
                  resultado={result}
                />
              }
              filename={`${nombre}-${apellido}_TEST-VOCACIONAL}.pdf`}
            />
          </div>
          <div className="absolute -left-2 -bottom-6">
            <button
              title="Return to home page"
              onClick={() => navigate("/")}
              className="hover:scale-105 bg-gray-500 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 text-gray-100 p-2 flex gap-1 rounded"
            >
              <p className="hidden sm:block">Return Home</p>
              <House />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
