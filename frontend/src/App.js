
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Info from './components/Info';
import AddStudent from './components/AddStudent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Info' element={<Info />} />
          <Route path='/AddStudent' element={<AddStudent />} />
        </Routes>
      </Router>
      {/* <Navbar /> */}
    </div>
  )
}



// class Data extends Component {
//   state = {
//     student: []
//   };

//   async componentDidMount() {
//     const response = await fetch('http://localhost:8080/v1/getAllStudent');
//     const body = await response.json();
//     this.setState({ student: body });
//     console.log(this.state)
//   }


//   render() {
//     const { student } = this.state;

//     return (
//       <div className="Data">
//         {/* <Navbar /> */}
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path='/Home' element={<Home />} />
//             <Route path="/Contact" element={<Contact />} />
//             <Route path='/About' element={<About />} />
//           </Routes>
//         </Router>
//         {/* <Navbar /> */}

//         <TableContainer component={Paper}>
//           <Table aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell >ID</TableCell>
//                 <TableCell  >Name</TableCell>
//                 <TableCell >Email</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {student.map((student) => (
//                 <TableRow
//                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                   <TableCell>{student.id}</TableCell>
//                   <TableCell>{student.name}</TableCell>
//                   <TableCell>{student.email}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* table */}
//       </div>

//     );
//   }
// }
// export default Data;

