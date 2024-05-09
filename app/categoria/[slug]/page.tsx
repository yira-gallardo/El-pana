import Project from "@/components/Project/Project";
import { categories } from "@/utils/utils";
import { createClient } from "contentful";

async function getData(slug: string) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  } as any);

  const entries = await client.getEntries({
    content_type: "project",
    "fields.category": slug,
  });

  return {
    props: {
      projects: entries.items,
    },
  };
}

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);
  const projects = data.props.projects || [];
  const categoryTitle =
    categories[params.slug as keyof typeof categories] || params.slug;

  return (
    <div>
      <div className="bg-yellow-400 py-10 text-center text-black pt-32">
        <h2 className="text-3xl font-bold uppercase">{categoryTitle}</h2>
      </div>
      <section className="bg-black">
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
    </div>
  );
}
