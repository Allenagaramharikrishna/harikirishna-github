// import React, { Component } from "react";

// export default class Content extends Component {
//   render() {
//     return (
//       <div>
//         <div class="section1">
//           <h1>IS THIS YOU?</h1>
//           <ul class="list">
//             <li>
//               Couldn’t stand seeing yourself as a failure in front of your
//               parents
//             </li>
//             <li>
//               Avoiding your friends as they would boast about their new jobs
//             </li>
//             <li>
//               Fearing you will end in a poorly-paid graduate job that you’ll
//               never like
//             </li>
//             <li>
//               Wondering how you will compete in the off-campus fresher
//               recruitment race
//             </li>
//             <li>Getting angry when your relatives show up</li>
//             <li>Constantly plagued by the question, “What will I do next?”</li>
//             <h2>Because</h2>
//             <li>You didn’t get placed in the campus.</li>
//             <li>Your college doesn’t offer campus recruitment.</li>
//             <li>You’re being rejected in off-campus interviews.</li>
//             <li>
//               You want to become a software engineer, but you’re not a computer
//               science graduate.
//             </li>
//             <li>You’re clueless how to get a well-paying IT job off campus.</li>
//           </ul>
//           <h2>
//             If{" "}
//             <span>
//               {" "}
//               so, it’s time you put an end to your career worries <br /> and
//               sleepless nights. Once and forever.
//             </span>
//           </h2>
//         </div>
//         <div class="section2">
//           <p>From the founders of ENGRIP</p>
//           <h2>
//             Presenting India’s first-of-its-kind & only
//             <br />
//             intensive, immersive, & intimate hands-on
//             <br />
//             ‘FULL STACK DEVELOPER’
//             <br />
//             Online Training Program That
//             <br />
//             <span>
//               {" "}
//               GUARANTEES YOU
//               <br />
//               ‘A MINIMUM-4 LAKH-PER-ANNUM-EARNING-IT-JOB’
//             </span>
//           </h2>
//           <p>
//             It doesn’t matter whether you know to code or not. It doesn’t matter
//             whether you did computer science or not. It doesn’t matter whether
//             you graduated from reputed colleges or not. Within the next 7
//             months, you will be earning a fat pay-check from a top IT company.
//             GUARANTEED.
//           </p>
//           <h4>
//             The best part is you need to pay only a small part of the total
//             course fee, in simple EMIs, to get a high-paying job. You can pay
//             the balance money only if you get the job within the 7 months. Else,
//             we will refund every rupee back. Promise!
//           </h4>
//           <p>
//             Sounds too good to be true!?
//             <br />
//             Yep. It certainly is.
//             <br />
//             Ain’t it?
//           </p>
//           <button onclick="manipulate()">Yes! I Want To Join</button>
//           <p>So I Can Get A Well-Paying IT Job In 7 Months</p>
//         </div>
//         <div>
//           <h1 class="heading">
//             YOUR UNFAIR ADVANTAGES TO EARN A MINIMUM 4 LAKH PER ANNUM EVEN AS A
//             FRESHER!
//           </h1>
//           <div class="main-card">
//             <div class="card">
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA6AEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAYBBAUDAgf/xAAtEAABAwMCBQQBBAMAAAAAAAABAgMEAAURBhITITFBURQiMoFCFSMzclJhY//EABgBAAMBAQAAAAAAAAAAAAAAAAIDBAEA/8QAJhEAAgIBAwMDBQAAAAAAAAAAAAECESEDMUESE1GRsfAyYXHR8f/aAAwDAQACEQMRAD8A+20UVylSGokZ2S+ra00grWfAFbuYdVEJGVEADuTUJUFDKSCPINJEpm839+JcJ1pQ5ZzjbbzJ2rKSf5FjGFcvwJrxMtjKLrbYNknLYs9138ZlhZ24bGf2z+OehxVC0Fs3kV3Xwh6StC87FJVjrg5xU0kO2d5u4sSdGQYzDTI3OSDJIbk8yFNlIByeXyPMGmaxXX9ViLW5HVGkMuFqQwo5Lax1Ge47g+KCenStMKM7dM0aKKKUGFLmpQ7c7rBsAeWzGlNOPSVIOFLQnA2A9sk8/wDQpjpbt6EzdZ3N+Uol23tttRW88kIWMqXjvkjH1TdLDcvCA1MpLyUIcZq2mHP0uuY5BXK9LKiFS3E43bCsBWSkpIyT0xRqKXcWdX2VEe1hxKC9wFB4AOZQM58Y61FwROg6hVD0vJdbcluh2Uy7EK2Gc/JwKOACf8QTk+Ksy4r8e/6cZkzXZLx9UVPqASclHYDoB2qi1fU84e93s9xNOqWMr8bli7x5V0uzducVJiWtqNx5K2CUcZRJHD3jsMZIHPmKzrYiJZ51pk2F102u8LKFsOLUr3bSUuJ3cx8cGuV5bvMOS1b7pdpLlmkJ2mSxD3PZzjhrUnOMj8gPPTrWlrCHHg6eZlRP2HrWUKhbTjByEhGO4IOPusWEo3h+n9v0OfMq2+ewz0VCCVISVDCiASPBqajKQpMVbGrjrK6CTOmQp6W2jFcjO7CWMHOAQQr3ZzkU51g39iXGukG9woy5ZjNrZfjt/NTasHKR3II6d6boyptLlC9RWk/Bwuib9KclJZdkxIMUBKPTpQqTMOBkgq9qR9eaxp+pbcm+2NyS7IZXDD6X25TeHQSgAcgOeT0xyJqxCdYTMbuGnG5zajMSzcbc8F7gFnm4UEnaRnOfFTqiRbE63sKpIQpbBXxnMZDW4Yb3Ht7umapgl1dLXD+z25Eybq0+V7lhD1+eMi6WpU8tpVuFuuDSEh5P/MjCkH+33VfWtsaMFVwfmz1THHG/Qw1ujY28SMBKUjmfOSe9XtTKMieWri6/GscaL6iQ4glAfUSQG9w7ADJA65FcIDa7xNtXo7bKgWm2HioMpBQtxW0hKUpJJwM5yaGLqp7V8q/P7Nau4jajdsTvxuwN2PNTRRUZSFFFFccZV009brm+JEhtxEgDbxo7qmlkeCpJBIr3FsFriwnobcRC2X/5uKStTv8AYnmfutKii7k6q8A9MbujCY0jZ2X0Olp97hnc22/JW42g9iEqJAxW7RRXSnKX1OzVFLZBRRRQmn//2Q==" />
//               <h3>Become proficient in on-trend and in-demand skills</h3>
//               <p>
//                 Discover the essential aspects of coding and apply your new
//                 coding skills to solve real-world problems. You can learn,
//                 practise, and implement programs, tools, and techniques that are
//                 currently in demand in the IT industry. Mastering these skills
//                 will make you a prized candidate in the market, giving you a
//                 competitive edge over your peers.
//               </p>
//             </div>
//             <div class="card">
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAuAEADASIAAhEBAxEB/8QAGwAAAwACAwAAAAAAAAAAAAAABAUGAAMBAgf/xAA6EAABAwMCAgUICAcAAAAAAAABAgMEAAURBhIhMRMUQVFhFSI2UnF0kbIjVXWUobTR0iUyNVaBleP/xAAYAQADAQEAAAAAAAAAAAAAAAAAAwQCAf/EACgRAAEDAQUJAQEAAAAAAAAAAAEAAhESAyExYfAyQUJRcZGhseGBkv/aAAwDAQACEQMRAD8A9s2p9UfCs2p9UfCualL3frgxcn48NxtpDLiGUp6ouQ46tSN/AJUMACmMYXmAsOcGiSuFzb1NdkOwn22I7bjiENpgdMfMIHFW9PE9gx2UUxE1E7v/AIzFb2LKfPteN3iPpOVL9KWq2z7VInXaFHckGS8XXXWdh4KPMEnHsrsW9Muw48mFZWX0yZIYj5a2dL3qTnmkAE58KpdAJaBhkEkXiSccymXk/UX17B/1v/SjbDMXcLY2/IQ2HdykL2DzSUqKSR4HFLbZbdMXNL3VrZGDjDhbeacZ2rbV3EVOWW63KCx1SI60ywl98MIdt69itqlHaHArHIHsrNFYI3jKPS7VSQdxzn2vRdqfVHwrNqfVHwrRbpXXrfFlhOzp2UObc8twBx+NEVKRBhPBm9ZUW96ZH7Ta/KmrSot70yP2m1+VNPsOLolWvD1TbTzyWbfLUtDiwbg8nCEFZ4uY5Ds76AD9mhXFLrNsvKTHU6Ett294tblcFKT5vhwxw4nvpVOuMOIy9AlToESWic84W5y3UZQokgjYRnPwoDypB+utPfeZX76obZEkm+9KL7gFZWa521paIUC2XOOHVklTlvdQkqPElS1D8SaRK/pNr9+l/K7WizXqyRpqXp96s+xAyjq8h8q3eIUogiiFpULPZ1KSpIclyXE7hglKkOkHHsNFFLt/70KC6RrmFVab9HbX7o18gpjS7Tfo7a/dGvkFMaiftFUM2QsqBkS7fLvdydM6XGU3MQth+PGU4CpLWxQ/lIODkVfUjRYpkVTqbbeXo0dbqnAyWG1hBUcqwSM4ySf80yxc1szrwVm0aTEJMbm2kEq1TdUpHEqVbwAPaejo1SHwWej1VIcS4cFaer4QMZycjl2cM86ONrvBGDqFwj3Rr9KVnQ7RJJfhEnmfJMf9tNDrPmO3wLEP5efq6ypaYz5ZXq2c44ACQxFQ7tzyyUoOKDlSYbu16TernMUwlammlwCkFRQU9iAe2nULT06A0WoN3TGbJ3FDMBlAJ78AUR5LvP8AcTv3Rr9KK2DA6/lFLjiNd1s0nIak6btymVEhthDSwQQUrSAFAg9oIIptQdot6LZCTGQ4t07lOOOrxla1ElSjjgMkngKMqZ5BcSME1gIaAV//2Q==" />
//               <h3>Get trained like an IT professional</h3>
//               <p>
//                 Nurture the mindset of a developer. You will be given daily,
//                 weekly, and monthly product building challenges that will enrich
//                 your learning experience. Our modules are carefully designed in
//                 such a way that right from day one, you will experience learning
//                 as if you are working in a real IT company and get trained as if
//                 you’re on a real IT job.
//               </p>
//             </div>
//             <div class="card">
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAhAEADASIAAhEBAxEB/8QAGgABAQACAwAAAAAAAAAAAAAAAAUEBgIDB//EACsQAAEEAgIABAQHAAAAAAAAAAEAAgMEBREGEhMhMUEUFTJRFiI2QnShsf/EABgBAQEBAQEAAAAAAAAAAAAAAAAEAQID/8QAIxEAAgIBAwMFAAAAAAAAAAAAAAECESEDQfASIjFRYXHB0f/aAAwDAQACEQMRAD8A9tREWmBEWNfyNHGxtkyFyvVY46a6eUMBP2G/VEm3SDdEDn1x9SriwLlupDNfbHPJT34nTo86GgSfMD2UrhduWblN6I5HNWKbYh8KLjH9Hjy7Fxc1unA+g19/Mruiiy3LyzJVctVqVal+Q1GNq+Lvp2YHl3Yb2CT9vMKnRt5ijyKti8rdr3o7deSWOSOv4Loywt2COx2D2/pW4jpuG9O+V9k/mXVtz3NkREURQEREBN5BlflGMktMh8eXsyOOLt17Pe4Nbs+w2R5rXakd27zxkfIKVLtHjC6JsbzKzzk0T+YDR9lBmwWVfWjdLxe1NlmXBPJeNyM+IBJ21ov9OvkB6BXTaz55O3L/AIWueGKXw3h/FQb337b+r0Vy04wi1Fq85tfpM5OTVrGOeCjwBjY8JYjjaGsZkbTWtaNAASu0AuWS/XeE/hWv9jUvj1rP4mlNXk4tckMlqacFtqAaD3lwH1e21mVfm2S5XQv28LPQr1a00bnyzxv7F5brQa4n9pXEo1qSlarO69DtPtS+DakRFIewREQBERAEREAREQH/2Q==" />
//               <h3>Accelerate your career growth</h3>
//               <p>
//                 From coding to communication, from project management to
//                 interview attending skills, you will learn and do everything it
//                 takes to become a highly valued software developer. What you
//                 will learn and what you will do at the job will be EXACTLY the
//                 same. So you work and talk like a pro right from day one in your
//                 job.
//               </p>
//             </div>
//           </div>
//           <div class="main-card">
//             <div class="card">
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA+AEADASIAAhEBAxEB/8QAGgABAQEAAwEAAAAAAAAAAAAAAAYFAgMEB//EACgQAAICAQQBAwQDAQAAAAAAAAECAwQABRESITEGQVETIjJhI1Jxgf/EABgBAAMBAQAAAAAAAAAAAAAAAAABAwIE/8QAHREAAwEBAAIDAAAAAAAAAAAAAAECEQMSITFBof/aAAwDAQACEQMRAD8A+24xjGIYxjABjGMAGMYwAYxjABjOi7cgpQ/WsvxXfiAASzH2AA7J/Qyfu+onuVpo9PhljcOic/qpy7kVSOuQUkN79j4zc86r4M1SRT4ySSDWYSFtz2yXIVAL0abtsSR4Pt3/AMzU0CS4LV6tdM38f02RZpVkYcgd/uAHXXjHXPFuiV68w2cYxkzYxjOE80deGSadwkUalnZvAA8nACP17UK9jVLI+mLCU+MUkZnZSPBfpUbipBALMQDx28bk7NyWG56dq2dPiY1mavPGkcfYjDo3Sj4HsMnNR9TW6d/Uo6GnzFLPF2NjZZEYxqPsTfeQ8eJ49Eb99eKzQbdeejHBXWWM1o0QxzABwvH7T1uCCB5HXn4OdXSXMy8/SENVTWmRPV0meWwXa8YpxKXjNKU/dIAGbcp8DYb77AnbrrNPSNnv3ZYo5lgKQxo0sbKTxB3/ACAJ8jvM/wBS3xaePTaJEs4lHLbsLIBui/6Ds5+FUk+RvQ1oVrVooE/GJFQf4BtmLbULfs1KXl6OzGMZAqM8GvRyTaRZSGNpHKjZFG5bYg7DPfjGnj0GtWEU1SK1Yrz39AsTym5O9h5KisXiIkEYJ99gUG3tt+s79P0y1qBmSxFYposaKrSx/kFeXZQAewFZfPX6yuxlX3bRNckjO0vRqmmAGINJKF4CRwAVX+qhQFUfoAb+++aOMZJ06es2kl6QxjGIZ//Z" />
//               <h3>Turn into a well-rounded software developer</h3>
//               <p>
//                 You will be trained to become a full-stack web developer. You
//                 will imbibe critical computer science foundations that will turn
//                 you from a learner to Ready-to-deploy software engineer.
//                 Besides, this course opens up 3 career options for you:
//                 Front-end developer, Back-end developer, and Design Engineer.
//               </p>
//             </div>
//             <div class="card">
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAdAEADASIAAhEBAxEB/8QAGwABAQEAAgMAAAAAAAAAAAAAAAYFAQIDBAf/xAArEAACAQMEAQEHBQAAAAAAAAABAgMABBEFEiExQVEGExQiMnGhFSNhYoH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIDESH/2gAMAwEAAhEDEQA/APttKUrTDmp9faXeC0emXjqO2SJ3A4z2qkdEea0r9pWuLO3jmeESu29owN2ApOOQfNTFrNqdpZRx2Ch45UVmMkqrzsUcfKfSmzhNeh3TT8NOT2pRFc/p9w21C/AOCAu7hsY6/mqEHIB9agJYb1YJzJbBI1tnBIvC2AIyOtoBqwsDLHeXFq88kyJFFIrSY3AtvBGQBx8o/NbrnKXUZFNv09+lKUAopSlRGdqkwt73TpDHLJ+442xoWP0HxUp7i4tI2ebTotvBMk6OOlA72jwKt7i2huVVZ41cKdy57U9ZB8cE1nSaGxunmhnRI2UKImR2C4zz9Y5OfwKfPSZXGHUtslnhuL60cW2nwMGQhZIVc4JGRztPqP8AKq9OmE+q3jCOWPEEAxKhU9yeDXRdDf4mOWW4jZEBDRqjqGzj+55GOPua0be1gtt3uIwm85Y9k/c1aaTS4imGn1nmpSlAIf/Z" />

