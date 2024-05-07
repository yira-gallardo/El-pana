import Project from "@/components/Project/Project";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import { createClient } from "contentful";
import HomeHeader from "@/components/HomeHeader/HomeHeader";
export const dynamic = "force-dynamic";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  } as any);

  const entries = await client.getEntries({
    content_type: "project",
  });

  console.log(entries.items);

  return {
    props: {
      projects: entries.items,
    },
  };
}

export default async function Home() {
  const data = await getData();
  const { projects } = data.props;
  const headerProjects = projects.slice(0, 6);

  return (
    <main>
      <Nav />
      <HomeHeader projects={headerProjects} />
      <div className="bg-yellow-400 py-10 text-center text-black">
        <p className="text-lg ">
          Producción Musical • Composición • Arreglos • Covers • Jingles • Score
          • Sound Design
        </p>
      </div>
      <section className="bg-black py-8">
        <h2 className="text-3xl text-center font-bold mb-4 py-12">
          <span className="text-yellow-500 ">ÚLTIMOS PROYECTOS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project: any, idx: number) => (
            <Project
              key={idx}
              title={project.fields.title}
              subtitle={project.fields.subtitle}
              image={project.fields.image.fields?.file.url}
            />
          ))}
        </div>
      </section>
      <section className="bg-black">
        <div className="container mx-auto py-8">
          <h2 className="text-4xl text-center  mb-4 text-white">
            <span className="text-white tracking-widest">CONTACTO</span>
          </h2>
          <div className="my-20">
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-4 font-bold border-2 border-white bg-black"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-4 font-bold border-2 border-white bg-black"
                />
              </div>
              <textarea
                className="w-full p-4 mb-4 font-bold border-2 border-white h-80 bg-black"
                placeholder="Tu mensaje"
              />
              <button
                className="w-full p-2 text-white font-black border-2 bg-black border-white
                hover:bg-white hover:text-black transition duration-300 ease-in-out
              "
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
