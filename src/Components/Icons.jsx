import React from "react";
import {
  FaLinkedinIn,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa6";

function Icons(props) {
  const Logo = [
    {
      element:<FaLinkedinIn size={props.size} color={props.text} />,
      link:"https://google.com/"
    },
    {
      element:<FaPinterestP size={props.size} color={props.text} />,
      link:"https://google.com/"
    },
    {
      element:<FaInstagram size={props.size} color={props.text} />,
      link:"https://google.com/"
    },
    {
      element:<FaTwitter size={props.size} color={props.text} />,
      link:"https://google.com/"
    },
    {
      element:<FaFacebookF size={props.size} color={props.text} />,
      link:"https://google.com/"
    },
  ];
  return (
    <div className="flex items-center gap-3">
      {Logo.map((item, index) => (
        <a
          href={`${item.link}`}
          className={`h-10 w-10 rounded-full ${
            props.background === "white" ? "bg-white" : "bg-[#9b9b9b]"
          } text-black flex justify-center items-center`}
          key={index}
        >
          {item.element}
        </a>
      ))}
    </div>
  );
}

export default Icons;
