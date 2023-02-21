import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const getExploreData = createAsyncThunk(
    "user/getExploreData",
    async () => {
        try {
            console.log("inside slice")
            const response = await axiosClient.get('/user/getExploreData');
            console.log(response)
            
            return response.result;
        } catch (error) {
            console.log("error is", error)
            return Promise.reject(error);
        }
    }
);

const exploreSlice = createSlice({
    name: "exploreSlice",
    initialState: {
        exploreData: {},
    },
    extraReducers: (builder) => {
        builder.addCase(getExploreData.fulfilled, (state, action) => {
            state.exploreData = action.payload;
        });
    },
});

export default exploreSlice.reducer;