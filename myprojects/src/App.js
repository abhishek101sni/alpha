
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import DetailsPage from './Components/DetailsPage';
import Home from './Components/Home';


// function App() {
//   const students = [  
//     {  
//       'id': 1,   
//       'name': 'Aayush',   
//       'email': 'aayush@gmail.com'  
//     },  
//     {  
//       'id': 2,   
//       'name': 'Aashish',   
//       'email':'aashish@gmail.com'  
//     },
//     {  
//       'id': 3,   
//       'name': 'Shubham',   
//       'email': 'shubham@gmail.com'  
//     },  
// ];  

// return(
//   <div className="container">  
//   <h1> Example of React Map Loop </h1>  

//   <table className="table table-bordered">  <br></br>
//       <tr>  
//           <th>ID</th>  
//           <th>Name</th>  
//           <th>Email</th>  
//       </tr>  

//       {students.map((student, index) => (  
//         <tr data-index={index}>  
//           <td>{student.id}</td>  
//           <td>{student.name}</td>  
//           <td>{student.email}</td>  
//         </tr>  
//       ))}  <br></br>
// <button onClick={() => alert("Form is sSumbit")}>submit</button>
//   </table>  

// </div>  
 
// );
// }
import CategorySection from './Components/CategorySection';
const App=()=>{
  return(
    <>
    <Navbar/>
    <CategorySection/>
    {/* <DetailsPage/> */}
    </>
  )
}
export default App;
