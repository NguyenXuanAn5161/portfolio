import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light", // Lấy giá trị từ localStorage hoặc mặc định là "light".
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme); // Lưu trạng thái vào localStorage.
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
