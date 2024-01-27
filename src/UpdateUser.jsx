import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateUser = () => {
  const [inputUser, setInputUser] = useState({

    name: "",
    email: "",
    mobileno: "",
    designation:"",
    gender:"",
    course:"",
 
  });

  // GET single
  // fetching data with single id by using useParams()
  const { id } = useParams();

  const fetchSingleUser = async () => {
    const res = await axios.get(`https://backendcstech-infosolutions.onrender.com/employees/singleemployee/${id}`);
    console.log(res);
    setInputUser({
      name: res.data.name,
      email: res.data.email,
      mobileno: res.data.mobileno,
      designation:res.data.designation,
      gender:res.data.gender,
      course:res.data.course,
 
    });
  };
  useEffect(() => {
    fetchSingleUser();
  },[]);

  const handleChnage = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log(inputUser);
    const res = await axios.put(
    `https://backendcstech-infosolutions.onrender.com/employees/update/${id}`,
      inputUser

    );
    console.log(res);
    
    if (res.status === 200) {
      window.location = "/";
    }
  };

  return (
    <div className="w-2/3 mx-auto mt-5">
      <form onSubmit={handleSubmit}>
      <h1 className="text-orange-500 font-medium">
        Update User
        </h1>
        <div className="">
          <label className=" text-sm text-gray-500 ">Name</label>
          <input
            type="text"
            name="name"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter name"
            required
            value={inputUser.name}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Email</label>
          <input
            type="text"
            name="email"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter email "
            required
            value={inputUser.email}
            onChange={handleChnage}
          />
        </div>

        <div className="">
          <label className=" text-sm text-gray-500 ">Mobile No</label>
          <input
            type="Number"
            name="mobileno"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter Mobile no "
            required
            value={inputUser.mobileno}
            onChange={handleChnage}
          />
        </div>

        <div className="">
          <label className=" text-sm text-gray-500 ">Designation </label>
          <input
            type="text"
            name="designation"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter designation "
            required
            value={inputUser.designation}
            onChange={handleChnage}
          />
        </div>

        <div className="">
          <label className=" text-sm text-gray-500 ">Gender</label>
          <input
            type="text"
            name="gender"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter Gender "
            required
            value={inputUser.gender}
            onChange={handleChnage}
          />
        </div>

        
        <div className="">
          <label className=" text-sm text-gray-500 ">Course</label>
          <input
            type="text"
            name="course"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter course "
            required
            value={inputUser.course}
            onChange={handleChnage}
          />
        </div>


   


        <div className="flex justify-center my-4">
          <button type="submit" className="px-4 py-2 bg-yellow-400 rounded-sm" >
            Update User
          </button>  
        </div>
      </form> 

{/* // BACK TO HOME BUTTON  */}
       <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

        <div style={{border:"1px solid red", height:"40px",width:"120px",display:"flex",alignItems:"center", justifyContent:"center",color:"white", background:"black", fontSize:"14px"}}>
        <Link to="/">Back to Home</Link>
        </div>
        </div>
  
    </div>
  );
};

export default UpdateUser;