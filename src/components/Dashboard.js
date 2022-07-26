import React, { useEffect, useState } from 'react'


const Dashboard = () => {

  const [userFormData, setuserFormData] = useState(null);//for for update
  const [showUpdateForm, setshowUpdateForm] = useState(false);//for updating 

  //for storing user data
    const [userArray, setuserArray] = useState([]);

    //to treak data loading
    const [loading, setloading] = useState(true);

  
    const getDataFromBackend=()=>{
     fetch('http://localhost:5000/Suscribe/getbyownerid/'+"62c80bc60fb39436c91beaba").then((res)=>{
        if(res.status===200){
            console.log("data fetched");
            res.json().then((data)=>{
                console.log(data);
                setuserArray(data);
                setloading(false);
            });
        }
     });
    };

    useEffect(() => {
        getDataFromBackend();
    }, []);

    // const displayData= ()=>{
    //    if(!loading){
    //     return nums.map((n)=>(
    //       <div className='card'>
    //         <div className='card-body'>
    //           <h1>{n}</h1>
    //         </div>
    //       </div>
    //     ))
    //    }
    // }
    
    const deletUser=(id)=>{
      console.log(id);

      fetch("http://localhost:5000/Suscribe/delete/"+id,{
        method: "DELETE"
      }).then(res=>{
        if(res.status===200){
          console.log("data deleted");
          getDataFromBackend();
        }
      });
    };

       const updateUser = (userdata)=>{
         setshowUpdateForm(true);
         setuserFormData(userdata);
       }

    const displayusers=()=>{
      if(!loading){
        return userArray.map(({_id,name,email,createdAt})=>(
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{createdAt }</td>
           
            
            <td>
              <button className='btn btn-danger' onClick={e=>deletUser(_id)}>
                <i class="fas fa-trash"></i>
              </button>
              </td>
            
              
           
          </tr>
        ))
      }
    }

  return (
    <div className='container-fluid mt-5 100vh' style={{background:"#10e8f2"}}>
      <div className='row '>
      <h2 className='text-center mb-4'>The Data of our current subscribers are giving here...</h2>
        <div className='col-md d-flex justify-content-center align-items-center'>
      <table className='table table-dark w-75 '>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>creratedAt</th>
           
          </tr>
        </thead>
        <tbody>
         { displayusers()}
        </tbody>
      </table>
      </div>
      
       {/* {showUpdateForm ? <div className='col-md'></div>:""} */}

      </div>
      </div>
      );
};

export default Dashboard;