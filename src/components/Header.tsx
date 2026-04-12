import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <ul className="flex items-center gap-7 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1 cursor-pointer hover:text-blue-500 ${
                  isActive ? "text-blue-500" : ""
                }`
              }
            >
              <img src="/icons/home-icon.svg" alt="Home" />
              <span>Home Page</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `flex items-center gap-1 cursor-pointer hover:text-blue-500 ${
                  isActive ? "text-blue-500" : ""
                }`
              }
            >
              <img src="/icons/customers-icon.svg" alt="Users" />
              <span>Users</span>
            </NavLink>
          </li>

          <li className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
            <img src="/icons/setting-icon.svg" alt="Settings" />
            <span>Welcome USERNAME</span>
          </li>
        </ul>

        <div className="text-gray-700 font-medium text-lg">BTVN - Day 41</div>
      </div>
    </header>
  );
};

export default Header;
