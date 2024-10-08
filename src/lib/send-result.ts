import { pdf } from "@react-pdf/renderer";
import DocumentTemplate from "../components/pdf/DocumentTemplate";
import fetchApi from "./api";
import { results } from "./data";
import { TypeFormProvider, EncuestadoApiSchemaType } from "./definitions";
import { calculateScores, getTheResult } from "./util";

const sendResult = async (data: TypeFormProvider): Promise<string> => {
  const { captchaToken, informacionBasicaUsuario, preguntas } = data;
  console.log(data);
  const encuestado: EncuestadoApiSchemaType = {
    nombre: informacionBasicaUsuario.nombre,
    apellido: informacionBasicaUsuario.apellido,
    correo: informacionBasicaUsuario.correo,
    ci: informacionBasicaUsuario.ci,
    tel: informacionBasicaUsuario.tel,
    genero: informacionBasicaUsuario.genero
      .toUpperCase()
      .replace(/\s+/g, "_") as "MASCULINO" | "FEMENINO" | "PREFIERO_NO_DECIRLO",
  };

  const scores = calculateScores(preguntas);

  if (!scores) throw new Error("No se han respondido todas las preguntas");

  const resultFieldName = getTheResult(scores);
  const resultado = results[resultFieldName];

  console.log('Result Field Name:', resultFieldName);
  console.log('Result:', resultado);

  if (!resultado || !resultado.titulo) throw new Error(`No se ha encontrado un resultado con este campo ${resultFieldName}`);
  
  const doc = DocumentTemplate({
    nombre: encuestado.nombre,
    apellido: encuestado.apellido,
    resultado,
  });

  const docPdfFile = await pdf(doc).toBlob();

  const formData = new FormData();

  formData.append("file", docPdfFile);
  formData.append("encuestado", JSON.stringify(encuestado));
  formData.append("resultado", JSON.stringify({ titulo: resultado.titulo }));
  formData.append("captchaToken", captchaToken);

  await fetchApi("resultado/encuestado", {
    method: "POST",
    body: formData,
  });

  return resultFieldName;
};

export default sendResult;
