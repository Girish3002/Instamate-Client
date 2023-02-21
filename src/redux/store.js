import { configureStore } from '@reduxjs/toolkit'
import appConfigReducer from './slices/appConfigSlice'
import postReducer from './slices/postsSlice'
import feedDataReducer from './slices/feedSlice'
import commentReducer from './slices/commentSlice'
import exploreReducer from "./slices/exploreSlice";

export default configureStore({
    reducer: {
        appConfigReducer,
        postReducer,
        feedDataReducer,
        commentReducer,
        exploreReducer
    }
})