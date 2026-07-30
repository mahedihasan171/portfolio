import { navigation } from "../../../data/navigation";

const Navbar = () => {
  return (
    <nav>
    <div className="logo">
      <h1>Mahedi Hasan</h1>
    </div>

      <ul>
        {navigation.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;