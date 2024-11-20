import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    opensidebar: (state) => {
state.isSidebarOpen = true ;

},
closeSidebar :(state) =>{
state.isSidebarOpen = false;
}  
},
extraReducers(){}
});

export const {opensidebar,closeSidebar} = sidebarSlice.actions
export const selectIsSidebarOpen = (state) => state.sidebar.isSidebarOpen
export default sidebarSlice.reducer