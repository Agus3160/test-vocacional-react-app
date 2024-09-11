import z from "zod";
import { isPhoneValid } from "./util";

/********************** FORMULARIO TYPES **************************/

export const userBasicInfoSchema = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "El nombre es demasiado extenso (Max. 50 caracteres)"),
  apellido: z
    .string()
    .min(1, "El apellido es requerido")
    .max(50, "El apellido es demasiado extenso (Max. 50 caracteres)"),
  ci: z
    .string()
    .min(5, "El CI es requerido (Min. 5 caracteres)")
    .regex(/^\d+$/, {
      message: "Solo puede contener numeros.",
    }),
  genero: z.enum(["Masculino", "Femenino", "Prefiero no decirlo"]),
  correo: z
    .string()
    .email("El correo no es valido")
    .optional()
    .or(z.literal("")),
  telCodigoPais: z.string().optional().or(z.literal("")),
  tel: z
  .string()
  .optional() // El campo sigue siendo opcional
  .refine((v) => {
    if (!v) return true;
    return v.trim() === "" || v.trim().split(" ").length == 1 || isPhoneValid(v);
  }, { message: "El teléfono no es válido" }),
  carrerasPreferencias: z.string().array().optional(),
});
export type UserBasicInfo = z.infer<typeof userBasicInfoSchema>;

export const respuestasSchema = z.object({
  respuestas: z.array(
    z.object({
      puntaje: z.number().min(0).max(1),
      area: z.enum([
        "ARTE Y CREATIVIDAD",
        "CIENCIAS SOCIALES",
        "ECONOMICA ADMINISTRATIVA Y FINANCIERA",
        "CIENCIAS Y TECNOLOGIA",
        "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD",
      ]),
    })
  ),
});
export type RespuestasSchemaType = z.infer<typeof respuestasSchema>;

export const formProviderSchema = z.object({
  informacionBasicaUsuario: userBasicInfoSchema,
  preguntas: respuestasSchema,
});
export type TypeFormProvider = z.infer<typeof formProviderSchema>;

/************************* AREAS ****************************/

export type EnumAreas =
  | "ARTE Y CREATIVIDAD"
  | "CIENCIAS SOCIALES"
  | "ECONOMICA ADMINISTRATIVA Y FINANCIERA"
  | "CIENCIAS Y TECNOLOGIA"
  | "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD";

/********************* USER CONTEXT **************************/

export type UserTestSession = UserBasicInfo & {
  resultado: string;
  token: string;
};

export type UserContextType = {
  //Values
  user: UserTestSession | null;

  //Functions
  getToken: () => string;
  setUser: (user: UserTestSession) => void;
};

/*************************** UTILS **************************/

export type PreguntaAreaType = {
  area:
    | "ARTE Y CREATIVIDAD"
    | "CIENCIAS SOCIALES"
    | "ECONOMICA ADMINISTRATIVA Y FINANCIERA"
    | "CIENCIAS Y TECNOLOGIA"
    | "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD";
  preguntas: string;
};

export type ResultType = {
  title: string;
  description: string;
  carrerasRelacionadas: string[];
  svg: string;
};