//               <h3>Build a portfolio with 3 real-time projects</h3>
//               <p>
//                 You will work on 3 real-time projects. So you can build products
//                 and production-ready applications and demonstrate your skills to
//                 your future employer. You will gain hands-on experience to solve
//                 problems, put your coding knowledge into action, coordinate with
//                 teams, attend online meetings, and get things done on time.
//               </p>
//             </div>
//             <div class="card">
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAuAD8DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAUGBAEH/8QALBAAAgEDAwIFAgcAAAAAAAAAAQIDAAQRBRIhMUETFCIyUQZhNFVxdIGUs//EABcBAQEBAQAAAAAAAAAAAAAAAAEDAAL/xAAgEQADAQACAQUBAAAAAAAAAAAAARECAzFBEiJxkaHw/9oADAMBAAIRAxEAPwD7bSlKQFKVIju9S1INLpnlYLUMVSW4RpDNgkZCqy4Xjg5OR2FKzQbhXpXBY3s73T2V/CkVyqCRTG5ZJUzjK5AORxkdsjk5rvrNNdmTopSlAilKVjCshodnvhvxrD3EY09zFFBHM8fhwr6lY7W9RIPu77R960eq3E1vbKbXwxNJKkStIpKruYDJAIz+mRWZ1TTpGh1G/uIpNWMkDJHc28qwtEqhgUK5XKhtx6nPxxV+LpqykuTv4OjRoNVhvmu3sZJLPwsWKPcqZI0chmDkk56KBzwBVvzl/wDlT/2Erx7lbTQ453EhCwIAI8biSAABnjOSOtc30yZIYJbC5F4LiAh282ysxV84IKs3Hpbv1z2xRp+pPTX99jn2xFCwvPOJKWheGSKQxyRuQSCAD1BwRgg/zXTU/SfxGqfvD/mlUKlpRneehSlKBIv1NdPBHaJFEHczLKGdtqDYykgnBwSCccdqgyzXKsEs9QnitnkdpIWmhZQrbjhcxE+4jqTxmtzTJ+arjlWVIcaxXaYEl2NoMhUiWEyRC/kKb0cMdqnIxxgCqE99HPqjXbx4RoFjKx3rRkkMSD6cZ9x61rsn5pk/NdPmvj9Bcc8kzQJIJbOQ29u8KiZg29y/iNwS248t1xn7Y7VSpSo6ddO0oj//2Q==" />
//               <h3>Be mentored by industry experts</h3>
//               <p>
//                 You will be mentored by IT professionals who have/had REAL
//                 working experience in the world’s best IT companies. So you will
//                 not only gain ‘insider information’ of the IT industry insights,
//                 but also first-hand working experience with IT professionals.
//               </p>
//             </div>
//           </div>
//           <div class="card1">
//             <div class="card-1">
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA4AEADASIAAhEBAxEB/8QAGgABAQEBAAMAAAAAAAAAAAAAAAUEAwEGB//EADMQAAEEAQIEAQkJAQAAAAAAAAEAAgMEBRESBiExQVETIjI1YnF0gbIVNlJhcnOhscHw/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAdEQEBAAICAwEAAAAAAAAAAAABAAIRITEiQcES/9oADAMBAAIRAxEAPwD7aiIrSIi427UFKtJZtStihjGrnO7f94IG5dkUvGZuO9YNaetPSsEb4orIAMsf4m/6Oo7hVFcsXF00EeSIiKViIiSzZG/Xx1V1m2/awEAADVz3Ho1oHMk9gFOp0bGQsx5HMs2bDurUtdWwe0/s6T+G9B3Jy4yC3NxRYlzDopJYazJK8UepZX3OcDtJ6uIaNXae7QL2Ra5eHB3cHly9WTJ46DJQCOfc17Hb4pozo+J3ZzT2P99CsdDIzwWmY3MbW2na+QnaNGWgO48H+LfmOSrgg9CCp/ENeKzhbjZ2BwZE6RvYtc0ahwPYgjqucXfi9VyNclQRTOHTkfs2IZOWOd2xhjnbydI0tB84dA73devJU1zkadVHZuIiKVpMH3qufBQ/XIvHEO6Z2Ool7mw27Pk5th0LmBjnFuo5jXaAfy1WazfrY7iexJce+NklOJrHCJzgSHP1HIHxCzZXPY2a9iZIppHNhtOfIRXk80eTeNfR8SF6DDJyEPXyycgE37+3e3iqOFs0LWJrR03PtMglbA3a2VjuWjgOR05EHqPmVWzPqe98PJ9JUPN57GzspCGaR+y7FI7SvJyaDzPorRlOIsXLjLccdiRz3wva0CvJzJB9lHHN/KjBxNg1fF+rKf7Ef0haVmxgIxtQEEEQMBB/SFpWGXbaHUREUrEREkRESRERJf/Z" />

