import React from "react";
import Bottom from "../Components/ReadingLists/Bottom";
import Upper from "../Components/ReadingLists/Upper";

function ReadingLists() {
    const data={
        title:'All reading lists',
        desc:"Get in-depth insights on web design, freelancing, content managment, and more with these series of related content."
    }
  return (
    <div className="pt-24 w-full">
      <Upper data={data}/>
      <Bottom/>
    </div>
  );
}

export default ReadingLists;
