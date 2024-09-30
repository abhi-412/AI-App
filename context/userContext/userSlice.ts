import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import {userService} from "./userService" 
import SignUpForm from "./objects";


const initialState = {
    curUser:{},
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:{}
};


export const signUpUser = createAsyncThunk<
  any, // Return type of the payload creator
  SignUpForm, // First argument type (form data)
  { rejectValue: string } // ThunkAPI configuration type
>(
  "user/signUp",
  async (form: SignUpForm, thunkAPI) => {
    try {
      const res = await userService.registerUser(form);
      // console.log(res);
      return res; // This will be the resolved value
    } catch (error:any) {
      console.log("error is : ", error);
      
      return thunkAPI.rejectWithValue(error.response.data.message); // Return the error message
    }
  }
)

const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{},
    extraReducers:((builder)=>{
        builder.addCase(signUpUser.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        }).addCase(signUpUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.curUser = action.payload;
            state.message = action.payload
        }).addCase(signUpUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess=false;
            state.message = action.error;
        })
    })
})

export default userSlice.reducer;