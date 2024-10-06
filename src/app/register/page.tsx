"use client";
/* eslint-disable */
import RolesCards from "@/sections/RolesCards";
import { useState } from "react";
import { REGISTERATION_SCREENS } from "../constants";
import PersonalInfo from "@/sections/PersonalInfo";
import WorkInfo from "@/sections/WorkInfo";
import ThankYou from "@/sections/ThankYou";
import styles from "./Register.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Register.css"

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm<any>();

  const [currentScreen, setCurrentScreen] = useState(REGISTERATION_SCREENS[0]);

  const onNextScreen = () => {
    const nextScreen = REGISTERATION_SCREENS.find(
      (screen) => screen.current == currentScreen.next
    );
    if (nextScreen) setCurrentScreen(nextScreen);
  };
  const onPrevScreen = () => {
    const prevScreen = REGISTERATION_SCREENS.find(
      (screen) => screen.current == currentScreen.prev
    );
    if (prevScreen) setCurrentScreen(prevScreen);
  };
  const onRoleSelected = (id: number) => {
    console.log("The selected Role is: ", id);
  };


  const onSubmit = (data:any)=>{
      // call the backend https://maser-app-x6wzd.ondigitalocean.app/swagger/index.html
      console.log(data)
  }
  return (
    <main className="">
      <section className="flex flex-col items-center justify-center h-screen  text-[#5CECCE] mx-6">

     
        {currentScreen.current == "roles_screen" && (
          <RolesCards onRoleSelected={onRoleSelected} />
        )}
         <form onSubmit={handleSubmit(onSubmit)}>
        {currentScreen.current == "personal_info_screen" && <PersonalInfo formInputs={register} />}
        {currentScreen.current == "work_info_screen" && <WorkInfo formInputs={register} />}
        {currentScreen.current == "thank_you_screen" && <ThankYou />}
        <button type="submit">Submit</button>
        <div className="flex w-full justify-evenly text-lg">
        {!!currentScreen.next ? (
          <p className="cursor-pointer" onClick={onNextScreen}>
            {" "}
            ⬅️{" "}
          </p>
        ) : (
          <span></span>
        )}

        {!!currentScreen.prev ? (
          <p onClick={onPrevScreen} className="cursor-pointer">
            ➡️
          </p>
        ) : (
          <span></span>
        )}
      </div>
      
</form>
      </section>

     
    </main>
  );
};

export default Register;
