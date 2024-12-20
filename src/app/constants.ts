export const REGISTERATION_SCREENS = [
  { order: 1, prev: "", current: "roles_screen", next: "personal_info_screen" },
  { order: 2, prev: "roles_screen", current: "personal_info_screen", next: "work_info_screen" },
  {
    order: 3,
    prev: "personal_info_screen",
    current: "work_info_screen",
    next: "",
  },
  { order: 4, prev: "work_info_screen", current: "thank_you_screen", next: "" },
];

export const RolesList = [
  {
    id: 1,
    name: "واجهة المستخدم",
    image:"icons/ui.svg",
    value:"UIUX"
  },
  {
    id: 2,
    name: "هندسة البرمجيات",
    image:"icons/sw.svg",
    value:"SWE"

  },
  {
    id: 3,
    name: "الذكاء الإصطناعي",
     image:"icons/ai.svg",
     value:"AI"
  },
  {
    id: 4,
    name: "إدارة المنتجات",
     image:"icons/pm.svg",
     value:"PM"
  },
];

export const participant_data = {
  role: 0,
  name: {
    en: {
      first: "",
      middle: "",
      last: "",
    },
    ar: {
      first: "",
      middle: "",
      last: "",
    },
  },
  contact: {
    email: "",
    phone_number: "",
  },
  national_id: "",
  education: {
    university: "",
    College: "",
    major: "",
    expected_graduation_year: 2024,
    gpa: {
      scale: 5,
      cumlative: 5,
    },
  },
  links: {
    github: "",
    linkedin: "",
  },
};


export const EVENT_GOALS = [
  {
    id:3,
    title:"التدريب والتعليم",
    description:"تهدف المرحلة الأولى إلى بناء قاعدة تقنية متينة وتطوير المهارات التقنية لدى المشاركين ضمن مسارات الذكاء الاصطناعي، هندسة البرمجيات، إدارة المنتجات التقنية وتصميم واجهات وتجربة المستخدم عبر دمج التعلّم بالتطبيق العملي على مدار ثلاثة أسابيع  عبر محاضرات افتراضية مباشرة وغير مباشرة، مما يتيح للمشاركين التعلم بشكل مرن."
  },
  {
    id:2,
    title:"تطوير المنتجات",
    description:"تتيح هذه المرحلة للمشاركين تطبيق ما تعلموه عمليًا عبر حل تحديات تقنية مبتكرة والتعاون مع طلاب من مختلف المسارات الأخرى لمحاكاة المشاريع الواقعية. نمط المرحلة الثانية مدمج مابين الحضور في الرياض والجلسات الافتراضية لمدة أسبوعين."
  },
  {
    id:1,
    title:"التمكين",
    description:"بعد إتمام مرحلة تطوير المنتجات، يحصل الفائزون والمشاركون المتميزون على فرص تمكين حقيقية، من خلال ربطهم بحاضنات ومسرعات الأعمال وخبراء في المجال لمساعدتهم في تحويل أفكارهم إلى مشاريع واقعية."
  }
]

export const EVENT_PATHS = [
  {
    id:1,
    title:"مسار إدارة المنتجات"
  },
  {
    id:2,
    title:"مسار تجربة المستخدم وتطوير الواجهات"
  },
  {
    id:3,
    title:"مسار هندسة البرمجيات "
  },
  {
    id:4,
    title:"مسار الذكاء الاصطناعي"
  },
]

