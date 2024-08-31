import z from "zod"

export const userBasicInfoSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido").max(50, "El nombre es demasiado extenso (Max. 50 caracteres)"),
  apellido: z.string().min(1, "El apellido es requerido").max(50, "El apellido es demasiado extenso (Max. 50 caracteres)"),
  correo: z.string().email("El correo no es valido").optional().optional().or(z.literal("")),
})
export type UserBasicInfo = z.infer<typeof userBasicInfoSchema>

export enum stepState {
  active = "active",
  finished = "finished",
  none = "none",
}

export type FormContextValueType = {
  nombre: string
  apellido:string
  correo?:string
  steps: StepType[]
  currentStep: number
}

export type StepType = {
  index: number
  state: stepState
  title:string;
}

export type FormContextType = {
  formValues: FormContextValueType

  //Functions
  setStepByIndex: (newState:stepState, index: number) => void
  setUpSteps: (steps: StepType[]) => void
  setFormValues: (context: FormContextValueType) => void
  setCurrentStep: (newStep: number) => void
}

export type FormContextProviderParams = {
  steps?: StepType[]
  children: JSX.Element
}
