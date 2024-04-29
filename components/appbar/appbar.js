import { FaPlus } from "react-icons/fa";
import { RiHome5Fill } from "react-icons/ri";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const AppBar = ({ onClickAdd }) => {
  return (
    <div
      style={{
        backgroundColor: "#363636",
        minHeight: "100px",
        position: "relative",
        width: "100%",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        onClick={onClickAdd}
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: "#8687E7",
          borderRadius: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <FaPlus color="#FFFFFF" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "10px",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <RiHome5Fill color="#FFFFFF" size="25px" />
            <label
              style={{
                color: "#FFFFFF",
                fontSize: "12px",
              }}
            >
              Index
            </label>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <FaRegCalendarDays color="#FFFFFF" size="25px" />
            <label
              style={{
                color: "#FFFFFF",
                fontSize: "12px",
              }}
            >
              Calendar
            </label>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <FaRegClock color="#FFFFFF" size="25px" />
            <label
              style={{
                color: "#FFFFFF",
                fontSize: "12px",
              }}
            >
              Focuse
            </label>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <GoPerson color="#FFFFFF" size="25px" />
            <label
              style={{
                color: "#FFFFFF",
                fontSize: "12px",
              }}
            >
              Profile
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
