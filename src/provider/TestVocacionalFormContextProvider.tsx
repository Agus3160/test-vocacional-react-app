import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formProviderSchema, TypeFormProvider } from "../lib/definitions";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { handleBeforeUnload } from "../lib/util";

export default function TestVocacionalFormContextProvider() {
  const methods = useForm<TypeFormProvider>({
    resolver: zodResolver(formProviderSchema),
    defaultValues: {
      preguntas: {
        respuestas: Array(50).fill({ puntaje: undefined, area: undefined }),
      },
    },
  });

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, []);

  return (
    <FormProvider {...methods}>
      <Outlet />
    </FormProvider>
  );
}
