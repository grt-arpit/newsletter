import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";


const Form = () => {

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
    <div  style={{background: " url('https://static9.depositphotos.com/1583396/1129/i/950/depositphotos_11295068-stock-photo-blue-mail-abstract-background.jpg')", }}>

    <div className="container p-5">  
      <div className="card">
        <div className="card-body">
          <h3 className="text-muted text-center">FORM</h3>
          <Formik
            initialValues={{
              content: "",
              schedule: "",
              view: "",
              createdAt:"",
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

export default Form;
