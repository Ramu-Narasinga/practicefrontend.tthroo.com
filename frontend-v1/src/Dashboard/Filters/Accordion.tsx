import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CategoryType } from "../../store/useFilters";

const Accordion = (props: { title: string; items: CategoryType[] }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = () => {
    setCheckboxValue(!checkboxValue);
  };

  const { title, items } = props;

  const Items: Function = () => {
    return (
      <>
        {
          items.map((item: any) => (
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={item.checked}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <label htmlFor="checkbox" className="text-sm">
                  {item.label}
                </label>
              </div>
            </div>
          ))
        }
      </>
    );
  };

  return (
    <div className="p-4 rounded border-t border-1">
      <div className="flex items-center justify-between">
        <h2 className="text-md">{title}</h2>
        <button
          onClick={handleToggle}
          className="text-blue-500 focus:outline-none"
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {isOpen && <Items />}
    </div>
  );
};

export default Accordion;
