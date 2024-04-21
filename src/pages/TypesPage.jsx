import React from "react";
import { useParams } from "react-router-dom";
import Sections from "../Components/TypesPage/Sections.jsx";

function TypesPage() {
  const { types } = useParams();
  return (
    <div className="px-40 pt-24 bg-[#F9F9FB]">
      <h1 className="font-bold text-5xl capitalize">{types}</h1>
      <Sections/>
    </div>
  );
}

export default TypesPage;
