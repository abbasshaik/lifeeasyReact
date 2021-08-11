import './App.css';
import React from 'react';
import UploadS3 from './upload';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar'
function App() {
  return (
  <React.Fragment>
    < NavBar/>
    < UploadS3/>
  </React.Fragment>
  );
}

export default App;
