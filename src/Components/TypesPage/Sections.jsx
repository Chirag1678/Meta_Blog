import React from "react";
import upper_1 from "../../Assets/Images/TypesPage/upper_1.png";
import middle_1 from "../../Assets/Images/TypesPage/middle_1.png";
import bottom_1 from "../../Assets/Images/TypesPage/bottom_1.png";

function Section({ src, name, type, heading }) {
    return (
      <div className={`w-[57%] flex-shrink-0 `}>
        <div className="img w-full rounded-xl overflow-hidden">
          <img src={src} alt="suggest_1" />
        </div>
        <div className="text py-5">
          <h6 className="uppercase">
            <span className="text-[#9b9b9b] pr-3">by</span>
            {name}
            <span className="text-[#9b9b9b] px-3">in</span>
            {type}
          </h6>
          <h1 className="capitalize whitespace-normal font-semibold text-[28px] leading-tight py-5">
            {heading}
          </h1>
        </div>
      </div>
      );
}  
function Sections() {
//   const Suggest = () => {
//     return Object.keys(data).map((item, index) => {
//       return (
//         <div className="w-[57%] flex-shrink-0" key={index}>
//           <div className="img w-full rounded-xl overflow-hidden">
//             <img src={data[item].src} alt="suggest_1" />
//           </div>
//           <div className="text py-5">
//             <h6 className="uppercase">
//               <span className="text-[#9b9b9b] pr-3">by</span>
//               {data[item].name}
//               <span className="text-[#9b9b9b] px-3">in</span>
//               {data[item].type}
//             </h6>
//             <h1 className="capitalize font-semibold text-[28px] leading-tight py-5">
//               {data[item].heading}
//             </h1>
//           </div>
//         </div>
//       );
//     });
//   };
  const data = [
    {
      src: upper_1,
      name: "tomas laurinavicius",
      type: "resource",
      heading: "website downtime: applicable tips on how to prevent it",
      desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted.",
    },
    {
      src: middle_1,
      name: "tomas laurinavicius",
      type: "announcements",
      heading: "how to fix error 404 not found on your wordPress site",
      desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted.",
    },
    {
      src: bottom_1,
      name: "tomas laurinavicius",
      type: "announcements",
      heading: "how to fix error 404 not found on your wordPress site",
      desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted.",
    },
];
  return (
    <>
      {/* <div className="w-full mt-10 flex gap-2 whitespace-nowrap overflow-x-scroll">
        <Suggest />
      </div>
      <div className="w-full mt-10 flex gap-2 whitespace-nowrap overflow-x-scroll">
        <Suggest />
      </div>
      <div className="w-full mt-10 flex gap-2 whitespace-nowrap overflow-x-scroll">
        <Suggest />
      </div> */}
       {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className={`w-full mt-10 flex gap-2 whitespace-nowrap overflow-x-scroll snap-x`}
        >
          {data.map((item, i) => (
            <Section key={i} {...item}/>
          ))}
        </div>
      ))}
    </>
  );
}

export default Sections;
