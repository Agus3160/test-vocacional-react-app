import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import BasicUserInfo from "./BasicUserInfo";
import Questions from "./Questions";
import { TypeFormProvider } from "../../lib/definitions";
import RouteNotFound from "../RouteNotFound";

function StepManager() {
  const { stepId } = useParams();
  const { formState: { errors }, clearErrors } = useFormContext<TypeFormProvider>();
  const navigate = useNavigate();

  const currentStep = parseInt(stepId || "1", 10);

  const validateSteps = () => {
    if (currentStep > 1 && errors.informacionBasicaUsuario){ 
      navigate("/test-vocation/step/1");
      clearErrors();
    }
  };

  useEffect(() => {
    validateSteps();
  }, [currentStep, navigate, errors]);

  switch (currentStep) {
    case 1:
      return <BasicUserInfo />;
    case 2:
      return <Questions />;
    default:
      return <RouteNotFound />;
  }
}

export default StepManager;
