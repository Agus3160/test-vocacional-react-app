import z from "zod";

export const userBasicInfoSchema = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "El nombre es demasiado extenso (Max. 50 caracteres)"),
  apellido: z
    .string()
    .min(1, "El apellido es requerido")
    .max(50, "El apellido es demasiado extenso (Max. 50 caracteres)"),
  correo: z
    .string()
    .email("El correo no es valido")
    .optional()
    .optional()
    .or(z.literal("")),
});
export type UserBasicInfo = z.infer<typeof userBasicInfoSchema>;

export enum stepState {
  active = "active",
  finished = "finished",
  none = "none",
  results = "results",
}

export type ScoreResponse = {
  [key: string]: number;
};

export type FormContextValueType = {
  nombre: string;
  apellido: string;
  correo?: string;
  steps: StepType[];
  currentStep: number;
  responses: RIASECResponses;
};

export type StepType = {
  index: number;
  state: stepState;
  title: string;
};

export type FormContextType = {
  formValues: FormContextValueType;

  //Functions

  //Managing the steps
  setStepByIndex: (newState: stepState, index: number) => void;
  setUpSteps: (steps: StepType[]) => void;
  nextStep: () => void;
  prevStep: () => void;
  setCurrentStep: (newStep: number) => void;

  //Change all the values of the form
  setFormValues: (context: FormContextValueType) => void;

  //Change individual values
  setResponses: (index: keyof RIASECResponses, value: number[]) => void;
};

export type FormContextProviderParams = {
  steps?: StepType[];
  children: JSX.Element;
  asksQuantity?: number;
};

export type RIASECResponses = {
  realistic: number[];
  investigative: number[];
  artistic: number[];
  social: number[];
  enterprising: number[];
  conventional: number[];
};

export type RIASECResults = {
  title: string;
  description: string;
  carrerasRelacionadas: string[];
  svg: string;
};

export type RAISECScores = {
  realistic: number;
  investigative: number;
  artistic: number;
  social: number;
  enterprising: number;
  conventional: number;
};

export const testValues = {
  nombre: "Agustin",
  apellido: "Oviedo",
  correo: undefined,
  steps: [
    {
      index: 0,
      state: stepState.active,
      title: "Informacion Basica",
    },
    {
      index: 1,
      state: stepState.none,
      title: "Intereses Prácticos",
    },
    {
      index: 2,
      state: stepState.none,
      title: "Aptitudes Investigativas",
    },
    {
      index: 3,
      state: stepState.none,
      title: "Expresión Artística",
    },
    {
      index: 4,
      state: stepState.none,
      title: "Habilidades Interpersonales",
    },
    {
      index: 5,
      state: stepState.none,
      title: "Gestión y Negocios",
    },
    {
      index: 6,
      state: stepState.none,
      title: "Eficiencia Administrativa",
    },
    {
      index: 6,
      state: stepState.results,
      title: "Resultados",
    }
  ],
  currentStep: 7,
  responses: {
    realistic: [0, 0, 0, 4, 0, 0],
    investigative: [0, 0, 0, 0, 0, 0],
    artistic: [0, 4, 0, 0, 0, 0],
    social: [0, 0, 4, 5, 0, 0],
    enterprising: [4, 5, 0, 0, 0, 0],
    conventional: [0, 0, 0, 5, 0, 0],
  }
}