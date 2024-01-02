import { configureStore } from "@reduxjs/toolkit";

import questionsSliceReducer from "../redux/questionsSlice";

const store = configureStore({
    reducer: {
        quizQuestions: questionsSliceReducer,
    },
  });
  
  export default store;
