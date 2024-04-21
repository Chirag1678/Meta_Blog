import React from 'react'
import NewsCard from './NewsCard'
import reading_1 from "../../Assets/Images/ReadingPage/reading_1.png"
import reading_2 from "../../Assets/Images/ReadingPage/reading_2.png"
import reading_3 from "../../Assets/Images/ReadingPage/reading_3.png"
import reading_4 from "../../Assets/Images/ReadingPage/reading_4.png"
import reading_5 from "../../Assets/Images/ReadingPage/reading_5.png"
import reading_6 from "../../Assets/Images/ReadingPage/reading_6.png"
import reading_7 from "../../Assets/Images/ReadingPage/reading_7.png"
import reading_8 from "../../Assets/Images/ReadingPage/reading_8.png"

function News() {
    const data=[
        {
            title:"5 Things More Important for Your Content Than Content-Length in 2018",
            desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
            src:reading_1
        },
        {
            title:"WordPress Website Cost - The Real Truth Behind Building a Site",
            desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
            src:reading_2
        },
        {
            title:"How to Fix a 500 Internal Server Error on Your WordPress Site",
            desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
            src:reading_3
        },
        {
            title:"Dedicated IP Address vs Shared IP Address (Debunking Myths)",
            desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
            src:reading_4
        },
        {
            title:"Web page layout 101: website anatomy every designer needs to learn",
            desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
            src:reading_5
        },
        {
            title:"16 Lessons Learned Bootstrapping Kinsta From $0 to 7-Figures in Revenue",
            desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
            src:reading_6
        },
        {
            title:"How to Start Your Food Blog - Complete Guide to Kickstart and Promote It",
            desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
            src:reading_7
        },
        {
            title:"How to Reinstall WordPress: 5 Different Methods Depending On Your Needs",
            desc:"User research is the reality check every project needs. Here's our guide to why you should be doing it — and how to get started.",
            src:reading_8
        },
    ]
  return (
    <div className='w-full mt-5'>
        {data.map((item,index)=>(
        <NewsCard data={item} index={index} key={index}/>
        ))}
    </div>
  )
}

export default News
