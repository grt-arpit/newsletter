import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const Signup = () => {

  const handleFormSubmit=(formdata)=>{
    console.log(formdata);

    fetch("http://localhost:5000/user/news",{  //1. address
      method:"POST",                           // 2.request method
      body: JSON.stringify(formdata),          //3.data tobe sent
      headers: {                               //4.data formate
        "Content-Type": "application/json",
      }
    }).then((res) => {
      if (res.status===200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Sign Up successful",
        });
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "some error occured",
        });
      }
    })
  }

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(4, "Password should be longer than 4 characters")
      .required("Required"),
    });
 
  return (
    <div  className="signbgimg">

    <div className="container p-5">  
      <div className="card  size">
        <div className="card-body">

        <img src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png" className="img"/>

          <h3 className="text-muted text-center">Create an account</h3>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              websiteName:"",
              createdAt:new Date(),
            }}
            onSubmit={handleFormSubmit}
            validationSchema={loginSchema}
          >
            {({ values,handleChange,handleSubmit,errors,touched}) => (
              <form onSubmit={handleSubmit}>
                <label className="mt-4">Username</label>
                <input
                  className="form-control"
                  placeholder="Username"
                  value={values.username}
                  id="username"
                  onChange={handleChange}
                  error={Boolean(errors.username)}
                  helperText={errors.username }
                />
                <label className="mt-4">Email</label>
                <input
                  className="form-control"
                  placeholder="email"
                  value={values.email}
                  id="email"
                  onChange={handleChange}
                  error={Boolean(errors.email) && touched.email}
                  helperText={touched.email ? errors.email : ""}
                />
                <label className="mt-4">password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="password"
                  value={values.password}
                  id="password"
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                      helperText={errors.password }
                />
                <label className="mt-4">websiteName</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="websiteName"
                  value={values.websiteName}
                  id="websiteName"
                  onChange={handleChange}
                />
                

                <button className="btn mt-5 form-control text-white" type="Submit" style={{backgroundColor:"#165ff8"}}>
                  Submit
                </button>
                <h6 className="text-muted text-center mt-3">Already have an account?<Link to="/Login">Login Now</Link></h6>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
