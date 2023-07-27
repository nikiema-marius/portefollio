import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="xl:mx-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-black-100 p-12 "
      >
        <div class="grid grid-cols-2 gap-4">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

          <div class="col-span-1"></div>

          <p>Nikiema Marius</p>
          <div class="col-span-1 p-4 rounded">
            <h3 class="text-2xl font-bold mb-4 underline ">Contact</h3>
            <ul class="list-disc pl-4">
              <li>Email: nikiemamarius1996@gmail.com</li>
              <li>Numéro de téléphone: +226 64016827</li>
              <li>
                LinkedIn:
                <a
                  href="https://www.linkedin.com/in/marius-nikiema-423bbb19b"
                  target="_blank"
                  class="text-blue-500 hover:underline"
                >
                  MARIUS NIKIEMA
                </a>
              </li>
              <li>
                WhatsApp:
                <a
                  href="https://wa.me/22664016827"
                  target="_blank"
                  class="text-blue-500 hover:underline"
                >
                  +226 64016827
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
