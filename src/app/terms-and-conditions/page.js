import React from "react";
import Image from "next/image";

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
            className={`text-4xl font-bold text-white`}
            style={{ fontFamily: "AlbertFont" }}
          >
            Terms and Conditions
          </h1>
          <p
            className={`text-sm text-gray-400`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            Last updated June 26
          </p>
        </div>
        <div className={`text-white`}>
          <h2
            className={`text-2xl font-bold mb-4`}
            style={{ fontFamily: "AlbertFont" }}
          >
            Copyright and Intellectual Property:
          </h2>
          <p className={`mb-6`} style={{ fontFamily: "AlbertFontNormal" }}>
            All content, including - but not limited to - data, information,
            designs, graphics, images, programs, files, etc. - is owned by the
            Ministry of Tourism or approved by its owner to be included on this
            site under the intellectual property regulations.- It is not
            permissible to copy or print or download any of the contents of this
            site except and only for the personal use or for the use within the
            company or by the organization's user. Any copies for such a
            purpose, must include all trademarks and logos of the Ministry. -
            It's prohibited to copy or save any part of this site or its
            contents in any other site; or deploying it in any public or private
            portal to extract data without the prior written consent of the
            Ministry, unless otherwise stipulated. - Unless otherwise provided
            for, any trademarks and logos provided on this site are belonging to
            the Ministry. It's not permissible for any user to copy or use these
            trademarks without the prior written consent of the Ministry.
          </p>
          <h2
            className={`text-2xl font-bold mb-4`}
            style={{ fontFamily: "AlbertFont" }}
          >
            Changes and Updates:
          </h2>
          <p className={`mb-6`} style={{ fontFamily: "AlbertFontNormal" }}>
            The Ministry is trying to keep the site available and accessible for
            all users 24/7, but it will not be responsible for its availability
            for any reason and for any period of time. It might suspend the
            access to this site temporarily or permanently without prior
            warning.
          </p>
          <h2
            className={`text-2xl font-bold mb-4`}
            style={{ fontFamily: "AlbertFont" }}
          >
            Availability of Information:{" "}
          </h2>
          <p className={`mb-6`} style={{ fontFamily: "AlbertFontNormal" }}>
            The purpose of providing such information contained in this site is
            to serve as reference only, and it is not to provide legal opinions
            or advices. Therefore, users ought to consult a qualified specialist
            organization if they need such a service.
          </p>
          <h2
            className={`text-2xl font-bold mb-4`}
            style={{ fontFamily: "AlbertFont" }}
          >
            Accuracy and Warranties:
          </h2>
          <p className={`mb-6`} style={{ fontFamily: "AlbertFontNormal" }}>
            The Ministry will do its best efforts to ensure the accuracy and
            correctness of the information presented in this site. But it does
            not guarantee the quality, accuracy and completeness of any such
            information at any time. Given that, the content of this site is
            provided as is without any conditions or guarantees or any other
            provisions of any kind.
          </p>
          <h2
            className={`text-2xl font-bold mb-4`}
            style={{ fontFamily: "AlbertFont" }}
          >
            Damage and Misuse:
          </h2>
          <p className={`mb-6`} style={{ fontFamily: "AlbertFontNormal" }}>
            The user is prohibited from misusing this site and causing damage to
            the information network through illegal or unauthorized access
            without a valid legal authorization.The penalties stipulated in the
            laws of the Kingdom of Saudi Arabia will be imposed on users who
            cause damage or misuse.
          </p>
          <h2
            className={`text-2xl font-bold mb-4`}
            style={{ fontFamily: "AlbertFont" }}
          >
            Linking to other Sites:
          </h2>
          <p className={`mb-6`} style={{ fontFamily: "AlbertFontNormal" }}>
            Links to other sites are provided for the purpose of user’s
            convenience, and no services or products offered or referred to on
            those sites are considered the responsibility of the Ministry, nor
            it is liable for the contents of any site referred to as it is
            subject to its own privacy policies.
          </p>
          <h2
            className={`text-2xl font-bold mb-4`}
            style={{ fontFamily: "AlbertFont" }}
          >
            Disclaimer:
          </h2>
          <p className={`mb-6`} style={{ fontFamily: "AlbertFontNormal" }}>
            The Ministry will not be liable for any losses or damages arising
            from any use of this website or its content (including losses and
            damages resulting from negligence).
          </p>
          <h2
            className={`text-2xl font-bold mb-4`}
            style={{ fontFamily: "AlbertFont" }}
          >
            Your Feedback:
          </h2>
          <p className={`mb-6`} style={{ fontFamily: "AlbertFontNormal" }}>
            The Ministry strives to make this website a useful source of
            information on tourism in the Kingdom of Saudi Arabia. We welcome
            any suggestions and feedback via https://mt.gov.sa/contact-us
          </p>
          <h2
            className={`text-2xl font-bold mb-4`}
            style={{ fontFamily: "AlbertFont" }}
          >
            For more information:
          </h2>
          <p className={`mb-6`} style={{ fontFamily: "AlbertFontNormal" }}>
            Please contact us through the means of communication approved on the
            site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
