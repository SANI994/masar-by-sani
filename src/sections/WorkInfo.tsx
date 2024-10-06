import { UseFormRegister } from "react-hook-form"


interface workInfoFormProps{
      work_info:string
}
interface WorkInfoProps{

      formInputs:UseFormRegister<workInfoFormProps>
}



const WorkInfo = ({formInputs}:WorkInfoProps)=>{

      return (
            <div>
                  <h1>Work Info</h1>
                  <input {...formInputs('work_info')} />
            </div>
      )
}

export default WorkInfo