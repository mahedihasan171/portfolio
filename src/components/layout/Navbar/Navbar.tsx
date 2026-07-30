/**
 * Navbar Component
 *
 * Displays the primary navigation of the portfolio.
 * Navigation items are rendered dynamically from
 * src/data/navigation.ts.
 */

import { navigation } from "../../../data/navigation";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      {/* Navigation container */}
      <div className="max-w-6xl mx-auto flex h-20 items-center justify-between px-8">

        {/* Portfolio Brand */}
        <a
          href="#hero"
          className="text-2xl font-bold text-white"
        >
          MAHEDI HASAN<span className="text-cyan-400">.</span>
        </a>

        {/* Navigation Links */}
        <ul className="flex gap-8 list-none">
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

      </div>
    </nav>
  );
};

export default Navbar;