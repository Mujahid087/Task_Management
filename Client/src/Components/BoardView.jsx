// import React from "react";
// import TaskCard from "./TaskCard";

// const BoardView = ({ tasks }) => {
//   return (
//     <div className='w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10'>
//       {tasks.map((task, index) => (
//         <TaskCard task={task} key={index} />
//       ))}
//     </div>
//   );
// };

// export default BoardView;

import React from "react";
import TaskCard from "./TaskCard";

const BoardView = ({ tasks }) => {
  // Ensure tasks is an array, even if it's undefined or null
  const safeTasks = Array.isArray(tasks) ? tasks : [];

  return (
    <div className='w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10'>
      {safeTasks.length > 0 ? (
        safeTasks.map((task, index) => <TaskCard task={task} key={index} />)
      ) : (
        <p className="text-gray-500 text-center w-full">No tasks available.</p>
      )}
    </div>
  );
};

export default BoardView;