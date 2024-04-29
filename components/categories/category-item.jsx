import BreakfastDiningOutlinedIcon from "@mui/icons-material/BreakfastDiningOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { createElement } from "react";

export const icons = {
  BreakfastDiningIcon: BreakfastDiningOutlinedIcon,
  WorkOutlineOutlinedIcon: WorkOutlineOutlinedIcon,
  FitnessCenterOutlinedIcon: FitnessCenterOutlinedIcon,
  DesignServicesOutlinedIcon: DesignServicesOutlinedIcon,
  SchoolOutlinedIcon: SchoolOutlinedIcon,
  CampaignOutlinedIcon: CampaignOutlinedIcon,
  LibraryMusicOutlinedIcon: LibraryMusicOutlinedIcon,
  HealthAndSafetyOutlinedIcon: HealthAndSafetyOutlinedIcon,
  VideocamOutlinedIcon: VideocamOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  AddOutlinedIcon: AddOutlinedIcon,
};

const CategoryItem = ({ category, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "64px",
        margin: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          height: "64px",
          backgroundColor: category.color,
          border: selected ? "2px solid blue" : "none",
          borderRadius: "4px",
        }}
      >
        {icons[category.icon] &&
          createElement(icons[category.icon], {
            fontSize: "large",
            sx: {
              maxWidth: "32px",
              maxHeight: "32px",
            },
          })}
      </div>
      <p
        style={{
          color: "white",
          fontSize: "14px",
          textAlign: "center",
          paddingTop: "5px",
        }}
      >
        {category.name}
      </p>
    </div>
  );
};

export default CategoryItem;
