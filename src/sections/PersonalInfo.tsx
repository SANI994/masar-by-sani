import {
  COLLEGES_LIST,
  GRADUATION_YEARS_LIST,
  UNIVERSITIES_LIST,
} from "@/app/constants";
import { UseFormGetValues, UseFormRegister } from "react-hook-form";

interface PersonalInfoFormProps {
  full_name: string;
  full_name_arabic: string;
  email: string;
  id_number: number;
  phone_number: number;
  university: string;
  college: string;
  major: string;
  expected_grad_year: string;
  gpA_max_scale: string;
  cumulative_GPA: string;
}

interface PersonalInfoProps {
  formInputs: UseFormRegister<PersonalInfoFormProps>;
  values: UseFormGetValues<PersonalInfoFormProps>;
}

const PersonalInfo = ({ formInputs }: PersonalInfoProps) => {
  
  return (
    <section
      dir="rtl"
      id="personal-info"
      className="flex flex-col gap-4 bg-white p-4 rounded-xl text-[#334961]"
    >
      <p className="text-[#334961]">معلومات شخصية</p>

      <div>
        <input
          {...formInputs("full_name", { required: true })}
          required
          placeholder="الاسم الكامل بالإنجليزية"
          type="text"
          className={"input"}
        />
      </div>
      <div>
        <input
          {...formInputs("full_name_arabic")}
          placeholder="الاسم الكامل بالعربية"
          type="text"
          className={"input"}
        />
      </div>
      <input
        {...formInputs("email")}
        placeholder="البريد الإلكتروني"
        type="email"
        className={"input"}
      />

      <input
        {...formInputs("id_number", { required: true, min: 10 })}
        max={10}
        placeholder="رقم الهوية الوطنية"
        type="tel"
        className={"input"}
      />
      <input
        {...formInputs("phone_number", { required: true, value: 966 })}
        placeholder="رقم الجوال"
        type="tel"
        className={"input"}
      />

      <select
        {...formInputs("university")}
        id="University"
        className="input bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={""}>الجامعة</option>
        {UNIVERSITIES_LIST.map((university, i) => (
          <option key={i} value={university}>
            {university}
          </option>
        ))}
      </select>

      <select
        {...formInputs("college")}
        id="colleges"
        className="input bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={""}>الكلية</option>
        {COLLEGES_LIST.map((college, i) => (
          <option key={i} value={college}>
            {college}
          </option>
        ))}
      </select>

      <input
        {...formInputs("major")}
        placeholder="التخصص"
        type="text"
        className={"input"}
      />

      <select
        id="expected_grad_year"
        {...formInputs("expected_grad_year")}
        className="input bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={""}>تاريخ التخرج المتوقع</option>

        {GRADUATION_YEARS_LIST.map((year, i) => (
          <option key={i} value={year}>
            {year}
          </option>
        ))}
      </select>

      <div className="flex gap-6">
       
        {/* <input
          {...formInputs("gpA_max_scale")}
          placeholder="GPA Max Scale"
          type="tel"
          className={"input"}
        /> */}
         <select
        id="gpA_max_scale"
        {...formInputs("gpA_max_scale")}
        className="input bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={""}>GPA Max Scale  </option>
        <option value={"4"}> 4 </option>
        <option value={"5"}> 5 </option>
        <option value={"100"}> 100 </option>

        
      </select>
      

        
        <input
          {...formInputs("cumulative_GPA")}
          placeholder="Cumulative GPA"
          type="text"
          className={"input"}
        />
      </div>
    </section>
  );
};

export default PersonalInfo;
