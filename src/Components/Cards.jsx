import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

function Cards(props) {
  const { cards } = props;
  return (
    <div className="flex items-center justify-between gap-x-2 py-10">
      {Object.keys(cards).map((item, index) => {
        if (index === 0) {
          return (
            <BigCard
              title={cards[item].title}
              heading={cards[item].heading}
              desc={cards[item].desc}
              key={index}
            />
          );
        }
        return <div key={index}></div>;
      })}
      <div className="w-1/2 h-[45vh] rounded-xl overflow-hidden flex items-center justify-between gap-1 flex-wrap">
        {Object.keys(cards).map((item, index) => {
          if (index !== 0) {
            return (
              <SmallCard
                title={cards[item].title}
                heading={cards[item].heading}
                key={index}
              />
            );
          }
          return <></>;
        })}
      </div>
    </div>
  );
}

export default Cards;
