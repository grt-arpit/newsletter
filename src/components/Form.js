import { Formik } from "formik";
import React, { useState } from "react";
import Swal from "sweetalert2";


const Form = () => {


  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const handleFormSubmit=(formdata)=>{
    console.log(formdata);

    fetch("http://localhost:5000/newsletter/form",{  //1. address
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

 
  return (
    <div  style={{background: " url('https://image.shutterstock.com/image-photo/email-blurred-city-abstract-lights-260nw-1445689751.jpg')", backgroundSize:"cover"}}>

    <div className="container p-5 d-flex justify-content-center align-items-center">  
      <div className="card w-50 ">
        <div className="card-body">
          <h5 className="text-muted text-center">Fill up the below fields to create a Newsletter</h5>
          <Formik
            initialValues={{
              content: "",
              schedule: "",
              view: "",
              createdAt:new Date(),
              // owner: currentUser._id,
            }}
            onSubmit={handleFormSubmit}
          >
            {({ values,handleChange,handleSubmit,errors,touched}) => (
              <form onSubmit={handleSubmit}>
                <label className="mt-4">Content</label>
                <input
                  className="form-control"
                  placeholder="content"
                  value={values.content}
                  id="content"
                  onChange={handleChange}
                 
                />
                <label className="mt-4">schedule</label>
                <input
                  className="form-control"
                  placeholder="schedule"
                  value={values.schedule}
                  id="schedule"
                  onChange={handleChange}
                  
                />
                <label className="mt-4">view</label>
                <input
                  className="form-control"
                  type="view"
                  placeholder="view"
                  value={values.view}
                  id="view"
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

export default Form;
