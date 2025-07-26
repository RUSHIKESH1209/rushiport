import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-20"
        id="services"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 sm:px-0 text-center"
              : "text-5xl font-bold px-4 sm:px-0 text-center text-white"
          }
        >
          Services
        </h2>
        <div className="">
          <h4 className="mt-16 text-3xl font-semibold text-blue-500">
            What I Do
          </h4>
          <div className="mt-8 flex sm:flex-row justify-between flex-col sm:items-stretch items-center">
            {serviceData.map((el, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }} 
                className={
                  theme.state.darkMode
                    ? "sm:w-96 p-4 bg-white rounded-lg flex items-center flex-col mt-8"
                    : "sm:w-96 p-4 bg-gray-100 rounded-lg flex items-center flex-col mt-8"
                }
              >
                <img src={el.img} alt="" />
                <h4 className="text-xl font-bold mt-4">{el.name}</h4>
                <p className="text-lg mt-2 text-justify">{el.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
