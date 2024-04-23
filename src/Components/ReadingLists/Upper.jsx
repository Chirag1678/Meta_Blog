import React from 'react'

function Upper(props) {
    const {data}=props;
  return (
    <div className="px-40 py-10 font-open w-[69%]">
        <h1 className="font-bold text-4xl">{data.title}</h1>
        <p className="font-semibold text-lg mt-8">{data.desc}</p>
      </div>
  )
}

export default Upper
