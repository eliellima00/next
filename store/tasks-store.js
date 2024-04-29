import create from "zustand";

const useTasksStore = create((set) => ({
  tasks: [
    {
      id: 1,
      name: "Task 1",
      description: "Description for task 1",
      createdAt: "2024-04-22T12:00:00.000Z",
      completed: true,
      priority: 1,
      category: {
        id: 1,
        name: "University",
        color: "#809CFF",
        icon: "SchoolOutlinedIcon",
      },
    },
  ],
  markAsComplete: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      ),
    })),
  addTask: (newTask) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          ...newTask,
          createdAt: new Date(),
          completed: false,
        },
      ],
    })),
  markAsIncomplete: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: false } : task
      ),
    })),
}));

export default useTasksStore;
