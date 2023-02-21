import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { axiosClient } from "../../utils/axiosClient";

export const getUserProfile = createAsyncThunk('user/getUserProfile', async (body) => {
    try {
        console.log("inside postsslice")
        const response = await axiosClient.post('/user/getUserProfile', body);
        console.log("inside postsldkf", response)
        return response.result;
    } catch (e) {
        // console.log("inside postsslice")
        return Promise.reject(e);
    }
})
export const likeAndUnlikePost = createAsyncThunk(
    "post/likeAndUnlike", async (body) => {
        try {
            const response = await axiosClient.post('/post/like', body);
            return response.result.post;
        } catch (e) {
            return Promise.reject(e);
        }
    })

export const deletePost = createAsyncThunk("post/deletePost", async (body) => {
    try {
        const response = await axiosClient.delete("/post/", body);
        return response.result.post;
    } catch (error) {
        return Promise.reject(error);
    }
});

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        userProfile: {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.userProfile = action.payload;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                const index = state?.userProfile?.posts?.findIndex(
                    (item) => item === action.payload
                );
                if (index !== undefined && index !== -1) {
                    state.userProfile.posts.splice(index, 1);
                }
            })
            .addCase(likeAndUnlikePost.fulfilled, (state, action) => {
                const post = action.payload;

                const index = state?.userProfile?.posts?.findIndex((item) => item._id === post._id);
                if (index != undefined && index != -1) {
                    state.userProfile.posts[index] = post;
                }
            })

    }
})
export default postsSlice.reducer;
