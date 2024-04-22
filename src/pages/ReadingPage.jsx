import React from "react";
import { useParams } from "react-router-dom";

import Upper from "../Components/ReadingPage/Upper";
import Bottom from "../Components/ReadingPage/Bottom";

function ReadingPage() {
  const { type } = useParams();
  return (
    <div className="pt-24">
      <Upper type={type}/>
      <Bottom type={type}/>
    </div>
  );
}

export default ReadingPage;
