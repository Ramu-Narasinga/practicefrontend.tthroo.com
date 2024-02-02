import classNames from "classnames";
import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

function CollapsibleSidebar(props: React.PropsWithChildren & {title: string, isOpen: boolean}) {

  const [show, setShow] = useState(props.isOpen);

  return (
    <div className="flex flex-col w-full text-left pl-6">
      <div className={classNames("pl-2 py-4 flex flex-row justify-between cursor-pointer items-center")} onClick={() => setShow(!show)}>
        <div className="text-black font-bold text-lg">{props.title}</div>
        <div>
          {show && <FaChevronUp />}
          {!show && <FaChevronDown />}
        </div>
      </div>
      {show && props.children}
    </div>
  )
}

export default CollapsibleSidebar;