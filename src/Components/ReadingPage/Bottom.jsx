import React from "react";
import { useNavigate } from "react-router-dom";
import News from "./News";
import Reading from "../Reading";

function Bottom(props) {
  const navigate = useNavigate();
  const { type } = props;
  return (
    <>
      <div className="bg-[#F9F9FB]">
        <div className="w-full py-10 px-40">
          <p className="text-[#c8c8c8]">
            <span onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </span>{" "}
            -{" "}
            <span onClick={() => navigate("/read")} className="cursor-pointer">
              Reading lists
            </span>
            <span className="text-[#9b9b9b] capitalize"> - {type}</span>
          </p>
          <News />
        </div>
        <Reading selectedType={type}/>
      </div>
    </>
  );
}

export default Bottom;
