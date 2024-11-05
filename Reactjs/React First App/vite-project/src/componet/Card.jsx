import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={1}
        dragTransition ={{ bounceStiffness: 100, bounceDamping: 20 }}
        className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-7 py-10 overflow-hidden"
      >
        <FaRegFileLines />
        <p className="text-sm mt-5 font-semibold leading-tight ">{data.desc}</p>
        <div className="footer absolute left-0 bottom-0 w-full">
          <div className="flex items-center justify-between py-4 px-8 mb-3">
            <h5 className="text-[16px]">{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-700 flex items-center justify-center rounded-full ">
              {data.close ? (
                <IoClose size="1em" color="#fff" />
              ) : (
                <LuDownload size="1em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-md font-semibold">{data.tag.tagTittle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
