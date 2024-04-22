import React from "react";
import Bottom from "../Components/ReadingLists/Bottom";

function ReadingLists() {
  return (
    <div className="pt-24 w-full">
      <div className="px-40 py-10 font-open w-[69%]">
        <h1 className="font-bold text-4xl">All reading lists</h1>
        <p className="font-semibold text-lg mt-8">Get in-depth insights on web design, freelancing, content managment, and more with these series of related content.</p>
      </div>
      <Bottom/>
    </div>
  );
}

export default ReadingLists;
