import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


const NewAuthor = props => {

const [name, setName] = useState("");

const add = e => {
  const auth = {name};
  e.preventDefault();
 
  axios.post("http://localhost:8000/api/author", auth)
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
<form onSubmit={add}>

    
      <input type="text" className="form-control" name="" value={name} onChange={e => setName(e.target.value)} />
 

      <button type="submit" classNam="btn btn-primary" type="submit" >Submit</button>

</form>

</div>

        
    );
}

export default NewAuthor;