// ICONOS
import realisticIconUrl from "/img/svg/realistic.svg";
import investigativeIconUrl from "/img/svg/investigative.svg";
import artisticIconUrl from "/img/svg/artistic.svg";
import medicineIconUrl from "/img/svg/medicine.svg";
import enterprisingIconUrl from "/img/svg/entrepreneur.svg";

// DEFINICIONES
import { PreguntaAreaType, ResultType } from "./definitions";

export const preguntasTestVocacional: PreguntaAreaType[] = [
  // Arte y Creatividad
  { area: "ARTE Y CREATIVIDAD", preguntas: "Ilustrar, dibujar y animar digitalmente." },
  { area: "ARTE Y CREATIVIDAD", preguntas: "Tocar un instrumento y componer música." },
  { area: "ARTE Y CREATIVIDAD", preguntas: "Pintar, hacer esculturas, ilustrar libros de arte, etc." },
  { area: "ARTE Y CREATIVIDAD", preguntas: "Prepararse para ser modelo profesional." },
  { area: "ARTE Y CREATIVIDAD", preguntas: "Diseñar juegos interactivos electrónicos para computadora." },
  { area: "ARTE Y CREATIVIDAD", preguntas: "Redactar guiones y libretos para un programa de tv." },
  { area: "ARTE Y CREATIVIDAD", preguntas: "Crear campañas publicitarias." },
  { area: "ARTE Y CREATIVIDAD", preguntas: "Rediseñar y decorar espacios físicos en viviendas, oficinas y locales comerciales." },
  { area: "ARTE Y CREATIVIDAD", preguntas: "Diseñar ropa para niños, jóvenes y adultos de manera sustentable." },
  { area: "ARTE Y CREATIVIDAD", preguntas: "Restaurar piezas y obras de arte." },

  // Ciencias Sociales
  { area: "CIENCIAS SOCIALES", preguntas: "Realizar excavaciones para descubrir restos del pasado." },
  { area: "CIENCIAS SOCIALES", preguntas: "Organizar eventos y atender a sus asistentes." },
  { area: "CIENCIAS SOCIALES", preguntas: "Defender a clientes individuales o empresas en juicios de diferente naturaleza." },
  { area: "CIENCIAS SOCIALES", preguntas: "Investigar las causas y efectos de los trastornos emocionales." },
  { area: "CIENCIAS SOCIALES", preguntas: "Escribir artículos periodísticos, cuentos, novelas y otros." },
  { area: "CIENCIAS SOCIALES", preguntas: "Estudiar la diversidad cultural en el ámbito rural y urbano." },
  { area: "CIENCIAS SOCIALES", preguntas: "Gestionar y evaluar convenios internacionales de cooperación para el desarrollo social." },
  { area: "CIENCIAS SOCIALES", preguntas: "Gestionar y evaluar proyectos de desarrollo en una institución educativa y/o fundación." },
  { area: "CIENCIAS SOCIALES", preguntas: "Estudiar idiomas extranjeros —actuales y antiguos— para hacer traducción." },
  { area: "CIENCIAS SOCIALES", preguntas: "Tratar a niños, jóvenes y adultos con problemas psicológicos." },

  // Económica, Administrativa y Financiera
  { area: "ECONOMICA ADMINISTRATIVA Y FINANCIERA", preguntas: "Seleccionar, capacitar y motivar al personal de una organización o empresa." },
  { area: "ECONOMICA ADMINISTRATIVA Y FINANCIERA", preguntas: "Planificar las metas de una organización pública o privada a mediano y largo plazos." },
  { area: "ECONOMICA ADMINISTRATIVA Y FINANCIERA", preguntas: "Controlar ingresos y egresos de fondos y presentar el balance final de una institución." },
  { area: "ECONOMICA ADMINISTRATIVA Y FINANCIERA", preguntas: "Defender a clientes individuales o empresas en juicios de diferente naturaleza." },
  { area: "ECONOMICA ADMINISTRATIVA Y FINANCIERA", preguntas: "Elaborar campañas para introducir un nuevo producto al mercado." },
  { area: "ECONOMICA ADMINISTRATIVA Y FINANCIERA", preguntas: "Supervisar las ventas de un centro comercial." },
  { area: "ECONOMICA ADMINISTRATIVA Y FINANCIERA", preguntas: "Aconsejar a las personas sobre planes de ahorro e inversiones." },
  { area: "ECONOMICA ADMINISTRATIVA Y FINANCIERA", preguntas: "Tener un negocio propio de tipo comercial." },
  { area: "ECONOMICA ADMINISTRATIVA Y FINANCIERA", preguntas: "Organizar un plan de distribución y venta de un gran almacén." },
  { area: "ECONOMICA ADMINISTRATIVA Y FINANCIERA", preguntas: "Administrar una empresa de turismo o agencias de viaje." },

  // Ciencias y Tecnología
  { area: "CIENCIAS Y TECNOLOGIA", preguntas: "Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet." },
  { area: "CIENCIAS Y TECNOLOGIA", preguntas: "Resolver problemas de cálculo para construir un puente." },
  { area: "CIENCIAS Y TECNOLOGIA", preguntas: "Diseñar y planificar la producción masiva de artículos como muebles, autos, equipos de oficina, empaques y envases para alimentos y otros." },
  { area: "CIENCIAS Y TECNOLOGIA", preguntas: "Concebir planos para viviendas, edificios y ciudadelas." },
  { area: "CIENCIAS Y TECNOLOGIA", preguntas: "Investigar y probar nuevos productos farmacéuticos." },
  { area: "CIENCIAS Y TECNOLOGIA", preguntas: "Diseñar máquinas que puedan simular actividades humanas." },
  { area: "CIENCIAS Y TECNOLOGIA", preguntas: "Elaborar mapas, planos e imágenes para el estudio y análisis de datos geográficos." },
  { area: "CIENCIAS Y TECNOLOGIA", preguntas: "Dedicarse a fabricar productos alimenticios de consumo masivo." },
  { area: "CIENCIAS Y TECNOLOGIA", preguntas: "Manejar o dar mantenimiento a dispositivos tecnológicos en aviones, barcos, radares, etc." },
  { area: "CIENCIAS Y TECNOLOGIA", preguntas: "Revisar y dar mantenimiento a artefactos eléctricos, electrónicos y computadoras." },

  // Ciencias Ecológicas, Biológicas y de Salud
  { area: "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD", preguntas: "Revisar y dar mantenimiento a artefactos eléctricos, electrónicos y computadoras." },
  { area: "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD", preguntas: "Investigar sobre áreas verdes, medioambiente y cambios climáticos." },
  { area: "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD", preguntas: "Diseñar cursos para enseñar a la gente sobre temas de salud e higiene." },
  { area: "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD", preguntas: "Atender la salud de personas enfermas." },
  { area: "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD", preguntas: "Hacer experimentos con plantas (frutas, árboles, flores)." },
  { area: "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD", preguntas: "Examinar y tratar los problemas visuales." },
  { area: "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD", preguntas: "Atender y realizar ejercicios a personas que tienen limitaciones físicas, problemas de lenguaje, etc." },
  { area: "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD", preguntas: "Realizar el control de calidad de los alimentos." },
  { area: "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD", preguntas: "Investigar organismos vivos para elaborar vacunas." },
  { area: "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD", preguntas: "Atender la salud dental de las personas." },
];

