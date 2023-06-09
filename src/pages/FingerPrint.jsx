import React from "react";
import FederalLogo from "../assets/icons/logo.png";

const FingerPrint = () => {
  return (
    <div className=" w-full min-h-screen bg-indigo-700 text-sm">
      <div className="w-[25cm] bg-white flex flex-col mx-auto px-6 relative z-10">
        <img src={FederalLogo} alt="federal logo" className="w-32 mx-auto" />
        <h2 className="w-1/2 mx-auto text-center font-semibold mb-2">
          በፌደራል ፖሊስ የወንጀል ምርመራ ቢሮ የፎረንሲክ ምርመራ ምክትል ዋና መምሪያ
        </h2>
        <h2 className="w-3/5 mx-auto text-center font-semibold">
          FEDERAL POLICE CRIME INVESTIGATION BUREAU FORENSIC INVESTIGATION MAIN
          DEPARTMENT
        </h2>

        <div className="my-4 space-y-5">
          <div className=" space-y-2">
            <p className="text-center">ሰላማዊ ሰዎች ጣት አሻራ ማንሻ ሰሌዳ</p>
          </div>

          <div className="space-y-5">
            <div className="w-full flex gap-2">
              <div className="flex items-end gap-2 w-1/3">
                <p>ስም</p>
                <span className="border-b border-b-stone-600 w-full text-center">
                  test texts
                </span>
              </div>
              <div className="flex items-end gap-2 w-1/3">
                <p className="w-20">የአባት ስም</p>
                <span className="border-b border-b-stone-600 w-full text-center">
                  test texts
                </span>
              </div>
              <div className="flex items-end gap-2 w-1/3">
                <p className="w-20">የአያት ስም</p>
                <span className="border-b border-b-stone-600 w-full text-center">
                  test texts
                </span>
              </div>
            </div>
            <div className="w-full flex gap-2">
              <div className="flex items-end gap-2 w-1/3">
                <p className="w-80">10 ጣት አሻራ ትንተና ውጤት</p>
                <span className="border-b border-b-stone-600 w-full text-center">
                  test texts
                </span>
              </div>
              <div className="flex items-end gap-2 w-1/3">
                <p className="w-32">ቋ/በ/መ/ቁሠር</p>
                <span className="border-b border-b-stone-600 w-full text-center">
                  test texts
                </span>
              </div>
              <div className="flex items-end gap-4 w-1/3">
                <p className="w-8">ፆታ</p>

                <div className="flex items-center gap-2">
                  <label htmlFor="male">ወንድ</label>
                  <input type="checkbox" />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="male">ሴት</label>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <div className="w-full flex gap-2">
              <div className="flex items-end gap-2 w-1/3">
                <p className="w-48">ትውልድ ዘመንና ቦታ</p>
                <span className="border-b border-b-stone-600 w-full text-center">
                  test texts
                </span>
              </div>
              <div className="flex items-end gap-2 w-1/3">
                <p className="w-32">ፓስፖርት ቁጥር</p>
                <span className="border-b border-b-stone-600 w-full text-center">
                  test texts
                </span>
              </div>
              <div className="flex items-end gap-2 w-1/3">
                <p className="w-14">አድራሻ</p>
                <span className="border-b border-b-stone-600 w-full text-center">
                  test texts
                </span>
              </div>
            </div>
            <div className="w-full flex gap-2">
              <div className="flex items-end gap-2 w-full">
                <p className="w-48">የጣት አሻራ የሰጠበት ምክንያት</p>
                <span className="border-b border-b-stone-600 w-full text-center">
                  test texts
                </span>
              </div>
            </div>
            <div className=" space-y-2">
              <p className="text-center">የቀኝ እጅ</p>
              <table className="w-full border border-N40">
                <thead className="border-2">
                  <tr>
                    <th>የቀኝ አውራ ጣት</th>
                    <th>የቀኝ አመልካች ጣት</th>
                    <th>የቀኝ መካከለኛ ጣት</th>
                    <th>የቀኝ ቀለበት ጣት</th>
                    <th>የቀኝ ትንሽ ጣት</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Fingerprint_picture.svg/530px-Fingerprint_picture.svg.png"
                        alt="right thumb"
                        className="w-20 mx-auto p-4"
                      />
                    </td>
                    <td className="border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fingerprintforcriminologystubs2.png/150px-Fingerprintforcriminologystubs2.png"
                        alt="right thumb"
                        className="w-20 mx-auto p-4"
                      />
                    </td>
                    <td className="border">
                      <img
                        src="https://www.washk12.org/images/logos/fingerprint.png"
                        alt="right thumb"
                        className="w-24 mx-auto p-4"
                      />
                    </td>
                    <td className="border">
                      <img
                        src="https://www.appstate.edu/~coyteea/touch/Images/landingprint.png"
                        alt="right thumb"
                        className="w-24 mx-auto p-4 rotate-12"
                      />
                    </td>
                    <td className="border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fingerprintforcriminologystubs2.png/150px-Fingerprintforcriminologystubs2.png"
                        alt="right thumb"
                        className="w-20 mx-auto p-4"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-2">
              <p className="text-center">የግራ እጅ</p>
              <table className="w-full border border-N40">
                <thead className="border-2">
                  <tr>
                    <th>የግራ አውራ ጣት</th>
                    <th>የግራ አመልካች ጣት</th>
                    <th>የግራ መካከለኛ ጣት</th>
                    <th>የግራ ቀለበት ጣት</th>
                    <th>የግራ ትንሽ ጣት</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Fingerprint_picture.svg/530px-Fingerprint_picture.svg.png"
                        alt="right thumb"
                        className="w-20 mx-auto p-4"
                      />
                    </td>
                    <td className="border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fingerprintforcriminologystubs2.png/150px-Fingerprintforcriminologystubs2.png"
                        alt="right thumb"
                        className="w-20 mx-auto p-4"
                      />
                    </td>
                    <td className="border">
                      <img
                        src="https://www.washk12.org/images/logos/fingerprint.png"
                        alt="right thumb"
                        className="w-24 mx-auto p-4"
                      />
                    </td>
                    <td className="border">
                      <img
                        src="https://www.appstate.edu/~coyteea/touch/Images/landingprint.png"
                        alt="right thumb"
                        className="w-24 mx-auto p-4 rotate-12"
                      />
                    </td>
                    <td className="border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fingerprintforcriminologystubs2.png/150px-Fingerprintforcriminologystubs2.png"
                        alt="right thumb"
                        className="w-20 mx-auto p-4"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <table className="w-full border border-N40">
              <thead className="border-2">
                <tr>
                  <th>የግራ እጅ አራቱ ጣት አሻራ</th>
                  <th>የቀኝ እጅ አራቱ ጣት አሻራ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBkrKwB5Al9nWonuRB3wZ1twjC9-fjjTDbX8F9IsZ1lfWP8CduVTXmTruIS7Nd6qxeWY&usqp=CAU"
                      alt="right thumb"
                      className="w-48 mx-auto p-4"
                    />
                  </td>
                  <td className="border">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWrNy8Z28euDuzAgzoHLBHuZQ__l_j8x1ZKw4yuhrqZXPMPFdBtc92MowT3yHfrI_C6w&usqp=CAU"
                      alt="right thumb"
                      className="w-48 mx-auto p-4"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center gap-4">
              <div className="w-[70%] space-y-6">
                <div className="flex gap-2">
                  <div className="flex flex-col-reverse gap-1 items-center w-1/3">
                    <p>አስፈራሚው</p>
                    <span className="border-b border-b-stone-600 w-full text-center"></span>
                  </div>
                  <div className="flex flex-col-reverse gap-1 items-center w-1/3">
                    <p>ፊርማ</p>
                    <span className="border-b border-b-stone-600 w-full text-center"></span>
                  </div>
                  <div className="flex flex-col-reverse gap-1 items-center w-1/3">
                    <p>ቀንና ዓ/ም</p>
                    <span className="border-b border-b-stone-600 w-full text-center"></span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col-reverse gap-1 items-center w-1/3">
                    <p>የጣት አሻራውን የሰጠው</p>
                    <span className="border-b border-b-stone-600 w-full text-center"></span>
                  </div>
                  <div className="flex flex-col-reverse gap-1 items-center w-1/3">
                    <p>ፊርማ</p>
                    <span className="border-b border-b-stone-600 w-full text-center"></span>
                  </div>
                  <div className="flex flex-col-reverse gap-1 items-center w-1/3">
                    <p>ቀንና ዓ/ም</p>
                    <span className="border-b border-b-stone-600 w-full text-center"></span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col-reverse gap-1 items-center w-1/3">
                    <p>አሻራን ትንተና</p>
                    <span className="border-b border-b-stone-600 w-full text-center"></span>
                  </div>
                  <div className="flex flex-col-reverse gap-1 items-center w-1/3">
                    <p>ፊርማ</p>
                    <span className="border-b border-b-stone-600 w-full text-center"></span>
                  </div>
                  <div className="flex flex-col-reverse gap-1 items-center w-1/3">
                    <p>ቀንና ዓ/ም</p>
                    <span className="border-b border-b-stone-600 w-full text-center"></span>
                  </div>
                </div>
              </div>
              <table className="w-2/5 border border-N40">
                <thead className="border-2">
                  <tr>
                    <th>የግራ እጅ አራቱ ጣት አሻራ</th>
                    <th>የቀኝ እጅ አራቱ ጣት አሻራ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBkrKwB5Al9nWonuRB3wZ1twjC9-fjjTDbX8F9IsZ1lfWP8CduVTXmTruIS7Nd6qxeWY&usqp=CAU"
                        alt="right thumb"
                        className="w-48 mx-auto p-4"
                      />
                    </td>
                    <td className="border">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWrNy8Z28euDuzAgzoHLBHuZQ__l_j8x1ZKw4yuhrqZXPMPFdBtc92MowT3yHfrI_C6w&usqp=CAU"
                        alt="right thumb"
                        className="w-48 mx-auto p-4"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className=" mx-auto text-center mb-2">
              ፎርሙን የሞላውና አሻራውን, ያነሳው አባል ስምና ፊርማ ከሌለበት ፎርሙ ተቀባይነት የለውም
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FingerPrint;
