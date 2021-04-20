 
// import React,{useEffect,useState} from 'react'
// function App() {
//   const [users,setUser]=useState([])
//   useEffect(()=>{
//     fetch("http://localhost:4000/todo").then((result)=>{
//       result.json().then((resp)=>{
//         // console.warn(resp)
//         setUser(resp)
//       })
//     })
//   },[])
//   console.warn(users)
//   return (
//     <div className="App">
//       <h1>Get API Call </h1>
//       <table border="1">
//        <tbody>
//        <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Mobile</td>
//         </tr>
//         {
//           users.map((item,i)=>
//             <tr key={i}>
//             <td>{item.userId}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//             <td>{item.mobile}</td>
//           </tr>
//           )
//         }
//        </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;
// import React, {useState,useEffect} from 'react'


// const PostApi = () => {

//     const[name,setName] = useState("")
//     const[email,setEmail] = useState("")
//     const[num,setNum] = useState("")


//     function saveUser()
//     {
//         let data={name,email,num}
//       // console.warn(data);
//         fetch("http://localhost:4000/todo", {
//           method: "POST",
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body:JSON.stringify(data)
//         }).then((resp)=>{
//           // console.warn("resp",resp);;
//           resp.json().then((result)=>{
//             console.warn("result",result)
//           })
//         })
//       }





//     return ( 
//         <div>
//             <h1>POST API</h1>
//             <input type="text" name="name" value= {name} onChange={(e)=>setName(e.target.value)}   /><br /> <br />
//             <input type="text" name="email" value= {email} onChange={(e)=>setEmail(e.target.value)}   /><br /> <br />
//             <input type="text" name="name" value= {num} onChange={(e)=>setNum(e.target.value)}   /><br /> <br />
//             <button type="button" onClick={saveUser}>Save New Users</button>
//         </div>
//      );
// }
 
// export default PostApi;
