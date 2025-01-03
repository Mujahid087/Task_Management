import clsx from "clsx";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoMdAdd } from "react-icons/io";
import PropTypes from "prop-types";

const TaskTitle = ({ label, className }) => {
  return (
    <div className='w-full h-10 md:h-12 px-2 md:px-4 rounded bg-white flex items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <div className={clsx("w-4 h-4 rounded-full ", className)} />
        <p className='text-sm md:text-base text-gray-600'>{label}</p>
      </div>

      <button className='hidden md:block'>
        <IoMdAdd className='text-lg text-black' />
      </button>
    </div>
  );
};

TaskTitle.propTypes = {
  label: PropTypes.string.isRequired, // Label is a required string
  className: PropTypes.string, // className is an optional string
};

export default TaskTitle;