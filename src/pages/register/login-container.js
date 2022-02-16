import { LoginForm } from "./login";
import { useFormik } from "formik";
import { Login } from "../../api/auth";
import { LoginValidation } from "../../validation/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import{addUser} from '../../redux/action'
import { useState } from "react";
export const LoginContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMsg,setErrorMsg] = useState('');
  const onSubmit = async (values) => {
    try {
      let { token } = await Login(values.email, values.password);
       dispatch(addUser(values.email, token , true));
      navigate("/dashboard");
    } catch (e) {
      setErrorMsg("you failed to login please register first...")
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: onSubmit,
  });

  return <LoginForm formik={formik} errormsg={errorMsg} />;
};
