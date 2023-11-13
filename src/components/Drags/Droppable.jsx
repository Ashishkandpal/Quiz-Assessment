// // DroppableContainer.js
// import React, { useState } from "react";

// const Droppable = ({ children, handleDrop }) => {
//   const [draggedItem, setDraggedItem] = useState(null);

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDropInternal = (e) => {
//     e.preventDefault();
//     handleDrop(draggedItem, e.dataTransfer.getData("text"));
//     setDraggedItem(null);
//   };

//   return (
//     <div
//       onDragOver={handleDragOver}
//       onDrop={handleDropInternal}
//       style={{
//         background: "#eee",
//         padding: "16px",
//         width: "250px",
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default Droppable;

// DroppableContainer.js
import React, { useState } from "react";

const Droppable = ({ id, children, handleDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropInternal = (e) => {
    e.preventDefault();
    // console.log("data,", e.dataTransfer.getData("text"));
    // console.log(e.target);
    const draggedItemId = e.dataTransfer.getData("text");
    // console.log("e.target.id", e.target.id, "draggedItemId", draggedItemId);
    handleDrop(draggedItemId, e.target.id);
  };

  return (
    <div
      id={id}
      onDragOver={handleDragOver}
      onDrop={handleDropInternal}
      style={{
        background: "#eee",
        padding: "16px",
        width: "250px",
      }}
    >
      {children}
    </div>
  );
};

export default Droppable;
