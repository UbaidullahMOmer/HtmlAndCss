import React, { useRef } from "react";
import Card from "./Card";
import { desc } from "framer-motion/client";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is thee Background color of the card that will be displayed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTittle: "Download", tagcolor: "green" },
    },
    {
      desc: "This is thee Background color of the card that will be displayed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTittle: "Download", tagcolor: "blue" },
    },
    {
      desc: "This is thee Background color of the card that will be displayed",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTittle: "Download", tagcolor: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 z-[3] left-0 w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref}/>
        ))}
      </div>
    </>
  );
}

export default Foreground;
