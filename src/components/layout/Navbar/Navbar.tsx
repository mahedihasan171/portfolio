/**
 * Navbar Component
 *
 * Displays the primary navigation of the portfolio.
 * Navigation items are rendered dynamically from
 * src/data/navigation.ts.
 */
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { navigation } from "../../../data/navigation";
import { Container } from "../";

const Navbar = () => {

  /**
 * Controls whether the mobile navigation drawer is open.
 */
const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <Container className="flex h-20 items-center justify-between">
      {/* Navigation container */}
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">

        {/* Portfolio Brand */}
        <a
          href="#hero"
          className="text-2xl font-bold text-white"
        >
          MAHEDI HASAN<span className="text-cyan-400">.</span>
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
      </Container>
    </nav>
  );
};

export default Navbar;