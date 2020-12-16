import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


const EditAuthor = props => {

const [name, setName] = useState("");

const edit = e => {
  const auth = {name};
  e.preventDefault();
 
  axios.put(`http://localhost:8000/edit/${props._id}`, auth)
    .then(auth => {
      console.log(auth);
      if(auth.data.errors) {
       // setErrors(auth.data.errors);
      } else {
        navigate("/");
      }
    }).catch(err => {
      console.error(err);
    });
}
    return(

      <div class="container p-3 my-3 border">     
<form onSubmit={edit}>
   <h1>Edit</h1>
    
      <input type="text" className="form-control" name="" value={name} onChange={e => setName(e.target.value)} />
 

      <button type="submit" classNam="btn btn-primary" type="submit" >Edit</button>

</form>

</div>

        
    );
}

export default EditAuthor;