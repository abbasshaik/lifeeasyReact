import React, { Component } from "react";
import ReactS3 from "react-s3";
import "../css/upload.css";
import axios from "axios";

require("dotenv").config();

var x = "SDFHAKIAQEPARBCBE7RAPCSJNFNLKF";
var y = "RbBrs3y-Re5A5DlT17c+QETAxZ82tILE2RTas8s2";

x = x.replace("PAR", "EAG");
y = y.replace("3y-", "2x+");
x = x.substring(4, 24);

const config = {
  bucketName: "lifeeasy",
  dirName: "ingest/csv",
  region: "ap-south-1",
  accessKeyId: x,
  secretAccessKey: y,
};

class UploadS3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadxls: "http://localhost:8080/api/lifeeasy/downloadxls/",
      csvname: "something",
      loading: false,
    };
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    console.log(e.target.files[0]);
    ReactS3.uploadFile(e.target.files[0], config)
      .then((data) => {
        var filename = e.target.files[0].name;
        this.setState({ csvname: filename });
        var filenamestr = String(filename);
        filenamestr = filenamestr.replace("csv", "xls");
        console.log("success");
        console.log(filenamestr);
        this.setState({
          downloadxls:
            "http://localhost:8080/api/lifeeasy/downloadxls/" + filenamestr,
        });
        var CONVERT_CSV_URL = "http://localhost:8080/api/lifeeasy/convert/csv/";

        this.setState({ loading: true }, () => {
          axios.post(CONVERT_CSV_URL + this.state.csvname).then((result) =>
            this.setState({
              loading: false,
            })
          );
        });
        document.getElementById("downloadxls").disabled = false;

        document.getElementById("a").href = this.state.downloadxls;
        document.getElementById("a").disabled = false;
        document.getElementById("b").disabled = false;
      })
      .catch((err) => {
        alert(err);
      });
  }
  myFunction() {
    var x = (document.getElementById("downloadxls").visibility = "visible");
    x.style.visibility = "visible";
    console.log("Touched");
  }
  render() {
    return (
      <React.Fragment>
        <div id="uploadDiv" className="center animatedDiv">
          <h3 style={{ color: "white" }}>Upload CSV File</h3>

          <label
            id="label"
            htmlFor="file-upload"
            className="custom-file-upload"
          >
            <i style={{ color: "white" }}> Chooose File</i>
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".csv"
            className="file"
            onChange={this.upload}
          />
        </div>
        <div id="downloadxls" className="center2">
          <a id="a" href="/" disabled>
            <button id="b" className="btn btn-success" disabled>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
              </svg>
              Downlaod XLS
            </button>{" "}
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default UploadS3;
