import { Formik } from "formik";
import React from "react";
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
    <div  style={{background: " url('https://static9.depositphotos.com/1583396/1129/i/950/depositphotos_11295068-stock-photo-blue-mail-abstract-background.jpg')", }}>

    <div className="container p-5">  
      <div className="card">
        <div className="card-body">
          <h3 className="text-muted text-center">SIGN UP</h3>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              websiteName:"",
              createdAt:"",
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
                <label className="mt-4">createdAt</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="createdAt"
                  value={values.createdAt}
                  id="createdAt"
                  onChange={handleChange}
                />

                <button className="btn btn-primary mt-5" type="Submit">
                  Submit
                </button>
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
