import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

const texts = {
  en: {
    greeting: "Hi, I'm Jan",
    title: "Frontend Developer & Tech Enthusiast",
    intro:
      "I build beautiful, responsive web experiences using React, TypeScript, and Tailwind CSS.",
  },
  pl: {
    greeting: "Cześć, jestem Jan",
    title: "Frontend Developer i entuzjasta technologii",
    intro:
      "Tworzę piękne, responsywne aplikacje webowe używając React, TypeScript i Tailwind CSS.",
  },
};

function App() {
  const [lang, setLang] = useState<"en" | "pl">("en");

  const toggleLang = () => {
    setLang(lang === "en" ? "pl" : "en");
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500 min-h-screen">
      <Navbar currentLang={lang} toggleLang={toggleLang} />

      <main className="pt-24">
        <Hero
          greeting={texts[lang].greeting}
          title={texts[lang].title}
          intro={texts[lang].intro}
        />
        {/* We'll add more sections here soon */}
      </main>
    </div>
  );
}

export default App;
