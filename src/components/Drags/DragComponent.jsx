// App.js
import React, { useState } from "react";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

const DragComponent = ({ options, setSelectedAnswer }) => {
  console.log("options", options);
  const optionsObj = options.map((item, idx) => ({ id: idx, text: item }));

  const [items, setItems] = useState([...optionsObj]);

  console.log(items);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text", id);
  };

  //   const handleDrop = (draggedItemId, targetItemId) => {
  //     const updatedItems = [...items];
  //     const draggedIndex = updatedItems.findIndex(
  //       (item) => item.id === draggedItemId
  //     );
  //     const targetIndex = updatedItems.findIndex(
  //       (item) => item.id === targetItemId
  //     );

  //     // Move the dragged item to the target index
  //     const [draggedItem] = updatedItems.splice(draggedIndex, 1);
  //     updatedItems.splice(targetIndex, 0, draggedItem);

  //     setItems(updatedItems);
  //   };

  const handleDrop = (draggedItemId, targetItemId) => {
    console.log(draggedItemId, targetItemId);
    const updatedItems = [...items];
    const draggedIndex = updatedItems.findIndex(
      (item) => item.id == draggedItemId
    );
    const targetIndex = updatedItems.findIndex(
      (item) => item.id == targetItemId
    );

    console.log(draggedIndex, targetIndex);

    // Move the dragged item to the target index
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(targetIndex, 0, draggedItem);
    setSelectedAnswer(updatedItems);
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map((item, idx) => (
        <Droppable key={idx} id={idx} handleDrop={handleDrop}>
          <Draggable
            id={item.id}
            text={item.text}
            handleDragStart={handleDragStart}
          />
        </Droppable>
      ))}
    </div>
  );
};

export default DragComponent;
