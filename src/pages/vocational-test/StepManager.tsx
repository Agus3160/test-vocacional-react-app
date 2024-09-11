import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import BasicUserInfo from "./BasicUserInfo";
import Questions from "./Questions";
import Results from "./Results";
import { TypeFormProvider } from "../../lib/definitions";
import RouteNotFound from "../RouteNotFound";

function StepManager() {
  const { stepId } = useParams();
  const { trigger, clearErrors } = useFormContext<TypeFormProvider>();
  const navigate = useNavigate();

  const currentStep = parseInt(stepId || "1", 10);

  const validateStepsEffect = async () => {
    const validPreguntas = await trigger("preguntas.respuestas");
    const validBasicInfo = await trigger("informacionBasicaUsuario");
    if (!validPreguntas && currentStep === 3) navigate("/test-vocation/step/2");
    else if (!validBasicInfo && currentStep === 2) navigate("/test-vocation/step/1");
    clearErrors();
  };

  useEffect(() => {
    validateStepsEffect();
  }, [currentStep, navigate, stepId]);

  switch (currentStep) {
    case 1:
      return <BasicUserInfo />;
    case 2:
      return <Questions />;
    case 3:
      return <Results />;
    default:
      return <RouteNotFound />;
  }
}

export default StepManager;
