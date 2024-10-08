import { useEffect, useRef, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { EnumAreas, TypeFormProvider } from "../../lib/definitions";
import ScoreInput from "../../components/forms/inputs/score-input/ScoreInput";
import { puntajesDosOpcionesEmojiStyle } from "../../components/forms/inputs/score-input/data";
import { preguntasTestVocacional } from "../../lib/data";
import { useNavigate } from "react-router-dom";
import sendResult from "../../lib/send-result";
import QuestionsModal from "../../components/modal/QuestionsModal";
import NavForm from "../../components/ui/NavForm";
import Captcha from "../../components/forms/Captcha";
import { toastError, toastSuccess } from "../../lib/toast";


export default function Questions() {
  const methods = useFormContext<TypeFormProvider>();
  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const { fields } = useFieldArray({
    control: control,
    name: "preguntas.respuestas",
  });

  const respuestas = getValues("preguntas.respuestas") || [];
  const isInProgress = respuestas.some((resp) => resp.puntaje !== undefined);
  const [modal, setModal] = useState(!isInProgress);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  const getFirstErrorIndex = () => {
    const errorKeys = Object.keys(errors.preguntas?.respuestas || {});
    return errorKeys.length > 0 ? parseInt(errorKeys[0], 10) : null;
  };

  useEffect(() => {
    const firstErrorIndex = getFirstErrorIndex();
    if (firstErrorIndex === null) return;
    questionRefs.current[firstErrorIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [fields, errors]);

  useEffect(() => {
    !isInProgress && window.scrollTo(0, 0);
  }, []);

  const onClickHandler = (area: EnumAreas, puntaje: number, index: number) => {
    setValue(
      `preguntas.respuestas.${index}`,
      { puntaje, area },
      { shouldValidate: true }
    );
  };

  const onSubmit = async (data: TypeFormProvider) => {
    try{
      const resultFieldName = await sendResult(data);
      navigate(`/test-vocation/result/${resultFieldName}`);
      toastSuccess("Formulario enviado exitosamente");
    }catch(e){
      if(e instanceof Error) toastError(e.message);
      toastError("Ha ocurrio un error al enviar el formulario");
    }
  };

  const onVerifyCaptcha = (token: string | null) => {
    if (token) setValue("captchaToken", token, { shouldValidate: true });
  };

  const onExpireCaptcha = () => {
    setValue("captchaToken", "", { shouldValidate: true });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-container flex items-center text-gray-800 dark:text-gray-300 flex-col py-6 sm:py-12 gap-4 max-w-[800px] sm:py-8 mx-auto px-3 sm:px-16"
    >
      {modal && <QuestionsModal setModal={setModal} />}

      <h2 className="text-2xl font-semi-bold text-center">Test Vocacional</h2>
      <div className="flex flex-col sm:gap-8 gap-16 my-8 justify-center items-center">
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

      <Captcha onExpireCaptcha={onExpireCaptcha} error={errors.captchaToken?.message} onVerifyCaptcha={onVerifyCaptcha} />

      <NavForm
        backBtnProps={{
          onClick: () => navigate("/test-vocation/step/1"),
        }}
        nextBtnProps={{
          type: "submit",
          disabled: isSubmitting,
        }}
      />
    </form>
  );
}
