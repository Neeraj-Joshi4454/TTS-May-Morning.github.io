import React from 'react';
import {useState} from 'react'

// with number
// with String
// with array
// with object
// with array of object

// const State = () => {

//     const [count, setCount] = useState(0);

//     const incCount = () => {
//         setCount(count + 1)
//     }
//     const decCount = () => {
//         setCount(count - 1)
//     }

//   return (
//     <>
//         <div className='m-auto'>
//             <button className='bg-black shadow-md text-white p-2 rounded-md m-2' onClick={incCount}>Increment</button>
//             <h3 className='text-center w-[60px] text-2xl'>{count}</h3>
//             <button className='bg-black shadow-md text-white p-2 rounded-md m-2' onClick={decCount}>Decrement</button>
//         </div>
    
//     </>
//   )
// }

// export default State

// import React, {useState} from 'react'

// const State = () => {

//  const [name , setName] = useState("Felix");

//  const changeName = () => {
//     setName("ITS")
//  }


//   return (
//     <>
//         <h1 className='text-4xl'>Hello from {name}</h1>
//         <button className='bg-red-700 text-white p-2 rounded-md m-2' onClick={changeName}>Change Name</button>
//     </>
//   )
// }

// export default State



// import React, {useState} from 'react'

// const State = () => {

//     const [ course , setCourse ] = useState(["MERN", "MEAN"])

//     const addCourse = () => {

//         const courseName = window.prompt('Enter the course name');
//         setCourse([...course, courseName])
//     }
//   return (
//     <>
//         <ul>
//             {
//                 course.map((val, index) => {
//                     return(
//                         <li key={index}>
//                             {val}
//                         </li>
//                     );
//                 })
//             }    
            
//         </ul>  

//         <button className='bg-red-700 text-white p-2 rounded-md m-2' onClick={addCourse}>Add Course</button>

//     </>
//   )
// }

// export default State



import React, {useState} from 'react'

const State = () => {

  const [students, setStudents] = useState([{name : "jhon", course:"MERN"}]);

  const addStudent = () => {
    const name = window.prompt('Enter the name of student : ');
    const course = window.prompt('Enter the course of student : ');

    setStudents([...students, {name , course}]);

  }

  return (

    <>
        <ul>
            {
                students.map((val, i) => {
                    return(
                        <li key={i}>
                            Student Name : {val.name} and course is : {val.course}
                        </li>
                    );
                })
            }
        </ul>
        <button className='bg-red-700 text-white p-2 rounded-md m-2' onClick={addStudent}>Add Course</button>
    
    </>

  )
}

export default State