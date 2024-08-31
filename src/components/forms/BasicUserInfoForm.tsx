import { useFormContext } from "../../context/FormContext";
import { userBasicInfoSchema, UserBasicInfo } from "../../lib/definitions";
import GenericForm from "./global/GenericForm";
import { useNavigate } from "react-router-dom";

export default function BasicUserInfoForm() {
  const { formValues, setFormValues, setCurrentStep } = useFormContext();
  const navigate = useNavigate();

  const cancelHanlder = () => {
    navigate("/");
  };

  const handleSubmit = (data: UserBasicInfo) => {
    const { currentStep } = formValues;
    setFormValues({
      ...formValues,
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
    });
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <GenericForm
        title="Información personal"
        buttons={[
          {
            type: "button",
            value: "Cancelar",
            onClick: cancelHanlder,
            className:
              "bg-gray-500 hover:bg-gray-700 hover:scale-105 duration-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-100 dark:text-gray-300 text-sm font-bold py-2 px-4 rounded flex gap-2",
          },
          {
            type: "submit",
            value: "Siguiente",
            className:
              "bg-green-500 hover:bg-green-700 hover:scale-105 duration-100 dark:bg-green-800 dark:hover:bg-green-700 text-green-100 dark:text-gray-300 text-sm font-bold py-2 px-4 rounded flex gap-2",
          },
        ]}
        schema={userBasicInfoSchema}
        onSubmit={(d) => handleSubmit(d)}
        fields={[
          {
            name: "nombre",
            label: "Nombre",
            type: "text",
            autoComplete: "off",
            required: true,
            placeholder: "Ingrese su nombre completo",
          },
          {
            name: "apellido",
            label: "Apellido",
            type: "text",
            autoComplete: "off",
            required: true,
            placeholder: "Ingrese su apellido completo",
          },
          {
            name: "correo",
            label: "Correo",
            type: "email",
            autoComplete: "off",
            placeholder: "johndoe123@example.com",
            advice:
              "Es con la unica finalidad de que también recibas el PDF en tu correo (Este es un campo opcional)",
          },
        ]}
      />
    </>
  );
}
