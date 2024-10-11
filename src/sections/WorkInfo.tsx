import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface workExperiencesProps {
  start_date: string;
  end_date: string;
  company_name: string;
  describe_your_role: string;
}
interface ProjectCourseProps {
  completion_date: string;
  description_of_project: string;
}
interface workInfoFormProps {
  work_info: string;
  work_experiences: workExperiencesProps[];
  project_course: ProjectCourseProps[];
  talk_about_yourself_video: string;
  linkedin: string;
  github: string;
  anything_else_you_want_to_tell_us: string;
  why_did_you_choose_this_track: string;
}
interface WorkInfoProps {
  formInputs: UseFormRegister<workInfoFormProps>;
}

const WorkInfo = ({ formInputs }: WorkInfoProps) => {
  const [workExperinces, setWorkExperinces] = useState(1);
  const [projectCourseCount, setprojectCourseCount] = useState(1);

  const onAddWorkExperince = () => {
    if (workExperinces < 5) setWorkExperinces(workExperinces + 1);
  };
  const onDeleteWorkExperince = () => {
    if (workExperinces > 1) setWorkExperinces(workExperinces - 1);
  };

  const onAddprojectCourseCount = () => {
    if (projectCourseCount < 5) setprojectCourseCount(projectCourseCount + 1);
  };
  const onDeleteprojectCourseCount = () => {
    if (projectCourseCount > 1) setprojectCourseCount(projectCourseCount - 1);
  };

  return (
    <div id="work-section" className="flex flex-col gap-4 w-[280px] md:w-[829px] mt-4" dir="rtl">
      <section className="flex w-full relative">
        <p
          className="flex items-center justify-center absolute bg-white rounded-xl font-bold text-xl md:text-3xl h-16 md:h-20 -right-8 md:-right-14 w-[26px] md:w-[53px] text-center p-2 md:p-4 cursor-pointer"
          onClick={onAddWorkExperince}
        >
          +
        </p>
        <p
          className="flex items-center justify-center absolute bg-white rounded-xl font-bold text-xl md:text-3xl h-16 md:h-20 -right-8  md:-right-14 w-[26px] md:w-[53px] text-center top-[85px] p-2 md:p-4 cursor-pointer"
          onClick={onDeleteWorkExperince}
        >
          -
        </p>

        <div className=" bg-white p-4 rounded-xl w-full">
          <h1 className="text-[#334961] my-4 font-semibold">خبرات العمل</h1>
          {Array(workExperinces)
            .fill(1)
            .map((n, index) => {
              return (
                <div className="flex flex-col gap-2 w-full mt-10" key={index}>
                  <input
                    {...formInputs(`work_experiences.${index}.start_date`)}
                    required
                    placeholder="تاريخ البدء"
                    type="date"
                    className={"input"}
                  />
                  <input
                    {...formInputs(`work_experiences.${index}.end_date`)}
                    required
                    placeholder="تاريخ الانتهاء"
                    type="date"
                    className={"input"}
                  />
                  <input
                    {...formInputs(`work_experiences.${index}.company_name`)}
                    required
                    placeholder="الشركة"
                    type="text"
                    className={"input"}
                  />

                  <input
                    {...formInputs(
                      `work_experiences.${index}.describe_your_role`
                    )}
                    required
                    placeholder="صف وظيفتك"
                    type="text"
                    className={"input"}
                  />
                </div>
              );
            })}
        </div>
      </section>

      <section className="bg-white p-4 rounded-xl relative">
        <p
          className="flex items-center justify-center absolute bg-white rounded-xl font-bold text-xl md:text-3xl h-16 md:h-20 -right-8 md:-right-14 w-[26px] md:w-[53px] text-center p-2 md:p-4 cursor-pointer"
          onClick={onAddprojectCourseCount}
        >
          +
        </p>
        <p
          className="flex items-center justify-center absolute bg-white rounded-xl font-bold text-xl md:text-3xl h-16 md:h-20 -right-8  md:-right-14 w-[26px] md:w-[53px] text-center top-[100px] p-2 md:p-4 cursor-pointer"
          onClick={onDeleteprojectCourseCount}
        >
          -
        </p>

        <h1 className="text-[#334961] my-4 font-semibold">
          مشاريع او دورات سابقة في المسار
        </h1>
        {Array(projectCourseCount)
          .fill(1)
          .map((n, i) => {
            return (
              <div className="flex flex-col gap-2  mt-10" key={i}>
                <input
                  {...formInputs(`project_course.${i}.completion_date`)}
                  required
                  placeholder="completion_date"
                  type="date"
                  className={"input"}
                />
                <input
                  {...formInputs(`project_course.${i}.description_of_project`)}
                  required
                  placeholder="وصف المشروع"
                  type="text"
                  className={"input"}
                />
              </div>
            );
          })}
      </section>

      <section className="bg-white p-4 rounded-xl">
        <h1 className="text-[#334961]  my-4  font-semibold">
          لماذا اخترت هذا المسار ؟ (200 كلمة اقصاها)
        </h1>
        <textarea
          {...formInputs("why_did_you_choose_this_track")}
          required
          placeholder="كتابة...."
          className={"input"}
        />

        <h1 className="text-[#334961]  my-4  font-semibold">
          لماذا مسار ؟ ولماذا ترى انك مناسب للبرنامج ؟
        </h1>

        <div className="flex flex-col gap-2">
          <input
            {...formInputs("talk_about_yourself_video")}
            required
            placeholder="رابط الفيديو (يوتيوب , درايف, لووم ..إلخ)"
            type="text"
            className={"input"}
          />

<h1 className="text-[#334961]  my-4  font-semibold">
وسائل تواصل
        </h1>
          <input
            {...formInputs("linkedin")}
            placeholder="لينكد إن"
            type="text"
            className={"input"}
          />

          <input
            {...formInputs("github")}
            placeholder="(اختياري) قيت هب"
            type="text"
            className={"input"}
          />

          <h1 className="text-[#334961]">
            شيء اخر تود ان تخبرنا به ؟ (100 كلمة اقصاها)
          </h1>
          <textarea
            {...formInputs("anything_else_you_want_to_tell_us")}
            required
            placeholder="كتابة...."
            className={"input"}
          />
        </div>
      </section>
    </div>
  );
};

export default WorkInfo;
