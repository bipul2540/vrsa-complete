import { configureStore } from "@reduxjs/toolkit";
import SemReducer from "./slices/userSlice";
import CheckReducer from "./slices/inputSlice";

export const store = configureStore({
  reducer: {
    semester: SemReducer,
    check: CheckReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
