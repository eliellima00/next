import { Box, Modal } from "@mui/material";
import { createElement, useState } from "react";

import useCategoriesStore from "@/store/categories-store";
import { Input } from "../ui/input";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { icons } from "../categories/category-item";

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
  height: "100%",
  width: "100%",
};

const containerIconModal = {
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  outline: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  paddingX: 2,
  width: "90%",
};

const colors = [
  { id: 1, color: "#C9CC41" },
  { id: 2, color: "#66CC41" },
  { id: 3, color: "#41CCA7" },
  { id: 4, color: "#4181CC" },
  { id: 5, color: "#41A2CC" },
  { id: 6, color: "#CC8441" },
  { id: 7, color: "#9741CC" },
];

const iconsAvailable = [
  "BreakfastDiningIcon",
  "WorkOutlineOutlinedIcon",
  "FitnessCenterOutlinedIcon",
  "DesignServicesOutlinedIcon",
  "SchoolOutlinedIcon",
  "CampaignOutlinedIcon",
  "LibraryMusicOutlinedIcon",
  "HealthAndSafetyOutlinedIcon",
  "VideocamOutlinedIcon",
  "HomeOutlinedIcon",
  "AddOutlinedIcon",
];

const AddCategoryDialog = ({ open, onClose }) => {
  const { addCategory } = useCategoriesStore();
  const [openIconsModal, setOpenIconsModal] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedColor, setSelectedColor] = useState({
    id: 1,
    color: "#C9CC41",
  });
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
    setNameError(event.target.value === "");
  };

  const handleClickColor = (color) => {
    setSelectedColor(color);
  };

  const handleSelectIcon = (icon) => {
    setSelectedIcon(icon);
    handleCloseIconsModal();
  };

  const submitForm = () => {
    // Se algum campo estiver vazio, não envie o formulário
    if (name === "") {
      setNameError(name === ""); // Define como true se estiver vazio
      return;
    } else {
      addCategory({
        name,
        color: selectedColor.color,
        icon: selectedIcon,
      });
      cleanForm();
      handleCloseSelf();
    }
  };

  const cleanForm = () => {
    setName("");
    setNameError(false);
  };

  const handleOpenIconsModal = () => {
    setOpenIconsModal(true);
  };

  const handleCloseIconsModal = () => {
    setOpenIconsModal(false);
  };

  const handleCloseSelf = () => {
    onClose();
  };

  return (
    <>
      <Modal open={open} onClose={handleCloseSelf}>
        <Box
          sx={{
            ...containerAddTaskDialog,
            backgroundColor: "#121212",
            py: 2,
          }}
        >
          <p style={{ color: "white", fontSize: "20px", marginTop: "30px" }}>
            Create new category
          </p>
          <div
            style={{
              flex: 1,
            }}
          >
            <div>
              <p
                style={{
                  color: "white",
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
              >
                Category Name:
              </p>
              <Input
                value={name}
                onChange={handleChangeName}
                placeholder="Category name"
                className="placeholder:pl-2 bg-[#1D1D1D] text-white px-2"
              />
              {nameError && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Category name is required
                </p>
              )}
            </div>
            <p
              style={{
                color: "white",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            >
              Category icon:
            </p>
            {selectedIcon ? (
              createElement(icons[selectedIcon], {
                fontSize: "large",
                htmlColor: "white",
                onClick: handleOpenIconsModal,
              })
            ) : (
              <div
                onClick={handleOpenIconsModal}
                style={{
                  backgroundColor: "#FFFFFF36",
                  maxWidth: "160px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "4px",
                }}
              >
                <p style={{ color: "white", fontSize: "12px" }}>
                  Choose icon from library
                </p>
              </div>
            )}
            <p
              style={{
                color: "white",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            >
              Category color:
            </p>
            <div
              style={{
                flexWrap: "wrap",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {colors.map((color, index) => {
                return (
                  <div
                    onClick={() => handleClickColor(color)}
                    key={color.id}
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: color.color,
                      borderRadius: 9999,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {selectedColor && selectedColor.id === color.id && (
                      <CheckOutlinedIcon />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: "20px",
            }}
          >
            <button
              onClick={handleCloseSelf}
              style={{
                color: "#8687E7",
                backgroundColor: "transparent",
                width: "153px",
              }}
            >
              Cancel
            </button>
            <button
              onClick={submitForm}
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
      <Modal open={openIconsModal} onClose={handleCloseIconsModal}>
        <Box
          sx={{
            ...containerIconModal,
            background: "#363636",
            paddingBottom: "20px",
          }}
        >
          <p
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              color: "white",
              fontSize: "20px",
            }}
          >
            Choose Icon
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {iconsAvailable.map((value) => {
              return createElement(icons[value], {
                fontSize: "large",
                onClick: () => handleSelectIcon(value),
              });
            })}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddCategoryDialog;
