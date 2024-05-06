import React from 'react'
import { useNavigate } from 'react-router-dom';
import Example from '../../Components/Example';
import news_1 from "../../Assets/Images/NewPage/news_1.png";
import news_2 from "../../Assets/Images/NewPage/news_2.png";
import news_3 from "../../Assets/Images/NewPage/news_3.png";
import news_4 from "../../Assets/Images/NewPage/news_4.png";
import news_5 from "../../Assets/Images/NewPage/news_5.png";
import news_6 from "../../Assets/Images/NewPage/news_6.png";
import news_7 from "../../Assets/Images/NewPage/news_7.png";
import news_8 from "../../Assets/Images/NewPage/news_8.png";
import news_9 from "../../Assets/Images/NewPage/news_9.png";
import news_10 from "../../Assets/Images/NewPage/news_10.png";
import news_11 from "../../Assets/Images/NewPage/news_11.png";
import news_12 from "../../Assets/Images/NewPage/news_12.png";
import news_13 from "../../Assets/Images/NewPage/news_13.png";
import news_14 from "../../Assets/Images/NewPage/news_14.png";

function Bottom() {
    const navigate=useNavigate();
    const news=[
        {
            src:news_1,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "how to reinstall wordPress: 5 different methods depending on your needs",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_2,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "web page layout 101: website anatomy every designer needs to learn",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_4,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "website downtime: applicable tips on how to prevent it",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_3,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "6 ways to leverage facebook for marketing success",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_5,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "updating wooCommerce: a safe and in-depth guide",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_6,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "WP-CLI v2 - managing wordPress from the terminal",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_7,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "social media image sizes and quick tips for wordPress users",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_8,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "how to create outstanding long-form articles in wordPress",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_9,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "how to use fiverr to reduce business busywork",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_10,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "email marketing best practices for sending better emails",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_11,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "google site verification: 7 ways to verify with search console",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_12,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "twitter marketing strategies to beef up your social game",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_13,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "the ultimate step-by-step guide on website usability testing",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
        {
            src:news_14,
            width:"49",
            name: "tomas laurinavicius",
            type: "Design Process",
            heading: "8 ways to leverage linkedln for marketing success",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted." 
        },
    ]
  return (
    <div className='w-full px-40 bg-[#f9f9fb] py-10'>
      <p className="text-[#c8c8c8]">
            <span onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </span>
            <span className="text-[#9b9b9b]"> - New
            </span>
        </p>
        <div className='flex items-center justify-between flex-wrap mt-5 gap-y-12'>
            {news.map((item,index)=>(
                <Example data={item} index={index}/>
            ))}
        </div>
        <div className='w-full py-10 my-10 flex justify-center items-center'>
            <button className='text-[#ff5480] border-[#ff5480] border rounded-full px-6 py-2'>Load More</button>
        </div>
        </div>
  )
}

export default Bottom
