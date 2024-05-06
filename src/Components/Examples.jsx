import React from 'react'
import Example from './Example'
import example1 from '../Assets/Images/example.png';
import example2 from '../Assets/Images/example_2.png';

function Examples() {
    const data=[
        {
            src: example1,
            width:"49",
            name: "tomas laurinavicius",
            type: "resource",
            heading: "website downtime: applicable tips on how to prevent it",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted."
        },
        {
            src: example2,
            width:"49",
            name: "tomas laurinavicius",
            type: "announcements",
            heading: "how to fix error 404 not found on your wordPress site",
            desc: "User research is the reality check every project needs. Here's our guide to why you should be doing it - and how to get sarted."
        }
    ]
  return (
    <div className='px-40 py-10 pb-28 flex justify-between items-center gap-10 w-full font-open'>
        {data.map((item,index)=>(
        <Example data={item} index={index}/>
        ))}
    </div>
  )
}

export default Examples
