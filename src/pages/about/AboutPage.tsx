type Props = {};

export default function AboutPage({}: Props) {
  return (
    <main className=" w-full py-8 sm:py-4 px-4 sm:px-0">
      <div className=" max-w-[800px] mx-auto relative flex flex-col gap-12">
        <div className="flex flex-col items-start gap-4 text-gray-800 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-red-500">About</h2>
          <p>
            Este proyecto ha sido desarrollado por un grupo de estudiantes de la {" "}
            <a
              target="_blank"
              href="https://fiuni.edu.py/"
              className="duration-100 underline hover:text-red-500"
            >
              <strong>Facultad Nacional de Itapúa (FIUNI)</strong>
            </a>{" "}
            con el objetivo de demostrar las habilidades y conocimientos
            adquiridos a lo largo de nuestra formación académica.
          </p>
          <p>
            Presentado en la Expo de Ingeniería, este trabajo es el resultado de
            nuestra dedicación, creatividad y trabajo en equipo. Nuestra meta es
            no solo aplicar los principios teóricos aprendidos, sino también
            contribuir con soluciones innovadoras que aborden desafíos reales en
            nuestra comunidad y en el país.
          </p>
          <p>
            En FIUNI, creemos firmemente en el poder de la educación para
            transformar la sociedad. Este proyecto es un reflejo de nuestro
            compromiso con la excelencia, la investigación y el desarrollo
            tecnológico. Agradecemos a nuestros profesores, compañeros y todas
            las personas que nos han apoyado en este camino, y esperamos que
            este trabajo inspire a futuras generaciones de ingenieros a seguir
            explorando y creando.
          </p>
        </div>
      </div>
    </main>
  );
}
