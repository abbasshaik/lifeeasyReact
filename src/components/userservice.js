import axios from 'axios';

const CONVERT_CSV_URL = "http://localhost:8080/api/lifeeasy/convert/csv/";
const DOWNLOAD_XLS = "http://localhost:8080/api/lifeeasy/downloadxls/addresses.xls";

class UserService{

    convercsv(fileName){
         axios.post(CONVERT_CSV_URL+fileName);
    }
    downloadxls(){
        
        axios.get(DOWNLOAD_XLS);

    }
}

export default new UserService()