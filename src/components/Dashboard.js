import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userFormData, setuserFormData] = useState(null); //for for update
  const [showUpdateForm, setshowUpdateForm] = useState(false); //for updating

  const [letterContent, setLetterContent] = useState("");
  const [subject, setSubject] = useState("");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  ); //for current user

  const [subsArray, setSubsArray] = useState([]);

  //to treak data loading
  const [loading, setloading] = useState(true);

  const getDataFromBackend = () => {
    fetch(
      "http://localhost:5000/Suscribe/getbyownerid/" + currentUser._id
    ).then((res) => {
      if (res.status === 200) {
        console.log("data fetched");
        res.json().then((data) => {
          console.log(data);
          setSubsArray(data);
          setloading(false);
        });
      }
    });
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const deletUser = (id) => {
    console.log(id);

    fetch("http://localhost:5000/Suscribe/delete/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        console.log("data deleted");
        getDataFromBackend();
      }
    });
  };

  const updateUser = (userdata) => {
    setshowUpdateForm(true);
    setuserFormData(userdata);
  };

  const displayusers = () => {
    if (!loading) {
      return subsArray.map(({ _id, name, email, createdAt }) => (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{createdAt}</td>
          <td>
            <button className="btn btn-danger" onClick={(e) => deletUser(_id)}>
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      ));
    }
  };

  const sendMail = async (recAddress) => {
    const res = await fetch("http://localhost:5000/utils/sendmail", {
      method: "POST",
      body: JSON.stringify({
        from: "newsletterproject2022@gmail.com", // sender address
        to: recAddress, // list of receivers
        subject: subject,
        html: letterContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
  };

  const sendNewsLetter = () => {
    subsArray.forEach(({ email }) => {
      console.log("mail sent to " + email);
      sendMail(email);
    });
  };

  return (
    <div className="container-fluid" style={{ background: "url('https://live.staticflickr.com/2258/2281971470_31ed45f483_b.jpg')"  ,height: "100vh" }}>
      <h2>Owner ID : {currentUser._id}</h2>
      <h4><marquee>To Use Plugin Copy the Code Below : </marquee></h4>
      <pre>
        <code>
          {/* <div id="preview" owner-id="62c80bc60fb39436c91beaba"></div> */}
        </code>
      </pre>
      <h2 className="text-center mb-4">
        The Data of our current subscribers are giving here...
      </h2>
      <div className="col-md-8 mx-auto">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>creratedAt</th>
            </tr>
          </thead>
          <tbody>{displayusers()}</tbody>
        </table>

        <div className="card bgcard">
          <div className="card-body">
            <input
              className="form-control"
              placeholder="write your subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className="form-control mt-4"
              placeholder="write your html code here"
              rows="10"
              onChange={(e) => setLetterContent(e.target.value)}
            ></textarea>
            <button className="but text-white mt-4 form-control" onClick={sendNewsLetter}>
              SEND  
            </button>
          </div>
        </div>
      </div>

      {/* {showUpdateForm ? <div className='col-md'></div>:""} */}
    </div>
  );
};

export default Dashboard;
