import { NavLink } from "react-router";
import "/index.css";
const handleActive = ({ isActive }) => ({
  background: isActive ? "aquamarine" : "transparent",
  color: isActive ? "blue" : "black",
});
const items = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/news",
    title: "News",
  },
];
function Header() {
  return (
    <header>
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <NavLink style={handleActive} to={item.path}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
