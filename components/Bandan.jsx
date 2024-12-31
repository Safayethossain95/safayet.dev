import { Fragment } from "react";
const Bandan = () => {
   
    const words = [
        "Performant",
        "Accessible",
        "Secure",
        "Interactive",
        "User Friendly",
        "Responsive",
        "Maintainable",
        "Search Optimized",
        "Usable",
        "Reliable",
      ];
      
     const TapeSection = () => {
        return (
          <div className="">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip">
              <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,Black_90%,transparent)]">
                <div className="flex flex-none gap-4 pr-4 py-3 lg:py-4 animate-move-left [animation-duration:30s]">
                  {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                      {words.map((word) => (
                        <div key={word} className="inline-flex gap-4 items-center">
                          <span className="text-gray-900 uppercase font-extrabold text-sm lg:text-base">
                            {word}
                          </span>
                          <div className="text-gray-900">

                          <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor"/>
                            </svg>
                          </div>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      };
  return (
    <>
      <div className="pb-20 ">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip">
         <TapeSection/>
        </div>
      </div>
    </>
  );
};

export default Bandan;
