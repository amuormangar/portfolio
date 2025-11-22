"use client";

import { useEffect, useState } from "react";
import { Compass, Palette, Search, FlaskConical, Figma } from 'lucide-react';

const ROLES = [
  "UX/UI Designer",
  "UX Researcher",
  "Frontend Developer",
  "Mobile Developer",
  "Backend Developer",
  "QA Engineer",
  "Product Manager",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const holdMs = 2200;
    const fadeMs = 300;

    const tick = () => {
      setVisible(false);
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, fadeMs);
      return () => clearTimeout(t);
    };

    const interval = setInterval(tick, holdMs + fadeMs);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-10">
      <div className="absolute -right-28 top-8 w-96 h-96 rounded-full bg-gradient-to-br from-slate-800/60 to-slate-700/30 blur-2xl pointer-events-none" />
      <div className="absolute right-10 top-44 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/24 to-blue-400/20 blur-xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 lg:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
         <span className="text-white">HAY!  I'M AMUOR</span>
            <br />
            <span aria-live="polite" className="inline-block overflow-hidden align-middle">
              <span
                className={
                  "inline-block transition-transform duration-300 ease-out transform origin-left " +
                  (visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0")
                }
              >
                <span className="text-blue-400 uppercase tracking-wider font-semibold">I'M {ROLES[index]}</span>
              </span>
            </span>
          </h1>

          <p className="text-slate-300 max-w-xl text-lg">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-full shadow">
              GET IN TOUCH
            </a>

            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-full bg-[#1f9cff] flex items-center justify-center text-white" aria-label="facebook">f</button>
              <button className="w-9 h-9 rounded-full bg-[#ff6188] flex items-center justify-center text-white" aria-label="pinterest">p</button>
              <button className="w-9 h-9 rounded-full bg-[#0a66c2] flex items-center justify-center text-white" aria-label="linkedin">in</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            <svg className="absolute -left-20 -top-10 w-64 h-64" viewBox="0 0 200 200" fill="none" aria-hidden>
              <g stroke="#103246" strokeWidth="1.8" strokeOpacity="0.7">
                <path d="M0 100 H200" />
                <path d="M10 120 H190" />
                <path d="M20 80 H180" />
                <path d="M30 140 H170" />
                <path d="M40 60 H160" />
              </g>
            </svg>

            <div className="rounded-full bg-gradient-to-br from-white/5 to-white/3 p-5">
              <img
                src="/amor.png"
                alt="avatar"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-slate-800 shadow-xl"
              />
            </div>
            <div className="absolute -left-6 -bottom-8 w-12 h-12 rounded-full bg-cyan-500/60 blur-sm" />
            <div className="absolute right-10 -bottom-6 w-8 h-8 rounded-full bg-slate-700/60" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function LogosStrip() {
  const logos = new Array(5).fill(0).map((_, i) => i);
  return (
    <section className="mt-8">
      <div className="bg-[#0d2433] rounded-md py-6 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 overflow-x-auto">
          {logos.map((i) => (
            <div key={i} className="flex-shrink-0 opacity-80">
              <div className="h-8 w-28 bg-slate-800/40 rounded flex items-center justify-center text-slate-200">logo{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900/40 to-slate-900/20 p-6 shadow-2xl border border-slate-800">
            <div className="bg-[#072232] rounded-xl p-4">
              <img src="/amuorM.jpg" alt="profile" className="w-72 h-88 object-cover rounded-xl shadow-md" />
            </div>
            <div className="mt-4 w-full flex justify-center">
              <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="text-sm text-blue-300 font-medium">ABOUT Me</div>
          <h3 className="text-3xl md:text-4xl font-bold">I AM AVAILABLE AS A FULL STACK ENGINEER</h3>
          <p className="text-slate-300 max-w-xl text-lg">
           I am a passionate full stack engineer skilled in building seamless and scalable web and mobile applications across diverse technologies, driven by a constant pursuit of elegant, efficient solutions that empower users. Combining a strong foundation in both frontend and backend development, I thrive in collaborative environments where innovation, problem-solving, and continuous learning fuel impactful digital experiences.
          </p>

      <div className="flex flex-wrap gap-4">
  <div className="flex-1 min-w-[160px] bg-[#071b2a] p-5 rounded-md border border-slate-800">
    <div className="text-slate-300 text-sm">Pending</div>
    <div className="text-white font-semibold text-lg">Completed Internship</div>
  </div>
  <div className="flex-1 min-w-[160px] bg-[#071b2a] p-5 rounded-md border border-slate-800">
    <div className="text-slate-300 text-sm">4+</div>
    <div className="text-white font-semibold text-lg">Projects Built</div>
  </div>
  <div className="flex-1 min-w-[160px] bg-[#071b2a] p-5 rounded-md border border-slate-800">
    <div className="text-slate-300 text-sm">🌟</div>
    <div className="text-white font-semibold text-lg">Team Player</div>
  </div>
</div>

          <div>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-full shadow">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const languages = [
    { name: "Kotlin", icon: "〈〉" },
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "Python", icon: "Py" },
    { name: "SQL", icon: "DB" },
  ];

  const frameworks = [
    { name: "Next.js", icon: "N" },
    { name: "React.js", icon: "⚛" },
    { name: "Tailwind CSS", icon: "◎" },
  ];

  // <--- MAIN FIX HERE: icon is a JSX ELEMENT, not a component reference!
  const product = [
    { name: "Product Management", icon: <Compass size={18} /> },
    { name: "UX/UI Design", icon: <Palette size={18} /> },
    { name: "UX Research", icon: <Search size={18} /> },
    { name: "QA", icon: <FlaskConical size={18} /> },
  ];

  const tools = [
    { name: "VS Code", icon: "" },
    { name: "GitHub", icon: "" },
    { name: "Figma", icon: <Figma size={16} /> },  // JSX element
    { name: "Adobe Illustrator", icon: "Ai" },
    { name: "Adobe Photoshop", icon: "Ps" },
    { name: "DBeaver", icon: "DB" },
    { name: "Android Studio", icon: "AS" },
    { name: "Postman", icon: "Pm" },
    { name: "Docker", icon: "Dk" },
  ];

  return (
    <section className="mt-12">
      <div className="text-center mb-8">
        <div className="text-sm text-blue-300 font-medium tracking-wider">MY EXPERTISE</div>
        <h2 className="text-4xl md:text-5xl font-extrabold">Skills & Tools</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#0e2130] rounded-xl p-6 border border-slate-800 shadow-lg">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Languages</h4>
          <ul className="space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-800 text-slate-200 text-sm font-medium">
                  {l.icon}
                </span>
                <span className="text-slate-200">{l.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#0e2130] rounded-xl p-6 border border-slate-800 shadow-lg">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Frameworks & Libraries</h4>
          <ul className="space-y-3">
            {frameworks.map((f) => (
              <li key={f.name} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-slate-900 text-sm font-semibold">
                  {f.icon}
                </span>
                <span className="text-slate-200">{f.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#0e2130] rounded-xl p-6 border border-slate-800 shadow-lg">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Product & Design</h4>
          <ul className="space-y-3">
            {product.map((p) => (
              <li key={p.name} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-700 text-blue-300 text-sm">
                  {p.icon}
                </span>
                <span className="text-slate-200">{p.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#0e2130] rounded-xl p-6 border border-slate-800 shadow-lg">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Tools & IDEs</h4>
          <p className="text-slate-300 text-sm mb-4">Tools I use daily while building, designing and testing projects.</p>
          <div className="grid grid-cols-2 gap-3">
            {tools.map((t) => (
              <div key={t.name} className="flex items-center gap-3 p-2 bg-[#071827] rounded-md border border-slate-800">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-slate-800 text-slate-200 text-sm font-medium">
                  {t.icon}
                </span>
                <span className="text-slate-200 text-sm">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}