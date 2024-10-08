import { House } from "lucide-react";
import DocumentTemplate from "../../components/pdf/DocumentTemplate";
import PDFDownloadButton from "../../components/pdf/PDFDownloadButton";
import { calculateScores } from "../../lib/util";
import { useNavigate, useParams } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { TypeFormProvider } from "../../lib/definitions";
import { useEffect, useState } from "react";
import { results } from "../../lib/data";
import ResultModal from "../../components/modal/ResultModal";
import LoadingPage from "../LoadingPage";

interface ResultArea {
  titulo: string;
  carrerasRelacionadas: string[];
  description: string;
  svg: string;
}

export default function Results() {
  const navigate = useNavigate();

  const { result } = useParams<{ result: string }>();

  if (!result || !Object.keys(results).includes(result)) navigate("/");

  const { getValues, trigger } = useFormContext<TypeFormProvider>();

  const [resultData, setResultData] = useState<ResultArea | null>(null);
  const [useData, setUseData] = useState<{
    nombre: string;
    apellido: string;
  } | null>(null);
  const [showModal, setShowModal] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const validation = async () => {
    const valid = await trigger();
    if (!valid) return navigate("/");
  };

  const resultEffect = async () => {
    await validation();
    setUseData(getValues("informacionBasicaUsuario"));
    if(result) setResultData(results[result]);
    setLoading(false);
  };

  useEffect(() => {
    resultEffect();
  }, []);

  if (loading || !resultData || !useData) return <LoadingPage />;

  const { nombre, apellido } = useData;
  const scores = calculateScores(getValues("preguntas"));
  const { titulo, description, carrerasRelacionadas, svg } = resultData;

  return (
    <div className="flex items-center text-gray-800 dark:text-gray-300 flex-col py-6 mb-8 sm:py-12 gap-4 max-w-[800px] mx-auto px-3 sm:px-16">
      {showModal && <ResultModal setShowModal={setShowModal} />}

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semi-bold text-gray-800 dark:text-gray-300">
          Felicidades{" "}
          <span className="font-bold">{nombre + " " + apellido}</span>, tu
          perfil es de <span className="text-red-500 font-bold">"{titulo}"</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <p className="text-md flex-1">{description}</p>
          <div className="flex flex-col gap-2 bg-gray-100 shadow dark:bg-gray-800 p-3 items-center justify-center rounded">
            <h3 className="text-lg sm:text-xl font-bold text-red-500">
              Resultados:
            </h3>
            <ul className="flex flex-col gap-1">
              {scores &&
                Object.entries(scores).map(([area, score], index) => (
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
                  className="bg-red-500 p-1 shadow rounded text-white text-sm dark:text-gray-300"
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
          <div className="absolute -right-1 -bottom-6">
            <PDFDownloadButton
              document={
                <DocumentTemplate
                  nombre={nombre}
                  apellido={apellido}
                  resultado={resultData}
                />
              }
              filename={`${nombre}-${apellido}_TEST-VOCACIONAL.pdf`}
            />
          </div>
          <div className="absolute -left-1 -bottom-6">
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
