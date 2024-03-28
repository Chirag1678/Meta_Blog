import React from 'react'
import example1 from '../Assets/Images/example.png';
import example2 from '../Assets/Images/example_2.png';

function Example() {
    const Suggest=()=>{
        return Object.keys(data).map((item,index)=>{
            return (<div className='w-1/2' key={index}>
            <div className='img w-full rounded-xl overflow-hidden'>
                <img src={data[item].src} alt="suggest_1" />
            </div>
            <div className='text w-full py-5'>
                <h6 className='uppercase'>
                    <span className='text-[#9b9b9b] pr-3'>by</span>
                    {data[item].name}
                    <span className='text-[#9b9b9b] px-3'>in</span>
                    {data[item].type}
                </h6>
                <h1 className='capitalize font-semibold text-[28px] leading-tight py-5'>{data[item].heading}</h1>
                <p className='text-[#9b9b9b]'>{data[item].desc}</p>
            </div>
        </div>
        )})
    }
    const data={
        first:{
            src: example1,
            name: "tomas laurinavicius",
            type: "resource",
            heading: "website downtime: applicable tips on how to prevent it",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted."
        },
        second:{
            src: example2,
            name: "tomas laurinavicius",
            type: "announcements",
            heading: "how to fix error 404 not found on your wordPress site",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted."
        }
    }
  return (
    <div className='px-40 py-10 pb-28 flex justify-between items-center gap-10 w-full font-open'>
        {/* <div className='w-1/2'>
            <div className='img w-full rounded-xl overflow-hidden'>
                <img src={example1} alt="suggest_1" />
            </div>
            <div className='text w-full py-5'>
                <h6 className='uppercase'>
                    <span className='text-[#9b9b9b] pr-3'>by</span>
                    tomas laurinavicius
                    <span className='text-[#9b9b9b] px-3'>in</span>
                    resource
                </h6>
                <h1 className='capitalize font-semibold text-[28px] leading-tight py-5'>website downtime: applicable tips on how to prevent it</h1>
                <p className='text-[#9b9b9b]'>User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted.</p>
            </div>
        </div>
        <div className='w-1/2'>
            <div className='img w-full rounded-xl overflow-hidden'>
                <img src={example1} alt="suggest_1" />
            </div>
            <div className='text w-full py-5'>
                <h6 className='uppercase'>
                    <span className='text-[#9b9b9b] pr-3'>by</span>
                    tomas laurinavicius
                    <span className='text-[#9b9b9b] px-3'>in</span>
                    resource
                </h6>
                <h1 className='capitalize font-semibold text-[28px] leading-tight py-5'>website downtime: applicable tips on how to prevent it</h1>
                <p className='text-[#9b9b9b]'>User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted.</p>
            </div>
        </div> */}
        <Suggest/>
    </div>
  )
}

export default Example
