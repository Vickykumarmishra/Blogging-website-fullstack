import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fullname: Yup.string().min(3).max(25).required("Please enter your name"),
  
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(3).max(12).required("Please enter password"),
  
    
});