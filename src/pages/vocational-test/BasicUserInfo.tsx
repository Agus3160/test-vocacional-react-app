import { useFormContext } from "react-hook-form";
import Input from "../../components/forms/inputs/Input";
import { TypeFormProvider, userBasicInfoSchema } from "../../lib/definitions";
import { PhoneNumberInput } from "../../components/forms/inputs/PhoneNumberInput";
import { useNavigate } from "react-router-dom";
import { CountryIso2 } from "react-international-phone";

export default function BasicUserInfo() {
  const methods = useFormContext<TypeFormProvider>();
  const navigate = useNavigate();
  const {
    register,
    setValue,
    trigger,
    getValues,
    formState: { errors },
  } = methods;

  const onSubmit = async () => {
    const valid = await trigger("informacionBasicaUsuario");
    if (!valid) return;
    navigate("/test-vocation/step/2");
  };

  const genderEnumArray: string[] =
    userBasicInfoSchema.shape.genero._def.values.map((v) => v);

  const handlePhoneNumberChange = (phone: string, country: CountryIso2) => {
    setValue("informacionBasicaUsuario.tel", phone);
    setValue("informacionBasicaUsuario.telCodigoPais", country);
  };

  const initValuesPhone = {
    phone: getValues("informacionBasicaUsuario.tel"),
    country: getValues("informacionBasicaUsuario.telCodigoPais") as
      | CountryIso2
      | undefined,
  };

  return (
    <form className="flex text-gray-800 dark:text-gray-300 flex-col py-6 sm:py-12 gap-4 max-w-[800px] sm:py-8 mx-auto px-3 sm:px-16">
      <h2 className="text-2xl font-semi-bold text-center">Datos Basicos</h2>
      <div className="flex flex-col gap-8">
        <Input
          label="Nombre"
          placeholder="Ingresa tu nombre"
          register={register}
          required
          type="text"
          errors={errors.informacionBasicaUsuario?.nombre?.message}
          name="informacionBasicaUsuario.nombre"
        />

        <Input
          label="Apellido"
          placeholder="Ingresa tu apellido"
          register={register}
          required
          type="text"
          errors={errors.informacionBasicaUsuario?.apellido?.message}
          name="informacionBasicaUsuario.apellido"
        />

        <Input
          onKeyDown={(event) => {
            if (!/^\d$/.test(event.key) && event.key !== "Backspace")
              event.preventDefault();
          }}
          label="CI"
          placeholder="Ingresa tu CI"
          register={register}
          required
          advice="Ingresa tu CI sin puntos ni guiones"
          type="text"
          errors={errors.informacionBasicaUsuario?.ci?.message}
          name="informacionBasicaUsuario.ci"
        />

        <div className="flex flex-col gap-1">
          <label className="text-gray-800 dark:text-gray-400" htmlFor="genero">
            Genero*
          </label>
          <select
            className={`text-gray-800 p-2 border-b-2 dark:text-gray-300 border-gray-500 border-gray-300 outline-none bg-transparent dark:bg-gray-900 
             ${
               errors.informacionBasicaUsuario?.genero
                 ? "border-red-500 focus:border-red-700"
                 : "focus:border-blue-700"
             }`}
            {...register("informacionBasicaUsuario.genero")}
            defaultValue={genderEnumArray[0]}
            id="genero"
            name="informacionBasicaUsuario.genero"
          >
            {genderEnumArray.map((v) => (
              <option
                className="hover:bg-gray-200 dark:hover:bg-slate-700"
                key={v}
                value={v}
              >
                {v}
              </option>
            ))}
          </select>
          {errors.informacionBasicaUsuario &&
            errors.informacionBasicaUsuario.genero && (
              <p className="text-sm text-red-500">
                {errors.informacionBasicaUsuario.genero.message as string}
              </p>
            )}
        </div>

        <Input
          label="Correo"
          placeholder="tucorreo@example.com"
          register={register}
          type="email"
          errors={errors.informacionBasicaUsuario?.correo?.message}
          name="informacionBasicaUsuario.correo"
        />

        <div className="flex flex-col gap-1">
          <label
            className="text-gray-800 dark:text-gray-300"
            htmlFor="telefono"
          >
            Telefono
          </label>
          <PhoneNumberInput
            id="telefono"
            defaultValues={initValuesPhone}
            name="telefono"
            error={errors.informacionBasicaUsuario?.tel?.message}
            onChange={handlePhoneNumberChange}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-500 hover:bg-gray-700 hover:scale-105 duration-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-100 dark:text-gray-300 text-sm font-bold py-2 px-4 rounded flex gap-2"
          >
            Atras
          </button>
          <button
            type="button"
            onClick={async () => await onSubmit()}
            className="bg-green-500 hover:bg-green-700 hover:scale-105 duration-100 dark:bg-green-800 dark:hover:bg-green-700 text-gray-100 dark:text-gray-300 text-sm font-bold py-2 px-4 rounded flex gap-2"
          >
            Siguiente
          </button>
        </div>
      </div>
    </form>
  );
}
