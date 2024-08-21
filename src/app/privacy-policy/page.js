"use client";
import React, { useContext } from "react";
import { AppContext } from "../../app/appContext";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const PrivacyPolicy = () => {
  const { english } = useContext(AppContext);

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1B22] px-8">
      <Navbar />
      <div className="flex flex-col max-w-4xl mx-auto">
        <div className="mb-8">
          <h1
            className={`text-4xl font-bold text-white  ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "Privacy Policy" : "سياسة الخصوصية"}
          </h1>
          <p
            className={`text-sm text-gray-400 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english ? "Last updated March 1" : "آخر تحديث في 01 مارس .2024"}
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
              ? "What does this policy cover?"
              : "ماذا تغطي هذه السياسة؟"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? `This policy describes how the Ministry of Tourism (referred to as
                “we”, “us” or “the Ministry”) will make use of your data when you
                interact with us through our websites and all of the webpages,
                subdomains, and subparts of the platform. It also describes your data
                protection rights. By using these websites, you expressly agree to
                this policy. This policy applies to both children and adults;
                however, the consent to collect, process, and share children’s
                personal data should be provided by a Guardian.`
              : `تصف هذه السياسة كيفية قيام وزارة السياحة (المشار إليها بـ "نحن" أو "نحن" أو "الوزارة") باستخدام بياناتك عندما تتفاعل معنا من خلال مواقعنا الإلكترونية وجميع صفحات الويب والنطاقات الفرعية والأجزاء الفرعية للمنصة. كما يصف أيضًا حقوق حماية البيانات الخاصة بك. باستخدام هذه المواقع، فإنك توافق صراحة على هذه السياسة، وتنطبق هذه السياسة على كل من الأطفال والبالغين، ومع ذلك، يجب أن يتم توفير الموافقة على جمع ومعالجة ومشاركة البيانات الشخصية للأطفال من قبل ولي الأمر.`}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${english ? "" : "text-end"}`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english
              ? "What information do we collect?"
              : "ما هي المعلومات التي نقوم بجمعها؟"}
          </h2>

          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? `The Ministry of Tourism collects and processes your personal data
                when you interact with our platform or if you interact with us
                personally, including but not limited to: Personal information in
                the profile, including users' names, email addresses, as well as their
                acceptance of the Privacy Policy. If we’re unable to collect the
                needed personal data, we will not be able to provide our services as
                it will be hard to recognize your identity, background, and
                preferences.`
              : `تقوم وزارة السياحة بجمع ومعالجة بياناتك الشخصية عندما تتفاعل مع منصتنا أو إذا كنت تتفاعل معنا شخصيًا، بما في ذلك على سبيل المثال لا الحصر: المعلومات الشخصية في الملف الشخصي، بما في ذلك أسماء المستخدمين وعناوين البريد الإلكتروني، بالإضافة إلى قبولهم لسياسة الخصوصية. إذا لم نتمكن من جمع البيانات الشخصية المطلوبة، فلن نتمكن من تقديم خدماتنا لأنه سيكون من الصعب التعرف على هويتك وخلفيتك وتفضيلاتك.`}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${english ? "" : "text-end"}`}
            style={{
              fontFamily: "AlbertFont",
            }}
          >
            {english
              ? "How do we collect your personal data?"
              : "كيف نجمع بياناتك الشخصية؟"}
          </h2>

          <ul
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{
              fontFamily: "AlbertFontNormal",
              direction: english ? "ltr" : "rtl",
              textAlign: english ? "left" : "right",
            }}
          >
            {english
              ? `The Ministry of Tourism collects your personal data for use in:`
              : `تقوم وزارة السياحة بجمع بياناتك الشخصية لاستخدامها في:`}
            <li>
              {english ? "• User verification." : "• التحقق من المستخدم."}
            </li>
            <li>
              {english
                ? "• Providing to the users an exceptional experience for the platform."
                : "• توفير تجربة استثنائية للمستخدمين للمنصة."}
            </li>
            <li>
              {english
                ? "• Receive interactive messages/emails once they register to notifying them that they have been verified."
                : "• تلقي رسائل تفاعلية/رسائل بريد إلكتروني بمجرد التسجيل لإعلامهم بأنه قد تم التحقق منهم."}
            </li>
            <li>
              {english
                ? "• Receive messages/emails if the password is changed to complete verification."
                : "• تلقي الرسائل / رسائل البريد الإلكتروني إذا تم تغيير كلمة المرور لإكمال التحقق."}
            </li>
            <li>
              {english
                ? "• Receiving marketing and awareness messages."
                : "• استقبال الرسائل التسويقية والتوعوية."}
            </li>
            <li>
              {english
                ? "• To review and enforce the platform usage policies."
                : "• مراجعة وتنفيذ سياسات استخدام النظام الأساسي."}
            </li>
            {english
              ? `The Ministry of Tourism may share your personal data with external entities, such as: Ministry of Tourism Partners, government and semi-government entities, third-party service providers.`
              : `قد تقوم وزارة السياحة بمشاركة بياناتك الشخصية مع جهات خارجية، مثل: شركاء وزارة السياحة، والجهات الحكومية وشبه الحكومية، ومقدمي الخدمات الخارجيين.`}
          </ul>

          <h2
            className={`text-2xl font-bold mb-4 ${english ? "" : "text-end"}`}
            style={{
              fontFamily: "AlbertFont",
            }}
          >
            {english
              ? "How do we process your personal data?"
              : "كيف نقوم بمعالجة بياناتك الشخصية؟"}
          </h2>

          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{
              fontFamily: "AlbertFontNormal",
            }}
          >
            {english
              ? `The Ministry of Tourism will process the personal data collected and
                stored about you and others, automatically or manually using our
                systems to provide the best services for you. The Ministry will also
                use tools to process your personal data, including: data processing
                and decision-making tools.`
              : `ستقوم وزارة السياحة بمعالجة البيانات الشخصية التي تم جمعها وتخزينها عنك وعن الآخرين، تلقائيًا أو يدويًا باستخدام أنظمتنا لتقديم أفضل الخدمات لك. كما ستستخدم الوزارة أدوات لمعالجة بياناتك الشخصية، بما في ذلك: أدوات معالجة البيانات واتخاذ القرار.`}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${english ? "" : "text-end"}`}
            style={{
              fontFamily: "AlbertFont",
            }}
          >
            {english
              ? "On which legal basis do we process your personal data?"
              : "على أي أساس قانوني نقوم بمعالجة بياناتك الشخصية؟"}
          </h2>

          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{
              fontFamily: "AlbertFontNormal",
            }}
          >
            {english
              ? `The Ministry of Tourism processes your personal data in accordance
                with the policies applied within the Ministry of Tourism, including,
                but not limited to, the Personal Data Protection Policy of the
                Ministry of Tourism, the Personal Data Protection Policy of the
                National Data Management Office, the Saudi Personal Data Protection
                law, as well as the relevant national laws, regulations, and
                policies.`
              : `تعالج وزارة السياحة بياناتك الشخصية وفقًا للسياسات المطبقة داخل وزارة السياحة، بما في ذلك، على سبيل المثال لا الحصر، سياسة حماية البيانات الشخصية لوزارة السياحة، وسياسة حماية البيانات الشخصية للمكتب الوطني لإدارة البيانات، قانون حماية البيانات الشخصية السعودي، بالإضافة إلى القوانين واللوائح والسياسات الوطنية ذات الصلة.`}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${english ? "" : "text-end"}`}
            style={{
              fontFamily: "AlbertFont",
            }}
          >
            {english
              ? "How do we store your personal data?"
              : "كيف نقوم بتخزين بياناتك الشخصية؟"}
          </h2>

          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{
              fontFamily: "AlbertFontNormal",
            }}
          >
            {english
              ? `The Ministry of Tourism stores your personal data securely in a
                database outside and inside the Kingdom of Saudi Arabia, security
                standards will be applied. For verification, the personal data will
                remain in the server for the duration of the Program. Once this time
                period has expired, the Ministry will delete your data by removing
                it, except in cases where we are legally obligated to store your
                data or in conflict with relevant laws and regulations.`
              : `تقوم وزارة السياحة بتخزين بياناتك الشخصية بشكل آمن في قاعدة بيانات خارج وداخل المملكة العربية السعودية، وسيتم تطبيق معايير الأمان. للتحقق، ستبقى البيانات الشخصية في الخادم طوال مدة البرنامج. وبمجرد انتهاء هذه الفترة الزمنية، ستقوم الوزارة بحذف بياناتك عن طريق إزالتها، إلا في الحالات التي نكون فيها ملزمين قانونًا بتخزين بياناتك أو التي تتعارض مع القوانين واللوائح ذات الصلة.`}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${english ? "" : "text-end"}`}
            style={{
              fontFamily: "AlbertFont",
            }}
          >
            {english
              ? "What are your personal data protection rights?"
              : "ما هي حقوق حماية بياناتك الشخصية؟"}
          </h2>

          <ul
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{
              fontFamily: "AlbertFontNormal",
              direction: english ? "ltr" : "rtl",
              textAlign: english ? "left" : "right",
            }}
          >
            {english ? (
              <>
                The Ministry is keen to protect your personal data in accordance
                with the personal data protection privacy policy applied in the
                Kingdom, that users are fully protected and confined to the full
                protection of their personal data. As long as there is no
                conflict with the laws and policies relied upon by the Ministry,
                it also does not include for every user the following:
                <li>
                  • The right to be informed - the user has the right to be
                  informed of the legal justification for collecting his
                  personal data and the purpose of collecting it in accordance
                  with the relevant controls, procedures, and policies.
                </li>
                <li>
                  • Right of access - The user has the right to access his
                  personal data available to the Ministry in accordance with the
                  relevant controls, procedures, and policies.
                </li>
                <li>
                  • The right to obtain - The user has the right to obtain his
                  personal data available at the Ministry in a readable form in
                  accordance with the relevant controls, procedures, and
                  policies.
                </li>
                <li>
                  • The right to rectification - The user has the right to
                  request the Ministry to correct or update his old personal
                  data or complete it in accordance with the relevant controls,
                  procedures, and policies.
                </li>
                <li>
                  • The right to withdraw consent - The user has the right to
                  revoke his consent to the processing of his personal data at
                  any time unless there are legitimate purposes that require the
                  opposite and in accordance with the relevant controls and
                  procedures.
                </li>
                <li>
                  • The right to restrict processing - the user has the right to
                  request that the processing of his personal data be restricted
                  according to certain conditions and in accordance with the
                  relevant controls, procedures, and policies.
                </li>
                <li>
                  • The right to portability - the user has the right to request
                  that his personal data be transferred to another party or
                  directly to him according to certain conditions and in
                  accordance with the relevant controls, procedures, and
                  policies.
                </li>
                <li>
                  • The right to object - the user has the right to object to
                  the processing of his personal data available to the Ministry
                  in accordance with the relevant controls, procedures and
                  policies.
                </li>
                <li>
                  • The right to erasure: The user has the right to request the
                  erasure of his personal data available to the Ministry if the
                  argument for it is over if this does not affect the Ministry’s
                  operations or the purpose of its collection in accordance with
                  the relevant controls, procedures, and policies.
                </li>
                The Ministry has 60 working days to respond to any request you
                submit regarding the above mentioned rights. If you wish to
                exercise any of these rights, don't hesitate to contact us via
                the following email: Info@mt.gov.sa. If you do not receive any
                response from the Ministry within a month, please direct the
                request to the following email: Dataprivacy@mt.gov.sa.
              </>
            ) : (
              <>
                تحرص الوزارة على حماية بياناتك الشخصية وفقاً لسياسة خصوصية حماية
                البيانات الشخصية المطبقة في المملكة، والتي تقضي بحماية
                المستخدمين بشكل كامل وتقتصر الحماية الكاملة لبياناتهم الشخصية.
                وبما لا يتعارض مع القوانين والسياسات التي تعتمدها الوزارة، فإنه
                لا يشمل أيضاً لكل مستخدم ما يلي:
                <li>
                  • الحق في الحصول على المعلومات – يحق للمستخدم أن يتم إبلاغه
                  بالمبرر القانوني لجمع بياناته الشخصية والغرض من جمعها وفقاً
                  للضوابط والإجراءات والسياسات ذات الصلة.
                </li>
                <li>
                  • حق الوصول - يحق للمستخدم الوصول إلى بياناته الشخصية المتوفرة
                  لدى الوزارة وفق الضوابط والإجراءات والسياسات ذات الصلة.
                </li>
                <li>
                  • الحق في الحصول – يحق للمستخدم الحصول على بياناته الشخصية
                  المتوفرة لدى الوزارة بشكل مقروء وفق الضوابط والإجراءات
                  والسياسات ذات الصلة.
                </li>
                <li>
                  • حق التصحيح - يحق للمستخدم أن يطلب من الوزارة تصحيح أو تحديث
                  بياناته الشخصية القديمة أو استكمالها وفق الضوابط والإجراءات
                  والسياسات ذات العلاقة.
                </li>
                <li>
                  • الحق في سحب الموافقة - يحق للمستخدم إلغاء موافقته على معالجة
                  بياناته الشخصية في أي وقت ما لم تكن هناك أغراض مشروعة تتطلب
                  عكس ذلك ووفقاً للضوابط والإجراءات ذات الصلة.
                </li>
                <li>
                  • الحق في تقييد المعالجة - يحق للمستخدم أن يطلب تقييد معالجة
                  بياناته الشخصية وفق شروط معينة ووفقاً للضوابط والإجراءات
                  والسياسات ذات الصلة.
                </li>
                <li>
                  • الحق في النقل - يحق للمستخدم طلب نقل بياناته الشخصية إلى طرف
                  آخر أو مباشرة إليه وفق شروط معينة ووفقاً للضوابط والإجراءات
                  والسياسات ذات الصلة.
                </li>
                <li>
                  • الحق في الاعتراض - يحق للمستخدم الاعتراض على معالجة بياناته
                  الشخصية المتوفرة لدى الوزارة وفق الضوابط والإجراءات والسياسات
                  ذات العلاقة.
                </li>
                <li>
                  • حق المحو: يحق للمستخدم طلب محو بياناته الشخصية المتوفرة لدى
                  الوزارة إذا انتهى الحجة على ذلك إذا كان ذلك لا يؤثر على عمليات
                  الوزارة أو الغرض من جمعها وفق الضوابط ذات العلاقة. والإجراءات
                  والسياسات.
                </li>
                لدى الوزارة 60 يوم عمل للرد على أي طلب تقدمه بخصوص الحقوق
                المذكورة أعلاه. إذا كنت ترغب في ممارسة أي من هذه الحقوق، فلا
                تتردد في التواصل معنا عبر البريد الإلكتروني التالي:
                Info@mt.gov.sa. وفي حالة عدم تلقي أي رد من الوزارة خلال شهر،
                يرجى توجيه الطلب إلى البريد الإلكتروني التالي:
                Dataprivacy@mt.gov.sa.
              </>
            )}
          </ul>

          <h2
            className={`text-2xl font-bold mb-4 ${english ? "" : "text-end"}`}
            style={{
              fontFamily: "AlbertFont",
            }}
          >
            {english ? "What are cookies?" : "ما هي ملفات تعريف الارتباط؟"}
          </h2>

          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{
              fontFamily: "AlbertFontNormal",
            }}
          >
            {english
              ? "Our website uses cookies to identify you from other users so that we can provide you with an exceptional experience when visiting our website and enhance the portal’s features. Cookies are text files placed on your computer to collect standard internet log information and visitor behavior information to remember information about your visit, hence facilitating your next visit and making it more user-friendly. By continuing to browse you agree to the storing of cookies on your device to enhance your site experience and for analytical purposes."
              : "يستخدم موقعنا ملفات تعريف الارتباط للتعرف عليك من بين المستخدمين الآخرين حتى نتمكن من تزويدك بتجربة استثنائية عند زيارة موقعنا وتعزيز ميزات البوابة. ملفات تعريف الارتباط هي ملفات نصية يتم وضعها على جهاز الكمبيوتر الخاص بك لجمع معلومات سجل الإنترنت القياسية ومعلومات سلوك الزائر لتذكر المعلومات المتعلقة بزيارتك، وبالتالي تسهيل زيارتك التالية وجعلها أكثر سهولة في الاستخدام. من خلال الاستمرار في التصفح، فإنك توافق على تخزين ملفات تعريف الارتباط على جهازك لتعزيز تجربة موقعك ولأغراض تحليلية."}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${english ? "" : "text-end"}`}
            style={{
              fontFamily: "AlbertFont",
            }}
          >
            {english
              ? "How do we use cookies?"
              : "كيف نستخدم ملفات تعريف الارتباط؟"}
          </h2>

          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{
              fontFamily: "AlbertFontNormal",
            }}
          >
            {english
              ? "The Ministry of Tourism uses cookies in a range of ways to improve your experience on our website, including keeping you signed in and understanding how you use our website by collecting data and information when you interact with our website. Cookies collect information that has been provided when you log into our website, register as a new user, or submit a form through our website. Data and information that are collected through cookies mostly include your personal information (e.g., as your name, address, email, phone number, etc), website visit details including your URL, website clicks details, page response time, visit duration per web page, IP address, browser type and add-ons, time zone or any other information you provide us with when visiting the website. The Ministry of Tourism works closely with other partners and external entities. Therefore, the Ministry of Tourism may receive your information when you visit other websites or use other services provided by the Ministry."
              : "تستخدم وزارة السياحة ملفات تعريف الارتباط بعدة طرق لتحسين تجربتك على موقعنا، بما في ذلك الحفاظ على تسجيل دخولك وفهم كيفية استخدامك لموقعنا من خلال جمع البيانات والمعلومات عندما تتفاعل مع موقعنا. تقوم ملفات تعريف الارتباط بجمع المعلومات التي تم تقديمها عند تسجيل الدخول إلى موقعنا الإلكتروني، أو التسجيل كمستخدم جديد، أو إرسال نموذج عبر موقعنا الإلكتروني. تتضمن البيانات والمعلومات التي يتم جمعها من خلال ملفات تعريف الارتباط في الغالب معلوماتك الشخصية (على سبيل المثال، اسمك وعنوانك وبريدك الإلكتروني ورقم هاتفك وما إلى ذلك)، وتفاصيل زيارة موقع الويب بما في ذلك عنوان URL الخاص بك، وتفاصيل نقرات موقع الويب، ووقت استجابة الصفحة، ومدة الزيارة لكل صفحة ويب. ، ، عنوان IP، نوع المتصفح والوظائف الإضافية، المنطقة الزمنية أو أي معلومات أخرى تزودنا بها عند زيارة الموقع. تعمل وزارة السياحة بشكل وثيق مع الشركاء الآخرين والكيانات الخارجية. ولذلك فإن وزارة السياحة قد تتلقى معلوماتك عند زيارتك لمواقع أخرى أو استخدام الخدمات الأخرى التي تقدمها الوزارة."}
          </p>

          <h2
            className={`text-2xl font-bold mb-4 ${english ? "" : "text-end"}`}
            style={{
              fontFamily: "AlbertFont",
            }}
          >
            {english
              ? "What types of cookies do we use?"
              : "ما هي أنواع ملفات تعريف الارتباط التي نستخدمها؟"}
          </h2>

          <ul
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{
              fontFamily: "AlbertFontNormal",
              direction: english ? "ltr" : "rtl",
              textAlign: english ? "left" : "right",
            }}
          >
            {english
              ? "There are a number of different types of cookies, however, this website may use the following:"
              : "هناك عدد من الأنواع المختلفة لملفات تعريف الارتباط، ومع ذلك، قد يستخدم هذا الموقع ما يلي:"}

            <li>
              {english
                ? "• Performance & Analytics Cookies — The Ministry uses these cookies to enable us to know visitors’ identities, number, and behavior on the Website. They also help us to improve the way the Website works, as MT is keen on ensuring that users can easily find what they are looking for."
                : "• ملفات تعريف الارتباط الخاصة بالأداء والتحليلات —  تستخدم الوزارة ملفات تعريف الارتباط هذه لتمكيننا من معرفة هويات الزوار وعددهم وسلوكهم على الموقع. كما أنها تساعدنا على تحسين طريقة عمل الموقع الإلكتروني، حيث تحرص MT على ضمان إمكانية عثور المستخدمين بسهولة على ما يبحثون عنه."}
            </li>

            <li>
              {english
                ? "• Functionality Cookies — The Ministry uses these cookies to identify you on our website and remember your previously selected preferences (e.g., preferred language, and region), customize the right web content for you and send you special greetings."
                : "• ملفات تعريف الارتباط الوظيفية - تستخدم الوزارة ملفات تعريف الارتباط هذه لتحديد هويتك على موقعنا الإلكتروني وتذكر تفضيلاتك المحددة مسبقًا (على سبيل المثال، اللغة المفضلة والمنطقة)، وتخصيص محتوى الويب المناسب لك وإرسال تحيات خاصة إليك."}
            </li>

            <li>
              {english
                ? "• Advertising/Tracking Cookies — The Ministry uses these cookies to collect information about your visit to our website, the content you viewed, the links you followed and information about your browser, device, and your IP address. The Ministry may share some limited aspects of this data with third parties for several purposes and we may also share online data collected through cookies with our partners. This means that when you visit another website, you may be shown advertising based on your browsing patterns on our website."
                : "• ملفات تعريف الارتباط للإعلان/التتبع - تستخدم الوزارة ملفات تعريف الارتباط هذه لجمع معلومات حول زيارتك لموقعنا الإلكتروني، والمحتوى الذي شاهدته، والروابط التي اتبعتها، ومعلومات حول متصفحك وجهازك وعنوان IP الخاص بك. قد تقوم الوزارة بمشاركة بعض الجوانب المحدودة من هذه البيانات مع أطراف ثالثة لعدة أغراض وقد نشارك أيضًا البيانات عبر الإنترنت التي تم جمعها من خلال ملفات تعريف الارتباط مع شركائنا. وهذا يعني أنه عند زيارتك لموقع ويب آخر، قد تظهر لك إعلانات بناءً على أنماط التصفح الخاصة بك على موقعنا."}
            </li>
          </ul>

          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english
              ? "Changes to our privacy policy"
              : "التغييرات في سياسة الخصوصية الخاصة بنا"}
          </h2>
          <p
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            {english
              ? "The Ministry of Tourism keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on: 01/03/2024."
              : "تقوم وزارة السياحة بإبقاء سياسة الخصوصية الخاصة بها قيد المراجعة المنتظمة وتضع أي تحديثات على صفحة الويب هذه. تم تحديث سياسة الخصوصية هذه آخر مرة في: 01/03/2024."}
          </p>
          <h2
            className={`text-2xl font-bold mb-4 ${
              english ? "" : "text-end justify-end"
            }`}
            style={{ fontFamily: "AlbertFont" }}
          >
            {english ? "Our contact details" : "تفاصيل الاتصال لدينا"}
          </h2>
          <ul
            className={`mb-6 ${english ? "" : "text-end justify-end"}`}
            style={{
              fontFamily: "AlbertFontNormal",
              direction: english ? "ltr" : "rtl",
              textAlign: english ? "left" : "right",
            }}
          >
            {english
              ? "If you have any questions about the Ministry’s privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us."
              : "إذا كانت لديك أي أسئلة حول سياسة الخصوصية الخاصة بالوزارة، أو البيانات التي نحتفظ بها عنك، أو كنت ترغب في ممارسة أحد حقوق حماية البيانات الخاصة بك، فلا تتردد في الاتصال بنا."}
            <li>
              {english
                ? "• Email us at: Info@mt.gov.sa"
                : "• راسلنا عبر البريد الإلكتروني: Info@mt.gov.sa"}
            </li>
            <li>
              {english
                ? "• Email our Data Privacy Officer at: Dataprivacy@mt.gov.sa"
                : "• قم بإرسال بريد إلكتروني إلى مسؤول خصوصية البيانات لدينا على: Dataprivacy@mt.gov.sa"}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
