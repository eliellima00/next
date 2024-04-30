import { Checkbox, FormControlLabel, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import CategoryTag from "./category-tag";
import PriorityTag from "./priority-tag";
import formatDate from "@/utils/formatDate";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import useTasksStore from "@/store/tasks-store";

const TodoCard = ({ task }) => {
  const { markAsComplete, markAsIncomplete } = useTasksStore();
  const [checked, setChecked] = useState(task.completed);

  const handleToggleSetChecked = () => {
    setChecked(!checked);
    if (!checked) {
      markAsComplete(task.id);
    } else {
      markAsIncomplete(task.id);
    }
  };

  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: "#363636",
        borderRadius: "6px",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <FormControlLabel
        sx={{
          width: "100%",
          display: "flex",
          "& .MuiFormControlLabel-label": {
            flex: 1,
          },
        }}
        control={
          <Checkbox
            checked={checked}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<RadioButtonCheckedIcon />}
            onChange={handleToggleSetChecked}
          />
        }
        label={
          <div
            style={{
              paddingTop: 1,
              paddingBottom: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                color: "white",
              }}
            >
              {task.name}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "white",
                }}
              >
                {formatDate(task.createdAt)}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                {task.category && (
                  <CategoryTag
                    icon={task.category.icon}
                    title={task.category.name}
                    color={task.category.color}
                  />
                )}
                <PriorityTag priorityNumber={task.priority} />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TodoCard;
