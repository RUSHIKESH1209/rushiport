import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="about" className={darkMode ? "bg-white relative" : "bg-gray-900 relative"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 px-4 pt-24 pb-12">
        <h2
          className={`text-5xl font-bold px-4 sm:px-0 text-center ${!darkMode ? "text-white" : ""
            }`}
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={`mt-4 text-xl text-justify ${darkMode ? "text-gray-500" : "text-white"
                }`}
            >
             I am a self-taught web developer and competitive programmer with hands-on experience in  MERN stack development . I specialize in designing and implementing new features, taking projects from ideation through to production. I focus on creating high-performance applications while ensuring a seamless user experience. With a strong background in backend development, I emphasize writing reusable, efficient code. I am passionate about combining technology, innovation, and good design to deliver scalable, cutting-edge software solutions.
            </p>
          </motion.div>

          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={`mt-4 text-xl text-justify ${darkMode ? "text-gray-500" : "text-white"
                }`}
            >
              Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant websites for smartphones, tablets, and desktops.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap mt-8 justify-between">
            {techStack.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {y: 0,opacity: 1,transition: { type:"spring" } ,scale:1},
                  hidden: { opacity: 1, y: 60, scale:0.8},
                }}
                className="py-2 px-4 bg-gray-50 sm:m-4 mx-2 mt-6 rounded-lg flex items-center cursor-pointer sm:w-48 w-40"
              >
                <img alt={el.name} src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
