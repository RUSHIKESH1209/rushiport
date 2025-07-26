import React from "react";
import { motion } from "framer-motion";
import { projectData } from "../constants";

const Card = () => {
  return projectData.map((el, idx) => {
    return (
      <motion.div
        key={idx}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.9 },
        }}
        className="sm:w-96 w-full h-[480px] bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8 flex flex-col border-rounded-lg "
      >
        <div className="w-full h-[250px] bg-gray-800 flex items-center justify-center p-2">
          <img
            className="max-h-full h-[300px] max-w-full object-contain"
            src={el.image}
            alt={el.name}
          />
        </div>

        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h5 className="mb-2 pt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {el.name}
            </h5>
            <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 line-clamp-4">
              {el.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-auto">
            <div>
              <a
                href={el.Live}
                className="mr-1 inline-flex items-center py-2 px-3 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Live
              </a>
              <a
                href={el.github}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
              >
                Github
              </a>
            </div>
            <div className="flex gap-2">
              {el.tech?.map((techIcon, i) => (
                <img key={i} src={techIcon.url} alt="tech" className="w-6 h-6" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  });
};

export default Card;
