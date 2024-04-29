import Image from "next/image";
const EmptyTasks = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image width={227} height={227} src="/checklist.png" />
      <h5
        style={{
          color: "white",
          fontSize: "20px",
        }}
      >
        What do you want to do today?
      </h5>
      <p
        style={{
          color: "white",
        }}
      >
        Tap + to add your tasks
      </p>
    </div>
  );
};

export default EmptyTasks;
