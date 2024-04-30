"use client";
import AppBar from "@/components/appbar/appbar";
import { IoFilter } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import EmptyTasks from "@/components/empty-tags";
import useTasksStore from "@/store/tasks-store";
import * as React from "react";
import TasksList from "@/components/tasks-list";
import AddTaskDialog from "@/components/dialog/add-task-dialog";

export default function Home() {
  // pegando as tasks da store global
  const { tasks } = useTasksStore();
  const [openModalTask, setOpenModalTask] = useState(false);

  const handleOpenModalTask = () => {
    setOpenModalTask(true);
  };

  const handleCloseModalTask = () => {
    setOpenModalTask(false);
  };

  return (
    <>
      <main
        style={{
          backgroundColor: "#121212",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <IoFilter size={20} color="white" />
          <p
            style={{
              color: "white",
            }}
          >
            Home Page
          </p>
          <img
            src="/avatar.png"
            style={{
              height: "42px",
              width: "42px",
              borderRadius: 99999,
              objectFit: "cover",
            }}
          />
        </div>

        {tasks.length > 0 ? (
          <div
            style={{
              flex: 1,
              marginInline: "20px",
              paddingTop: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "#363636",
                display: "flex",
                justifyContent: "center",
                alignItens: "center",
                paddingInline: "10px",
                borderRadius: "6px",
                border: "1px solid #979797",
                marginBottom: "20px",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                    fill="#AFAFAF"
                  />
                  <path
                    d="M21.9999 22.7499C21.8099 22.7499 21.6199 22.6799 21.4699 22.5299L19.4699 20.5299C19.1799 20.2399 19.1799 19.7599 19.4699 19.4699C19.7599 19.1799 20.2399 19.1799 20.5299 19.4699L22.5299 21.4699C22.8199 21.7599 22.8199 22.2399 22.5299 22.5299C22.3799 22.6799 22.1899 22.7499 21.9999 22.7499Z"
                    fill="#AFAFAF"
                  />
                </svg>
              </div>
              <Input
                className="bg-[#363636] text-white pl-2 mt-2 mb-2 border-none placeholder:text-white"
                placeholder="Search for your task..."
              />
            </div>
            <div
              style={{
                maxHeight: "75vh",
                overflowY: "auto",
              }}
            >
              <TasksList
                title="To-do"
                tasks={tasks.filter((task) => task.completed == false)}
              />
              <TasksList
                title="Completed"
                tasks={tasks.filter((task) => task.completed == true)}
              />
            </div>
          </div>
        ) : (
          <EmptyTasks />
        )}
        <AppBar onClickAdd={handleOpenModalTask} />
        <AddTaskDialog open={openModalTask} onClose={handleCloseModalTask} />
      </main>
    </>
  );
}
