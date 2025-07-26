import React, { useContext, useRef } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1henb9c",    
      "template_oe16sqf",
      form.current,
      "0yuqxIooeKM_b5soE"
    )
      .then(
        () => alert("Message sent successfully!"),
        (error) => alert("Failed to send message.")
      );
    
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 sm:h-screen"
          : "bg-black pt-24 text-white sm:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 px-4">
        <h2 className="text-5xl font-bold px-4 sm:px-0 text-center z-0">Contact</h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">Connect with me</h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center sm:items-stretch flex-col sm:flex-row pb-24">
          <div className="w-full sm:pr-8">
            <form ref={form} onSubmit={sendEmail}>
              <div className="my-6">
                <label
                  htmlFor="user_name"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="w-full flex flex-col sm:items-end mt-12 sm:mt-6">
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="mailto: rushikeshchintkuntwar123456@gmail.com"
              className="mb-12 mt-4 font-semibold text-blue-700 block "
            >
              rushikeshchintkuntwar123456@gmail.com
            </a>
            <h1 className="text-3xl font-bold">Address</h1>
            <a
              href="https://www.google.co.in/maps/place/Bhopal,+Madhya+Pradesh/@23.20244,77.2380996,11.05z/data=!4m6!3m5!1s0x397c428f8fd68fbd:0x2155716d572d4f8!8m2!3d23.2599333!4d77.412615!16zL20vMGN3NTE?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoASAFQAw%3D%3D"
              className="mt-4 mb-12 sm:text-right font-semibold text-blue-700 block uppercase"
            >
             Bhopal,Madhya Pradesh
              <br />
              India
            </a>
            <h1 className="text-3xl font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el, idx) => (
                <a
                  key={idx}
                  href={el.link}
                  className="sm:ml-6 sm:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
     

     
    </div>
  );
};

export default Contact;
