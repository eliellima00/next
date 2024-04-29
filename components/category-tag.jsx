import { createElement } from "react";
import { icons } from "./categories/category-item";

const CategoryTag = ({ icon, color, title }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        display: "flex",
        padding: "4px",
        borderRadius: "6px",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "5px",
      }}
    >
      <div>
        {icons[icon] &&
          createElement(icons[icon], {
            fontSize: "medium",
            sx: {
              maxWidth: "14px",
              maxHeight: "14px",
            },
          })}
      </div>
      <p
        style={{
          fontSize: "12px",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default CategoryTag;
