import { createSlice } from "@reduxjs/toolkit";

const initialState={
    drawerOpen:false,
    darkMode:false,
    chatData:[]
}

const appDrawerSlice =createSlice({
    name:'appDrawer',
    initialState,
    reducers:{
        setDrawer(state,action){
            state.drawerOpen = action.payload
        },
        setDarkMode(state,action){
            state.darkMode = action.payload

        },
        setChatData (state,action){
            state.chatData = action.payload
        },
    }
})


export const {setDrawer,setDarkMode,setChatData} = appDrawerSlice.actions
export default appDrawerSlice.reducer