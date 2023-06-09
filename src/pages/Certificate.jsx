import React from "react";
import FederalLogo from "../assets/icons/logo.png";
const Certificate = () => {
  return (
    <div className=" w-full min-h-screen bg-indigo-700 text-sm">
      <div className="w-[25cm] bg-white flex flex-col gap-2 mx-auto px-6 relative z-10">
        <img src={FederalLogo} alt="federal logo" className="w-32 mx-auto" />
        <img
          src={FederalLogo}
          alt="federal logo"
          className="w-3/5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5 mx-auto"
        />
        <div className="flex items-end flex-col gap-1 text-xs">
          <div className="flex items-end gap-4">
            <div>
              <p>ቁጥር </p>
              <p>Ref</p>
            </div>
            <span className="border-b border-b-stone-600 w-44 text-center">
              test texty
            </span>
          </div>
          <div className="flex items-end gap-4">
            <div>
              <p>ቀን</p>
              <p>Date</p>
            </div>
            <span className="border-b border-b-stone-600 w-44 text-center">
              test text
            </span>
          </div>
        </div>
        <h2 className="w-1/2 mx-auto text-center text-lg font-semibold">
          በፌደራል ፖሊስ የወንጀል ምርመራ ቢሮ የፎረንሲክ ምርመራ ዳይሬክቶሬት
        </h2>
        <h2 className="w-3/5 mx-auto text-center font-semibold">
          FEDERAL POLICE CRIME INVESTIGATION BUREAU FORENSIC EXAMINATION
          DIRECTORATE
        </h2>
        <div>
          <h3 className="text-center text-xs">ከወንጀል ነፃ የምስክር ወረቀት</h3>
          <h3 className="text-center text-xs">CERTIFICATE OF GOOD CONDUCT</h3>
        </div>
        <div className="w-11/12 mx-auto my-4 space-y-5">
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-1/3">
              <div>
                <p className="w-max">ስም</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/3">
              <div>
                <p className="w-max">የአባት ስም</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/3">
              <div>
                <p className="w-max">የአያት ስም</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>
          <div className="flex items-end gap-2 w-full">
            <div>
              <p className="w-max font-semibold capitalize">Full Name</p>
            </div>
            <span className="border-b border-b-stone-600 w-full text-center">
              test text
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">የትውልድ ዘመን</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">የትውልድ ስፍራ</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">Date of birth</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">place of birth</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">ዜግነት</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">ፆታ</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">nationality</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">sex</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-1/3">
              <div>
                <p className="w-max font-semibold capitalize">የፓስፖርት ቁጥር</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/3">
              <div>
                <p className="w-max font-semibold capitalize">የተሰጠበት ቀን</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/3">
              <div>
                <p className="w-max font-semibold">ቦታ</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-1/3">
              <div>
                <p className="w-max font-semibold capitalize">
                  passport number
                </p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/3">
              <div>
                <p className="w-max font-semibold capitalize">issued on</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/3">
              <div>
                <p className="w-max font-semibold">By Imm. & Nati.AFF</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-full">
              <div>
                <p className="w-max capitalize font-semibold">
                  የምስክር ወረቀቱን የጠየቀው መ/ቤት (ሰው)
                </p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-full">
              <div>
                <p className="w-max capitalize font-semibold">
                  CLEARANCE REQUESTED BY:
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">
                  A/NAME OF ORGANIZATION
                </p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                jordan
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">B/ SELF</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">የደብዳቤ ቁጥር</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                jordan
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">ቀን</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max uppercase font-semibold">REFEREnce</p>
              </div> 
              <span className="border-b border-b-stone-600 w-full text-center">
                jordan
              </span>
            </div>
            <div className="flex items-end gap-2 w-1/2">
              <div>
                <p className="w-max capitalize font-semibold">ቀን</p>
              </div>
              <span className="border-b border-b-stone-600 w-full text-center">
                test text
              </span>
            </div>
          </div>
          <div className=" space-y-2">
            <p className="text-center">
              ከዚህ በላይ ስማቸው የተገለፀው ሰው ይህ የምስክር ወረቀት እሰከተሰጠበት ቀን ድረስ ምንም የተመዘገቡበት
              ወንጀል አለመኖሩን እንገልፃለን፡፡
            </p>
            <p className="text-center">
              THIS IS TO CERTIFY THAT THE ABOVE NAMED PERSON HAS NOT BEEN
              CONVICTED OF ANY CRIME OR MISDEMEANOR UNTIL THE DATE I SIGNED THIS
              CERTIFICATE.
            </p>
          </div>
          <div className="flex items-center justify-between w-full">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="owner"
              className="w-40 h-40 object-cover rounded-sm"
            />
            {/* qr code  */}
            {/* <div className="flex items-end justify-center">
          <QRCode
            size={120}
            value={`https://app.lmis.gov.et/verify-agency-license/${application?.licence_number}`}
          />
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
