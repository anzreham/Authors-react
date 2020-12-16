import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [authors , setAuthors] = useState([]);


    useEffect( () => {
        getAll();
      }, []);
    
      function getAll() {
        axios.get("http://localhost:8000/api/authors")
          .then(res => {
            console.log(res);
            setAuthors((res.data)  
            );
          }).catch(err => console.error(err));
      }


      const remove = _id => {
        axios.delete(`http://localhost:8000/delete/${_id}`)
          .then(res => {
            console.log(res);
            getAll();
          }).catch(err => console.error(err));
      }


    return(

<div class="container p-3 my-3 border">


<h1>Favoriate Authors</h1>
<Link to="/new" className="btn btn-outline-primary">Add Author</Link> 
<p>We have qoutes by </p>  





<table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, idx)=>  
                        <tr key={idx}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={`/edit/${author._id}`}><button type="button" className="btn btn-sm btn-info mr-2">Edit</button></Link>
                            <button type="button" className="btn btn-sm btn-danger" onClick={e => remove(author._id)}>Delete</button>
                        </td>
                        </tr>
                    )}
                </tbody>
            </table>
</div>
    )
}