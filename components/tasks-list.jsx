import { useState } from "react";
import TodoCard from "./todo-card";

const TasksList = ({ title, tasks }) => {
  const [expanded, setExpanded] = useState(true);
  if (!tasks.length) return null;

  const handleToggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#363636",
          flexShrink: 0,
          fontSize: "12px",
          color: "white",
          gap: "10px",
          padding: "8px",
          borderRadius: "8px",
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignSelf: "flex-start",
        }}
      >
        <p>{title}</p>
        <div onClick={handleToggleExpanded}>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00001 11.6999C7.53335 11.6999 7.06668 11.5199 6.71335 11.1666L2.36668 6.81993C2.17335 6.62659 2.17335 6.3066 2.36668 6.11326C2.56001 5.91993 2.88001 5.91993 3.07335 6.11326L7.42001 10.4599C7.74001 10.7799 8.26001 10.7799 8.58001 10.4599L12.9267 6.11326C13.12 5.91993 13.44 5.91993 13.6333 6.11326C13.8267 6.3066 13.8267 6.62659 13.6333 6.81993L9.28668 11.1666C8.93335 11.5199 8.46668 11.6999 8.00001 11.6999Z"
              fill="white"
              fill-opacity="0.87"
            />
          </svg>
        </div>
      </div>
      {expanded &&
        tasks.length > 0 &&
        tasks
          .sort((a, b) => a.priority - b.priority)
          .map((task) => {
            return <TodoCard key={task.id} task={task} />;
          })}
    </div>
  );
};

export default TasksList;
