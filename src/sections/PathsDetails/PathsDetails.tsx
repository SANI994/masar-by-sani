/* eslint-disable  */
import { PATH_DETAILS_CONTENT } from "@/app/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const PathsDetails = () => {
  return (
    <section
      dir="rtl"
      className="flex flex-col gap-20 justify-center items-center mt-40 text-center"
    >
      {PATH_DETAILS_CONTENT.map((pathDetails, i) => {
        const [flip, setFlip] = useState(true);

        return (
          <div key={i} className={`flex flex-col gap-4 mx-4 items-center mb-4`}>
            {" "}
            <div className="w-full text-4xl leading-normal flex flex-wrap justify-center mb-4">
              <h2 className="font-medium">{pathDetails.title}</h2>
            </div>
            <motion.div
              className="flex flex-col items-start justify-center md:flex-row gap-5 w-[80vw] h-full my-4 bg-transparent"
              key={i}
            >
              <div className="flex flex-col items-center justify-center gap-6 w-full md:w-[400px] h-80 md:h-[260px] border-b border-l-0 md:border-b-0 md:border-l border-gray-300">
                <Image
                  width={pathDetails.width}
                  height={217}
                  alt="speaker logo"
                  src={pathDetails.image}
                  className="rounded-full"
                />
                <p className="text-2xl font-semibold">{pathDetails.speaker}</p>
              </div>

              <div
                className="flex flex-col gap-4 px-6 w-full select-none mt-10 text-xl"
                onMouseLeave={() => setFlip((prevState) => !prevState)}
                onTouchStart={() => setFlip((prevState) => !prevState)}
              >
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: flip ? 0 : 180 }}
                >
                  <motion.div
                    transition={{ duration: 0.7 }}
                    animate={{ rotateY: flip ? 0 : 180 }}
                    className="Card"
                  >
                    <motion.div
                      transition={{ duration: 0.7 }}
                      animate={{ rotateY: flip ? 0 : 180 }}
                      style={{
                        backfaceVisibility: "hidden",
                        display: !flip ? "none" : "block",
                      }}
                      //   style={{backfaceVisibility:'hidden'}}
                      className="front"
                    >
                      {pathDetails.sub_title}
                    </motion.div>
                    <motion.div
                      initial={{ rotateY: 180 }}
                      animate={{ rotateY: flip ? 180 : 0 }}
                      //  style={{ display: flip ? "none" : "block",backfaceVisibility:'hidden' }}
                      transition={{ duration: 0.7 }}
                      style={{
                        backfaceVisibility: "hidden",
                        display: flip ? "none" : "block",
                      }}
                      className="back"
                    >
                      {pathDetails.description}
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* <motion.span>{pathDetails.sub_title}</motion.span> */}
                <br />

                {/* <motion.span className="text-red-600">{pathDetails.description}</motion.span> */}
                {/* <CursorBlinker /> */}
              </div>
            </motion.div>
          </div>
        );
      })}

      <br />
      <br />
      <br />
    </section>
  );
};

export default PathsDetails;
