import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuestions = createAsyncThunk("quizQuestions/fetchQuestions", async() => {
    const response = await axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
    return response.data;
});

const questionsSlice = createSlice({
    name: "quizQuestions",
    initialState: {
        questionsList: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchQuestions.pending, (state, action) => {
            console.log("Pending");
          })
          .addCase(fetchQuestions.fulfilled, (state, action) => {
            console.log("Sucess");
            state.questionsList = action.payload;
          })
          .addCase(fetchQuestions.rejected, (state, action) => {
            console.log("Rejected");
          });

    },
});

export default questionsSlice.reducer;