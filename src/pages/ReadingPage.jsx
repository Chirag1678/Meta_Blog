import React from "react";
import { useParams } from "react-router-dom";
import reading1 from '../Assets/Images/reading_1.png';
import reading2 from '../Assets/Images/reading_2.png';
import reading3 from '../Assets/Images/reading_3.png';
import reading4 from '../Assets/Images/reading_4.png';
import reading5 from '../Assets/Images/reading_5.png';
import Upper from "../Components/ReadingPage/Upper";
import Bottom from "../Components/ReadingPage/Bottom";

function ReadingPage() {
  const { type } = useParams();
  const data={
    UI:reading1,
    UX:reading2,
    SEO:reading3,
    Popular:reading4,
    Essentials:reading5
  }
  const imageUrl = data[type.split(" ")[0]];
  return (
    <div className="pt-24">
      {/* <h1 className="font-bold text-4xl capitalize">Reading lists</h1>
      <div className="w-[60%] mt-10 flex items-center gap-10">
      <div className='rounded-lg overflow-hidden w-[13.5vw] aspect-[3/3.8] flex justify-center bg-green-400'>
        <img src={imageUrl} alt={type.split(" ")[0]}/>
      </div>
      <div>
        <h1 className="text-3xl tracking-tighter font-medium">{type}</h1>
        <p className="mt-10">Check out the most-read and most-shared posts from the 3layers blog.</p>
      </div>
      </div> */}
      <Upper type={type}/>
      <Bottom type={type}/>
    </div>
  );
}

export default ReadingPage;
