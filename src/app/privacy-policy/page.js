import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const albertFont = localFont({
  src: "../../../public/FSAlbertArabic-Bold.ttf",
  display: "swap",
});

const albertFontNormal = localFont({
  src: "../../../public/FSAlbertArabic-Regular.ttf",
  display: "swap",
});

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1B22] px-8 py-10">
      <div className="self-start mb-10">
        <Image
          src="/images/stc-logo.png"
          alt="STC Logo"
          width={150}
          height={60}
        />
      </div>
      <div className="flex flex-col max-w-4xl mx-auto">
        <div className="mb-8">
          <h1
            className={`${albertFont.className} text-4xl font-bold text-white`}
          >
            Privacy Policy
          </h1>
          <p className={`${albertFontNormal.className} text-sm text-gray-400`}>
            Last updated March 1
          </p>
        </div>
        <div className={`text-white`}>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            What does this policy cover?
          </h2>
          <p className={`${albertFontNormal.className} mb-6`}>
            This policy describes how the Ministry of Tourism (referred to as
            “we”, “us”or “the Ministry”) will make use of your data when you
            interact with us through our websites and all of the webpages,
            subdomains and subparts of the platform. It also describes your data
            protection rights. By using this websites, you expressly agree to
            this policy , This policy applies to both children and adults,
            however, the consent to collect, process and share children’s
            personal data should be provided by a Guardian.
          </p>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            What information do we collect?
          </h2>
          <p className={`${albertFontNormal.className} mb-6`}>
            The Ministry of Tourism collects and processes your personal data
            when you interact with our platform or if you interact with us
            personally , including but not limited to : Personal information in
            the profile, including users nam,email addresses, as well as their
            acceptance of the Privacy Policy. If we’re unable to collect the
            needed personal data, we will not be able to provide our services as
            it will be hard to recognize your identity, background, and
            preferences.
          </p>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            How do we collect your personal data?{" "}
          </h2>
          <ul className={`${albertFontNormal.className} mb-6`}>
            The Ministry of Tourism collects your personal data for use in:{" "}
            <li>• User verification.</li>{" "}
            <li>
              • Providing to the users an exceptional experience for the
              platform.
            </li>{" "}
            <li>
              • Receive interactive messages/emails once they register to
              notifying them that they have been verified.
            </li>{" "}
            <li>
              • Receive messages/emails if the password is changed to complete
              verification.
            </li>{" "}
            <li>• Receiving marketing and awareness messages.</li>{" "}
            <li>• To review and enforce the platform usage policies.</li> The
            Ministry of Tourism may share your personal data with external
            entities, such as: Ministry of Tourism Partners, government and
            semi-government entities, third-party service providers.
          </ul>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            How do we process your personal data?
          </h2>
          <p className={`${albertFontNormal.className} mb-6`}>
            The Ministry of Tourism will process the personal data collected and
            stored about you and others, automatically or manually using our
            systems to provide the best services for you. The Ministry will also
            use tools to process your personal data, including: data processing
            and decision-making tools.
          </p>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            On which legal basis do we process your personal data?
          </h2>
          <p className={`${albertFontNormal.className} mb-6`}>
            The Ministry of Tourism processes your personal data in accordance
            with the policies applied within the Ministry of Tourism, including,
            but not limited to, the Personal Data Protection Policy of the
            Ministry of Tourism, the Personal Data Protection Policy of the
            National Data Management Office, the Saudi Personal Data Protection
            law, as well as the relevant national laws, regulations, and
            policies.
          </p>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            How do we store your personal data?
          </h2>
          <p className={`${albertFontNormal.className} mb-6`}>
            The Ministry of Tourism stores your personal data securely in a
            database outside and inside the Kingdom of Saudi Arabia, security
            standards will be applied. For verification the personal data will
            remain in the server for the duration of the Program. Once this time
            period has expired, the Ministry will delete your data by removing
            it, except in cases where we are legally obligated to store your
            data or in conflict with relevant laws and regulations.
          </p>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            What are your personal data protection rights?
          </h2>
          <ul className={`${albertFontNormal.className} mb-6`}>
            The Ministry is keen to protect your personal data in accordance
            with the personal data protection privacy policy applied in the
            Kingdom, that users are fully protected and confined to the full
            protection of their personal data. As long as there is no conflict
            with the laws and policies relied upon by the Ministry, it also does
            not include for every user the following:{" "}
            <li>
              • The right to be informed - the user has the right to be informed
              of the legal justification for collecting his personal data and
              the purpose of collecting it in accordance with the relevant
              controls, procedures, and policies.
            </li>{" "}
            <li>
              • Right of access - The user has the right to access his personal
              data available to the Ministry in accordance with the relevant
              controls, procedures, and policies.
            </li>{" "}
            <li>
              • The right to obtain - The user has the right to obtain his
              personal data available at the Ministry in a readable form in
              accordance with the relevant controls, procedures, and policies.
            </li>{" "}
            <li>
              • The right to rectification - The user has the right to request
              the Ministry to correct or update his old personal data or
              complete it in accordance with the relevant controls, procedures,
              and policies.
            </li>{" "}
            <li>
              • The right to withdraw consent - The user has the right to revoke
              his consent to the processing of his personal data at any time
              unless there are legitimate purposes that require the opposite and
              in accordance with the relevant controls and procedures.
            </li>{" "}
            <li>
              • The right to restrict processing - the user has the right to
              request that the processing of his personal data be restricted
              according to certain conditions and in accordance with the
              relevant controls, procedures, and policies.
            </li>{" "}
            <li>
              • The right to portability - the user has the right to request
              that his personal data be transferred to another party or directly
              to him according to certain conditions and in accordance with the
              relevant controls, procedures, and policies.
            </li>{" "}
            <li>
              • The right to object - the user has the right to object to the
              processing of his personal data available to the Ministry in
              accordance with the relevant controls, procedures and policies.
            </li>{" "}
            <li>
              • The right to erasure: The user has the right to request the
              erasure of his personal data available to the Ministry if the
              argument for it is over if this does not affect the Ministry’s
              operations or the purpose of its collection in accordance with the
              relevant controls, procedures, and policies.
            </li>{" "}
            The Ministry has 60 working days to respond to any request you
            submit regarding the above mentioned rights. If you wish to exercise
            any of these rights, don't hesitate to contact us via the following
            email: Info@mt.gov.sa. If you do not receive any response from the
            Ministry within a month, please direct the request to the following
            email: Dataprivacy@mt.gov.sa.
          </ul>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            What are cookies?
          </h2>
          <p className={`${albertFontNormal.className} mb-6`}>
            Our website uses cookies to identify you from other users so that we
            can provide you with an exceptional experience when visiting our
            website and enhance the portal’s features. Cookies are text files
            placed on your computer to collect standard internet log information
            and visitor behavior information to remember information about your
            visit, hence facilitating your next visit and making it more
            user-friendly. By continuing to browse you agree to the storing of
            cookies on your device to enhance your site experience and for
            analytical purposes.
          </p>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            How do we use cookies?
          </h2>
          <p className={`${albertFontNormal.className} mb-6`}>
            The Ministry of Tourism uses cookies in a range of ways to improve
            your experience on our website, including keeping you signed in and
            understanding how you use our website by collecting data and
            information when you interact with our website. Cookies collect
            information that has been provided when you log into our website,
            register as a new user, or submit a form through our website. Data
            and information that are collected through cookies mostly include
            your personal information (e.g., as your name, address, email, phone
            number, etc), website visit details including your URL, website
            clicks details, page response time, visit duration per web page, ,
            IP address, browser type and add-ons, time zone or any other
            information you provide us with when visiting the website. The
            Ministry of Tourism works closely with other partners and external
            entities. Therefore, the Ministry of Tourism may receive your
            information when you visit other websites or use other services
            provided by the Ministry.
          </p>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            What types of cookies do we use?
          </h2>
          <ul className={`${albertFontNormal.className} mb-6`}>
            There are a number of different types of cookies, however, this
            website may use the following:{" "}
            <li>
              • Performance & Analytics Cookies —  The Ministry uses these
              cookies to enable us to know visitors’ identities, number, and
              behavior on the Website. They also help us to improve the way the
              Website works, as MT is keen on ensuring that users can easily
              find what they are looking for
            </li>{" "}
            <li>
              • Functionality Cookies — The Ministry uses these cookies identify
              you on our website and remember your previously selected
              preferences (e.g., preferred language, and region), customize the
              right web content for you and send you special greetings
            </li>{" "}
            <li>
              • Advertising/Tracking Cookies — The Ministry uses these cookies
              to collect information about your visit to our website, the
              content you viewed, the links you followed and information about
              your browser, device, and your IP address. The Ministry may share
              some limited aspects of this data with third parties for several
              purposes and we may also share online data collected through
              cookies with our partners. This means that when you visit another
              website, you may be shown advertising based on your browsing
              patterns on our website.
            </li>
          </ul>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            Changes to our privacy policy
          </h2>
          <p className={`${albertFontNormal.className} mb-6`}>
            The Ministry of Tourism keeps its privacy policy under regular
            review and places any updates on this web page. This privacy policy
            was last updated on: 01/03/2024.
          </p>
          <h2 className={`${albertFont.className} text-2xl font-bold mb-4`}>
            Our contact details
          </h2>
          <ul className={`${albertFontNormal.className} mb-6`}>
            If you have any questions about the Ministry’s privacy policy, the
            data we hold on you, or you would like to exercise one of your data
            protection rights, please do not hesitate to contact us.{" "}
            <li>• Email us at: Info@mt.gov.sa</li>{" "}
            <li>• Email our Data Privacy Officer at: Dataprivacy@mt.gov.sa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