export const PATH_DETAILS_CONTENT = [
  {
    id:1,
    title:"مسار إدارة المنتجات",
    sub_title:"مسار إدارة المنتجات مصمم خصيصًا للطلاب الذين لديهم رغبة في استكشاف مجال إدارة المنتجات. يهدف المسار إلى تزويدهم بالمهارات والمعرفة الأساسية لوضعهم على الطريق الصحيح نحو أن يصبحوا مديري منتجات فعالين. من خلال هذا المسار، سيتعلم الطلاب كيفية فهم احتياجات المستخدمين وترجمتها إلى منتجات جذابة، بالإضافة إلى تطوير مهارات إدارية أساسية مثل أبحاث السوق و بناء product roadmap .هذا المسار يعتبر خطوة قوية لتزويد الطلاب بالأدوات والتوجيه الصحيح للنمو المستقبلي في مجال إدارة المنتجات.",
    description:"سارة البيز متخصصة في إدارة المنتجات بشركة مزن، بخبرة واسعة في تطوير استراتيجيات المنتجات وإطلاقها بنجاح في السوق مع التركيز على قطاع التقنية المالية والبنية التحتية. خريجة هندسة برمجيات من جامعة الأمير سلطان وحاصلة على وسام قمم للقادة الواعدين، وتتمتع بمهارات متميزة في إدارة العمليات وتطوير المنتجات المبتكرة. عملت سارة مع العديد من الشركات الناشئة بمراحل مختلفة، مما ساعدها على اكتساب معرفة عميقة بكيفية تحقيق النجاح في الأسواق التنافسية. ستقود مسار إدارة المنتجات في برنامج مسار، موجهة المشاركين نحو تطبيق أفضل الممارسات في تطوير وإدارة المنتجات."
 ,"speaker":"سارة البيز",
 "image":"/imgs/speakers/sara.svg"
 ,width:200
  },
  {
    id:2,
    title:"مسار تجربة المستخدم وتطوير الواجهات",
    sub_title:"مسار تصميم واجهة  وتجربة المستخدم مخصص للطلاب الذين يرغبون في تعلم مبادئ التصميم المتمحور حول المستخدم وكيفية إنشاء واجهات سهلة الاستخدام. هذا المسار هو فرصة للمصممين ممن لديهم تجربة عملية في بناء تطبيقات حقيقية وفهم لاساسيات تصميم واجهة وتجربة المستخدم واستخدام Figma، سيتعلم الطلاب كيفية إنشاء تجارب مستخدم تحل المشكلات الواقعية بفعالية. .هذا المسار يعتبر خطوة قوية لتزويدهم بالأدوات والتوجيه الصحيح للنمو المستقبلي في مجال تصميم واجهة  وتجربة المستخدم.",
    description:"زياد الرويشد متخصص في تصميم تجربة المستخدم، حاصل على بكالوريوس هندسة البرمجيات من جامعة الملك سعود. زياد هو مؤسس \"ستوديو وصلة\" لخدمات التصميم، ويمتلك شهادة احترافية من Nielsen Norman Group في تصميم تجربة المستخدم (UX Master Certificate). يتمتع بفهم عميق لاحتياجات المستخدم وتحويلها إلى حلول فعالة وسهلة الاستخدام. عمل مع شركات متنوعة مما مكنه من تحسين واجهات المستخدم وفق أفضل الممارسات. كما عمل كمقيم نضج تجربة المستخدم مع هيئة الحكومة الرقمية السعودية."
   ,"speaker":"زياد الرويشد",
 "image":"/imgs/speakers/zeyad.svg"
 ,width:314
  },
  {
    id:3,
    title:"مسار هندسة البرمجيات ",
    sub_title:"يُساعد هذا المسار الطلاب على الانتقال من مشاريع هندسة البرمجيات التعليمة  إلى حل المشكلات الواقعية وتطبيق أفضل الممارسات أثناء تطوير الحلول لضمان نجاح الأنظمة.يركز المسار على تعزيز ما يسمى ب mental model لكيفة عمل الانظمة مع التركيز على الجوانب الخاصة بال backend و قواعد البيانات والتفاصيل التقنية الخاصة بها.",
    description:"يعرب المصطفى هو مهندس برمجيات متخصص في تطوير الحلول البرمجية وقيادة فرق التقنية. حاصل على شهادة البكالوريوس في هندسة البرمجيات من جامعة الملك فهد للبترول والمعادن، وشهادة AWS Developer Associate. يعمل حاليًا كمهندس برمجيات في شركة ثمانية، ويشغل منصب المدير التقني (CTO) في شركة \"إيفنتفل\". يعرب يمتلك خبرة غنية في مجال DevOps، حيث شغل مناصب سابقة كمهندس DevOps في شركة مرسول. يتميز بخبرته في تطوير التطبيقات البرمجية باستخدام Amazon Web Services (AWS) وNestJS، مع سجل حافل في تطوير التطبيقات لنظام iOS والعمل كمهندس برمجيات (Full stack)."
   ,"speaker":"يعرب المصطفى",
 "image":"/imgs/speakers/yaroob.svg"
 ,width:240
  },
  {
    id:4,
    title:"مسار الذكاء الاصطناعي",
    sub_title:"يُساعد هذا المسار المشاركين على الانتقال من مشاريع الذكاء الاصطناعي التعليمية إلى حل التحديات الواقعية من خلال الذكاء الاصطناعي.",
    description:"أحمد غنّام، خبير في الذكاء الاصطناعي وعلم البيانات، حاصل على درجة الماجستير في علم البيانات من جامعة الأميرة سمية. لديه خبرة واسعة في تطوير حلول مبتكرة لتطبيقات الذكاء الاصطناعي بهدف تحسين الأداء. يتمتع أحمد بخبرة متخصصة في معالجة وتحليل البيانات الصوتية والمرئية، بالإضافة إلى معالجة اللغات الطبيعية."
   ,"speaker":"أحمد غنام",
 "image":"/imgs/speakers/ghannam2.jpeg"
 ,width:180
  },
  {
    id:4,
    title:"",
    sub_title:"يُساعد هذا المسار المشاركين على الانتقال من مشاريع الذكاء الاصطناعي التعليمية إلى حل التحديات الواقعية من خلال الذكاء الاصطناعي.",
    description:"محمود سلهب، مختص في الذكاء الاصطناعي وعلم البيانات، يتمتع بخبرة في تطوير حلول مبتكرة لتحسين أداء التطبيقات الذكية ورفع كفاءة النماذج المتقدمة. يركز على الذكاء الاصطناعي لتحليل ومعالجة البيانات الصوتية وتصميم أنظمة تدعم اللغة العربية لخدمة المتحدثين بها. تشمل اهتماماته البحثية معالجة اللغات الطبيعية، وتوسيع فهم النصوص العربية، وتحليل البيانات الصوتية والبصرية. يساهم محمود في بناء أنظمة تعلم آلي متطورة وأدوات تعزز تجربة المستخدم وتحسن اتخاذ القرارات الذكية في التطبيقات المختلفة."
   ,"speaker":"محمود سلهب",
 "image":"/imgs/speakers/Salhab.jpeg"
 ,width:180
  }
]






