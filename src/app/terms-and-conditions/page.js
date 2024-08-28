"use client";
import React, {useContext} from "react";
import Image from "next/image";
import STCLogo from "../../../public/images/stc-logo.png";
import { AppContext } from "../../app/appContext";

const PrivacyPolicy = () => {
  const { english } = useContext(AppContext);

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1B22] px-8 py-10">
      <div className="self-start mb-10">
        <Image src={STCLogo} alt="STC Logo" width={150} height={60} />
      </div>
      <div className="flex flex-col max-w-4xl mx-auto">
        <div className="mb-8">
          <h1
            className={`text-4xl font-bold text-white ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "Terms and Conditions" : "الشروط والأحكام"}
          </h1>
          <p
            className={`text-sm text-gray-400 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english ? "Last updated June 26" : "آخر تحديث 26 يونيو"}
          </p>
        </div>
        <div className={`text-white`}>
          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english
              ? "Copyright and Intellectual Property:"
              : "حقوق النشر والملكية الفكرية:"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english ? (
              <>
                All content, including - but not limited to - data, information,
                designs, graphics, images, programs, files, etc. - is owned by
                the Ministry of Tourism or approved by its owner to be included
                on this site under the intellectual property regulations. It is
                not permissible to copy or print or download any of the contents
                of this site except and only for personal use or for use within
                the company or by the organization's user. Any copies for such a
                purpose must include all trademarks and logos of the Ministry.
                It is prohibited to copy or save any part of this site or its
                contents on any other site or deploying it in any public or
                private portal to extract data without the prior written consent
                of the Ministry, unless otherwise stipulated. Unless otherwise
                provided for, any trademarks and logos provided on this site
                belong to the Ministry. It is not permissible for any user to
                copy or use these trademarks without the prior written consent
                of the Ministry.
              </>
            ) : (
              <>
                جميع المحتويات، بما في ذلك - على سبيل المثال لا الحصر - البيانات
                والمعلومات والتصاميم والرسومات والصور والبرامج والملفات، وما إلى
                ذلك - مملوكة لوزارة السياحة أو موافق عليها من قبل مالكها ليتم
                تضمينها في هذا الموقع بموجب لوائح الملكية الفكرية. لا يجوز نسخ
                أو طباعة أو تحميل أي من محتويات هذا الموقع إلا للاستخدام الشخصي
                أو للاستخدام داخل الشركة أو من قبل مستخدم المنظمة. يجب أن تتضمن
                أي نسخ لهذا الغرض جميع العلامات التجارية والشعارات الخاصة
                بالوزارة. يحظر نسخ أو حفظ أي جزء من هذا الموقع أو محتوياته في أي
                موقع آخر أو نشره في أي بوابة عامة أو خاصة لاستخراج البيانات دون
                موافقة خطية مسبقة من الوزارة، ما لم ينص على خلاف ذلك. ما لم ينص
                على خلاف ذلك، فإن أي علامات تجارية وشعارات مقدمة في هذا الموقع
                مملوكة للوزارة. لا يجوز لأي مستخدم نسخ أو استخدام هذه العلامات
                التجارية دون موافقة خطية مسبقة من الوزارة.
              </>
            )}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "Changes and Updates:" : "التغييرات والتحديثات:"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? "The Ministry is trying to keep the site available and accessible for all users 24/7, but it will not be responsible for its availability for any reason and for any period of time. It might suspend the access to this site temporarily or permanently without prior warning."
              : "تحاول الوزارة إبقاء الموقع متاحًا ويمكن الوصول إليه لجميع المستخدمين على مدار الساعة، لكنها لن تكون مسؤولة عن توفره لأي سبب ولأي فترة زمنية. قد يتم تعليق الوصول إلى هذا الموقع مؤقتًا أو دائمًا دون سابق إنذار."}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "Availability of Information:" : "توفر المعلومات:"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? "The purpose of providing such information contained in this site is to serve as reference only, and it is not to provide legal opinions or advices. Therefore, users ought to consult a qualified specialist organization if they need such a service."
              : "الغرض من توفير هذه المعلومات الواردة في هذا الموقع هو أن تكون مرجعًا فقط، وليس لتقديم آراء قانونية أو نصائح. لذلك، يجب على المستخدمين استشارة منظمة مختصة إذا كانوا بحاجة إلى مثل هذه الخدمة."}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "Accuracy and Warranties:" : "الدقة والضمانات:"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? "The Ministry will do its best efforts to ensure the accuracy and correctness of the information presented in this site. But it does not guarantee the quality, accuracy and completeness of any such information at any time. Given that, the content of this site is provided as is without any conditions or guarantees or any other provisions of any kind."
              : "ستبذل الوزارة قصارى جهدها لضمان دقة وصحة المعلومات المعروضة في هذا الموقع. لكنها لا تضمن جودة أو دقة أو اكتمال أي من هذه المعلومات في أي وقت. بناءً على ذلك، يتم توفير محتوى هذا الموقع كما هو دون أي شروط أو ضمانات أو أي أحكام أخرى من أي نوع."}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "Damage and Misuse:" : "الأضرار وسوء الاستخدام:"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? "The user is prohibited from misusing this site and causing damage to the information network through illegal or unauthorized access without a valid legal authorization. The penalties stipulated in the laws of the Kingdom of Saudi Arabia will be imposed on users who cause damage or misuse."
              : "يُحظر على المستخدمين إساءة استخدام هذا الموقع والتسبب في أضرار للشبكة المعلوماتية من خلال الوصول غير القانوني أو غير المصرح به بدون تفويض قانوني صالح. سيتم فرض العقوبات المنصوص عليها في قوانين المملكة العربية السعودية على المستخدمين الذين يتسببون في الأضرار أو سوء الاستخدام."}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "Linking to other Sites:" : "الربط بالمواقع الأخرى:"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? "Links to other sites are provided for the purpose of user’s convenience, and no services or products offered or referred to on those sites are considered the responsibility of the Ministry, nor is it liable for the contents of any site referred to as it is subject to its own privacy policies."
              : "يتم توفير الروابط إلى المواقع الأخرى لراحة المستخدم، ولا تعتبر أي خدمات أو منتجات معروضة أو مشار إليها في تلك المواقع من مسؤولية الوزارة، كما أنها ليست مسؤولة عن محتويات أي موقع مشار إليه حيث يخضع لسياسات الخصوصية الخاصة به."}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "Disclaimer:" : "إخلاء المسؤولية:"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? "The Ministry will not be liable for any losses or damages arising from any use of this website or its content (including losses and damages resulting from negligence)."
              : "لن تكون الوزارة مسؤولة عن أي خسائر أو أضرار تنشأ عن أي استخدام لهذا الموقع أو محتوياته (بما في ذلك الخسائر والأضرار الناتجة عن الإهمال)."}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "Your Feedback:" : "ملاحظاتك:"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? "The Ministry strives to make this website a useful source of information on tourism in the Kingdom of Saudi Arabia. We welcome any suggestions and feedback via https://mt.gov.sa/contact-us"
              : "تسعى الوزارة لجعل هذا الموقع مصدرًا مفيدًا للمعلومات حول السياحة في المملكة العربية السعودية. نرحب بأي اقتراحات وملاحظات عبر https://mt.gov.sa/contact-us"}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "For more information:" : "لمزيد من المعلومات:"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? "Please contact us through the means of communication approved on the site."
              : "يرجى الاتصال بنا من خلال وسائل الاتصال المعتمدة على الموقع."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
