import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../components/Buttons/RegisterButton.module.scss";

type RoleCardProps = {
  title: string;
  image?: string;
  textColor?: string;
  className?: string;
  onSelected: () => void;
};

const RoleCard = ({
  title,
  className,
  onSelected,
}: RoleCardProps) => {
  return (
    <motion.div
    onClick={onSelected}
    initial={{scale: 1,borderColor:'gray'}}
      whileHover={{ scale: 1.1,borderColor:'#5CECCE' }}
      whileTap={{ scale: 1.1,borderColor:'#5CECCE'  }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 5,
        repeat: Infinity,
      }}
      className={`${styles.button} ${className}`}
      // className="flex flex-col justify-center items-center cursor-pointer uppercase rounded-lg"
      // className="cursor-pointer uppercase rounded-lg"
      style={{
        border: "2px solid black",
        borderRadius: "12px",
        backgroundClip: "padding-box, border-box",
        backgroundOrigin: "padding-box, border-box",
      }}
    >
      <Link
        className="flex items-center justify-center w-full h-full text-[#334961]"
        style={{ fontSize: "16px" }}
        href={"/register"}
      >
        {title}
      </Link>
    </motion.div>

    // <div className="flex flex-col justify-center items-center">
    //   <div
    //     onClick={onSelected}
    //     className={`flex items-center justify-center h-10 w-60 md:h-16 md:w-40 m-4 border hover:border-[#5CECCE] border-black ${className}`}
    //   >
    //     <p
    //       className={`${
    //         isTextColor ? textColor : "text-black"
    //       } p-2 text-center`}
    //     >
    //       {title}
    //     </p>
    //   </div>
    // </div>
  );
};

export default RoleCard;