export const results:Record<string, ResultType> = {
  "CIENCIA Y TECNOLOGIA": {
    title: "Ciencia y Tecnología",
    description:
      "Las personas con un perfil técnico y lógico disfrutan resolviendo problemas complejos mediante el uso de herramientas tecnológicas, matemáticas y científicas. Les gusta investigar, experimentar y aplicar el conocimiento para mejorar procesos y diseñar nuevas soluciones. Su interés por el detalle y la precisión los hace destacar en campos relacionados con la innovación tecnológica y el análisis.",
    carrerasRelacionadas: [
      "Ingeniería Civil",
      "Ingeniería Electromecánica",
      "Ingeniería Industrial",
      "Ingeniería Informática",
      "Física",
      "Matemáticas",
      "Ingeniería en Estadística",
      "Biotecnología Ambiental",
    ],
    svg: realisticIconUrl,
  },

  "CIENCIAS SOCIALES": {
    title: "Ciencias Sociales",
    description:
      "Las personas con un perfil enfocado en las ciencias sociales son empáticas, analíticas y tienen un fuerte interés por comprender y mejorar las interacciones humanas y sociales. Les apasiona estudiar el comportamiento humano, las culturas, las estructuras sociales y el bienestar colectivo. Son hábiles para investigar, escribir y trabajar en equipo en áreas que promueven el desarrollo y la justicia social.",
    carrerasRelacionadas: [
      "Psicología",
      "Trabajo Social",
      "Idiomas",
      "Historia y Geografía",
      "Periodismo",
      "Psicopedagogía",
      "Relaciones Internacionales y Diplomáticas",
      "Ciencias Políticas",
      "Derecho"
    ],
    svg: investigativeIconUrl,
  },

  "ARTE Y CREATIVIDAD": {
    title: "Arte y Creatividad",
    description:
      "Las personas creativas y artísticas disfrutan expresarse a través de formas visuales, musicales o literarias. Tienen una fuerte imaginación y suelen buscar formas innovadoras de representar ideas y emociones. Prefieren entornos de trabajo flexibles donde pueden experimentar con nuevos conceptos y técnicas, y les motiva la posibilidad de influir culturalmente a través de su obra.",
    carrerasRelacionadas: [
      "Diseño Gráfico",
      "Diseño y Decoración de Interiores",
      "Diseño de Modas",
      "Teatro",
      "Música",
      "Cine y Televisión",
      "Producción Audiovisual",
      "Fotografía",
    ],
    svg: artisticIconUrl,
  },

  "ECONOMICA ADMINISTRATIVA Y FINANCIERA": {
    title: "Económica Administrativa y Financiera",
    description:
      "Las personas interesadas en el área económica, administrativa y financiera disfrutan gestionando recursos, planificando estrategias y tomando decisiones que influyen en el éxito de organizaciones. Tienen habilidades para la organización, la negociación y la solución de problemas empresariales. Les atraen los desafíos de liderar equipos, optimizar procesos y maximizar el rendimiento financiero.",
    carrerasRelacionadas: [
      "Administración de Empresas",
      "Contabilidad",
      "Auditoría",
      "Ventas",
      "Marketing",
      "Banca y Finanzas",
      "Ciencias Económicas y Financieras",
      "Gestión de Recursos Humanos",
      "Emprendimiento"
    ],
    svg: enterprisingIconUrl,
  },

  "CIENCIAS ECOLOGICAS, BIOLOGICAS Y DE SALUD": {
    title: "Ciencias Ecológicas, Biológicas y de Salud",
    description:
      "Las personas interesadas en las ciencias biológicas, ecológicas y de la salud son apasionadas por el bienestar humano y ambiental. Disfrutan investigar organismos vivos, cuidar la salud de las personas y contribuir a la sostenibilidad del medioambiente. Son individuos comprometidos con el cuidado de los ecosistemas y la mejora de la calidad de vida a través de la ciencia y la medicina.",
    carrerasRelacionadas: [
      "Medicina",
      "Biología",
      "Bioquímica",
      "Farmacología",
      "Ciencias Ambientales",
      "Odontología",
      "Agronomía",
      "Veterinaria",
      "Enfermería"
    ],
    svg: medicineIconUrl,
  },
};

