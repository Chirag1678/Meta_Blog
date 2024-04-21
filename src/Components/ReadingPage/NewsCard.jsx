import React from 'react'
// import reading_1 from "../../Assets/Images/ReadingPage/reading_1.png"
// import reading_2 from "../../Assets/Images/ReadingPage/reading_2.png"
// import reading_3 from "../../Assets/Images/ReadingPage/reading_3.png"
// import reading_4 from "../../Assets/Images/ReadingPage/reading_4.png"
// import reading_5 from "../../Assets/Images/ReadingPage/reading_5.png"
// import reading_6 from "../../Assets/Images/ReadingPage/reading_6.png"
// import reading_7 from "../../Assets/Images/ReadingPage/reading_7.png"
// import reading_8 from "../../Assets/Images/ReadingPage/reading_8.png"

function NewsCard(props) {
    // const data=[
    //     {
    //         title:"5 Things More Important for Your Content Than Content-Length in 2018",
    //         desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
    //         src:reading_1
    //     },
    //     {
    //         title:"WordPress Website Cost - The Real Truth Behind Building a Site",
    //         desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
    //         src:reading_2
    //     },
    //     {
    //         title:"How to Fix a 500 Internal Server Error on Your WordPress Site",
    //         desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
    //         src:reading_3
    //     },
    //     {
    //         title:"Dedicated IP Address vs Shared IP Address (Debunking Myths)",
    //         desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
    //         src:reading_4
    //     },
    //     {
    //         title:"Web page layout 101: website anatomy every designer needs to learn",
    //         desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
    //         src:reading_5
    //     },
    //     {
    //         title:"16 Lessons Learned Bootstrapping Kinsta From $0 to 7-Figures in Revenue",
    //         desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
    //         src:reading_6
    //     },
    //     {
    //         title:"How to Start Your Food Blog - Complete Guide to Kickstart and Promote It",
    //         desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
    //         src:reading_7
    //     },
    //     {
    //         title:"How to Reinstall WordPress: 5 Different Methods Depending On Your Needs",
    //         desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
    //         src:reading_8
    //     },
    // ]
    const {data,index}=props;
  return (
    <div className='w-full bg-white rounded-xl overflow-hidden flex justify-between items-center mb-8 shadow-md shadow-gray-300'>
      <div className='w-1/2 p-8 font-open'>
        <h3 className=' text-2xl'>0{index+1}</h3>
        <h1 className='font-semibold text-[1.75rem] pt-2'>{data.title}</h1>
        <p className='text-[#9b9b9b] pt-7'>{data.desc}</p>
      </div>
      <div className='w-1/2'>
        <img src={data.src} alt="reading_1" />
      </div>
    </div>
  )
}

export default NewsCard
