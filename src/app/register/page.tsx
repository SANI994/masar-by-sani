"use client";
/* eslint-disable */
import RolesCards from "@/sections/RolesCards";
import { useEffect, useState } from "react";
import { REGISTERATION_SCREENS, RolesList } from "../constants";
import PersonalInfo from "@/sections/PersonalInfo";
import WorkInfo from "@/sections/WorkInfo";
import ThankYou from "@/sections/ThankYou";
import { useForm } from "react-hook-form";
import "./Register.css";
import Navbar from "@/sections/Navbar";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Footer from "@/sections/footer";

type RoleProps = {
  image: string;
  name: string;
  id: number;
  value: string;
};

const Register = () => {
  const { register, handleSubmit, getValues,watch } = useForm<any>();
  const [formSubmiting, setFormSubmitting] = useState(false);
  const [personalDataValid, setPersonalDataValid] = useState(false);
  const [workDataValid, setWorkDataValid] = useState(false);
  const [backendErrors, setBackendErrors] = useState<any>([]);
  const [currentScreen, setCurrentScreen] = useState(REGISTERATION_SCREENS[0]);
  const [selectedRole, setSelectedRole] = useState<RoleProps>({} as RoleProps);

  const onNextScreen = () => {
    const nextScreen = REGISTERATION_SCREENS.find(
      (screen) => screen.current == currentScreen.next
    );
    if (nextScreen && personalDataValid) setCurrentScreen(nextScreen);
  };
  const onPrevScreen = () => {
    const prevScreen = REGISTERATION_SCREENS.find(
      (screen) => screen.current == currentScreen.prev
    );
    if (prevScreen) setCurrentScreen(prevScreen);
  };
  const onRoleSelected = (id: number) => {
    const role = RolesList.find((role) => role.id == id);
    if (role) setSelectedRole(role);
    setCurrentScreen(REGISTERATION_SCREENS[1]);
  };

  const onSubmit = (data: any) => {
    const SubmitURL =
      "https://maser-app-x6wzd.ondigitalocean.app/api/educationForm/submit";
    data["program"] = selectedRole.value;
    data["why_maser_why_do_you_think_you_are_a_candidate"] = "-";
    setFormSubmitting(true);
    if (!formSubmiting && workDataValid && personalDataValid) {
      axios
        .post(SubmitURL, data)
        .then((data) => {
          setFormSubmitting(false);
          setCurrentScreen(REGISTERATION_SCREENS[3]);
        })
        .catch(({ response }) => {
          if (response?.data?.errors) {
            const errors =
              Object.entries(response.data.errors).map((e) => e[1]) || [];
            setBackendErrors(errors);
            console.log(errors);
          }
          if (response.data.message) {
            setBackendErrors([response.data.message]);
          }
          setFormSubmitting(false);
        });
    }
  };
  const onClearError = () => {
    setBackendErrors([]);
  };
const watchPersonalData = watch(["full_name", "full_name_arabic","email","id_number","phone_number","university","college", "major", "expected_grad_year", "gpA_max_scale", "cumulative_GPA"])
const watchWorkData = watch(["work_experiences", "project_course","why_did_you_choose_this_track","talk_about_yourself_video","phone_number","linkedin","anything_else_you_want_to_tell_us"])
useEffect(() => {
    if(watchPersonalData.filter((data)=> !!data).length == watchPersonalData.length){
      setPersonalDataValid(true)
      return
    }else{
      if (!personalDataValid)
        setPersonalDataValid(false)
    }
   
  }, [watchPersonalData]);

  useEffect(() => {
    if(watchWorkData.filter((data)=> !!data).length == watchWorkData.length){
      try{
        new URL(watch('talk_about_yourself_video'))
        setWorkDataValid(true)
      }catch{
      setBackendErrors(['رابط الفيديو  في " لماذا مسار ؟ ولماذا ترى انك مناسب للبرنامج ؟" غير صحيح'])
      }
        
     
      return
    }else{
      if (!workDataValid)
        setWorkDataValid(false)
    }
   
  }, [watchWorkData]);

  return (
    <div className="flex flex-col items-center">
      <Navbar showLogoOnly />

      <main className="flex flex-col items-center justify-center mt-32 md:mt-16 mb-10">
        {!!backendErrors && (
          <div className="fixed top-20 flex flex-col justify-center items-center z-40">
            {backendErrors?.map((error: any, i: number) => (
              <Alert
                key={i}
                onClick={onClearError}
                className={` mt-6 z-50 right-0`}
                severity="error"
                id="error-message"
              >
                {error}
              </Alert>
            ))}
          </div>
        )}

        <section className="flex flex-col items-center justify-center  text-[#5CECCE] ">
          {currentScreen.current == "roles_screen" && (
            <RolesCards onRoleSelected={onRoleSelected} />
          )}

          {currentScreen.current != "roles_screen" && (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              {!!currentScreen.prev &&
              currentScreen.current != "thank_you_screen" ? (
                <div
                  className="flex flex-row-reverse gap-4 mt-4 md:mt-14 mb-4 cursor-pointer"
                  dir="ltr"
                  onClick={onPrevScreen}
                >
                  <img
                    src="./icons/arrow-down.svg"
                    width={18}
                    className="rotate-[270deg] cursor-pointer"
                  />
                  <p className="text-sm font-semibold text-[#334961]">العودة</p>
                </div>
              ) : (
                <></>
              )}
              {currentScreen.current == "personal_info_screen" && (
                <PersonalInfo formInputs={register} values={getValues} />
              )}
              {currentScreen.current == "work_info_screen" && (
                <WorkInfo formInputs={register} />
              )}
              {currentScreen.current == "thank_you_screen" && <ThankYou />}

              {!!currentScreen.next && (
                <div className="flex w-full justify-between text-lg bg-white p-4 -mt-2">
                  {!!currentScreen.next && !!currentScreen.prev ? (
                    <div
                      className={`cursor-pointer px-4 ${!personalDataValid ? "InValidregisterBtn":"registerBtn"}`}
                      onClick={onNextScreen}
                    >
                      <p>التالي</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              )}
              {currentScreen.current == "work_info_screen" && (
                <div className="flex w-full justify-between text-lg bg-white p-4 -mt-2">
                  <button
                    type={formSubmiting ? "button" : "submit"}
                    className={`${!workDataValid? 'InValidregisterBtn':'registerBtn'}`}
                  >
                    {formSubmiting ? "جاري التحميل" : "إرسال"}
                  </button>
                </div>
              )}
            </form>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
