import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = (props:{title: string, items: any[]}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = () => {
    setCheckboxValue(!checkboxValue);
  };

  const {
    title,
    items
  } = props;

  return (
    <div className="">
      <div className="bg-gray-200 p-4 rounded">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={handleToggle}
            className="text-blue-500 focus:outline-none"
          >
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {isOpen && (
          {
            items.map((item: any) => (<div className="mt-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="checkbox"
                checked={checkboxValue}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label htmlFor="checkbox" className="text-sm">
                Checkbox Label
              </label>
            </div>
          </div>
          }
        )}
      </div>
    </div>
  );
};

export default Accordion;
