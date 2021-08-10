import React, { Component } from "react";
import ReactS3 from 'react-s3';


const config = {
  bucketName: 'lifeeasy',
  dirName: 'ingest/csv',
  region: 'ap-south-1',
  accessKeyId: 'AKIAQEEAGBCBODYSBEVX',
  secretAccessKey: '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',
}


class UploadS3 extends Component {
    upload(e){
      console.log(e.target.files[0]);
      ReactS3.uploadFile(e.target.files[0],config).then((data)=>{
      console.log("success");
      })
      .catch((err) => {
        alert(err);
      })
    }
  render() {
    return (
    <div>
      <h3>
        Upload CSV File
      </h3>
      <input type="file"
    onChange={this.upload}/>
    </div>
    );
  }
}

export default UploadS3;
