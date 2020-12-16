import React, { useEffect, useState } from 'react'
import axios from 'axios';

import NewAuthor from '../components/addauthor.jsx'
import Allauthors from '../components/allauthors';
export default () => {

    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            });
    },[])
        

    return (
        <div>
            
            <NewAuthor/>
            <hr/>
           {loaded && <Allauthors authors={authors}/>}

        </div>
    )
}
