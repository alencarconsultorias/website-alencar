// app/equipes/page.tsx
import Image from "next/image";

const team = [
  {
    name: "Alison Alencar",
    role: "CEO & Founder",
    bio: "Especialista em tecnologia e gestão de equipes multidisciplinares. Fundador da Alencar Consultorias.",
    image: "/equipe/alison.jpg", // Coloque sua imagem na pasta public/equipe/
    linkedin: "https://www.linkedin.com/in/alisonalencar/",
  },
  {
    name: "Ana Souza",
    role: "Consultora Comercial",
    bio: "Foco em relacionamento com clientes e implantação de soluções tecnológicas no segmento empresarial.",
    image: "/equipe/ana.jpg",
    linkedin: "https://www.linkedin.com/in/ana-souza/",
  },
  {
    name: "Carlos Silva",
    role: "Desenvolvedor Full Stack",
    bio: "Desenvolve e integra soluções web para automatizar processos e garantir alta performance.",
    image: "/equipe/carlos.jpg",
    linkedin: "https://www.linkedin.com/in/carlos-silva/",
  },
];

export default function Equipe() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">Nossa Equipe</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Conheça o time que faz a diferença na entrega de soluções e consultorias em tecnologia.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-center text-gray-600 mb-4">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
