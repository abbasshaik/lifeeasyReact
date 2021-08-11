import React from "react";
import UploadS3 from "./upload";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import SimpleTabs from "./Tab";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <SimpleTabs />
    </React.Fragment>
  );
}

export default App;
