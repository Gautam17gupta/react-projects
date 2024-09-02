
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchmovies=createAsyncThunk("fetchmovies",async ()=>{
    const response=await fetch("https://freetestapi.com/api/v1/movies");
    return response.json();
}  )
const MoviesSlice=createSlice({
    name:"movies",
    initialState:{
        isloading:false,
        data:null,
        iserror:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchmovies.pending,(state,action)=>{
            console.log('pending')
            state.isloading=true;
        });
        builder.addCase(fetchmovies.fulfilled, (state,action)=>{
            console.log("data is taken")
            state.isloading=false;
            state.data=action.payload;

        });
        builder.addCase(fetchmovies.rejected,(state,action)=>{
            state.iserror=true;
        })
    }
});
export default MoviesSlice.reducer;