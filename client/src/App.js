import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import NewAuthor from './components/addauthor';
import Allauthors from './components/allauthors';
import EditAuthor from './components/edit';
import React, {useEffect, useState} from 'react';
import Main from './views/Main.js';
import axios from 'axios';

function App() {

  


  return (

    
    <div className="App">

 
        
    
< Router>
<Allauthors path="/" />  
<NewAuthor   path ="/new" />
<EditAuthor  path="/edit/:_id/"  />
 </Router>
    </div>
  );
}

export default App;
