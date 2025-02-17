import { createSlice } from "@reduxjs/toolkit";


const authSlice=createSlice({
    name:"authSlice",

    initialState:{
        email:"",
        password:""
    },
    reducers:{
        kullaniciOlustur:(state,{payload})=>{
            console.log(payload)

        }

    }
    

})

export const {kullaniciOlustur}=authSlice.actions;

export default authSlice.reducer;