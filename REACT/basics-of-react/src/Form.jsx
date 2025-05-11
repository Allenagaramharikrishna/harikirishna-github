// import React, { Component } from "react";

// export default class Form extends Component {
//   state = {
//     firstName: "",
//     lastName: "",
//     Email: "",
//     phone: "",
//     firstNameErr: "",
//     emailErr: "",
//     phoneErr: "",
//   };
//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   validateForm = () => {
//     let firstNameErr = "";
//     let emailErr = "";
//     let phoneErr = "";

//     if (this.state.firstName.length < 4) {
//       firstNameErr = "first name should be atleast 4 characters";
//     }
//     if (!this.state.email.includes("@")) {
//       emailErr = " Enter valid Email";
//     }
//     if (this.state.phone.length !== 10) {
//       phoneErr = "Enter a valid number";
//     }
//     if (firstNameErr || emailErr || phoneErr) {
//       this.setState({ firstNameErr, emailErr, phoneErr });
//       return false;
//     } else {
//       this.setState({ firstNameErr, emailErr, phoneErr });
//       return true;
//     }
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const valid = this.validateForm();
//     if (valid) {
//       console.log(this.state);
//       console.log("form submitted");
//     }
//   };
//   render() {
//     return (
//       <div>
//         <div>
//           <img
//             src="https://10000coders.co/assets/10000coders-logo.png?v=1.0"
//             alt=""
//           />
//         </div>
//         <div class="container">
//           <h1>Ready to get a well-paying IT job? Awesome!</h1>
//           <p>
//             Attend our job-guaranteed, 6-month full-stack developer training
//             program. We will refund every single rupee back to you, if you do
//             not get a job in 6 months.
//           </p>
//         </div>
//         <form id="form" method="get" action="" target="_blank">
//           <div class="field">
//             <label for="fullName">Full Name *</label>
//             <input
//               type="text"
//               name="fullname"
//               id="fullName"
//               value={this.state.Name}
//               onChange={this.handlechange}
//             />
//             <h6>Enter your full Name</h6>
//             <p id="nameErr"></p>
//           </div>
//           <div class="field">
//             <label for="email">E-mail * </label>
//             <input
//               type="text"
//               name="email"
//               id="email"
//               value={this.state.Email}
//               onChange={this.handlechange}
//             />
//             <h6>
//               Use the same email that you have used while signing up for the
//               boot camp
//             </h6>
//             <p id="emailErr"></p>
//           </div>
//           <div class="field">
//             <label for="phone">Phone *</label>
//             <input
//               type="tel"
//               name="phone"
//               id="phone"
//               value={this.state.phone}
//               onChange={this.handlechange}
//             />
//             <h6>Your active mobile number</h6>
//             <p id="phoneErr"></p>
//           </div>

//           <div class="field">
//             <lable>Degree Details *</lable>
//             <select id="details">
//               <option>--select--</option>
//               <option>MSC</option>
//               <option>BE/BTECH/</option>
//               <option>BSC/BCOM</option>
//               <option>OTHER</option>
//               value={this.state.Degree}
//               onChange={this.handlechange}
//             </select>
//             <p id="detailsErr"></p>
//           </div>
//           <div class="field">
//             <lable>Passed Out *</lable>
//             <select id="passed">
//               <option>--select--</option>
//               <option>2022</option>
//               <option>2021</option>
//               <option>2020</option>
//             </select>
//             <p id="passedErr"></p>
//           </div>
//           <div class="field">
//             <lable>Present Status *</lable>
//             <select id="present">
//               <option>--select--</option>
//               <option>Studying</option>
//               <option>Looking for Job</option>
//               <option>OTHER</option>
//               value={this.state.Present}
//               onChange={this.handlechange}
//             </select>
//             <p id="presentErr"></p>
//           </div>
//           <button className="btn btn-info">submit</button>
//         </form>
//       </div>
//     );
//   }
// }
