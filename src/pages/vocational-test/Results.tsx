import { House } from "lucide-react";
import DocumentTemplate from "../../components/pdf/DocumentTemplate";
import PDFDownloadButton from "../../components/pdf/PDFDownloadButton";
import { useFormContext } from "../../context/FormContext";
import { calculateScores, getResult } from "../../lib/util";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const {
    formValues: { responses, nombre, apellido },
  } = useFormContext();

  const navigate = useNavigate();

  const scores = calculateScores(responses);
  const result = getResult(scores);
  const { title, carrerasRelacionadas, description, svg } = result;

  return (
    <div className="w-full h-full text-gray-800 dark:text-gray-300 max-w-[800px] mx-auto pb-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semi-bold text-gray-800 dark:text-gray-300">
          Felicidades{" "}
          <span className="font-bold">{nombre + " " + apellido}</span>, tu
          perfil es de <span className="text-red-500 font-bold">"{title}"</span>
        </h2>
        <p className="text-md">{description}</p>
        <div className="relative flex sm:flex-row rounded bg-gray-100 dark:bg-gray-800 px-2 py-4 gap-4 rounded shadow flex-col justify-center items-center">
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="text-xl font-bold text-red-500">
              Carreras relacionadas:
            </h3>
            <ul className="flex flex-col gap-1 sm:gap-2">
              {carrerasRelacionadas.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <img
            crossOrigin="anonymous"
            alt="svg"
            src={svg}
            className=" w-[240px] sm:w-[280px] max-w-[300px]"
          />
          <div className="absolute -right-1 -bottom-4">
            <PDFDownloadButton
              document={<DocumentTemplate nombre={nombre} apellido={apellido} resultado={result} />}
              filename={`${nombre}-${apellido}_TEST-VOCACIONAL}.pdf`}
            />
          </div>
          <div className="absolute -left-1 -bottom-4">
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
