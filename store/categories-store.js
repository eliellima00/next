import create from "zustand";

const useCategoriesStore = create((set) => ({
  categories: [
    {
      id: 1,
      name: "Grocery",
      color: "#CCFF80",
      icon: "BreakfastDiningIcon",
    },
    {
      id: 2,
      name: "Work",
      color: "#FF9680",
      icon: "WorkOutlineOutlinedIcon",
    },
  ],
  addCategory: (newCategory) =>
    set((state) => ({
      categories: [
        ...state.categories,
        {
          ...newCategory,
          id: state.categories.length + 1,
        },
      ],
    })),
}));

export default useCategoriesStore;
