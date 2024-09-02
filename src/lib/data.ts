import {RIASECResponses, RIASECResults, stepState, StepType} from "../lib/definitions";
import realisticIconUrl from '/img/svg/realistic.svg';
import investigativeIconUrl from '/img/svg/investigative.svg';
import artisticIconUrl from '/img/svg/artistic.svg';
import socialIconUrl from '/img/svg/social.svg';
import enterprisingIconUrl from '/img/svg/entrepreneur.svg';
import conventionalIconUrl from '/img/svg/conventional.svg';

export const steps: StepType[] = [
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
];

export const preguntasRIASEC = [
  // Realista (R)
  [
      "¿Disfrutas trabajar con tus manos, construyendo o reparando cosas?",
      "¿Te gustaría operar maquinaria o herramientas pesadas?",
      "¿Prefieres trabajos que involucren actividades físicas al aire libre?",
      "¿Te sientes cómodo siguiendo instrucciones detalladas para ensamblar algo?",
      "¿Te interesan los trabajos que requieren destrezas manuales o técnicas?",
      "¿Te gustaría trabajar en la agricultura, la construcción o la mecánica?",
      "¿Te interesa aprender cómo funcionan las máquinas o sistemas mecánicos?",
      "¿Te sientes realizado cuando terminas una tarea física o un proyecto práctico?"
  ],
  // Investigador (I)
  [
      "¿Disfrutas resolver problemas complejos y abstractos?",
      "¿Te interesa investigar nuevos descubrimientos científicos?",
      "¿Te gustaría trabajar en un laboratorio realizando experimentos?",
      "¿Te gusta analizar datos y encontrar patrones en la información?",
      "¿Prefieres trabajos que involucren pensamiento lógico y análisis profundo?",
      "¿Te interesan las matemáticas, la física o la biología?",
      "¿Te gustaría investigar y desarrollar nuevas tecnologías?",
      "¿Te sientes satisfecho cuando encuentras una solución lógica a un problema?"
  ],
  // Artístico (A)
  [
      "¿Disfrutas expresarte a través de la música, la pintura o la escritura?",
      "¿Te gustaría trabajar en un entorno creativo, como un estudio de arte o un teatro?",
      "¿Prefieres trabajos que te permitan ser original y usar tu imaginación?",
      "¿Te interesa el diseño gráfico, la moda o la fotografía?",
      "¿Te gustaría desarrollar tus propias ideas artísticas y proyectos personales?",
      "¿Te sientes cómodo en situaciones donde se valora la originalidad y la innovación?",
      "¿Te gustaría trabajar en la producción de cine, televisión o medios digitales?",
      "¿Te sientes realizado cuando creas algo que exprese tus sentimientos o ideas?"
  ],
  // Social (S)
  [
      "¿Disfrutas ayudar a los demás y trabajar en equipo?",
      "¿Te gustaría trabajar en la educación, la salud o el trabajo social?",
      "¿Prefieres trabajos que impliquen interacción con personas y apoyo emocional?",
      "¿Te interesa enseñar, entrenar o guiar a otros?",
      "¿Te gustaría trabajar en un entorno donde puedas hacer una diferencia en la vida de las personas?",
      "¿Te sientes satisfecho cuando ayudas a alguien a resolver un problema personal?",
      "¿Te interesa aprender sobre psicología, sociología o servicios humanos?",
      "¿Te sientes realizado cuando contribuyes al bienestar de los demás?"
  ],
  // Emprendedor (E)
  [
      "¿Disfrutas liderar proyectos y tomar decisiones?",
      "¿Te gustaría iniciar y gestionar tu propio negocio?",
      "¿Prefieres trabajos que involucren negociar, vender o persuadir?",
      "¿Te interesa trabajar en el mundo de los negocios, el marketing o la gestión?",
      "¿Te gustaría dirigir un equipo y asumir roles de liderazgo?",
      "¿Te sientes cómodo asumiendo riesgos para alcanzar tus metas?",
      "¿Te interesa aprender sobre finanzas, economía o estrategia empresarial?",
      "¿Te sientes realizado cuando alcanzas objetivos ambiciosos y logras el éxito?"
  ],
  // Convencional (C)
  [
      "¿Disfrutas trabajar en tareas que requieren organización y atención al detalle?",
      "¿Te gustaría trabajar en un entorno estructurado con reglas claras?",
      "¿Prefieres trabajos que impliquen seguir procedimientos y rutinas establecidas?",
      "¿Te interesa la contabilidad, la administración o la gestión de datos?",
      "¿Te gustaría mantener registros, archivar documentos o gestionar información?",
      "¿Te sientes cómodo en trabajos donde la precisión y la exactitud son importantes?",
      "¿Te interesa aprender sobre software de oficina, bases de datos o gestión de archivos?",
      "¿Te sientes realizado cuando completas tareas administrativas de manera eficiente?"
  ]
];

export const results: { [key in keyof RIASECResponses]: RIASECResults } = {
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
    svg: investigativeIconUrl,
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
    svg: artisticIconUrl,
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
    svg: socialIconUrl,
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
    svg: enterprisingIconUrl,
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
    svg: conventionalIconUrl,
  },
};