//               <h3>Learn from wherever you are!</h3>
//               <p>
//                 You can attend the classes from the comfort of your home,
//                 smacking mother’s food. No need to move to a new city. No need
//                 to worry about monthly expenses. Our online classes are live,
//                 interactive, and fun.
//               </p>
//             </div>
//             <div class="card-1">
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA7AEADASIAAhEBAxEB/8QAGwABAAMAAwEAAAAAAAAAAAAAAAMFBgECBAf/xAAmEAACAQMEAgIDAQEAAAAAAAABAgMABBEFEhMhMUFRYQYUImJx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBBAP/xAAaEQADAQEBAQAAAAAAAAAAAAAAAQIRMSED/9oADAMBAAIRAxEAPwD7bSlK0wUpSgFKUoBSlKAUpSgFKrtX1H9NOOHHOV3l3UlIkyAXbsZ+lByT191XRWep3q8k/Lsc7jy3LwZPrEaZ2jHjLZ+RnxajVrJde4jRUrN82q6dOvLuIkIGyR+ZJWz4SQ7TGxHpl2kgAHJNX9pcx3cCzQltjEj+lIIIJBBB9ggilQ59CrSWlKVBQpSlAZ+GI3muu0iOyLO7ZbJxxKgRT6A3Ozge8A159ROvDUrsW37Rg5Bw7Au3Zx/3597sY+8/dQa9pl6dWMqvCkdxOoSUtICMx8YUkAgdtkZ8k+RVVb6LezNcKt5Y8ohWIwtM6FCHydykbsHz6777z12TM4q1cOdt7mGqtotQu4FtdQhY20kLB3YAPkk7M99EAAnryy/Brj8beQGeOZWV2jinYd7Qzqd3XpiyliP9A+SazFtpDx2t4Lq+t7yaPkfkBL8QYABNwUjOc4HZ78Vq/wAZspbOzmM0QjaadpQMAHaT1kYGCBgYPx8dVH0SmX6VDbaLelKVzHsKUpQHSeGK4haGeNZI3GGRhkGqubQY3G2O6lWIHKQyRRSpGPYXcpPvI76/51VvSqVOeGOU+ldb6NbxyLJcPJdshBi5wuIsd/yqqAO+84z476FWND4qCRj81jpvoSS4T5FMivJvb5pvb5rDT//Z" />
//               <h3>Job Guarantee. Or, complete refund!</h3>
//               <p>
//                 Within 3 months from completing the training program, you will
//                 secure an IT job that pays you anywhere between 4-5 lakhs per
//                 annum. If not, the training is on the house. Yep! We’ll refund
//                 every single rupee you of your course fee. So you have
//                 absolutely nothing to lose.
//               </p>
//             </div>
//           </div>
//           <div class="card-bottom">
//             <p>Are You in?</p>
//             <button>Yes! I Want To Join</button>
//             <p>So I Can Get A Well-Paying IT Job In 7 Months</p>
//           </div>
//         </div>
//         <div class="section3">
//           <h1>WHAT YOU'LL LEARN?</h1>
//           <h3>THE FULL STACK DEVELOPER 7 MONTHS COURSE MODULES</h3>
//           <div class="border-main">
//             <div class="border-card">
//               <h5>Weeks 1 - 5</h5>
//               <h2>Web Foundation</h2>
//               <h3>HTML,CSS,Bootstrap, javascript, Git</h3>
//               <h4>Schedule</h4>
//               <h3>
//                 {" "}
//                 LIVE CLASS : 7AM to 9AM IST
//                 <br />
//                 ASSIGNMENTS & MONITORING CALLS:10AM TO 5 PM
//                 <br />
//                 Monday to Saturday
//               </h3>
//             </div>
//             <div class="border-card">
//               <h5>Weeks 6 - 10</h5>
//               <h2>Frondtend development</h2>
//               <h3>jQuery, AJAX, React Js, Redux.</h3>
//               <h4>Schedule</h4>
//               <h3>
//                 {" "}
//                 LIVE CLASS : 7AM to 9AM IST
//                 <br />
//                 ASSIGNMENTS & MONITORING CALLS:10AM TO 5 PM
//                 <br />
//                 Monday to Saturday
//               </h3>
//             </div>
//             <div class="border-card">
//               <h5>Weeks 11 - 15</h5>
//               <h2>Backend Debelopment</h2>
//               <h3>Node.js, Express, MongoDB, OAuth</h3>
//               <h4>Schedule</h4>
//               <h3>
//                 {" "}
//                 LIVE CLASS : 7AM to 9AM IST
//                 <br />
//                 ASSIGNMENTS & MONITORING CALLS:10AM TO 5 PM
//                 <br />
//                 Monday to Saturday
//               </h3>
//             </div>
//           </div>
//           <div class="border-card1">
//             <div class="border-card">
//               <h5>Weeks 16 - 25</h5>
//               <h2>Internship Program</h2>
//               <h3>
//                 Students will assigned as interns in startups to gain real time
//                 exposure on what they are trained.
//               </h3>
//               <h4>Schedule: 10AM to 7PM IST</h4>
//               <h5>Monday to Saturday</h5>
//             </div>
//             <div class="border-card">
//               <h5>Weeks 25 - 30</h5>
//               <h2>Career Launch</h2>
//               <h3>
//                 Profile building, Mock Interviews and profiles will be sent to
//                 partnered companies.
//               </h3>
//               <h4>Schedule: 10AM to 7PM IST</h4>
//               <h5>Monday to Saturday</h5>
//             </div>
//           </div>
//           <h1>MEET YOUR MENTORS</h1>
//           <div>
//             <div class="mentor-section">
//               <div>
//                 <img
//                   class="mentor-image"
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRD8S8I2I-hb8p-xxR9mU-44F4mTUmWEm1Xw&usqp=CAU"
//                 />
//               </div>
//               <div class="content">
//                 <h3>Anil Kumar Ghorakavi</h3>
//                 <h4>Founder of EnGrip</h4>
//                 <p>
//                   As an entrepreneur who’s constantly finding ways to help
//                   people reach greater heights in their
//                   <br /> career and an Ex-Oracle guy, I know EXACTLY what it
//                   takes to launch a career in the IT industry.
//                   <br /> The truth is your background or your degrees don’t
//                   matter! What matters is your skills, only your skills!
//                 </p>
//               </div>
//             </div>
//             <div class="mentor-section">
//               <div>
//                 <img
//                   class="mentor-image"
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGdrwSMxlAx_TZ9fEua6Rdykf0kfANNx8mA&usqp=CAU"
//                 />
//               </div>
//               <div class="content">
//                 <h3>Praveen Kumar</h3>
//                 <h4>Program Advisor</h4>
//                 <p />
//                 As an entrepreneur who’s constantly finding ways to help people
//                 reach greater heights in their
//                 <br /> career and an Ex-Oracle guy, I know EXACTLY what it takes
//                 to launch a career in the IT industry.
//                 <br /> The truth is your background or your degrees don’t
//                 matter! What matters is your skills, only your skills!
//                 <p />
//               </div>
//             </div>
//             <div class="mentor-section">
//               <div>
//                 <img
//                   class="mentor-image"
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1MiLVSYW_wHnlDlH--leoLNU7-5R15hVyg&usqp=CAU"
//                 />
//               </div>
//               <div class="content">
//                 <h3>Pavan Kumar</h3>
//                 <h4>Technical Adivisor</h4>
//                 <p />
//                 As an entrepreneur who’s constantly finding ways to help people
//                 reach greater heights in their
//                 <br /> career and an Ex-Oracle guy, I know EXACTLY what it takes
//                 to launch a career in the IT industry.
//                 <br /> The truth is your background or your degrees don’t
//                 matter! What matters is your skills, only your skills!
//                 <p />
//               </div>
//             </div>
//           </div>
//           <div class="content2">
//             <h1>MEET SOME OF YOUR POTENTIAL EMPLOYERS</h1>
//             <p>
//               From established start-ups to top tech giants, we have partnered
//               with some of the most sought after IT companies in India. So you
//               can get the exclusive privilege to work with the game-changers of
//               the IT industry, build awesome products, make a real difference,
//               and earn insanely well.
//             </p>
//             <h2>Of course, only after successfully completing our course! :</h2>
//           </div>
//           <div class="image">
//             <img src="https://www.10000coders.co/assets/zenoti.png?v=1.2" />
//             <img src="https://www.10000coders.co/assets/yellow.png?v=1.2" />
//             <img src="https://www.10000coders.co/assets/mutualmobile.png?v=1.2" />
//             <img src="https://www.10000coders.co/assets/MAQSoftware.png" />
//           </div>
//         </div>
//         <div>
//           <div class="work-section">
//             <h1>HOW IT WORKS</h1>
//             <p>
//               We want to invest our time and efforts only with people who are
//               dead serious about getting an IT job. Since we are taking the
//               financial risk and guaranteeing you a well-paying IT job, we
//               expect our aspiring coders to meet certain criteria. So you will
//               have to go through a rigorous selection process.
//             </p>
//             <p>
//               But{" "}
//               <strong>
//                 don’t worry! We don’t expect any coding knowledge from you. All
//                 we do expect is your complete dedication and involvement.
//               </strong>{" "}
//               If you have 60% aggregate through out your academics and simply
//               follow what we ask you to do, you will be easily qualified for our
//               program.
//             </p>
//             <p>
//               And <span>once you are in, your life is settled. Forever!</span>
//             </p>
//           </div>
//           <div class="logo">
//             <div>
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAADgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAUCAwYEB//EADgQAAEDAwIEAwMJCQAAAAAAAAECAwQABRESIQYTMVEUFUEidIEHNDZhc5GxstMjMjVVVpKTlbP/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMEAP/EACcRAAIBAgMHBQAAAAAAAAAAAAABAgMREiGxQWGBkaHR8AQTMVFx/9oADAMBAAIRAxEAPwD23A7CjA7CiiiA4pdwajvCO2y7JklOvkMJBUE9ySQlI2OMkZwcdKphXmPJW0hxh6MXiQyXdCkuEdQFoUpOdjtnOx7VyQoEa5224IuDXML01/nJKiknQ4UoBwc40JR8KV8PobPyXs8z2UtxHHEq9UKSpSkqH1ggEfWKsoRwv9S1ExO5ssDsKMDsKi0VFpBcGFlIKh2PrUqiOGB2FFFFccFFFKeKJq4NqDjcjw2t9ppT4AJbSpYCiMgjOCcZBoxi5NJAbsrl0i3vJlOSrdISy49jntuI1tu4GArAIIVgYyD0xkHAxyW+wmPGjQ3XGxAjEFqIylWkkHIK1KUpSsHcDYZ65pI1OQpTYd4okoBxzCmUyrT7JJx+wGfawPTY59MV1eKt39Zz/wC5n9KtHtzStfo+xLHF5207msopJwtOVMTcWvGqnNRpQbakLCdS0ltCt9IAOCojoNgKd1CUXF2ZWLurhRRRShIPqKGHFp6pQSPurzqCiVLRAmOPvOBuVBLqnZbyy4txLayQgq0AZX007Y2r0SV81e+zV+FYKyfwZr321/8AJitXp8ovgQq/KNXd7tIt01jmMabcGnHZEopKsaUk6MD93pnUrbbHU1RZp14VKjR58crS7F57zoSUeHWokhvPRexxtuNOT1pbcuI5gfdajpcaCXVDJVEUCkYGN3weoJ3AO+MbVzIv93cWlDbrqlqOEpS3DJJ7AeIrlSeHZzC557SE2M6riG6P811LDlyYjrDUx9lQKmWhqAQoJOM+oNarhuS9M4etkmSvW89FbW4vGNSikZNZ+Rnxlxz189h5/wATNOuEPopZ/cmvyiuq501w0BTynz1G9FFFZS5XK+avfZq/CsNZmHfJQ07DuOHm4UiPIitpVpUhhrB3ONlJOxFbC+Rn5tolxoi9D7rRShWso37ahuM9Mis01ZS02htux3hCEJCUoRflgJA6ADm9K00WlF3fnNEqibkipUWSpRUqPOKickmzx9z99DceShSXGmZwUCFJUmzx8jsQc1emDd45PlzF4jIUPbQuezJBPfLpUR8DiopgXhbbbMpi6uxWxhLDMuPGAwMDdrSrA7ZxVMS+1086iW3Mkll9SW20w7m7IfuLMqRIkMoQnCdI6JOAAlIHwpzwh9FLP7k1+UUm8oX/ACa9f75f6tO+GIDtss7UV5JRpWsttF0ucpsqJSjUeuE4FTqtOFk9u7uxoJqQ1ooorMWP/9k=" />
//               <h3 class="paragrah">Get into our free 3-day bootcamp</h3>
//             </div>
//             <div>
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA4AEADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAQGAwUH/8QAKxAAAgEDAwQBBAEFAAAAAAAAAQIDAAQRBRIhEzFBUYEGFCJhkUJiscHC/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAdEQADAAIDAQEAAAAAAAAAAAAAAQIRMQMSIfDB/9oADAMBAAIRAxEAPwD7bgehTA9ClKYhgehTA9ClSajNKgggtyFmuJOmrkZCAKWLY88KcfsjxQlkCvA9CmB6FY+2m1lNbhs5Z1juLiOWUR9VpWgVT+BlGShV/wC0IQeB2ONTY3H3dnDcbChkQMUJztPkfB4q7jqTNZO+B6FMD0KUqChSlKAFTX9s9wkTwuEngk6kTMMjOCCD+iCR858VTXO4eSOPdDD1W3AbAwU4zyefQycfqmtgzLaNo+u6dK+y7QvO7PcTTQoeoxz+W4Hc2MjAIUYAHArUWlulpaxW8WdkSBFLHJIA8n3UovS1xqMVtIt3PbFB9suEMZZcgFj7758fur6vkqq2TKS0KUpWZQpSlACpr6MHpyiGad0O0RJKVUhsAlhkKwA55z24Gam1nWE0rog2txctMcBYSgI5UZO5gO7CoLq+1pLxbz7CeHT4FHVt3eDdICHLPnecbSI8fkOC3B4xpMU/SKpaINK+mLXSdTN1AsF21j1RHaw2qRtB1XDDYxI7ISOT54x2rWW8CW0KQxmRlQYBkkaRvlmJJ+TXit9T27QWL29pPLLfiTox7o1OUYKQSXAPJGME5HNc7fUtW0uxc6vYXd4yEE3ETQAEELkY3L2YkduwHfvWlrkv2t/fpMuZ0aKlT6fdLfWcVykbxiQZ2PjcvjBwSP4NUVztY8NRSlKAPE+pLC8u3tHsoklMRO5WkCf1o3/B/mu9xPqU0EsQ0wrvQruFyvGR34x/mlKvv4ljQuvuTx4NE1G1OjzKiSPafcdVFmIJ6kquOfPCnOSeffevS1NtTvLGW3TTArPjBa5XHBB/1SlN8rbTa+2JQlou0eCW10y3huFCyqp3KDkAkk4z81ZSlZt5eSksH//Z" />
//               <h3 class="paragrah">
//                 Get our respect by performing well in the bootcamp
//               </h3>
//             </div>
//             <div>
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAA+AEADASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAYBBAUDB//EACgQAAIBBAICAgIBBQAAAAAAAAECAwAEBRESIRMxIlEGQRQVIzJhgf/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAIBEAAgICAQUBAAAAAAAAAAAAAAECEQMxIRJBYXGh8P/aAAwDAQACEQMRAD8A+26H0KaH0KUqSBofQpofQpSgGh9Cmh9ClKAaH0KaH0KUoBSlKAVq388sQhhtgvnnfgjONqmgSWI/egPX7JHr3W1Wrf28syxS2zKLiB+cYckK3RBU67AIJ770dHR1oythk3YZPMPmHsDLHJcxwtM8HmSTxaK8Ul4oOLMrbBB60emAqptZ0urWG4i345o1kXY70RsVMWmKzbZKG5upy8tvDJDDPJDGhCuRtnKO3kYcRocUH7OqqLaCO2toreEERxIEQE+gBoVrl6eK+FI33PSlKViXFKUoDWyc8trjbq4t4vLNFC7pHonkwBIGh2f+VxbK7v5cg1vjcrBkY/4yzySXCpxXmSECeMDo8X3y2R8ezXR/ILw2dijfyls0kmSOS6cqBCp9ttugetAnrZHv1UlkY7efyX9hkZhbJI8CTW7GZ524c3YMrrpVCnrZ2VOwegejFBOPJlOVM62Kv8nc3FukGQiuJ5YZHuop0TxwMjBSE4AN/lsfInob3v36Y/I3bXNsZsgJbia6kt57EKhWPgWBaMgBgBxB2xOwdaBI1zbHAXN3M0EFyLQY8iLzxcv720BHEKymNeLL0G9jXodmlh/HILqCTJRx5O0jEkMZkVRfLokL4z3tiGXS7O9Ee9Vo4xbqO/X7wUTaVvRb0rJ91iuM6BSlKAVI51Le7yUi2GPma6ieYXE8cW1Zv4rgAkfv5xjsDexreqrq5uTtnil/qdnxW5iTUqsSFniHZVtb7HZU66Ox6JrTFKpFJq0SaYu4x0vdtHJbKSZHuLXTOAYQBzXj8j5HAJB6jA10at7SytrEOLSBIuZ23Edsf9mpDD/k6/l80uOtVKKJFlkeSLxlYg29DTtyY6A38QN7/Wqt6vmcuFLZXGltGKUpWBqf/9k=" />
//               <h3 class="paragrah">
//                 Get selected for the 6-months online, live, interactive training
//                 program
//               </h3>
//             </div>
//           </div>
//           <div class="logo">
//             <div>
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAADoDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAIFAQQGAwf/xAA1EAABAwMCBAMFBgcAAAAAAAABAgMEAAUREiEGEzFBFFFhIjJCcYEWIzM1VJFyc5SxsrPS/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAmEQACAgECBQQDAAAAAAAAAAAAAQIREgMxUWFxkfATIUGhsdHh/9oADAMBAAIRAxEAPwD7bSlK0wVoPXeOh1xtlt+Spo4dLKMpQe4KjhOfTORUr4+7Gss99g6XWo7i0HGcEJJBrheOrlbW4j3DSJjcWPFhF1aSvCpC9J5TY7nJwtR77Duato6XqOhJyxR30KfHnBfIUoLbxrbcSULRnplJ3wex6HtWzXM26RHfi8MzYTqFlweGK0fGgNLKk/RTYP09a6aknHF0bGVqxSlKQYUpSgAQFAhQBBGCD3qikWeSIL1uaEeVAdbLQQ+tTbjaCMaQsBWQBsNgR5mvZ+5TJU5+FZ2WFGOdL8mQv2G1kAhISndRwQTukDPXO1QcuNxtamzeGozsRS0tmZGUUaFKUEp1NqzgEkDIUcZ6Y3qsYyW3nncRyR72y1rjLaelOJWtlrksNNghDKNs4zupRwMqPlsBvmzpSpuTbtjJJbClKVhopSvKXJZhRnJMlehptOpSsE/sBuT6ChKwOSt65ku/3OzQ5jsNiJIXJdfZ0a1l0hSU6VBWwOvJwM4Hma0+JZT8AuWkXWXcmpjRiyQ42laohVpws8tA+AqJBOTlParCRMfm8SRVQG12qRyVZcntACYjIwgI1ZJB33wpOemDvbcNc4C5+JU2p7x69ZaBCSdKOgJJrscsak18bc+pz45e1khxHaQMeJc/p3P+ayOJLRkAyygE41LZWlI+ZKcD61KbNuLV4hxo8MORHR968fh653ztjA6g5zgdKcUb8M3YH9E9/gagoxtKt+f8Ktum+BZ0qLP4Lf8ACP7VKpDiqvif8md/ms/7UVaVT8S2h68RmmEOJDIUS8ypxxCXQQQASgg7HfHSn06zTYsrxdGnOucNt66RuI47zsVL4UyHLc461y+WjfUlBT72rqc1qWy6NWiPcFW+1PPQBL1J5AQzyioIGhTbhSpJzv0wQQe9Zc4WlutKadWlbahgpVc5hBHqNdRVwlIXzNfLVzSFOZuUz2yMYJ9vfGB+1dKelVX+vyRa1LswLbHvVqvVykwEJuC3X0sOOpSp2OW06EhKhnGFIJ2PUmtyVOuN6sTsdiySkeNilCHnH2dA1pwFHCycb52Ga1W+FZbSChtSEIJUopTcpgBKiST7/ckk/OsfZWeiNyIkkRtKNDSkXCWQ1tgEJK8HHkdqHKDe/Tl9hjLh52OvQnShKeuABWaJBCQCckDr50rjOg//2Q==" />
//               <h3 class="paragrah">Get trained by industry experts</h3>
//             </div>
//             <div>
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAADEDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAEFBgMEB//EACoQAAICAgEDAwQCAwEAAAAAAAECAwQAEQUSITEGEzIUIlFhQYEVQpGh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAIDBAH/xAAgEQADAAICAgMBAAAAAAAAAAAAAQIREgMhMZFhodHw/9oADAMBAAIRAxEAPwD7bjGM6cGMnWRgAxjGADGMYAMh2CIznelBJ1k4wA+f81XvWbNWxLDenjkpfUTSV6kE4Rid9K+8NBVX+F7nzoneabgpEi+lhrWns07NNbEEjjv26QSPwG6lIXwO+u2gPHf9P3mKJQuzRwJGYkWO17JER/0IMbg68BgFYDts+cteH4wcfEobo6kiSGNI99EMa/FF33P7Y9z+tADTdy4SJKWqLHGMZmKjGMYAM4X7cVCjYuT9XtV4mlfpGzpRs6/5nfMzz/OcZyHGX+Lo3IrFmxVkiT2mDIHYFVVn+KljsDZGyMfjh1XwLdaosRa5w9xw9UD8Nf7/AN6jyqv3+TsWxWlQ1JI5Vjjhq2dmWR1JUtIV0qgK/bpOyB+t9/UnGx2uQjnkguykRBdRwxSRjRJ7B/Dd++vI1+MWeP8A8vYkevWao0mhZW9AJYpwNdJ6A+utdDTfgfz21WdF2/77ErbwT6ev2Gt/Su8k0MizOGnk6pIXjcRuhPh16uogjWh214zRZQekqQPH1eTsCI2Jq6+0kKFIq8RCnojTZAHYEnyT+gAL/J8uN+huPOvYxjGTHPNylU3uNt01lMTTwvGJB5TqBG//AHKPkVoXK6UvUdIUJAvtRWEIMXfQ6Uk1oA9h0OBvxo5pc5XCy1JzHX+oYRt0wbA9w6+Pft38d8eLa6FqcmIgnapCtbnEg5vi4rbw15XqtLP0Kp6n6QG6gjfYT58/rd16SXhmaWfhrvH2BIoDCtXiiZRvf3BQD/Ryq9L0eYrkTwpr6GBaX01xFQN0klhEy/Ffj9x6urwfjvOnM8bS5ueH6Pj5qnKSy6sPJWK+0mvvZj8SwHxZST1a0SN5qvVtzn149fhCcpZwaH0yjR+neMSRWR1qxhlYaIPSPIyyyEUIiou9KABs7P8A3+cnMdPLbNCWFgYxjOHT/9k=" />
//               <h3 class="paragrah">Get certified as a full stack developer</h3>
//             </div>
//             <div>
//               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAUGAwQHAf/EADIQAAEDAwMCBQIDCQAAAAAAAAECAwQABREGEjEhURMUIkFhB3EjMoEVF1JTVWKUodL/xAAZAQACAwEAAAAAAAAAAAAAAAABAgADBAX/xAAiEQEAAgIBBAIDAAAAAAAAAAABAAIDEfAEEiGhMUFRYeH/2gAMAwEAAhEDEQA/AO24HYUwOwpSjBGB2FMDsK8UoJSVKICQMkngCqtOv1wW/Hbgx3lrktKfYjMNo8Xwhj8RanCEpzkYTjPznIDVo2fEChLVgdhTA7CoazXV+QmKJrakiW2VsOLaLSsjqW1oJO1YGT0OCAT0xUzQtVq6ZB3GB2FMDsKUoQxSlKkkwXCOZkCTFCtheZW2FdtwIz/uqRckNTL5FuMtm5mMIJiSmLf4hcYfSrcErDfqwdxweDhJ4Iq/VqyrdCluB2TEZdcSNoWpA3Ads84qzHk7GLevcSvaeVOlRLJFuCnFzYa1PylOHK207VpbSs/zClaSffoc/NrrFGjMRGQzFZbZaGSENpCR89BWWhkt3O5KmjUUpSkjRSlRWpmpb9pcZg3Nm2uOKCTJdGcJ65CeowT3+/3BqbdQLo3MUrU8BiW7Faamy3GTtdMOKt5KFfwkpGM/FQE76p2GI+WRHuDqk5C9rKU7SDgghSgc1C6tnXPTmlm4duudpEdxYY229tSXEggkq3FaucdTz15qsv6Dks2x+4ftBhTTI9Q8s+FE4zwUZx054+a6WHpsCd13w/HNTFlz5R1Ql8jfVS0yn0MRrXdnXVnCW22kKUr7AL61Nu6ytzC2USIl1ZLzgbb8SA4neo8AZHU1S/p3a3YFsbukK5WVqRKSc+baUpxtIJG0EODAOM8VYIi5Mi9KciOx7tdkehyaUlMO3tnlKACcrI5AOe5A6UmXFhLpU8H7/kfHfK1G33LtSlK581xUffGnXYQSxbI1xXvB8CSsJSOfVkpPX9PepCtW5W+Pco4YleL4YUFfhPLaOR8pIPvxTVQRYE2Tlv1NjymbJGVI09b7anzQAdjOpUpR2q9JAQnp78+1aGodTOXPTDa7RL8o2FBM6IqS4p4qIIBSpSjubPYce+a6TJ0RYZSAiUxKfQDkJdnPqAPfBXWt+7nSn9MP+Q7/ANV0cfVYCtSw7OfbMd8GVsonnn4kDoqLMc0vAU1pW1zUFKsSHn0JWv1HkFs/bn2qRlJHmGIl5ZQkFQVH0/avUFdfzukbQU569dqe+TUwzoyyMNJaYbmNNp/KhE99IH2AXUla7RAtKHEwI4bLh3OOKUVrcP8AcpRJP6mqL56Nmxz2+iW1xWKg89TfrylKxzRP/9k=" />
//               <h3 class="paragrah">Get a high-paying job</h3>
//             </div>
//           </div>
//           <div class="logo-bottom">
//             <h3>Get ahead in life</h3>
//             <p>Are you in?</p>
//             <button>Yes! I Want To Join</button>
//             <p>So I Can Get A Well-Paying IT Job In 7 Months</p>
//           </div>
//         </div>
//         <div class="table-section">
//           <h1>HOW MUCH YOU NEED TO INVEST?</h1>
//           <h2>Nothing if you don't get a job. That's right!</h2>
//           <div class="table-section1">
//             <div class="table">
//               <div class="table-heading">
//                 <h3>Full-Stack Developer Training</h3>
//                 <p>Course Duration: 7 Months</p>
//               </div>
//               <div class="table-paragrah">
//                 <p>
//                   Program Fee <strong>₹92,000 </strong>
//                 </p>
//                 <p>42% off: Early adopter discount ₹ 159999</p>
//               </div>
//               <p>
//                 <strong>Pay just </strong> To attend the cours₹ 42,000
//               </p>
//               <p>Pay the balance ₹ 50,000/- only if you get the job.</p>
//               <p>Otherwise we will refund every single rupee back to you!</p>
//             </div>
//           </div>
//           <h3>
//             You pay just ₹ 42,000/- in 2 EMIs during the first month of training
//             period
//           </h3>
//           <p>
//             Only if you get a high paying IT job as we promise, you pay the
//             balance ₹ 99,999/-
//           </p>
//           <h3>ELSE, THE COURSE FEE IS FREE.</h3>
//           <p>
//             You read that right. If you don’t get a job, the training is totally
//             FREE.
//           </p>
//           <p>We will refund every single rupee back to you!</p>
//           <h3>
//             No hidden catches. No deductions. No dilly-dallying.
//             <br />
//             Get a job. Else, get your money back.
//           </h3>
//           <p>Are You in?</p>
//         </div>
//       </div>
//     );
//   }
// }
