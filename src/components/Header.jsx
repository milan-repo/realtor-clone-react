import { NavLink, Outlet, useNavigate } from "react-router-dom";

const mainMenu = [
  { name: "Home", path: "." },
  { name: "Offers", path: "offers" },
  { name: "Sign in", path: "sign-in" },
];

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="border-b-2 bg-white sticky z-50">
        <header className="flex justify-between max-w-screen-lg mx-auto p-3">
          <div>
            <img
              src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              alt="main-logo"
              className="h-5 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* ******* */}

          <div>
            <ul className="flex space-x-10">
              {mainMenu.map(({ name, path }) => {
                return (
                  <li key={name}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `text-zinc-500 font-semibold text-sm ${
                          isActive
                            ? "text-black border-b-4 border-b-orange-600 py-[14px]"
                            : null
                        }`
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </header>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
