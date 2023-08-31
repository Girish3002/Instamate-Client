import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { axiosClient } from "../../utils/axiosClient";
import { likeAndUnlikePost } from "./postsSlice";

export const getFeedData = createAsyncThunk('user/getFeedData', async () => {
    try {
        const response = await axiosClient.get('/user/getFeedData');
        return response.result;
    } catch (e) {
        return Promise.reject(e);
    }
})

export const followAndUnfollowUser = createAsyncThunk("user/followAndUnfollow", async (body) => {
    try {
        const response = await axiosClient.post("/user/follow", body);
        return response.result.user;
    } catch (e) {
        return Promise.reject(e);
    }
})

// updated for follow and unfollow bug, now working properly
const feedSlice = createSlice({
    name: 'feedSlice',
    initialState: {
        feedData: {},
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFeedData.fulfilled, (state, action) => {
                state.feedData = action.payload;
            })
            .addCase(followAndUnfollowUser.fulfilled, (state, action) => {
                const user = action.payload;
                const index = state?.feedData?.followings.findIndex((item) => item._id === user._id);

                if (index !== -1) {
                    state.feedData.followings.splice(index, 1);
                } else {
                    state.feedData.followings.push(user);
                }

                const suggestionsIndex = state.feedData.suggestions.findIndex((item) => item._id === user._id);

                if (suggestionsIndex !== -1) {
                    state.feedData.suggestions.splice(suggestionsIndex, 1);
                } else {
                    state.feedData.suggestions.push(user);
                }
            })
            .addCase(likeAndUnlikePost.fulfilled, (state, action) => {
                const post = action.payload;
                const postIndex = state.feedData.posts.findIndex((item) => item._id === post._id);

                if (postIndex !== -1) {
                    state.feedData.posts[postIndex] = post;
                }
            });
    },
});

export default feedSlice.reducer;

