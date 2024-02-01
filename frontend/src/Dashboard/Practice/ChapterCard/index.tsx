import React from "react";
import { Link } from 'react-router-dom';
import { ChapterCardType } from "../types";
import Button from "../../../Shared/Button";

function ChapterCard(props: { chapter: ChapterCardType }) {

  const { chapter } = props;

  return (
    <div className="flex flex-col justify-between max-w-xs h-fit-content bg-white rounded-lg border border-gray-300 text-left">
      <div>
        <Link to={`/chapter/${chapter.id}`}>
          <img src={`/assets/components/${chapter.title}/img.png`} alt="chapter" />
        </Link>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-2 gap-4">
          <div className="text-black text-lg font-normal">{chapter.title}</div>
          <div className="bg-green-500 text-white px-2 py-0 rounded-md mr-2">Free</div>
          {/* <div className="bg-violet-700 text-white px-2 py-0 rounded-md mr-2">Premium</div> */}
        </div>
        <div className="text-gray-500 text-sm font-normal">{chapter.description}</div>
      </div>
      <div className="p-5">
        <Link to={`/chapter/${chapter.id}`}>
          <Button label="Practice Now" />
        </Link>
      </div>
    </div>
  );
}

export default ChapterCard;