export const HACKATHON_QUESTIONS = [
  {
    id: "1",
    question: "أين ستقام مراحل البرنامج؟",
    answer:
      "المرحلة الأولى تستمر 3 أسابيع وتتم عبر محاضرات افتراضية مباشرة، أما المرحلة الثانية فستكون لمدة أسبوعين يتخللها حضور بعد الايام حضورياً في الرياض يتم تحديدها لاحقا.",
  },
  {
    id:"11",
    question:"ماهي طبيعة المحتوى الذي سيتم تقديمه في المرحلة الأولى؟",
    answer:"المرحلة الأولى تستمر 3 أسابيع وتتم عبر محاضرات افتراضية مباشرة لكل مسار على حده، يتم تقديم المحتوى فيها عن طريق مسؤولين المسارات وستيم مشاركة مقتطفات عن المحتوى في قنوات التواصل الخاصة بصانع."
  },
  {
    id:"12",
    question:"هل سيتم تقدم المحتوى في المرحلة الاولى كل يوم؟",
    answer:"المرحلة الأولى تستمر 3 أسابيع وتتم عبر محاضرات افتراضية مباشرة لكل مسار على حده، يتم تقديم المحتوى فيها عن طريق مسؤولين المسارات، المحاضرات لن تتجاوز محاضرتين الى ٣ محاضرات في الاسبوع سواء خلال ايام الاسبوع أو اجازة نهاية الاسبوع."
  },
  {
    id: "2",
    question: "من يمكنه المشاركة في البرنامج؟",
    answer: "البرنامج يستهدف  المهتمين بأحد المسارات المشاركة في هذا البرنامج.",
  },
  {
    id: "3",
    question: "هل أستطيع المشاركة بأكثر من مسار؟",
    answer:
      "لا, يمكنك الالتحاق بمسار واحد فقط",
  },
  {
    id: "4",
    question: "هل يجب أن أكون متمرسًا في البرمجة؟",
    answer:
      "لا، يمكنك المشاركة إذا كان لديك اهتمام بمجالات التقنية والتطوير، حيث سيتم توفير موارد للتعلم والدعم.",
  },
  {
    id: "5",
    question: "ما هي طبيعة التحديات المقدمة؟",
    answer:
      "التحديات تركز على حل مشكلات تقنية من خلال تطوير حلول مبتكرة في عدة مجالات.",
  },
  {
    id: "6",
    question: "كيف يمكنني التسجيل؟",
    answer:
      "يمكنك التسجيل عبر موقع مسار الالكتروني خلال الفترة الزمنية المحددة.",
  },
  {
    id: "7",
    question: "هل المشاركة مجانية؟",
    answer:
      "نعم، المشاركة في مسار مجانية تماماً.",
  },
  {
    id: "8",
    question: "هل تتم تغطية تكاليف السفر للرياض للمرشحين للمرحلة الثانية؟",
    answer:
      "لا, لا يتكفل فريق مسار بتكاليف السفر والمواصلات",
  },
];


