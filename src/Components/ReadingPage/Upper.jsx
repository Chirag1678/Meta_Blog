import React from 'react'
import reading1 from '../../Assets/Images/reading_1.png';
import reading2 from '../../Assets/Images/reading_2.png';
import reading3 from '../../Assets/Images/reading_3.png';
import reading4 from '../../Assets/Images/reading_4.png';
import reading5 from '../../Assets/Images/reading_5.png';
import reading6 from '../../Assets/Images/reading_6.png';
import reading7 from '../../Assets/Images/reading_7.png';
import reading8 from '../../Assets/Images/reading_8.png';

function Upper(props) {
    const {type}=props;
    const data={
        UI:reading1,
        UX:reading2,
        SEO:reading3,
        Popular:reading4,
        Essentials:reading5,
        Freelance:reading6,
        Typography:reading7,
        How:reading8
      }
      // const imageUrl = data[type.split(" ")[0]];
      const imageUrl = data[type];

  return (
    <div className='mb-20 px-40 pt-10'>
      <h1 className="font-bold text-4xl capitalize">Reading lists</h1>
      <div className="w-[60%] mt-10 flex items-center gap-10">
      <div className='rounded-lg overflow-hidden w-[13.5vw] aspect-[3/3.8] flex justify-center'>
        <img src={imageUrl} alt={type}/>
      </div>
      <div>
        <h1 className="text-3xl tracking-tighter font-medium capitalize">{type}</h1>
        <p className="mt-10">Check out the most-read and most-shared posts from the 3layers blog.</p>
      </div>
      </div>
    </div>
  )
}

export default Upper
