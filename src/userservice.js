import axios from 'axios';

const CONVERT_CSV_URL = "http://localhost:8080/api/lifeeasy/convert/csv";

class UserService{

    convercsv(){
        axios.get(CONVERT_CSV_URL);
    }
}

export default new UserService()