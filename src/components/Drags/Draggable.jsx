// DraggableItem.js
const Draggable = ({ id, text, handleDragStart }) => {
  return (
    <div
      id={id}
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      style={{
        userSelect: "none",
        padding: "16px",
        margin: "0 0 8px 0",
        backgroundColor: "#456C86",
        color: "white",
      }}
    >
      {text}
    </div>
  );
};

export default Draggable;
