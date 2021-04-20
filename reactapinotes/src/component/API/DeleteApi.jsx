import React from "react";

const DeleteApi = () => {
  const [setdate, setdata] = useState([]);

  useEffect(() => {
   getUser()
  }, []); // empty array show its call once only


  function getUser() {
    fetch("http://localhost/todo").then((result) =>
    result.json().then((resp) => console.log("resp", resp))
  );
  }

   function deleteUser(id) {
       fetch(`http://localhost/.. ${id}`, {
           method:"DELETE",

   
       }).then((result=> result.json()).then((resp=>console.log("result",resp) 
    //    getUser() it call again after delete the api
       )))
   }


  return (
    <div className="App">
       <h1>Delete Api</h1>
    
      <table border="1">
        
        <tbody>
          
          <tr>
             <td>ID</td>
             <td>Name</td>
             <td>Email</td>
             <td>Mobile</td>
            <td>Operations</td>
          </tr>
        
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.userId}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td><button onClick={deleteUser} >Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteApi;
