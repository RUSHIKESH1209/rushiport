import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import { Typewriter } from "react-simple-typewriter";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={
        darkMode
          ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
          : { backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover" }
      }
    >
      <main
        className="mx-auto max-w-7xl px-4 sm:px-6 sm:mt-0 lg:px-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between h-screen"
        id="/"
      >
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl ">
            <motion.span
              className={darkMode ? "block text-black" : "block text-white"}
            >
              Hi, I am Rushikesh
            </motion.span>
            <span className="block text-blue-500 z-0 lg:inline">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Competitive programmer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p
            className={
              darkMode
                ? "mt-3 text-base text-black sm:mt-5 sm:max-w-xl sm:mx-auto sm:text-xl lg:mx-0"
                : "mt-3 text-base text-white sm:mt-5  sm:max-w-xl sm:mx-auto sm:text-xl lg:mx-0"
            }
          >
            I am a Full-Stack Developer and Competitive programmer. I am currently at
            IIIT Bhopal pursuing my B.Tech
          </p>
          <div className="flex sm:justify-start">
            {contactLinks.map((el) => (
              <a
                key={el.name}
                href={el.link}
                className="mr-5 cursor-pointer mt-8 hover:scale-125"
              >
                <img alt={el.name} src={el.url} />
              </a>
            ))}
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
              <Link className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 sm:py-4 sm:text-lg sm:px-10">
                Resume
              </Link>
            </div>
          </div>
        </div>
        <motion.img
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}
          src={heroBg}
          alt=""
          className="sm:w-3/6 hidden sm:block"
        />
      </main>
    </div>
  );
};

export default Home;
