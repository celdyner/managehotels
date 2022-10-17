// // import { useRef, useState, useEffect } from "react";



// // import { Link } from "react-router-dom";
// // // import oops from './oops.png'
// // // import Modal from '../Modal/Modal'
// // import "./design.css"


// // const Login = () => {
// //   const emailRef = useRef();
  
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

 
// //   useEffect(() => {
// //     emailRef.current.focus();
// //   }, []);
// //   useEffect(() => {
    
// //   }, [email, password]);


// //   const hideModal = () => showSuccess(false);
// //   const [success, showSuccess] = useState(false);

// //   const hideFailure = () => showFailure(false);
// //   const [failure, showFailure] = useState(false);



// //   const submitForm = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post(
// //         LOGIN_URL,
// //         JSON.stringify({ email, password }),
// //         {
// //           headers: { "Content-Type": "application/json" },
// //           withCredentials: true,
// //         }
// //       );
    
// //       const accessToken = response?.data?.accessToken;
// //       const roles = response?.data?.roles;
// //       setAuth({ email, password, roles, accessToken });
// //       setEmail("");
// //       setPassword("");
// //       setSuccess(true);
// //     } catch (err) {
// //       if (!err?.response) {
// //         setErrMsg("No Server Response");
// //       } else if (err.response?.status === 400) {
// //         setErrMsg("Missing Username or Password");
// //       } else if (err.response?.status === 401) {
// //         setErrMsg("Unauthorized");
// //       } else {
// //         setErrMsg("Login Failed");
// //       }
// //       errRef.current.focus();
// //     }
// //   };

    
  
       
  
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await axios.post(
// // //         LOGIN_URL,
// // //         JSON.stringify({ email, password }),
// // //         {
// // //           headers: { "Content-Type": "application/json" },
// // //           withCredentials: true,
// // //         }
// // //       );
// // //       const accessToken = response?.data?.accessToken;
// // //       const roles = response?.data?.roles;
// // //       setAuth({ user, pwd, roles, accessToken });
// // //       setUser("");
// // //       setPwd("");
// // //       setSuccess(true);
// // //     } catch (err) {
// // //       if (!err?.response) {
// // //         setErrMsg("No Server Response");
// // //       } else if (err.response?.status === 400) {
// // //         setErrMsg("Missing Username or Password");
// // //       } else if (err.response?.status === 401) {
// // //         setErrMsg("Unauthorized");
// // //       } else {
// // //         setErrMsg("Login Failed");
// // //       }
// // //       errRef.current.focus();
// // //     }
// // //   };
// // // }




// // }





// //   return (
// //     <>
// //       {/* {success && (
// //           <Modal onClose={hideModal}>
// //             <img style={{ display: "block",
// //               marginLeft: "auto",
// //               marginRight: "auto",
// //               width:"50%"}}
// //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcf-Obg_nD_jv0WV0b9aJCZ0m-eWG-DqEPBw&usqp=CAU" alt="Success"></img>
// //             <h2 style={{ textAlign: "center" }}>Thank You</h2>
// //             <p style={{ textAlign: "center" }}>Your Have successfully Logged Into Your Account.</p>
           
// //             <button onClick={hideModal} style={{ backgroundColor: "#0F0BB7" , border:"none" ,
// //               color: "white",
// //               padding: "15px 32px",
// //               textAlign: "center",
// //               textDecoration: "none",
// //               display: "inline-block",
// //               fontSize: "16px",
// //               MarginLeft:"400px",
// //               float: "right",
// //               borderRadius: "10px" }}>
// //               OK
// //             </button>
// //           </Modal>
// //         )}

        
// //       {failure && (
// //           <Modal onClose={hideFailure}>
// //             <img style={{ display: "block",
// //               marginLeft: "auto",
// //               marginRight: "auto",
// //               width:"50%"}} 
// //               src={oops} alt="Failed"></img>
// //             <h2 style={{ textAlign: "center",backgroundColor: "red"  }} >OOPS!!</h2>
// //             <p  style={{ textAlign: "center" }} >Your Login was not Successful.</p>
// //             <p style={{ textAlign: "center" }} >Please Check your Internet connection and try again.</p>
// //             <button onClick={hideFailure} style={{ backgroundColor: "#0F0BB7",
// //               border:"none" ,
// //               color: "white",
// //               padding: "15px 32px",
// //               textAlign: "center",
// //               textDecoration: "none",
// //               display: "inline-block",
// //               fontSize: "16px",
// //               MarginLeft:"400px",
// //               float: "right",
// //               borderRadius: "10px"
              
// //               }} >
// //               OK
// //             </button>
// //           </Modal>
// //         )}
// //  */}


// //       <section className='forms top'>
// //         <div className='container'>
// //           <div className='sign-box'>
// //             <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
// //             <form action='' onSubmit={submitForm}>
// //               <input type='text' name='email' ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
// //               <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

// //               <div className='flex_space'>
// //                 <div className='flex'>
// //                   <input type='checkbox' />
// //                   <label>Remember Me</label>
// //                 </div>
// //                 <div className='flex'>
// //                   <span>I forgot my password</span>
// //                 </div>
// //               </div>

// //               <button type='submit' className='primary-btn'>
// //                 Sign In
// //               </button>
// //               <p>
// //                 Don't have account? <Link to='/sign-up'>Signup!</Link>
// //               </p>
// //             </form>
// //           </div>
// //         </div>
// //       </section>

// //       {/* <section className='show-data'>
// //         {recValue.map((cureentValue) => {
// //           return (
// //             <>
// //               <div className='sign-box'>
// //                 <h1>Sign-In Successfully</h1>
// //                 <h3>
// //                   Email : <p>{cureentValue.email}</p>
// //                 </h3>
// //                 <h3>
// //                   Password : <p>{cureentValue.password}</p>
// //                 </h3>
// //               </div>
// //             </>
// //           )
// //         })}
// //       </section> */}
// //     </>
// //   )
    
// //     }
// // export default Login




// import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import "./design.css"

// const Login = () => {

 
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const [recValue, setRecValue] = useState([])
//   const submitForm = (e) => {
//     e.preventDefault()
//     const newValue = { email: email, password: password }

//     setRecValue([...recValue, newValue])
//     console.log(newValue)

//     setEmail("")
//     setPassword("")
//   }

//   const Logout = () => {
//     console.log(Logout)
//   }
//   return (
//     <>
    
//       <section className='forms top'>
//         <div className='container'>
//           <div className='sign-box'>
//             <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
//             <form action='' onSubmit={submitForm}>
//               <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
//               <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

//               <div className='flex_space'>
//                 <div className='flex'>
//                   <input type='checkbox' />
//                   <label>Remember Me</label>
//                 </div>
//                 <div className='flex'>
//                   <span>I forgot my password</span>
//                 </div>
//               </div>

//               <button type='submit' className='primary-btn'>
//                 Sign In
//               </button>
//               <p>
//                 Don't have account? <Link to='/register'>Signup!</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </section>

//       <section className='show-data'>
//         {recValue.map((cureentValue) => {
//           return (
//             <>
//               <div className='sign-box'>
//                 <h1>Sign-In Successfully</h1>
//                 <h3>
//                   Email : <p>{cureentValue.email}</p>
//                 </h3>
//                 <h3>
//                   Password : <p>{cureentValue.password}</p>
//                 </h3>
//               </div>
//             </>
//           )
//         })}
//       </section>
//     </>
//   )
// }

// export default Login
