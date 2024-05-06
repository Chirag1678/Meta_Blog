import React from 'react';

function Example(props) {
    // const Suggest=()=>{
    //     return Object.keys(data).map((item,index)=>{
    //         return (<div className='w-1/2' key={index}>
    //         <div className='img w-full rounded-xl overflow-hidden'>
    //             <img src={data[item].src} alt="suggest_1" />
    //         </div>
    //         <div className='text w-full py-5'>
    //             <h6 className='uppercase'>
    //                 <span className='text-[#9b9b9b] pr-3'>by</span>
    //                 {data[item].name}
    //                 <span className='text-[#9b9b9b] px-3'>in</span>
    //                 {data[item].type}
    //             </h6>
    //             <h1 className='capitalize font-semibold text-[28px] leading-tight py-5'>{data[item].heading}</h1>
    //             <p className='text-[#9b9b9b]'>{data[item].desc}</p>
    //         </div>
    //     </div>
    //     )})
    // }
    const{data,index}=props;
  return (
    // <div className='px-40 py-10 pb-28 flex justify-between items-center gap-10 w-full font-open'>
    //     <Suggest/>
    // </div>
    <div className={`w-[${data.width}%]`} key={index}>
            <div className='img w-full rounded-xl overflow-hidden'>
                <img src={data.src} alt="suggest_1"/>
            </div>
            <div className='text w-full py-5'>
                <h6 className='uppercase'>
                    <span className='text-[#9b9b9b] pr-3'>by</span>
                    {data.name}
                    <span className='text-[#9b9b9b] px-3'>in</span>
                    {data.type}
                </h6>
                <h1 className='capitalize font-semibold text-[28px] leading-tight py-5'>{data.heading}</h1>
                <p className='text-[#9b9b9b]'>{data.desc}</p>
            </div>
        </div>
  )
}

export default Example
