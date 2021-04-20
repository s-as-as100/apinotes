import React, {useState,useEffect} from 'react'


const PostApi = () => {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[num,setNum] = useState("")

   function saveData() {
       console.log("userclick")
   }



    return ( 
        <div>
            <h1>POST API</h1>
            <input type="text" name="name" value= {name} onChange={(e)=>setName(e.target.value)}   /><br /> <br />
            <input type="text" name="email" value= {email} onChange={(e)=>setEmail(e.target.value)}   /><br /> <br />
            <input type="text" name="name" value= {num} onChange={(e)=>setNum(e.target.value)}   /><br /> <br />
            <button type="button" onClick={saveData}>Save New Users</button>
        </div>
     );
}
 
export default PostApi;