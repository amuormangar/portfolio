import React from "react";

type Project = {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  year?: string;
  url?: string;
};

const projects: Project[] = [
  {
    title: "EcoRise",
    desc: "A platform for sustainable living through community engagement, challenges and micro-incentives that motivate eco-friendly actions.",
    img: "/homepage.jpg",
    tags: ["Kotlin", "SQL"],
    year: "2025",
    url: "#ecorise",
  },
  {
    title: "MaliPoFlex (App)",
    desc: "Mobile app that enables small, recurring pension contributions so users can incrementally build retirement savings.",
    img: "/malipoflex-app.png",
    tags: ["Kotlin", "Postgres"],
    year: "2025",
    url: "#malipoflex-app",
  },
  {
    title: "MaliPoFlex (Dashboard)",
    desc: "Admin/dashboard for MaliPoFlex — analytics and contribution management (web dashboard).",
    img: "/Dashboard.png",
    tags: ["Next.js", "React", "Tailwind"],
    year: "2025",
    url: "#malipoflex-dashboard",
  },
];

export default function ProjectsGrid(){
  return (
    <section id="projects" className="mt-12 px-4 md:px-6 lg:px-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Recent Projects</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj) => (
          <article
            key={proj.title}
            className="flex flex-col h-full bg-transparent group rounded-xl overflow-hidden shadow-lg border border-slate-800"
            aria-labelledby={`project-${proj.title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <div className="h-64 md:h-72 lg:h-80 bg-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src={proj.img}
                alt={proj.title}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="bg-[#0f2631] p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 id={`project-${proj.title}`} className="text-xl font-semibold text-white">
                  {proj.title}
                </h3>
                <p className="text-slate-300 mt-3 text-sm">{proj.desc}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs inline-block bg-[#071827] text-slate-200 px-3 py-1 rounded-full border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href={proj.url}
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-full shadow"
                >
                  View Project
                </a>
                <div className="text-sm text-slate-400">{proj.year}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}