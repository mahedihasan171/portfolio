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
    <nav className="sticky top-0 bg-slate-950">
      {/* Navigation container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-7 py-5">

        {/* Portfolio Brand */}
        <h2 className="text-2xl font-bold text-white">
          Mahedi Hasan
        </h2>

        {/* Navigation Links */}
        <ul className="flex gap-8 list-none">
          {navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
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