export const HACKATHON_TOC = [
  {
    text: "التسجيل متاح للمهتمين داخل المملكة العربية السعودية.",
    image: "./icons/next.svg",
  },
  {
    text: "يجب على المشارك تعبئة بياناته عبر البوابة الخاصة بالتسجيل؛ ولن يتم النظر في أي طلبات لم يقدم عبر البوابة.",
    image: "./icons/next.svg",
  },
  {
    text: "على للمهتمين أن يقر بصحة كامل البيانات المعطاة والمقدمة في كل مراحل البرنامج.",
    image: "./icons/next.svg",
  },


  {
    text: "جميع للمهتمين التعهد بالالتزام بالشروط والأحكام الخاصة بالبرنامج.",
    image: "./icons/next.svg",
  },
  {
    text: "يحق للمنظمين استبعاد أي طالب بدون إبداء أي أسباب ودون أن يترتب على المنظمين أية التزامات أو تعويض من أي نوع.",
    image: "./icons/next.svg",
  },
  {
    text: "جميع القرارات المتخذة نهائية، وقد يقوم فريق صانع بتعليق أو تأخير أو إلغاء أو تغيير الشروط والأحكام في أي وقت.",
    image: "./icons/next.svg",
  },
  {
    text: "لا تتحمل صانع أي خسائر مادية أو أضرار ناتجة عن المشاركة في البرنامج.",
    image: "./icons/next.svg",
  },
  {
    text: "يلتزم جميع الطلاب بحضور جميع الجلسات وورش العمل الخاصة بالبرنامج، وأي تغيب غير مبرر قد يؤدي إلى استبعادهم من البرنامج.",
    image: "./icons/next.svg",
  },
  {
    text: "يتحمل الطلاب المسؤولية الكاملة عن أي استخدام غير مشروع أو انتهاك لأي حقوق ملكية فكرية أو قانونية تخص مشاريعهم المقدمة في البرنامج.",
    image: "./icons/next.svg",
  },
  {
    text: "يلتزم الطلاب بالحفاظ على سلوك احترافي خلال فترة البرنامج، ويحق للمنظمين اتخاذ أي إجراء تجاه أي تصرف غير لائق أو غير قانوني.",
    image: "./icons/next.svg",
  },
  {
    text: "جميع المشاركات والمشاريع المقدمة في البرنامج تخضع للمراجعة التقنية والقانونية للتأكد من توافقها مع الشروط والأحكام وسياسات البرنامج.",
    image: "./icons/next.svg",
  },
  {
    text: "تحمل المشاركون مسؤولية توفير الأدوات والمعدات اللازمة لتنفيذ مشاريعهم، إذا لم يتم توفيرها من قبل الجهة المنظمة.",
    image: "./icons/next.svg",
  },
  {
    text: "يحق للمنظمين نشر المشاريع النهائية أو المراحل التجريبية منها لأغراض إعلامية أو تسويقية تخص البرنامج دون الحاجة للحصول على موافقة مسبقة من المتسابقين.",
    image: "./icons/next.svg",
  },
  
];

export const EVENT_START_DATE = "10-30-2024"

export const UNIVERSITIES_LIST = [
 "جامعة الملك سعود" ,
 "جامعة الامام محمد بن سعود",
 "جامعة الامير سلطان",
 "جامعة الفيصل",
 "جامعة اليمامة",
 "جامعة المجمعة",
 "جامعة الملك عبدالعزيز",
 "جامعة ام القرى",
 "جامعة شقراء",
 "جامعة الملك خالد",
 "جامعة الملك فهد للبترول والمعادن",
 "اخرى",
]

export const COLLEGES_LIST = [
 "كلية علوم الحاسب والمعلومات",
"كلية الحوسبة التطبيقية",
"كلية الهندسة ",
"كلية ادارة الاعمال",
"كلية العلوم",
"اخرى"
]

export const GRADUATION_YEARS_LIST = [
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028+"
]


export function dateStringToISO(dateString:string) {
  const date = new Date(dateString);

  // Check if the date is valid
  if (date.getTime() == null) {
    throw new Error("Invalid date");
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function isToday(date:Date) {
  const today = new Date();
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear();
}