import { createSlice } from "@reduxjs/toolkit";


const authSlice=createSlice({
    name:"authSlice",

    initialState:{
        email:"",
        password:""
    },
    reducers:{
        kullaniciOlustur:(state,{payload})=>{

            state.email=payload.email
            state.password=payload.password
        },

        kullaniciSil:(state)=>{
            state.email=""
            state.password=""
        }

    }
    

})

export const {kullaniciOlustur,kullaniciSil}=authSlice.actions;

export default authSlice.reducer;