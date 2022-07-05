import React from "react";

const Preview = () => {
  return (
    <div className="p-5 ">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h2>this is a heading</h2>
            <hr />
            <input
              className="form-control"
              placeholder="Username"
              id="username"
            />
             <button className="btn btn-primary mt-5" type="Submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
