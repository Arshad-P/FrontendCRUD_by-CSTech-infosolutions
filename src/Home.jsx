import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
 
   // from here this is POST method
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    mobileno: "",
    designation:"",
    gender:"",
    course:"",

  });

  // Input tags handling for POST
  const handleChangePOST = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };

  // POST
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(inputUser);
    const res = await axios.post("https://backendcstech-infosolutions.onrender.com/employees/addemp", inputUser);
    console.log(res);

    // using the fetchAllUser(); at handleSubmit POST added user will get immediately at a time at browser after clicking Add-User button., if won't used the added user will get after browser refreshing.
    fetchAllUser();
  };


  // GET all method
  const [userData, setUserData] = useState([]);

  const fetchAllUser = async () => {
  const result = await axios.get("https://backendcstech-infosolutions.onrender.com/employees/allemployees");
    console.log(result);
    setUserData(result.data);
  };
  useEffect(() => {
    fetchAllUser();
  },[]);



  // DELETE method
  const handleDelete = async (id) => {
    const res = await axios.delete(`https://backendcstech-infosolutions.onrender.com/employees/delete/${id}`);
    if (res.status === 200) {
      fetchAllUser();

//  Toastify Notification added
      toast.error('User Deleted Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }); 

    }
  };

  const ToastifyHandle = ()=>{

    toast.success('User Added Successfully!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (

    <div className="w-2/3 mx-auto mt-5">

      {/* creating form */}
      <form onSubmit={handleSubmit}>

      <h1 className="text-black-500 font-medium">
        WELCOME TO ADMIN PANEL
      </h1> <br />
      <h1 className="text-blue-500 font-medium">
        Task Given by CS Tech infosolutions Pvt. Ltd.
      </h1>
      <h5 className="text-blue-500 font-medium">CREATE-READ-UPDATE-DELETE</h5>
        <h1 className="text-orange-500 font-medium">
          Create User
        </h1>

        <div className="">
   <label className=" text-sm text-gray-500 ">
    Name
    </label>
   <input type="text" name="name"className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300" placeholder="Enter name"required value={inputUser.name} onChange={handleChangePOST}/>

        </div>

        <div className="">
      <label className=" text-sm text-gray-500 ">
        Email
      </label>
          <input
            type="text"
            name="email"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter email "
            required
            value={inputUser.email}
            onChange={handleChangePOST}
          />
        </div>


        <div className="">
          <label className=" text-sm text-gray-500 ">Mobile No 
          </label>
          <input
            type="Number"
            name="mobileno"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter mobile no "
            required
            value={inputUser.mobileno}
            onChange={handleChangePOST}
          />
        </div>


        <div className="">
      <label className=" text-sm text-gray-500 ">
        Designation
      </label>
          <input
            type="text"
            name="designation"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter Designation "
            required
            value={inputUser.designation}
            onChange={handleChangePOST}
          />
        </div>
        

        <div className="">
      <label className=" text-sm text-gray-500 ">
        Gender
      </label>
          <input
            type="text"
            name="gender"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter Designation "
            required
            value={inputUser.gender}
            onChange={handleChangePOST}
          />
        </div>


        <div className="">
      <label className=" text-sm text-gray-500 ">
        Course
      </label>
          <input
            type="text"
            name="course"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter Course "
            required
            value={inputUser.course}
            onChange={handleChangePOST}
          />
        </div>



      <div className="flex justify-center my-4">
{/* // submit = handleSubmit POST*/}
    <button type="submit" onClick={ToastifyHandle} className="px-4 py-2 bg-yellow-400 rounded-sm">
           Submit
    </button>

   <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>


{/* // users DETAILS  */}

        </div>
      </form>
      <p>    <FaAnglesRight /></p>

      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-lg text-center text-gray-500 ">
          <thead className="text-[17px] text-gray-700 uppercase bg-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                Unique Id.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile No
              </th>
              <th scope="col" className="px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-16 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
       
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>


            {/* // GET user data  */}
            {userData.map((item, i) => (
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >

         {/* // i = Index, index value assigned  */}
                  {i + 1}
                </th>
                  <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
           {item?.name}
         </th>
        <td className="px-6 py-4"> {item?.email}</td>
         <td className="px-6 py-4"> {item?.mobileno}</td>
         <td className="px-6 py-4"> {item?.designation}</td>
         <td className="px-6 py-4"> {item?.gender}</td>
         <td className="px-6 py-4"> {item?.course}</td>
     
                
            {/* Read, edit , delete  */}
               <td className="px-6 py-4">
                  <div className="flex gap-x-4 justify-center">
              <Link
                   to={`/readuser/${item._id}`}
                  className="font-medium text-green-600 dark:text-yellow-500 hover:underline"
                    >
                      Read
              </Link>
                 <Link
                    to={`/updateuser/${item._id}`}
                      className="font-medium text-yellow-400 dark:text-blue-500 hover:underline"
                    >
                      Edit
                </Link>

   {/* // DELETE  */}
   <button onClick={() => handleDelete(item._id)}
className="font-medium text-red-500  hover:underline" >
         Delete
    </button>

   {/* Toastify Notification */}
  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
                  </div>
                </td>
                
            
              </tr>
            ))}
          </tbody>
       
      <span className="iconArrowContainer">
       <FaAnglesRight />
      </span>
        </table>
      </div>
      <div>
             Fullstack CRUD application based on MERN 
            </div>
    </div>
  );
};
export default Home;