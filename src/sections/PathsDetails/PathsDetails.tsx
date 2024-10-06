import { PATH_DETAILS_CONTENT } from "@/app/constants"
import { motion } from "framer-motion"

const PathsDetails = ()=>{

      return (
            <section dir="rtl" className="flex flex-col justify-center items-center mt-80 pb-38">
           
           {PATH_DETAILS_CONTENT.map((pathDetails,i)=>{
            return(
                  <motion.div initial={{scale:1}} whileHover={{scale:1.1}}  whileTap={{scale:1.1}} className="flex flex-col md:flex-row gap-5 my-12 w-[90%] md:w-[70%] bg-white rounded-xl p-3" key={i} >
                  <div className="flex flex-col w-full md:w-[50%]  items-center justify-center h-[360px] ">
                        <img src={pathDetails.image} className="w-[50%] rounded-full" />
                        <p className="text-2xl font-semibold">{pathDetails.speaker}</p>

                  </div>
                 
                 <div className="flex flex-col gap-6 px-6 w-full md:w-[50%] select-none">
                       <h2 className="text-xl font-bold">{pathDetails.title}</h2>
                       <p className="font-semibold">{pathDetails.sub_title}</p>
                <p>
               {pathDetails.description}
                </p>
                
                 </div>
                 
                  
                 </motion.div>
            )
           })}
           
            <br/><br/><br/>
          </section>
      )
}

export default PathsDetails