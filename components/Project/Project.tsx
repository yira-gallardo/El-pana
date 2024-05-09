import Link from "next/link";

export default function Project({
  title,
  subtitle,
  image,
  slug,
}: {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
}) {
  return (
    <Link href={`/proyectos/${slug}`} className="relative h-[300px]">
      <div
        className="absolute w-full h-full bg-cover bg-center w-full relative z-0"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-300 flex flex-col justify-end items-start p-4 text-white">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
    </Link>
  );
}
