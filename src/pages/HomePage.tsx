import { Link } from "react-router-dom";
import CarouselCard from "../components/global/CarouselCard";
import { CardInfo } from "../components/global/Card";

export default function HomePage() {
  const panelImgUrl = "/img/home-page-baner.png";

  const cardList:CardInfo[] = [
    {
      type: "help",
      title: "¿Qué es una vocación?",
      body:"La vocación es una inclinación o llamado profundo hacia una determinada actividad o profesión, que generalmente se percibe como una misión o propósito en la vida de una persona. La vocación suele estar relacionada con la pasión y el interés genuino por una actividad específica, y a menudo está alineada con las habilidades, talentos y valores personales."
    },
    {
      type: "help",
      title: "¿Cómo ayudamos?",
      body:"En pos de analizar tu perfil para hallar aquella vocación que más se acerque a tu persona, utilizaremos un método muy reconocido, estudiado y utilizado en varias instituciones a nivel global llamado RIASEC (Llamado asi por los ámbitos que analiza) para guiarte en la identificación de tus intereses, fortalezas, aspiraciones y todo aquello que forme tu persona."
    },
    {
      type: "help",
      title: "¿Qué es el RIASEC?",
      body: "El método RIASEC te ayuda a descubrir tu vocación a través de un cuestionario que clasifica tu perfil en seis áreas: Realista, Investigador, Artístico, Social, Emprendedor, y Convencional. Basado en tus resultados, te sugerimos las carreras que mejor se alinean con tus fortalezas y preferencias, para la toma de decisiones informadas sobre tu futuro profesional.",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-64px)] w-full pb-8 sm:pb-4 px-4 sm:px-0">
      <div className=" max-w-[800px] mx-auto relative flex flex-col gap-12">
        <div className="w-full h-full">
          <div className="z-10 flex mx-auto md:flex-row flex-col-reverse gap-3 items-center justify-center ">
            <div className="flex flex-col items-start gap-4 max-w-[500px] ">
              <h2 className="text-start font-bold text-red-500 text-4xl">
                ¡ENCUENTRA TU PROFESION! 🤓
              </h2>
              <p className="text-start text-lg dark:text-gray-200 text-gray-800">
                Descubre tu verdadera vocación y encuentra la carrera
                universitaria que mejor se adapta a ti.
              </p>
              <Link
                to={"/test-vocation"}
                className="duration-100 dark:text-gray-200 hover:scale-105 text-white bg-red-500 p-2 text-xl rounded outline-none"
              >
                Empezar
              </Link>
            </div>
            <img src={panelImgUrl} className=" animate-float h-auto" />
          </div>
        </div>

        <CarouselCard minHeight={200} cards={cardList} />
      </div>
    </main>
  );
}
