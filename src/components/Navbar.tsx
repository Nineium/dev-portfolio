import ThemeToggle from "./theme_toggle";

interface NavbarProps {
  currentLang: "en" | "pl";
  toggleLang: () => void;
}

const labels = {
  en: { about: "About", projects: "Projects", contact: "Contact" },
  pl: { about: "O mnie", projects: "Projekty", contact: "Kontakt" },
};

const Navbar = ({ currentLang, toggleLang }: NavbarProps) => {
  const t = labels[currentLang];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-y-4">
        {/* Logo */}
        <div className="text-xl font-bold flex-shrink-0">Jan</div>

        {/* Nav + Controls */}
        <div className="flex flex-wrap items-center justify-end gap-4 w-full sm:w-auto">
          {/* Navigation Links */}
          <nav className="flex gap-2 text-sm font-medium">
            {[
              { href: "#about", label: t.about },
              { href: "#projects", label: t.projects },
              { href: "#contact", label: t.contact },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-1 rounded transition-colors text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Language + Theme Toggles */}
          <div className="flex items-center gap-2 flex-nowrap">
            <button
              onClick={toggleLang}
              className="px-2 py-1 rounded bg-black text-white hover:opacity-80 transition whitespace-nowrap"
            >
              {currentLang === "en" ? "PL" : "EN"}
            </button>
            <div className="flex-shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
