import React from "react";
import { useNavigate } from "react-router-dom";
import Default from "../../Assets/Images/ProfilePage/default.png";
import Icons from "../Icons";
import image_1 from "../../Assets/Images/NewPage/news_9.png";
import image_2 from "../../Assets/Images/NewPage/news_1.png";
import image_3 from "../../Assets/Images/NewPage/news_3.png";
import Card from "./Card";

function ProfileSection() {
  const navigate = useNavigate();
  const data = [
    {
      src: image_1,
      name: "tomas laurinavicius",
      type: "Resource",
      heading:"how to migrate from wix to wordPress (complete Guide)"
    },
    {
        src: image_2,
        name: "tomas laurinavicius",
        type: "Resource",
        heading:"preparing your wordpress site for the google mobile-first index"
    },
    {
        src: image_3,
        name: "tomas laurinavicius",
        type: "Resource",
        heading:"how to use yoast SEO on wordPress: complete tutorial"
      },
  ];
  return (
    <div className="w-[65%] font-open">
      <div className="upper">
        <p className="text-[#c8c8c8] pt-10 pb-5">
          <span onClick={() => navigate("/")} className="cursor-pointer">
            Home
          </span>
          <span className="text-[#9b9b9b]"> - Profile</span>
        </p>
        <div className="flex items-center justify-center bg-white py-10 rounded-xl shadow-md shadow-gray-300 flex-col gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full">
              <img
                src={Default}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="text-center w-[70%]">
              <h1 className="uppercase font-semibold text-xl">
                Tomas laurinavicius
              </h1>
              <p className="pt-1 text-[#4a4a4a]">
                Hi, my name is Daniel, I'm the CTO here at Kinsta.
              </p>
            </div>
          </div>
          <div>
            <Icons background="black" text="white" size="1.2em" />
          </div>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-[4a4a4a] text-2xl capitalize">
          Posts by tomas laurinavicius
        </h1>
        <div className="w-full my-5">
          {data.map((data,index)=>(
            <Card data={data} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
