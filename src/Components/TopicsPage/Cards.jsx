import React from 'react'
import Card from './Card'
import Inspiration from "../../Assets/Images/TopicsPage/Inspiration.svg";
import Resource from "../../Assets/Images/TopicsPage/Resource.svg";
import Announcements from "../../Assets/Images/TopicsPage/Announcements.svg";
import Enterpreneurship from "../../Assets/Images/TopicsPage/Enterpreneurship.svg";
import Tutorials from "../../Assets/Images/TopicsPage/Tutorials.svg";
import Freelancing from "../../Assets/Images/TopicsPage/Freelancing.svg";
import Design from "../../Assets/Images/TopicsPage/Design.svg";
import Web from "../../Assets/Images/TopicsPage/Web.svg";

function Cards() {
    const data=[
        {
            src:Inspiration,
            title:"Inspiration",
            desc:"Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops."
        },
        {
            src:Resource,
            title:"Resource",
            desc:"All the free tools and resources you need to build better websites, manage your time, be more creative, and freelance like a boss."
        },
        {
            src:Announcements,
            title:"Announcements",
            desc:"Get the lowdown on the latest new features of 3layers, from flexbox to responsive images, Client Billing to Google Domains."
        },
        {
            src:Enterpreneurship,
            title:"Enterpreneurship",
            desc:"Get tips and insights on building your own business with a little help from 3layers."
        },
        {
            src:Tutorials,
            title:"Tutorials",
            desc:"Get step-by-step guides to building common layouts and interactions, including how to build natural-language forms, modals, ebooks, banner ads, and much more."
        },
        {
            src:Freelancing,
            title:"Freelancing",
            desc:"Get tips, insights, and advice on becoming a freelance web designer, including how to find clients, design your freelancing rates, and managing projects."
        },
        {
            src:Design,
            title:"Design process",
            desc:"Learn to better manage your design process, from wireframing and prototyping to gathering and handling feedback — plus tools that help."
        },
        {
            src:Web,
            title:"Web design",
            desc:"Get detailed tips and insights on common design patterns and best practices, SEO, landing page design, and so much more."
        }
    ]
  return (
    <div className='flex justify-between items-center flex-wrap gap-y-[1.5vw]'>
        {data.map((item,index)=>(
            <Card data={item} key={index}/>
        ))}
    </div>
  )
}

export default Cards
