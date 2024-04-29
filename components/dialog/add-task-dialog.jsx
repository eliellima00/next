import { Box, Modal } from "@mui/material";
import { Input } from "../ui/input";
import DialogIcons from "../dialog-icons";
import { useState } from "react";
import PriorityTag from "../priority-tag";
import PriorityTagVertical from "../priority-tag-vertical";
import useTasksStore from "@/store/tasks-store";
import useCategoriesStore from "@/store/categories-store";
import CategoryItem from "../categories/category-item";
import AddCategoryDialog from "./add-category-dialog";

const containerAddTaskDialog = {
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  outline: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  paddingX: 2,
};

const containerTaskPriorityDialog = {
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  outline: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  paddingX: 2,
};

const AddTaskDialog = ({ open, onClose }) => {
  const { addTask } = useTasksStore();
  const { categories } = useCategoriesStore();
  const [openPrioriryDialog, setOpenPrioriryDialog] = useState(false);
  const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
  const [openAddCategoryDialog, setOpenAddCategoryDialog] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
    setNameError(event.target.value === "");
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
    setDescriptionError(event.target.value === "");
  };

  const submitForm = () => {
    // Se algum campo estiver vazio, não envie o formulário
    if (name === "" || description === "") {
      setNameError(name === ""); // Define como true se estiver vazio
      setDescriptionError(description === ""); // Define como true se estiver vazio
      return;
    } else {
      cleanForm(); // limpa o form
      addTask({
        name,
        description,
        priority: selectedPriority > -1 ? selectedPriority + 1 : null,
        category: selectedCategory,
      }); // cria a task
      handleClosePriorityTask();
      handleCloseAddTaskDialog();
    }
  };

  const cleanForm = () => {
    setName("");
    setNameError(false);
    setDescription("");
    setDescriptionError(false);
  };

  const handleSetPriority = (index) => {
    setSelectedPriority(index);
  };

  const handleSetCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleOpenPriorityTask = () => {
    setOpenPrioriryDialog(true);
  };

  const handleClosePriorityTask = () => {
    setOpenPrioriryDialog(false);
  };

  const handleOpenCategoriesDialog = () => {
    setOpenCategoryDialog(true);
  };

  const handleCloseCategoriesDialog = () => {
    setOpenCategoryDialog(false);
  };

  const handleOpenAddCategoriesDialog = () => {
    setOpenAddCategoryDialog(true);
  };

  const handleCloseAddCategoriesDialog = () => {
    setOpenAddCategoryDialog(false);
  };

  const handleCloseAddTaskDialog = () => {
    onClose();
    cleanForm();
  };

  return (
    <>
      <Modal open={open} onClose={handleCloseAddTaskDialog}>
        <Box
          sx={{
            ...containerAddTaskDialog,
            background: "#363636",
            width: "100%",
            py: 2,
          }}
        >
          <Box sx={{ color: "white", pb: 2 }}>Add Task</Box>
          <form onSubmit={submitForm}>
            <Input
              required
              value={name}
              onChange={handleChangeName}
              className="bg-[#363636] text-white border-none"
              placeholder="Add task"
            />
            {nameError && (
              <p style={{ color: "red", fontSize: "12px" }}>Name is required</p>
            )}
            <Input
              required
              value={description}
              onChange={handleChangeDescription}
              className="bg-[#363636] text-white mt-2 mb-2 border-none"
              placeholder="Description"
            />
            {descriptionError && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Description is required
              </p>
            )}
          </form>

          <DialogIcons
            onClickLabelIcon={handleOpenCategoriesDialog}
            onClickPriorityIcon={handleOpenPriorityTask}
            onClickSubmitIcon={submitForm}
          />
        </Box>
      </Modal>
      <Modal open={openPrioriryDialog} onClose={handleClosePriorityTask}>
        <Box
          sx={{
            ...containerTaskPriorityDialog,
            background: "#363636",
            width: "100%",
            maxWidth: "327px",
            py: 2,
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                textAlign: "center",
                marginBottom: "10px",
                paddingBottom: "10px",
                borderBottom: "1px solid white",
              }}
            >
              Task Priority
            </p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {Array.from({
              length: 10,
            }).map((_, index) => {
              return (
                <PriorityTagVertical
                  key={index + 1}
                  value={index + 1}
                  onClick={() => handleSetPriority(index)}
                  selected={index === selectedPriority}
                />
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <button
              onClick={handleClosePriorityTask}
              style={{
                color: "#8687E7",
                backgroundColor: "transparent",
                width: "153px",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleClosePriorityTask}
              style={{
                color: "white",
                backgroundColor: "#8687E7",
                padding: "10px",
                borderRadius: "4px",
                width: "153px",
              }}
            >
              Save
            </button>
          </div>
        </Box>
      </Modal>
      <Modal open={openCategoryDialog} onClose={handleCloseCategoriesDialog}>
        <Box
          sx={{
            ...containerTaskPriorityDialog,
            background: "#363636",
            width: "100%",
            maxWidth: "327px",
            py: 2,
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                textAlign: "center",
                marginBottom: "10px",
                paddingBottom: "10px",
                borderBottom: "1px solid white",
              }}
            >
              Choose Category
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((category) => {
              return (
                <CategoryItem
                  key={category.id}
                  category={category}
                  onClick={() => handleSetCategory(category)}
                  selected={
                    selectedCategory
                      ? category.id === selectedCategory.id
                      : false
                  }
                />
              );
            })}
            <CategoryItem
              onClick={handleOpenAddCategoriesDialog}
              category={{
                name: "Create New",
                icon: "AddOutlinedIcon",
                color: "#80FFD1",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <button
              onClick={handleCloseCategoriesDialog}
              style={{
                color: "white",
                backgroundColor: "#8687E7",
                padding: "10px",
                borderRadius: "4px",
                width: "153px",
              }}
            >
              Add Category
            </button>
          </div>
        </Box>
      </Modal>
      <AddCategoryDialog
        open={openAddCategoryDialog}
        onClose={handleCloseAddCategoriesDialog}
      />
    </>
  );
};

export default AddTaskDialog;
