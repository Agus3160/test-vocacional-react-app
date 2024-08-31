import {RAISECResponses} from "../../lib/definitions";
import realisticIconUrl from '/img/svg/realistic.svg';

export type Results = {
  title: string;
  description: string;
  carrerasRelacionadas: string[];
  svg: string;
};

export const results: { [key in keyof RAISECResponses]: Results } = {
  realistic: {
    title: "Realista",
    description:
      "Las personas con un perfil realista son prácticas, directas y prefieren trabajar con herramientas, maquinaria o actividades físicas. Les gusta resolver problemas concretos y disfrutar de tareas que implican acción y movimiento. Son individuos que se sienten cómodos en entornos que requieren habilidades mecánicas, manuales o técnicas.",
    carrerasRelacionadas: [
      "Ingeniería Electromecánica",
      "Ingeniería Civil",
      "Ineniería Industrial",
      "Tecnología en Construcción",
    ],
    svg: realisticIconUrl,
  },

  investigative: {
    title: "Investigador",
    description:
      "Los individuos con un perfil investigador son analíticos, curiosos y disfrutan del pensamiento abstracto y de la investigación. Les interesa comprender cómo funcionan las cosas y suelen ser buenos en la resolución de problemas complejos, así como en la recopilación y análisis de datos. Prefieren trabajar en proyectos que requieran reflexión profunda y dedicación.",
    carrerasRelacionadas: [
      "Física",
      "Química",
      "Biología",
      "Medicina",
      "Matemáticas",
      "Estadística",
    ],
    svg: realisticIconUrl,
  },

  artistic: {
    title: "Artístico",
    description:
      "Las personas con un perfil artístico son creativas, expresivas y disfrutan de actividades que les permiten innovar y utilizar su imaginación. Prefieren trabajar en entornos flexibles y no estructurados donde pueden explorar sus ideas y conceptos únicos. Tienen una fuerte inclinación por las artes visuales, escénicas o literarias.",
    carrerasRelacionadas: [
      "Bellas Artes",
      "Diseño Gráfico",
      "Literatura",
      "Teatro",
      "Música",
      "Cine y Televisión",
      "Diseño",
      "Fotografía",
    ],
    svg: realisticIconUrl,
  },

  social: {
    title: "Social",
    description:
      "Las personas con un perfil social son empáticas, comunicativas y disfrutan ayudando a los demás. Tienen fuertes habilidades interpersonales y prefieren trabajar en entornos colaborativos. Les motiva enseñar, orientar, asesorar o prestar servicio a otras personas. Su satisfacción proviene del impacto positivo que pueden tener en la vida de otros.",
    carrerasRelacionadas: [
      "Psicología",
      "Trabajo Social",
      "Pedagogía",
      "Enfermería",
      "Sociología",
    ],
    svg: realisticIconUrl,
  },

  enterprising: {
    title: "Emprendedor",
    description:
      "Las personas con un perfil emprendedor son líderes naturales, persuasivas y disfrutan asumiendo riesgos. Les atraen las actividades que implican liderazgo, negociación y toma de decisiones. Prefieren trabajar en entornos competitivos donde puedan influir y dirigir a otros hacia la consecución de metas organizacionales.",
    carrerasRelacionadas: [
      "Administración",
      "Contabilidad",
      "Economía",
      "Administración de Empresas",
      "Derecho",
    ],
    svg: realisticIconUrl,
  },

  conventional: {
    title: "Convencional",
    description:
      "Las personas con un perfil convencional son organizadas, metódicas y prefieren seguir procedimientos claros y definidos. Les gusta trabajar con datos, manejar información y desempeñar tareas que requieren precisión y detalle. Se sienten cómodas en roles que demandan organización y administración eficiente.",
    carrerasRelacionadas: [
      "Auxiliar Contable",
      "Finanzas",
      "Administración Pública",
      "Gestión de la Información",
      "Archivística",
      "Gestión de Proyectos",
      "Secretariado",
    ],
    svg: realisticIconUrl,
  },
};
