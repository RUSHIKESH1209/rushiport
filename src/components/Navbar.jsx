import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;
  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "about" },
    { name: "Services", route: "services" },
    { name: "Projects", route: "projects" },
    { name: "Contact", route: "contact" },
  ];

  function toggleTheme() {
    theme.dispatch({ type: darkMode ? "LIGHTMODE" : "DARKMODE" });
  }

  return (
    <>
      <nav
        className={
          darkMode
            ? "bg-white border-gray-200 z-50 shadow-lg sm:px-8 px-1 fixed w-full top-0" 
            : "bg-gray-700 border-gray-200 z-50 shadow-lg sm:px-8 px-1 fixed w-full top-0" 
        }
      >
        <div className="flex justify-between items-center py-2 sm:py-4 sm:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={
                darkMode
                  ? "text-xl font-medium text-decoration-none whitespace-nowrap text-black"
                  : "text-xl font-medium text-decoration-none whitespace-nowrap text-white"
              }
            >
              {`<ᖇᥙ⳽ᖾɩƙᥱ⳽ᖾ/>`}
            </a>
          </div>

          <div className="hidden justify-between items-center w-full sm:flex sm:w-auto">
            <ul className="flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-md sm:font-medium">
              {links.map((el, i) => (
                <li key={i} className="cursor-pointer">
                  <Link
                    to={el.route}
                    activeClass={"text-white bg-blue-500"}
                    spy={true}
                    smooth={true}
                    className={
                      darkMode
                        ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div onClick={toggleTheme}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              )}
            </div>
          </div>

          <div className="flex sm:hidden items-center">
            <div onClick={toggleTheme}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              )}
            </div>

            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              darkMode
                ? "bg-white py-2 px-2 sm:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40" // changed from md:p-0 to sm:p-0
                : "bg-black py-2 px-2 sm:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40" // changed from md:p-0 to sm:p-0
            }
          >
            <ul className="sm:hidden sm:flex-row sm:space-y-8 sm:mt-0 sm:text-md sm:font-medium">
              {links.map((el, i) => (
                <Link
                  key={i}
                  to={el.route}
                  activeClass={"text-white bg-blue-500"}
                  className={
                    darkMode
                      ? "hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                      : "hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  }
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
