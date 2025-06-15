import Image from "next/image";

type PropType = {
  name: string;
  prof: string;
  src: string;
};

export default function Card({ name, prof, src }: PropType) {
  return (
    <div className="max-w-xs mx-auto mt-10 rounded-xl shadow-md border overflow-hidden transition-transform duration-300 hover:scale-105 ">
      <div className="flex flex-col items-center p-6">
        <Image
          src={src}
          alt={`${name}'s image`}
          height={120}
          width={120}
          className="rounded-full object-cover shadow-md"
        />
        <h2 className="mt-4 text-xl font-semibold text-emerald-600">{name}</h2>
        <p className="text-emerald-600">{prof}</p>
      </div>
    </div>
  );
}
