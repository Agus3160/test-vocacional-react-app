import z from "zod"

export const userBasicInfoSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido").max(50, "El nombre es demasiado extenso (Max. 50 caracteres)"),
  apellido: z.string().min(1, "El apellido es requerido").max(50, "El apellido es demasiado extenso (Max. 50 caracteres)"),
  correo: z.string().email("El correo no es valido").optional().optional().or(z.literal("")),
})
export type UserBasicInfo = z.infer<typeof userBasicInfoSchema>

export type FormContextValue = {
  nombre: string
  apellido:string
  correo?:string
  step:number
}

export type FormContextType = {
  formValues: FormContextValue
  setStep: (step: number) => void
  setFormValues: (context: FormContextValue) => void
}

export type FormContextProviderParams = {
  children: JSX.Element
}