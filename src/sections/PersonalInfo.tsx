import { UseFormRegister } from "react-hook-form";


interface PersonalInfoFormProps{
  full_name:string;
  full_name_arabic:string;
  email:string;
  id_number:number;
  phone_number:number;
  university:string;

}

interface PersonalInfoProps {
  formInputs: UseFormRegister<PersonalInfoFormProps>;
}

const PersonalInfo = ({ formInputs }: PersonalInfoProps) => {
  return (
    <section id="personal-info" className="mt-9">
      <div id="first-line" className="flex gap-6">
        <input
          {...formInputs("full_name")}
          required
          placeholder="Full Name English"
          type="text"
          className={"input"}
        />
      </div>
      <input
        {...formInputs("full_name_arabic")}
        placeholder="Full Name Arabic"
        type="text"
        className={"input"}
      />
      <input
        {...formInputs("email")}
        placeholder="Email"
        type="email"
        className={"input"}
      />

      <div id="second-line" className="flex gap-6">
        <input
          {...formInputs("id_number")}
          placeholder="ID number"
          type="tel"
          className={"input"}
        />
        <input
          {...formInputs("phone_number")}
          placeholder="Phone Number"
          type="tel"
          className={"input"}
        />
      </div>

      <select
        {...formInputs("university")}
        id="University"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>University</option>
        <option value="US">University 1</option>
        <option value="CA">University 2</option>
        <option value="FR">University 3</option>
        <option value="DE">University 4</option>
      </select>

      <select
        id="colleges"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Colleges</option>
        <option value="US">Colleges 1</option>
        <option value="CA">Colleges 2</option>
        <option value="FR">Colleges 3</option>
        <option value="DE">Colleges 4</option>
      </select>

      <input placeholder="Major" type="text" className={"input"} />

      <select
        id="expected_grad_year"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Expected Grad Year</option>
        <option value="US">Colleges 1</option>
        <option value="CA">Colleges 2</option>
        <option value="FR">Colleges 3</option>
        <option value="DE">Colleges 4</option>
      </select>

      <div className="flex gap-6">
        <input placeholder="GPA Max Scale" type="tel" className={"input"} />
        <input placeholder="Cumulative GPA" type="tel" className={"input"} />
      </div>
    </section>
  );
};

export default PersonalInfo;
