import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

// const composeEnhancers = composeWithDevTools({ actionCreators: updateName });
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
