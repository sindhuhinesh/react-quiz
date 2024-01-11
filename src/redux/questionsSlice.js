import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuestions = createAsyncThunk("quizQuestions/fetchQuestions", async ({amount, category, difficulty}) => {
  try {
    console.log(amount);
    const response = await axios.get("https://opentdb.com/api.php?amount="+amount+"&category="+category+"&difficulty="+difficulty+"&type=multiple");
    return response.data;
  } catch (error) {
    throw error;
  }
});

const questionsSlice = createSlice({
  name: "quizQuestions",
  initialState: {
    questionsList: [],
    total_mark: 0,
    selectedAnswer: '',
    apiData: {}
  },

  reducers: {

    calculateMark: (state, action) => {
        const optionsArray = action.payload.optionsArray;
        const selectedAnswer = state.selectedAnswer;
        
        if(selectedAnswer !== '') {
          const matchingOption = optionsArray.find(option => option.data === selectedAnswer);
        
          if(matchingOption.isCorrect){
            state.total_mark = state.total_mark + 1;
          } 
        }

        state.selectedAnswer = '';
              
    },

    setSelectedAnswer: (state,action) => {
        state.selectedAnswer = action.payload;
    },
    
    setApiData : (state,action) => {
      state.apiData = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchQuestions.pending, (state, action) => {
        console.log("Pending");
      })

      .addCase(fetchQuestions.fulfilled, (state, action) => {
        console.log("Success");
        state.total_mark = 0;
        state.questionsList = action.payload.results;
      })

      .addCase(fetchQuestions.rejected, (state, action) => {
        console.log("Rejected");
      });
  },
});

export const { calculateMark, setSelectedAnswer, setApiData } = questionsSlice.actions;
export default questionsSlice.reducer;
