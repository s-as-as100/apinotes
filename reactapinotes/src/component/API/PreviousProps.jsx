// // import React,{useEffect,useRef} from 'react'
// // function Child(props)
// // {
// //     const lastVal=useRef();
// //     useEffect(()=>{
// //         lastVal.current=props.count
// //     })
// //     const previousProps=lastVal.current
// //     return(
// //         <div>
// //             <h1>Count is  : {props.count}</h1>
// //             <h1>previous Props is  : {previousProps}</h1>

// //         </div>
// //     )
// // }

// // export default Child

// import './App.css';
// import React from 'react'
// import Child from './Child'
// function App() {
//   const [count,setCount]=React.useState(0)
//   return (
//     <div className="App">
//       <Child count={count} />
//       <button onClick={()=>{setCount( Math.floor(Math.random()*10) )}} >Update Counter</button>
//     </div>
//   );
// }



// export default App;