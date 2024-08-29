import { useFormContext } from "../../context/FormContext"
import { userBasicInfoSchema, UserBasicInfo } from "../../lib/definitions"
import GenericForm from "./global/GenericForm"
import { useNavigate } from "react-router-dom"

export default function BasicUserInfoForm() {

  const {
   formValues,
   setFormValues, 
  } = useFormContext()
  const navigate = useNavigate()

  const cancelHanlder = () => {
    navigate("/")
  }

  const handleSubmit = (data:UserBasicInfo) => {
    setFormValues({ ...formValues, 
      nombre:data.nombre,
      apellido: data.apellido,
      correo: data.correo
     });
  }

  console.log(formValues)

  return (
      <GenericForm 
        title="Información personal"
        buttons={[
          {
            type: "button",
            value:"Cancelar",
            onClick: cancelHanlder,
            className: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex gap-2",
          },
          {
            type: "submit",
            value:"Siguiente",
            className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex gap-2",
          }
        ]}
        schema={userBasicInfoSchema}
        onSubmit={(d)=>handleSubmit(d)}
        fields={[
          {
            name: "nombre",
            label: "Nombre",
            type: "text",
            placeholder: "Ingrese su nombre completo",
          },
          {
            name: "apellido",
            label: "Apellido",
            type: "text",
            placeholder: "Ingrese su apellido completo",
          },
          {
            name: "correo",
            label: "Correo",
            type: "email",
            placeholder: "johndoe123@example.com",
            advice: "No compartiremos tu correo con nadie. Es con la unica finalidad de que recibas el PDF en tu correo.",
          },
        ]}
      />
  )
}