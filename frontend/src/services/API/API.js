import API_Autorization from "./Login/API_Login"
import API_Users from "./Login/API_Users";

const API_URL = "http://localhost:3306"

export default new class API {
    Autroization = new API_Autorization(API_URL);
    Users = new API_Users(API_URL);
}