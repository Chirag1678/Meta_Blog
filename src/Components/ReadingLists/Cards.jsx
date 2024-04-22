import React from 'react'
import Card from './Card'
import reading_1 from "../../Assets/Images/reading_1.png"
import reading_2 from "../../Assets/Images/reading_2.png"
import reading_3 from "../../Assets/Images/reading_3.png"
import reading_4 from "../../Assets/Images/reading_4.png"
import reading_5 from "../../Assets/Images/reading_5.png"
import reading_6 from "../../Assets/Images/reading_6.png"
import reading_7 from "../../Assets/Images/reading_7.png"
import reading_8 from "../../Assets/Images/reading_8.png"

function Cards() {
    const data=[
        {
            src:reading_1,
            title:"UI design",
            desc:"Every website is a user interface. Learn to build yours right."
        },
        {
            src:reading_2,
            title:"UX design",
            desc:"Step-by-step instructions to make your very own agency site in 3layers."
        },
        {
            src:reading_3,
            title:"SEO",
            desc:"Everything you need to know to make sure your site rank high in search."
        },
        {
            src:reading_4,
            title:"Popular",
            desc:"Check out the most-read and most-shared posts from the 3layers blog."
        },
        {
            src:reading_5,
            title:"Essentials",
            desc:"Whether you're new to web design or 3layers, start here."
        },
        {
            src:reading_6,
            title:"Freelance",
            desc:"From tools to tips, everything you need to start — or grow — your freelance design career."
        },
        {
            src:reading_7,
            title:"Typography",
            desc:"The web is 99% typography. Make sure you're setting your type right."
        },
        {
            src:reading_8,
            title:"How not to",
            desc:"Like a serving of snark with your web design advice? Then you're going to love these."
        }
    ]
  return (
    <div className='flex flex-wrap font-open gap-y-10 g justify-between'>
        {data.map((item,index)=>(
        <Card data={item} key={index} redirect={item.title}/>
        ))}
    </div>
  )
}

export default Cards
